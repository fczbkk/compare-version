import compareVersion from './../src/';


describe('Compare version', function () {

  describe('invalid input', function () {

    it('should throw on missing input', function () {
      const fn = function () {compareVersion();};
      expect(fn).toThrow();
    });

    it('should throw on missing left input', function () {
      const fn = function () {compareVersion(null, '1.2.3');};
      expect(fn).toThrow();
    });

    it('should throw on missing right input', function () {
      const fn = function () {compareVersion('1.2.3');};
      expect(fn).toThrow();
    });

    it('should throw on invalid left input', function () {
      const fn = function () {compareVersion('xxx', '1.2.3');};
      expect(fn).toThrow();
    });

    it('should throw on invalid right input', function () {
      const fn = function () {compareVersion('1.2.3', 'xxx');};
      expect(fn).toThrow();
    });

  });

  describe('comparison', function () {

    it('should return 0 if inputs are the same', function () {
      expect(compareVersion('1.2.3', '1.2.3')).toEqual(0);
    });

    it('should return -1 if left input is higher', function () {
      expect(compareVersion('3.2.1', '1.2.3')).toEqual(-1);
    });

    it('should return 1 if right input is higher', function () {
      expect(compareVersion('1.2.3', '3.2.1')).toEqual(1);
    });

    it('should handle missing zeroes', function () {
      expect(compareVersion('1.0.0', '1')).toEqual(0);
    });

    it('should handle leading zeroes', function () {
      expect(compareVersion('001.002.003', '1.2.3')).toEqual(0);
    });

  });

});
