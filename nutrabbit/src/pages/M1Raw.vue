<template>
  <div class="container">
    <div class="w-80 p-10 h-80 bg-white rounded-lg mx-auto flex flex-col items-center">
     <h1 class="text-md font-bold mt-14">Added raw material inventory.</h1>
        <div class="">
          <button type="button" class=" btn m-4">go to locker</button> 
          <button type="button" class="px-4 py-2 btn1 ">confirm</button> 

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "M1Raw",
};
</script>

<style  scoped>
.container{
    width:100%;
    height:100vh;
    background:#666666;
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    color:black;

}
.btn{
    background:#4C4C4C;
    color:white;
    height:45px;
}
.btn1{
    background:#4C4C4C;
    color:white;
    height:45px;
}


</style>