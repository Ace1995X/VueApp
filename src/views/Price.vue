<template>
  <div class="content-box">
    <ChapterInfo title="Aplikacije za priče" description="U ovom poglavlju govorit ćemo o korištenju aplikacija za priče u edukaciji povijesti" />
    <h3>Preporučeni alati</h3>
        <ul>
            <li><strong>TV kalendar</strong>: Svakodnevni povijesni događaji. <a href="https://www.youtube.com/@TVkalendarHRT" target="_blank">YouTube</a></li>
            <li><strong>This Day in History</strong>: Aplikacija History Channela. <a href="https://www.history.com/this-day-in-history" target="_blank">History.com</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>Pametni uređaj ili televizor.</p>
        <h3>Upute</h3>
        <p>Započnite dan s pričom o važnosti tog istog dana u povijesnom smislu ako je to primjenjivo na temu koju obrađujete, te iskoristite to kao zanimljivi uvod u predavanje.</p><h3>Preporučeni alati</h3>
        <ul>
            <li><strong>TV kalendar</strong>: Svakodnevni povijesni događaji. <a href="https://www.youtube.com/@TVkalendarHRT" target="_blank">YouTube</a></li>
            <li><strong>This Day in History</strong>: Aplikacija History Channela. <a href="https://www.history.com/this-day-in-history" target="_blank">History.com</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>Pametni uređaj ili televizor.</p>
        <h3>Upute</h3>
        <p>Započnite dan s pričom o važnosti tog istog dana u povijesnom smislu ako je to primjenjivo na temu koju obrađujete, te iskoristite to kao zanimljivi uvod u predavanje.</p>
  </div>
</template>

<script>
import ChapterInfo from '../components/ChapterInfo.vue';

export default {
  name: 'Price',
  components: {
    ChapterInfo,
  },
};
</script>

<style scoped>
.content-box {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>