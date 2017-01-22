<?php
	system("gpio mode 1 out");
	system("gpio mode 2 out");
	system("gpio write 1 1");
	system("gpio write 2 1");
	usleep(500000);
	system("gpio write 1 0");
	system("gpio write 2 0");
?>
