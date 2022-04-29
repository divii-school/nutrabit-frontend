<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>{{$t("onlyme.title.QuoteTab")}}</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>{{$t("onlyme.title.Options")}}</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>{{$t("onlyme.tableCaption.Category")}}</th>
                      <th>{{$t("onlyme.tableCaption.Description")}}</th>
                    </tr>
                  </thead>
                  <tbody
                    v-for="(option, index) in options"
                    :key="index"
                  >
                    <tr>
                      <td>{{ index + 1 }}</td>
                      <td>{{ option.category }}</td>
                      <td>{{ option.explanation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="fGroup">
                <label>{{$t("onlyme.title.Title")}}</label>
                <input type="text" name="" v-model="title" :placeholder="$t('onlyme.placeholder.title')">
              </div>
              <div class="fGroup">
                <label>{{$t('onlyme.title.AdditionalRequest')}}</label>
                <div class="ansBlock">
                  <p>{{ add_req }}</p>
                </div>
              </div>
              <div class="fGroup">
                <label>{{$t("onlyme.title.Answer")}}</label>
                <div class="ansBlock">
                  <p>{{ answer }}</p>
                </div>
              </div>
              <div class="product-list-wrap">
                <div class="btn-wrap flex-justify-end">
                  <button class="btn-small-solid grey" @click="$router.push('/my-application-detail')">{{$t("onlyme.button.Previous")}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KakaoChat />
</template>

<script>
import MyApplicationService from "../../services/MyApplicationQuoteService";
import KakaoChat from "../../components/KakaoChat.vue";
export default {
  name: "MyApplicationQuoteRequestChoice",
  components : {
    KakaoChat
  },

  data() {
    return {
      options: [],
      title : "",
      add_req: "",
      answer: "",
      product_id: this.$route.params.id,
     
    };
  },

  created() {
    this.myApplication = new MyApplicationService();
    console.log(
      `product id is : ${this.product_id}`
    );
  },

  mounted() {
    this.getQuotionRequestDetails(this.product_id);
  },

  methods: {
    getQuotionRequestDetails(_id) {
      this.myApplication.getApplicationChoiceDetails(_id).then(res=>{
                console.log(res.data[0])
              if(res.status == 200){
                   this.add_req = res.data[0].additional_request;
                   this.title = res.data[0].title;
                   this.answer = res.data[0].answer_by_admin;

                   Array.from(res.data[0].options).forEach((ele)=>{
                     //console.log(Object.keys(ele)[0], Object.values(ele)[0])
                      let op_type = ele.split(':')[0];
                      let op_val = ele.split(':')[1];
                      console.log(op_type, op_val)
                      this.myApplication.getOptionDetails(op_type, op_val).then(res =>{

                        if(res.status == 200){
                          console.log(res.data[0])
                             this.options.push( res.data[0] )
                        }else{
                          console.log(res.message)
                           //this.$swal(res.message)
                        }
                        
                      })
                   })
              }else{
                this.$swal(res.message)
              }
      })
    },
  },
};
</script>

<style>
</style>