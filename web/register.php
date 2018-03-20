<?php 
$link = mysql_connect('localhost', 'root','root');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}else {
    if (isset($_POST['submit'])){
        if ($_POST['Password'] == $_POST['ConfirmPassword']){
    $query = "insert into user (name,pw) values('{$_POST['Password']}','{$_POST['ConfirmPassword']}')";
    $result=mysql_query($link, $query);
    header("Location:index.html");
        }else {
            echo "<script>alert('两次输入密码不一致！')</script>";
        }
    }
}
?>