<template>
  <div id="app">
    <!-- 决定路由组件配置，匹配到的组件会在这里渲染 -->
    <!-- <router-view/> -->
    <!-- <MessageBox title="提交" content="App" type="danger"></MessageBox> -->
    <button @click="openMessageBox">show</button>
    <button @click="openInfoMessageBox">info</button>
    <button @click="openSuccessMessageBox">success</button>
    <button @click="openWarnMessageBox">warn</button>
    <button @click="openDangerMessageBox">danger</button>
  </div>
</template>

<script>
// import { MessageBox } from "./components";
// console.log(MessageBox, "MessageBox");

export default {
  name: "App",
  // components: {
  //   MessageBox,
  // },
  methods: {
    openMessageBox() {
      this.$messageBox.show(
        {
          title: "App",
          content: "this is Appcontent",
          type: "warn",
        },
        () => {
          console.log("open");
          //可做请求数据等操作
        }
      );
    },
    openInfoMessageBox() {
      this.$messageBox.info({
        title: "info",
        content: "this is info content",
      },()=>{
        console.log("打开了info,调用info函数");
      });
    },
    openSuccessMessageBox() {
      this.$messageBox.success({
        title: "info",
        content: "this is success content",
      });
    },
    openDangerMessageBox() {
      this.$messageBox.danger({
        title: "info",
        content: "this is danger content",
      });
    },
    openWarnMessageBox() {
      this.$messageBox.warn({
        title: "info",
        content: "this is warn content",
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
