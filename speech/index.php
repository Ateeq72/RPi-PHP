<!DOCTYPE html>
<html>
<head>
<title>Ateeq Test</title>
	<link rel="stylesheet" href="static/ateeqsHA.min.css" />
	<link rel="stylesheet" href="static/jquery.mobile.icons.min.css" />

	<link rel="stylesheet" href="static/jquery.mobile.structure-1.4.5.min.css" />
	<script src="static/jquery-1.11.1.min.js"></script>

	<script src="static/jquery.mobile-1.4.5.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		$("#flip-2").change(function () {$.post('/index.php',{key_pressed:"power2_"+$(this).val()})});
		$("#bt1").click(function () {$.post('/index.php',{btn_prd: $(this).val()})});
	});
	function test() {
			alert("Atleast this works!!");
	 }
	</script>
	</head>
	<body>
	<div data-role="page" data-theme="a">
This is From HTML Tag!
	<input type="button" value="test" onclick="test()"/>
	<select name="flip-2" id="flip-2" data-role="flipswitch">
			<option value="off">Off</option>
			<option value="on">On</option>
	</select>
	<input type="button" id="bt1" value="b1"/>
</form>
<?php
if(isset($_POST['key_pressed']) == "power2_on")
{	
	echo "<p>You pressed the on button!!</p>";
}
elseif(isset($_POST['key_pressed']) == "power2_off")
{
	 echo "You pressed off button!!";
}
elseif(isset($_POST['btn_prd']) == "b1")
{
	echo "You pressed the other button up there!!";
}
echo "</div></body>"
 ?>
</html>

