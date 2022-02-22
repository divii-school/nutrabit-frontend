<template>
    <div>
       <footer class="footer-container">
           <!-- <div class="final">
               <div class="box-2">
                 <p>Terms of Use &nbsp; | &nbsp; <span>Privacy Policy</span></p>
               </div>
                   <div class="vl"></div>
                   <h6>Korean
                       <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-up"
            class="svg-inline--fa fa-caret-up w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
            ></path>
          </svg>
                   </h6>
           </div> -->
           <div class="final">
           <p class="box">Terms of Use &nbsp; | &nbsp; <span>Privacy Policy</span></p>   
            <div class="vl"></div>
            <div class="korean">
               <h6>Korean
                       <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-up"
            class="svg-inline--fa fa-caret-up w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
            ></path>
          </svg>
                   </h6>
            </div>
            
            <div class="vll"></div>
                 
           </div>
           <div class="group-1">
               <div class="col1">
                   <span class="text-2xl font-extrabold text-green-500 font-mono">NUTRABBIT</span>

               </div>
               <div class="col2">
                 <p>Newtrabit Co.,Ltd. | CEO: Min Kyung-ran | Business registration number:603-88-01301
                     Headquarters:1st floor,15,Hyoryeong-ro 33-gil,Seocho-gu,Seoul
                     </p>
                     <br>
                     <p>Copyright 2022 Nutrabbit.All right saved.</p>
               </div>
               <div class="col3">

               </div>
           </div>

       </footer>
    </div>
</template>
<script>
export default {
    name:'Footer'
}
</script>
<style scoped>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
footer{
    /* position: fixed; */
    width: 100%;
    bottom: 0px;
    left: 0;
}
.footer-container{
   background:white;
   border:1px solid rgb(214, 206, 206);
   width: 100%;
   height: 170px; 
   margin-top: 200px;
}
.group-1{
    display: flex;
    padding: 20px;
    color:rgb(8, 155, 8)
}

.col1{
  width:34%;
  margin-left: -52px;
  justify-content:center;
  margin: auto;


}
.col2{
  width:44%;
  color: rgb(138, 132, 132); 
   justify-content:center;
   margin: auto;

}
.col3{
  width:24%;
    
}
.col2 p{
    font-size: 12px;
}
.final{
  border-top:1px solid rgb(214, 206, 206);
  border-bottom:1px solid rgb(214, 206, 206);
   display: flex;
   /* width: 100%; */
   align-items: center;
   justify-content: space-evenly;
   height: 50px;
}
/* .box-2{
    width: 70%;
    padding: 10px;
    margin-left: -330px;
    

}
.box-3{
width: 30%;

} */
.box{
    font-size: 12px;
    color:rgb(121, 111, 111);
    margin-left: 200px;
}
span{
  font-weight: 900;  
}
.vl {
  border-left: 2px solid grey;
  position: absolute;
  height: 50px;
  margin-left:660px;
  
}
.vll {
  border-left: 2px solid grey;
  position: absolute;
  height: 50px;
  margin-left:900px;
}
h6{
  margin-left:220px;
    display: flex;
}
</style>