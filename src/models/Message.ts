import mongoose, { Schema, Document, models } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const MessageSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { 
  timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

export default models.Message || mongoose.model<IMessage>('Message', MessageSchema);