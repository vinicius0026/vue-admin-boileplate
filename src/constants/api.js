'use strict'

export const auth = {
  login: () => `/login`,
  logout: () => `/logout`
}

export const user = (function () {
  const base = `/api/users`
  return {
    create: () => base,
    read: (id) => `${base}/${id}`,
    update: (id) => `${base}/${id}`,
    remove: (id) => `${base}/${id}`,
    list: () => base
  }
})()
