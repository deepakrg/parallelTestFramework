var parallel = require('mocha.parallel');

parallel('delays', function () {

    let user: any;

    before(async () => {
        user = 'ola';
        console.log('payloads A ' + JSON.stringify('ola'));
    });

    beforeEach(async () => {
        user = 'uber';
        console.log('payloads A Each ' + JSON.stringify('uber'));
    });

    it('A: test1', function () {
        console.log('user A for test1 ' + user);
    });

    it('A: test2', function () {
        console.log('user A for test2 ' + user);
    });

    it('A: test3', function () {
        console.log('user A for test3 ' + user);
    });
});