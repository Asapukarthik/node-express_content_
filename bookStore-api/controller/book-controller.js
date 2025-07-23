
const { mongo, default: mongoose } = require('mongoose');
const BooksData = require('../model/book')

async function getAllBoooks(req,res){

    const allBooks = BooksData.find({})
    return res.status(200).json(allBooks);

}

async function getOneBook(req,res){
    const id =req.params.id
    const Book = await BooksData.findById(id)
    return res.json(Book)
}

async function createBook(req,res){
    const body = req.body
    // const newBook = await BooksData.create({
    //     title : body.title,
    //     Auther : body.Auther,
    //     year : body.year,
    // })

    const newBook = await BooksData.create(body);
    console.log(newBook);
    return res.status(201).json({ msg: "success" , id : newBook._id});
}

module.exports = {getAllBoooks,createBook,getOneBook}