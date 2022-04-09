
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

    async getSingleRecipeProductDetails(_id, type){
        return await axios.post(`recipe/details`, { id : _id, application_type : type}).then((res) => res.data).catch((err) => err);
    }

    async deleteRecipeData(_id){
        return await axios.post(`recipe/delete`, { deleteID : _id }).then((res) => res.data).catch((err) => err);
    }


}