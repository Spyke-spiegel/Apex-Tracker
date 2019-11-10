<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <form v.on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="psn"></option>
          <option value="xbl"></option>
          <option value="Origin"></option>
        </select>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
</style>