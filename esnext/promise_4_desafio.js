const fs = require('fs')
const path = require('path')

function lerArquivo(file){
   return new Promise(resolve => {
      const caminho = path.join(__dirname, file)
      fs.readFile(caminho, function(_, conteudo){
         resolve(conteudo.toString())
      })
   })
}

lerArquivo('dados.txt').then(conteudo => conteudo.split('\n'))
                        //.then(linhas => console.log(linhas.length))
                        .then(elemento => console.log(elemento[1]))