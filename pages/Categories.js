"use client";

import React, { useState } from 'react';
import Layout from '@/CSS/Layout';
import ModalCategorie from '@/app/Components/ModalCategorie';
import CardCategories from '@/app/Components/CardCategories';
import { useCategories } from '@/app/Hooks/useNotes';
import { DeleteCategorie } from '@/app/Api/Functions';

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categories } = useCategories();

  const handleDelete = async (id) => {
    try {
      const categorieDelete = DeleteCategorie(id);
      await categorieDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewCategorie = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <button
       
        onClick={handleNewCategorie}
      >
        New Categorie
      </button>
      <ModalCategorie  isOpen={isModalOpen} onClose={closeModal} />

      <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories && categories.length > 0 ? (
          categories.map(categorie => (
            <div key={categorie.id} className="categorie-card">
              <CardCategories handleDelete={handleDelete} categorie={categorie} />
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
