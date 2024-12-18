import React from "react";

export default function Input(props) {
    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg overflow-hidden">

            {/* Transaction Name Input */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Name
            </label>
            <div className="relative mt-2">
                <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all ease-in-out duration-200">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter the Transaction Name"
                        className="w-full py-2 px-3 text-base text-gray-900 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        value={props.name}
                        onChange={(e) => props.setName(e.target.value)}
                        autoComplete="on"
                    />
                </div>
            </div>

            {/* Amount Input */}
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mt-6 mb-2">
                Amount
            </label>
            <div className="relative mt-2">
                <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all ease-in-out duration-200">
                    <span className="text-gray-500 text-base pl-3">₹</span>

                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        placeholder="0.00"
                        className="ml-2 flex-grow py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        value={props.amount}
                        onChange={(e) => props.setAmount(e.target.value)}
                        onClick={(e) => props.setAmount('')}
                        autoComplete="off" 
                        min={0}
                    />

                    <div className="relative">
                        <select
                            id="type"
                            name="type"
                            aria-label="Type"
                            className="block w-28 appearance-none bg-transparent text-gray-500 text-base focus:outline-none sm:text-sm pr-10 over"
                            value={props.type}
                            onChange={(e) => props.setType(e.target.value)}
                            autoComplete="off"
                        >
                            <option>Expense</option>
                            <option>Income</option>
                        </select>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            width="24px"
                            viewBox="0 0 24 24"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Add Button */}
            <button
                className="min-w-full mt-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded transition"
                onClick={props.add}
            >
                Add
            </button>
        </div>
    );
}
