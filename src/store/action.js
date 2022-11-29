import authService from "../services/authService";
import userService from "../services/userService";
import { AUTH_LOGIN, AUTH_LOGOUT } from "./type";

export const authLogin = (object) => {
  return async (dispatch) => {
    try {
      const res = await authService.login(object.form);
      console.log(res)
      const resData = await res.data;
      if (resData) {
        localStorage.setItem("token", JSON.stringify(resData));

        const user = await userService.getInfo()
        const data = await user.data
        // const { data } = await user.data
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          // setUser(data)
          dispatch({ type: AUTH_LOGIN, payload: data })
          object.success()
        }
      }
    } catch (err) {
      console.log(object.error(err))
    } finally {
      object.finally()
    }
  }
}

export const authLogout = () => {
  return { type: AUTH_LOGOUT }
}