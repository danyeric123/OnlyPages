
# OnlyPages

## Table of Contents
* [General Info](#onlypages)
* [Technologies Used](#tech-used)
* [TRELLO](#trelloBoard)
* [ERD](#ERD)
* [WIRE FRAME](#WIREFRAME)
* [Screenshots](#screenshots)
* [SAMPLE CODE](#SAMPLECODE)
* [ICE BOX](#ICE-BOX)
* [RESOURCES](#RESOURCES)
*  [CREDIT](#CREDIT)






## ONLYPAGES:books:

I'm a fan of your works

 OUR PURPOSE:
 Is to create a community of readers to discuss their favorite books and celebrate their favorite authors



# **TRELLOBOARD**

<img width="1440" alt="Screen Shot 2021-08-08 at 8 44 21 PM" src="https://user-images.githubusercontent.com/86076993/128650989-c5288a2d-1af8-4a61-b83a-23e345c9976b.png">

https://trello.com/b/psQLIPk4/project-3

# **ERD**

![Screen Shot 2021-08-08 at 9 57 12 PM](https://user-images.githubusercontent.com/86076993/128653476-ff01df93-7767-4262-8db2-531b89f0de9f.png)


# **WIREFRAME**
![Screen Shot 2021-08-11 at 5 16 48 PM](https://user-images.githubusercontent.com/86076993/129104579-32dc8d00-f56c-4b2a-ac9b-b6cf77dc49ac.png)

https://lucid.app/lucidchart/4b528971-dbfd-46b1-be0a-a62d272b06cc/edit?shared=true&page=0_0#
# **SCREENSHOTS:**

![Screen Shot 2021-08-16 at 10 05 03 AM](https://user-images.githubusercontent.com/86076993/130143411-02b56ba3-f2ab-4bba-932a-03b59663845a.png)
![Screen Shot 2021-08-16 at 10 05 55 AM](https://user-images.githubusercontent.com/86076993/130143475-97b1c158-a937-453d-9c03-96c630d301c2.png)
![Screen Shot 2021-08-16 at 10 05 44 AM](https://user-images.githubusercontent.com/86076993/130143515-f40f7740-892f-47fb-bbe5-c2021621911e.png)
![Screen Shot 2021-08-16 at 10 04 51 AM](https://user-images.githubusercontent.com/86076993/130143527-6ddb2ac4-9133-4f2b-9007-9526b40f303e.png)

![Screen Shot 2021-08-19 at 4 52 25 PM](https://user-images.githubusercontent.com/86076993/130143558-c093e9e4-de66-421c-ae8b-a7f428f627fc.png)
![Screen Shot 2021-08-19 at 4 51 29 PM](https://user-images.githubusercontent.com/86076993/130143609-e0d3fb03-0c58-42cb-95b3-2e7c667a5279.png)
![Screen Shot 2021-08-19 at 4 52 17 PM](https://user-images.githubusercontent.com/86076993/130143634-70dba556-11cd-43a6-b488-785669aa201b.png)
![Screen Shot 2021-08-19 at 4 51 55 PM](https://user-images.githubusercontent.com/86076993/130143645-62fba9e6-4c0c-4042-8aec-7080b9c2027e.png)


# **SAMPLECODE:**

SAMPLE
````

// post s.1.6 import router from express 
import { Router } from 'express'

//post s.1.7 import post controller
import * as postsCtrl from "../controller/posts.js"


// define s.1.8
const router = Router()

export{
    router 
}

// post s.1.9 make get request for posts
router.get('/', isLoggedIn, postsCtrl.index)

// post s.2.2 make a post request for post
router.post('/', isLoggedIn, postsCtrl.create)

// post s.3.2 make a get/:id request for post
router.get('/:id', isLoggedIn, postsCtrl.show) 

// post s.4.2 make a get/:id request for post
router.delete('/:id', isLoggedIn, postsCtrl.delete)

// post s.5.2 make a get/:id request for edit
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)

// post s.6.2 make a put/:id request for put
router.put('/:id', postsCtrl.update)

// post s.7.2 make a post/:id request for post
router.post('/:id', isLoggedIn, postsCtrl.reply)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


````


# **TECH USED**

POSTMAN:

![download-5](https://user-images.githubusercontent.com/86076993/128652014-8db64c29-00a7-4bd5-8dab-dfe9271085f9.png)


API:


![download](https://user-images.githubusercontent.com/86076993/130146196-1bd415fd-c34a-4f17-bf6c-0a351067657e.png)
 

BOOTSTRAP:


![download-2](https://user-images.githubusercontent.com/86076993/128651943-f9ad1584-1947-48ca-a943-d9be9fb78ea2.png)



GITHUB:

![download-1](https://user-images.githubusercontent.com/86076993/128651913-e40bafae-ddb0-4ec6-9d8b-0734ba654b72.png)


SOCKET IO:

![download-4](https://user-images.githubusercontent.com/86076993/128651992-13f7c6d2-e5bb-433c-bf16-09acc6d47db6.png)




REACT: 

![download](https://user-images.githubusercontent.com/86076993/128651910-5ff17e75-267c-4838-be3f-3eb39e83fe9c.png)



JWT:


MONGOOSE:

![mongoose](https://user-images.githubusercontent.com/86076993/128651766-9027ac06-982e-45d9-9492-364637a7cbde.png)


MONGODB:

![download-3](https://user-images.githubusercontent.com/86076993/128651988-d8626fb3-0079-4303-859c-6b8841058be3.png)

# **ICE BOX**


- [ ] Author video sessions

- [ ] event

MORE

# **RESOURCES**
google
css trick
youtube


# **CREDIT**
https://unsplash.com/photos/D4YrzSwyIEc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
