<template>
    <el-container class="container">
        <el-menu  mode="horizontal" :default-active="$route.path" router :ellipsis="false">
            <el-menu-item index="/resume" style="width: 8.05%; height: 45px;" >
            </el-menu-item>
        </el-menu>
    </el-container>
</template>


<style scoped lang="less">
.container {
    height: 100%;
    width: 100%;
}
</style>