"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    postlike: { type: [String], required: true },
    hashedPassword: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('User', UserSchema);
