# OnlyPages

## Table of Contents

- [OnlyPages](#onlypages)
  - [Table of Contents](#table-of-contents)
  - [OnlyPages :books:](#onlypages-books)
    - [Our Purpose:](#our-purpose)
    - [Introduction:](#introduction)
  - [Trello Board](#trello-board)
  - [ERD](#erd)
  - [Wireframe](#wireframe)
  - [Screenshots:](#screenshots)
  - [Sample Code:](#sample-code)
  - [Technology and Languages Used](#technology-and-languages-used)
  - [Ice Box](#ice-box)
  - [Credit](#credit)

## OnlyPages :books:

> Tagline "I'm a fan of your works"

#### Our Purpose:

To create a community of readers where they can discuss their favorite books and celebrate their favorite authors

#### Introduction:

A group project with <a href="https://www.linkedin.com/in/kcygibson/" target="_blank">Katia Gibson</a> and <a target="_blank" href="https://www.linkedin.com/in/zouhrab-haider/">Zouhrab Haider</a> where we build a coupled app using MongoDB, Express.js, React, and Node.js to give the user a social media experience around books. Users can review books, add to their different collections, and post about their book-related topic of choice.

[Link to deployed version](https://only-pages.herokuapp.com/)

## Trello Board

<a href="https://trello.com/b/psQLIPk4/project-3"> <img width="1440" alt="Screen Shot 2021-08-08 at 8 44 21 PM" src="https://user-images.githubusercontent.com/86076993/128650989-c5288a2d-1af8-4a61-b83a-23e345c9976b.png"></a>

## ERD

![Screen Shot 2021-08-08 at 9 57 12 PM](https://user-images.githubusercontent.com/86076993/128653476-ff01df93-7767-4262-8db2-531b89f0de9f.png)

## Wireframe

![Screen Shot 2021-08-11 at 5 16 48 PM](https://user-images.githubusercontent.com/86076993/129104579-32dc8d00-f56c-4b2a-ac9b-b6cf77dc49ac.png)

## Screenshots:

![Screen Shot 2021-08-19 at 4 52 25 PM](https://user-images.githubusercontent.com/86076993/130143558-c093e9e4-de66-421c-ae8b-a7f428f627fc.png)
![Screen Shot 2021-08-19 at 4 51 29 PM](https://user-images.githubusercontent.com/86076993/130143609-e0d3fb03-0c58-42cb-95b3-2e7c667a5279.png)
![Screen Shot 2021-08-19 at 4 52 17 PM](https://user-images.githubusercontent.com/86076993/130143634-70dba556-11cd-43a6-b488-785669aa201b.png)
![Screen Shot 2021-08-19 at 4 51 55 PM](https://user-images.githubusercontent.com/86076993/130143645-62fba9e6-4c0c-4042-8aec-7080b9c2027e.png)

## Sample Code:

```javascript
import { Router } from "express";

// import post controller
import * as postsCtrl from "../controller/posts.js";

const router = Router();

export { router };

// make get request for posts
router.get("/", isLoggedIn, postsCtrl.index);

// make a post request for post
router.post("/", isLoggedIn, postsCtrl.create);

// make a get/:id request for post
router.get("/:id", isLoggedIn, postsCtrl.show);

// make a get/:id request for post
router.delete("/:id", isLoggedIn, postsCtrl.delete);

// make a get/:id request for edit
router.get("/:id/edit", isLoggedIn, postsCtrl.edit);

// make a put/:id request for put
router.put("/:id", postsCtrl.update);

// make a post/:id request for post
router.post("/:id", isLoggedIn, postsCtrl.reply);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
```

## Technology and Languages Used

Mongoose:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png">

MongoDB:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png">

Express.js:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png">

React:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

Node.js:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png">

Google Books API:

![download](https://user-images.githubusercontent.com/86076993/130146196-1bd415fd-c34a-4f17-bf6c-0a351067657e.png)

Tailwind CSS:

<img height="80" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png">

JWT:

<img height="250" src="https://miro.medium.com/max/1200/1*u3a-5xZDeudKrFGcxHzLew.png">

## Ice Box

1. AAU, you can attend author video book reading sessions
2. AAU, you can find and register for book events
3. Librarians will be able to edit author pages
4. AAU, you can follow authors
5. AAU, I can access an author's page
6. AAU, I can see when an author is online
7. AAU, you can browse books by genre
8. As an author, I have a special profile page

## Credit

- The book logo was taken from [here](https://pngtree.com/so/book-logo).
- Landing page image Photo by <a href="https://unsplash.com/@bokcily?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Boris Ivanović</a> on <a href="https://unsplash.com/s/photos/blue-books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
