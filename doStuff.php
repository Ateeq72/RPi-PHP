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

     public $upUsed ;
     public $downUsed ;
     public $leftUsed ;
     public $rightUsed ;


     public function __construct($action)
     {

         if (isset($action)) {
             switch ($action) {
                 case "" :
                     self::start();
                     break;
                 case 'start' :
                     self::start();
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

     public function start()
     {
         shell_exec('/usr/local/bin/gpio mode 16 out');
         shell_exec('/usr/local/bin/gpio mode 18 out');
         shell_exec('/usr/local/bin/gpio mode 22 out');
         shell_exec('/usr/local/bin/gpio mode 24 out');

         shell_exec('/usr/local/bin/gpio write 16 0');
         shell_exec('/usr/local/bin/gpio write 18 0');
         shell_exec('/usr/local/bin/gpio write 22 0');
         shell_exec('/usr/local/bin/gpio write 24 0');
         $this->upUsed = 0;
         $this->downUsed = 0;
         $this->leftUsed = 0;
         $this->rightUsed = 0;
     }

     public function end()
     {
         shell_exec('/usr/local/bin/gpio write 16 0');
         shell_exec('/usr/local/bin/gpio write 18 0');
         shell_exec('/usr/local/bin/gpio write 22 0');
         shell_exec('/usr/local/bin/gpio write 24 0');
         $this->upUsed = 0;
         $this->downUsed = 0;
         $this->leftUsed = 0;
         $this->rightUsed = 0;
     }

     public function up()
     {
         if ($this->upUsed == 0) {
             shell_exec('/usr/local/bin/gpio write 16 1');
             shell_exec('/usr/local/bin/gpio write 18 0');
             $this->upUsed = 1;
             $this->downUsed = 0;
         }
     }

     public function down()
     {
         if ($this->downUsed == 0) {
             shell_exec('/usr/local/bin/gpio write 16 0');
             shell_exec('/usr/local/bin/gpio write 18 1');
             $this->downUsed = 1;
             $this->upUsed = 0;
         }
     }

     public function left()
     {
         if ($this->leftUsed == 0) {
             shell_exec('/usr/local/bin/gpio write 22 1');
             shell_exec('/usr/local/bin/gpio write 24 0');
             $this->leftUsed = 1;
             $this->rightUsed = 0;
         }
     }

     public function right()
     {
         if ($this->rightUsed == 0) {
             shell_exec('/usr/local/bin/gpio write 22 0');
             shell_exec('/usr/local/bin/gpio write 24 1');
             $this->rightUsed = 1;
             $this->leftUsed = 0;
         }
     }
 }
