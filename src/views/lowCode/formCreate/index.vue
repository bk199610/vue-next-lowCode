<script setup lang="ts">
// 引入 vue 的响应式和计算属性方法
import { computed, ref } from 'vue';
// 引入 form-create 的 element-ui 版本对象，仅用于调用 parseJson 方法解析 JSON 字符串为表单规则
import formCreate from "@form-create/element-ui";
// optionJson 用于存储 option 的 JSON 字符串
const optionJson = ref('')
// rulesJson 用于存储 rules 的 JSON 字符串
const rulesJson = ref('')
// 计算属性：将 optionJson 字符串解析为对象，解析失败返回空对象
const option = computed(() => {
  try {
    // 尝试将 optionJson.value 字符串解析为 form-create 可用的配置对象
    // formCreate.parseJson() 是 form-create 提供的专用方法，比 JSON.parse() 更能安全处理表单配置中的特殊字段（如函数、组件等）
    return formCreate.parseJson(optionJson.value);
  } catch (error) {
    // 当解析失败时（如 JSON 格式错误或包含非法内容），返回空对象
    // 这样可以确保组件不会因为解析错误而崩溃，而是降级为空白配置
    return {}; 
  }
});
// 计算属性：将 rulesJson 字符串解析为数组，解析失败返回空数组
const rules = computed(() =>{
    try {
        return formCreate.parseJson(rulesJson.value)
    } catch (error) {
        return []
    }
});
</script>
<template>
    <div class="flex gap-4">
        <!-- 左侧规则输入区 -->
        <div class="flex flex-col gap-4 flex-[2_1_0]">
            <div class="text-center">规则区</div>
            <!-- 输入 optionJson -->
            <el-input v-model="optionJson" type="textarea" :rows="15" placeholder="请输入optionJson" />
            <!-- 输入 rulesJson -->
            <el-input v-model="rulesJson" type="textarea" :rows="15" placeholder="请输入rulesJson" />
        </div>
        <!-- 右侧表单渲染区 -->
        <div class="flex flex-col gap-4 flex-[3_1_0]">
            <div class="text-center">表单区</div>
            <!-- 动态渲染表单 -->
            <form-create 
                :option="option"
                :rule="rules"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
// 定义 flex 比例混合器
@mixin flex-ratio($grow) {
  flex: $grow 1 0%; // 参数控制 flex-grow
}
// 应用 flex 比例
.flex-\[2_1_0\%\] { @include flex-ratio(2); }
.flex-\[3_1_0\%\] { @include flex-ratio(3); }
/* 外层容器：flex 布局，子元素间隔 1rem (16px) */
.flex {
    width: 100%;
  display: flex;
  gap: 1rem; /* Tailwind 的 gap-4 = 16px */
}
.gap-4 {
    gap: 1rem;
}
/* 内层容器：垂直排列的 flex 列，子元素间隔 1rem，占据 2/3 空间 */
.flex{
  display: flex;
}
.flex-col {
    flex-direction: column; /* 垂直排列 */
}
/* 文本居中显示 */
.text-center {
  text-align: center;
}
</style>