const { Library } = require("./Library");

const collection = new Library("mongodb://localhost:27017", "library", "books");
collection.test();

async function main() {
  await collection.addBook({
    title: "Eloquent Javascript",
    author: "Marijn Haverbeke",
    copies: 1,
  });

  const allBooks = await collection.allBooks();
  allBooks.forEach((book) => console.log(book));

  const findOneBook = await collection.findOneBook("66048eebd53290503a74019e");
  console.log(findOneBook);

  const findManyBooks = await collection.findBooks({ title: "Javascript" });
  findManyBooks.forEach((book) => console.log(book));

  await collection.changeBook("66048eebd53290503a74019e", {
    title: "Eloquest HTML",
  });
}
main();
