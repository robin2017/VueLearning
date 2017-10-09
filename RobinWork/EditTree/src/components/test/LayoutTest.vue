<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
</template>
<style>
    .bg-purple {
        background: #d3dce6;
    }
    .grid-content {
        border-radius: 4px;
        /*min-height: 36px;*/
        height:600px;
    }
</style>
