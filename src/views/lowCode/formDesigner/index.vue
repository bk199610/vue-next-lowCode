<script setup lang="ts">
// 引入 vue 的模板引用、类型和响应式方法
import { useTemplateRef, Ref, ref } from 'vue';
// 获取 fc-designer 组件的实例引用
const designer = useTemplateRef('designer') as Ref<
    InstanceType<typeof import('@form-create/designer').FcDesigner>
>;
// 用于存储导出的 JSON 字符串
const json = ref('')
// 控制弹窗显示/隐藏
const dialogVisible = ref(false)
// 导出 option 配置并显示到弹窗
const handleOption = () => {
    dialogVisible.value = true
    json.value = designer.value?.getOptionsJson()
    console.log(json.value);
}
// 导出 rules 配置并显示到弹窗
const handleRules = () => {
    dialogVisible.value = true
    json.value = designer.value?.getJson()
    console.log(json.value);
}
</script>
<template>
    <div class="designer_container">
        <!-- 顶部操作按钮区 -->
        <div class="flex justify-center p-2">
            <el-button type="primary" @click="handleOption">导出option</el-button>
            <el-button type="success" @click="handleRules">导出rules</el-button>
        </div>
        <!-- 表单设计器主区域 -->
        <fc-designer ref="designer" height="100vh"/>
        <!-- 弹窗显示导出的 JSON -->
        <el-dialog v-model="dialogVisible" title="导出JSON" width="40%" @close="()=>{json = ''}">
            <el-input v-model="json" type="textarea" :rows="10"></el-input>
        </el-dialog>
    </div>
</template>
<style lang="scss">
.designer_container {
    height: 100%;
    margin: 0 !important;
    padding: 8px 24px;
    // display: flex;
    // flex-direction: column;
}
.flex {
    display: flex;
}
.justify-center {
    justify-content: center;
}
.p-2 {
    padding: 10px 0;
}
</style>