setInterval(function(){

    

    let TimeNow = new Date();
    let goal = new Date("12/31/2021");

    let TimeLeft = goal.getTime() - TimeNow.getTime();

    document.getElementById("Day").innerHTML = "Days: " + Math.floor(TimeLeft / (1000 * 60 * 60 * 24) );
    document.getElementById("Hour").innerHTML = "Hours: " + Math.floor( (TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    document.getElementById("Minutes").innerHTML = "Minutes: " + Math.floor( (TimeLeft % (1000 * 60 * 60)) / (1000 * 60) );
    document.getElementById("Secounds").innerHTML = "Seconds: " + Math.floor( (TimeLeft % (1000 * 60)) / 1000);
    //document.getElementById("Tid").innerHTML = Time.getHours() + ":" + Time.getMinutes() + ":" + Time.getSeconds();
    //document.getElementById("Date").innerHTML = (30 - Time.getDay()) + "-" + (10 - Time.getMonth());

}, 1000);

//(TimeLeft / (1000 * 3600 * 24)).toFixed(0)

               