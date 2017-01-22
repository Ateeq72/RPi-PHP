<?php
	system("gpio mode 0 out");
	system("gpio mode 2 out");
	system("gpio write 0 1");
	system("gpio write 2 1");
	usleep(500000);
	system("gpio write 0 0");
	system("gpio write 2 0");
?>
