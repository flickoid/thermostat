describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  describe("initialization of thermostat", function() {

    it("will be 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("will be in Power Saving Mode", function() {
      expect(thermostat.powerSavingMode).toBe(true)
    });
  });


  describe("General functionality", function() {

    it("should be able to increase temperature", function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it("should be able to decrease temperature", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it("should have a minimum temperature of 10 degrees", function() {
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });

    it("should be reset to a temperature of 20 degrees when the rest button is pushed", function() {
      thermostat.temperature = 23;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("when Power Saving Mode is on", function() {

    it("should not increase the temperature above the maximum temperature", function() {
      thermostat.temperature = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("when Power Saving Mode is off", function() {

    it("should not increase the temperature above the maximum temperature", function() {
      thermostat.temperature = 32;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("the energy efficiency rating", function() {

    it("should have an efficiency rating of 'good' at temperatures less than 18 degrees", function() {
      thermostat.temperature = 17;
      expect(thermostat.efficiency()).toEqual('good');
    });

    it("should have an energy rating of 'ok' at temperatures between 18 and 24 degrees", function() {
      thermostat.temperature = 21;
      expect(thermostat.efficiency()).toEqual('ok');
    });

    it("should have an energy rating of 'bad' at temperatures of 25 and over", function() {
      thermostat.temperature = 26;
      expect(thermostat.efficiency()).toEqual('bad');
    });
  });
});