import * as tokenService from "./tokenService";
const BASE_URL = "/posts";

export function create(post) {
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(post),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getAll() {
  return fetch(
    BASE_URL,
    { headers: { Authorization: "Bearer " + tokenService.getToken() } },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getPost(id) {
  return fetch(
    `${BASE_URL}/${id}`,
    { headers: { Authorization: "Bearer " + tokenService.getToken() } },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function getCategory(category) {
  return fetch(
    `${BASE_URL}/category/${category}`,
    { headers: { Authorization: "Bearer " + tokenService.getToken() } },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
    method: "DELETE",
  }).then((res) => res.json());
}

export function update(post) {
  return fetch(
    `${BASE_URL}/${post._id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(),
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    },
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

export function reply(id, reply) {
  return fetch(
    `${BASE_URL}/${id}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(),
        "content-type": "application/json",
      },
      body: JSON.stringify(reply),
    },
    { mode: "cors" }
  ).then((res) => res.json());
}

export function deleteReply(postId, replyId) {
  return fetch(
    `${BASE_URL}/${postId}/${replyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + tokenService.getToken(),
        "content-type": "application/json",
      },
    },
    { mode: "cors" }
  ).then((res) => res.json());
}
