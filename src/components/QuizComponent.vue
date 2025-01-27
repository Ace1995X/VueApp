<template>
    <div class="quiz-box">
      <h2>History Quiz</h2>
      <div v-if="!quizCompleted">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <p>{{ question.text }}</p>
          <div v-for="(option, idx) in question.options" :key="idx">
            <input type="radio" :id="`q${index}o${idx}`" :name="`question${index}`" :value="option" v-model="answers[index]" />
            <label :for="`q${index}o${idx}`">{{ option }}</label>
          </div>
        </div>
        <button @click="submitQuiz">Submit</button>
      </div>
      <div v-else>
        <p>Your score: {{ score }}/3</p>
        <button @click="resetQuiz">Try Again</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'QuizComponent',
    setup() {
      const questions = ref([
        {
          text: 'Who was the first President of the United States?',
          options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln'],
          correct: 'George Washington',
        },
        {
          text: 'In which year did World War II end?',
          options: ['1945', '1939', '1918'],
          correct: '1945',
        },
        {
          text: 'Which ancient civilization built the pyramids?',
          options: ['Romans', 'Greeks', 'Egyptians'],
          correct: 'Egyptians',
        },
      ]);
  
      const answers = ref(Array(questions.value.length).fill(null));
      const quizCompleted = ref(false);
      const score = ref(0);
  
      const submitQuiz = () => {
        score.value = answers.value.reduce((acc, answer, index) => {
          return acc + (answer === questions.value[index].correct ? 1 : 0);
        }, 0);
        quizCompleted.value = true;
      };
  
      const resetQuiz = () => {
        answers.value = Array(questions.value.length).fill(null);
        quizCompleted.value = false;
        score.value = 0;
      };
  
      return {
        questions,
        answers,
        quizCompleted,
        score,
        submitQuiz,
        resetQuiz,
      };
    },
  };
  </script>
  
  <style scoped>
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