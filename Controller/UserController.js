const userModel = require('../Model/UserModel');
const Profile = require('../Model/UserProfileImage');

const newUser = async (req, res) => {
  // return false;
  const image = req.files.profileImage;
   console.log(image)
    const checkUserExist = await userModel.find({'email':req.body.email})
    if(checkUserExist.length == 1){
     return res.send("User with same email already exist");
    }
    
    const user = new userModel(req.body);
    try {
      await user.save();
      // If no image submitted, exit
      if (!image) return res.sendStatus(400);
      // Move the uploaded image to our upload folder
      image.mv('/nodelear/public/data/uploads/' + image.name);
      const userPic = new Profile({
          title:req.body.title,
          description:req.body.description,
          userpic:'/nodelear/public/data/uploads/' + image.name,
          user_id:user._id.toString().substring(0,100)
      })
      await userPic.save()
     return res.send(user);
    } catch (error) {
      return  res.status(500).send(error);
    }
};

const allUser = async(req,res)=>{
  const getUsers = await userModel.find().populate('user_profile');
  try{
    res.send(getUsers);
  }catch (error){
    res.status(500).send(error);
  }
}

const deleteUser = async(req,res)=>{
  
  deletedUser =await userModel.findOneAndDelete({'_id':req.body.id})
  try{
    res.send("User Deleted");
  }catch (error){
    res.status(500).send(error);
  }
}

const updateUser = async(req,res)=>{
    updateSingleUser = await userModel.findOneAndUpdate({"_id":req.body.id},{$set: { name : req.body.name}})
    try{
      res.send("User Updated");
    }catch (error){
      res.status(500).send(error);
    }
}

module.exports = {newUser,allUser,deleteUser,updateUser};