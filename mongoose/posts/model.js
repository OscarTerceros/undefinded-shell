import mongoose from 'mongoose';
import { postSchema } from './schema';

export const postModel = mongoose.model('post', postSchema);

