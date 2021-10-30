<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    Let try out some PHP
  </div>

  <!-- <form action="flag.php" method="get">
    <label for="user">Name</label>
    <input type="text" name="user" id="user">
    <br/>
    <label for="pw">Password</label>
    <input type="password" name="pw" id="pw">
    <br/>
    <input type="submit">
  </form> -->

  <form action="site.php" method="get">
    <label for="num1">First number</label>
    <input type="number" name="num1" id="num1">
    <br/>
    <label for="num2">Second number</label>
    <input type="number" name="num2" id="num2">
    <br/>
    <input type="submit">
  </form>

  <?php
    $sum = (int) $_GET["num1"] + (int) $_GET["num2"];
    echo "Sum: $sum";
  ?>
</body>
</html>