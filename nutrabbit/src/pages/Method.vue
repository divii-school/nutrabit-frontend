<template>
    <div>
     <div class="container">
        <div class="box1">
        <h1>How to sign up</h1>
        <p class="first">
            Please Select a method to proceed when registering as a member
        </p>
        <hr>
        </div>
        <div class="box2">
           <h2>General membership registration</h2>
           <p class="second">
             sign up as a member via email
           </p>
            <button class="btn">Sign Up</button>
            <hr class="HR">
             <h3>SNS membership registration</h3>
           <p class="third">
             sign up as a member through your sns id
           </p>
              <button class="btn-1">
                <img src="../assets/icons/logo.svg">  
             <span>Start With cacao</span> 
        </button><br>
        <button class="btn-2 ">
         <p>Getting Started with Naver</p>
        </button>
        </div>
     </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue'
export default {
  components: { Button },
    name:'Method'
}
</script>
<style scoped>
.container{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 70px 90px;
position: static;
width: 680px;
height: 670px;
left: 619px;
top: 160px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
}
/* .final{
    padding: 30px;
} */
.box1{
    width: 513px;
    height: 22px;
    position: static;
    top:100px;
}
.box1 h1{
position: static;
width: 278px;
height: 48px;
left: 0px;
margin-top:-200px ;
font-family: Pretendard;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 48px;
color: #000000; 
/* margin-left:30px ; */
}
 .first{
position: static;
width: 513px;
height: 22px;
left: 0px;
top: 58px;
font-family: Pretendard;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 22px;
text-align: center;
color: #7C7A82;
margin-top: -12px;
margin-left:px ;
}
hr{
position: static;
width: 500px;
height: 0px;
left: 0px;
border: 1px solid #E0E0E0;
margin-top: 25px; 
margin-left:10px ;
}
.box2{
display: flex;
flex-direction: column;
align-items: center;
/* padding: 0px 80px; */
position: static;
width: 502px;
height: 128px;
left: 0px;
top: 0px;
background: #FFFFFF;
border-radius: 5px;
margin-top: -50px;
}
.box2 h2{
position: static;
width: 363px;
height: 29px;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #333333;
margin-left: -500px;
}
.second{
position: static;
width: 250px;
height: 19px;
/* left: 72.5px; */
top: 34px;
font-family: Pretendard;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
color: #666666;
margin-left: -500px;  
}
.btn{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
position: static;
width: 502px;
height:45px;
background: #4C4C4C;
border-radius: 5px; 
margin-left: -500px; 
margin-top:20px ; 
}
.box2 h3{
position: static;
width: 363px;
height: 29px;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #333333;
margin-left: -450px;
margin-top:12px ;
}
.third{
position: static;
width: 268px;
height: 19px;
/* left: 72.5px; */
top: 34px;
font-family: Pretendard;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
color: #666666;
margin-left: -500px;  
}
.HR{
position: static;
width: 495px;
height: 0px;
left: 0px;
border: 1px solid #E0E0E0 ;
margin-top: 20px; 
margin-left:-500px ;
}
.btn-1{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px;
position: static;
width: 502px;
height: 46px;
left: 0px;
top: 0px;
background: #FEE500;
border-radius: 5px;
margin-left: -500px; 
margin-top:25px ;
}
.btn-2{
 display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px;
position: static;
width: 502px;
height: 46px;
left: 0px;
top: 56px;
background: #03C75A;
border-radius: 5px;
margin-left: -510px; 
margin-top:5px ;
}
img{
width: 20px;
height: 20px;
left: 1px;
top: 1px;
}
span{   
position: static;
width: 143px;
left: calc(50% - 143px/2 + 17px);
top: 25%;
bottom: 25%;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: #393A3A;
}
.btn-2 p{
position: static;
width: 233px;
left: calc(50% - 233px/2 + 17px);
top: 25%;
bottom: 25%;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
margin-top:-10px ;


 
}






</style>