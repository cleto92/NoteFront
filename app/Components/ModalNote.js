"use client";

import React from 'react';
import { NewNote } from '@/app/Api/Functions';
import { useCategories } from '../Hooks/useNotes';

const ModalNote = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = NewNote();
  const { categories } = useCategories();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">New Note</h2>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 rounded-lg p-1.5"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium">
                  Note Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register('title')}
                  placeholder="Enter note title"
                  className="w-full p-2.5 border rounded-lg"
                />
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
                        className="mr-2"
                      />
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium">
                  Note Content
                </label>
                <textarea
                  id="content"
                  {...register('content')}
                  rows={4}
                  placeholder="Enter note content"
                  className="w-full p-2.5 border rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNote;
