import mongoose from "mongoose";

const { Schema } = mongoose;
const blogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    comments: [
      {
        personId: Schema.Types.ObjectId,
        personName: "String",
        comment: "String",
        // createdAt: new Date(),
      },
    ],
    likes: [
      {
        personId: Schema.Types.ObjectId,
        //  createdAt: new Date(),
      },
    ],
    tags: {
      type: Array,
    },
  },
  { timeStamp: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
