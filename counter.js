var one_day = 1000*60*60*24

var present_date = new Date();

var christmas_day = new Date(present_date.getFullYear(), 11, 25)

if (present_date.getMonth() == 11 && present_date.getDate() > 25)
christmas_day.setFullYear(christmas_day.getFullYear() + 1)

var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);


