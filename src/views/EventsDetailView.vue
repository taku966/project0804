<script setup>
import {defineProps} from "vue";
import data from "@/assets/data.json";

const props=defineProps({
  eventId:{
    type: Number,
    required: true
  }
})

const eventData = data.find((d) => d.id === props.eventId)
</script>

<template>
<div> {{eventData.id}}</div>
  <div>{{eventData.event_name }}</div>
  <div>{{eventData.event_description }}</div>
</template>



<style scoped>

</style>