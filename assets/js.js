$(".save-btn").on('click', function() {
    //text input value
    let value = $(this).siblings(".plans").val();
    console.log(value);

    //Gets ID from parent DIV
    let time = $(this).parent().attr("id");
    console.log(time);

    //Sets key as value to local storage
    localStorage.setItem(time, value);
});




//----------date------------//

let output = document.querySelector('span');

let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = `${month}/${date}/${year}`;
output.innerText = current_date;

//----------date end------------//

//----------time---------------//
function rendorTime() {

    let time = document.querySelector('p');


    var currentTime = new Date();
    var hours = currentTime.getHours();
    console.log(hours);
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours == 24) {
        hours = 0;
    } 
    else if (hours > 12) {
        hours = hours - 0;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let current_time = `${hours}:${minutes}:${seconds}`;

    time.innerText = currentTime;
    

    setTimeout("rendorTime()", 1000);

    //color change
    function changeColor() {
        $(".input-group").each(function() {
            let calendar_hour = parseInt($(this).attr("id").split("-")[1]);
            console.log(calendar_hour);

            if(calendar_hour < hours) {
                $(this).addClass("past");
            }
            else if(calendar_hour === hours) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        });
    }

    changeColor();
}

rendorTime();
//----------time end---------------//


//stores in local storage and displays it in textbox
$("#hour-9 .plans").val(localStorage.getItem("hour-9"));

$("#hour-10 .plans").val(localStorage.getItem("hour-10"));

$("#hour-11 .plans").val(localStorage.getItem("hour-11"));

$("#hour-12 .plans").val(localStorage.getItem("hour-12"));

//1:00PM
$("#hour-13 .plans").val(localStorage.getItem("hour-13"));

//2:00PM
$("#hour-14 .plans").val(localStorage.getItem("hour-14"));

//3:00PM
$("#hour-15 .plans").val(localStorage.getItem("hour-15"));

//4:00PM
$("#hour-16 .plans").val(localStorage.getItem("hour-16"));

//5:00PM
$("#hour-17 .plans").val(localStorage.getItem("hour-17"));