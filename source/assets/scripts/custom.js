var preventOrphans = function(element) {
	//Would suggest this is used for title text mainly
	$(element).each(function(){
	    var string = $(this).html();
	    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
	    $(this).html(string);
	});
}


$(function() {

// $( ".openMore" ).click().next().toggle();

// $(document).on("click", ".openMore", function(event){
//     event.preventDefault();
//     var nexxt = $(this).next('.show-more');
//     nexxt.fadeToggle("slow");
//     console.log("ff");

    // var arow = $(this).next('.show-arrow');
    // arow.toggleClass('.rotate')

    // $('.show-arrow').toggleClass('.rotate');


$("li.openMore").click(function(){
    $(this).parent().find('.show-more').fadeToggle();
    $(this).parent().find('.show-arrow').toggleClass('rotate');
});

$('.vid_trigger').click( function(e){
e.preventDefault();
var URL = $(this).attr('href');
var htm = '<iframe width="200" height="200" src="http://www.youtube.com/embed/' + URL + '?rel=0" frameborder="0" allowfullscreen ></iframe>';

    $('#video_container').html(htm);

return false;
});



// $(".openMore").click(function(){
//     $(this).parent().next('.show-more').fadeToggle();
// });

// $('.openMore').click(function(){
// 		$('.open-more').find('.show-arrow').toggleClass('.rotate');
// } );
// 

  // $('.show-arrow').click(function() {
  //   	$( this ).toggleClass( "rotate" );
  //   })

}); 



// $('.show-arrow').click(function(){
//     $(this).rotate(90);
//     });
// });

// $('.openMore').on("click", function (event) {
//     $('.show-arrow').toggleClass('.rotate');
//     // $('.show-arrow').toggleClass('.rotate-reset');
// });



// });



// $('.grid').masonry({
//   // options...
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });


// // or with jQuery
// var $grid;

// function triggerMasonry() {
//   // don't proceed if $grid has not been selected
//   if ( !$grid ) {
//     return;
//   }
//   // init Masonry
//   $grid.masonry({
//     // options...
//       itemSelector: '.grid-item',
//   columnWidth: 200
//   });
// }
// // trigger masonry on document ready
// $(function(){
//   $grid = $('.grid');
//   triggerMasonry();
// });
// // trigger masonry when fonts have loaded
// Typekit.load({
//   active: triggerMasonry,
//   inactive: triggerMasonry
// });


// $('.show-arrow').click()

