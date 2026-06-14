// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting, months, weekdays } from "./common.mjs";
import daysData from "../data/days.json" with { type: "json" };

window.onload = function () {
	const now = new Date();
	console.log(now);
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth();

	const weeks = getMonthGrid(currentYear, currentMonth);
	console.log(weeks);
};

function getMonthGrid(year, monthIndex) {
	const firstWeekday = new Date(year, monthIndex, 1).getDay();
	const monthLength = new Date(year, monthIndex + 1, 0).getDate();

	const monthDays = [];

	for (let i = 0; i < firstWeekday; i++) {
		monthDays.push(null);
	}

	for (let day = 1; day <= monthLength; day++) {
		monthDays.push(day);
	}

	const weeks = [];

	renderCalendar(weeks);

	for (let i = 0; i < monthDays.length; i += 7) {
		weeks.push(monthDays.slice(i, i + 7));
	}

	return weeks;
}

function renderCalendar(weeks) {
	const calendarContainer = document.getElementById("calendar");
	calendarContainer.textContent = "";
	const calendarTable = document.createElement("table");
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");

	for (const day of weekdays) {
		const th = document.createElement("th");
		th.textContent = day;
		headerRow.appendChild(th);
	}

	thead.append(headerRow);
	calendarTable.append(thead);
	calendarContainer.append(calendarTable);
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
