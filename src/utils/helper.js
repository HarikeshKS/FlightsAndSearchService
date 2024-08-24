function compareDateTime(timeString1, timeString2) {
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime2.getDate() >= dateTime1.getDate()
        ? dateTime2.getTime() > dateTime1.getTime()
        : false;
}

module.exports = {
    compareDateTime,
};
