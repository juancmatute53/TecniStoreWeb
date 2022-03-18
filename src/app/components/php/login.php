<?php
 require 'conexion.php';

 $usuario = $_POST["txtusuario"];
 $clave = $_POST["txtclave"];

 $buscar = "SELECT * from usuario WHERE usuario = '".$usuario."' and clave = '".$clave."'";

 $query = mysqli_query($conectar, $buscar);
 $nr = mysqli_num_rows($query);

 if($nr == 1){
     echo "<script> alert('guardado_correctamente');
     location.href='../index';
     </script>   ";
     console.log("sd")
     //header("Location: pagina.html") echo "Bienvenido:" .$nombre;
 }else{
     echo "<script> alert('icorrecto_no_se_guardo');
     location.href='../index.html';
     </script>   ";
 }