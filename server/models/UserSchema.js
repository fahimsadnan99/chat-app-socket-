const {model,Schema} = require("mongoose")
const JW = require("jsonwebtoken")


const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        min : [3,"name minimum 3 latter"],
        max : [25, "Name maximum 25 latter"],
        trim : true
    },
    email : {
        type : String,
        required : true,
        min : [8,"Email minimum 8 latter"],
        max : [50, "Email maximum 50 latter"],
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    img : {
        type : String,
        default : "https://robohash.org/df69d9f0dd095272aea947c872853e54?set=set4&bgset=&size=400x400"
    }
})


UserSchema.methods.generateJWT = function(){
    let token = JW.sign({_id  : this._id, name : this.name, email : this.email}, process.env.TOKEN,
    { expiresIn: "27d" })
    return token
}

module.exports = model("User", UserSchema)