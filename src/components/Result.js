import React from 'react'

const Result = ({query, link}) => {

    const text = "More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."

      // Create a regex pattern by joining the words to highlight with '|'
      const wordsArray = text.split(' ');


  // Split the text into an array of substrings
//   const parts = text.split(pattern);
  // console.log("wordsArray", wordsArray)
  // console.log("query", query)

  return (
    <div id="alert-additional-content-5" class="my-2 p-4 border border-gray-300 rounded-lg bg-gray-50 " role="alert" style={{width:"800px"}}>
  <div class="flex items-left flex-col">
  <a href={link}  target="_blank" class="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline">Computer vision</a>
  <h3 class="text-sm text-green-700">{link}</h3>

    {/* <a class="text-xl font-normal text-gray-800">Computer vision</a> */}
  </div>
  <div class="mt-2 mb-4 text-md text-gray-800 ">
  {wordsArray.map((part, index) => (
        // Wrap the matched words in <strong> tags
      part == query ? <strong>{part }{" "}</strong> : part + " "
       
      ))}

  </div>
 
</div>
  )
}

export default Result