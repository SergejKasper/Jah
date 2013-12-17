'use strict';

describe('Service: Greater', function () {

  // load the service's module
  beforeEach(module('newClientApp'));

  // instantiate service
  var Greater;
  beforeEach(inject(function (_Greater_) {
    Greater = _Greater_;
  }));

  it('should do something', function () {
    expect(!!Greater).toBe(true);
  });

});
