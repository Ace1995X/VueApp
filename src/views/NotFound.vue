<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Stranica koju tražite ne postoji.</p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>