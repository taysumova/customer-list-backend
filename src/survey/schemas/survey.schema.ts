import * as mongoose from 'mongoose';

export const SurveySchema = new mongoose.Schema({
    option_title: String,
    title: String,
    type: String,
    value: String,
    selectedOps: Array,
    created_at: { type: Date, default: Date.now }
})
