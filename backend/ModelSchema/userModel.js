const mongoose =require ("mongoose")


const detailSchema = mongoose.Schema(
    {
        firstname:{
            type:String,
            requried:true
        },
        lastname: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        requirement: {
            type: String,
            required: true,
        }
    }
)


const Details = mongoose.model("Details", detailSchema);
module.exports = Details;