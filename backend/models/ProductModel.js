const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please Enter Product name"]
    },
    description : {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    Price : {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceeds 8 charachters"]
    },
    ratings:{
        type: Number,
        default: 0
    },
    images: [{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }],
    category:{
        type: String,
        required:[ true, "Please enter Product Category"]
    },
    stock:{
        type: Number,
        required:[ true, "Please enter Product Stock"],
        maxLength: [3, "Stock cannot exceeds 4 digits"],
        default : 1
    },
    numOfReviews:{
        type: Number,
        default :0
    },
    review:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    createdAt:{
        type:Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Product", productSchema);