function convert (time) {
  var meridiem = time.slice(-2)
  var hours = parseInt(time.slice(0, 2), 10)
  
  if (meridiem === 'AM') {
    hours = (hours < 12) ? hours : '00'
  } else {
    hours = hours === 12 ? 12 : hours + 12
  }

  hours = hours.toString().length < 2 ? '0' + hours : hours

  return hours + time.slice(2, 8)
}

module.exports = convert

