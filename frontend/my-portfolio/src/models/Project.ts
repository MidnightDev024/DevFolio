import mongoose, { Schema, Document, models } from 'mongoose';

// Define the structure of a single component
const ComponentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  annotation: { type: String, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  size: { type: String },
});

// Define the main project structure
export interface IProject extends Document {
  title: string;
  description: string;
  mainImage: string;
  components: any[]; // You can define a stricter type if you wish
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainImage: { type: String, required: true },
  components: [ComponentSchema],
});

// Avoid recompiling the model if it already exists
export default models.Project || mongoose.model<IProject>('Project', ProjectSchema);