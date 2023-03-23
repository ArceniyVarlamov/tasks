// осталось времени
let left = 2;

const endGame = () => {
	end.textContent = `Game ended. Your score: ${points}`;
	end.setAttribute("style", "display: block;");
	background.setAttribute("style", "display: block;");
};

const setTime = () => {
	let seconds = `${left % 60}`.length === 1 ? `0${left % 60}` : `${left % 60}`;
	time.textContent = `0${Math.floor(left / 60)}:${seconds}`;
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