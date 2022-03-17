// Hergemony 'The Scheduler'
// Using moment.js declaration for day and time, select appropriat format
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time; to display after heading at top
var currentTime = moment();
// Returns current time to the nearest hour - 12:30 becomes 12:00
currentTIme = currentTime.startOf("hour");
// The start of the day +9 to return to 9am, calculate this:
var beforeTime = moment().startOf('day').add(9, "hours");

// Coding the time blocks
// 9AM
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// Populates time formula into html
$(".block1").text(time1);
// 10AM
var time2 = beforeTime.add(1,"h");
time2 = time2.format('hh:mm A');


