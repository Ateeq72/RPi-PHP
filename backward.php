<?php
	system("gpio mode 1 out");
	system("gpio write 1 1");
	usleep(500000);
	system("gpio write 1 0");
?>
