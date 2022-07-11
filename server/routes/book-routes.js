const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);       // get whole data/read
router.post("/",booksController.addBooks);          // create
router.get('/:id',booksController.getById);         // find by parameter
router.put('/:id',booksController.updateBooks);     // update
router.delete('/:id',booksController.deleteBooks);  // delete

module.exports = router;