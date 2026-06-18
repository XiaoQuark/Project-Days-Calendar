import { writeFileSync } from "fs";
import { getEventDate } from "./src/common.mjs";
import daysData from "./data/days.json" with { type: "json" };

const events = [];
const timestamp = new Date();
const dtStamp = createDTStamp(timestamp);

for (const day of daysData) {
	for (let year = 2020; year <= 2030; year++) {
		const eventDate = getEventDate(
			year,
			day.monthName,
			day.dayName,
			day.occurrence,
		);

		const formattedDate = formatICalDate(eventDate);

		const eventBlock = createICalEvent(
			formattedDate,
			year,
			day.name,
			dtStamp,
		);

		events.push(eventBlock);
	}
}
const iCalendar = createICal(events);

writeFileSync("days.ics", iCalendar);

function createDTStamp(timestamp) {
	const year = timestamp.getUTCFullYear();
	const month = String(timestamp.getUTCMonth() + 1).padStart(2, "0");
	const date = String(timestamp.getUTCDate()).padStart(2, "0");
	const hours = String(timestamp.getUTCHours()).padStart(2, "0");
	const minutes = String(timestamp.getUTCMinutes()).padStart(2, "0");
	const seconds = String(timestamp.getUTCSeconds()).padStart(2, "0");

	return `DTSTAMP:${year}${month}${date}T${hours}${minutes}${seconds}Z`;
}

function formatICalDate(eventDate) {
	const year = eventDate.getFullYear();
	const month = eventDate.getMonth() + 1;
	const date = eventDate.getDate();
	const formattedDate = `${year}${String(month).padStart(2, "0")}${String(date).padStart(2, "0")}`;

	return formattedDate;
}

function createICalEvent(formattedDate, year, eventName, dtStamp) {
	const uid = `UID:${eventName.toLowerCase().replaceAll(" ", "-")}-${year}`;

	const summary = `SUMMARY:${eventName}`;
	const dtStart = `DTSTART;VALUE=DATE:${formattedDate}`;

	const iCalEvent = `BEGIN:VEVENT\r\n${uid}\r\n${dtStamp}\r\n${dtStart}\r\n${summary}\r\nEND:VEVENT`;

	return iCalEvent;
}

function createICal(events) {
	const lines = [];
	lines.push("BEGIN:VCALENDAR");
	lines.push(`VERSION:2.0`);
	lines.push(`PRODID:-//Days Calendar Project//EN`);
	lines.push(...events);
	lines.push(`END:VCALENDAR`);

	return lines.join("\r\n");
}
