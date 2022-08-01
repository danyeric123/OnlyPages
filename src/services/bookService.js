/**
 * Base URL for search: https://www.googleapis.com/books/v1/volumes?q=
 *
 * You can get a book based on the id by doing: https://www.googleapis.com/books/v1/volumes/volumeId
 * example: https://www.googleapis.com/books/v1/volumes/haFFCgAAQBAJ
 * You can get a book based on subject category by doing: https://www.googleapis.com/books/v1/volumes/?q=searchterm+subject:categoryterm--Katia
 * example: https://www.googleapis.com/books/v1/volumes?q=birds+subject:nature
 */

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export function searchAllBooks(query) {
  return fetch(`${BASE_URL}?q=${query}`).then((res) => res.json());
}

export function searchOneBook(id) {
  return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
}

//search by subject? we'd need a second input to get this as a second parameter, the way i understand it you have to have a search term and a subject term not just search by subject term alone
/* export function searchCategory(query, subject) {
  return fetch(`${BASE_URL}?q=${query}&subject:${subject}`)
  .then(res => res.json())
} */
