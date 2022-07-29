
let fecha = {
  anio: 2022,
  mes: "Aug",
  dia: 27,
  hora: "17:30:00"
}

const countdown = () => {

  let dias = document.getElementById("dias");
  let horas = document.getElementById("horas");
  let minutos = document.getElementById("minutos");
  let segundos = document.getElementById("segundos");

  setInterval(() => {

    const { anio, mes, dia, hora } = fecha;

    const countDate = new Date(`${mes + " " + dia + "," + anio + " " + hora}`);
    const currentString = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" });
    const now = new Date(currentString).getTime();
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


const padre = (sketch) => {


  sketch.setup = () => {
    let m = sketch.createCanvas(250, 300);
    m.parent('padre');
  };

  sketch.draw = () => {
    sketch.strokeWeight(50);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};

const madre = (sketch) => {


  sketch.setup = () => {
    let m = sketch.createCanvas(250, 300);
    m.parent('madre');
  };

  sketch.draw = () => {
    sketch.strokeWeight(50);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};

const padrinos = (sketch) => {


  sketch.setup = () => {
    let m = sketch.createCanvas(250, 300);
    m.parent('padrinos');
  };

  sketch.draw = () => {
    sketch.strokeWeight(50);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};


new p5(padre);
new p5(madre);
new p5(padrinos);



document.getElementById("fecha").innerHTML = ` ${fecha.dia + "/" + fecha.mes + "/" + fecha.anio}`;
countdown();


