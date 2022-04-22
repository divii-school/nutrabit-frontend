<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>Sample application details</h2>
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
                  <tbody>
                    <tr v-for="(item, index) of options" :key="index">
                      <!-- <tr> -->
                        <td>{{ index +1 }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.explanation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="fGroup" v-if="titletrue" @click="titleshow">
                <label>Title</label>
                <input type="text" name="" v-model="title" placeholder="My own recipe made with guar gum hydrolyzate">
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <div class="ansBlock">
                    <p>{{additional_request}}</p>
                </div>
              </div>
              <div class="fGroup">
                <label>Answer</label>
                <div class="ansBlock">
                    <p>{{answer_by_admin}}</p>
                </div>
              </div>
              <div class="product-list-wrap">
                <div class="btn-wrap flex-justify-end">
                  <button class="btn-small-solid grey" @click="$router.go(-1)">Previous</button>
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
// import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import MyApplicationDetails from "../../services/MyApplicationDetails";
import { useRoute } from "vue-router";
export default {
  name: "MyRecipeDetails",
  components: {
    // Popper,
    ProductList,
  },
  data() {
    return {
      sampleDetailID:"",
      sampleBlendingDetailID:"",
      title:"",
      answer_by_admin:"",
      additional_request:"",
      options: [],
      application_type:"",
      titletrue: false,
      sampleDetailType:"",

      // rwaMaterialData: [
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "Bottle",
      //     desc: [
      //       "Choose from a variety of sizes and shapes of bottles and caps.",
      //     ],
      //   },
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "PTP",
      //     desc: [
      //       "It is hygienic and convenient.",
      //       "The packaging volume is slightly larger.",
      //     ],
      //   },
      // ],
    };
  },

  created() {
    this.myApplicationDetails = new MyApplicationDetails();
  },

  methods: {

    sampledetail() {
      this.sampleDetailID = this.$route.params.id;
      this.sampleDetailType = this.$route.params.type;
      console.log("this.sampleDetailType",this.sampleDetailType);

      this.myApplicationDetails.sampledetail(this.sampleDetailID)
      .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          // this.options = res.data.data[0].options;
          this.title = res.data.data[0].title;
          this.answer_by_admin = res.data.data[0].answer_by_admin;
          this.additional_request = res.data.data[0].additional_request;

          Array.from(res.data.data[0].options).forEach((ele)=>{
            let op_type = ele.split(':')[0];
            let op_val = ele.split(':')[1];
            console.log("op_type",op_type);
            console.log("op_val",op_val);

            this.myApplicationDetails.getsampleDetails(op_type, op_val).then(res =>{
              if(res.status == 200){
                this.options.push( res.data.data[0]);
              }
            })
          })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },


    sampleBlendingDetails() {
      this.sampleBlendingDetailID = this.$route.params.id;
      console.log("this.sampleDetailID",this.sampleDetailID);
      this.sampleDetailType = this.$route.params.type;

      this.application_type = this.$route.params.type;
        console.log("application_type",this.application_type);
      this.myApplicationDetails.sampleBlendingDetails(this.sampleBlendingDetailID,this.application_type)
      .then((res) => {
        if (res.status == 200) {
          console.log("res",res);
          this.title = res.data.data[0].title;
          this.answer_by_admin = res.data.data[0].answer_by_admin;
          this.additional_request = res.data.data[0].additional_request;

          Array.from(res.data.data[0].options).forEach((ele)=>{
            let op_type = ele.split(':')[0];
            let op_val = ele.split(':')[1];
            console.log("op_type",op_type);
            console.log("op_val",op_val);

            this.myApplicationDetails.getsampleDetails(op_type, op_val).then(res =>{
              if(res.status == 200){
                console.log("res",res);
                this.options.push( res.data.data[0]);
              }
            })
          })
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },

    titleshow(){
      if (this.sampleDetailType == "choice") {
        this.titletrue = true;
      }
    },

  },

  mounted() {
    this.sampledetail();
    this.sampleBlendingDetails();
    this.titleshow();
  }

};
</script>