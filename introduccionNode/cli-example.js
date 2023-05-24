console.log( process.argv );

const params = process.argv;
const [ , , action, type, packages ] = params;

const printType = ( type ) => {
  if( type === '--dev' || '-D' ) return 'desarrollo';
}
const installPakages = ( packages, type ) => {
  console.log( `Instalando ${packages} de tipo ${ printType( type ) }` );
}
const removePakages = () => {
  console.log( `Removiendo ${packages} de tipo ${ printType( type ) }` );
}

if( action === 'install' ) installPakages( packages, type );
if( action === 'remove' ) removePakages( packages, type );