import mongoose from "mongoose";

const projectScchema = new mongoose.Schema({
    type: String, 
    required : true, 
    description: String,
    techSatck: [String],
    repoLink: String,
    liveLink: String,
    image: String
}, { timestamps: true })


export default mongoose.model('project', projectScchema)