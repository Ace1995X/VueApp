<template>
  <div class="content-box">
    <ChapterInfo title="Interaktivne karte" description="U ovom poglavlju govorit ćemo o korištenju interaktivnih karata u edukaciji povijesti" />
    <h3>Preporučeni alati</h3>
        <ul>
            <li><strong>TimeMaps</strong>: Povijesna analiza kroz geografiju. <a href="https://www.timemaps.com/" target="_blank">TimeMaps</a></li>
            <li><strong>Chronas</strong>: Interaktivna karta svjetske povijesti. <a href="https://www.chronas.org/" target="_blank">Chronas</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>Uređaj s preglednikom koji podržava HTML5.</p>
        <h3>Upute</h3>
        <p>Koristite navedene alate za prikazivanje i vizualiziranje promjena na kartama tijekom povijesti, s naglaskom na uzročno-posljedične veze. Najbolje bi bilo koristiti projektor ili sličan način prikaza kako bi omogućili učenicima da jasno vide prikazani sadržaj.</p>
        <h3>Primjer - TimeMaps (Rimsko Carstvo)</h3>
        <p>Uvod: Objasnite učenicima kako su se granice Rima širile i koje su regije bile ključne za stabilnost carstva.</p>
        <p>Interaktivni rad: Učenici u grupama istražuju kartu, prate ekspanziju carstva i bilježe ključne događaje.</p>
        <p>Diskusija: Učenici predstavljaju svoje nalaze i objašnjavaju kako je geografija utjecala na upravljanje carstvom.</p>
  </div>
</template>

<script>
import ChapterInfo from '../components/ChapterInfo.vue';

export default {
  name: 'Karte',
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