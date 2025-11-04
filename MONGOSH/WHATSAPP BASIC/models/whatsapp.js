const mongoose = require("mongoose");

const whatsappSchema = new mongoose.Schema({
        from:{
            type:String,
            required: true,
        },
        to:{
            type:String,
            require:true,
        },
        msg:{
            type:String,
            maxLength: 50,
        },
        created_at:{
            type: Date,
            require:true,
        }
});


const Chat = mongoose.model("Chat",whatsappSchema);

module.exports = Chat;