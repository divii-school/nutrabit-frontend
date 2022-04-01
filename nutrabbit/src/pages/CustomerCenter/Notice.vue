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
            <li v-for="(item, index) of NoticeList" :key="index">
              <div class="item-left">
                <span v-if="item.tag">{{item.tag}}</span>
                <p>{{item.title}}</p>
              </div>
              <div class="item-right">
                <p>{{item.date}}</p>
              </div>
            </li>
            </ul>
        </div>
         
         <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "../../components/Pagination.vue";
export default {
  name: "Notice",
  components: {
    Pagination,
  },
   data(){
    return{
      NoticeList:[
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          date:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          date:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          date:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          date:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          date:"2022.01.10"
        },
        {
          title:"This is the announcement title. This is the announcement title.This is the announcement title.This is the announcement title.",
          date:"2022.01.10"
        },
        {
          title:"This is the announcement title. This is the announcement title.This is the announcement title.This is the announcement title.",
          date:"2022.01.10"
        },
        {
          title:"This is the announcement title. This is the announcement title.This is the announcement title.This is the announcement title.",
          date:"2022.01.10"
        },
        {
          title:"This is the announcement title. This is the announcement title.This is the announcement title.This is the announcement title.",
          date:"2022.01.10"
        },
        {
          title:"This is the announcement title. This is the announcement title.This is the announcement title.This is the announcement title.",
          date:"2022.01.10"
        }
      ]
    }
  }
};
</script>