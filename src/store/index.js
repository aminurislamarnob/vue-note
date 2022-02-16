import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            colors: ["#D8E2DC", "#FFE5D9", "#FBFAF0", "#FFE9EE", "#FFDDE4", "#FFF"],
            note: [],
            filterColor: '',
        }
    },
    getters: {
        countAllNote(state){
            return state.note.length;
        },
        getNotes(state){
            return state.note;
        },
        countNoteByColor(state){
            let countObj =  state.colors.map(color=>{
                return{
                    color: color,
                    count: state.note.filter(note=>note.color === color).length
                }
            });
            return countObj;
        },
        filteredNote(state){
            if(state.filterColor == ''){
                return state.note;
            }
            return state.note.filter(note=> note.color == state.filterColor);
        }
    },
    mutations: {
        addNote(state, note){
            state.note.unshift(note);
        },
        deleteNote(state, id){
            state.note = state.note.filter(note=> note.id !== id)
        }
    }
});


export default store;