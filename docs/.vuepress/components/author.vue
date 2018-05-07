<template>
    <div class="title-container">
        {{`${author} ${date}`}}
    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.title-container {
    font-size: 12px;
    color: #999;
}
</style>


