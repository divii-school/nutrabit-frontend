<template>
<div>
    <nav>
      <!-- desktop Menu -->
    <div class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex">
            <!-- logo -->
            
     <a href="" class="flex items-center  py-2 px-12" >
       
<span class="text-2xl font-extrabold text-green-500 font-mono">nutri3.3</span>
     </a>
            
            <!-- menu -->
            <div class=" hidden md:flex items-center space-x-4">
              <a href="/" class="text-sm hover:text-indigo-400">my choice</a>
              <a href="/" class="text-sm hover:text-indigo-400">nutri3.3 blending</a>
            </div>
          </div>
          <!-- login -->
          
           <div class="hidden md:flex items-center space-x-4" >
           <a href="/" class="flex items-center"> <input class="text-sm " type="text" placeholder=" Enter your desired search term..."
           >
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </a>
            <a href="/" class="text-sm hover:text-indigo-400">login</a>
             <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" text-sm flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Ko <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
            
          </div>
          <!-- button show mobile menu -->
         <div class="md:hidden flex items-center">
           <button class="py-5 px-4">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
           </button>
           <button class="py-5 px-4">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>

         </div>

        </div>
      </div>
    </div>
     <!-- mobile menu -->
     <div>
     </div>
    </nav>
    <div class=" p-8 text-2xl font-extrabold text-center">
    </div>
</div>
</template>
<script>
export default {
   name:'Header'
}
</script>
<style scoped>
input[type=text] {
  border: none;
  border-bottom: 2px solid rgb(134, 128, 128);
  width: 220px;
}
</style>
 


