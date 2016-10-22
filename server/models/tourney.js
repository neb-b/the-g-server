import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tourneySchema = new Schema({
  name: { type: 'String', required: true },
  schedule: { type: 'String', required: false },
  teams: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Tourney', tourneySchema);
