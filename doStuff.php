<?php

/**
 * Created by PhpStorm.
 * User: ateeq-ahmed
 * Date: 9/8/16
 * Time: 9:27 PM
 */
echo phpinfo();

        if (isset($_POST["accel"])) {
            if($_POST["accel"] == "up" && !$upUsed)
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 16 1');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 18 0');
                $upUsed = true;
                $downUsed = false;
            }
            else if($_POST["accel"] == "down" && !$downUsed)
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 16 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 18 1');
                $downUsed = true;
                $upUsed = false;
            }
        }
        else if (isset($_POST['steer']) ) {
            if($_POST['steer'] == 'left' && !$leftUsed)
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 22 1');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 24 0');
                $leftUsed = true;
                $rightUsed = false;
            }
            else if($_POST['steer'] == 'right' && !$rightUsed)
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 22 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 24 1');
                $rightUsed = true;
                $leftUsed = false;
            }

        }
        else if (isset($_POST['start_end'])) {
            if($_POST['start_end'] == 'start' || $_POST['start_end']=="")
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio mode 16 out');
                $gpio_accel = shell_exec('/usr/local/bin/gpio mode 18 out');
                $gpio_accel = shell_exec('/usr/local/bin/gpio mode 22 out');
                $gpio_accel = shell_exec('/usr/local/bin/gpio mode 24 out');

                $gpio_accel = shell_exec('/usr/local/bin/gpio write 16 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 18 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 22 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 24 0');
                $upUsed = false;
                $downUsed = false;
                $leftUsed = false;
                $rightUsed = false;
            }
            else if($_POST['start_end'] == 'end' || $_POST['start_end']=="")
            {
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 16 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 18 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 22 0');
                $gpio_accel = shell_exec('/usr/local/bin/gpio write 24 0');
                $upUsed = false;
                $downUsed = false;
                $leftUsed = false;
                $rightUsed = false;
            }

        }
