import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const notesSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true, default: '' },
    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

notesSchema.index({ title: 'text', content: 'text' });

export const Note = model('Note', notesSchema);
