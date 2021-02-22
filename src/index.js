import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';


buscarHeroe( heroeId, ( err, heroe ) => {

    if ( err ) {
        console.log( err );
    } else {
        console.info( heroe );
    }
});

console.log('fin del programa');