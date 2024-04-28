<script setup lang="ts">
var count = ref(0)
onMounted(() =>{
  count.value = Number(localStorage.getItem("pop")) ?? 0
})
function click() {
  new Audio("/3TQeFeF7EY7qINV3.mp3").play();
  localStorage.setItem("pop", `${++count.value}`)
}

</script>
<template>
  <meta charset="utf-8">
  <title>PopHacuko</title>
  <link rel="icon" href="/icon.png">
  <Meta content="https://www.hacukoxfans.com/icon.png" name="twitter:image" />
  <Meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <Meta content="width=device-width,initial-scale=1.0,user-scalable=yes,minimum-scale=1.0,maximum-scale=3.0" name="viewport" />
  <Meta content="TW" name="distribution" />
  <Meta content="夏目" name="author" />
  <Meta content="article" property="og:type" />
  <Meta content="@_natsume0304" name="twitter:site" />
  <Meta content="@_natsume0304" name="twitter:creator" />
  <Meta name="twitter:widgets:new-embed-design" content="on" />
  <Meta name="twitter:widgets:csp" content="on" />
  <Meta content="PopHacuko" property="title" />
  <Meta content="PopHacuko" property="og:title" />
  <Meta content="白白虹粉絲網站" property="og:site_name" />
  <Meta content="按下f12甚麼都有了" property="description" />
  <Meta content="按下f12甚麼都有了" property="og:description" />
  <Meta content="按下f12甚麼都有了" name="twitter:description" />
  <Meta content="https://www.hacukoxfans.com/" property="og:url" />

  <div id="pop">
    <img id="popimg" src="/image/you-need-see-hacuko.jpg" @click="click" />
    <p id="count">{{ count }}</p>
  </div>


</template>
<style lang="scss">
#pop {
  display: flex;
  align-content: center;
  justify-content: center;
}
#popimg {
  height: 98vh;
}
#count::selection {
  background: #00000000;
  color: #000000;
}

#count {
  position: absolute;
  top: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 36px;
  cursor: default;
}
</style>