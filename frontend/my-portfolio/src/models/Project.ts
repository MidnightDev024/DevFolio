import mongoose, { Schema, models, Document } from 'mongoose';

export interface IProjectComponentPosition {
  x: number;
  y: number;
}

export interface IProjectComponent {
  id: string;
  name: string;
  annotation: string;
  image: string;
  size: 'small' | 'large';
  position: IProjectComponentPosition;
}

export interface IProject extends Document {
  title: string;
  description: string;
  mainImage: string;
  components?: IProjectComponent[];
}

const ProjectComponentPositionSchema = new Schema<IProjectComponentPosition>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
}, { _id: false });

const ProjectComponentSchema = new Schema<IProjectComponent>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  annotation: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String, enum: ['small', 'large'], required: true },
  position: { type: ProjectComponentPositionSchema, required: true },
}, { _id: false });

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  components: { type: [ProjectComponentSchema], default: [] },
}, {
  // This is important: it tells Mongoose to use the 'projects' collection
  collection: 'projects' 
});

const Project = models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;