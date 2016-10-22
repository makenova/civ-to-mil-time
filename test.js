var test = require('ava').test
var convert = require('./index')

test('test midnight', (t) => {
  t.is(convert('12:00:00AM'), '00:00:00')
})

test('test noon', (t) => {
  t.is(convert('12:00:00PM'), '12:00:00')
})

test('test AM', (t) => {
  t.is(convert('07:05:45AM'), '07:05:45')
})

test('test PM', (t) => {
  t.is(convert('07:05:45PM'), '19:05:45')
})

test('should throw error', (t) => {
  t.throws(() => {
    convert('jake from state farm')
  })
})
