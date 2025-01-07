<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const inputText = ref('') // Terkait dengan nilai input
const height = ref('auto') // Tinggi dinamis untuk textarea
const textareaRef = ref<HTMLTextAreaElement | null>(null)

function adjustHeight() {
  if (textareaRef.value) {
    // Reset tinggi ke auto untuk memungkinkan penyusutan
    textareaRef.value.style.height = 'auto'

    // Ambil tinggi konten, mempertimbangkan padding dan border
    const contentHeight = textareaRef.value.scrollHeight

    // Set tinggi textarea agar sesuai dengan tinggi konten
    textareaRef.value.style.height = `${contentHeight}px`
  }
}

function preventNewLine(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault()
  }
}

watch(inputText, adjustHeight)

onMounted(adjustHeight)
</script>

<template>
  <div class="dynamic-textarea-wrapper">
    <textarea
      ref="textareaRef"
      v-model="inputText"
      :style="{ height }"
      class="dynamic-textarea"
      placeholder="Ketik teks Anda di sini..."
      @input="adjustHeight"
      @keydown="preventNewLine"
    ></textarea>
  </div>
</template>

<style scoped>
.dynamic-textarea-wrapper {
  position: relative;
  width: 100%;
}

.dynamic-textarea {
  width: 100%;
  min-height: 5px; /* Tinggi minimum */
  padding: 10px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  overflow: hidden; /* Cegah scroll bar */
  resize: none; /* Nonaktifkan resize manual */
  white-space: normal; /* Izinkan pembungkus teks ke baris berikutnya */
  word-wrap: break-word; /* Pastikan kata panjang terbungkus */
  transition: all 0.3s ease;
}

/* Sorot saat fokus */
.dynamic-textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>
