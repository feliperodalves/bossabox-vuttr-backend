import mongoose from 'mongoose';

const ToolsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tags' }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Tools', ToolsSchema);
