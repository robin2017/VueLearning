<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <button @click="btnOnclick">测试按钮</button>
</template>
<script>
    import {doAjax} from '../../utils/software'
    export default{
        methods:{
            btnOnclick: function () {
                console.log('===click on btn===')
                doAjax()
            }
        }
    }
</script>
