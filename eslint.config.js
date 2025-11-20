import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.{js,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "vue/multi-word-component-names": "off", // 允许单字组件名（新手友好）
      "no-console": "warn", // 控制台打印只警告，不报错
      "no-unused-vars": "warn" // 未使用变量只警告，不报错
    }
  }
];
