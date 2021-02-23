const heroes = {
    capi: {
        nombre: 'capitan america',
        poder: 'aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de araña'
    }
}

export const buscarHeroe = ( id ) => {

     const heroe = heroes[id];

     return new Promise( ( resolve, reject ) => {

        if( heroe ) {
            resolve( heroe );
        } else {
            reject(`No existe un heroe con el id ${ id }`);
        }

     });
}