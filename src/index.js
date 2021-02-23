import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe} from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

/*buscarHeroe( heroeId1, ( err, heroe1 ) => {

    if ( err ) { return console.log( err ); }
    
    buscarHeroe( heroeId2, ( err, heroe2 ) => {
        
        if ( err ) { return console.log( err ); }

        console.log(`enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);

    })
});*/

/*buscarHeroe( heroeId1 ).then( heroe1 => {

    //console.log(`enviando a ${ heroe.nombre } a la mision`);
    buscarHeroe( heroeId2 ).then( heroe2 => {
        console.log(`Enviado a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);
    });
});*/

//Promesas en paralelo

Promise.all( buscarHeroe(heroeId1), buscarHeroe(heroeId2) )
    .then( ([ heroe1, heroe2 ]) => {

    console.log(`Enviado a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);
});

console.log(`Fin del programa`);
