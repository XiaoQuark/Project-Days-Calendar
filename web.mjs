// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { monthsArr, weeksDayArr } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

// Track current month/year

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();


//DOM references

const calendarDiv = document.getElementById("calendar");
const monthHeader = document.getElementById("current-month");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const monthDropdown = document.getElementById("month-select");
const yearDropdown = document.getElementById("year-select");

// Populate year/month dropdown

function populateDropdowns(){

//month
monthDropdown.innerHTML = "";
monthsArr.forEach((monthName, index)=>{
const option = document.createElement("option");
option.textContent = monthName;
option.value = index;
monthDropdown.appendChild(option);
});

 monthDropdown.value = currentMonth;

}
// year

yearDropdown.innerHTML = "";
for(let y= 1900; y<= 2100; y++){
    const option = document.createElement("option");
    option.textContent = y;
    option.value = y;
    yearDropdown.appendChild(option);
};
yearDropdown.value = currentYear;


populateDropdowns();