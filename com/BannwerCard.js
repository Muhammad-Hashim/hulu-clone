import Image from 'next/image'
import React from 'react'
function BannwerCard({ name, imagUrl, title }) {




    return (
        <>

            <main >
                <div class="bg-slate-600" >
                    <Image className="w-[100%] rounded  bg-slate-600  z-10" src={`https://image.tmdb.org/t/p/w500/${imagUrl}`} alt="poster" height={400} width={230} />
                    {/* <h1>{title}</h1> */}
                </div>
                <div>

                    <h1>{name}</h1>
                </div>
            </main>

        </>
    )
}

export default BannwerCard
