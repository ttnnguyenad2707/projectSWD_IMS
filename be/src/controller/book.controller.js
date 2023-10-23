const Book = require("../models/book");

const book = {
    getAllBook: async (req, res) => {
        res.send("All book")
    },
    createBook: async (req, res) => {
        try {


            const result =await Book.create({
                title: "Clean Code",
                author: "Robert Cecil Martin",
                release_date: "2021-12-14",
                subject: 3
            })
            return res.status(200).json(result)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = book