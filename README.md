**THE SCHEDULER 📝**

Hello!

Welcome to this week's task.
We will be creating an interactive scheduler to help a user plan their work day! (or fun activities of course 😄)

*Let's get started!*


**SCREENSHOTS**
1) Main page features header with local time that updates live.


![alt text](https://github.com/hergemony/scheduler/blob/main/assets/Screen%20Shot%202022-03-21%20at%2010.43.15%20pm.png?raw=true)

2) Hourly time blocks for a typical 9am to 5pm work day. Input area for entries by user into the scheduler.


![alt text](https://github.com/hergemony/scheduler/blob/main/assets/Screen%20Shot%202022-03-21%20at%2011.32.04%20pm.png?raw=true)

3) A 'Save' button that saves items to local storage.


![alt text](https://github.com/hergemony/scheduler/blob/main/assets/Screen%20Shot%202022-03-21%20at%2011.33.32%20pm.png?raw=true)


4) Attribute changes for hour by hour tracking with colour codes (Grey is past the current hour, red is the curent hour, green is after the current hour).



**Javascript Features**
- Moment.js to display local time
- Javascript calendar style with matching Jquery methods
- Time (in hour blocks) is appended to the HTML
- If/else statements to compare time with current time
*Variables for start time, end time and current time*
*How do we use moment duration to compare each hour to current time? Current time is always going to be MORE than the START time (ie.9am) vs. Current time is always going to be LESS than the END time (ie.5pm). Use code to work out the difference between the two.* 
- Create a For Loop for the START time, and loop up to the END time.
- Colour codes used to indicate past (grey), present (red) and future (green); this works by appending attributes to colour current time block
- Event listeners for the save buttons to enable storage in local storage when user clicks the save button


**Github Repository Features**
- One HTML page
index.html which contains inputs for a general 9am to 5pm work day
- One CSS page
styles.css which contains styling for the scheduler, attributes and buttons
- One Javascript page
script.js which contains variables, arrays, time conversion using moments.js., event listeners, if/else statements, for loops, functions, local storage using JSON parse and stringify, set and get.

Thank you for 'scheduling'! 😉

Github Profile Link => https://github.com/hergemony

Deployed Application Link => https://hergemony.github.io/scheduler/


❤ Hergemony™ Digital Services 2022 ❤
