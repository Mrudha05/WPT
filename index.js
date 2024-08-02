const express = require('express');
const bodyParser = require('body-parser');

const app =express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let users =[]

app.post('/new',(req,res) =>{
    const {userName,gender,dob} = req.body;

    const newUser ={userName,gender,dob};
    users.push(newUser);
    res.json({message :"New user added",user:newUser});

});

app.post('/list',(req,res)=>{
    const newUsers = req.body.users;
    const addedUsers = [];
  const errors = [];
  
    res.json({users});
    newUsers.forEach(user => {
        const { username, gender, dob } = user;
        if (username && gender && dob) {
          users.push({ username, gender, dob });
          addedUsers.push(user);
        } else {
          errors.push({ user, error: 'Missing required fields.' });
        }
      });
});

app.listen(PORT,()=>
{
    console.log(`Server is running on htttp://localhost:${PORT}`);

});
