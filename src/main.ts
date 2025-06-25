import { createApp } from 'vue';
import pinia from '/@/stores/index';
import App from '/@/App.vue';
import router from '/@/router';
import { directive } from '/@/directive/index';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';
import FcDesigner from '@form-create/designer'
// 此版本仅适用于 PC 端，不包含移动端自适应样式。使用时直接引入即可，无需安装 vant 和 @form-create/vant。
// import FcDesigner from '/path/to/fcDesignerPro/dist/pc/index.es.js'

import ElementPlus from 'element-plus';
import '/@/theme/index.scss';
import VueGridLayout from 'vue-grid-layout';

const app = createApp(App);

directive(app);
other.elSvg(app);

app.use(pinia).use(router).use(ElementPlus).use(i18n).use(VueGridLayout).use(FcDesigner).use(FcDesigner.formCreate).mount('#app');
