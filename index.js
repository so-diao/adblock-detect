
const NETWORK_ERROR_MESSAGES = [
  'Failed to fetch',
  'NetworkError when attempting to fetch resource.'
]
const TRAP_URL = '/?advertiserId=&platform='
const TIMEOUT = 30

/**
 * @returns {Promise<Boolean>}
 */

export default () =>{
  return new Promise((resolve) =>{
    setTimeout(resolve.bind(null, false), TIMEOUT)
    fetch(TRAP_URL, {
      method: 'HEAD',
      mode: 'no-cors'
    })
    .then(resolve.bind(null, false))
    .catch(error =>{
      const message = error.message
      const isNetworkError = NETWORK_ERROR_MESSAGES.includes(message)
      resolve(isNetworkError)
    })
  })
}
