import React from "react";
import Header from "../components/Header";
import Result from "../components/Result";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Results = () => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [time, setTime] = React.useState(null);
  const [count, setCount] = React.useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);


  const itemsPerPage = 10;


  // make an array of 8 numbers [1,2,3,4,5,6,7,8]
  const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
  // map over the array and return a Result component for each number
  // <Result />

  const [query, setResult] = React.useState("");
  // catch the query parameter from the url
  useEffect(() => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  setStart(startIndex);
  setEnd(endIndex);

  }, [currentPage]);
  useEffect(() => {

    setLoading(true);
 
    var params = new URLSearchParams(window.location.search);

    // Check if the "query" parameter exists
    if (params.has("query")) {
      // Get the value of the "query" parameter
      var queryString = params.get("query");
      setResult(queryString);

      // Use the query parameter value as needed
      console.log("Query parameter value:", queryString);
    } else {
      console.log("Query parameter not found in the URL");
    }

    // fetch the api with the query parameter
    const fetchResults = async () => {
      // add parameter to the request
      // get the current time
      const time = new Date().getTime();
      try {
        console.log("query", queryString);
        axios
          .get(`http://localhost:8080/search?search=${queryString}`)
          .then(function (response) {
            console.log(response);
            const data = response.data;
            console.log(data);
            // get the current time
            const time2 = new Date().getTime();
            // calculate the time difference
            const timeDiff = time2 - time;
            // set the time difference in seconds
            setTime(timeDiff / 1000 + " seconds");
            // set the count
            // set the results that have the snippet not null and longer than 5 characters only 
            setResults(
              data
                ? data.urls.filter((result) => result.Snippet != null && result.Snippet.length > 5)
                : []
            );

            
            setLoading(false);

          });

      } catch (err) {
        console.log(err);
      }
    };
    fetchResults();
  }, []);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo(0, 0);

  };
  
  const goToNextPage = () => {
    if (currentPage < Math.ceil(results.length / itemsPerPage )) {
      setCurrentPage(currentPage + 1);
    }
    // move to the top of the page
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setCount(results.length);
  }, [results]);

  return (
    <>
      <Header query={query} />
      <div className="  bg-gray-900 h-full pb-12">
        <h2 className=" px-48 py-8  text-gray-500">
          About {count ? count : null} results ({time ? time : null}){" "}
        </h2>
        <div className=" px-48  mb-12">
          {!loading && results ? results.length === 0 ? <div><h1 class=" text-white font-light text-3xl">Your search - <span class="font-bold "> {query}</span> - did not match any documents.</h1><p class="text-white text-lg mt-12"><span class="text-2xl font-bold mb-4">Suggestions:</span>

<ul class="mt-4"><li>Make sure that all words are spelled correctly.</li>
<li>Try different keywords.</li>
<li>Try more general keywords.</li></ul></p></div> : 
          <>
          {results
            .slice(start, end)
              .map((result, index) => (
                 <Result key={index} link={result.url} query={query} title={result.title} snippet={result.description} />
           ) )}
          <div className=" mt-8  mb-20">
          <Pagination goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />
        </div>
          </>
         
           
            : (
            <div class="flex items-center bg-transparent justify-center w-full h-56   rounded-2xl ">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-48 h-48 mr-2 text-gray-200 animate-spin transition-all  fill-red-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          )}
        </div>
       
      </div>
    </>
  );
};

export default Results;
