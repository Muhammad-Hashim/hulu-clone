import next from 'next';
import React from 'react';
import Image from 'next/image';


export const getStaticProps = async (url) => {
    const res = await fetch(`https://api.themoviedb.org/3${url}`);
    const data = await res.json();

    console.log(data)
    return {
        props: {
            movies: data.results,
        },
    };
};

function Resultcard({ url, movies }) {

    return (
        <div className="">
            {movies.map((item) => {
                console.log(item.title)


            })
            }
        </div>

    )
}



export default Resultcard