<script setup lang="ts">
import { useNoteStore } from '@/stores/note'
import { formatDateNote } from '@/utils/helper'
import type { NoteResponse } from '@/utils/interface'
import { Button, Column, DataTable, Dialog, useToast } from 'primevue'
import { computed, onMounted, ref } from 'vue'
import EntryNotFound from './EntryNotFound.vue'
import { ProgressSpinner } from 'primevue'
import FormNote from './FormNote.vue'

const noteStore = useNoteStore()
const toast = useToast()
const loading = ref(true)
const visible = ref(false)
const dialogState = ref({
  id: 0,
  type: '' as 'edit' | 'delete' | '',
})

onMounted(() => {
  noteStore
    .getNotes(toast)
    .then((response: NoteResponse[]) => {
      noteStore.setNotes(response)
      loading.value = false
    })
    .catch((err: unknown) => {
      console.error(err)
      loading.value = false
    })
})

const formattedNotes = computed(() =>
  noteStore.notes.map((note: NoteResponse) => ({
    ...note,
    formattedUpdatedAt: formatDateNote(note.updated_at),
  })),
)

const handleDelete = () => {
  if (dialogState.value.id) {
    noteStore
      .deleteNote(toast, dialogState.value.id)
      .then((response: NoteResponse) => {
        if (response) {
          dialogState.value.type = ''
          visible.value = false
        }
      })
      .catch((err: unknown) => console.error(err))
  }
}
</script>

<template>
  <div class="px-2 xs:px-[20px] mt-3 mb-5">
    <div class="text-md">
      <EntryNotFound v-if="!formattedNotes.length && !loading" />

      <template v-else>
        <DataTable
          :value="formattedNotes"
          tableStyle="min-width: 360px"
          v-if="!loading"
        >
          <Column
            field="formattedUpdatedAt"
            header="Tanggal Update"
            class="text-md text-black"
          />

          <Column
            field="title"
            header="Judul Catatan"
            class="text-md text-black"
          />

          <Column header="Action" class="text-md text-black">
            <template #body="slotProps">
              <div class="flex space-x-1.5 items-center">
                <Button
                  @click="
                    (visible = true),
                      (dialogState = {
                        id: slotProps.data.id ?? 0,
                        type: 'edit',
                      })
                  "
                  icon="pi pi-pencil"
                  size="small"
                  severity="warn"
                  aria-label="Edit"
                />
                <Button
                  @click="
                    (visible = true),
                      (dialogState = {
                        id: slotProps.data.id ?? 0,
                        type: 'delete',
                      })
                  "
                  icon="pi pi-trash"
                  size="small"
                  severity="danger"
                  aria-label="Delete"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </template>

      <div v-if="loading" class="flex justify-center mt-10">
        <ProgressSpinner
          style="width: 50px; height: 50px"
          strokeWidth="8"
          fill="transparent"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    modal
    :header="dialogState.type === 'edit' ? 'Ubah Catatan' : 'Hapus Catatan'"
    :style="
      dialogState.type === 'edit' ? { width: '42rem' } : { width: '20rem' }
    "
  >
    <template v-if="dialogState.type === 'edit'">
      <FormNote v-model:visible="visible" :id="dialogState.id" />
    </template>
    <template v-else-if="dialogState.type === 'delete'">
      <h1>Yakin dihapus??</h1>
      <div class="flex justify-end">
        <Button
          :disabled="noteStore.loading"
          :label="noteStore.loading ? 'Loading' : 'Hapus'"
          class="w-[100px] mt-3"
          @click="handleDelete"
        />
      </div>
    </template>
  </Dialog>
</template>
