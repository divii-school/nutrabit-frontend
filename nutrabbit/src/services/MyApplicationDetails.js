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
}