const Details =require("../ModelSchema/userModel");

const adddetails = async (req, res) => {
  const { firstname, email, lastname, phone, requirement } = req.body;
  console.log(req.body);
  const detail = await Details.create({
   
    email, 
     firstname,
    lastname,
    phone,
    requirement,
  });
  };
module.exports = { adddetails };
