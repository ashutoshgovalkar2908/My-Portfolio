<?php

$fullname = filter_input(INPUT_POST,'fullname');
$email = filter_input(INPUT_POST,'email');
$message = filter_input(INPUT_POST,'message');

if(!empty($fullname)){
    if(!empty($email)){
        if(!empty($message)){
            $host = "localhost";
            $username = "root";
            $password = "";
            $dbname = "portfolio_form";

            // creat connection 
            $conn = new mysqli ($host , $username ,$password ,$dbname);

            if(mysqli_connect_error()){
                die('connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
            }else{
                $sql = "INSERT INTO user_info (fullname , email, message) values('$fullname','$email','$message')";
                if($conn->query($sql)){
                    echo "New Record is insert sucessfully";
                }else{
                    echo "Error:".$sql."<br>".$conn->error;
                }
                $conn->close();
            }
        }else{
            echo "message should not be empty";
            die();
        }
    }else{
        echo "email should not be empty";
        die();
    }
}else{
    echo "email should not be empty";
    die();
}
?>
