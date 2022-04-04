<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap">
        <div class="my-choice-heading">
          <h2>my choice</h2>
          <div class="tolltip-outer">
            <Popper>
              <button>
                <i class="icon-info"></i>
              </button>
              <template #content>
                <div class="heading-tooltip-content">
                  <ul>
                    <li>This is a menu where I make my own health functional food recipes.</li>
                    <li>Please select the desired function.</li>
                  </ul>
                </div>
              </template>
            </Popper>
          </div>
        </div>
        <div class="my-choice-list-wrap">
          <ul class="my-choice-list-outer">
            <li class="my-choice-list-outer-item" v-for="item in categories" :key="item">
              <h2 class="list-heading">{{ item.category_name }}</h2>
              <ul class="my-choice-list-inner">
                <li
                  class="my-choice-list-inner-item"
                  v-for="(item, i) of item.sub_category_arr"
                  :key="i + 1"
                >
                  <router-link :to="'/my-choice-category-selection/' + item.sub_category_id">
                    <div class="choice-card">
                      <img
                        :src="
                          'http://api-nutrabbit-dev.dvconsulting.org/public' +
                          item.sub_category_image_path
                        "
                        alt
                      />
                    </div>
                    <p class="desc">{{ item.sub_category_name }}</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from "vue3-popper";
import MyChoiceService from "../../services/MyChoiceService";
export default {
  name: "MyChoice",
  components: {
    Popper,
  },
  data() {
    return {
      categories: '',
    };
  },
  created() {
    this.mychoiceService = new MyChoiceService();
  },
  mounted() {
    this.allCategories();
  },
  methods: {
    // allCategories list
    allCategories() {
      this.mychoiceService.getCategories().then((res) => {
        // console.log(res);
        if (res.response) {
          this.$swal(res.response.data.message, "error");
        } else {
          // console.log('getCategories res', res.data.parentCategoryData);
          this.categories = res.data.parentCategoryData;
        }
      });
    },
  },
};
</script>
