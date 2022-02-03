<template>
    <div class="taskHeader">
        <div class="taskHeader--title">
            <h1>Checklist</h1>
        </div>
        <div class="taskHeader--menu">&#8226;</div>
    </div>
</template>

<script>
export default {
    name: 'TaskHeader',
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
.taskHeader--menu {
    text-align: right;
    position: absolute;
    top: 15px;
    width: 10px;
    right: 0px;
    height: 35px;
    font-size: 20px;
    color: #BFBFBF;
}
.taskHeader--menu {
    text-align: right;
    position: absolute;
    top: 10px;
    width: 10px;
    right: 0px;
    font-size: 15px;
    color: #BFBFBF;
}
.taskHeader--menu:before {
    content: "\2022";
    position: absolute;
    top: 15px;
}
.taskHeader--menu:after {
    content: "\2022";
    position: absolute;
    top: 7px;
    left: 5px;
}
h1 {
    font-size: 20px;
}
</style>
