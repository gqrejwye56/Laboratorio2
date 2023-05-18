//
// Por medio de esta función quiero saber el día de la semana actual
function obtenerDiaSemana(numeroDia) {
    var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  

    //hago uso de la condicional if-else teniendo en cuenta que la semana tiene 7 días
    if (numeroDia >= 0 && numeroDia < 7) {
      return diasSemana[numeroDia];
    } else {
      return 'Número de día inválido';
    }
  }
  
  // Esto me permitirá saber la fecha actual
  var fechaActual = new Date();
  
  // A su vez con este tendré el número de día de la fecha actual (0 - Domingo, 1 - Lunes, ..., 6 - Sábado)
  // y así sucesivamente
  var numeroDia = fechaActual.getDay();
  
  // Obtener el texto del día de la semana correspondiente
  var diaSemana = obtenerDiaSemana(numeroDia);
  
  console.log(diaSemana);
  
  
  
  
  