let inscripcionCard = $("#enviar").click(function(e){
    e.preventDefault();
 
    let emailComprador = String(correoComp.value);
    let nombreComprador = String(nombreComp.value);
    let telefonoComprador = String(telNumber.value);

    $("#exitoInscr").slideDown();

    $("#exitoInscr").append(
        `<h2>Bienvenido ${nombreComprador}</h2>
        <p>Ahora eres parte de la experiencia Home Cinema.</p>
        <p>Presentando tu identificación en boleterías o ingresándola en nuestra web podrás acceder increíbles
        promociones.</p>`
    )
});
