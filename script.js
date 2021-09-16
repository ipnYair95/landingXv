

let fecha = {
    anio: 2021,
    mes: "Sep",
    dia: 16,
    hora: "22:30:00"
}

const countdown = () => {

    let dias = document.getElementById("dias");
    let horas = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");

    setInterval(() => {

        const { anio, mes, dia, hora } = fecha;

        const countDate = new Date(`${mes + " " + dia + "," + anio + " " + hora}`);
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSeconds = Math.floor((gap % minute) / second);

        dias.innerHTML = textDay;
        horas.innerHTML = textHour;
        minutos.innerHTML = textMinute;
        segundos.innerHTML = textSeconds;


    }, 1000);



};

document.getElementById("fecha").innerHTML = ` ${fecha.dia + "/" + fecha.mes + "/" + fecha.anio + " a las " + fecha.hora} `; 

countdown();


