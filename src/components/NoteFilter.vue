<template>
    <div class="filter">
        <button @click="$store.state.filterColor = ''">All ({{countAllNote}})</button>
        <button 
        v-for="item in countNoteByColor" 
        :key="item.color" 
        :style="{backgroundColor: item.color}"
        @click="$store.state.filterColor = item.color">{{item.count}}</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(['countNoteByColor', 'countAllNote']),
    }
}
</script>