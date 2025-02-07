import React, { useState } from 'react'

const Cards = ({ id, name, info, image, price, Remove }) => {

    const [read, setRead] = useState(false);
    const desc = read ? info : info.substring(0, 100) + "...";

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg object-cover h-60 w-full" src={image} alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-4">{name}</h5>
            <p className="card-text m-4">{desc}{" "}
                {read ? (
                    <span
                        onClick={() => {
                            setRead(false);
                        }}
                        style={{ cursor: "pointer", color: "#0984e3" }}>Read Less
                    </span>
                ) : (
                    <span
                        onClick={() => {
                            setRead(true);
                        }}
                        style={{ cursor: "pointer", color: "#0984e3" }}>Read More
                    </span>
                )}{" "}</p>
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 m-4">₹{price}</h6>
            <button className='text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                onClick={() => { Remove(id); }}>
                Delete</button>
        </div>

    )
}

export default Cards