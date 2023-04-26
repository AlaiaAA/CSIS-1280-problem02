let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function clock() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let weekday = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let fullDate = months[month] + ' ' + day + ',' + ' ' + year;    
    minute = checkTime(minute);
    second = checkTime(second);
    document.querySelector('#date').innerHTML = fullDate;
    document.querySelector('#day').innerHTML = weekDays[weekday];
    document.querySelector('#hours').innerHTML = hour;
    document.querySelector('#minutes').innerHTML = minute;
    document.querySelector('#seconds').innerHTML = second;
    setTimeout(clock, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}