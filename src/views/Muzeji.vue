<template>
  <div class="content-box">
    <ChapterInfo title="Virtualni muzeji i arhivi" description="U ovom poglavlju govorit ćemo o korištenju virtualnih muzeja i arhiva u edukaciji povijesti" />
    <h3>Preporučeni alati</h3>
        <ul>
            <li><strong>Google Arts & Culture</strong>: Virtualni obilasci muzeja i galerija. <a href="https://artsandculture.google.com/" target="_blank">Google Arts & Culture</a></li>
            <li><strong>Europeana</strong>: Digitalna zbirka europske kulturne baštine. <a href="https://www.europeana.eu/" target="_blank">Europeana</a></li>
            <li><strong>Smithsonian Institution</strong>: Pristup digitalnim arhivima i zbirkama. <a href="https://www.si.edu/" target="_blank">Smithsonian Institution</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>Računalo ili tablet s preglednikom koji podržava HTML5.</p>
        <h3>Upute</h3>
        <p>Virtualne muzeje možete koristiti kao i ostala vizualna pomagala, zajedno s učenicima napravite posjet jednom od muzeja gdje vi kao profesor preuzimate ulogu vodiča. Koristite projektor ili veliki zaslon za prikaz.</p>
        <p>Digitalne arhive koristite kao bazu podataka za seminare i projekte, potaknite učenike da koriste što više izvornih dokumenata koji se nalaze u arhivima.</p>
        <p>Kada dodijelite zadatke vašim učenicima napravite i kratko objašnjenje kako mogu efikasno pretraživati arhive i na što obratiti pozornost.</p>
        <h3>Primjer - virtualni posjet Louvreu (Renesansna umjetnost)</h3>
        <p>Uvod: Objasnite što ćete gledati u muzeju, koji je cilj i postavite neka pitanja o kojima mogu razmišljati dok su u posjeti.</p>
        <p>Virtualna šetnja: Počnite s objašnjavanjem povijesti Louvrea, prezentirajte umjetnička djela koja smatrate važnima (npr. Mona Lisa, Venus de Milo), ispričajte priču o djelima i zašto su važna.</p>
        <p>Pitanja: Potaknite učenike da postavljaju pitanja tijekom virtualne šetnje.</p>
        <p>Rasprava: Pričajte s učenicima o njihovim dojmovima, usporedite virtualni muzej sa stvarnim ako je to moguće.</p>
  </div>
</template>

<script>
import ChapterInfo from '../components/ChapterInfo.vue';

export default {
  name: 'Muzeji',
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