<?php
$allFolders = scandir('/home/ateeq-ahmed/common/');
echo "<table align='center'>";
echo "<tr><td align='center' valign='middle'><strong>Pages we Got:</strong></td></tr>\n";
foreach ($allFolders as $allFolder)
{
    echo "<tr><td align='center' valign='middle'><a href=/".$allFolder.">".$allFolder."</a></td></tr>\n";
}
echo "</table>";
echo "<p align='center' valign='middle'><strong>PHPInfo For ya!</strong></p>";
echo phpinfo();
?>
