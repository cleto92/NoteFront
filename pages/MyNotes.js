"use client";

import React, { useState } from 'react';
import Layout from '@/CSS/Layout';
import CardNotes from '@/app/Components/CardNotes.js';
import { useNotes, useCategories } from '@/app/Hooks/useNotes';
import ModalNote from '@/app/Components/ModalNote';
import { DeleteNote, ArchiveNote } from '@/app/Api/Functions';

const MyNotes = () => {
  const { notes } = useNotes();
  const { categories } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const handleArchive = async (id) => {
    try {
      const archiveNote = ArchiveNote(id);
      await archiveNote();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const noteDelete = DeleteNote(id);
      await noteDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewNoteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); 
  };

  const filteredNotes = selectedCategory ? notes.filter(note => 
    note.categories && note.categories.some(category => category.name === selectedCategory)
  ) : notes;

  return (
    <Layout>
      <div className="mb-4">
        <button
 
          onClick={handleNewNoteClick}
        >
          New Note
        </button>
        {categories && categories.length > 0 ? (
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="rounded-lg mx-4 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value=''>All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        ) : (
          <p>No Hay Categorias</p>
        )}
      </div>

      <ModalNote isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <div key={note.id} className="note-card">
              <CardNotes handleArchive={handleArchive} handleDelete={handleDelete} note={note} />
            </div>
          ))
        ) : (
          <p>No notes available.</p>
        )}
      </div>
    </Layout>
  );
};

export default MyNotes;
