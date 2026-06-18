
TESTING - DAYS CALENDAR PROJECT Group size: 2

CURRENT MONTH DISPLAY ON LOAD 
We opened the website and confirmed that the calendar automatically displays the current month and year. The correct number of days and weekday alignment is shown.

NAVIGATION BUTTONS (PREVIOUS / NEXT) 
We clicked the Previous and Next buttons repeatedly, including across year boundaries. The calendar updates correctly without showing undefined, NaN, or blank labels.

MONTH AND YEAR DROPDOWN SELECTORS 
We selected various months and years using the dropdowns. The calendar updates immediately and shows the correct days and special events.

DAYS FROM days.json APPEAR CORRECTLY We verified that special days like Ada Lovelace Day, World Lemur Day, and International Binturong Day appear on the correct dates for multiple years. Clicking a special day opens a modal with the day’s name and date.

CALENDAR UPDATES CORRECTLY IF days.json IS CHANGED 
We added a new commemorative day (Mother's day) to days.json and refreshed the page. The new day appeared in the correct month automatically without modifying code.

CORRECT MONTH LAYOUT We checked multiple months, including:

October 2024 → 5 rows × 7 columns, first and last row correctly padded, special days correct.
October 2020 → special days appear on correct dates.
May 2030 → International Binturong Day appears correctly.

ACCESSIBILITY SCORE 
We ran Lighthouse in Chrome DevTools on multiple months. All pages scored 100 in Accessibility.

UNIT TESTS Unit tests in common.test.js verify:

=============================================================

this will be done based on the test we implement

==============================================================


