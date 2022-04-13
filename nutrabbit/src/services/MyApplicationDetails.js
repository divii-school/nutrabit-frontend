//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class MyApplicationDetails {

  // API Functions

    async appNutri(userId, lang, application_type, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/sample_application`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async appRecommended(userId, lang, application_type2, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/sample_application`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type2,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async appMychoice(userId, lang, application_type3, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/sample_application`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type3,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async QuoteNutri(userId, lang, application_type, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/get_quote`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async QuoteRecommended(userId, lang, application_type2, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/get_quote`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type2,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async QuoteMyChoice(userId, lang, application_type3, page, limit, sortBy, sortOrder) {
      return await axios.post(`/application/get_quote`,
        {
          userId: userId,
          lang: lang,
          application_type:application_type3,
          page:page,
          limit: limit,
          sortBy: sortBy,
          sortOrder:sortOrder,
        }).then((res) => res).catch((err) => err);
    }

    async sampledetail(id) {
      return await axios.post(`/application/my_choice/details`,
        {
          id:id,
        }).then((res) => res).catch((err) => err);
    }

    async getsampleDetails(op_type,op_val) {
      return await axios.post(`/application/options_details`,
        {
          lang:"KO",
          option_type:op_type,
          option_val:op_val,
        }).then((res) => res).catch((err) => err);
    }

    async sampleBlendingDetails(id, application_type) {
      return await axios.post(`/application/blending/details`,
        {
          id:id,
          application_type:application_type,
        }).then((res) => res).catch((err) => err);
    }

    // async getsampleBlendingDetails(op_type,op_val) {
    //   return await axios.post(`/application/options_details`,
    //     {
    //       lang:"KO",
    //       option_type:op_type,
    //       option_val:op_val,
    //     }).then((res) => res).catch((err) => err);
    // }
}