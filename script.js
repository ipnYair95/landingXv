
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

// Initialize and add the map
function initMap() {
  try {
    // The location of Uluru
    const uluru = { lat: 19.2674854, lng: -98.8823232 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("mapaCanvas"), {
      zoom: 20,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  } catch (error) {

  }
}

function initRascados() {
  document.querySelector('.foto-fam').addEventListener('mousemove', (e) => {
    const body = document.querySelector('.foto-fam');
    const bubbles = document.createElement('span');

    //console.log(e.offsetX,e.offsetY);

    if (e.offsetX < 550 && e.offsetY < 450) {
      bubbles.style.left = e.offsetX + 'px';
      bubbles.style.top = e.offsetY + 'px';

      body.appendChild(bubbles);
    }

  });
}

/* function setup() {
  let mycanvas = createCanvas(350,350);
  mycanvas.parent('padre');

  //let mycanvas2 = createCanvas(350,350);
  //mycanvas2.parent('madre');
}

function draw() {

  strokeWeight(50);
  if( mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);
  }

} */

const padre = (sketch) => {


  sketch.setup = () => {
    let m = sketch.createCanvas(350, 350);
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
    let m = sketch.createCanvas(350, 350);
    m.parent('madre'); 
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



document.getElementById("fecha").innerHTML = ` ${fecha.dia + "/" + fecha.mes + "/" + fecha.anio + " a las " + fecha.hora} `;
initMap();
countdown();


