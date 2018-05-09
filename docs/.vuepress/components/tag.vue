<template>
    <div @click="click" :class="path ? 'tag-container' : 'tag-container-unclick'">
        {{title}}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: ''
        }
    },
    methods: {
        click(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style lang="scss">
    .tag-container {
        font-size: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 5px;
        border-radius: 4px;
        background:#3eaf7c;
        color:white;
        width: fit-content;
        float: left;
        margin-right: 0.4rem;
        height: 1.2rem;
        cursor: pointer;
        &:hover {
            background:lighten($color: #3eaf7c, $amount: 10)
        }
        &:active {
            background:darken($color: #3eaf7c, $amount: 10)
        }
    }
    .tag-container-unclick {
        font-size: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 5px;
        border-radius: 4px;
        background:#3eaf7c;
        color:white;
        width: fit-content;
        float: left;
        margin-right: 0.4rem;
        height: 1.2rem;
        cursor: default
    }
</style>


