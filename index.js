
const TRAP_URL = '/?advertiserId=&platform='
const ERROR_MESSAGES = [
  'Failed to fetch',
  'NetworkError when attempting to fetch resource.'
]
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
      const adbEnabled = ERROR_MESSAGES.includes(error.message)
      resolve(adbEnabled)
    })
  })
}
