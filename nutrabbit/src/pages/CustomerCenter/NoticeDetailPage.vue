<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading">
          <h2>공지사항</h2>
        </div>
        <div v-for="(item, index) of noticeDetailsData" :key="index">
          <div class="notice-list noBorder notice-list-main">
            <ul>
              <li>
                <div class="item-left">
                  <span v-if="item.top10 == 1">important</span>
                  <p>
                    {{ item.title_en }}
                  </p>
                </div>
                <div class="item-right">
                  <p>{{ dateformat(item.createdDate) }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="background">
            <img
              :src="
                'http://api-nutrabbit-dev.dvconsulting.org/public' +
                item.image_path
              "
            />
          </div>
          <div class="details">
            <p>
              {{ item.description_en }}
            </p>
          </div>
          <div class="btn flex justify-end">
            <button
              class="btn-small-solid grey"
              @click="this.$router.push('/notice')"
            >
              목록으로
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import moment from 'moment';
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
     this.dateformat();
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
    dateformat(value) {
      if (value) {
        return moment(String(value)).format("YYYY.MM.DD");
      }
    },
  },
};
</script>