let p = new Promise(function(cumpriPromessa){
   cumpriPromessa(3)
})

p.then(x => console.log(x))

function s(a) {
   return new Promise(resolve => {
      resolve(a)
   })
}

s(3).then(x => console.log(x))


function primeiroElemento(array){
   return array[0]
}

function primeiraLetra(string){
   return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(cumpriPromessa => cumpriPromessa(['Ana', 'Pedro', 'Carlos']))
            .then(primeiroElemento)
            .then(primeiraLetra)
            .then(letraMinuscula)
            .then(console.log())