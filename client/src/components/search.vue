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
      <div class="class-group">
        <label for="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          v-model="gamertag"
          placeholder="Origin ID, Xbox live gamertag or PSN ID"
          id="gamertag"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    date() {
        platform: "xbl",
        gamertag: ""
    }
};
</script>

<style scoped>
</style>