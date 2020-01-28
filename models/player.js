const mongoose = require('mongoose')
const  playerSchema = new mongoose.Schema({
    status:{
         type:String,
         required:true
    },
    name:{
        type: String,
        required:true
    },
    enemy_id:{
      type: String,
      required: true
    },
    enemy_name:{
      type: String,
      required: true
    },
    move_turn:{
        type: Boolean,
        required:true
    },
    reply:{
        type: Object,
        required:true
    },
    x:{
        type: Number,
        required:true
    },
    y:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('Player', playerSchema)