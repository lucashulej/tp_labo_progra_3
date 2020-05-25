function AdministrarValidaciones() 
{
    var flag = true;
    var DNI = (<HTMLInputElement> document.getElementById("dni")).value;
    var Apellido = (<HTMLInputElement> document.getElementById("apellido")).value;
    var Nombre = (<HTMLInputElement> document.getElementById("nombre")).value;
    var Legajo = (<HTMLInputElement> document.getElementById("legajo")).value;
    var Sueldo = (<HTMLInputElement> document.getElementById("sueldo")).value;
    var Sexo = (<HTMLInputElement> document.getElementById("cboSexo")).value;
    var Foto = (<HTMLInputElement> document.getElementById("archivo")).value;
    
    if(ValidarCamposVacios(DNI))
    {
        if(ValidarRangoNumerico((Number(DNI)), 1000000, 55000000) == false)
        {
            AdministrarSpanError("spnDNI", true);
            flag = false;
        }
    }

    if(ValidarCamposVacios(Apellido) == false)
    {
        AdministrarSpanError("spnApellido", true);
        flag = false;
    }

    if(ValidarCamposVacios(Nombre) == false)
    {
        AdministrarSpanError("spnNombre", true);
        flag = false;
    }

    if(ValidarCamposVacios(Legajo))
    {
        if(ValidarRangoNumerico((Number(Legajo)), 100, 550) == false)
        {
            AdministrarSpanError("spnLegajo", true);
            flag = false;
        }
    }
    
    if(ValidarCamposVacios(Sueldo))
    {
        if(ValidarRangoNumerico((Number(Sueldo)), 8000, ObtenerSueldoMaximo(ObtenerTurnoSeleccionado())) == false)
        {
            AdministrarSpanError("spnSueldo", true);
            flag = false;
        }
    }
    
    if(ValidarCombo(Sexo, "seleccione") != true)
    {
        AdministrarSpanError("spnSexo", true);
        flag = false;
    }

    if(ValidarCamposVacios(Foto) == false)
    {
        flag = false;
    }

    if(flag)
    {
        var btn = <HTMLInputElement> document.getElementById("guardar");
        btn.type = "submit";
        btn.click();
        console.log("Login Successful");
    }
}

function ValidarCamposVacios(texto:string): boolean
{
    var retorno = false;
    if(texto.length > 0)
    {
        if(texto != "")
        {
            retorno = true;
        }
    }
    return retorno;
}

function ValidarRangoNumerico(numero:number, minimo:number, maximo:number):boolean
{
    var retorno = false;
    if(numero >= minimo && numero <= maximo)
    {
        retorno = true;
    }
    return retorno;
}

function ValidarCombo(valor:string, valorFalse:string): boolean 
{
    let retorno : boolean = false;
    if(valor != valorFalse)
    {
        retorno = true;
    }
    return retorno;
}

function ObtenerTurnoSeleccionado():string 
{
    return traerChecks();
}

function ObtenerSueldoMaximo(turno:string): number 
{
    let retorno = 0;
    switch (turno) 
    {
        case "Maniana":
            retorno = 20000;
            break;
        case "Tarde":
            retorno = 18500;
            break;
        case "Noche":
            retorno = 25000;
            break;
        default:
            break;
    }
    return retorno;
}

function traerChecks() : string 
{
    let checks : HTMLCollectionOf<HTMLInputElement> =  <HTMLCollectionOf<HTMLInputElement>> document.getElementsByTagName("input");
    let seleccionados : string = "";

    for (let index = 0; index < checks.length; index++) 
    {
        let input = checks[index];
        if (input.type === "radio") 
        { 
            if (input.checked === true) 
            {
                seleccionados += input.value;
            }
        }
    }
    return seleccionados;
}

function AdministrarValidacionesLogin()
{
    if(ValidarCamposVacios((<HTMLInputElement> document.getElementById("dni")).value))
    {
        if(ValidarRangoNumerico((Number((<HTMLInputElement> document.getElementById("dni")).value)), 1000000, 55000000) == false)
        {
            AdministrarSpanError("spnDNI", true);
        }
    }

    if(ValidarCamposVacios((<HTMLInputElement> document.getElementById("apellido")).value) == false)
    {
        AdministrarSpanError("spnApellido", true);
    }

    if(VerificarValidacionesLogin() == false)
    {
        var form = <HTMLFormElement>document.getElementById("form");
        form.submit();
    }
}

function AdministrarSpanError(id : string, visible : boolean) : void
{
    var span = document.getElementById(id);
    if(visible)
    {
        span?.setAttribute("style", "display:block");
        span?.setAttribute("style", "color: red");
    }
    else
    {
        span?.setAttribute("style", "display:none");
    }
}

function VerificarValidacionesLogin() : boolean
{
    let retorno = false;
    let dni = document.getElementById("spnDNI")?.style.display;
    let apellido = document.getElementById("spnApellido")?.style.display;
    if(dni == "none" && apellido == "none")
    {
        retorno = true;
    }
    return retorno;
}

function AdministrarModificar(dni : number)
{
    var inputHidden = ((<HTMLInputElement> document.getElementById("inpHidden")));
    console.log(inputHidden.value);
    if(inputHidden != null)
    {
        inputHidden?.setAttribute("value", dni.toString());
        console.log(inputHidden.value);
        var form = <HTMLFormElement>document.getElementById("form");
        form.submit();
    }
}