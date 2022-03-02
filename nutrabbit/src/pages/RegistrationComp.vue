<template>
    <div class="container">
        <img src="../assets/icons/Tick-Green.svg"><br>
        <h1>Membership registration completed</h1><br>
        <p>Sign up is complete</p>
        <p>Experience the various features of nutri 3.3 from now on!</p>
         <div class="inline">
            <button class="btn">home</button>
            <button class="btn1">login</button>
         </div>
    </div>
</template>
<script>
export default {
    name:"RegistrationComp",
}
</script>
<style scoped>
.container{
/* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 70px 90px;
position: static;
width: 870px;
height: 541px;
left: 525px;
top: 213px;
background: #c01c1c;
border-radius: 5px;
margin: 133px 0px;
margin-left: 130px; */
    width: 870px;
    height: 540px;
    background-color: #FFFFFF;;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   /* display: flex; */
}
/* img{
position: absolute;
left: 385px;
top: 79px;
width:100px ;
height:100px ; 
} */
/* h1{
position: static;
width: 672px;
height: 48px;
left: 9px;
font-family: Pretendard;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 48px;
color: #000000;
}  */
/* p{
position: static;
width: 469px;
height: 50px;
left: 110.5px;
top: 68px;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 140%;
text-align: center;
color: #828282;
margin-top:200px ;


  
} */

img{
   position: static;
   width:80px;
   height:80px;
   margin-left:340px ;

}
h1{
    font-size:30px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: bold;
}
p{
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 140%;
text-align: center;
color: #828282;  
}
.inline {
  /* display: inline-block; */
  display: flex; 
  flex-direction: row;
  margin-left:150px;
  margin-top:20px ;
}
.btn{
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
position: static;
width: 250px;
height: 45px;
left: 0px;
top: 0px;
background: #FFFFFF;
border: 1px solid #4C4C4C;
box-sizing: border-box;
border-radius: 5px;
color:black;
}
.btn1{
justify-content: center;
align-items: center;
padding: 11px 30px 12px;
position: static;
width: 250px;
height: 45px;
left: 350px;
background: #16AE68;
border-radius: 5px;
color:white; 
margin-top:10px ; 
}
@media (max-width:400px){
.container{
box-sizing:
border-box;
display:
block;
float:
none;
line-height:
24px;
position:
static;
z-index:
auto;
}
.img{
   position: relative;
   width:40px;
   height:40px;
   margin-left:140px ;
}
h1{
position: static;
width: 343px;
height: 72px;
left: 0px;
top: 0px;
font-family: Pretendard;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 20px 0px
}
p{
 position: static;
width: 343px;
height: 75px;
left: 0px;
top: 92px;

font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 130%;
text-align: center;
color: #828282;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 20px 0px; 
}
.inline {
  /* display: inline-block; */
  display: flex; 
  flex-direction: row;
  margin-top:20px ;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.btn {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 30px 12px;

position: static;
width: 166.5px;
height: 45px;
left: 0px;
top: 0px;
background: #FFFFFF;
border: 1px solid #4C4C4C;
box-sizing: border-box;
border-radius: 5px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
margin: 0px 10px;
}
.btn1{
position: static;
width: 41px;
left: calc(50% - 41px/2);
top: 24.44%;
bottom: 26.67%;
font-family: Pretendard;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;  
}


}
</style>>


    
