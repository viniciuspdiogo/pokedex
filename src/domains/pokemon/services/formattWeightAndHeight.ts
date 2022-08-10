export function formattWeightAndHeight(weight: number | undefined){
    if(weight){
        let result = weight / 10;
        if(result < 10){
            return result.toFixed(2);
        }
        return result;
    }
    return false;
}