import React from 'react'

const Pagination = ({goToPreviousPage,goToNextPage}) => {
  return (
<nav aria-label="Page navigation example">
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <button onClick={goToPreviousPage}  class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-700   rounded-l-lg hover:bg-gray-600 hover:text-gray-200">
        <span class="sr-only">Previous</span>
        Previous
      </button>
    </li>

    <li>
    <button onClick={goToNextPage}  class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-700   rounded-r-lg hover:bg-gray-600 hover:text-gray-200">
        <span class="sr-only"></span>
        Next
        {/* <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> */}
      </button>
    </li>
  </ul>
</nav>

  )
}

export default Pagination