import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        title : {type : String, required : true},
        author : {type : String, required : true},
        theme : {type : String, required : true},
        date : {type : Date, required : true}
    }
)

const BookScheme = mongoose.models.books || mongoose.model('books', Schema)

export default BookScheme