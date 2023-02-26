
export const FetchData = async(url:string,method?:string,payload?:string,token?:string)=>{
    let data;
    // console.log(token)
    if(method && method !== 'GET'){
        const response = await fetch(url,{
            method:method,
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body:payload
        });
        if(response.status === 200){
            data = {
                status:200,
                response:await response.json(),
            }
        }
        else{
            data = {
                status:500,
                response:[],
            }
        }

    }
    else{
        const response = await fetch(url);
        if(response.status === 200){
            data = {
                status:200,
                response:await response.json(),
            }
        }
        else{
            data = {
                status:500,
                response:[],
            }
        }

    }

    return data;
} 