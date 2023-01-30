<template>
    <div class="notes-list">
        <div class="note-item" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
                <p>{{ note.title }}</p>
                <p style="cursor: pointer" @click="$emit('removeNote', index)">
                    &#10005;
                </p>
            </div>
            <div class="note-footer">
                <TagList v-if="note.tags && note.tags.length > 0" :tags="note.tags" isPreview/>
            </div>
        </div>
    </div>
</template>

<script>
import TagList from '@/components/UI/TagList';
export default {
    components: { TagList },
    props: {
        notes: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.notes-list {
    padding: 40px 0;
}
.note-item {
    width: 100%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: #ffffff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    &:hover {
        box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
        transform: translate(0, -6px);
        transition-delay: 0s !important;
    }
}
.note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.note-footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>
