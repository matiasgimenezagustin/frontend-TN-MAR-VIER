const mode = "PROD"

const URL_API = 
mode == 'PROD' 
? 'https://backend-tn-mar-vier-production.up.railway.app' 
: 'http://localhost:8080'

export {URL_API}