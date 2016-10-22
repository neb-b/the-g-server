import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: 'String', required: true },
  secondName: { type: 'String', required: true },
  username: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('User', userSchema);
