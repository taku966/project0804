<template>
  <div>
    <input v-model="entitles.value">
  </div>
</template>

<script>
//データの定義と保持
//vueのlifecycle
export default {
  data: () => ({
    entitles: {
      value: ""
    }
  }),
  created() {
    this.entitles = this.$store.state.entitles
  }
}
</script>

<style scoped>

</style>