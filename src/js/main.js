$(function(){

  $('select').styler({
    selectSearch: 'true',
    selectVisibleOptions: '8'
  });

  let divResult1 = document.getElementById('price-from');
  let divResult2 = document.getElementById('price-up');

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 900000,
    from: 8000,
    to: 45000,
    prefix: "₽",
    onChange: function (data) {
      divResult1.textContent = `${data.from}`,
      divResult2.textContent = `${data.to}`;
    },

   });

   $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

});

