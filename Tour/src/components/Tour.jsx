import React from 'react'
import Cards from './Cards';

const Tour = ({ data, Remove }) => {
    console.log(data);
    return (
        <>
            <h1 className='text-4xl font-extrabold text-center m-8'>😎🚃 Plan for TOUR 🚗🔊</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 m-8">
                {
                    data.map((items) => {
                        return (<Cards key={items.id}{...items} Remove={Remove}></Cards>)
                    })
                }
            </div>
        </>
    )
}

export default Tour