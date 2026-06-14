import { getGreeting, months, weekdays } from "./common.mjs";
import daysData from "../data/days.json" with { type: "json" };

const state = {
	currentMonth: null,
	currentYear: null,
};

window.onload = function () {
	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");
	const monthSelect = document.getElementById("month-select");
	const yearSelect = document.getElementById("year-select");

	populateMonthsSelect(monthSelect);

	const now = new Date();
	state.currentYear = now.getFullYear();
	state.currentMonth = now.getMonth();

	prevButton.addEventListener("click", changeToPrevMonth);
	nextButton.addEventListener("click", changeToNextMonth);
	monthSelect.addEventListener("change", handleMonthChange);
	// yearSelect.addEventListener("change", handleYearChange);

	const weeks = getMonthGrid();
};

function populateMonthsSelect(monthSelect) {
	for (const month of months) {
		const option = document.createElement("option");
		option.value = month;
		option.textContent = month;
		monthSelect.appendChild(option);
	}
}

function changeToPrevMonth() {
	if (state.currentMonth === 0) {
		state.currentYear -= 1;
		state.currentMonth = 11;
	} else {
		state.currentMonth -= 1;
	}
	console.log(state.currentMonth);
	getMonthGrid();
}

function changeToNextMonth() {
	if (state.currentMonth === 11) {
		state.currentMonth = 0;
		state.currentYear += 1;
	} else {
		state.currentMonth += 1;
	}
	console.log(state.currentMonth);
	getMonthGrid();
}

function handleMonthChange(event) {
	console.log(months.indexOf(event.target.value));
	state.currentMonth = months.indexOf(event.target.value);
	getMonthGrid();
}

function getMonthGrid() {
	const firstWeekday = new Date(
		state.currentYear,
		state.currentMonth,
		1,
	).getDay();
	const monthLength = new Date(
		state.currentYear,
		state.currentMonth + 1,
		0,
	).getDate();

	console.log(firstWeekday, monthLength);

	const daysOfTheMonth = new Array(firstWeekday).fill(null);

	for (let day = 1; day <= monthLength; day++) {
		daysOfTheMonth.push(day);
	}

	const weeks = [];

	for (let i = 0; i < daysOfTheMonth.length; i += 7) {
		weeks.push(daysOfTheMonth.slice(i, i + 7));
	}

	renderCalendar(weeks);
	return weeks;
}

function renderCalendar(weeks) {
	const calendarContainer = document.getElementById("calendar");
	calendarContainer.textContent = "";

	const monthName = document.createElement("h2");
	monthName.textContent = `${months[state.currentMonth]} ${state.currentYear}`;
	calendarContainer.appendChild(monthName);

	const calendarTable = document.createElement("table");
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");

	for (const day of weekdays) {
		const th = document.createElement("th");
		th.textContent = day;
		headerRow.appendChild(th);
	}

	thead.appendChild(headerRow);
	calendarTable.appendChild(thead);

	const tbody = document.createElement("tbody");

	for (const week of weeks) {
		const row = document.createElement("tr");

		for (const day of week) {
			const cell = document.createElement("td");
			cell.textContent = day ?? "";
			row.appendChild(cell);
		}

		tbody.appendChild(row);
	}

	calendarTable.appendChild(tbody);
	calendarContainer.appendChild(calendarTable);
}

// the grid is actually an array of arrays, no?

//0 |__0|__1|__2|__3|__4|__5|__6| length 7
//1 |___|___|___|___|___|___|___|
//2 |___|___|___|___|___|___|___|
//3 |___|___|___|___|___|___|___|
//4 |___|___|___|___|___|___|___|
//5 |___|___|___|___|___|___|___|
//6 |___|___|___|___|___|___|___|

// [["day headings"], ["week 1"] ,["week 2"], ["week 3"], ["week 4"], ["week 5"], ["optional week 6"]]

// 0 - 6
// 7 - 13
// 14 - 17
// 18 - 20
// 21 - 27
// 28 - 28/29/30/31

// months 0 - 11 (jan - dec)
// 31 days months = 0, 2, 4, 6, 7, 9, 11
// 30 days months = 3, 5, 8, 10
// 28/29 days months = 1

// week 0 - 6 (sun - sat)
