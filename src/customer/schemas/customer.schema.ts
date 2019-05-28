import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    last_name: String,
    first_name: String,
    middle_name: String,
    email: String,
    phone: String,
    address: String,
    additionalInfo: String,
    status: String,
    created_at: { type: Date, default: Date.now }
})
