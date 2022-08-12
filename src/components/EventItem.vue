<script setup>
import {defineProps} from "vue";
const props= defineProps( {
  eventData: {type: Object, required: true}
})
</script>
<template>

  <div class="event-item">
    <img :src="`/icon/${props.eventData.img}`">
    <div>{{props.eventData.event_name}}</div>
    <div>企画内容</div>
  </div>
</template>

<style scoped>
.event-item{
  width: 10rem;
  background: #ffffff77;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 15px;
  text-align: start;
}

.event-item > img{
  border-radius: 5px;
}
</style>