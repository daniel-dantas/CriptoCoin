import Req from './config'

export default {
    read: () => {
        return Req.get('')
    }
}