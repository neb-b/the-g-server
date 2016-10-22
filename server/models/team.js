import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: { type: 'String', required: true },
  members: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Team', teamSchema);
