<template>
  <div :class="['boxStyle', type]">
    <header class="header">
      <div class="title">{{ title }}</div>
      <span class="close">X</span>
    </header>

    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    title: {
      type: String,
      default: "this is title",
    },
    content: {
      type: String,
      default: "this is content",
    },
    type: {
      type: String,
      default: "primary",
      //vue语法，校验传入参数合法性，返回true/false，返回false则警告
      validator(value) {
        ["primary", "success", "warn", "danger"].includes(value);
      },
    },
  },
};
</script>

<style lang='scss'>
$border-color: #000;
.boxStyle {
  border: 1px solid $border-color;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $border-color;
    height: 40px;
    .title {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
    }
    .close {
      width: 30px;
      line-height: 40px;
      display: inline-block;
    }
  }
  .content {
    display: flex;
    background-color: #ccc;
    border: 1px solid red;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}
</style>