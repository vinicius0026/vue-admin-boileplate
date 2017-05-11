'use strict'

export const auth = {
  login: () => `/login`,
  logout: () => `/logout`
}

export const user = (function () {
  const base = `/api/users`
  return {
    create: () => base,
    list: () => base
  }
})()
