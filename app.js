const App = {
    data() {
        return {
            title: "Notes",
            input: {
                value: "",
                placeholder: "Type your note",
            },
            // updateInput: {
            //     value: "",
            //     placeholder: "Update your note",
            // },
            notes: ["note 1", "note 2"],
            editInput: false,
        };
    },
    mounted() {
        this.getNotes();
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem("notes", JSON.stringify(updatedList));
            },
            //флаг deep указывает но то, что watcher следит не за самим массивом, а за элементами массива
            deep: true,
        },
    },
    methods: {
        getNotes() {
            const localNotes = localStorage.getItem("notes");
            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            }
        },
        onSubmit() {
            this.notes.push(this.input.value);
            this.input.value = "";
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
        editNote(index) {
            const notesData = JSON.parse(localStorage.getItem("notes"));
            this.updateInput.value = notesData[index];
            this.editInput = !this.editInput;
            console.log(this.updateInput.value)
        },
        // updateNote() {
            
        //     this.editInput = !this.editInput;
        // },
    },
};

Vue.createApp(App).mount("#app");
