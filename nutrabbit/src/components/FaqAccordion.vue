<template>
  <div>
          <div>
       <div class="notice-list">
          <ul>
            <li v-for="(item, index) in NoticeList" :key="index">
              <div class="item-left">
                <p class="para-category">all</p>
                <span v-if="item.tag">{{item.tag}}</span>
                <p>
                  {{item.title}}
                </p>
              </div>
              <div class="item-right">
                 <img :src="data.img" alt="" />
              </div>
            </li>
          </ul>
        </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: "FaqAccordion",
   data(){
    return{
      NoticeList:[
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          img: "../../../src/assets/icons/icon-arrowDown.svg",
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
           img: "../../../src/assets/icons/icon-arrowDown.svg",
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          img:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          img:"2022.01.10"
        },
        {
          tag:"important",
          title:"This is the announcement title. This is the announcement title.",
          img:"2022.01.10"
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