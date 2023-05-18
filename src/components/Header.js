import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import logo from '../logo-w.png'
import logo from '../logo-white.png'




const Header = ({query}) => {
  const [ value, setValue ] = React.useState(query)
  

  const handleabeelo = (e) => {
    e.preventDefault()
    const query = document.getElementById('query').value
    if (query) {
      window.location.href = `/results?query=${query}`
    } 
    else{

    }

   }

   useEffect(() => {
    setValue(query)
    }, [query])


   
  return (
    <header>
    <nav class=" border-gray-200 py-8 dark:bg-gray-950  flex flex-row">
    <a href="/" class="pl-48 mb-4 flex items-center">
    <img class="h-20   " src={logo} alt="logo" />
    </a>

        <div class="flex flex-row  justify-between items-left ml-12 ">
          

            <input value={value } onChange={(e) => setValue(e.target.value)} style={{width: "400px"}}  type="text" id="query" class="mt-4  h-12  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 appearance-none " placeholder="text" required />
            <button onClick={handleabeelo} type="submit" class="w-32 mt-4 ml-4  text-white bg-red-600 hover:bg-red-700 h-12 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center ">ABEELO</button>

      
           
        </div>
        <div className='flex flex-row mt-6'>
        <svg class="ml-6 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <p class="ml-4 text-xl font-medium text-gray-400 ">"Abeelo Smart, Abeelo Efficiently: Feel the Power of our Edeelo"</p>

        </div>
    </nav>
</header>
  )
}

export default Header