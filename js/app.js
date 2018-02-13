var timeHours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike= {
  name: '1st&Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  peopleEveryHour: function() {
    for (var i = 0; i < timeHours.length; i++) {
      var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
      this.customersEachHour.push(customerForOneHour);
    }
  },

  totalCookiesSoldToday: [],
  addedTotalCookies: 0,

  totalSold: function() {
    for (var i=0; i < timeHours.length; i++) {
      var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
      this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
      this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
    }
  },

  putTheNumbersInTheBroswer: function() {
    var pikelist = document.getElementById('pike');
    this.peopleEveryHour();
    this.totalSold();
    for (var i = 0; i < timeHours.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = timeHours[i] + ': ' + this.totalCookiesSoldToday[i] + ' cookies';
      pikelist.appendChild(liEL);
    }
    liEL = document.createElement('li');
    liEL.textContent = 'total sold: ' + this.addedTotalCookies;
    pikelist.appendChild(liEL);
  }
};

pike.putTheNumbersInTheBroswer();

var seaTac= {
  name: 'SecTac',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  peopleEveryHour: function() {
    for (var i = 0; i < timeHours.length; i++) {
      var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
      this.customersEachHour.push(customerForOneHour);
    }

  },

  totalCookiesSoldToday: [],
  addedTotalCookies: 0,

  totalSold: function() {
    for (var i=0; i < timeHours.length; i++) {
      var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
      this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
      this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
    }
  },

  putTheNumbersInTheBroswer: function() {
    var seaTacList = document.getElementById('seatac');
    this.peopleEveryHour();
    this.totalSold();
    for (var i = 0; i < timeHours.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = timeHours[i] + ': ' + this.totalCookiesSoldToday[i] + ' cookies';
      seaTacList.appendChild(liEL);
    }
    liEL = document.createElement('li');
    liEL.textContent = 'total sold: ' + this.addedTotalCookies;
    seaTacList.appendChild(liEL);
  }
};

seaTac.putTheNumbersInTheBroswer();

var center= {
  name: 'Center',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  peopleEveryHour: function() {
    for (var i = 0; i < timeHours.length; i++) {
      var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
      this.customersEachHour.push(customerForOneHour);
    }
  },

  totalCookiesSoldToday: [],
  addedTotalCookies: 0,

  totalSold: function() {
    for (var i=0; i < timeHours.length; i++) {
      var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
      this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
      this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
    }
  },

  putTheNumbersInTheBroswer: function() {
    var centerlist = document.getElementById('center');
    this.peopleEveryHour();
    this.totalSold();
    for (var i = 0; i < timeHours.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = timeHours[i] + ': ' + this.totalCookiesSoldToday[i] + ' cookies';
      centerlist.appendChild(liEL);
    }
    liEL = document.createElement('li');
    liEL.textContent = 'total sold: ' + this.addedTotalCookies;
    centerlist.appendChild(liEL);
  }
};

center.putTheNumbersInTheBroswer();

var hill= {
  name: 'Hill',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  peopleEveryHour: function() {
    for (var i = 0; i < timeHours.length; i++) {
      var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
      this.customersEachHour.push(customerForOneHour);
    }
  },

  totalCookiesSoldToday: [],
  addedTotalCookies: 0,

  totalSold: function() {
    for (var i=0; i < timeHours.length; i++) {
      var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
      this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
      this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
    }
  },

  putTheNumbersInTheBroswer: function() {
    var hilllist = document.getElementById('hill');
    this.peopleEveryHour();
    this.totalSold();
    for (var i = 0; i < timeHours.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = timeHours[i] + ': ' + this.totalCookiesSoldToday[i] + ' cookies';
      hilllist.appendChild(liEL);
    }
    liEL = document.createElement('li');
    liEL.textContent = 'total sold: ' + this.addedTotalCookies;
    hilllist.appendChild(liEL);
  }
};

hill.putTheNumbersInTheBroswer();

var alki= {
  name: 'alki',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  peopleEveryHour: function() {
    for (var i = 0; i < timeHours.length; i++) {
      var customerForOneHour =  Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)+ this.minCustomers);
      this.customersEachHour.push(customerForOneHour);
    }
  },

  totalCookiesSoldToday: [],
  addedTotalCookies: 0,

  totalSold: function() {
    for (var i=0; i < timeHours.length; i++) {
      var totalCookiesSold = this.customersEachHour[i] * this.avgCookies;
      this.totalCookiesSoldToday.push(Math.floor(totalCookiesSold));
      this.addedTotalCookies = this.totalCookiesSoldToday[i] + this.addedTotalCookies;
    }
  },

  putTheNumbersInTheBroswer: function() {
    var alkilist = document.getElementById('alki');
    this.peopleEveryHour();
    this.totalSold();
    for (var i = 0; i < timeHours.length; i++) {
      var liEL = document.createElement('li');
      liEL.textContent = timeHours[i] + ': ' + this.totalCookiesSoldToday[i] + ' cookies';
      alkilist.appendChild(liEL);
    }
    liEL = document.createElement('li');
    liEL.textContent = 'total sold: ' + this.addedTotalCookies;
    alkilist.appendChild(liEL);
  }
};

alki.putTheNumbersInTheBroswer();
