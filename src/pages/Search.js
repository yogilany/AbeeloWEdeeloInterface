import React from 'react'
import logo from '../logo-white.png'

const Search = () => {

   const handleabeelo = (e) => {
    e.preventDefault()
    const query = document.getElementById('query').value
    if (query) {
      window.location.href = `/results?query=${query}`
    } 
    else{

    }

   }

   const handleKeypress = e => {
    e.preventDefault();
    //it triggers by pressing the enter key
    alert("hello");
  if (e.keyCode === 13) {
    handleabeelo();
  }
};
  return (
    // <div className=" bg-gray-50">
   
    <section class=" dark:bg-gray-950  dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] py-36 h-screen">
   <div class="flex flex-col items-center  px-6 py-8 mx-auto h-100 ">
   <img class="h-72 mb-6  mr-2" src={logo} alt="logo" />
   <h1 class="mb-12 text-xl font-bold text-center text-gray-900 dark:text-white "> <span class="text-red-600"> عبيلـــــــــــــــــــــــوا</span>  ريكويـــــــــــــــــــست<span class="text-red-600"> يديلــــــــــــــــــــــك </span>ريسبونـــــــــــــــــــــــــس </h1>
   <div>
         {/* <input style={{width: "700px"}} type="text" name="query" id="query" class="w-ful bg-gray-50 border-2  border-gray-300 text-gray-900 sm:text-md rounded-2xl focus:ring-none focus:ring-0 focus:ring-offset-0  p-2.5  " placeholder="Enter you query" required={true} /> */}
     </div>
     <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input style={{width: "700px"}} type="text" name="query" id="query" class="w-ful p-4 pl-10 bg-gray-800 border-1  text-gray-50 sm:text-md rounded-2xl focus:ring-none focus:ring-0 focus:ring-offset-0  " placeholder="Enter your query" required={true} />

    </div>
</form>
     <button           onKeyPress={handleKeypress}
 onClick={handleabeelo} type="submit" class="w-32 mt-8  text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center ">ABEELO</button>
 
 
   </div>
 </section>   
    //  </div>
  )
}

export default Search