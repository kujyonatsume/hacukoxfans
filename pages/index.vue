<script setup lang="ts">
const innerText = ref("")
const desc = ref("")
onMounted(() => {
  var date = Date.parse('2023/12/6 20:00:00')
    if(date - Date.now() >= 0) setInterval(() => {
    const d = new Date(date - Date.now());
    innerText.value = `${d.getUTCDate() - 1} 天 ${d.getUTCHours()} 小時 ${d.getUTCMinutes()} 分鐘 ${d.getUTCSeconds()} 秒`
    desc.value = "初配信時間: 2023年 12月6日 晚上20:00\n"+innerText.value
  }, 1000)
})
</script>
<template>
  <Title>HacukoLiveStreamCount</Title>
  <Meta content="https://www.hacukoxfans.com/assets/icon.png" name="twitter:image" />
  <Meta content="HacukoLiveStreamCount" property="title" />
  <Meta content="HacukoLiveStreamCount" property="og:title" />
  <Meta content="白白虹粉絲網站" property="og:site_name" />
  <Meta :content="desc" property="description" />
  <Meta :content="desc" property="og:description" />
  <Meta :content="desc" name="twitter:description" />
  <Meta content="https://www.hacukoxfans.com/count" property="og:url" />
  <div id="title" style="display: flex; justify-content: center;">
    <a href="/pop"> POPHACUKO </a>
  </div>
  
  <div id="livecount">
    <p id="timer">{{ innerText }}</p>
  </div>
</template>
<style>
#livecount {
  display: flex;
  justify-content: center;
  height: 98vh;
  background-image: url(https://i.ytimg.com/vi/IG89vrnc9kE/maxresdefault.jpg);
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}

#timer {
  height: fit-content;
  width: fit-content;
  position: relative;
  padding: 15px;
  border-radius: 5rem;
  top: 80%;
  font-size: 50px;
  background-color: rgba(218, 206, 248, 0.5);
  color: rgb(255, 70, 163);
}

a {
    color: rgb(255, 137, 58); 
    background-color: pink;
    border-radius: 5rem;
    padding: 3px;
    margin: 3px;
    text-decoration: none;
}

a:hover {
    color: rgb(255, 0, 106);
}
</style>