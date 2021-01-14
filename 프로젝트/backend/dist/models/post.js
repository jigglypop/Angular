"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: false },
    publishedDate: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.model('Post', PostSchema);
