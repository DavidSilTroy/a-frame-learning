
var laberintoV = {
    alturaPared: 7,
    anchuraPared: 5,
    numPremios: 0,
    copias: 1,
    premiosInf: null,
    esfera: null,
    parete: null,
    paraPared: null,
    paraPremio: null
  }  

//mapa del Laberint0
var mapita=[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 4, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 4, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 4, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 4, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 4, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 4, 0, 0, 1, 4, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 4, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 4, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 4, 1, 0, 1, 4, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]


function crearElemto(iddestino, elementoto, positon,colour){
    var cajam= document.querySelector(iddestino)
    var cajamagna = document.createElement(elementoto)
    var posititi = document.querySelector(positon).getAttribute('position')//tomar posicion de a-torus
    cajamagna.setAttribute('dynamic-body','')
    cajamagna.setAttribute('position',posititi) //la posicion antes tomada
    cajamagna.setAttribute('color',colour)
    cajam.appendChild(cajamagna)
}

function crearPared(ubicacion){
    laberintoV.parete = document.createElement('a-box')
    laberintoV.paraPared.appendChild(laberintoV.parete) 
    laberintoV.parete.setAttribute('static-body','')
    laberintoV.parete.setAttribute('color','skyblue')
    laberintoV.parete.setAttribute('src','#pared2')
    laberintoV.parete.setAttribute('height',laberintoV.alturaPared)
    laberintoV.parete.setAttribute('width',laberintoV.anchuraPared)
    laberintoV.parete.setAttribute('depth',laberintoV.anchuraPared)
    laberintoV.parete.setAttribute('position',ubicacion)
    
}

function ubicarPersonaje(ubicacion){
    document.querySelector('#jugador').setAttribute('position', ubicacion)
}

function crearPremio(ubicacion){
    laberintoV.esfera = document.createElement('a-sphere')
    //esfera.setAttribute('dynamic-body','')
    laberintoV.esfera.setAttribute('class','premioxd')
    laberintoV.esfera.setAttribute('color','violet')
    laberintoV.esfera.setAttribute('position',ubicacion)
    laberintoV.paraPremio.appendChild(laberintoV.esfera) 
}
function doSound(id, sonido){
    let eso = document.querySelector(id)
            if(eso.getAttribute("sound")){
                eso.removeAttribute("sound")
                eso.setAttribute("sound",`autoplay: true; src: ${sonido}`)
            }else{
                eso.setAttribute("sound",`autoplay: true; src: ${sonido}`)
            }
}


function crearMapa(parec,premioc){
    laberintoV.paraPared = parec 
    laberintoV.paraPremio = premioc
    var ubicacionInicial
    for(var x=0;x<mapita.length;x++){
        for(var y=0;y<mapita[x].length;y++){
            let enx=(x - mapita.length/2)*laberintoV.anchuraPared
            let eny=(y - mapita[x].length/2)*laberintoV.anchuraPared
            if(mapita[x][y]==0){
                continue}
            else if(mapita[x][y]==1){
                ubicacionInicial= enx + ' 0 ' + eny                  
                crearPared(ubicacionInicial);}
            else if(mapita[x][y]==2){
                    //crearParedFragil(ubicacionInicial);
                }
            else if(mapita[x][y]==3){
                //crearParedTexto(ubicacionInicial,'');
                }
            else if(mapita[x][y]==4){
                ubicacionInicial= enx + ' 1.5 ' + eny 
                crearPremio(ubicacionInicial);}
            else if(mapita[x][y]==7){
                ubicacionInicial= enx + ' 1.7 ' + eny 
                ubicarPersonaje(ubicacionInicial);}
        }
    }
    laberintoV.premiosInf= Array.from(document.querySelectorAll('.premioxd'))
    laberintoV.numPremios= laberintoV.premiosInf.length

    //Recolectar esferas
    laberintoV.premiosInf.forEach(function(esfera){
        esfera.addEventListener('click',()=>{
            esfera.setAttribute('visible','false')
            doSound("#jugador","#blip2")
            laberintoV.numPremios= laberintoV.numPremios-1 
            //alert(numPremios)
            if(laberintoV.numPremios<1){
                document.querySelector('#mensaje').setAttribute('value','HAZ GANADO!! ERES GENIAL, RECUERDALO SIEMPRE')
            }
            else if(laberintoV.numPremios>1){
                document.querySelector('#mensaje').setAttribute('value','hay '+ laberintoV.numPremios + ' bolitas aun')
                
            }
            else {
                document.querySelector('#mensaje').setAttribute('value','hay '+ laberintoV.numPremios + ' bolita aun')
            }
            
        })

    })


}

        




        //Para el reconocimiento de voz en español
        //annyang.setLanguage('es-ES')


        /*

        //detecta el click en el elemento antes seleccionado y crea una caja 
var torox= document.querySelector('#torito') // 'a-torus' puede ser reemplazado por una id o una clase

torox.addEventListener('click',function(){
    for(var i=0;i<copias;i++){
        crearElemto('#cajamagica','a-torus','#torito','yellow');
        }
        document.querySelector('#mensaje').setAttribute('value','jajajaja esa cosa..')
        //torox.setAttribute('visible','false')
        //torox.removeAttribute('dynamic-body')
        })

alert("Probando ando xd")

var clox= document.querySelector('#esferatro') // 'a-torus' puede ser reemplazado por una id o una clase
clox.addEventListener('click',function(){
            for(var i=0;i<copias;i++){
                crearElemto('#cajamagica','a-sphere','#esferatro','blue');
            }
            document.querySelector('#mensaje').setAttribute('value','jajaja oye! cuidado la pierdes')
        })
        var box = document.querySelector('#cajita')
        box.addEventListener('click',function(){
            for(var i=0;i<copias;i++){
                crearElemto('#cajamagica','a-box','#cajita','green');
            }
            document.querySelector('#mensaje').setAttribute('value','esto puede ser de ayuda... ;)')
        })
        var ciox = document.querySelector('#cilindraco')
        ciox.addEventListener('click', function(){
            for(var i=0;i<copias;i++){
                crearElemto('#cajamagica','a-cylinder','#cilindraco','brown')
            }
            document.querySelector('#mensaje').setAttribute('value','problemas en el paraiso.. jaja')
            
        })
        var salx = document.querySelector('#boton')
        salx.addEventListener('click', function(){
            copias=copias+1
            if(copias <= 5){
                document.querySelector('#saludo').setAttribute('value','Aumentemos el numero de copias a ' + copias)
            }
            else{
                copias=1
                document.querySelector('#saludo').setAttribute('value','Regresando el numero de copias a ' + copias)
            }
        })



        */