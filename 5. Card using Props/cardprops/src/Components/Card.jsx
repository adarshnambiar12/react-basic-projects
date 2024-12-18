import React from "react";

const Card = ({ name, image, desc, onClick }) => {
    return (
        <div className="max-w-xs rounded-lg shadow-xl bg-black text-gray-100 overflow-hidden" style={{ margin: '20px' }}>
            <img
                src={image}
                alt={`${name} Image`}
                className="object-cover object-center w-full h-72 transition-transform transform hover:scale-105"
            />
            <div className="flex flex-col justify-between p-6 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white tracking-wide">{name}</h2>
                    <p className="text-gray-400 text-sm">
                        {desc}
                    </p>
                </div>
                <button
                    type="button"
                    onClick={onClick}
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 transition-colors hover:bg-gray-600"
                >
                    Read more
                </button>
            </div>
        </div>
    );
}

export default Card;
