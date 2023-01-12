const express = require("express");
require("./db/conn");
// const User = require("./models/schema/user");
const User = require("./models/schema/user")
const app = express();
const bodyParser = require('body-parser');
//const multer = require('multer');
const port = 5741;
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


//creat a new user using asyc aproatch

app.post("/users", async (req, res)=>{

    try{
        const user = new User(req.body);
        console.log(user)
        await user.save();
        res.status(200).send(user);
    }catch(err){
        res.status(401).send(err)
        console.log(err)
    }
});






//read user data

app.get("/users", async (req, res) => {
  try {
    const userGetData1 = await User.find();
    res.send(userGetData1);
  } catch (err) {
    res.send(err);
  }
});

//get indivisiul user data by id

app.get("/users/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const userDataSingle = await User.findById({ _id });

    if (!userDataSingle) {
      return res.send();
    } else {
      res.send(userDataSingle);
    }
  } catch (err) {
    res.send(err);
  }
});

//delete user data

app.delete("/users/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const userDelete = await User.findByIdAndDelete({ _id });
    if (!userDelete) {
      return res.send();
    }
    res.send(userDelete);
  } catch (err) {
    res.status(400).send(err);
  }
});

//update with patch request
app.patch("/users/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const userUpdate = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(userUpdate);
  } catch (err) {
    res.send(err);
  }
});


app.listen(2014, () => {
  console.log(`my port is localhost:2014`);
});
