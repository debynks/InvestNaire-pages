/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Timer Plugin Start  http://hilios.github.io/jQuery.countdown/
$('#clock').countdown('2022/01/01', function (event) {
  $('#days').html(event.strftime('%D'));
  $('#hours').html(event.strftime('%H'));
  $('#minutes').html(event.strftime('%M'));
  $('#seconds').html(event.strftime('%S'));
});
$('[data-countdown]').each(function () {
  var $this = $(this),
      finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function (event) {
    $this.html(event.strftime('%D : %H : %M : %S'));
  });
}); // Timer Plugin End  http://hilios.github.io/jQuery.countdown/
// Tilt.js Plugin Start  https://gijsroge.github.io/tilt.js/

$('.img-tilt').tilt({
  maxTilt: 5,
  glare: true,
  maxGlare: .5
}); // Tilt.js Plugin End  https://gijsroge.github.io/tilt.js/
// Owl-carousel Plugin Start  https://owlcarousel2.github.io/OwlCarousel2/


$('#campaign_sliders').owlCarousel({
	  loop: true,
	  margin: 50,
	  dots: true,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
	  nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#campaign_products').owlCarousel({
	  loop: false,
	  margin: 0,
	  dots: true,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
	  nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#live-auctions').owlCarousel({
  loop: true,
  margin: 24,
  dots: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav: true,
  navText: ["<img src='../assets/img/svg/arrowright.svg'>", "<img src='../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 2
    },
    992: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
});
$('#project_trending-campaigns').owlCarousel({
  loop: true,
  margin: 24,
  dots: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  nav: true,
  navText: ["<img src='../../assets/img/svg/arrowright.svg'>", "<img src='../../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 2
    },
    992: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
});
$('#inner-page-1').owlCarousel({
  loop: false,
  margin: 24,
  dots: false,
  autoplay: false,
  nav: true,
  navText: ["<img src='../assets/img/svg/arrowright.svg'>", "<img src='../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 2
    },
    992: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
});
$('#inner-page-2').owlCarousel({
  loop: false,
  margin: 24,
  dots: false,
  autoplay: false,
  nav: true,
  navText: ["<img src='../assets/img/svg/arrowright.svg'>", "<img src='../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 2
    },
    992: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
});
$('#popular-artwork').owlCarousel({
  loop: false,
  margin: 24,
  dots: false,
  autoplay: false,
  nav: true,
  navText: ["<img src='../assets/img/svg/arrowright.svg'>", "<img src='../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 2
    },
    1100: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
$('#popular-collection-home2').owlCarousel({
  loop: false,
  margin: 24,
  dots: false,
  autoplay: false,
  nav: true,
  navText: ["<img src='../assets/img/svg/arrowright.svg'>", "<img src='../assets/img/svg/arrowleft.svg'>"],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    575: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1000: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
$('#hero5-carousel').owlCarousel({
  loop: true,
  margin: 24,
  dots: false,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  autoWidth: true,
  navText: ["<img src='/assets/img/svg/ArrowRightWhite.svg'>", "<img src='/assets/img/svg/ArrowLeftWhite.svg'>"],
  responsive: {
    0: {
      center: true,
      nav: false
    },
    420: {
      center: true,
      nav: true
    },
    992: {
      center: false,
      rtl: true,
      nav: true
    }
  }
}); // Owl-carousel Plugin Start  https://owlcarousel2.github.io/OwlCarousel2/











$(document).ready(function () {
  $(".unlock").click(function () {
    $('.unlock-input-otr').toggleClass("input-active");
  });
});
$(document).ready(function () {
  $(function () {
    // create an empty variable
    var selectedClass = ""; // call function when item is clicked

    $(".nav-item").click(function () {
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel"); // fades out all portfolio items

      $(".portfolio li").fadeOut(0); // fades in selected category

      $(".portfolio li." + selectedClass).delay(0).fadeIn(0);
    });
  });
  $(document).ready(function () {
    $(".nav-item").click(function () {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
    });
  });
});
$(document).ready(function () {
  $(".heart-icon").click(function () {
    $(this).toggleClass("selected");
  });
});
$(document).ready(function () {
  $(".burger-icon").click(function () {
    $(".modal-content-custom").addClass("active");
  });
  $(".icon-close").click(function () {
    $(".modal-content-custom").removeClass("active");
  });
  $(".burger-icon").click(function () {
    $(".overlay-content-otr").addClass("active-overlay-content-otr");
  });
  $(".icon-close").click(function () {
    $(".overlay-content-otr").removeClass("active-overlay-content-otr");
  });
});
$(document).ready(function () {
  $(".burger-icon").click(function () {
    $(".modal-content-custom").addClass("active");
  });
  $(".icon-close").click(function () {
    $(".modal-content-custom").removeClass("active");
  });
  $(".burger-icon").click(function () {
    $(".overlay-content-otr-dark").addClass("active-overlay-content-otr");
  });
  $(".icon-close").click(function () {
    $(".overlay-content-otr-dark").removeClass("active-overlay-content-otr");
  });
});
$(document).ready(function () {
  $(".language-a").click(function () {
    $(".drop-ul").toggleClass("block");
  });
});
$(document).ready(function () {
  $(".icon-share").click(function () {
    $(".share-hover").toggleClass("block-3");
  });
});
$(document).ready(function () {
  $(".click-open3").click(function () {
    $(".click-event3").toggleClass("displayblock");
    $(".click-event2").removeClass("displayblock");
    $(".click-event1").removeClass("displayblock");
  });
  $(".click-open2").click(function () {
    $(".click-event2").toggleClass("displayblock");
    $(".click-event3").removeClass("displayblock");
    $(".click-event1").removeClass("displayblock");
  });
  $(".click-open1").click(function () {
    $(".click-event1").toggleClass("displayblock");
    $(".click-event2").removeClass("displayblock");
    $(".click-event3").removeClass("displayblock");
  });
  $(".burger-click").click(function () {
    $(".click-event1").removeClass("displayblock");
    $(".click-event2").removeClass("displayblock");
    $(".click-event3").removeClass("displayblock");
  });
});
$(document).ready(function () {
  $(".btn-1").click(function () {
    $(".filter-1").toggleClass("filter-active");
  });
  $(".btn-2").click(function () {
    $(".filter-2").toggleClass("filter-active");
  });
  $(".btn-3").click(function () {
    $(".filter-3").toggleClass("filter-active");
  });
  $(".btn-4").click(function () {
    $(".filter-4").toggleClass("filter-active");
  });
  $(".btn-5").click(function () {
    $(".filter-5").toggleClass("filter-active");
  });
  $(".btn-6").click(function () {
    $(".filter-6").toggleClass("filter-active");
  });
  $(".btn-7").click(function () {
    $(".filter-7").toggleClass("filter-active");
  });
  $(".btn-8").click(function () {
    $(".filter-8").toggleClass("filter-active");
  });
  $(".btn-9").click(function () {
    $(".filter-9").toggleClass("filter-active");
  });
  $(".clear-filter").click(function () {
    $(".button").removeClass("filter-active");
  });
});
$(document).ready(function () {
  $(".box-2").click(function () {
    $(".box-2").toggleClass("active-border");
    $(".box-3").removeClass("active-border");
    $(".box-4").removeClass("active-border");
  });
  $(".box-3").click(function () {
    $(".box-3").toggleClass("active-border");
    $(".box-2").removeClass("active-border");
    $(".box-4").removeClass("active-border");
  });
  $(".box-4").click(function () {
    $(".box-4").toggleClass("active-border");
    $(".box-3").removeClass("active-border");
    $(".box-2").removeClass("active-border");
  });
});
$(document).ready(function () {
  $(".home").click(function () {
    $(".drop-1").slideToggle(400);
  });
  $(".explore").click(function () {
    $(".drop-2").slideToggle(400);
  });
  $(".pages").click(function () {
    $(".drop-3").slideToggle(400);
  });
  $(".other-pages").click(function () {
    $(".drop-4").slideToggle(400);
  });
  $(".community").click(function () {
    $(".drop-5").slideToggle(400);
  });
  $(".nav-a").click(function () {
    $(".nav-a").removeClass("active-nav");
    $(this).addClass("active-nav");
  });
}); // clicks
// Tabs Start Here

$('.tab-link').click(function () {
  var tabID = $(this).attr('data-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});
$('.tab-link-work').click(function () {
  var tabID = $(this).attr('data-tab');
  $(this).addClass('active').siblings().removeClass('active');
  $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
}); // Tabs End Here
// Select Start Here

$('select').each(function () {
  var $this = $(this),
      numberOfOptions = $(this).children('option').length;
  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');
  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select-styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').toggle();
  });
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide(); //console.log($this.val());
  });
  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });
}); // Select End Here

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! G:\Ethoz New\Ethoz-Light\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! G:\Ethoz New\Ethoz-Light\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map




// CHART JS

$(document).ready(function(){

$('.statistic-counter').counterUp({
delay: 1,
time: 70
});


});

// CHART JS





// Toggle Light & Dark Switch

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
	if ( e.target.checked ) {
  $( "body" ).addClass( "darktheme" );
} else {
  $( "body" ).removeClass( "darktheme" );
}
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Toggle Light & Dark Switch

//Login form Controller

var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",
    
    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,
    
    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second
    
    findElements: function () {
        var base = this;
        
        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);
        
        return base;
    },
    
    setState: function (state) {
    	var base = this,
            elem = null;
        
        if (!state) {
            state = 0;
        }
        
        if (base.tabsElement) {
        	elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }
  
        return base;
    },
    
    getActiveTab: function () {
        var base = this;
        
        base.tabsElement.each(function (i, el) {
           if ($(el).hasClass("current")) {
               base.activeTab = $(el);
           }
        });
        
        return base;
    },
   
    addClickEvents: function () {
    	var base = this;
        
        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");
            
            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });
 
        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");
            
            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");
            
            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });
        
        base.inputElements.find("label").on("click", function (e) {
           var $this = $(this),
               $input = $this.next("input");
            
            $input.focus();
        });
        
        return base;
    },
    
    initialize: function () {
        var base = this;
        
        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function() {
    LoginModalController.initialize();
});



