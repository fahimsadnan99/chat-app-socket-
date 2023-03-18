const {model,Schema} = require("mongoose")


const ChatSchema = new Schema({
    isGroupChat : {
        type : Boolean,
        required : true,
        enum : [false,true],
        default : false,
        trim : true
    },
    users : [ {
        type : Schema.Types.ObjectId,
        ref : "User",
        trim : true
    }],

    latestMsg : [{
        type : Schema.Types.ObjectId,
        ref : "Message",
    }],

    chatName : {
        type : String,
        required : true,
        trim : true
    },
    groupAdim : {
        type : Schema.Types.ObjectId,
        ref : "User",
        trim : true
    }

},{
    timestamps : true
})


module.exports = model("Chat",ChatSchema)