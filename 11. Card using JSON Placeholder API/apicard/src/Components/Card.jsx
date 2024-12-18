import React from 'react'

const Card = ({props}) => {

    const {userId, id, title, body} = props;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-2">User ID: <span className="text-gray-600">{userId}-{id}</span></h2>
                <h3 className="text-md font-semibold text-blue-600 mb-3">
                    <span className="block text-gray-700 text-sm mt-1">
                        {title}
                    </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {body}
                </p>
                <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition">
                        Read More
                    </button>
                </div>
        </div>

    )
}

export default Card
