<script setup>

</script>

<template>
<div class="pt-[366px] bg-black">
<div class="w-[800px] box mx-auto flex items-center justify-center h-[400px]  rounded-[20px] overflow-hidden relative">
  <div class="bg-black flex items-center justify-center size-[calc(100%-6px)] inset-[3px] absolute z-10 rounded-[20px]">
      <div class="text">
        Advanced Interactivity
      </div>
  </div>
  <div class="rImage  size-[1000px] flex-shrink-0 animate-spin">

  </div>
</div>
</div>
</template>

<style scoped lang="scss">
.rImage{
  background-image: linear-gradient(#FB8047,#DE5976,#6A84CC);
  transform-origin: center;
}
.box{
  box-shadow: 0 0 10px 0 #F9814C;
}
.text{
  background: linear-gradient(270deg, #7A7FD9 0%, #E5525F 50%, #FB8047 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Roboto;
  font-size: 60px;
  font-style: italic;
  font-weight: 900;
  line-height: 80px; /* 133.333% */
}
</style>