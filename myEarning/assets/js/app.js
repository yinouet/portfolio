var app = new Vue({
  el: "#app",
  data: {
    expect: 500,
    weeklyOff: 2,
    dailyWH: 8,
    pto: 10,
    nationalHolidays: 16,
    errandsRate: 20
  },
  computed: {
    annualOff: function() {
      return this.weeklyOff * 52;
    },
    target: function() {
      return this.expect * 1.3;
    },
    yearWD: function() {
      return 365 - this.nationalHolidays - this.pto - this.annualOff;
    },
    yearWH: function() {
      return this.yearWD * this.dailyWH;
    },
    actualRate: function() {
      return (100 - this.errandsRate) / 100;
    },
    actualWD: function() {
      return Math.round(this.yearWD * this.actualRate * 100) / 100;
    },
    actualWH: function() {
      return Math.round(this.yearWH * this.actualRate * 100) / 100;
    },
    resultDay: function() {
      return Math.round((this.target * 10000) / this.actualWD);
    },
    resultHour: function() {
      return Math.round((this.target * 10000) / this.actualWH);
    }
  }
});
