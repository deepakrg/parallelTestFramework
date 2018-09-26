var parallel = require('mocha.parallel');

parallel('delays', function () {

    let user: any;
    before(async () => {
        user = 'ola';
        console.log('payloads C ' + JSON.stringify('ola'));
    });

    beforeEach(async () => {
        user = 'uber';
        console.log('payloads C Each ' + JSON.stringify('uber'));
    });

    it('C: test1', function () {
        console.log('user C for test1 ' + user);
    });

    it('C: test2', function () {
        console.log('user C for test2 ' + user);
    });

    it('C: test3', function () {
        console.log('user C for test3 ' + user);
    });
});