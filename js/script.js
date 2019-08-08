(function($){
  // Search
  var $searchWrap = $('#search-form-wrap'),
    isSearchAnim = false,
    searchAnimDuration = 200;

  var startSearchAnim = function(){
    isSearchAnim = true;
  };

  var stopSearchAnim = function(callback){
    setTimeout(function(){
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $('#nav-search-btn').on('click', function(){
    if (isSearchAnim) return;

    startSearchAnim();
    $searchWrap.addClass('on');
    stopSearchAnim(function(){
      $('.search-form-input').focus();
    });
  });

  $('.search-form-input').on('blur', function(){
    startSearchAnim();
    $searchWrap.removeClass('on');
    stopSearchAnim();
  });

  // Share
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      offset = $this.offset();

    if ($('#' + id).length){
      var box = $('#' + id);

      if (box.hasClass('on')){
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
          '<input class="article-share-input" value="' + url + '">',
          '<div class="article-share-links">',
            '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
            '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
            '<a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"></a>',
            '<a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"></a>',
          '</div>',
        '</div>'
      ].join('');

      var box = $(html);

      $('body').append(box);
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  $('#main-nav-toggle').on('click', function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });

  $('#wrap').on('click', function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  });

  // Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

// Create Zdog Illustration
// https://zzz.dog/api#illustration
var illo = new Zdog.Illustration({
  element: '.spin-logo',
  //dragRotate: true,
  rotate: {x: 0, y: 0, z: 0},
  zoom: 1,
  //resize: 'fullscreen',
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  },
});

// var illo2 = new Zdog.Illustration({
//   element: '.zdog-canvas2',
//   //dragRotate: true,
//   rotate: {x: 0.3, y: 0, z: 0},
//   zoom: 1,
//   //resize: 'fullscreen',
//   onResize: function(width, height) {
//     var minSize = Math.min(width, height);
//     this.zoom = minSize / 420;
//   },
// });

// Create a Font object
// You can use pretty much any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
  // src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
  src: '/font/rajdhani-v9-latin-500.ttf'
});

// Create a Text object
// Text objects behave like any other Zdog shape!
// https://github.com/jaames/zfont#zdogtext
var text = new Zdog.Text({
  addTo: illo,
  font: font,
  value: "LOGIN",
  fontSize: 40,
  textAlign: 'center',
  textBaseline: 'middle',
  color: '#fff',
  translate: {z: 30, y: -10},
  fill: true,
});

// z-shape
new Zdog.Shape({
  addTo: illo,
  path: [ // triangle
    { x:   30, y: -40, z: 0 },
    { x: 3, y:  0, z: 0},
    { x: -30, y:  0, z: 0 },
  ],
  // closed by default
  stroke: 1,
  color: 'tomato',
  fill: true
});

// // z-shape
new Zdog.Shape({
  addTo: illo,
  path: [ // triangle
    { x:   3, y: -10, z: 0 },
    { x: 35, y:  -10, z: 0 },
    { x: -35, y:  40, z: 0 },
  ],
  // closed by default
  stroke: 1,
  color: 'tomato',
  fill: true
});


// Creating a darker duplicate of the text and pushing it backwards can help make it look like the text has depth
// (This is entirely optional!)
// var shadow = text.copy({
//   addTo: illo,
//   translate: {z: -6},
//   color: '#aab',
// });

// Animation loop
function animate() {
  illo.updateRenderGraph();
  illo.rotate.y -= 0.02;
  // illo2.updateRenderGraph();
  // illo2.rotate.y += 0.02;
  
  requestAnimationFrame(animate);
}
animate();

})(jQuery);