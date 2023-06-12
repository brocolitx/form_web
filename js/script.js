function validar() {
    var ret_nombre = validar_nombre();
    var ret_edad = validar_edad();
    var ret_check = validar_check();
    var ret_email = validar_email();
    var ret_telefono = validar_telefono();
    var ret_prefijo = validar_prefijo();
    var ret_contraseña = validar_contraseña();
    var ret_direccion = validar_direccion(); 
    var ret_comuna = validar_comuna();
    var ret_url = validar_url();
    var ret_aficiones = validar_aficiones();
    return ret_nombre && ret_edad && ret_check && ret_email && ret_telefono && ret_prefijo && ret_contraseña && ret_direccion && ret_comuna && ret_url&& ret_aficiones;
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (arroba < 1) {
        div.innerText = "No se detecto ninguna @(arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_check() {
    var check = document.getElementById("acepto");
    var div = document.getElementById("err_acepto");
    if (!check.checked) {
        div.innerText = "Es necesario aceptar las condiciones.";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("err_nombre");
    if (nombre == "") {
        div.innerText = "El campo no puede estar vacio.";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 30) {
            div.innerText = "El nombre no puede tener más de 30 caracteres";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}

function validar_edad() {
    var str_edad = document.getElementById("edad").value;
    var div = document.getElementById("err_edad");
  
    if (str_edad.trim() === "") {
      div.innerText = "El campo no puede estar vacio.";
      div.className = "text-danger";
      return false;
    }
  
    if (isNaN(str_edad)) {
      div.innerText = "El número ingresado no es válido.";
      div.className = "text-danger";
      return false;
    } else {
      var edad = parseInt(str_edad);
      if (edad < 1 || edad > 115) {
        div.className = "text-danger";
        div.innerText = "La edad debe ser un número posible. ☻";
        return false;
      } else {
        div.innerText = "";
        return true;
      }
    }
  }
  

  function validar_telefono() {
    var str_telefono = document.getElementById("fono").value;
    var div = document.getElementById("err_telefono");
  
    if (str_telefono.trim() === "") {
      div.innerText = "El campo no puede estar vacío.";
      div.classList.add("text-danger");
      return false;
    }
  
    // Eliminar espacios en blanco
    var telefonoSinEspacios = str_telefono.replace(/\s/g, "");
  
    // Verificar que telefonoSinEspacios contenga solo números
    if (!/^\d+$/.test(telefonoSinEspacios)) {
      div.innerText = "El número ingresado no es válido.";
      div.classList.add("text-danger");
      return false;
    } else {
      var telefono = parseInt(telefonoSinEspacios);
      if (telefonoSinEspacios.length < 9 || telefonoSinEspacios.length > 11) {
        div.classList.add("text-danger");
        div.innerText = "El número telefónico no es válido.";
        return false;
      } else {
        div.innerText = "";
        return true;
      }
    }
  }
  
  
function validar_prefijo() {
    var prefijo = document.getElementById("prefijo").value;
    var div = document.getElementById("err_prefijo");
  
    if (prefijo.trim() === "") {
      div.innerText = "El campo no puede estar vacío.";
      div.className = "text-danger";
      return false;
    } else {
      if (prefijo.length > 3) {
        div.innerText = "El prefijo no puede tener más de 3 números.";
        div.className = "text-danger";
        return false;
      } else if (!/^\d+$/.test(prefijo)) {
        div.innerText = "El prefijo ingresado no es válido.";
        div.className = "text-danger";
        return false;
      } else {
        div.innerText = "";
        return true;
      }
    }
  }
  
  
  document.getElementById("prefijo").addEventListener("input", validar_telefono);
  document.getElementById("fono").addEventListener("input", validar_telefono);



  var inputPass = document.getElementById("pass");
  var btnVerContraseña = document.getElementById("btnVerContraseña");
  var verContraseña = false;


  //

  //

// Ver o Ocultar Contraseña

  //

  //


  function validar_contraseña() {
    var pass = document.getElementById("pass").value;
    var passConfirm = document.getElementById("passConfirm").value;
    var div = document.getElementById("err_pass");
  
    if (pass == "") {
      div.innerText = "El campo no puede estar vacío.";
      div.className = "text-danger";
      return false;
    } else if (pass.length < 3 || pass.length > 6) {
      div.innerText = "La contraseña debe tener entre 3 y 6 caracteres.";
      div.className = "text-danger";
      return false;
    } else if (!/\d/.test(pass) || !/[a-zA-Z]/.test(pass)) {
      div.innerText = "La contraseña debe contener al menos un dígito.";
      div.className = "text-danger";
      return false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
      div.innerText = "La contraseña debe contener al menos un carácter especial.";
      div.className = "text-danger";
      return false;
    } else if (pass !== passConfirm) {
      div.innerText = "Las contraseñas no coinciden.";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }
  
btnVerContraseña.addEventListener("click", function() {
    verContraseña = !verContraseña; // Cambiar el estado de ver Contraseña

    if (verContraseña) {
      inputPass.type = "text"; // Mostrar la contraseña
      btnVerContraseña.textContent = "Ocultar";
    } else {
      inputPass.type = "password"; // Ocultar la contraseña
      btnVerContraseña.textContent = "Ver";
    }
  });




  function validar_direccion() {
    var direccion = document.getElementById("direcc").value;
    var div = document.getElementById("err_direcc");

    if (direccion.trim() === "") {
      div.innerText = "El campo no puede estar vacío.";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }


  function validar_comuna() {
    var comuna = document.getElementById("ciudad").value;
    var div = document.getElementById("err_ciudad");
  
    if (comuna.trim() === "" || comuna === "Seleccione una comuna...") {
      div.innerText = "Por favor, seleccione una comuna.";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      return true;
    }
  }


  function validar_url() {
    var url = document.getElementById("basic-url").value;
    var div = document.getElementById("basic-addon4");

    if (url.trim() === "") {
      div.innerText = "El campo no puede estar vacío.";
      div.className = "text-danger";
      return false;
    } else {
      if (/\.(com|cl|net|org)$/.test(url)) {
        div.innerText = "Ingresa una web personal que nos ayude a identificarte.";
        div.className = "form-text";
        return true;
      } else {
        div.innerText = "La URL no es válida. Debe contener una de las siguientes extensiones: .com, .cl, .net, .org";
        div.className = "text-danger";
        return false;
      }
    }
  }


  function validar_aficiones() {
    var aficionesInput = document.getElementById("aficionesInput");
    var aficionesList = document.getElementById("aficionesList");
    var errAficiones = document.getElementById("err_aficiones");
  
    // Obtener las aficiones ingresadas por el usuario y eliminar espacios extra
    var aficiones = aficionesInput.value.trim().toLowerCase();

    if (aficiones === "") {
        errAficiones.innerText = "Debes ingresar al menos dos aficiones separadas por comas.";
        return false;
    }
  
    // Dividir las aficiones ingresadas por comas y eliminar espacios al inicio y al final de cada una
    var listaAficiones = aficiones.split(",").map(function(aficion) {
        return aficion.trim();
    });
  
    // Verificar que se hayan ingresado al menos dos aficiones
    if (listaAficiones.length < 2) {
        errAficiones.innerText = "Debes ingresar al menos dos aficiones separadas por comas.";
        return false;
    }
  
    // Limpiar la lista de aficiones previa
    aficionesList.innerHTML = "";
  
    // Agregar cada afición a la lista
    listaAficiones.forEach(function(aficion) {
        var li = document.createElement("li");
        li.textContent = aficion;
        aficionesList.appendChild(li);
    });
  
    errAficiones.innerText = "";
    return true;
  }