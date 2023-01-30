<template>
    <div class="note-form-wrapper">
        <form class="note-form" @submit.prevent="onSubmit">
            <textarea required v-model="value" placeholder="Type your note" />
            <TagList :tags="tags"  @addTag="handleTag" :isActive="isActive"/>
            <button class="btn btnPrimary" type="submit">Add note</button>
        </form>
    </div>
</template>

<script>
import TagList from "@/components/UI/TagList";
export default {
    components: { TagList },
    data() {
        return {
            value: "",
            tags: ["family", "private", "job"],
            isActive: false
        };
    },
    methods: {
        onSubmit() {
            this.$emit("onSubmit", this.value);
            this.value = "";
        },
        handleTag({tag, isActive}) {
            this.$emit('addTag', this.isActive = !this.isActive)
            console.log(tag, this.isActive, isActive);
        }
    },
};
</script>

<style lang="scss">
.note-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.note-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    textarea {
        margin-bottom: 0;
    }
}
</style>
