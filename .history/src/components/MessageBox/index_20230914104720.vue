<template>
  <div :class="['boxStyle',type]">
    <div class="inner">
      <header class="header">
         <h1 class="title">{{title}}</h1>
         <span>X</span>
      </header>

      <div class="content">{{content}}</div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props:{
    title:{
      type:String,
      default:'this is title'
    },
    content:{
      type:String,
      default:'this is content'
    },
    type:{
      type:String,
      default:'primary',
      //vue语法，校验传入参数合法性，返回true/false，返回false则警告
      validator (value){
        [
          'primary',
          'success',
          'warn',
          'danger'
        ].includes(value);
      }
    }
  }
};
</script>

<style>
.boxStyle {
  border: 1px solid gainsboro;
  width: 400px;
  height: 400px;
}
.header{
  display: flex;
  align-items: center;

}
</style>