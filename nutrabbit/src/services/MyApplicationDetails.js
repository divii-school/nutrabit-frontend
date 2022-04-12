//import 
import axios from 'axios';

// variables
var token = localStorage.getItem('token');

export default class MyApplicationDetails {

  // API Functions

    async applicationlist(userId, lang, application_type, page, limit, sortBy, sortOrder) {
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

    async applicationlist2(userId, lang, application_type2, page, limit, sortBy, sortOrder) {
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

    async applicationlist3(userId, lang, application_type3, page, limit, sortBy, sortOrder) {
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

    async quotationlist(userId, lang, application_type, page, limit, sortBy, sortOrder) {
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

    async quotationlist2(userId, lang, application_type2, page, limit, sortBy, sortOrder) {
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

    async quotationlist3(userId, lang, application_type3, page, limit, sortBy, sortOrder) {
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
          option_type:op_type,
          option_val:op_val,
        }).then((res) => res).catch((err) => err);
    }
}