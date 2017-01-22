<?php

/**
 * Created by PhpStorm.
 * User: ateeq-ahmed
 * Date: 9/8/16
 * Time: 9:27 PM
 */

/**
 * Pins Used Up-Down 16 18
 * Pins Used left-Right 22 24
 */

 class doStuff
 {

   public function __construct($action)
     {

         if (isset($action)) {
             switch ($action) {
                 case "" :
                     self::defaultFunc();
                     break;
                 case 'start' :
                     self::defaultFunc();
                     break;
                 case 'end' :
                     self::end();
                     break;
                 case 'up' :
                     self::up();
                     break;
                 case 'down' :
                     self::down();
                     break;
                 case 'left' :
                     self::left();
                     break;
                 case 'right' :
                     self::right();
                     break;
                 default :
                     self::end();
                     break;
             }
         }
     }

     public function defaultFunc()
     {
         system('gpio mode 16 out');
         system('gpio mode 18 out');
         system('gpio mode 22 out');
         system('gpio mode 24 out');

         system('gpio pwm 38 100');
         system('gpio pwm 40 100');

         system('gpio write 16 0');
         system('gpio write 18 0');
         system('gpio write 22 0');
         system('gpio write 24 0');
     }

     public function end()
     {
         system('gpio write 16 0');
         system('gpio write 18 0');
         system('gpio write 22 0');
         system('gpio write 24 0');
     }

     public function up()
     {
         self::defaultFunc();

             system('gpio write 16 1');
             system('gpio write 18 0');

         exec ("gpio read 18", $status, $return );
         exec('espeak "Ran from e x e c"');
         system('espeak "Ran from system"');
         echo($status);
     }

     public function down()
     {
             system('gpio write 16 0');
             system('gpio write 18 1');
     }

     public function left()
     {
             system('gpio write 22 1');
             system('gpio write 24 0');
     }

     public function right()
     {
             system('gpio write 22 0');
             system('gpio write 24 1');
     }
 }
