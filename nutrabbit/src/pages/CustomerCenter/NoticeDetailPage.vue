<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading">
          <h2>Notice</h2>
        </div>
        <div v-for="(item, index) of noticeDetailsData" :key="index">
          <div class="notice-list noBorder">
            <ul>
              <li>
                <div class="item-left">
                  <span>important</span>
                  <p>
                    {{ item.title_en }}
                  </p>
                </div>
                <div class="item-right">
                  <p>2022.01.10</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="background">
            <img :src="'http://api-nutrabbit-dev.dvconsulting.org/public' + item.image_path" />
          </div>
          <div class="details">
            <p>
              {{ item.description_en }}
            </p>
          </div>
          <div class="btn flex justify-end">
            <button class="btn-small-solid grey">as a list</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "NoticeDetailPage",
  data() {
    return {
      noticeDetailsID: null,
      noticeDetailsData: [],
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.NoticeDetails();
  },
  methods: {
    NoticeDetails() {
      let noticeListId = useRoute();
      this.noticeDetailsID = noticeListId.params.id;
      this.CustomerCenterService.getNoticeDetails(this.noticeDetailsID).then(
        (res) => {
          if (res.status == 200) {
            this.noticeDetailsData = res.data.data;
          } else {
            console.log("error");
          }
        }
      );
    },
  },
};
</script>