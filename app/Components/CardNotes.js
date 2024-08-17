"use client";

import React, { useState } from 'react';
import { useCategories } from '../Hooks/useNotes';
import { EditNote } from '../Api/Functions';

const CardNotes = ({ note, handleDelete, handleArchive }) => {
  const { title, content, id, categories: noteCategories } = note;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Llama a la función EditNote directamente y usa sus valores
  const { register, handleSubmit, errors } = EditNote(id, {
    title: note.title,
    content: note.content,
    categoryNames: noteCategories.map(category => category.name),
  });
  
  const { categories } = useCategories();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 break-words">
        {content}
      </p>
      <div className="mb-4 flex flex-wrap">
        {noteCategories.map((category) => (
          <span
            key={category.id}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full dark:bg-blue-700 dark:text-blue-200"
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => handleArchive(id)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors duration-300"
        >
          Archive Note
        </button>
        <button
          onClick={handleEditClick}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors duration-300"
        >
          Edit Note
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors duration-300"
        >
          Delete Note
        </button>
      </div>

      {isModalOpen && (
        <div id="crud-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-4">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Edit Note</h2>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 transition-colors dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Note Title
                    </label>
                    <input
                      {...register('title')}
                      id="title"
                      name="title"
                      placeholder="Enter note title"
                      className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm">{errors.title.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">
                      Select Categories
                    </label>
                    <div className="flex flex-wrap">
                      {categories.map((category) => (
                        <label key={category.id} className="mr-4">
                          <input
                            type="checkbox"
                            {...register('categoryNames')}
                            value={category.name}
                            defaultChecked={noteCategories.some(cat => cat.name === category.name)}
                            className="mr-2"
                          />
                          {category.name}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Note Content
                    </label>
                    <textarea
                      {...register('content')}
                      id="content"
                      name="content"
                      rows={6}
                      placeholder="Enter note content"
                      className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    {errors.content && (
                      <p className="text-red-500 text-sm">{errors.content.message}</p>
                    )}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardNotes;
