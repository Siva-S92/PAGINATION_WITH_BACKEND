import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        trim: true,
    },

    id: {
        type: Number,
        required: true,
        trim: true,
    },

    title: {
        type: String,
        required: true,
        trim: true,
    },

    body: {
        type: String,
        required: true,
        trim: true,
    }
})

const Content = mongoose.model("contents", contentSchema)
export {Content}

