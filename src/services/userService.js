import api from "../config/api"

const userService = {
    updateInfo(data) {
        return api.post('/user/update', { data })
    }
}

export default userService