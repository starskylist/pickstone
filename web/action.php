<?php 
$link = mysql_connect('localhost', 'root', 'root');
if (!$link){
    echo"<script>alert('数据库连接失败！')</script>";
}else {
    if (isset($_POST['submit'])){
        $query = "select * from user where name = '$_POST['Username']' and pw = '$_POST['Password']'";
        $result = mysql_query($link, $query);
        if (mysql_num_rows($result) == 1){
            header("Location:homepage/web/homePage.html?name='$_POST['Username']'&password='$_POST['Password']');
        }else{
             echo"<script>alert('登陆失败！请重新登陆');window.history.back();</script>";
}
    }
}
?>