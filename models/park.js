const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1)
};

Park.prototype.findMostPopularDinosaur = function () {
    let found;
    let highest = 0;
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highest) {
            highest = dinosaur.guestsAttractedPerDay;
            found = dinosaur;
        };
    };
    return found;
};

Park.prototype.findAllOfASpecies = function (species) {
    let found = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            found.push(dinosaur);
        };
    };
    return found;
};

Park.prototype.calculateTotalVisitors = function () {
    let total = 0;
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    };
    return total
};

Park.prototype.calculateVisitorsPerYear = function () {
    let total = 0;
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    };
    let yearlytotal = (total*365);
    return yearlytotal;
};

Park.prototype.calculateYearlyRevenue = function (totalVisitors) {
    let total = (totalVisitors * this.ticketPrice);
    return total;
};

module.exports = Park