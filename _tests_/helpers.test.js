const {format_date} = require('../utils/helpers');

//this test ensures that the format_date() takes Date() objects & returns dates in MM/DD/YYYY format
test('format_data() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
})

//format_plural test
test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
  const word2 = format_plural('lion', 2);

  expect(word1).toBe('tiger');
  expect(word2).toBe('lions');
})