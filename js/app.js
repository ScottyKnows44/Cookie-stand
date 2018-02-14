var timeHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function SalmonStore (id, name, minCustomers, maxCustomers, avgCookies) {
  this.timeHours = timeHours;
  this.id = id;
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookiesSoldToday = [];
  this.addedTotalCookies = 0;
  this.customersEachHour = [];
  allBranches.push(this);
}
SalmonStore.prototype.peopleEveryHour = function() {
  for (var i = 0; i < timeHours.length; i++) {
    var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
    this.customersEachHour.push(customerForOneHour);
  }

},

SalmonStore.prototype.totalSold = function() {
  for (var i=0; i < timeHours.length; i++) {
    var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
    this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
    this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
  }
},

SalmonStore.prototype.putTheNumbersInTheBroswer = function() {
  var tableContent = document.getElementById('storeTable');
  this.peopleEveryHour();
  this.totalSold();
  var trEL = document.createElement('tr');
  tdEL = document.createElement('td');
  tdEL.textContent = this.name;
  trEL.appendChild(tdEL);
  for (var i = 0; i < timeHours.length; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.totalCookiesSoldToday[i];
    trEL.appendChild(tdEL);

};

pike.putTheNumbersInTheBroswer();

  }
  tableContent.appendChild(trEL);
  tdEL = document.createElement('td');
  tdEL.textContent = this.addedTotalCookies;
  trEL.appendChild(tdEL);
};

function headerRow () {
  var total = document.createElement('th');
  var blankData = document.createElement('th');
  var tableContent = document.getElementById('storeTable');
  var trEL = document.createElement('tr');
  trEL.appendChild(blankData);
  for (var i = 0; i < timeHours.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = timeHours[i];
    trEL.appendChild(thEL);
  }
  total.textContent = 'total';
  trEL.appendChild(total);
  tableContent.appendChild(trEL);
}
headerRow();

var allBranches = [];
new SalmonStore('pike','1st and Pike', 23, 65, 6.3);
new SalmonStore('seatac','SeaTac Airport', 3, 24, 1.2);
new SalmonStore('center','SeattleCenter', 11, 38, 3.7);
new SalmonStore('hill', 'Capital Hill', 20, 38, 2.3);
new SalmonStore('alki', 'Alki', 2, 16, 4.6);

for (var i = 0; i < allBranches.length; i++) {
  allBranches[i].putTheNumbersInTheBroswer();
} 

