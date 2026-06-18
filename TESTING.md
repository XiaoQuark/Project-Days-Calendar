# TESTING - DAYS CALENDAR PROJECT Group size: 2

## CURRENT MONTH DISPLAY ON LOAD

- We opened the website and confirmed that the calendar automatically displays the current month and year.
- The correct number of days and weekday alignment is shown.
- The first day of the month is rendered in the correct weekday column, with empty cells displayed before it where required.
- The correct number of calendar rows (weeks) is displayed for the month.
- Empty cells are rendered after the last day of the month to maintain a complete calendar grid.

## NAVIGATION BUTTONS (PREVIOUS / NEXT)

- We clicked the Previous and Next buttons repeatedly, including across year boundaries.
- The calendar updates correctly without showing undefined, NaN, or blank labels.

### Known limitation:

Navigating beyond the predefined year range causes the year dropdown to display a blank value, although the calendar continues to render the correct month and year.

## MONTH AND YEAR DROPDOWN SELECTORS

- We selected various months and years using the dropdowns.
- The calendar updates immediately and shows the correct days and special events.

## DAYS FROM `days.json` APPEAR CORRECTLY

- We verified that special days like Ada Lovelace Day, World Lemur Day, and International Binturong Day appear on the correct dates for multiple years.

## CORRECT MONTH LAYOUT

We checked multiple months, including:

- October 2024 → 5 rows × 7 columns, first and last row correctly padded, special days correct.
- October 2020 → special days appear on correct dates.
- May 2030 → International Binturong Day appears correctly.

## CALENDAR UPDATES CORRECTLY IF A NEW COMMEMORATIVE DAY IS ADDED

- We added a new commemorative day (International Mother's day) to `days.json` and refreshed the page.
- The new day appeared in the correct month automatically without modifying code.

## ACCESSIBILITY SCORE

- We ran Lighthouse in Chrome DevTools on multiple months.
- All pages scored 100 in Accessibility.

## UNIT TESTS Unit tests in `common.test.js` verify:

 getEventDate() returns the correct event date for each commemorative day (e.g., Ada Lovelace Day on the second Tuesday of October)


## ICALENDAR (.ICS) FILE GENERATION

- We ran the iCalendar generation script using `node generate-ical.mjs` to create a `days.ics` file.
- We validated the generated file using the iCalendar Validator ( https://icalendar.org/validator.html) and confirmed that no errors were reported.
- We imported the generated file into Google Calendar.
- Google Calendar successfully created 55 events.
- We verified that the imported events appeared on the correct dates for multiple years, including Ada Lovelace Day, World Lemur Day, and International Binturong Day.
- We confirmed that the imported events were displayed as all-day events.
