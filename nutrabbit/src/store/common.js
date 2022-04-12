import { reactive } from "vue";

const state = reactive({
  AppData: undefined,
  userId: localStorage.getItem("uid"),
  name: '',
  searchKeyword: '',
  SearchResult: undefined,
});

const methods = {
  async getData() {
   console.log('getData');
  },
};

export default {
  state,
  methods,
};
