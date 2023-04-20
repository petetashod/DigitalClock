
const dayMonthYear = () => {
    
      //return new date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    document.getElementById("daysOfWk").innerHTML = `${month}:${day}:${year}`;
    
    const daysOfTheWeekMonths =[
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
        "January","February","March","April","May","June","July","August","September",
        "October","November","December"

    ]

    if (day = 0){
        day = daysOfTheWeekMonths[0]
    }
    if (day = 1){
        day = daysOfTheWeekMonths[1]
    }
    if (day = 2){
        day = daysOfTheWeekMonths[2]
    }
    if (day = 3){
        day = daysOfTheWeekMonths[3]
    }
    if (day = 4){
        day = daysOfTheWeekMonths[4]
    }
    if (day = 5){
        day = daysOfTheWeekMonths[5]
    }
    if (day = 6){
        day = daysOfTheWeekMonths[6]
    }
    
    if(month = 1){
        month = daysOfTheWeekMonths[7]
    }
    if(month = 2){
        month = daysOfTheWeekMonths[8]
    }
    if(month = 3){
        month = daysOfTheWeekMonths[9]
    }

    if(month = 4){
        month = daysOfTheWeekMonths[10]
    }
    
    if(month = 5){
        month = daysOfTheWeekMonths[11]
    }
    if(month = 6){
        month = daysOfTheWeekMonths[12]
    }
    if(month = 7){
        month = daysOfTheWeekMonths[13]
    }
    if(month = 8){
        month = daysOfTheWeekMonths[14]
    }
    if(month = 9){
        month = daysOfTheWeekMonths[15]
    }
    if(month = 10){
        month = daysOfTheWeekMonths[16]
    }
    if(month = 11){
        month = daysOfTheWeekMonths[17]
    }
    if(month = 12){
        month = daysOfTheWeekMonths[18]
    }
}


 timeOfDay = () => {
    //set time of day
    const dte = new Date();
    let hrs = dte.getHours();
    let min = dte.getMinutes();
    let sec = dte.getSeconds();
    let aOrP = "Am";
    document.getElementById("time").innerHTML = `${hrs}:${min}:${sec} ${aOrP}`;

    if (hrs >= 12) {
        "Pm";
    }
    else if (hrs > 12) {
        hrs = hrs - 12;
    }
    else if (hrs < 10) {
        hrs = "0" + hrs;
    }
    else if (min < 10) {
        min = "0" + min;
    }
    else if (sec < 10) {
        sec = "0" + sec;
    }
}

dayMonthYear();

setInterval(timeOfDay, 1000);

