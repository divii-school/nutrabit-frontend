<template>
    <div>
      <div class="min-h-screen flex items-center justify-center bg-slate-500 p-16">
       <div class="bg-white p-8 rounded shadow-2xl w-1/2">
        <h2 class="text-2xl font-bold mb-10">Sign Up</h2>
         <p>* Required</p>
         <hr>
           <input type="checkbox" class="first" id="agree">
           <label for="agree" class="label">
             (Required)I agree to the Terms of Use.
           </label><br>
           <input type="checkbox" class="first1" id="agree">
           <label for="agree" class="label1">
             (Required)I agree to the collection and use of personal information.
           </label>
            <hr>
            <form class="space-y-2">
              <div>
             <label><span>*</span> &nbsp;Business Number</label>
             <input type="text" class="border border-gray-400 w-full p-1 rounded outline-none focus:border-blue-400" placeholder="Enter business number">
              </div>
           <div>
             <label><span>*</span> &nbsp; Business Name</label>
             <input type="text" placeholder="Enter Business name">
           </div>
           <div>
             <label><span>*</span> &nbsp; Department</label>
             <input type="text" placeholder="Enter department name">
           </div>
           <div>
             <label><span>*</span> &nbsp; Contact Person</label>
             <input type="text" placeholder="Enter the person in charge">
           </div>
               </form>
               <hr>
           <form class="space-y-2">
              <div>
             <label><span>*</span> &nbsp; Name</label>
             <input type="text" class="border border-gray-400 w-full p-1 rounded outline-none focus:border-blue-400" placeholder="Enter your name">
              </div>
           <div>
             <label><span>*</span> &nbsp; ID</label>
             <input type="text" placeholder="Enter your ID">
           </div>
           <div>
             <label><span>*</span> &nbsp;Password</label>
             <input type="password" placeholder="Enter your password">
           </div>
           <div>
             <label><span>*</span> &nbsp;verify password</label>
             <input type="password" placeholder="Enter verify password">
           </div>
           <div class="">
             <label><span>*</span> &nbsp;e-mail</label>
             <div class="flex">
             <input type="email" class placeholder="Enter your email">
             <button class="btnup">send verification code</button>
             </div>
           </div>
           <div>
             <label><span>*</span> &nbsp;Email Verification Number</label>
             <div class="flex">
             <input type="email" placeholder="Enter your email verification code">
             <button class="btndown">certification</button>
             </div>
           </div>
           <div>
             <label><span>*</span> &nbsp;phone number</label>
             <input type="text" placeholder="Enter your phone number">
             
           </div>
           <div>
             <label><span>*</span> &nbsp;address</label>
             <input type="text" placeholder="Enter address">
             <input type="text" placeholder="Enter detailed address">
           </div>
           <button class="btn">Sign Up</button>
         </form>
         </div>
      </div>  
    </div>
</template>
<script>
import Button from '../components/Button.vue'
export default {
  components: { Button },
    
}
</script>
<style scoped>
input{
  width:530px;
}
input[type=text] {
 height:37px ;
 font-size: 12px;
}

span{
  color:green;
  font-weight:bold;
  font-size:15px;
}
label{
  color:rgb(100, 97, 97);
}

.btn{
width:530px;
margin-left: -2px;
padding:5px ;
height:35px ;
background-color: #16AE68;
color:white;
}
p{
  text-align: right;
  color:rgb(21, 102, 21);
  font-size: 12px;
  margin-top:-50px ;
  margin-right: 30px;
}
hr{
  margin: 15px;
  border: 1px solid #E0E0E0;
  width:530px ;
}
h2{
   margin-left: -450px;
}
.first{
  margin-left: -550px;
}
.label{
  margin-left: -260px;
  font-size: 13px;
  color: grey;
}
.first1{
  margin-left: -380px;
}
.label1{
  margin-left: -260px;
  font-size: 13px;
  color: grey;
}
.box1{
   margin-left: -230px;
}
.box11{
  margin-left: 48px;
  margin-top:-45px;
}
.box2{
   margin-left: -130px;
   margin-top:-15px;
}
.box22{
  margin-left: 158px;
  margin-top:-65px;
}
input[type=email] {
width:1220px;
height:38px ;
}
.btnup{
  background-color:white;
  width: 350px;
  height: 38px;
  font-size:11px;
  margin-left:5px ;
  line-height:10px ;
  border-radius: 5px;
  color:rgb(125, 241, 125);
  border:1px solid green ;
  

}
.btndown{
  background-color:white;
  width: 350px;
  height: 38px;
  font-size:11px;
  margin-left:5px ;
  line-height:10px ;
  border-radius: 5px;
  color:rgb(189, 192, 189);
  border:1px solid rgb(179, 185, 179) ;
}


</style>