export const AsyncMock = (mock)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(mock)
        }, 2000)
    })
}