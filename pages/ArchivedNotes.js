"use client";

import React from 'react'
import Layout from '@/CSS/Layout'
import ArchivedCard from '@/app/Components/ArchivedCard'
import { useArchived } from '@/app/Hooks/useNotes'
import { UnarchiveNoteFunction } from '@/app/Api/Functions'

const ArchivedNotes = () => {

  const {archived} = useArchived()

  const Unarchive = async (id) => {
    try {
      const UnarchiveNote = UnarchiveNoteFunction(id)
      await UnarchiveNote()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {archived.length > 0 ? (
          archived.map(arch => (
            <div key={arch.id} className="note-card">
              <ArchivedCard Unarchive={Unarchive} arch={arch} />
            </div>
          ))
        ) : (
          <p>No notes Archived available.</p>
        )}
      </div>
        </Layout>
  )
}

export default ArchivedNotes