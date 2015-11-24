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


    // var hite = $(this).parent().height();
    // $('.mode').css("height", hite+"px");
});

// $('.vid_trigger').click( function(e){
// e.preventDefault();
// // var URL = $(this).attr('href');

// var URL = $(this).closest('.comment').next().attr(href);

// var htm = '<iframe width="100%" style="height: 100em;" src="http://www.youtube.com/embed/' + URL + '?rel=0" frameborder="0" allowfullscreen ></iframe>';


// 	console.log( $(this).closest('.comment').next().attr(href); );
//     // $(this).parent().html(htm);
//     console.log(htm);

// return false;
// });


// $('.img-block').click( function(e){
// e.preventDefault();
// var URL = $(this).closest().next('.comment').attr(href);
// var htm = '<iframe width="100%" style="height: 100em;" src="http://www.youtube.com/embed/' + URL + '?rel=0" frameborder="0" allowfullscreen ></iframe>';

// 	console.log( $('this .vid-trigger'));

// 	// console.log( htm );
// 	// console.log($(this).parent());
//     console.log ( $(this).next('.vid_trigger').html() );

// return false;
// });




$('.img-block').click(function(){console.log("vid-press")});
$('.img-block img').click(function(){console.log("img-press")});



// $('.img-block').not('.openMore').click(function(){
$('.img-block').click(function(){

  // console.log($(this).children().attr('vid'));
  var embedd = $(this).children().attr('vid');
  console.log(embedd);
  
  // $('iframe[src*="http://www.youtube.com/embed/"]').each(function(i) {
   // this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});


  $(this).append('<iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="http://www.youtube.com/embed/'+embedd+'?autoplay=1?enablejsapi=1"></iframe>');
  

  // $('iframe[src*="http://www.youtube.com/embed/"]').each(function(i) {
  //   this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  //   console.log("hello");
  // });
 




});



// $('li.img-block').click(repllace($('li.img-block'), "aiLhr375fC8", 200,200, true));



// $(document).on('click','.img-block',function(e){
//     $(this img).hide();
//     $('#ytvideo').html('<iframe width="939" height="528" id="ytvideo" frameborder="0" allowfullscreen src="http://www.youtube.com/embed/'+$(this).attr("data-vidid")+'?autoplay=1"></iframe>').show();
// });



// $( window ).resize(function() {
// $('li.img-block').css
// });


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

var repllace = function replaceThumbforYoutubeVideo(element,videoid,width,height,autosize){
  if (autosize=="true"){
    width=jQuery(element).width();
    height=jQuery(element).height();
  }
  jQuery(element).replaceWith("<li class='wrapper-25 sqr img-block' style='width:"+width+"px;height:"+height+"px;'><iframe width='"+width+"' height='"+height+"' src='http://www.youtube.com/embed/"+videoid+"?autoplay=1' allowfullscreen></iframe></li>");
}













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


$( document ).ready( function() {


 var $container = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'

  });

 $('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  console.log($(this).attr('data-filter'));
  $container.isotope({ filter: filterValue });
});


});