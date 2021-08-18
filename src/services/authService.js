import * as tokenService from './tokenService'
const BASE_URL = '/auth/'

function signup(user) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  })
  .then(res => {
    return res.json()
  })
  .then(json => {
    if (json.token) return json
    throw new Error(json.err)
  })
  .then(({ token }) => {
    tokenService.setToken(token)
  })
  .catch(err => {
    console.log(err)
  })
}

function getUser() {
  console.log(tokenService.getUserFromToken())
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
  .then((res) => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json()
    throw new Error("Bad Credentials!")
  })
  .then(({ token }) => tokenService.setToken(token))
}


export {
  signup,
  getUser,
  logout,
  login
}
