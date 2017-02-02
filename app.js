console.log("done");
		$(document).ready(function () {
			var login = localStorage.getItem('login');
			var password = localStorage.getItem('password');

			if (login != null && password != null) {
				var checkLogin = false;

				$.post('https://checkinput.herokuapp.com/', 
				{
					login: login,
					password: password
				}, 
				function (data) {
					if (data == 'true') {
						checkLogin = true;
						if (checkLogin) {
							$('#wrapper').html(`
								<div class="RBsticky-element">
	 <div class="container-fluid"> 
<div class="header">
			<div class="row">
  			<div class="col-md-12 head">			
  	<div class="col-md-2"></div>	
  			<div class="col-md-2"><img id="logo" src="img/vk.png" width="45px">
  			</div> 		
  			  <div class="col-md-5">
  				<div class="glyphicon glyphicon-search"></div>
  				<input id="search" type="text" name="find"  placeholder="Search">
  				</div>
  				<div class="col-md-3" id="registration"><button class="btn btn-primary registrationButton logOut">Log out</button></div>
  				</div>
  		</div>
 		</div>
	</div>
	</div> 
<div class="container main">
	<div class="row">
		<div class="col-md-2 fake"></div>
		<div class="col-md-2 navigation">
			<table class="table">
			<tbody>
			<tr>
				<td class="glyphicon glyphicon-home" id="post"><a href=""> My Profile</a></td>
			</tr>
			<tr>
				<td class="glyphicon glyphicon-tasks" id="post"><a href=""> News</a> </td>
			</tr>

			<tr>
				<td class="glyphicon glyphicon-envelope" id="post"><a href=""> Messages</a> </td>
			</tr>
			<tr>
				<td class="glyphicon glyphicon-user" id="post"><a href=""> Friends</a></td>
			</tr>

			<tr>
				<td class="glyphicon glyphicon-briefcase" id="post"><a href=""> Communities</a></td>
			</tr>

			<tr>
				<td class="glyphicon glyphicon-camera" id="post"><a href=""> Photos</a></td>
			</tr>
			<tr>
				<td class="glyphicon glyphicon-music" id="post"><a href=""> Audios</a></td>
			</tr>

			<tr>
				<td class="glyphicon glyphicon-film" id="post"><a href=""> Videos</a></td>
			</tr>
			<tr>
				<td class="glyphicon glyphicon-tower" id="post"><a href=""> Games</a></td>
			</tr>
			</tbody>
			</table>
		</div>
		<div class="col-md-2 img">
				<img src="img/cursor.png">
				<button class="btn edit">Edit</button>
				<button class="btn glyphicon glyphicon-equalizer reyt"></button>
</div>
		<div class="col-md-3 mainContent">
			<div class="info">
			<span class="online">Online</span>
			<p id="name">Cursor Education</p>
			<p id="status">I'm ok!</p>
			<hr>
			<p>Personal information is not specified.</p>
</div>

	</div>
</div>
</div>
			`);
							$('.logOut').click(function () {
								localStorage.removeItem('login');
								localStorage.removeItem('password');
								window.location.reload();
								checkLogin = false;
							});
						}
					}
					else {
						localStorage.removeItem('login');
						localStorage.removeItem('password');
						window.location.reload();
						checkLogin = false;
					}
				});

				
			}
			else {
			$('#wrapper').html(`\<div class="RBsticky-element">
				 <div class="container-fluid"> 
				 <div class="header">
			  <div class="row">
  			<div class="col-md-12 head">
  			<div class="col-md-2"></div>
  			<div class="col-md-2"><img id="logo" src="img/vk.png" width="45px">
  			</div>
  			  <div class="col-md-5">
  				<div class="glyphicon glyphicon-search"></div>
  				<input id="search" type="text" name="find"  placeholder="Search">
  				</div>
  				<div class="col-md-3" id="registration"><button class="btn btn-primary registrationButton">sign up</button></div>
		   </div>
  		</div>
 		</div>
	</div>
	</div>
	<div class="container">
		<div class="row">
		<div class="col-md-1 fake"></div>
		<div class="col-md-1 loginDiv">		
			<form id="login">
				<div class="textEmail">Email
					<input class="login" id="form" type="text" name="email">
				</div>
				<div class="textPass">Password
					<input class="password" id="form" type="Password" name="pass" >
				</div>
			</form>
			<p id="alert"><p>
			<button class="btn btn-primary loginButton">Log In</button>
</div>
			<div class="col-md-7 content">
			<h3>VK for mobile devices</h3> 
			<p id="mainText" class="lead">
You no longer need a desktop or laptop to be connected via VK. Install our official mobile app and stay in touch with your friends anytime and anywhere.
			</p>
			<button class="btn btn-primary loginButton" id="smartphone">Install VK app to your device</button>
<div>
		<img id="image" src="img/elvis.png">
			<!-- <div class="row"> -->
			<div class="bottomText">
				<span id="Android"> <a href="#" id="link"> VK for Android </a>   
		</span>
				<span id="Android"><a href="#" id="link"> VK for iPhone</a>   
		</span>
				<span id="Android"><a href="#" id="link"> VK for WP</a>  
		</span>
		</div>
		</div>
    </div>	
		</div> 
	</div> 
	`);
			
	        $('.loginButton').click(function () {
					var login = $('.login').val();
					var password = $('.password').val();

					$.post('https://checkinput.herokuapp.com/', 
						{
							login: login,
							password: password
						}, 
						function (data) {
							if (data == 'true') {
								localStorage.setItem('login', login);
								localStorage.setItem('password', password);
								window.location.reload();
							}
							else {
								$('#alert').html('Login or password are wrong!'); 
							}
						});
				});
			}
		});

    $(document).ready(function() {
        var RBStickyNav = $('.RBsticky-element').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > RBStickyNav) {
                $('.RBsticky-element').addClass('RBSticky');
            } else {
                $('.RBsticky-element').removeClass('RBSticky');
            }
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });
 
	