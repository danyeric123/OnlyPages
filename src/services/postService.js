
import * as tokenService from "./tokenService"
const BASE_URL = "/posts"

export function create (post){
  return fetch (BASE_URL,
    {
      method:'POST',
      headers: {'content-type':'application/json', Authorization: "Bearer " + tokenService.getToken() },
      body:JSON.stringify(post)
    },
    { mode: "cors" }
  ).then(res => res.json());
}


export function getAll() {
  return fetch(BASE_URL,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" })
  .then(res => res.json());
}
export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`,
    {headers: { Authorization: "Bearer " + tokenService.getToken() },
    method: 'DELETE'}
  ).then(res => res.json());
}

export function update(post) {
  return fetch(`${BASE_URL}/${post._id}`,
   {
    method: 'PATCH',
    headers: { Authorization: "Bearer " + tokenService.getToken(),'content-type':'application/json' },
    body:JSON.stringify(post)
    },
    { mode: "cors" }
  ).then(res => res.json());
}