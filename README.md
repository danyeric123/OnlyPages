this is katia's test!
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



# **TRELLOBOARD**

<img width="1440" alt="Screen Shot 2021-08-08 at 8 44 21 PM" src="https://user-images.githubusercontent.com/86076993/128650989-c5288a2d-1af8-4a61-b83a-23e345c9976b.png">

https://trello.com/b/psQLIPk4/project-3

# **ERD**

![Screen Shot 2021-08-08 at 9 57 12 PM](https://user-images.githubusercontent.com/86076993/128653476-ff01df93-7767-4262-8db2-531b89f0de9f.png)


# **WIREFRAME**


# **SCREENSHOTS:**




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

BOOTSTRAP:


![download-2](https://user-images.githubusercontent.com/86076993/128651943-f9ad1584-1947-48ca-a943-d9be9fb78ea2.png)



GITHUB:

![download-1](https://user-images.githubusercontent.com/86076993/128651913-e40bafae-ddb0-4ec6-9d8b-0734ba654b72.png)


SOCKET IO:

![download-4](https://user-images.githubusercontent.com/86076993/128651992-13f7c6d2-e5bb-433c-bf16-09acc6d47db6.png)




REACT: 

![download](https://user-images.githubusercontent.com/86076993/128651910-5ff17e75-267c-4838-be3f-3eb39e83fe9c.png)



GOOGLE OAUTH:


![download](https://user-images.githubusercontent.com/86076993/128651856-24cdb184-bb35-49a7-9749-6f87e80d7113.jpg)


MONGOOSE:

![mongoose](https://user-images.githubusercontent.com/86076993/128651766-9027ac06-982e-45d9-9492-364637a7cbde.png)


MONGODB:

![download-3](https://user-images.githubusercontent.com/86076993/128651988-d8626fb3-0079-4303-859c-6b8841058be3.png)

# **ICE BOX**


- [ ] Author video sessions

- [ ] event

MORE

# **RESOURCES**


# **CREDIT**

