<script setup>
// @ is an alias to /src
import EventItem from '@/components/EventItem'
import data from "@/assets/data.json"

</script>

<template>
  <div class="container">
    <h1 class="title-bar">Tutorial1 Home</h1>
    <div class="content">
      <div class="event-list">
        <router-link :to="`/events/${d.id}`" v-for="d in data" :key="d.id">
          <EventItem :eventData="d"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.event-list > a {
  text-decoration: none;
  color: black;
}

body {
  margin: 0;
  background: steelblue;
}

.container {
  display: flex;
  flex-direction: column;
}

.title-bar {
  width: 100%;
  background: #353535;
  color: white;
  margin: 0 0 1rem 0;
  padding: 1rem 0;
  text-align: center;

}

.event-item {
  width: 10rem;
  background: #ffffff77;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 15px;
}

.event-item > img {
  border-radius: 5px;
}

.event-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto;
}
</style>


