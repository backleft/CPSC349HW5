(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
      isCompanyEmail: function(email) {
        return /.+@tardis\.box$/.test(email);
      },
      isHighCaffeine: function(caffeine){
        return caffeine > 50;
      }
    };
    App.Validation = Validation;
    window.App = App;
  })(window);