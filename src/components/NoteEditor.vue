<template>
  <form @submit.prevent="addNote">
      <div class="contextbox">
        <input type="text" placeholder="Title" v-model="note.title"/>
        <textarea
          rows="8"
          placeholder="Description"
          class=""
          spellcheck="false"
          v-model="note.desc"
        ></textarea>
        <div class="controls">
          <div class="colors">
            <span class="c1" 
            v-for="color in colors" 
            :key="color" 
            :style="{backgroundColor: color, border: this.note.color == color ? '1px solid #000' : ''}" 
            @click="note.color = color"></span>
          </div>
          <button>Add</button>
        </div>
      </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapState, mapMutations } from 'vuex'
export default {
  data(){
    return{
      note: {
        title: '',
        desc: '',
        color: null,
      }
    }
  },
  computed: {
    ...mapState(["colors"])
  },
  methods: {
    addNote(){
      this.note.created_at = new Date();
      this.note.id = uuidv4();
      this.$store.commit('addNote', this.note);

      //empty note
      this.note = {
        title: '',
        desc: '',
        color: null,
      }
    }
    // ...mapMutations(['increment', 'decrement'])
  }
}
</script>
