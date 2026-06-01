import readlineSync from "readline-sync";

const greetUser = () => {
  console.log("Welcome to the Brain Games!");

  // Задаем вопрос и сохраняем ответ в переменную
  const name = readlineSync.question("May I have your name? ");

  console.log(`Hello, ${name}!`);
};

export default greetUser;
