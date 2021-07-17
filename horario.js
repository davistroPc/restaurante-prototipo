let mostrarReloj=()=>{
    let reloj=document.getElementById('reloj')
    let fec_Datos=document.getElementById('fec_Datos')
    let fecha = new Date ();
    let hora=fecha.getHours()
    let minutos=fecha.getMinutes()
    let segundos=fecha.getSeconds()
    let mes=fecha.getMonth()
    let dia=fecha.getDay()
    let año=fecha.getFullYear()
    
    let meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','noviembre','diciembre']
    let dias = ['Domingo', 'lunes','martes','miercoles','Jueves','viernes','sabado']
    dia = dias[dia]

    // mes = meses[mes]
    if(hora<10){hora='0'+hora}
    if(minutos<10){minutos='0'+ minutos}
    if(segundos<10){segundos='0' + segundos}

    reloj.textContent=`${hora} : ${minutos} : ${segundos}`
    fec_Datos.textContent=`${dia}`

    if(hora>= 13 ){document.getElementById("Estado-Cerrado").innerHTML=" Cerrado"}

    else{
        if(dia==="lunes"){document.getElementById("Estado").innerHTML=" cerrado"} 
            else{ document.getElementById("Estado").innerHTML=" Abierto"}
}
}

setInterval(mostrarReloj,1000)


   
