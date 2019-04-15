var Bee = function () {
  Grub.call(this); //get some props set up by Grub
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype); //set inheritance
Bee.prototype.constructor = Bee; //set Bee constructor func