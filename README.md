# vue-next-lowCode

本项目基于 [vue-next-admin](https://gitee.com/lyt-top/vue-next-admin) 开源后台管理模板，集成了 [form-create](https://github.com/xaboy/form-create) 低码表单平台，实现了表单的可视化设计与动态渲染。

## 功能简介
- 支持 JSON 配置动态渲染表单（form-create）
- 支持可视化拖拽表单设计（form-create-designer）
- 完整继承 vue-next-admin 的权限、主题、国际化等特性

## 快速开始
```bash
# 克隆项目
 git clone https://github.com/bk199610/vue-next-lowCode.git

# 进入项目目录
cd vue-next-lowCode

# 安装依赖
pnpm install

# 运行项目
pnpm dev
```

## 主要页面
- `/lowCode/formCreate`：输入 JSON 配置实时渲染表单
- `/lowCode/formDesigner`：可视化拖拽设计表单并导出 JSON

## 鸣谢
- 感谢 [vue-next-admin](https://gitee.com/lyt-top/vue-next-admin) 提供的优秀后台管理模板
- 感谢 [form-create](https://github.com/xaboy/form-create) 提供的强大低码表单引擎

## License
MIT
