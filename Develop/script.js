//define variables for time and day using moment.js
let currentDay = moment().format("dddd, MMMM Do YYYY");
let currentHour = moment().format("HH");

//set current day to p id currentDay at the top of the page
$("#currentDay.lead").text(currentDay);

//using provided classes in stylesheet,  indicate whether timeblocks are past, present, or future
//compare current actual hour to time block hour
$(".time-row").each(function() {
    let timeRow = $(this).attr("id").split("-")[1];

    if (currentHour == timeRow) {
        $(this).addClass("present");
        $(this).children(".description").addClass("yellow-text");
    } else if (currentHour < timeRow) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});



// WHEN I click into a timeblock
// THEN I can enter an event



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage



// WHEN I refresh the page
// THEN the saved events persist