
import axios from 'axios';

var token = localStorage.getItem('token');

export default class MyRecipeService{

   async getMyRecomendedBlendingData(uid){
        return await axios.post(`/recipe`, { lang: 'KO',  user_id : uid, application_type : 'recommended_blending'}).then((res) => res.data).catch((err) => err);
    };

    async getMyMyChoiceData(uid){
        return await axios.post(`/recipe`, { lang: 'KO',  user_id : uid, application_type : 'my_choice'}).then((res) => res.data).catch((err) => err);
    }

    async getRecipeDetails(_id){
        return await axios.post(`recipe/details`, { id : _id, application_type : 'my_choice'}).then((res) => res.data).catch((err) => err);
    }

    async getOptionDetails(op_type, op_val){
        return await axios.post(`application/options_details`, { lang : 'KO', option_type: op_type, option_val : op_val }).then((res) => res.data).catch((err) => err);
    }

    async getSingleRecipeProductDetails(_id, type){
        return await axios.post(`recipe/details`, { id : _id, application_type : type}).then((res) => res.data).catch((err) => err);
    }

    async editRecipeDetail(_id, _title, _additional_req){
        return await axios.post(`recipe/details`, { id : _id, additional_request : _additional_req, title : _title}).then((res) => res.data).catch((err) => err);
    }

    async submitRecipeApplication(app_id){
        return await axios.post(`recipe/details`, { application_id : app_id }).then((res) => res.data).catch((err) => err);
    }

    async deleteRecipeData(_id){
        return await axios.post(`recipe/delete`, { deleteID : _id }).then((res) => res.data).catch((err) => err);
    }


}