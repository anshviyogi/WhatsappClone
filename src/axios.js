import axios from 'axios'

const instance = axios.create({
    // Every axios request will follow this link for moving forward
    // baseURL:"http://localhost:9000"
    baseURL:"https://whatsapp-clone-mern-stack.herokuapp.com"
})

export default instance;