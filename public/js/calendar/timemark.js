function setWeekDay(today) {
    let day = today.getDay();
    let heading = $('.heading')[day];
    let track = $('.track')[$('.heading').length + day];
    $(heading).addClass('today');
    $(track).addClass('today');
}

function setCurrentTime(today) {
    let hours = (today.getHours()).toString().leftJustify(2, '0');
    let mins = today.getMinutes().toString().leftJustify(2, '0');
    $('#current-time').text(`${hours}:${mins}`);
    if (hours < 8 || hours > 20) {
        $('#current-moment').addClass('hidden');
        return;
    }
    $('#current-moment').removeClass('hidden');
    let oneHour = 100 / 12;
    let hour = (hours - 8) * oneHour;
    let min = (mins / 60) * oneHour;
    let height = hour + min;
    $('#current-moment').css('height', `${height}%`);
}

function setDates(today) {
    let day = today.getDate();
    let month = today.getMonth();
    let dayNum = today.getDay();

    let headings = $('.heading');
    let months = month.toString().leftJustify(2, '0');
    for (let i = 1; i < dayNum; ++i) {
        let days = (day - dayNum + i).toString().leftJustify(2, '0');
        $(headings[i]).find('.date').text(`(${days}.${months})`);
    }
    for (let i = dayNum; i < headings.length; ++i) {
        let days = (day + i - dayNum).toString().leftJustify(2, '0');
        $(headings[i]).find('.date').text(`(${days}.${months})`);
    }
}

function updateTime() {
    let today = new Date();
    setCurrentTime(today);
    setWeekDay(today);
    setDates(today);
}

$(document).ready(function () {
    updateTime();
    setTimeout(updateTime, 60000 - new Date().getMilliseconds());
    setInterval(updateTime, 60000);
});