<template>
  <div class="app">
    <div class="header"><h1 class="app-title">Vue Notes</h1></div>
      <NoteEditor />
      <NoteFilter />
      
      <div class="notes">
        <Note v-for="note in filteredNote" :key="note.id" :note="note"/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoteEditor from './components/NoteEditor.vue'
import NoteFilter from './components/NoteFilter.vue'
import Note from './components/Note.vue'
export default {
  components: {
    NoteEditor,
    NoteFilter,
    Note
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters(['filteredNote'])
  }
}
</script>
<style>

</style>
./components/NoteEditor.vue