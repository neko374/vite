<template>
  <div>
    <router-link to="/table">前往表</router-link>
    <div id="chart1"></div>
    <div id="monaco"></div>
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";
// 编辑器
import * as monaco from "monaco-editor";
import { language as javaLanguage } from "monaco-editor/esm/vs/basic-languages/java/java.js";
export default {
  name: "index",
  setup() {
    onMounted(() => {
      // 图表
      let myChart = inject("echarts").init(document.getElementById("chart1"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        myChart.resize();
      };

      // 编辑器
      const editor = ref(null);
      const editorTheme = ref("vs-dark");
      const language = ref("java");
      const javaCompletion = monaco.languages.registerCompletionItemProvider(
        "java",
        {
          provideCompletionItems: function () {
            let suggestions = [];
            javaLanguage.keywords.forEach((item) => {
              suggestions.push({
                label: item,
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: item,
              });
            });
            javaLanguage.operators.forEach((item) => {
              suggestions.push({
                label: item,
                kind: monaco.languages.CompletionItemKind.Operator,
                insertText: item,
              });
            });
            suggestions.push({
              label: "Class",
              kind: monaco.languages.CompletionItemKind.Class,
              insertText: "Class",
            });
            suggestions.push({
              label: "Interface",
              kind: monaco.languages.CompletionItemKind.Interface,
              insertText: "Interface",
            });
            return {
              suggestions: suggestions,
            };
          },
        }
      );
      editor.value = monaco.editor.create(document.getElementById("monaco"), {
        value: "", //编辑器初始显示文字
        language: language.value, //语言支持自行查阅demo
        theme: editorTheme.value, //官方自带三种主题vs, hc-black, or vs-dark
        selectOnLineNumbers: true, //显示行号
        roundedSelection: false,
        readOnly: false, // 只读
        cursorStyle: "line", //光标样式
        automaticLayout: true, //自动布局
        glyphMargin: true, //字形边缘
        useTabStops: false,
        fontSize: 15, //字体大小
        autoIndent: true, //自动布局
        quickSuggestionsDelay: 100, //代码提示延时
      });

      // 监听值的变化
      // editor.value.onDidChangeModelContent((val) => {
      //   console.log(val.changes[0].text)
      // })

      // 创建代码提醒
      javaCompletion;
    });
  },
};
</script>

<style lang="scss" scoped>
#chart1 {
  width: 600px;
  height: 300px;
}
#monaco {
  width: 600px;
  height: 400px;
}
</style>