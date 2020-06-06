var laberintoV = {
    alturaPared: 7,
    anchuraPared: 5,
    numPremios: 0,
    copias: 1,
    premiosInf: null,
    paraPared: null,
    paraPremio: null,
    para3d: null,
  }

var ironman ={
    src: "#ironman",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src:i #mus8c; on: click"
}
var bee ={
    src: "#bee",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus1c; on: click"
}
var cati ={
    src: "#cati",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src: #mus6c; on: click"
}
var EiffelTower ={
    src: "#EiffelTower",
    scale: "0.0001 0.0001 0.0001",
    rotation: "-90 0 0",
    sonido: "src: #mus6c; on: click"
}
var engine ={
    src: "#engine",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus2c; on: click"
}
var cat ={
    src: "#cat",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus6c; on: click"
}
var cow ={
    src: "#cow",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src: #mus3c; on: click"
}
var cityw ={
    src: "#cityw",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src: #mus4c; on: click"
}
var foot ={
    src: "#foot",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus5c; on: click"
}
var deer ={
    src: "#deer",
    scale: "0.001 0.001 0.001",
    rotation: "0 0 0",
    sonido: "src: #mus7c; on: click"
}
var castle ={
    src: "#castle",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus2c; on: click"
}
var bird ={
    src: "#bird",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus6c; on: click"
}
var horse ={
    src: "#horse",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src: #mus5c; on: click"
}
var jTemple ={
    src: "#jTemple",
    scale: "0.01 0.01 0.01",
    rotation: "0 0 0",
    sonido: "src: #mus3c; on: click"
}
var knight ={
    src: "#knight",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus7c; on: click"
}
var buildings ={
    src: "#buildings",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus1c; on: click"
}
var wolf ={
    src: "#wolf",
    scale: "0.001 0.001 0.001",
    rotation: "0 0 0",
    sonido: "src: #mus8c; on: click"
}
var tree ={
    src: "#tree",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus8c; on: click"
}
var trees ={
    src: "#trees",
    scale: "0.1 0.1 0.1",
    rotation: "0 0 0",
    sonido: "src: #mus8c; on: click"
}

var things = [ironman, bee, cati, EiffelTower,  
        cat, foot, deer,  bird, horse, wolf
        //engine,  buildings, castle, trees, cityw,jTemple, cow knight, , tree  
    ]

//mapa del Laberint 30x30 con cada 1 de 5m
var mapita=[
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 1],
    [1, 0, 0, 3, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 2, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 3, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 3, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 3, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 3, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]


function crearElemto(iddestino, elementoto, positon,colour){
    let cajam= document.querySelector(iddestino)
    let cajamagna = document.createElement(elementoto)
    let posititi = document.querySelector(positon).getAttribute('position')//tomar posicion de a-torus
    cajamagna.setAttribute('dynamic-body','')
    cajamagna.setAttribute('position',posititi) //la posicion antes tomada
    cajamagna.setAttribute('color',colour)
    cajam.appendChild(cajamagna)
}

function crearPared(ubicacion, real=1){
    let parete = document.createElement('a-box')
    laberintoV.paraPared.appendChild(parete) 
    parete.setAttribute('static-body','')
    parete.setAttribute('color','skyblue')
    parete.setAttribute('src','#pared2')
    parete.setAttribute('height',laberintoV.alturaPared)
    parete.setAttribute('width',laberintoV.anchuraPared)
    parete.setAttribute('depth',laberintoV.anchuraPared)
    parete.setAttribute('position',ubicacion)
    if(!real){parete.removeAttribute('static-body')
    }else{
    }
    
}

function crearObj3d(ubicacion, real=1){
    let objeto = document.createElement('a-gltf-model')
    let num = laberintoV.copias - 1
    if(num<1){num = 0} else{ num = Math.ceil(num)}
    laberintoV.para3d.appendChild(objeto) 
    objeto.setAttribute('dynamic-body','')
    objeto.setAttribute('position',ubicacion)
    objeto.setAttribute('src',things[num].src)
    objeto.setAttribute('scale',things[num].scale)
    objeto.setAttribute('rotation',things[num].rotation)
    objeto.setAttribute('sound',things[num].sonido)  //

    
}

function ubicarPersonaje(ubicacion){
    document.querySelector('#jugador').setAttribute('position', ubicacion)
}

function crearPremio(ubicacion){
    let esfera = document.createElement('a-sphere')
    //esfera.setAttribute('dynamic-body','')
    esfera.setAttribute('class','premioxd')
    esfera.setAttribute('color','violet')
    esfera.setAttribute('position',ubicacion)
    laberintoV.paraPremio.appendChild(esfera) 

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

function crearMapa(){
    laberintoV.paraPared = document.querySelector('#wall_entity')
    laberintoV.paraPremio = document.querySelector('#magicball_entity')
    laberintoV.para3d = document.querySelector("#objets_entity")

    for(var x=0;x<mapita.length;x++){
        for(var y=0;y<mapita[x].length;y++){
            let enx=(x - mapita.length/2)*laberintoV.anchuraPared
            let eny=(y - mapita[x].length/2)*laberintoV.anchuraPared
            if(mapita[x][y]==0){
                continue}
            else if(mapita[x][y]==1){        
                crearPared(`${enx} 0 ${eny}`);}
            else if(mapita[x][y]==2){
                    //pared falsa
                    crearPared(`${enx} 0 ${eny}`, 0 );
                }
            else if(mapita[x][y]==3){
                //crearParedTexto(ubicacionInicial,'');
                laberintoV.copias =Math.random()*(things.length)
                crearObj3d(`${enx} 50 ${eny}`, 1)

                }
            else if(mapita[x][y]==4){
                crearPremio(`${enx} 1.5 ${eny}`);}
            else if(mapita[x][y]==7){
                ubicarPersonaje(`${enx} 1.7 ${eny}`);}
        }
    }
    laberintoV.premiosInf= Array.from(document.querySelectorAll('.premioxd'))
    laberintoV.numPremios= laberintoV.premiosInf.length

    //Recolectar esferas
    laberintoV.premiosInf.forEach((esfera)=>{
        esfera.addEventListener('click',()=>{
            esfera.setAttribute('position','0 0 -5')
            esfera.setAttribute('visible','false')
            doSound("#jugador","#blip2")
            laberintoV.numPremios= laberintoV.numPremios-1 
            //alert(numPremios)
            if(laberintoV.numPremios<1){
                document.querySelector('#mensaje').setAttribute('value','HAZ GANADO!! ERES GENIAL, RECUERDALO SIEMPRE')
                doSound("#jugador","#mus2c")
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

        

