let mapBox = "pk.eyJ1IjoieWFpcm1hcmluIiwiYSI6ImNrcWd6dng1MTAxZjczMW82NWZnMXU4cHcifQ.f3P_TnpOup9u-1u2Ime2Og";

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

    const lngSalon = -98.9359243;
    const latSalon = 19.3155926;

    const lngMisa = -98.9500389;
    const latMisa = 19.3303966;


    mapboxgl.accessToken = mapBox;

    const mapMisa = new mapboxgl.Map({
      container: 'mapaSalon', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lngMisa, latMisa], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    const mapSalon = new mapboxgl.Map({
      container: 'mapaMisa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lngSalon, latSalon], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    const markerSalon = new mapboxgl.Marker()
      .setLngLat([lngSalon, latSalon])
      .addTo(mapSalon);

    const markerMisa = new mapboxgl.Marker()
      .setLngLat([lngMisa, latMisa])
      .addTo(mapMisa);

  } catch (error) {
    console.error(error);
  }
}



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
initMap();
countdown();


