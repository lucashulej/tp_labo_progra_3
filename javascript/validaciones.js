"use strict";
function AdministrarValidaciones() {
    var flag = true;
    var DNI = document.getElementById("dni").value;
    var Apellido = document.getElementById("apellido").value;
    var Nombre = document.getElementById("nombre").value;
    var Legajo = document.getElementById("legajo").value;
    var Sueldo = document.getElementById("sueldo").value;
    var Sexo = document.getElementById("cboSexo").value;
    var Foto = document.getElementById("archivo").value;
    if (ValidarCamposVacios(DNI)) {
        if (ValidarRangoNumerico((Number(DNI)), 1000000, 55000000) == false) {
            AdministrarSpanError("spnDNI", true);
            flag = false;
        }
    }
    if (ValidarCamposVacios(Apellido) == false) {
        AdministrarSpanError("spnApellido", true);
        flag = false;
    }
    if (ValidarCamposVacios(Nombre) == false) {
        AdministrarSpanError("spnNombre", true);
        flag = false;
    }
    if (ValidarCamposVacios(Legajo)) {
        if (ValidarRangoNumerico((Number(Legajo)), 100, 550) == false) {
            AdministrarSpanError("spnLegajo", true);
            flag = false;
        }
    }
    if (ValidarCamposVacios(Sueldo)) {
        if (ValidarRangoNumerico((Number(Sueldo)), 8000, ObtenerSueldoMaximo(ObtenerTurnoSeleccionado())) == false) {
            AdministrarSpanError("spnSueldo", true);
            flag = false;
        }
    }
    if (ValidarCombo(Sexo, "seleccione") != true) {
        AdministrarSpanError("spnSexo", true);
        flag = false;
    }
    if (ValidarCamposVacios(Foto) == false) {
        flag = false;
    }
    if (flag) {
        var btn = document.getElementById("guardar");
        btn.type = "submit";
        btn.click();
        console.log("Login Successful");
    }
}
function ValidarCamposVacios(texto) {
    var retorno = false;
    if (texto.length > 0) {
        if (texto != "") {
            retorno = true;
        }
    }
    return retorno;
}
function ValidarRangoNumerico(numero, minimo, maximo) {
    var retorno = false;
    if (numero >= minimo && numero <= maximo) {
        retorno = true;
    }
    return retorno;
}
function ValidarCombo(valor, valorFalse) {
    var retorno = false;
    if (valor != valorFalse) {
        retorno = true;
    }
    return retorno;
}
function ObtenerTurnoSeleccionado() {
    return traerChecks();
}
function ObtenerSueldoMaximo(turno) {
    var retorno = 0;
    switch (turno) {
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
function traerChecks() {
    var checks = document.getElementsByTagName("input");
    var seleccionados = "";
    for (var index = 0; index < checks.length; index++) {
        var input = checks[index];
        if (input.type === "radio") {
            if (input.checked === true) {
                seleccionados += input.value;
            }
        }
    }
    return seleccionados;
}
function AdministrarValidacionesLogin() {
    if (ValidarCamposVacios(document.getElementById("dni").value)) {
        if (ValidarRangoNumerico((Number(document.getElementById("dni").value)), 1000000, 55000000) == false) {
            AdministrarSpanError("spnDNI", true);
        }
    }
    if (ValidarCamposVacios(document.getElementById("apellido").value) == false) {
        AdministrarSpanError("spnApellido", true);
    }
    if (VerificarValidacionesLogin() == false) {
        var form = document.getElementById("form");
        form.submit();
    }
}
function AdministrarSpanError(id, visible) {
    var span = document.getElementById(id);
    if (visible) {
        span === null || span === void 0 ? void 0 : span.setAttribute("style", "display:block");
        span === null || span === void 0 ? void 0 : span.setAttribute("style", "color: red");
    }
    else {
        span === null || span === void 0 ? void 0 : span.setAttribute("style", "display:none");
    }
}
function VerificarValidacionesLogin() {
    var _a, _b;
    var retorno = false;
    var dni = (_a = document.getElementById("spnDNI")) === null || _a === void 0 ? void 0 : _a.style.display;
    var apellido = (_b = document.getElementById("spnApellido")) === null || _b === void 0 ? void 0 : _b.style.display;
    if (dni == "none" && apellido == "none") {
        retorno = true;
    }
    return retorno;
}
function AdministrarModificar(dni) {
    var inputHidden = document.getElementById("inpHidden");
    console.log(inputHidden.value);
    if (inputHidden != null) {
        inputHidden === null || inputHidden === void 0 ? void 0 : inputHidden.setAttribute("value", dni.toString());
        console.log(inputHidden.value);
        var form = document.getElementById("form");
        form.submit();
    }
}
//# sourceMappingURL=validaciones.js.map