<?php
$name = $_POST['name'];
$subject = $_POST['subject'];
$level = $_POST['level'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$email_message = <<<EMAIL
姓名: $name
课程类型: $subject
当前水平: $level
邮箱: $email
电话: $phone
留言内容:
$message
EMAIL;

mail("info@tcecmusic.com", "新课程咨询 - $subject", $email_message);
header("location: ../../mail-success.html");
?>