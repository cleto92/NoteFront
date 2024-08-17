"use client";

import { useState, useEffect } from "react";
import { GetAllNotes, Archived, GetAllCategories } from "../Api/Api";

const useNotes = () => {
    const [notes, setNotes] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
            const fetchNotes = async () => {
                try {
                    const data = await GetAllNotes()
                    setNotes(data)
                } catch (error) {
                    console.log(error)
                    setError(error)
                }
            }
            fetchNotes()
    }, [])
    return {notes, error}
}

const useCategories = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const data = await GetAllCategories()
                    setCategories(data)
                } catch (error) {
                    console.log(error)
                    setError(error)
                }
            }
            fetchCategories()
    }, [])
    return {categories, error}
}

const useArchived = () => {
    const [archived, setArchived] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
            const fetchArchived = async () => {
                try {
                    const data = await Archived()
                    setArchived(data)
                } catch (error) {
                    console.log(error)
                    setError(error)
                }
            }
            fetchArchived()
    }, [])
    return { archived, error}
}


export  {useNotes, useArchived, useCategories}