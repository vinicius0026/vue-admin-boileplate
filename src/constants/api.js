'use strict'

const apiBasePath = 'http://localhost:8000'

export const auth = {
  login: () => `${apiBasePath}/login`,
  logout: () => `${apiBasePath}/logout`
}
