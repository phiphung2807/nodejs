

import mongoose from 'mongoose';

const { Schema } = mongoose;

const imagesSchema = new Schema(
    {
        base_url: {
            type: String,
            required: true,
        }
    },
    {
        _id: false,
    },
);

const attributeSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
    },
);

const specificationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        attributes: [attributeSchema],
    },
    {
        _id: false,
    },
);

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        // categoryId: {
        //     type: Schema.ObjectId,
        //     ref: 'categories',
        // },
        price: {
            type: Number,
            default: null,
        },
        original_price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images: [imagesSchema],
        // brandId: {
        //     type: Schema.ObjectId,
        //     ref: 'brands',
        // },
        // specifications: [specificationSchema],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { versionKey: false },
);

productSchema.index({
    name: 'text',
    description: 'text',
});
export default mongoose.model("Product", productSchema);
