
$(".nav-link").click(function(){
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

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

  // Script for Booking section Button 
  
function SemiPrivate(){
  document.getElementById("booking_section_heading").innerHTML = "Is an individually located, somewhat private simulator which features Golfzon’s Vision Premium Simulator. The Vision Premium offer’s Golfzon’s vision software which virtually transports you to over 190 golf courses around the world. Same auto-tee and ball retrieval system as the GDR, however Vision Premium also gives you an 8-way hydraulic swing plate which adjusts to emulate any lie – uphill, downhill, and sidehill. This simulator also includes a multi-surface hitting mat with fairway, rough, and bunker textures to replicate a true-to-life simulation of different hitting conditions.";
  document.getElementById("driving_image").innerHTML = "<img src='images/premium_bay.png' alt='drivingrange' class='simulator-image-1'>"
  document.getElementById("semi_private_btn").style.backgroundColor = "#046A38";
  document.getElementById("semi_private_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
  document.getElementById("driving_section_second").style.display='none';
  document.getElementById("youtube-video-driving").style.display='none';
  document.getElementById("youtube-video-semi").style.display='flex';
  document.getElementById("youtube-video-lux").style.display='none';
}
function LuxuryBox(){
  document.getElementById("booking_section_heading").innerHTML = "This fully private, luxury suite features the best simulator money can buy. Golfzon’s Two Vision simulator offers everything the Vision Premium has, and more! The multi-surface hitting mat has 5 total textures adding a second cut of rough and second bunker (one fairway and one green side) for better hitting conditions. The hydraulic swing plate has 24 positions for the most realistic course contours. The Two Vision simulator also includes a green-reading LED putting guide, and divot sensing technology which shows your divot after a shot.";
  document.getElementById("driving_image").innerHTML = "<img src='images/lux-img.png' alt='drivingrange' class='simulator-image-1'>"
  document.getElementById("luxury_box_btn").style.backgroundColor = "#046A38";
  document.getElementById("luxury_box_btn").style.color = "white";
  document.getElementById("driving_range_btn").style.backgroundColor = "white";
  document.getElementById("driving_range_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
  document.getElementById("driving_section_second").style.display='none';
  document.getElementById("youtube-video-driving").style.display='none';
  document.getElementById("youtube-video-semi").style.display='none';
  document.getElementById("youtube-video-lux").style.display='flex';
}
function DrivingRange(){
  document.getElementById("booking_section_heading").innerHTML = "Designed for golfer’s improvement, our range features Golfzon’s Driving Range Simulator, or GDR for short. The GDR simulator features a high-resolution dual camera sensor system which recognizes ball launch data such as speed, angle direction, and back/side spin rate. A swing motion camera captures the golfer’s swing from different angles so the golfer can playback and view his/her swing for analysis. GDR offers touch screen controls and pedal buttons.";
  document.getElementById("driving_image").innerHTML = "<img src='images/driving-range.png' alt='drivingrange' class='simulator-image-1'>"
  document.getElementById("driving_range_btn").style.backgroundColor = "#046A38";
  document.getElementById("driving_range_btn").style.color = "white";
  document.getElementById("luxury_box_btn").style.backgroundColor = "white";
  document.getElementById("luxury_box_btn").style.color = "#046A38";
  document.getElementById("semi_private_btn").style.backgroundColor = "white";
  document.getElementById("semi_private_btn").style.color = "#046A38";
  document.getElementById("driving_section_second").style.display='flex';
  document.getElementById("simulator-1").style.marginBottom ="60px";
  document.getElementById("youtube-video-driving").style.display='flex';
  document.getElementById("youtube-video-semi").style.display='none';
  document.getElementById("youtube-video-lux").style.display='none'; 
}

// jquery for youtupe video auto pause.

$(document).ready(function () {
  $('#semi_private_btn').click(function () {
    $( 'iframe' ).attr( 'src', function ( i, val ) { return val; });
  });

  $('#driving_range_btn').click(function () {
    $( 'iframe' ).attr( 'src', function ( i, val ) { return val; });
  });
  $('#luxury_box_btn').click(function () {
    $( 'iframe' ).attr( 'src', function ( i, val ) { return val; });
  })
    
  var url  = window.location.href;

  var split =  url.split("#");
  
    if(split[1] == "luxury"){
        LuxuryBox();
    }
    else if (split[1] == "semi-private") {
      SemiPrivate();
    }
});