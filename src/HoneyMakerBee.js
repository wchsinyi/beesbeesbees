var HoneyMakerBee = function () {
  Grub.call(this);
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype); //set inheritance
HoneyMakerBee.prototype.constructor = HoneyMakerBee; //set Bee constructor func
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++
};
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--
};