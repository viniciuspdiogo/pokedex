export function formattId(pokemon: number | undefined){
    let pad = "00000";
    let str = "";
   
    if(pokemon){
        str = pokemon.toString();
        return pad.substring(0, pad.length - str.length) + str;
    }else {
        return pokemon
    }
    
}