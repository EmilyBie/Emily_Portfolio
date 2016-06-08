$(document).ready(function() {
  console.log('js ready');
  var navList = $('.nav-list');

  navList.on('click','a', function(event) {
    $(this).closest('li').addClass('active').siblings().removeClass('active');

  });

});