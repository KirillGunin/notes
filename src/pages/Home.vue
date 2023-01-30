<template>
    <Form @onSubmit="handleSubmit" />
    <List @removeNote="handelRemove" :notes="notes" />
</template>

<script>
import Form from "@/components/Notes/Form";
import List from "@/components/Notes/List";
export default {
    components: { Form, List },
    data() {
        return {
            notes: [
                {
                    title: "Learn Vue 3",
                    tags: ["private"],
                },
                {
                    title: "Finish course",
                    tags: ["family", "private"],
                },
            ],
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
        // get / set notes
        getNotes() {
            const localNotes = localStorage.getItem("notes");
            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            }
        },
        // add note
        handleSubmit(title) {
            const note = {
                title: title,
                tags: [],
            };
            this.notes.push(note);
        },
        // remove note
        handelRemove(index) {
            this.notes.splice(index, 1);
        },
    },
};
</script>
