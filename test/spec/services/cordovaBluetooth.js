'use strict';

describe('Service: Cordovabluetooth', function () {

  // load the service's module
  beforeEach(module('newClientApp'));

  // instantiate service
  var Cordovabluetooth;
  beforeEach(inject(function (_Cordovabluetooth_) {
    Cordovabluetooth = _Cordovabluetooth_;
  }));

  it('should do something', function () {
    expect(!!Cordovabluetooth).toBe(true);
  });

});
