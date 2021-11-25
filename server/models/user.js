let mongoose = require('mongoose');

let UserSchema = mongoose.Schema ({
    _id: String,
    username: String,
    password: String,
    displayName: String
},
{
  collection: "users"
});

UserSchema.pre('save', async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
   // const compare = await bcrypt.compare(password, user.password);
    const compare = password === user.password? true: false;
    return compare;
}


const Model = mongoose.model('User', UserSchema);



module.exports = Model;
