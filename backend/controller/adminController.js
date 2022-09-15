const Details =require("../ModelSchema/userModel");

const detail =(async (req,res)=>{
    const details = await Details.find();

         if (details) {
            res.json({ details });
            console.log(details);
        } else {
            res.status(400);
            throw new Error( "Details list not available");
        }
})

module.exports = {detail}