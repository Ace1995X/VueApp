<template>
  <div class="content-box">
    <ChapterInfo title="VR i ozbiljne igre" description="U ovom poglavlju govorit ćemo o korištenju VR-a i ozbiljnih igara u edukaciji povijesti" />
    <h3>Preporučeni alati</h3>
        <ul>
            <li><strong>Google Expeditions</strong>: Virtualni obilasci povijesnih znamenitosti. <a href="https://edu.google.com/products/vr-ar/expeditions/" target="_blank">Google Expeditions</a></li>
            <li><strong>HistoryMaker VR</strong>: Igrajte uloge povijesnih ličnosti. <a href="https://store.steampowered.com/app/1278140/HistoryMaker_VR/" target="_blank">Steam</a></li>
            <li><strong>Class VR</strong>: VR sustav za obrazovanje. <a href="https://www.classvr.com/" target="_blank">ClassVR</a></li>
            <li><strong>Playing History</strong>: Ozbilje igre za učenje povijesti. <a href="https://www.seriousgames.net/en/" target="_blank">Playing History</a></li>
        </ul>
        <h3>Potrebna oprema</h3>
        <p>VR naočale (npr. Oculus Quest, HTC Vive) i kompatibilno računalo ili uređaj.</p>
        <h3>Upute</h3>
        <p>Ako imate opremu potrebnu za VR dopustite učenicima da sami iskuse doživljaj virtualne stvarnosti. Napravite to u manjim grupama i vi vodite obilazak nekog povijesnog mjesta.</p>
        <p>Ako nemate pristup opremi za VR ili nemate vremena za primjenu na svakog pojedinog učenika, klasične video igre i ozbiljne igre su dobra zamjena. Ozbiljne igre učenici mogu igrati preko vlastitih ili školskih uređaja ili vi kao profesor možete igrati igru ispred učenika s njihovim idejama, odgovorima i generalnom sudjelovanju u igri.</p>
        <p>Prije nego što počnete koristiti VR opremu objasnite učenicima kako se njome pravilno koristiti i provjerite je li neko od učenika možda ima zdravstvenih problema koje VR iskustvo može pogoršati.</p>
        <h3>Primjer - History Maker VR</h3>
        <p>Uvod: Učenicima objasnite kako će preuzeti ulogu povijesne ličnosti i predstaviti događaje kroz VR rekonstrukciju.</p>
        <p>Praktični dio: Svaki učenik odabire lik i priprema kratki govor ili nastup.</p>
        <p>Prezentacija: Učenici prikazuju svoje VR performanse, dok ostatak razreda zapisuje bilješke o njihovim predstavama.</p>
        <p>Osvrt: Dopustite učenicima da naprave osvrt na svoj nastup ili nastup svojih kolega.</p>
  </div>
</template>

<script>
import ChapterInfo from '../components/ChapterInfo.vue';

export default {
  name: 'VR',
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