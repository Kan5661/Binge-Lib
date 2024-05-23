import { BOOKS } from "@consumet/extensions"

const fetchBooks = async (query) => {
    const books = new BOOKS.Libgen()
    const results = await books.search(query.title)
    console.log(results)
}

const addBook = async (book) => {
    console.log(book);
}

const deleteBook = async (book) => {
    console.log(book);
}

const updateBook = async (book) => {
    console.log(book);
}

export { fetchBooks, addBook, deleteBook, updateBook }