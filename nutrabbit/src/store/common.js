import { reactive } from "vue";

const state = reactive({
  AppData: undefined,
  userId: localStorage.getItem("uid"),
  name: '',
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
