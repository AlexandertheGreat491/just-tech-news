const {format_date} = require('../utils/helpers');

//this test ensures that the format_date() takes Date() objects & returns dates in MM/DD/YYYY format
test('format_data() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
})