// Politica de Privacidad //
    var v = confirm("Spinning-Center te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web DIRECCIÓN-WEB. En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD). El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.");

// Reloj //

    // Función para obtener la fecha
    function gettheDate() {

        Todays = new Date();

        TheDate = "" + Todays.getDate() +" / "+  (Todays.getMonth()+ 1) + " / " + (Todays.getYear() + 1900) 

        document.clock.thedate.value = TheDate;

    }

    // Función para obtener la hora //
    function showtime () {

        var now = new Date();

        var hours = now.getHours();

        var minutes = now.getMinutes();

        var seconds = now.getSeconds()

        var timeValue = "" + ((hours >12) ? hours -12 :hours)

        timeValue += ((minutes < 10) ? ":0" : ":") + minutes

        timeValue += ((seconds < 10) ? ":0" : ":") + seconds

        timeValue += (hours >= 12) ? " P.M." : " A.M."

        document.clock.face.value = timeValue;

        timerID = setTimeout("showtime()",1000);

        timerRunning = true;

    }

    var timerID = null;

    var timerRunning = false;

    function stopclock (){

        if(timerRunning)

            clearTimeout(timerID);

        timerRunning = false;

    }

    // Función para que el reloj empieze a funcionar //
    function startclock () {

        stopclock();

        gettheDate()

        showtime();

    }
