window.onload = function(){ 
	var wrapSwiper = new Swiper('.swiper-container',{
		speed:250,
		mode : 'vertical', 
		resistance:'100%',
		// loop:true,
		mousewheelControl : true,
		grabCursor: true,
		pagination: '.pagination',
		paginationClickable: true,
		onFirstInit:function(){
			$('.slide1').addClass('ani-slide');
		},
		onSlideChangeEnd: function(swiper){
			$('.swiper-container .swiper-wrapper:first')
				.children('.swiper-slide')
				.eq(swiper.activeIndex)
				.append($('#d3-box'));
		}
	})
  
	wrapSwiper.wrapperTransitionEnd(function () {
		$('.ani-slide').removeClass('ani-slide')
		$('.ani-swiper-slide').eq(wrapSwiper.activeIndex).addClass('ani-slide')
	}, true);

	new Swiper('.index-swiper-container',{
		speed:400,
		paginationClickable: true,
		pagination: '.index-pagination',
	});

	var hmSwiper = new Swiper('.hm-swiper-container',{
		speed:400,
		paginationClickable: true,
		slidesPerView: 5
	});

	$('.hm-btn-left').on('click', function(e){
		e.preventDefault()
		hmSwiper.swipePrev()
	})
	$('.hm-btn-right').on('click', function(e){
		e.preventDefault()
		hmSwiper.swipeNext()
	})

	var $hmVideoMark = $('.hm-video-mark');
	var $hmVideo = $('.hm-video');
	var $hmVideoBtn = $('.hm-video-btn');

	$('.hm-swiper-container .swiper-slide').on('click', function(){
		var $this = $(this);
		var $pic = $('.hm-pic img');
		var $cn = $('.hm-info-box .cn');
		var $en = $('.hm-info-box .en');
		var $title = $('.hm-info-box .title');
		$cn.text($this.attr('data-cn'));
		$en.text($this.attr('data-en'));
		$title.text($this.attr('data-title'));
		$pic.attr('src', './img/' + $this.attr('data-pic'));
		$hmVideoBtn.attr('src', $this.attr('data-video'));
	})

	var $trendsIndexItem = $('.trends-box .index-box .index-item');
	var $trendsContItem = $('.trends-box .cont-box .cont-item');

	$trendsIndexItem.on('click', function(){
		var $this = $(this);
		$this.addClass('active').siblings().removeClass('active');
		$trendsContItem.eq($this.index()).show().siblings().hide();
	});

	$('.hm-video-close').on('click', function(){
		$hmVideoMark.hide();
		$hmVideo.hide();
		$hmVideo.find('video')[0].pause();
	});

	$hmVideoBtn.on('click', function(){
		$hmVideoMark.show();
		$hmVideo.show();
		$hmVideo.find('video').attr('src', $(this).attr('data-video'))[0].play();
	})

	var scene = document.getElementById('scene');
	new Parallax(scene);

	// 粒子
	var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
	var container;
	var camera, scene, renderer;
	var particles, particle, count = 0;
	var mouseX = 0, mouseY = -350;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	init();
	animate();
	function init() {
		container = document.createElement( 'div' );
		$('.swiper-container .swiper-slide:first')[0].appendChild( container );
		container.id = "d3-box";
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1000;
		scene = new THREE.Scene();
		particles = new Array();
		var PI2 = Math.PI * 2;
		var material = new THREE.ParticleCanvasMaterial( {
			color: '#062c60',
			program: function ( context ) {
			context.beginPath();
			context.arc( 0, 0, 1, 0, PI2, true );
				context.fill();
			}
		} );
		var i = 0;
		for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
			for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
				particle = particles[ i ++ ] = new THREE.Particle( material );
				particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
				particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
				scene.add( particle );
			}
		}
		renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight / 3 );
		container.appendChild( renderer.domElement );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight / 3 );
	}
	function onDocumentMouseMove( event ) {
		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}
	function onDocumentTouchStart( event ) {
		if ( event.touches.length === 1 ) {
			event.preventDefault();
			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}
	function onDocumentTouchMove( event ) {
		if ( event.touches.length === 1 ) {
			event.preventDefault();
			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;
		}
	}
	function animate() {
		requestAnimationFrame( animate );
		render();
	}
	function render() {
		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( - mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );
		var i = 0;
		for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
			for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
				particle = particles[ i++ ];
				particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
				particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
			}
		}
		renderer.render( scene, camera );
		count += 0.1;
	}
}