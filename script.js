
 dayMonthYear = () => {
    
      //return new date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    const daysOfTheWeek =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]
    
    const daysOfTheWeekMonths =[
        "January","February","March","April","May","June","July","August","September",
        "October","November","December"

    ];

   
    
    
    if(month == 1){
        month = daysOfTheWeekMonths[0]
    }
    if(month == 2){
        month = daysOfTheWeekMonths[1]
    }
    if(month == 3){
        month = daysOfTheWeekMonths[2]
    }

    if(month == 4){
        month = daysOfTheWeekMonths[3]
    }
    
    if(month == 5){
        month = daysOfTheWeekMonths[4]
    }
    if(month == 6){
        month = daysOfTheWeekMonths[5]
    }
    if(month == 7){
        month = daysOfTheWeekMonths[6]
    }
    if(month == 8){
        month = daysOfTheWeekMonths[7]
    }
    if(month == 9){
        month = daysOfTheWeekMonths[8]
    }
    if(month == 10){
        month = daysOfTheWeekMonths[9]
    }
    if(month == 11){
        month = daysOfTheWeekMonths[10]
    }
    if(month == 12){
        month = daysOfTheWeekMonths[11]
    }
    document.getElementById("daysOfWk").innerHTML = `${month} ${day},${year}`;
    
}


 timeOfDay = () => {
    //set time of day
    const dte = new Date();
    let hrs = dte.getHours();
    let min = dte.getMinutes();
    let sec = dte.getSeconds();
    let aOrP = "Am";
   

    if (hrs > 12) {
        aOrP = "Pm";
    }
     if (hrs > 12) {
        hrs = hrs - 12;
    }
     if (hrs < 10) {
        hrs = "0" + hrs;
    }
     if (min < 10) {
        min = "0" + min;
    }
     if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("time").innerHTML = `${hrs}:${min}:${sec} ${aOrP}`;
}

dayMonthYear();

setInterval(timeOfDay, 1000);

