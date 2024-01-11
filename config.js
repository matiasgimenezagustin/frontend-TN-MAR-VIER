const mode = "PROD"

const URL_API = 
mode == 'PROD' 
? 'https://test-1-b666.onrender.com/' 
: 'http://localhost:8080'

export {URL_API}