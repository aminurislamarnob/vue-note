<template>
    <div class="note" :style="{backgroundColor: note.color}">
        <div>
        <h3 class="title">{{note.title}}</h3>
        <p>{{note.desc}}</p>
        </div>
        <p class="time">{{time}}</p>
        <div class="buttons"><button class="delete" @click="deleteNote">×</button></div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { mapMutations } from 'vuex'
dayjs.extend(relativeTime)
export default {
    props: ['note'],
    computed: {
        time(){
            return dayjs(this.note.created_at).fromNow();
        }
    },
    methods: {
        deleteNote(){
            this.$store.commit('deleteNote', this.note.id);
        }
    }
}
</script>