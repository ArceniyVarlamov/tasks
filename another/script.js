const score = document.querySelector("#score");
const life = document.querySelector("#life");
const end = document.querySelector("#end");
const start = document.querySelector("#restart");
const time = document.querySelector("#time");
const background = document.querySelector("#background");
const body = document.querySelector("body");
// поинтов
let points = 0;
//жизней
let lifes = 5;
// осталось времени
let left = 2;



const startAudio = () => {
	let audio = document.createElement("div");
	audio.innerHTML = `<audio controls="controls" id="audio" autoplay loop style="display: none">
  <source
    src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/pop.mp3?v=1679455658810"
    type="audio/wav"
  />
  <source
    src="https://cdn.glitch.global/97d03534-e21b-43ae-a68a-a767c9730c83/pop.mp3?v=1679455658810"
    type="audio/mpeg"
  />
</audio>`;
	body.insertAdjacentElement("beforeend", audio);
	setTimeout(() => {
		body.removeChild(audio);
	}, 1000);
};

// увеличение очков и обновление счётчика
const addScore = () => {
	++points;
	score.textContent = `Score: ${points}`; // Обновление счётчика очков
};

// уменьшение очков и обновление счётчика
const removeScore = () => {
	--points;
	score.textContent = `Score: ${points}`; // Обновление счётчика очков
};

// увеличение жизней и обновление счётчика
const addLife = () => {
	++lifes;
	life.textContent = `Life counter: ${lifes}`; // Обновление счётчика жизней
};

// показывание бэкграунда и сообщение об окончании игры
const endGame = () => {
	end.textContent = `Game ended. Your score: ${points}`;
	end.setAttribute("style", "display: block;");
	background.setAttribute("style", "display: block;");
};

const intervalSet = () => {
	let interval;

	interval = setInterval(() => {
		--left;
		setTime();
		if (left === 0) {
			endGame();
			clearInterval(interval);
			return;
		}
	}, 1000);
};

intervalSet()

// уменьшение очков и обновление счётчика
const removeLife = () => {
	--lifes;
	if (lifes === 0) {
		endGame();
	}
	life.textContent = `Life counter: ${lifes}`; // Обновление счётчика жизней
};

// обновление счётчика времени
const setTime = () => {
	let seconds = `${left % 60}`.length === 1 ? `0${left % 60}` : `${left % 60}`;
	time.textContent = `0${Math.floor(left / 60)}:${seconds}`;
};

// рестарт всех параметров и обновление счётчиков
const restart = () => {
	left = 90;
	points = 0;
	lifes = 5;
	startAudio();
  intervalSet()
	end.setAttribute("style", "display: none;");
	background.setAttribute("style", "display: none;");
	setTime();
	life.textContent = `Life counter: ${lifes}`; // Обновление счётчика жизней
	score.textContent = `Score: ${points}`; // Обновление счётчика очков
};

// рестарт игры при клике на кнопку
start.addEventListener("click", (e) => {
	restart();
});
