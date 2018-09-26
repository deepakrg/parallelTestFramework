describe('delays', function () {

  let user:any;

  before(async () => {
    user = 'ola';
    console.log('payloads B ' + JSON.stringify('ola'));
  });

  beforeEach(async () => {
    user = 'uber';
    console.log('payloads B Each ' + JSON.stringify('uber'));
  });

  it('B: test1', function () {
    console.log('user B for test1 ' + user);
  });

  it('B: test2', function () {
    console.log('user B for test2 ' + user);
  });

  it('B: test3', function () {
    console.log('user B for test3 ' + user);
  });
});