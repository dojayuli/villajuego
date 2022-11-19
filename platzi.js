
var vp = document.getElementById("villaplatzi");
var papel  = vp.getContext("2d");
document.addEventListener("keydown" , moverPollo);
var movimiento = 40;
var x = 420;
var y = 420;

var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidadVacas = aleatorio(0, 16);
var cantidadCerdos = aleatorio(0, 16);
var cantidadPollo = aleatorio(0, 16);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos)


function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;    
    vaca.x = [];
    vaca.y = [];
    for(var n=0; n < cantidadVacas; n++){
      vaca.x[n] = aleatorio(0,7) * 60;
      vaca.y[n] = aleatorio(0,7) * 60;
    }
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;    
    cerdo.x = [];
    cerdo.y = [];
    for(var l=0; l < cantidadCerdos; l++){
      cerdo.x[l] = aleatorio(0,7) * 60;
      cerdo.y[l] = aleatorio(0,7) * 60;
    }
    dibujar();
}

function cargarPollos(){
    pollo.cargaOK = true;    
    dibujar();
    }  

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    { 
        for( v=0; v < cantidadVacas; v++)
        {
        papel.drawImage(vaca.imagen, vaca.x[v],vaca.y[v]);
        }  
    }
    if(cerdo.cargaOk)
    {        
        for( v=0; v < cantidadCerdos; v++)
        {
        papel.drawImage(cerdo.imagen, cerdo.x[v], cerdo.y[v]);
        }          
    }
    if(pollo.cargaOK){
        papel.drawImage(pollo.imagen, x, y);
    }
}
function moverPollo(evento){
    switch (evento.keyCode){
      case teclas.UP:
          y = y - movimiento;
          if(y < -40){
            y = 500;
          }
          dibujar();
          break;
      case teclas.DOWN:
          y = y + movimiento
          if(y > 500){
             y = 0;
          }
          dibujar();
          break;
      case teclas.LEFT:
          x = x - movimiento;
          if(x < -40){
             x = 500;
          }
          dibujar();
          break;
      case teclas.RIGHT:
          x = x + movimiento;
          if(x > 500){
             x = 0;
          }
          dibujar();
          break;
        //default:
    }
  }

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor (Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
