import * as tokenService from "./tokenService"
const BASE_URL = "/posts"

export function Create (post){
  return fetch (BASE_URL,{
    method: 'Post'
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}