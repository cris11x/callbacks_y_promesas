import { call } from "file-loader";

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


export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback( null, heroe );
    } else {
        // un error
        callback(`No existe un heroe con el id ${ id }`);
    }
    //callback( heroe );
}