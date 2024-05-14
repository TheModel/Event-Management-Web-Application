import mongoose from "mongoose";

const eventSchema = new  mongoose.Schema(
    {
        title:{ type: String , required: true},
        date:{type: Date , required:true},
        reminder:{type: Boolean , default:false}
    }
)

const Event = eventSchema.model('Event',eventSchema);

export{
    Event
}