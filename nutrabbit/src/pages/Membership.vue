<template>
   <div class="Auth-wrap">
       <Header/>
       <div class="bg-white rounded shadow-lg ml-auto mr-auto max-w-md">
         <div class="container">
           <p>Membership type</p>
          <div class="input">
         <input type="text" placeholder="Please Select a member type">
         </div>
         <div class="box-1">
           
     <p class="ind1">individual membership</p>
     <p class="ind2">When an individual joins</p>

         </div>
         <div class="box-2">
         <p class="ind1">Business membership registration</p>
         <p class="ind2">When a company joins</p>
         </div>
         </div>
       </div>
       <Footer/>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default { 
   name:'Membership',
   components: {
    Header,
    Button,
    Footer,

  },
}
</script>
<style>
.container{ 
   background:#fff;
  padding:35px;
  margin:auto;
  /* text-align:center; */
  height:600px ;
} 
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 5px 0;
  display: inline-block;
  border-bottom: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  font-size:18px ;
}
/* .input label {
     text-align:left;
} */
p{
  font-size:30px ;
}
.box-1{
    width:100%;
    height: 30%;
    box-sizing: border-box;
    border: 2px solid rgb(8, 160, 8);
    border-radius:5px;
    margin-top:25px ;
    text-align: center;
    justify-content: center;
}
.box-2{
    width:100%;
    height: 30%;
    box-sizing: border-box;
    border: 2px solid rgb(160, 157, 157);
    border-radius:5px;
    margin-top:25px
}
.ind1{
    font-size:19px;
    color:rgb(73, 70, 70);
    align-items: center;
    margin:35px ;
}
.ind2{
   font-size:15px;
    color:rgb(156, 149, 149);
    align-items: center;
    margin-top:-47px ;
}
</style>