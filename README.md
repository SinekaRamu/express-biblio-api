# express-myimdb-api

1.  Initial steps to create api, which runs in node.

2.  `npm init -y` creates package.json

3.  download express frameword `npm i express`

4.  `echo node_modules >> .gitignore` creates .gitignore files and write node_modules

5.  create a application folder mkdir app with index.js file.

6.  Install the Dev dependencies `npm i -D nodemon`

    - `npm i morgan joi dotenv uuid` install the dependencies.
    - morgan prints the http log in the terminal
    - joi used to validate the user data given to the api.
    - dotenv used to maintain the secret files that should not pushed to the git repo, confidential datas.
    - uuid used to create unique id.
    - change the script in package.json to "start": "node app" and "dev": "nodemon"

7.  creating port in .env
    .env is created in the main folder and it must be included in the .gitignore file.

## 1. get/books

- get the array of objects with id, title and isbn.

## 2. post/books

- adding movie with title and isbn with validaton for isbn-10
- error handler for the next(arg)

## 3. post /books/:bookid/rating

add rating within the range 0 to 5

```
const rating = [
    {
        rateId,
        rating,
        bookId,
    }
]
```

## 4. GET /books/:bookid

find the rating provided for the book, then display the single book with rating.

```
output of the single book
{
    "id": 1234,
    "title": "Storywallah",
    "isbn": "0143445774",
    "ratings": 5
}
```

by default rating should be 0.

## 5. PUT /books/:bookid
{
    title: ''
}
no isbn should be passed

## 6. DEL /books/:bookid
deleting the book with id

## 7. PUT /books/:bookid/rating
{
    rating: 0 and 5,
}
if rating is not found for a book, return error saying so

## 8. GET /rating/:ratingid
{
    id: 100,
    rating: 3,
    book: {
        id: 216,
        title: '',
        isbn: '',
    }
}
## 9. DEL /rating/:ratingid
