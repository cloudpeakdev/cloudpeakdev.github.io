////////////////////////////////////////////////
		///////// Menu/////////////////////////////
		////////////////////////////////////////////////
			$(function() {
				var $menu = $('nav#menu'),
					$html = $('html, body');

				$menu.mmenu({
					offCanvas: {
					   position  : "right"
					}
				});

				var $anchor = false;
				$menu.find( 'li > a' ).on(
					'click',
					function( e )
					{
						$anchor = $(this);
					}
				);

				var api = $menu.data( 'mmenu' );
				
				api.bind( 'closed',
					function()
					{
					$('#hamburger').toggleClass('open');
						if ( $anchor )
						{
							var href = $anchor.attr( 'href' );
							$anchor = false;

							//	if the clicked link is linked to an anchor, scroll the page to that anchor 
							if ( href.slice( 0, 1 ) == '#' )
							{
								$html.animate({
									scrollTop: $( href ).offset().top
								});	
							}
						}
					}
				);
				api.bind('closedPanel', function(){
					$('#hamburger').removeClass("open");
				});
				///////////////////////////////////////////
				//////////// Active hamburger/////////////////
				////////////////////////////////////////////
				$('#hamburger').click(function(){
					$(this).toggleClass('open');
				});	
				$("#page").on("tap",function(){
				  if(!$("#menu").hasClass("mm-opened") && $('#hamburger').hasClass("open")){
						$('#hamburger').toggleClass('open');
					}
				});
				$("#page").click(function(){
					if(!$("#menu").hasClass("mm-opened") && $('#hamburger').hasClass("open")){
						$('#hamburger').toggleClass('open');
					}					
				});
			});
			
			///////////////////////////////////////////////
			///////////////////Parallax///////////////////
			//////////////////////////////////////////////
			( function( $ ) {
				// Init Skrollr
				var s = skrollr.init({
					render: function(data) {
						//Debugging - Log the current scroll position.
						//console.log(data.curTop);
					}
				});
				if (s.isMobile()) {
					s.destroy();
				}
			} )( jQuery );
			
			///////////////////////////////////////////////////
			/////////////////////Form submission///////////////
			///////////////////////////////////////////////////
			$(".submit").click(function(e){
				e.preventDefault();
				if($("#section5 #spoof").val() == ""){
					var name = $("#section5 #name").val();
					var email = $("#section5 #mail").val();
					var message = $("#section5 #msg").val();
					if(email.trim() != ""){
						$("#section5 .loader").fadeIn();
						$.ajax({
							url:'https://formspree.io/cloudpeakdev@gmail.com',
							method:'POST',
							data:{
								name:name,
								_replyto:email,
								 email:email,
								comments:message,
								_subject:'Site Form Submission',
							},
							dataType:"json",
							success: function (data) {
								$("#section5 .loader").fadeOut();
								$("#section5 .thankyou").text("Thank you for your submission, I will be in touch!");
								$("#section5 form").animate({opacity: 0});
								$("#section5 .thankyou").animate({opacity: 1});
							},
							error: function (responseText, errorThrown) {	
								$("#section5 .loader").fadeOut();						
								$("#section5 .thankyou").text("There was an error, please check the fields and try again");
								$("#section5 .thankyou").animate({opacity: 1});
								console.log(textStatus.responseText);
							}  

						}); 
					}
					else{
						$("#section5 .thankyou").text("There was an error, please check the fields and try again");
						$("#section5 .thankyou").animate({opacity: 1});
					}
				}				
			});
			
			//////////////////////////////////////
			/////////ANALYTICS////////////////////
			/////////////////////////////////////
			
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-90627267-1', 'auto');
		  ga('send', 'pageview');

