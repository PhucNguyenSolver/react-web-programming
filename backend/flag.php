<a href="./site.php">Return to login page</a>
<br>
<?php 
  $user = $_GET["user"];
  $pw = $_GET["pw"];
  $flag = "3wq2vmq2cntq";
  if ($user === $pw) {
      echo("Welcome $user, your flag is $flag");
  } else {
      echo("Incorrect name or password. Please try again.");
  }
?>
