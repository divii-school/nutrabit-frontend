<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>Quotion Request Details</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Options</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>category</th>
                      <th>Explanation</th>
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
                <label>Additional Requests</label>
                <div class="ansBlock">
                  <p>{{ add_req }}</p>
                </div>
              </div>
              <div class="fGroup">
                <label>Answer</label>
                <div class="ansBlock">
                  <p>{{ answer }}</p>
                </div>
              </div>
              <div class="product-list-wrap">
                <div class="btn-wrap flex-justify-end">
                  <button class="btn-small-solid grey" @click="$router.push('/my-appllication-detail')">Previous</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyApplicationService from "../../services/MyApplicationQuoteService";
export default {
  name: "MyApplicationQuoteRequestBlending",

  data() {
    return {
      options: [],
      add_req: "",
      answer: "",
      product_id: this.$route.params.id,
      application_type:
        this.$route.params.type == "recommended"
          ? "recommended_blending"
          : 'nutri_blending',
      
    };
  },

  created() {
    this.myApplication = new MyApplicationService();
    console.log(
      `product id is : ${this.product_id} and type is ${this.application_type}`
    );
  },

  mounted() {
    this.getQuotionBlendingDetails(this.product_id, this.application_type);
  },

  methods: {
    getQuotionBlendingDetails(_id, _app_type) {
      this.myApplication.getApplicationBlendingDetails(_id, _app_type).then(res=>{
                console.log(res.data[0])
              if(res.status == 200){
                   this.title = res.data[0].title;
                   this.add_req = res.data[0].additional_request;
                   this.answer = res.data[0].answer_by_admin;

                   Array.from(res.data[0].options).forEach((ele)=>{
                     //console.log(Object.keys(ele)[0], Object.values(ele)[0])
                      let op_type = ele.split(':')[0];
                      let op_val = ele.split(':')[1];

                      this.myApplication.getOptionDetails(op_type, op_val).then(res =>{

                        if(res.status == 200){
                             this.options.push( res.data[0] )
                        }else{
                           $swal(res.message)
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