import React, { useEffect } from 'react'
import { useState } from 'react'


const Result = ({query, link, title, snippet}) => {
  const [words, setWords] = useState([])

    const text = "More info about this info dark goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."

      // Create a regex pattern by joining the words to highlight with '|'

      useEffect(() => {
        const wordsArray = snippet ? snippet.split(' ') : [];
        // put the only first 10 words in the array and add ... at the end
        // get only the 10 words that 

          const targetIndex = wordsArray.indexOf(query);

       
          
          const startIndex = Math.max(0, targetIndex - 10);
          const endIndex = Math.max(targetIndex + 10, wordsArray.length - 1);
          
          const wordsAroundTarget = wordsArray.slice(startIndex, endIndex + 1);

          setWords(wordsAroundTarget)

     

      }, [])


  // Split the text into an array of substrings
//   const parts = text.split(pattern);
  // console.log("wordsArray", wordsArray)
  // console.log("query", query)

  return (
    <div id="alert-additional-content-5" class="my-2 p-4 rounded-lg bg-gray-800 " role="alert" style={{width:"800px"}}>
  <div class="flex items-left flex-col">
  <a href={link}  target="_blank" class="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline">{title}</a>
  <h3 class="text-sm text-green-500">{link}</h3>

    {/* <a class="text-xl font-normal text-gray-800">Computer vision</a> */}
  </div>
  <div class="mt-2 mb-4 text-md text-gray-50 ">
  {words.map((part, index) => (
        // Wrap the matched words in <strong> tags
      part === query ? <strong>{part }{" "}</strong> : part + " "
       
      ))}

  </div>
 
</div>
  )
}

export default Result