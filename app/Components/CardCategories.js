"use client";

import React from 'react'

const CardCategories = ({ categorie, handleDelete }) => {
  const { name, id } = categorie
  return (

    <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
      <button
          onClick={() => handleDelete(id)}
          className="px-4 mt-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors duration-300"
        >
          Delete Categorie
        </button>
    </p>

  );
}

export default CardCategories