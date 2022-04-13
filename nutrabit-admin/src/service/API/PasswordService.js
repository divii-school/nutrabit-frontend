import axios from 'axios';

export default class PasswordService {
    async changePassword(current, newp, confirm) {
        return await axios.post(`/${localStorage.getItem('userType')=='admin'?'admin':'dfc-admin'}/user/change-password`, {
            currentPassword: current,
            newPassword: newp,
            confirm_password: confirm
        }).then((res) => res)
    }

}
