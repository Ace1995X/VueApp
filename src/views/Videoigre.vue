<template>
  <div class="content-box">
    <h1>Videoigre</h1>
    <ChapterInfo title="Informacije" description="U ovom poglavlju govorit ćemo o korištenju videoigara u edukaciji povijesti" />
    <h3>Preporučene igre</h3>
        <ul>
            <li><strong>Assassin's Creed Discovery Tour</strong>: Interaktivno istraživanje povijesnih lokacija. <a href="https://www.ubisoft.com" target="_blank">Ubisoft</a></li>
            <li><strong>Europa Universalis</strong>: Strategijsko učenje svjetskih povijesnih događaja. <a href="https://www.paradoxinteractive.com/games/europa-universalis-iv/about" target="_blank">Europa Universalis</a></li>
            <li><strong>Civilization</strong>: Razumijevanje razvoja društava i donošenja odluka. <a href="https://www.civilization.com" target="_blank">Civilization</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>Računalo s odgovarajućim performansama ili konzola (PlayStation, Xbox). Stabilna internetska veza za preuzimanje i igranje.</p>
        <h3>Upute</h3>
        <p>Igre koje prikazuju nešto(AC Discovery Tour) se mogu koristiti na samoj nastavi kako bi učenici dobili vizualni dojam za neko povijesno razdoblje. Pokrenite igru pred učenicima i, po mogućnosti, iskoristite projektor ili veliki zaslon kako bi vizualno demonstrirali neko povijesno razdoblje. </p>
        <p>Igre kao Civilization i Europa Universalis možete koristiti kao inspiraciju za projekte ili seminare. Učenici mogu napisati izvještaje o tome što su naučili igrajući navedene igre i usporediti igre sa stvarnom poviješću.</p>
        <p>Video igre koje se fokusiraju na povijesne događaje, osobe ili razdoblja mogu se učenicima preporučiti za igranje kod kuće u slobodno vrijeme ako žele znati više. Na taj način potičemo učenike na daljnje istraživanje.</p>
        <p>Savjetujte učenike na koje dijelove igre se trebaju fokusirati.</p>
        <h3>Primjer - Assassin's Creed Discovery Tour: Ancient Egypt</h3>
        <p>Uvod: Objasnite učenicima cilj lekcije - istražiti svakodnevni život u starom Egiptu pomoću interaktivne igre.</p>
        <p>Demonstracija: Pokrenite igru na projektoru/dovoljno velikom zaslonu. Vodite učenike kroz odabranu turu. Istaknite ključne elemente poput arhitekture, religije i društvene hijerarhije.</p>
        <p>Interaktivna rasprava: Učenici analiziraju ono što su vidjeli i uspoređuju sa znanjem iz udžbenika.</p>
  </div>
</template>

<script>
import ChapterInfo from '../components/ChapterInfo.vue';

export default {
  name: 'Videoigre',
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