function funcionarOuNao(valor, chanceErro){
   return new Promise((resolve, reject)=>{
      try{
         if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
         }else{
            resolve(valor)
         }
      }catch(e){
         reject(e)
      }
   })
}

funcionarOuNao('Testando...', 0.1)
            .then(v => console.log(`Valor: ${v}`))
            .catch(e => console.log(`Error: ${e}`))