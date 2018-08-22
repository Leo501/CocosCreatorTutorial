function TimeUtil() {
    console.log('TimeUtil');
}

//pads n with zeros on the left,
//digits is minimum length of output
//zeroPad(3, 5); returns "005"
//zeroPad(2, 500); returns "500"
function zeroPad(digits, n) {
    n = n.toString();
    while (n.length < digits)
        n = '0' + n;
    return n;
};

//it is almost 8 o'clock PM here
//timeString(new Date); returns "19:49"
TimeUtil.prototype.timeString = function (date) {
    console.log('timeString');
    var minutes = date.getMinutes().toString();
    var hours = date.getHours().toString();
    return zeroPad(2, hours) + ":" + zeroPad(2, minutes);
};

module.exports = new TimeUtil();