const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let trex;
  let trex2;
  let trex3;
  let velociraptor;
  beforeEach(function () {
    trex = new Dinosaur('T-Rex', 'Meat', 13000);
    trex2 = new Dinosaur('T-Rex', 'Meat', 12000);
    trex3 = new Dinosaur('T-Rex', 'Meat', 10000);
    velociraptor = new Dinosaur('Velociraptor', 'Meat', 100);
    park = new Park('Danger Zone', 10);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Danger Zone');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(trex);
    park.addDinosaur(velociraptor);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trex, velociraptor]);
  });

  it('should be able to remove a dinosaur from its collection',function () {
    park.addDinosaur(trex);
    park.addDinosaur(velociraptor);
    park.removeDinosaur(velociraptor);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trex]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(trex);
    park.addDinosaur(velociraptor);
    actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, trex);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor);
    const actual = park.findAllOfASpecies('T-Rex');
    assert.deepStrictEqual(actual, [trex, trex2, trex3]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor);
    const actual = park.calculateTotalVisitors();
    assert.strictEqual(actual, 35100);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor);
    const actual = park.calculateVisitorsPerYear();
    assert.strictEqual(actual, 12811500);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(trex);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor);
    const total = park.calculateVisitorsPerYear();
    const actual = park.calculateYearlyRevenue(total);
    assert.strictEqual(actual, 128115000);
  });

});
