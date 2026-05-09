import mongoose from "mongoose";

const SpecSchema = new mongoose.Schema({
  label: String,
  value: String,
});

const ImageSchema = new mongoose.Schema({
  src: String,
  alt: String,
});

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    metaTitle: {
      type: String,
    },

    metaDescription: {
      type: String,
    },

    overview: {
      type: String,
    },

    // JODIT HTML CONTENT
   description: {
  type: String,
},

    specs: [SpecSchema],

    images: [ImageSchema],

    images360: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);