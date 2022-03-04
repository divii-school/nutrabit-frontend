<template>
<div class="flex w-full h-screen justify-center items-center">
    <div class="bg-white p-12 rounded-lg shadow-md mt-32 w-1/2 h-3/4">
        <h1 class="text-3xl font-bold ml-[-330px]">change Password</h1>
         <p class="text-sm ml-[-370px]">Please change your password</p>
         <hr class="m-2">
         <form>
           <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-[-230px]" for="username"  >
         Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter new Password">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2 ml-[-100px]" for="password">
       New Password confirmation
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="New Password confirmation">
        </div>
        <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" >change</button>
         </form>
       </div> 
</div>
   
</template>
<script>
export default {
    name:'ChangePassword'
}
</script>
<style scoped>
button{
    background-color:#16AE68;;
    color:white;
    width: 190%;
    border-radius: 5px;
}
input{
    width: 190%;
}
hr{
    border:1px rgb(218, 217, 217) solid;
    width:95%;
}
p{
    color:rgb(218, 217, 217);
}
</style>