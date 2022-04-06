<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-notice-wrap">
        <div class="my-notice-heading">
          <h2>Notice</h2>
        </div>
        <div class="notice-heading">
          <p class="title">title</p>
          <p class="date">Published date</p>
        </div>
        <div class="notice-list bBtm-0">
          <ul>
            <!-- <li v-for="(item, index) of NoticeList" :key="index">
              <div class="item-left"> -->
                <!-- <span v-if="item.tag">{{ item.tag }}</span> -->
                <!-- <p>{{ item.title_ko }}</p>
              </div>
              <div class="item-right"> -->
                <!-- <p>{{ item.date }}</p> -->
              <!-- </div>
            </li> -->
          </ul>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "../../components/Pagination.vue";
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "Notice",
  components: {
    Pagination,
  },
  data() {
    return {
      NoticeList: [],
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.allNoticeList()
  },
  mathods: {
    allNoticeList() {
      this.CustomerCenterService.getNoticeList().then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          // this.NoticeList = res.data;
          // console.log(this.NoticeList);
        } else {
          console.log("ghj");
        }
      });
    },
  },
};
</script>