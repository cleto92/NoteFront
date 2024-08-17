"use client";

import React from 'react';
import { NewCategory } from '../Api/Functions';


const ModalCategorie = ({ isOpen, onClose }) => {

  const {register, handleSubmit} = NewCategory()


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">New Categorie</h2>
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 rounded-lg p-1.5"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="p-4">
            <form onSubmit={handleSubmit} >
              <div className="mb-4">
                <label htmlFor="title" className=" mb-2 block text-sm font-medium">
                  Categorie Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  placeholder="Enter Categorie name"
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

export default ModalCategorie;
