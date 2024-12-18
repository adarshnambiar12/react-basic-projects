import React from "react";

const DetailedView = ({ card, onBackClick, animationDirection }) => {
    return (
        <div
            className="w-full flex flex-col items-center justify-center bg-gray-900 text-gray-100 animate-slide-left overflow-y-auto overflow-x-hidden p-4 sm:p-8 lg:p-12"
        >
            <img
                src={card.image}
                alt={`${card.name} Image`}
                className="sm:h-64 md:h-80 lg:h-80 object-cover object-center mb-6 rounded-lg shadow-lg"
            />
            <div className="p-4 text-center max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">{card.name}</h2>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg m-6">{card.detailedContent}</p>
            </div>
            <button
                type="button"
                onClick={onBackClick}
                className="px-6 py-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 transition-colors hover:bg-gray-600"
            >
                Back
            </button>
        </div>
    );
};

export default DetailedView;
