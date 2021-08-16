import * as tokenService from "./tokenService"
const BASE_URL = "/profiles"

export function getUserProfile() {
  return fetch(
    `${BASE_URL}/userProfile`,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" }
    ).then((res) => res.json())
}

export function getAllProfiles() {
  return fetch(
    BASE_URL,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" }
    ).then((res) => res.json())
}

export function friendAndUnfriend(id) {
  return fetch(
    `${BASE_URL}/friend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function addBook(book,collection) {
  console.log( "profile services gets "+JSON.stringify(book))
  return fetch(
    `${BASE_URL}/books/${collection}`,
    {
      method: 'PATCH',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(book)
    },
    { mode: "cors" }
    ).then((res) => res.json())
}
export function update(id,profileUpdate) {
  return fetch(
    `${BASE_URL}/${id}`,
    {
      method: 'PUT',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(profileUpdate)
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function removeBook(id,collection) {
  return fetch(
    `${BASE_URL}/books/${id}/${collection}`,
    {
      method: 'DELETE',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}