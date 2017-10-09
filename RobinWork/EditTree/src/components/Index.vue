<template>
    <div id="container">
        <!--第一个element组件：菜单-->
        <el-menu theme="dark"
                 :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">其他设置</el-menu-item>
        </el-menu>
        <!--第二个element组件：布局-->
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <tree></tree>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <edit></edit>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Tree from './zTree'
    import Edit from './Edit'
    export default{
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components: {Tree, Edit}
    }
</script>
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
