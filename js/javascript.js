
let users = [
    { name: "Brenda", personalInfo : { status: "activo", favoriteDrink: "Coffe", hobie: "voley"}},
    { name: "Renzo", personalInfo : { status: "activo", favoriteDrink: "Beer", hobie: "futbol"}},
    { name: "Paul", personalInfo : { status: "activo", favoriteDrink: "Ron", hobie: "music"}},
    { name: "Mathias", personalInfo : { status: "activo", favoriteDrink: "Te", hobie: "COD"}},
    { name: "Ignacio", personalInfo : { status: "activo", favoriteDrink: "Sopa", hobie: "Free"}},
    { name: "Renata", personalInfo : { status: "activo", favoriteDrink: "Coca-Cola", hobie: "Peluches"}},
    { name: "Grabriela", personalInfo : null },
    { name: "Ross", personalInfo : null},
    { name: "Pacita", personalInfo : { status: "activo", favoriteDrink: "Agua", hobie: "music"}},
    { name: "Paola", personalInfo : null},
    { name: "Carolina", personalInfo : { status: "activo", favoriteDrink: "Coffe", hobie: "voley"}},
    { name: "Melissa", personalInfo : null},
]

//GENERAR LISTA DE USUARIOS ACTIVOS
    //console.log(users)
    /*
    let activos = " "
    for ( const propiedades in users) {
        if ( users[propiedades].personalInfo != null ) {
            activos = users[propiedades].personalInfo
            console.log(activos)
        }
    }
    */

function getActiveUsers(users) {
    
    let activos = []

    for (let i = 0; i < users.length; i++) {
       // console.log(users[i].personalInfo != null)
        if ( users[i].personalInfo != null) {
            activos.push(users[i])
        }
    }
//    console.log(activos)
    return activos
}    
getActiveUsers(users)

// PAGINACION
// FUNCION QUE DEVUELVE LOS ELEMENTOD DE UN ARREGLO EN BLOQUES DE 2 
//USUARIOS Y LA PAGINA

function paginacion(users, pagina) {

// PARA ESTE ARREGLO Y EXTRAER SUS INDICES DE 2 EN 2 DEBEMOS APLICAR ESTOS INDICES 
// (PAGE * 2) - 1 Y (PAGE * 2) -2  

    return [users[ (pagina * 2 ) - 1] , users[(pagina * 2) - 2  ]]

}
//console.log(paginacion(users, 4))

function paginacion3(users, pagina) {
    
// PARA ESTE ARREGLO Y EXTRAER SUS INDICES DE 2 EN 2 DEBEMOS APLICAR ESTOS INDICES 
// (PAGE * 3) - 1 , (PAGE * 3) - 2 , (PAGE * 3) - 3  

    return [users[ (pagina * 3) - 1], users[ (pagina * 3) - 2], users[ (pagina * 3) -3 ]]
}

console.log(paginacion3(users,2))




/*




let users = [ 
    { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, 
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, 
    { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, 
    { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } } 
  ];

let siAplicacion = []

function countApplicationsByChannel(users) {
    
    for (let i = 0; i < users.length; i++) {
      //  console.log(users)
        if ( users[i].application !== null ) {
            siAplicacion.push(users[i])
            console.log(siAplicacion)
        
        }   
    }

    let contadorCanal = {}

    for (let i = 0; i < users.length; i++) {
        console.log(users[i].channel)
      //  contadorCanal[users[i].channel] = "Peru"
        if (contadorCanal[users[i].channel]) {
            contadorCanal[users[i].channel] += 1
        } else {
            contadorCanal[users[i].channel] = 1
        }
    }
    console.log(contadorCanal)


}
countApplicationsByChannel(users)

*/



