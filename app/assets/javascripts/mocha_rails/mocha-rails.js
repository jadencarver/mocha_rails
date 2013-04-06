mocha.setup('bdd');
chai.should(); // Adds should method to Object's prototype.
expect = chai.expect;
onload = function() {
  var runner;
  if (window.mochaPhantomJS) {
    runner = mochaPhantomJS.run();
  } else {
    runner = mocha.run();
  }
  //runner.globals(['testExports']);
};
