export {geolocalizacion}

function geolocalizacion(geo){
    let $geo=document.getElementById(geo)
    const opc={
        enableHighAccuracy:true,
        timeout:5000,
        maximunAge:0
    }
    // console.log(navigator.geolocation)
    if(navigator.geolocation){
        $geo.innerHTML="<p>su navegador si acepta geolocalización</p>";
        navigator.geolocation.getCurrentPosition(exito,error,opc)
    }else{
        $geo.innerHTML="<p>su navegador No acepta geolocalización</p>";
    }
    
    function exito(position){
        $geo.innerHTML=`
        <p>Latitud:${position.coords.latitude}</p><br>
        <p>Longitud:${position.coords.longitude}</p><br>
        <p>Precisión:${position.coords.accuracy} metros</p>
        <br>
        <a target="_blank" href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},18z">ver mapa</a>
        `
    }
    
    function error(){
        $geo.innerHTML=`
        <mark>No se puede encontrar su ubicación</mark>
        `;
    }

    navigator.geolocation.getCurrentPosition(exito,error)
}