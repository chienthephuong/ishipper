document.addEventListener('turbolinks:load', function() {
  $('.modal').on('show.bs.modal', function() {
    curModal = this;
    $('.modal').each(function() {
      if (this !== curModal) {
        if(!($(this).attr('id') == 'id-lvc-invoices-show' &&
          $(curModal).attr('id') == 'id-lvc-invoices-confirm'))
          $(this).modal('hide');
      }
    });

    if ($('.td-shipper-show-reviews').length) {
      $('.td-shipper-show-reviews').niceScroll({
        cursorwidth: "6px",
        cursorcolor: "rgba(0, 0, 0, 0.4)",
        autohidemode: false,
      });
    }
  });
});
