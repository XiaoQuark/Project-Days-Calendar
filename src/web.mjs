import { getGreeting, months, weekdays } from "./common.mjs";
import daysData from "../data/days.json" with { type: "json" };

window.onload = function () {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth();

	const weeks = getMonthGrid(currentYear, currentMonth);
};

function getMonthGrid(year, monthIndex) {
	const firstWeekday = new Date(year, monthIndex, 1).getDay();
	const monthLength = new Date(year, monthIndex + 1, 0).getDate();

	const month = new Array(firstWeekday).fill(null);

	for (let day = 1; day <= monthLength; day++) {
		month.push(day);
	}

	const weeks = [];

	for (let i = 0; i < month.length; i += 7) {
		weeks.push(month.slice(i, i + 7));
	}

	renderCalendar(weeks);
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
