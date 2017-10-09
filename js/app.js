let taskList = document.querySelector("#taskList");
const addTaskInput = document.querySelector("#addTaskInput");
const addTaskButton = document.querySelector("#addTaskButton");

const addTask = () => {
		if (addTaskInput.value != " ") {
			let taskItem = document.createElement("li");
			let taskText = document.createElement("span");
			taskText.textContent = addTaskInput.value;
			let checkBox = document.createElement("input");
			checkBox.setAttribute("type", "checkBox");
			checkBox.setAttribute("class", "checkbox");
			let removeItem = document.createElement("button");
			removeItem.setAttribute("class", "remove");
			removeItem.textContent = "Delete";
			taskList.appendChild(taskItem);
			taskItem.appendChild(taskText);
			taskItem.appendChild(checkBox);
			taskItem.appendChild(removeItem);
			addTaskInput.value = " ";
		};
}


addTaskButton.addEventListener("click", addTask);

  addTaskInput.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
  addTask();
  }});


taskList.addEventListener("change", (event) => {
	if(event.target.tagName == "INPUT") {
		if (event.target.checked) {
			event.target.previousElementSibling.style.textDecoration="line-through";
		} else {
		event.target.previousElementSibling.style.textDecoration="initial";
}}});

taskList.addEventListener("click", (event) => {
	  if(event.target.tagName == "BUTTON") {
			if (event.target.className == "remove") {
			let taskItem = event.target.parentNode;
			taskList = taskItem.parentNode;
	     taskList.removeChild(taskItem);
	}}});


  var startButton = document.getElementById("start");
		pauseButton = document.getElementById("pause"),
		resetButton = document.getElementById("reset"),
		minutesHTML = document.getElementById("minutes"),
		secondsHTML = document.getElementById("seconds"),
		on = false,
		seconds = 00,
		minutes = 00;

var myTimer;

startButton.onclick = startTimer;
pauseButton.onclick = pauseTimer;
resetButton.onclick = resetTimer;

function startTimer () {
	if (!on) {


		myTimer = setInterval (function () {

				seconds ++;
				on = true;

				if (seconds < 10) {
					secondsHTML.innerHTML = "0" + seconds;
				}
		// 		if (secondsHTML == 25) {
		// pomodoros ++;
		// resetTimer();
		// 	}
				if (seconds > 9) {
					secondsHTML.innerHTML = seconds;
				}

				if (seconds % 60 == 0) {
					minutes ++;
					seconds = 00;
				}

				if (minutes < 10) {
					minutesHTML.innerHTML = "0" + minutes;
				}

				if (minutes >= 10) {
					minutesHTML.innerHTML = minutes;
				}

		}
		, 1000)
	}
}


function pauseTimer () {
	on = false;
	clearInterval(myTimer);
}

function resetTimer () {
	on = false;
	var defaultTime = "00";
	secondsHTML.innerText = defaultTime;
	minutesHTML.innerText = defaultTime;

	console.log(myTimer);
	clearInterval(myTimer);

}

var pomodoros = 0;
