import { Document } from 'mongoose';

export interface Survey extends Document {
    readonly conditions: object;
    readonly created_at: Date;
}
