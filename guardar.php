<?php
	include 'conexion.php';
	$nombre = strip_tags($_POST['nombre']);
	$apaterno = strip_tags($_POST['apaterno']);
	$amaterno = strip_tags($_POST['amaterno']);
	$ciudad = strip_tags($_POST['ciudad']);

	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $nombre)){
		if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $apaterno)){
	        	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $amaterno)){
                        	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $ciudad)){
                        		$insercion= "insert into usuario(nombre,apaterno,amaterno,ciudad) values('$nombre','$apaterno','$amaterno','$ciudad')";
        				$query = pg_query($con,$insercion);
        				if($query){
                				echo "Se guardo en la base de datos";
                				echo "Un gusto ".$nombre." ".$apaterno." ".$amaterno." de ".$ciudad;
        				} else {
                				echo "Hubo un error";
        				}

        				pg_close($con);
	
                		}
	                }
        	}

	}
	else {
		echo "Los datos no cumplen las condiciones";

	}	


?>

