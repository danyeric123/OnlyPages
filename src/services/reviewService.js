import * as tokenService from "./tokenService";
const BASE_URL = "/reviews";

export function addReview(review) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(review),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
/* export function createReview(review){
  return fetch (BASE_URL,
    {
      method:'POST',
      headers: {'content-type':'application/json', Authorization: "Bearer " + tokenService.getToken() },
      body:JSON.stringify(review)
    },
    { mode: "cors" }
  ).then(res => res.json()); 
} */

export function update(id, review) {
  return fetch(
    `${BASE_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(review),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteReview(id) {
  return fetch(
    `${BASE_URL}/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      /* body:JSON.stringify(review) */
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getReviews(id) {
  return fetch(
    `${BASE_URL}/${id}`,
    { headers: { Authorization: "Bearer " + tokenService.getToken() } },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function likeAndUnlike(id) {
  return fetch(
    `${BASE_URL}/${id}/like`,
    {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(),
        "content-type": "application/json",
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
