export const AsyncMock = (servicios)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(servicios)
        }, 2000)
    })
}