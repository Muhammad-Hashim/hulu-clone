import React from "react";
// import request from "../Utils/request";
// import {
//     QueryClient,
//     QueryClientProvider,
//     useQuery,
// } from "@tanstack/react-query";
import BannwerCard from "./BannwerCard";

const imagUrl =
    "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

function Bnnner() {
    async function fetchdata() {
      const data =await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=fac16dd57a8faa6be8f899f97846e9a7&language=en-US"
      ).then((data) => {
        return data.json();
      });
      
    }

    // const { isLoading, isError, data, error } = useQuery(["todos"], () => {
    //     return fetch(
    //         "https://api.themoviedb.org/3/trending/all/week?api_key=fac16dd57a8faa6be8f899f97846e9a7&language=en-US"
    //     ).then((data) => data.json());
    // });


    // if (isLoading) {
    //     return <span className="bg-white">Loading...</span>;
    // }

    // if (isError) {
    //     return (
    //         <>
    //             <span className="bg-white">Error: {error.message}</span>
    //         </>
    //     );
    // }
    console.log(data)
    return (
        <>
            <div className="flex m-4 w-max gap-x-1" >
                {
                    data.results.map((item) => (

                        <BannwerCard key={item.id} name={item.original_title || item.original_name} imagUrl={item.poster_path} />

                    ))}
            </div>
        </>
    );
}

export default Bnnner;