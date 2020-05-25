<?php
    include_once(__DIR__ . '/empleado.php');
    include_once(__DIR__ . '/fabrica.php');
    $legajo = $_GET["legajo"];
    $fabrica = new Fabrica("Coherence");
    $fabrica->TraerDeArchivo("empleados.txt");
    $empleados = $fabrica->GetEmpleados();
    foreach ($empleados as $emp) 
    {
        if($emp->GetLegajo() == $legajo)
        {
            if($fabrica->EliminarEmpleado($emp) != false)
            {
                $fabrica->GuardarEnArchivo("empleados.txt");
                echo "Se elimino correctamente al empleado";
                header("refresh:3;url=./mostrar.php");
            }
            else
            {
                echo "No se pudo eliminar el empleado.";
                header("refresh:3;url=./mostrar.php");
            }  
        }
    }
?>