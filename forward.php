<?php
	system("gpio mode 0 out");
	system("gpio write 0 1");
	usleep(500000);
	system("gpio write 0 0");
?>
