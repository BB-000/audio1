 // 2. This code loads the IFrame Player API code asynchronously.

      // var tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('player', {
      //     videoId: 'M7lc1UVf-VE',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange
      //     }
      //   });
      // }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }














$(function() {

    // $("li.openMore").click(function() {
    //     $(this).parent().find('.show-more').fadeToggle();
    //     $(this).parent().find('.show-arrow').toggleClass('rotate');
    // });

    //DEBUG
    $('.img-block').click(function() { console.log("vid-press") });
    $('.img-block img').click(function() { console.log("img-press") });
    //DEBUG

    $('.img-block').click(function() {
        var embedd = $(this).children().attr('vid');
        console.log(embedd);


        $(this).append('<iframe class="yTube" frameborder="0" allowfullscreen="1" title="YouTube video player" src="http://www.youtube.com/embed/' + embedd + '?autoplay=1?enablejsapi=1"></iframe>');
        

        console.log($(this).find('.yTube'));

        // $(this).find('.yTube').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

        // [0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

});



// Filtering - Sort code
var filters = [];

$(function() {

    var $container = $('.grid'),
        $buttton = $('.filter-button-group button');


    $container.isotope({
        filter: '*',
        itemSelector: '.element-item',
        layoutMode: 'masonry'

    });


    $('.filter-button-group').on('click', 'button', function() {

        $(this).toggleClass('activated');

        var filterValue = $(this).attr('data-filter');
        if ($(this).hasClass('activated')) {
            filters.push(filterValue);
            console.log(filterValue);
            console.log(filters);
        } else {
            var removeItem = filterValue;
            filters = jQuery.grep(filters, function(value) {
                return value != removeItem;
            });
            console.log(filters);
        }


        filtersJ = filters.join();
        $container.isotope({
            filter: filtersJ
        });

    });

});


$(window).load(function() {

        var $container = $('.grid'),
        $buttton = $('.filter-button-group button');

      $container.isotope({
          filter: '*',
          itemSelector: '.element-item',
          layoutMode: 'masonry'

      });
});



// var repllace = function replaceThumbforYoutubeVideo(element, videoid, width, height, autosize) {
//     if (autosize == "true") {
//         width = jQuery(element).width();
//         height = jQuery(element).height();
//     }
//     jQuery(element).replaceWith("<li class='wrapper-25 sqr img-block' style='width:" + width + "px;height:" + height + "px;'><iframe width='" + width + "' height='" + height + "' src='http://www.youtube.com/embed/" + videoid + "?autoplay=1' allowfullscreen></iframe></li>");
// }
