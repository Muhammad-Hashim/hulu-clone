import { Result } from 'postcss'
import React from 'react'
import request from '../Utils/request'
import Resultcard from './Resultcard'

function Genres() {


    return (
        <div>
            <div>
                {
                    Object.entries(request).map(([key, { title, url }]) => (
                        <h1 key={key} className="text-red-400">
                            {title}
                            <Resultcard url={url} />
                        </h1>
                    ))
                }
            </div>


        </div>
    )
}

export default Genres