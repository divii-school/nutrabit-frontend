<template>
  <div class="Auth-wrap">
    <Header />
    <div class="bg-white rounded shadow-lg ml-auto mr-auto max-w-sm">
      <h2 class="text-center font-bold text-xl mb-4">login</h2>
      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block -ml-48">ID</label>
          <input type="text" placeholder="Enter ID" class="px-8 py-1 shadow-sm mt-2 border focus:border-blue-100 focus:bg-white focus:outline-none text-sm" autocomplete autofocus required/>
        </div>
        <div class="mt-3">
          <label class="block -ml-44">password</label>
          <input type="password" minlength="6" placeholder="Enter Password" class=" px-8 py-1 shadow-sm mt-2 border focus:border-blue-100 focus:bg-white focus:outline-none text-sm " required/>
        </div>
        <div class="mt-3 -ml-44">
          <input type="checkbox" />
          <label class="px-1 text-sm">save ID</label>
        </div>
        <p class="mt-3 -ml-32 text-sm text-gray-100">find ID | find password</p>
        

        <div>
          <a href="#" class="ml-80 text-sm hover:text-blue-700 focus:text-blue-700 focus:outline-none">Sign up</a>
        </div>
        <button class="btn" type="submit">login</button>
        <hr class="broder">
        <button class="btn-1">
          <div class="flex item-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
            <span class="ml-2">
              Start With cacao
            </span>
          </div>
        </button><br>
        <button class="btn-2">
          <div class="flex item-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clip-rule="evenodd" />
</svg>
            <span class="ml-2">
             Getting Started with Naver
            </span>
          </div>
        </button>
        </form>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
export default {
  name: "Login",
  components: {
    Header,
    Button,
  },
};
Button;
</script>

<style>
.btn{
  width: 300px;
  background-color: rgb(34, 31, 31);
  color: white;
  padding:3px;
  border-radius:5px ;
  margin:10px ;
  height:40px ;
}
.btn-1{
  width: 300px;
  background-color: #ffe600;
  color:black;
  border-radius:5px ;
  height:40px ;
  margin:10px ;
} 
.btn-2{
  width: 300px;
  background-color:rgb(6, 158, 6);
  color:white;
  border-radius:5px ;
  height:40px ;
  margin-top:5px ;
  margin-bottom:20px;
}  
.border{
  border-bottom-color:rgb(243, 233, 233) ;
  margin-left:30px ;
  
} 


</style>