<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$('#Forward').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","forward.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
				$('#Backward').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","backward.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
				$('#bleft').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","bleft.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
				$('#bright').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","bright.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
				$('#fleft').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","fleft.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
				$('#fright').click(function(){
					var a = new XMLHttpRequest();
					a.open("GET","fright.php");
					a.onreadystatechange=function(){
						if(a.readyState==4){
							if(a.status == 200){
							}
							else alert("HTTP ERROR")
						}
					}
					a.send();
				});
			});
		</script>
		<title>Pi Controller</title>
	</head>
	<body>
		<!-- <img src="http://192.168.1.212:8080/video" width='640' onload='setTimeout(function() {src = src.substring(0, (src.lastIndexOf("t=")+2))+(new Date()).getTime()}, 1000000)' onerror='setTimeout(function() {src = src.substring(0, (src.lastIndexOf("t=")+2))+(new Date()).getTime()}, 5000)' alt='' /> -->
		
		<img src="dpad.png" width="377" height="294" border="0" usemap="#map" />

		<map name="map">
		<!-- #$-:Image map file created by GIMP Image Map plug-in -->
		<!-- #$-:GIMP Image Map plug-in by Maurits Rijk -->
		<!-- #$-:Please do not edit lines starting with "#$" -->
		<!-- #$VERSION:2.3 -->
		<!-- #$AUTHOR:jalawler -->
		<area shape="rect" coords="0,0,131,147" href="Forward-Left" />
		<area shape="rect" coords="131,0,242,147" href="Forward" />
		<area shape="rect" coords="131,147,242,292" href="Backward" />
		<area shape="rect" coords="0,147,131,293" href="Back-Left" />
		<area shape="rect" coords="242,147,377,294" href="Back-Right" />
		<area shape="rect" coords="243,0,376,147" href="Forward-Right" />
		</map>
		
		<br><button type="button" id="fleft">Forward-Left</button><button type="button" id="Forward">Forward</button><button type="button" id="fright">Forward-Right</button><br>
		<button type="button" id="bleft">Back-Left</button><button type="button" id="Backward">Backward</button><button type="button" id="bright">Back-Right</button>
	</body>
</html>
