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
      validator (value){
        [
          'primary',
          'success',
          
        ]
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
</style>