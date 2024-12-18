import React from 'react';

const Table = ({ data, handleDelete }) => {
    const total = data.reduce((acc, item) => {
        if (item.type === 'Income') {
            return acc + Number(item.amount);
        } else {
            return acc - Number(item.amount);
        }
    }, 0);

    return (
        <div className="max-w-3xl mx-auto my-8 relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-base font-bold text-gray-700 bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-s-lg">
                            Transaction Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-1 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white hover:bg-gray-50">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                {item.name}
                            </th>
                            <td
                                className={`px-6 py-4 font-medium ${
                                    item.type === 'Income' ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {item.type === 'Income' ? '+' : '-'}₹{item.amount}
                            </td>
                            <td
                                className={`px-6 py-4 font-medium ${
                                    item.type === 'Income' ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {item.type}
                            </td>
                            <td className="px-1 py-4 text-center">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="20px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#000"
                                        className="mx-auto"
                                    >
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="font-semibold text-gray-900">
                        <th scope="row" className="px-6 py-3 text-base">
                            Total
                        </th>
                        <td
                            className={`px-6 py-3 ${
                                total < 0 ? 'text-red-500' : 'text-green-500'
                            }`}
                        >
                            {total < 0 ? '-' : '+'} ₹{Math.abs(total)}
                        </td>
                        <td className="px-6 py-3">
                            {total >= 0
                                ? 'Saved ₹' + Math.abs(total)
                                : 'Spent ₹' + Math.abs(total)}
                        </td>
                        <td className="px-1 py-3"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;
