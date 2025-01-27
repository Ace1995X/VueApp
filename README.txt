Prva naredba "npm install", nakon toga se pokreće server sa "npm run serve" i radi na "http://localhost:8080/"

https://vueapp-txyx.onrender.com

1.interpolation/one-way binding - da, src\views\Home.vue :3 :8
2.two-way binding - da, src\views\Home.vue :5
3.methods - ne
4.computed properties - da, src\views\Home.vue :51
5.barem jedan scoped style - da, src\components\PopupButton.vue :17
6.koristiti barem jedan lifecycle hook - ne
7.routing - da, src\router\index.js :20 (bookmarkable) :: src\router\index.js :16(404) --> src\views\NotFound.vue
8.(barem) dvije komponente - da, bez stanja(src\components\ChapterInfo.vue , src\components\PopupButton.vue), sa stanjem(src\components\QuizComponent.vue)
9.barem jedna komponenta mora emitirati barem jedan event - da, src\components\PopupButton.vue :10 :11
10.store (Pinia) - da, src\store\index.js(Pinia imported), src\views\Home.vue :33(korištenje pinia)
11.asinkroni dohvat podataka s backenda - da, src\router\index.js :16 (lazy askinkrono učitavanje)