//Login form Controller

// Particles Background

/*
 * @author  - @sebagarcia
 * @version 1.1.0
 * Inspired & based on "Particleground" by Jonathan Nicol
 */

;(function(window, document) {
  "use strict";
  var pluginName = 'particleground';

  // http://youmightnotneedjquery.com/#deep_extend
  function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object')
            deepExtend(out[key], obj[key]);
          else
            out[key] = obj[key];
        }
      }
    }
    return out;
  };

  var $ = window.jQuery;

  function Plugin(element, options) {
    var canvasSupport = !!document.createElement('canvas').getContext;
    var canvas;
    var ctx;
    var particles = [];
    var raf;
    var mouseX = 0;
    var mouseY = 0;
    var winW;
    var winH;
    var desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    var orientationSupport = !!window.DeviceOrientationEvent;
    var tiltX = 0;
    var pointerX;
    var pointerY;
    var tiltY = 0;
    var paused = false;

    options = extend({}, window[pluginName].defaults, options);

    /**
     * Init
     */
    function init() {
      if (!canvasSupport) { return; }

      //Create canvas
      canvas = document.createElement('canvas');
      canvas.className = 'pg-canvas';
      canvas.style.display = 'block';
      element.insertBefore(canvas, element.firstChild);
      ctx = canvas.getContext('2d');
      styleCanvas();

      // Create particles
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      for (var i = 0; i < numParticles; i++) {
        var p = new Particle();
        p.setStackPos(i);
        particles.push(p);
      };

      window.addEventListener('resize', function() {
        resizeHandler();
      }, false);

      document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
      }, false);

      if (orientationSupport && !desktop) {
        window.addEventListener('deviceorientation', function () {
          // Contrain tilt range to [-30,30]
          tiltY = Math.min(Math.max(-event.beta, -30), 30);
          tiltX = Math.min(Math.max(-event.gamma, -30), 30);
        }, true);
      }

      draw();
      hook('onInit');
    }

    /**
     * Style the canvas
     */
    function styleCanvas() {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
      ctx.fillStyle = options.dotColor;
      ctx.strokeStyle = options.lineColor;
      ctx.lineWidth = options.lineWidth;
    }

    /**
     * Draw particles
     */
    function draw() {
      if (!canvasSupport) { return; }

      winW = window.innerWidth;
      winH = window.innerHeight;

      // Wipe canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particle positions
      for (var i = 0; i < particles.length; i++) {
        particles[i].updatePosition();
      };
      // Draw particles
      for (var i = 0; i < particles.length; i++) {
        particles[i].draw();
      };

      // Call this function next time screen is redrawn
      if (!paused) {
        raf = requestAnimationFrame(draw);
      }
    }

    /**
     * Add/remove particles.
     */
    function resizeHandler() {
      // Resize the canvas
      styleCanvas();

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      // Remove particles that are outside the canvas
      for (var i = particles.length - 1; i >= 0; i--) {
        if (particles[i].position.x > elWidth || particles[i].position.y > elHeight) {
          particles.splice(i, 1);
        }
      };

      // Adjust particle density
      var numParticles = Math.round((canvas.width * canvas.height) / options.density);
      if (numParticles > particles.length) {
        while (numParticles > particles.length) {
          var p = new Particle();
          particles.push(p);
        }
      } else if (numParticles < particles.length) {
        particles.splice(numParticles);
      }

      // Re-index particles
      for (i = particles.length - 1; i >= 0; i--) {
        particles[i].setStackPos(i);
      };
    }

    /**
     * Pause particle system
     */
    function pause() {
      paused = true;
    }

    /**
     * Start particle system
     */
    function start() {
      paused = false;
      draw();
    }

    /**
     * Particle
     */
    function Particle() {
      this.stackPos;
      this.active = true;
      this.layer = Math.ceil(Math.random() * 3);
      this.parallaxOffsetX = 0;
      this.parallaxOffsetY = 0;
      // Initial particle position
      this.position = {
        x: Math.ceil(Math.random() * canvas.width),
        y: Math.ceil(Math.random() * canvas.height)
      }
      // Random particle speed, within min and max values
      this.speed = {}
      switch (options.directionX) {
        case 'left':
          this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2);
          break;
        case 'right':
          this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2);
          break;
        default:
          this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2);
          this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX;
          break;
      }
      switch (options.directionY) {
        case 'up':
          this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2);
          break;
        case 'down':
          this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2);
          break;
        default:
          this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2);
          this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY;
          break;
      }
    }

    /**
     * Draw particle
     */
    Particle.prototype.draw = function() {
      // Draw circle
      ctx.beginPath();
      ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, options.particleRadius / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      // Draw lines
      ctx.beginPath();
      // Iterate over all particles which are higher in the stack than this one
      for (var i = particles.length - 1; i > this.stackPos; i--) {
        var p2 = particles[i];

        // Pythagorus theorum to get distance between two points
        var a = this.position.x - p2.position.x
        var b = this.position.y - p2.position.y
        var dist = Math.sqrt((a * a) + (b * b)).toFixed(2);

        // If the two particles are in proximity, join them
        if (dist < options.proximity) {
          ctx.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY);
          if (options.curvedLines) {
            ctx.quadraticCurveTo(Math.max(p2.position.x, p2.position.x), Math.min(p2.position.y, p2.position.y), p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          } else {
            ctx.lineTo(p2.position.x + p2.parallaxOffsetX, p2.position.y + p2.parallaxOffsetY);
          }
        }
      }
      ctx.stroke();
      ctx.closePath();
    }

    /**
     * update particle position
     */
    Particle.prototype.updatePosition = function() {
      if (options.parallax) {
        if (orientationSupport && !desktop) {
          // Map tiltX range [-30,30] to range [0,winW]
          var ratioX = (winW - 0) / (30 - -30);
          pointerX = (tiltX - -30) * ratioX + 0;
          // Map tiltY range [-30,30] to range [0,winH]
          var ratioY = (winH - 0) / (30 - -30);
          pointerY = (tiltY - -30) * ratioY + 0;
        } else {
          pointerX = mouseX;
          pointerY = mouseY;
        }
        // Calculate parallax offsets
        this.parallaxTargX = (pointerX - (winW / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10; // Easing equation
        this.parallaxTargY = (pointerY - (winH / 2)) / (options.parallaxMultiplier * this.layer);
        this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10; // Easing equation
      }

      var elWidth = element.offsetWidth;
      var elHeight = element.offsetHeight;

      switch (options.directionX) {
        case 'left':
          if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.position.x = elWidth - this.parallaxOffsetX;
          }
          break;
        case 'right':
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth) {
            this.position.x = 0 - this.parallaxOffsetX;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.x + this.speed.x + this.parallaxOffsetX > elWidth || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.speed.x = -this.speed.x;
          }
          break;
      }

      switch (options.directionY) {
        case 'up':
          if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.position.y = elHeight - this.parallaxOffsetY;
          }
          break;
        case 'down':
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight) {
            this.position.y = 0 - this.parallaxOffsetY;
          }
          break;
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.y + this.speed.y + this.parallaxOffsetY > elHeight || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.speed.y = -this.speed.y;
          }
          break;
      }

      // Move particle
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;
    }

    /**
     * Setter: particle stacking position
     */
    Particle.prototype.setStackPos = function(i) {
      this.stackPos = i;
    }

    function option (key, val) {
      if (val) {
        options[key] = val;
      } else {
        return options[key];
      }
    }

    function destroy() {
      console.log('destroy');
      canvas.parentNode.removeChild(canvas);
      hook('onDestroy');
      if ($) {
        $(element).removeData('plugin_' + pluginName);
      }
    }

    function hook(hookName) {
      if (options[hookName] !== undefined) {
        options[hookName].call(element);
      }
    }

    init();

    return {
      option: option,
      destroy: destroy,
      start: start,
      pause: pause
    };
  }

  window[pluginName] = function(elem, options) {
    return new Plugin(elem, options);
  };

  window[pluginName].defaults = {
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 7000, // How many particles will be generated: one particle every n pixels
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 7, // Dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
    onInit: function() {},
    onDestroy: function() {}
  };

  // nothing wrong with hooking into jQuery if it's there...
  if ($) {
    $.fn[pluginName] = function(options) {
      if (typeof arguments[0] === 'string') {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function() {
          if ($.data(this, 'plugin_' + pluginName) && typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function') {
            returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(this, args);
          }
        });
        if (returnVal !== undefined){
          return returnVal;
        } else {
          return this;
        }
      } else if (typeof options === "object" || !options) {
        return this.each(function() {
          if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
          }
        });
      }
    };
  }

})(window, document);

