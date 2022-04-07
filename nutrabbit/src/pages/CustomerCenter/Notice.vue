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
            <li v-for="(item, index) of UpdatedNoticeList" :key="index">
              <div
                class="item-left"
                @click="this.$router.push(`/notice-detail-page/${item.id}`)"
              >
                <span v-if="item.top10 == 1">Important</span>
                <p>{{ item.title_ko }}</p>
              </div>
              <div class="item-right">
                <p>{{ dateformat(item.createdDate) }}</p>
              </div>
            </li>
          </ul>
        </div>
        <pagination
          v-model="page"
          :records="3"
          :per-page="1"
          @paginate="myCallback"
        />
        <!-- <Pagination /> -->
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import CustomerCenterService from "../../services/CustomerCenterService";
export default {
  name: "Notice",
  // components: {
  //   Pagination,
  // },
  data() {
    return {
      NoticeList: [],
      UpdatedNoticeList: [],
      page: 1,
      perPage: 1,
    };
  },
  created() {
    this.CustomerCenterService = new CustomerCenterService();
  },
  mounted() {
    this.allNoticeList();
    this.dateformat();
  },
  methods: {
    myCallback(ClickPage){
      const startIndex = (ClickPage - 1) * this.perPage;
      // const endIndex = (this.perPage * ClickPage);
      const endIndex = startIndex + this.perPage;
      this.UpdatedNoticeList = this.NoticeList.slice(startIndex, endIndex);
    },
    allNoticeList() {
      this.CustomerCenterService.getNoticeList().then((res) => {
        if (res.status == 200) {
          this.NoticeList = res.data.data.notice;
          this.myCallback(1);
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    dateformat(value) {
      if (value) {
        return moment(String(value)).format("YYYY.MM.DD");
      }
    },
  },
};
</script>