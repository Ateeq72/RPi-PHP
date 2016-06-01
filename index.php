<?php
$allFolders = scandir('/home/ateeq/common/');
echo "<table align='center'>";
echo "<tr><td>Pages we Got:</td></tr>";
foreach ($allFolders as $allFolder)
{
    echo '<tr><td><a href=/'.$allFolder.'>'.$allFolder.'</a></td></tr>';
}
echo "</table>";
?>