modalMultiple();
modalOpen();
menuOpen();

function modalMultiple() {
  $(document).on('hidden.bs.modal', '.modal', function () {
    var modalData = $(this).data('bs.modal');

    if (modalData && modalData.options.remote) {
      $(this).removeData('bs.modal');
      $(this).find(".modal-content").empty();
    }
  });
}

function modalOpen() {
  $('.modal-open').on("click", function () {
    var color = $(this).attr('data-color');
    var colorBackdrop = 'modal-backdrop-' + color;
    setTimeout(function () {
      $('.modal-backdrop').addClass(colorBackdrop);
    });
  });

  $('.btn-close, .modal').on("click", function () {
    var color = $('.in').attr('data-color');
    var activeBackdrop = 'modal-backdrop-' + color;
    $('.modal-backdrop').removeClass(activeBackdrop);
  });
}

function menuOpen() {
  var menu = $('.header').find('.header-menu');
  $('.header .burger').click(function () {
    menu.toggleClass('open');
  });

  $(document).click(function (e) {
    var header = $(".header");
    if (!header.is(e.target) && header.has(e.target).length === 0) {
      menu.removeClass('open');
    }
  });
}
