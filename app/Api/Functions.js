"use client";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const EditNote = (noteId, defaultValues) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValues,
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${baseURL}/actualizarNota/${noteId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error updating note');
            }

            const result = await response.json();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'The note has been updated successfully.',
            }).then(() => {
                window.location.reload();
            });

            return result;
        } catch (error) {
            console.error('Error updating note:', error.message);

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was a problem updating the note.',
            });

            throw error;
        }
    };

    return { register, handleSubmit: handleSubmit(onSubmit), errors };
};

export const NewNote = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${baseURL}/crearNota`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('ERROR');
            }
            Swal.fire({
                icon: "success",
                title: "Success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "Error to save Note",
            });
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit), 
    };
};

export const NewCategory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${baseURL}/newcategories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('ERROR');
            }
            Swal.fire({
                icon: "success",
                title: "Success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "Error to save Note",
            });
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit), 
    };
};


export const DeleteNote = (id) => {
    const noteDelete = async () => {
        try {
            const confirmation = await Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                text: "Do you want to delete this note?",
                showCancelButton: true,
                confirmButtonText: "Yes, delete",
                cancelButtonText: "No, cancel",
                reverseButtons: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            });
            if (confirmation.isConfirmed) {
                const response = await fetch(`${baseURL}/borrar/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Error to delete Note');
                }
                const result = await response.json();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: result.Mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return noteDelete;
};

export const DeleteCategorie = (id) => {
    const categorieDelete = async () => {
        try {
            const confirmation = await Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                text: "Do you want to delete this note?",
                showCancelButton: true,
                confirmButtonText: "Yes, delete",
                cancelButtonText: "No, cancel",
                reverseButtons: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            });
            if (confirmation.isConfirmed) {
                const response = await fetch(`${baseURL}/eliminarCategoria/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Error to delete Note');
                }
                const result = await response.json();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: result.Mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return categorieDelete;
};

export const ArchiveNote = (id) => {
    const archiveNote = async () => {
        try {
            const confirmation = await Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                text: "Do you want to archive this note?",
                showCancelButton: true,
                confirmButtonText: "Yes, archive",
                cancelButtonText: "No, cancel",
                reverseButtons: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            });
            if (confirmation.isConfirmed) {
                const response = await fetch(`${baseURL}/notes/${id}/archive`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Error to archive this Note');
                }
                const result = await response.json();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: result.Mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return archiveNote;
};

export const UnarchiveNoteFunction = (id) => {
    const UnarchiveNote = async () => {
        try {
            const confirmation = await Swal.fire({
                icon: "warning",
                title: "Are you sure?",
                text: "Do you want to unarchive this note?",
                showCancelButton: true,
                confirmButtonText: "Yes, Unarchive",
                cancelButtonText: "No, cancel",
                reverseButtons: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            });
            if (confirmation.isConfirmed) {
                const response = await fetch(`${baseURL}/notes/${id}/unarchive`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Error to unarchive this Note');
                }
                const result = await response.json();
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: result.Mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.location.reload();
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    return UnarchiveNote;
};
