"use client";

import React from 'react';

const ArchivedCard = ({ arch, Unarchive }) => {
  const { title, id, content, categories } = arch;

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Title: {title}
      </h5>
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 break-words">
        Content: {content}
      </p>

      <div className="mb-4 flex flex-wrap">
        {categories.map((categorie) => (
          <span
            key={categorie.id}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full dark:bg-blue-700 dark:text-blue-200"
          >
            {categorie.name}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => Unarchive(id)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Unarchive
        </button>


      </div>
    </div>
  );
};

export default ArchivedCard;
