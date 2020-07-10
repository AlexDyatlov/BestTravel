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

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var home = document.querySelector('.home');
var header = document.querySelector('.header');

var tours = document.querySelector('.tours');
var search = document.querySelector('.search');

var housing = document.querySelector('.housing');
var hotels = document.querySelector('.hotels');

var events = document.querySelector('.events');
var blog = document.querySelector('.travel-blog');

var contacts = document.querySelector('.contacts');
var footer = document.querySelector('.footer');

home.addEventListener('click', () => {
  scrollTo(header);
});

tours.addEventListener('click', () => {
  scrollTo(search);
});

housing.addEventListener('click', () => {
  scrollTo(hotels);
});

events.addEventListener('click', () => {
  scrollTo(blog);
});

contacts.addEventListener('click', () => {
  scrollTo(footer);
});

var btn = $('#button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
