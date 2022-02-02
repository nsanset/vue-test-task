<template>
    <div class="taskHeader">
        <div class="taskHeader--title">
            <h1>Checklist</h1>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.taskHeader {
    position: relative;
    height: 52px;
    background:#fff;
}
.taskHeader--title {
    text-align: left;
    position: absolute;
    width: 300px;
    left: 0px;
    height: 35px;
}
h1 {
    font-size: 20px;
}
</style>