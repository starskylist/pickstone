<?php 
$link = mysql_connect('localhost', 'root', 'root');
if (!$link){
    echo"<script>alert('���ݿ�����ʧ�ܣ�')</script>";
}else {
    if (isset($_POST['submit'])){
        $query = "select * from user where name = '$_POST['Username']' and pw = '$_POST['Password']'";
        $result = mysql_query($link, $query);
        if (mysql_num_rows($result) == 1){
            header("Location:homepage/web/homePage.html?name='$_POST['Username']'&password='$_POST['Password']');
        }else{
             echo"<script>alert('��½ʧ�ܣ������µ�½');window.history.back();</script>";
}
    }
}
?>