/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
}());

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#7EC8EE',
    lineColor: '#7EC8EE'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

// Particles Background


// Preloader

var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;

// Loadbar Animation
$(".loadbar").animate({
  width: width + "%"
}, time);

// Loadbar Glow Animation
$(".glow").animate({
  width: width + "%"
}, time);

// Percentage Increment Animation
var PercentageID = $("#precent"),
		start = 0,
		end = 100,
		durataion = time;
		animateValue(PercentageID, start, end, durataion);
		
function animateValue(id, start, end, duration) {
  
	var range = end - start,
      current = start,
      increment = end > start? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    
	var timer = setInterval(function() {
		current += increment;
		$(obj).text(current + "%");
      //obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}

// Fading Out Loadbar on Finised
setTimeout(function(){
  $('.preloader-wrap').fadeOut(300);
}, time);

// Preloader


// CRYPTO CURRENY CONVERTER
var outside = document.getElementById("body-container");
var toPrice = document.getElementById("to-currency-price");
var fromBasis = document.getElementById("from-basis");
var toMenu = document.getElementById("to-menu");
var fromMenu = document.getElementById("from-menu");
var toSelect = document.getElementsByClassName("to-currency");
var fromSelect = document.getElementsByClassName("from-currency");

var toCurrency = "USD";
var fromCurrency = "BTC";

var retrievePrice = function() {
    var XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function(){
      if(XHR.readyState == 4 && XHR.status == 200) {
        var val = JSON.parse(XHR.responseText)[fromCurrency][toCurrency];
        var price = val.toLocaleString('en');
        toPrice.textContent = price + " " + toCurrency;
        fromBasis.textContent = fromCurrency;
      }
    }
    
    XHR.open("GET","https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + fromCurrency + "&tsyms=" + toCurrency);
    XHR.send();
}

for(var i = 0; i < toSelect.length; i++) {
    toSelect[i].addEventListener("click", function() {
        toMenu.classList.remove("expand");
        toCurrency = this.textContent;
        retrievePrice();
    });
}

for(var i = 0; i < fromSelect.length; i++) {
    fromSelect[i].addEventListener("click", function() {
        fromMenu.classList.remove("expand");
        fromCurrency = this.textContent;
        retrievePrice();
    });
}

toPrice.addEventListener("click", function() {
    if(toMenu.classList.contains("expand")) {
        toMenu.classList.remove("expand");
    } else {
        toMenu.classList.add("expand");
    }
});

fromBasis.addEventListener("click", function() {
    if(fromMenu.classList.contains("expand")) {
        fromMenu.classList.remove("expand");
    } else {
        fromMenu.classList.add("expand");
    }
});

//Execute
setInterval(function() {
    retrievePrice();
}, 10000);

retrievePrice();


// CRYPTO CURRENY CONVERTER


