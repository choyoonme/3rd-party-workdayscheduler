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
        $(this).children(".description");
    } else if (currentHour < timeRow) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeRow) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

//add an event listener to savebtn so that when clicked it will get saved to local storage
$(".saveBtn").click(function(event) {
    event.preventDefault();
    let task = $(this).siblings(".time-block").val();
    let timeOfTask = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(timeOfTask, task);
});


// get items from local storage so that when the page gets refreshed they still appear
$("#hour-09 .time-block").val(localStorage.getItem("9"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));