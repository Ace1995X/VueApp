<template>
  <div class="content-box">
    <div class="visit-counter">Posjeta: {{ visitCount }}</div>
    <div class="name-form">
      <input v-model="name" placeholder="Unesite vaše ime" />
    </div>
    <h1>Vodič za korištenje tehnologije u nastavi povijesti</h1>
    <p>{{ welcomeMessage }}</p>
    <PopupButton @show-message="showMessage = true" />
    <div v-if="showMessage" class="popup-message">
      <p>Jeste li znali? Prvi poznati povijesni dokument napisan je na glinenim pločicama u drevnoj Mezopotamiji oko 3200. godine prije Krista.</p>
      <button @click="showMessage = false">Close</button>
    </div>
    <div class="welcome-text">
      <p>Dobro došli na web-stranicu posvećenu podršci nastavnicima povijesti u korištenju tehnologija e-učenja. U suvremenom obrazovanju, tehnologija ne samo da olakšava pristup informacijama već i transformira način na koji učenici doživljavaju povijest, omogućujući im da istražuju, analiziraju i razumiju prošlost na interaktivan i angažiran način. Ovaj vodič osmišljen je kako bi pružio sveobuhvatne resurse i praktične upute za implementaciju digitalnih alata u učionici. Bilo da želite koristiti multimedijalne platforme, virtualne muzeje, video igre ili digitalne baze podataka, ovdje ćete pronaći vodič za integraciju tehnologije u nastavu povijesti. Cilj ovog vodiča je povijest učiniti dinamičnom i relevantnom u digitalnom dobu, te vam olakšati prijelaz u tehnološki potpomognutu nastavu.</p>
    </div>
    <QuizComponent />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useMainStore } from '../store';
import PopupButton from '../components/PopupButton.vue';
import QuizComponent from '../components/QuizComponent.vue';

export default {
  components: {
    PopupButton,
    QuizComponent,
  },
  setup() {
    const store = useMainStore();
    const name = ref('');
    const showMessage = ref(false);

    const welcomeMessage = computed(() => {
      return name.value ? `${name.value}, dobrodošli` : '';
    });

    onMounted(() => {
      const storedVisitCount = localStorage.getItem('visitCount');
      store.visitCount = storedVisitCount ? parseInt(storedVisitCount, 10) : 0;
      store.incrementVisitCount();
      localStorage.setItem('visitCount', store.visitCount);
    });

    return {
      name,
      welcomeMessage,
      visitCount: computed(() => store.visitCount),
      showMessage,
    };
  },
};
</script>

<style scoped>
.content-box {
  border: 1px solid #ddd;
  padding: 40px;
  margin: 40px auto;
  max-width: 800px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.visit-counter {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
}

.name-form {
  position: absolute;
  top: 20px;
  left: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
}

h1 {
  margin-top: 40px;
  font-size: 24px;
}

p {
  margin: 20px 0;
  font-size: 18px;
}

.popup-message {
  border: 1px solid #42b983;
  background-color: #f9f9f9;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.popup-message p {
  margin: 0;
  font-size: 16px;
  color: #35495e;
}

.popup-message button {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #42b983;
  border: none;
  cursor: pointer;
}

.welcome-text {
  margin-top: 40px;
  font-size: 18px;
  line-height: 1.6;
}

.quiz-box {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question {
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #42b983;
  border: none;
  cursor: pointer;
}
</style>