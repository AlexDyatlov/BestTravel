$(function(){

  $('select').styler({
    selectSearch: 'true',
    selectVisibleOptions: '8'
  });

  // start range-slider
  var $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 0,
  max = 900000,
  from = 0,
  to = 0;

 $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 8000,
    to: 45000,
    prefix: "₽",
		onStart: updateInputs,
    onChange: updateInputs
   });
   instance = $range.data("ionRangeSlider");

   function updateInputs (data){
		from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        
        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");
        
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        
        instance.update({
            to: val
        });
    });
    // end range-slider

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

    $('.hotels__tabs .tab, .settings__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.hotels__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.hotels__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      $('.menu__btn').on('click', function(){
        $(this).toggleClass("is-active");
        $('.menu__list').slideToggle();
      });

});

function readMore() {

  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btn");

  if(dots.style.display === "none") {

    dots.style.display="inline";
    btn.innerHTML="Другие направления";
    more.style.display="none";
  }
  
    else {
    dots.style.display="none";
    btn.innerHTML="Скрыть";
    more.style.display="inline";
    }

}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});

var btn = $('#button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
