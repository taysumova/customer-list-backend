import * as mongoose from 'mongoose';

export const SurveySchema = new mongoose.Schema({
    conditions: Array,
    created_at: { type: Date, default: Date.now }
})
