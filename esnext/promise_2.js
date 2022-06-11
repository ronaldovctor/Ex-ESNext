setTimeout(()=>{
   console.log('Executando...')
   setTimeout(()=> {
      console.log('Executado!')
   }, 2000)
}, 2000)

function esperarPor(tempo = 2000, texto = "Texto padrão."){
   return new Promise(function(resolve){
      setTimeout(function(){
         console.log('Executando Promise...')
         resolve(texto)
      }, tempo)
   })
}

//esperarPor(3000, "Final.").then(t => console.log(t))
esperarPor().then(t => console.log(t))