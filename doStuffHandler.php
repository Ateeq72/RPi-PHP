<?php
/**
 * Created by PhpStorm.
 * User: ateeq-ahmed
 * Date: 10/8/16
 * Time: 11:28 AM
 */
require_once 'doStuff.php';
if(isset($_POST['action']))
{
    $doActions = new doStuff($_POST['action']);
}