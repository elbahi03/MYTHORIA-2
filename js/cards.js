export async function getjson() {
    try{
        const response = await fetch('./data/carts.json')
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export const cardd = await getjson();