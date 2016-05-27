(function($) {

// Run once when the DOM is ready (page load)
$(document).ready(function() {
  if($('body').hasClass('front')) {
    initBt4();
  };

  //set transitionBackground dimentions
  setLayerDimensions();

  $('.fixed-nav a').click(function(event){
    $('a').removeClass("active");
    $(this).addClass("active");

    // Add active class to documentation wrappers fixed nav
    var activeLink = $(this).attr("href");

    $('.fixed-nav-menu-wrapper').removeClass('active');
    $(activeLink).addClass('active');
  });
});

$(window).on('resize', function(){
  if( !resize ) {
    resize = true;
    (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
  }
});

//cache some jQuery objects
var modalTrigger = $('.button--4'),
transitionLayer = $('.cd-transition-layer'),
transitionBackground = transitionLayer.children()

var frameProportion = 1.78, //png frame aspect ratio
frames = transitionLayer.data('frame'), //number of png frames
resize = false;

function setLayerDimensions() {
  var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    layerHeight, layerWidth;

  if( windowWidth/windowHeight > frameProportion ) {
    layerWidth = windowWidth;
    layerHeight = layerWidth/frameProportion;
  } else {
    layerHeight = windowHeight*1.2;
    layerWidth = layerHeight*frameProportion;
  }

  transitionBackground.css({
    'width': layerWidth*frames+'px',
    'height': layerHeight+'px',
  });

  resize = false;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

if (isFF) {
  document.getElementsByTagName('html')[0].classList.add('firefox');
}

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

// Align modal center documentation
function modalPosition() {
  TweenMax.to(".bg-layer", 1, {css: {top: '50%', left: '50%'}, ease:Expo.easeOut, delay: .6});
}

// Button 4
function initBt4() {
  var bt = document.querySelectorAll('#component-4')[0];
  var bg = document.querySelectorAll('#component-4 .button')[0];
  var blob = document.querySelectorAll('#component-4 .blob');

  bt.addEventListener('mousemove', function(e) {
    var x = (e.pageX - bt.offsetLeft - bt.offsetWidth / 2) * 0.6;
    var y = (e.pageY - bt.offsetTop - bt.offsetHeight / 2) * 0.6;

    TweenLite.to(blob[1], 4.2, { x: x, y: y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[2], 2.8, { x: x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[3], 2.8, { x: -x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
  });

  bt.addEventListener('mouseup', function(e) {
    var x = e.pageX - bt.offsetLeft - blob[0].offsetWidth / 2;
    var y = e.pageY - bt.offsetTop - blob[0].offsetHeight / 2;

    var dirX = Math.random() > 0.5 ? -1 : 1;
    var dirY = Math.random() > 0.5 ? -1 : 1;
    var r = getRandom(60, 80);

    Array.prototype.slice.call(blob, 1).forEach(function(bt) {
      var tl = new TimelineLite();
      tl.to(bt, 1.2, { x: dirX * r * Math.random() + '%', y: dirY * r * Math.random() + '%', ease: Elastic.easeOut.config(1, 0.2) });
      tl.to(bt, 1.2, { x: '0%', y: '0%', ease: Elastic.easeOut.config(1, 0.2) }, '-=1.1');
    });
  });
}

})(jQuery);
