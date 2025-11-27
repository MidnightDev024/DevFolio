import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IProjectComponent {
  id?: string;
  name: string;
  image?: string;
  annotation?: string;
  position?: { x: number; y: number };
  mobilePosition?: { x: number; y: number };
  size?: string;
}

export interface IProject extends Document {
  title: string;
  description: string;
  mainImage: string;  
  liveLink?: string;
  tags: string[];
  features: string[];
  components: {
    id: string;
    name: string;
    image: string;
    annotation: string;
    position: { x: number; y: number };
    mobilePosition?: { x: number; y: number };
    size?: string;
  }[];
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  liveLink: String,
  tags: [String],
  features: [String],
  components: {
    type: [{
      _id: false,
      id: String,
      name: String,
      image: String,
      annotation: String,
      size: String,
      position: {
        type: { x: Number, y: Number },
        _id: false,
      },
      mobilePosition: {
        type: { x: Number, y: Number },
        _id: false,
      },
    }],
    default: [],
  },
}, {
  collection: 'projects' 
});

const Project = models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;