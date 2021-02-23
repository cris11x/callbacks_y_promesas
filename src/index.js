import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe} from './js/promesas';
import './styles.css';

const heroeId1 = 'capi2';
const heroeId2 = 'spider';

/*buscarHeroe( heroeId1, ( err, heroe1 ) => {

    if ( err ) { return console.log( err ); }
    
    buscarHeroe( heroeId2, ( err, heroe2 ) => {
        
        if ( err ) { return console.log( err ); }

        console.log(`enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);

    })
});*/

buscarHeroe( heroeId1 ).then( heroe => {
    console.log(`enviando a ${ heroe.nombre } a la mision`);
});

console.log(`Fin del programa`);
