<template>
  <div>
      <div class="bg-white  rounded-lg shadow-md mt-32 w-1/3  mx-auto flex flex-col items-center container">
        <img src="../assets/icons/Banner.svg" alt="" class="w-full">
        <div >
            <br>
            <span class="text-xs text-indigo-600">my choice</span>
            <h1 class="text-lg font-bold px-8">Direct health functional food recipes opportunity to create!</h1>
            <p class="text-xs text-slate-400 font-thin">Create your own recipe with just one combination of your choice!</p>
            <button class="btn w-32 rounded-none ">
  Go to my choice
</button>
        </div>
        <hr class="w-full mt-4"> 
        <div >
            <br>
            <h2 class="text-xs spa">nutri 3.3 blending</h2>
            <h1 class="text-lg font-bold px-8">service only for you <br>Easily seize the opportunity to launch your own product!</h1>
            <p class="text-xs text-slate-400 font-thin">We provide all services from A to Z of health functional food.</p>
            <button class="btn1 rounded-none mt-4 ">
  What is nutri3.3 Blending?
</button>
        </div>

        <div class="grid grid-cols-3 lg:gap-4 justify-items-center">
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product1.svg" alt="" class="w-24" >  
                 <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>
        </div>
        </div>
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product2.svg" alt="" class="w-24" > 
             <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>  
        </div>
        </div>
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product3.svg" alt="" class="w-24" > 
             <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>  
        </div>
        </div>
      </div>
        <div class="grid grid-cols-3 lg:gap-4 justify-items-center mt-[-45px]">
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product4.svg" alt="" class="w-24" >  
                 <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>
        </div>
        </div>
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product5.svg" alt="" class="w-24" > 
             <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>  
        </div>
        </div>
        <div class="py-10">
            <div class="rounded overflow-hidden max-w-sm">
             <img src="../assets/icons/product6.svg" alt="" class="w-24" > 
             <h4 class="mt-2">nutri3.3</h4>
                 <h5>Nutri ODM Product Title</h5>  
        </div>
        </div>

      </div>
      </div>
</div>  


</template>
<script>
export default {
   name:'Main'
}
</script>
<style scoped>
.btn{
    background: #9642F4;
}
span{
    color:#9642F4;
    font-weight: bold;
}
p{
    color:gray;
}
.container{
    padding: 0;
    height: 1000px;
    width: 590px;
}
hr{
border: 1px solid #CFCFCF;

}
h2{
    color:green;
    font-weight: bold;
    margin:4px ;
}
.btn1{
    background:#16AE68 ;
    font-size: 11px;
    color: white;
    font-weight: bold;
    width:150px ;
    height: 34px;
    padding:2px ;
}
h4{
    border:1px solid green;
    color:green;
    border-radius: 9px;
    width: 52px;
    font-size:11px ;
    align-items: center;
    justify-content: center;
}
h5{
font-size:11px;

}
</style>

