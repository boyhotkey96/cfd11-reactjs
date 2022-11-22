import api from "../config/api"

const userService = {
    updateInfo(data) {
        return api.post('/user/update', { data })
    },
    getInfo() {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            return api.get('/user/get-info', {
                headers: {
                    Authorization: `Bearer ${token.accessToken}`
                }
            })
        }
    }
}

export default userService