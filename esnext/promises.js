function falarDepoisDe(segundos, frase){
   return new Promise( resolve => {
      setTimeout(() => {
         resolve(frase)
      }, segundos * 1000)
   })
}

falarDepoisDe(1, 'Biscoito').then(frase => console.log(frase))
falarDepoisDe(3, 'Cachorro').then(frase => frase.concat('?!?'))
                           .then(outraFrase => console.log(outraFrase))
                           .catch(e => console.log(e))