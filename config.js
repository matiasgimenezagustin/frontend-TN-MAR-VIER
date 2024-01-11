const mode = "PROD"

const URL_API = 
mode == 'PROD' 
? 'https://backend-tn-mar-jue.onrender.com' 
: 'http://localhost:8080'

export {URL_API}