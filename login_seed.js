const mongoose = require('mongoose');
const Login = require('./models/login');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
            .then(() => {
                return Login.deleteMany({});
            })
            .then(() => {
                const login = [
                    {
                        islogin: false
                    }
                ];

                return Login.insertMany(login);
            })
            .then(() => {
                console.log('DB Started Working..');
            })
            .catch((err) => {
                console.log('Something Went Wrong!!', err);
            });


// Login.deleteMany({})
//     // .then(()=> console.log('Deleted everything in the collection!!'));

// Login.insertMany(login)
//     .then(()=>console.log('Details Seeded'))
//     // .catch((err)=>console.log('Something Went Wrong!!'));
