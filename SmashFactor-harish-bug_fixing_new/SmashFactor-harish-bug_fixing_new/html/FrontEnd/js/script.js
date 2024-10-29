
$(".nav-link").click(function(){
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

$("#date-picker").click(function(){
    $('#date-picker').datepicker();
});


  // $(function () {

  //   $('.slider-indicator-item').click(function () {

  //     var index = parseInt($(this).val());
  //     $('.slider-container').flickity('select', index);
  //   });
  // });

  $(function () {


    var $carousel = $('.slider-container').flickity({
      wrapAround: true,
    });

    $carousel.on( 'change.flickity', function( event, index ) {
      console.log( 'Flickity change ' + index );
      $('.slider-indicator-item').removeClass('active');
      $(`#slider-indicator-${index + 1}`).addClass('active');
      // console.log($('.slider-indicator-item[name="slider-indicator"]').val(index))
    });

    $('.slider-indicator-item').click(function () {

      var index = parseInt($(this).val());
      $carousel.flickity('select', index);
      // console.log(index)

    });
    // $('.slider-container').flickity({
    //   on: {
    //     ready: function() {
    //       console.log('Flickity is ready');
    //     },
    //     change: function( index ) {
    //       console.log( 'Slide changed to' + index );
    //     }
    //   }
    // });
    // initialize Flickity
    // carousel.flickity();
  });


  // Tee time booking JS

// Script For Date increment and Decrement
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
number = document.querySelector(".number");
let a = 0;
plus.addEventListener("click", ()=>{
  a++;
  number.innerText = a;
});
minus.addEventListener("click", ()=>{
  if(a > 0){
    a--;
    number.innerText = a;
  }
});

  //Register page form Js
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

const togglePasswordone = document.querySelector('#conformPasswords');
  const passwordone = document.querySelector('#conform_password');

  togglePasswordone.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordone.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordone.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
const togglePasswordlogin = document.querySelector('#loginPasswords');
  const passwordlogin = document.querySelector('#login_password');

  togglePasswordlogin.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordlogin.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordlogin.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
// -----Country Code Selection
$("#phone").intlTelInput({
  initialCountry: "in",
  separateDialCode: true,
  // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});




  // Script for Booking section Button
function SemiPrivate(){
  document.getElementById("booking_section_heading").innerHTML = "You are in the SemiPrivate Section";
  document.getElementById("semi_private_btn").style.backgroundColor = "#046A38";
  document.getElementById("semi_private_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
}
function LuxuryBox(){
  document.getElementById("booking_section_heading").innerHTML = "You are in the LuxuryBox Section";
  document.getElementById("luxury_box_btn").style.backgroundColor = "#046A38";
  document.getElementById("luxury_box_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
}
function DrivingRange(){
  document.getElementById("booking_section_heading").innerHTML = "1 Godzina  |  60 min";
  document.getElementById("driving_range_btn").style.backgroundColor = "#046A38";
  document.getElementById("driving_range_btn").style.color = "white";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
}

