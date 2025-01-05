import { defineStore } from 'pinia'
import axiosWarderApiInstance from '@/utils/apiWarder'
import { handleApiError } from '@/utils/handleApiErrors'
import type { Toast } from '@/utils/type'
import type { NoteForm, NoteResponse } from '@/utils/interface'

export const useNoteStore = defineStore('notes', {
  state: () => ({
    loading: false,
    error: null as string | null,
    notes: [] as NoteResponse[],
  }),
  actions: {
    setNotes(notes: NoteResponse[]) {
      this.notes = notes
    },
    async getNotes(toast: Toast) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.get(
          'seller/announcements',
        )
        const { data } = response
        this.notes = data
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async postNote(toast: Toast, payload: NoteForm) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.post(
          'seller/announcements',
          payload,
        )
        const { data } = response

        this.notes = [...this.notes, data]
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Info berhasil ditambahkan!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async updateNote(toast: Toast, payload: NoteForm, id: number) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.put(
          `seller/announcements/${id}`,
          payload,
        )
        const { data } = response
        this.notes = this.notes.map((note: NoteResponse) =>
          note.id === id ? { ...note, ...data } : note,
        )

        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Info berhasil diupdate!!',
          life: 3000,
        })

        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
    async deleteNote(toast: Toast, id: number) {
      this.loading = true
      this.error = null
      try {
        const { data: response } = await axiosWarderApiInstance.delete(
          `seller/announcements/${id}`,
        )
        const { data } = response
        this.notes = this.notes.filter((note: NoteResponse) => note.id !== id)
        toast.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Info berhasil dihapus!!',
          life: 3000,
        })
        return data
      } catch (error: unknown) {
        handleApiError(error, toast)
      } finally {
        this.loading = false
      }
    },
  },
})
