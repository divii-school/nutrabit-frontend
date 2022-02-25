<template>
    <div class="container">
        <div class="title">find ID</div>
        <br>
        <form action="#">
            <div class="user-details">
                <div class="input-box">
                    <div class="">
                    <span class="details">email </span>
                    <input type="text" placeholder="Enter your email" required>
                </div>
                <button class="butt">send verification code</button>

                    <!-- <div class="">
                    <span class="details">Email</span>
                    <input type="text" placeholder="Enter your email" required>
                    </div><br>
                
                 <button class="but">select</button>
                <button class="butt">send verification code</button> -->

            </div>
            <br>
            <div class="input-box">
                <div class="">
                    <span class="details">Email </span>
                    <input type="text" placeholder="Enter your verification email" required>
                </div>
                <button class="butto">certification</button>

               </div>
               <br>
               <button class="button">Confirm</button>
                <!-- <div class="button">
                    <input type="submit" value="Confirm">
                </div> -->
            </div>

        </form>
         <!-- <h1>find ID</h1>
         <hr>
         <form>
             <div class="email">
         <label>Email</label>
         <input type="text" >
           <select name="cars" id="cars">
           <option value="volvo">select</option>
            <option value="saab"></option>
            <option value="opel"></option>
            <option value="audi"></option>
  </select>
         <button>send verification code</button>
            </div>
         </form> -->
         
         
    </div>
</template>
<script>
export default {
   name:'FindID'
}
</script>
<style scoped>
/* .container{ */
    /* width: 870px;
    height: 540px;
    background-color: #FFFFFF;;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; */
    /* display: flex; */
   /* flex-direction: row;
   justify-content: center;
   align-items: center; */
   /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   padding: 70px 90px; */

/* } */
/* .email{
    display: flex;
    flex-direction: row;
} */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display:flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding:50px ;
}
/* .container{
    width: 870px;
    height: 540px;
    background-color: #FFFFFF;;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto; 
     display: flex; 
    flex-direction: row;
   justify-content: center;
   align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   padding: 70px 90px;
} */
.container{
    max-width: 700px;
    width: 100%;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 70px 90px;
    margin:25% ;
    height:500px ;
}
.container .title{
    font-size:32px;
    font-weight:500 ;
    margin-left:-80% ;
    position: relative;
     
}
.container .title::before{
 content: '';
 position: absolute;
 bottom:0;
 height: 3px;
 width: 59%;
 background: linear-gradient(135deg,#d0d2d3,#f3eef5);
 margin:-2px ;
}
.container form .input-box{
    display:flex;
} 
.butt{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
font-size: 11px;
line-height:13px ;
position: static;
width: 119px;
height: 39px;
left: 581px;
background: #FFFFFF;
border: 1px solid #16AE68;
box-sizing: border-box;
border-radius: 5px;
margin-left:390px ;
margin-top:25px ; 
 /* flex: none;
order: 3;
flex-grow: 0;
margin: 0px 10px;  */

 } 
 /* input[type=email]{
    height: 40px;
    width: 700%;
    padding: 3px;
    margin-top:2px ;
} */

/* .but{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
font-size: 11px;
position: static;
width: 250px;
height: 39px;
background: #FFFFFF;
border: 1px solid #16AE68;
box-sizing: border-box;
border-radius: 5px;
margin-left:260px ;
margin-top:25px ; 
font-size:15px ;  
} */
input[type=text]{
    height: 40px;
    width:1100% ;
    padding: 3px;
    margin-top:2px;
    font-size:12px ;
}
.butto{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
font-size: 12px;
position: static;
width: 119px;
height: 39px;
left: 581px;
background: #FFFFFF;
border: 1px solid #16AE68;
box-sizing: border-box;
border-radius: 5px;
margin-left:390px ;
margin-top:25px ; 
color: rgb(66, 211, 66);
}
.button{
 display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 30px;
position: static;
width: 550px;
height: 46px;
left: 0px;
top: 355px;
background: #16AE68;
border-radius: 5px;
color: white;
/* flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
margin: 40px 0px; */
}



</style>