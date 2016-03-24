(function ($) {
  Drupal.behaviors.pronovix_users = {
    attach: function () {
      var destSelect = "#developerApiKeys";
      if ($(destSelect).length) {
        var credentials = Drupal.settings.apigee.user.credentials || {};
        if (!$.isEmptyObject(credentials)) {
          for (var cred in credentials) {
            $(destSelect).append("<option value='" + cred + "'>" + credentials[cred] + "</option>");
          }
        }
      }
    }
  }
})(jQuery);
