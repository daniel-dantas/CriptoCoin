import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.coincap.io/v2/assets'
})