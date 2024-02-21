const jokeE1 = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");
const chuckN = document.getElementById("chuck");
const jokeBtn1 = document.getElementById("jokebtn1");

const generateJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  // const res = await fetch("https://icanhazdadjoke.com/",config);
  // const res = await fetch("https://api.adviceslip.com/advice",config);
  // const data = await res.json();
  // jokeE1.innerHTML = data.joke;

  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => res.json())
    .then((data) => {
      jokeE1.innerHTML = data.joke;
    });
};

// const getChuck = async () => {
//   const config = { headers: { Accept: "application/json" } };
//   const res1 = await fetch("https://api.chucknorris.io/jokes/random", config);
//   const data1 = await res1.json();
//   chuckN.innerHTML = data1.value;
// };


const getChuck = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res1 = await fetch("https://api.chucknorris.io/jokes/random", config);
    const data1 = await res1.json();
    chuckN.innerHTML = data1.value;
  };

generateJoke();
getChuck();

jokeBtn.addEventListener("click", () => {
  generateJoke();
});

jokeBtn1.addEventListener("click", () => {
  getChuck();
});
