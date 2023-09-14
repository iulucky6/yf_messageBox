<template>
  <div class="outerBox">
    <div :class="['boxStyle', type]">
      <header class="header">
        <div class="title">{{ title }}</div>
        <span class="close">X</span>
      </header>

      <div class="content">{{ content }}</div>
    </div>
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
.outerBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .boxStyle {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 1px 3px 5px ;
    border: 1px solid $border-color;
    width: 400px;
    height: 200px;
    margin: 0 auto;
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
        padding-left: 15px;
        display: flex;
        justify-content: flex-start;
        font-size: 16px;
      }
      .close {
        width: 30px;
        line-height: 40px;
        display: inline-block;
      }
    }
    .content {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
    &.primary {
      .header {
        background-color: blue;
        color: #fff;
      }
    }
    &.success {
      .header {
        background-color: green;
        color: #fff;
      }
    }
    &.warn {
      .header {
        background-color: orange;
        color: #333;
      }
    }
    &.danger {
      .header {
        background-color: red;
        color: #fff;
      }
    }
  }
}
</style>