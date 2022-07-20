import axios from 'axios';

export default class PasswordService {
    async changePassword( newp) {
        return await axios.post(`admin/user/change_password`, {
        
            newPassword: newp,
           
        }).then((res) => res)
    }

}
