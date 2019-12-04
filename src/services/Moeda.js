import Req from './config'

export default {
    search: (coin , method) => {
        return Req.get(`${coin}/${method}`)
    }
}