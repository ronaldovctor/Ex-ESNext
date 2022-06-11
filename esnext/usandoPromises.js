// com promise
const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
   const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
   return new Promise((resolve, reject) => {
      http.get(url, res => {
         let resultado = ''
   
         res.on('data', dados => {
            resultado += dados
         })
   
         res.on('end', () => {
            try{
               resolve(JSON.parse(resultado))
            } catch(e){
               reject(e)
            }
         })
      })
   })
}

// let nomes = []
// getTurma('A').then(alunos => {
//    nomes = nomes.concat(alunos.map(x => `A: ${x.nome}`))
//    console.log(nomes)
//    getTurma('B').then(alunos => {
//       nomes = nomes.concat(alunos.map(x => `B: ${x.nome}`))
//       console.log(nomes)
//       getTurma('C').then(alunos => {
//          nomes = nomes.concat(alunos.map(x => `C: ${x.nome}`))
//          console.log(nomes)
//       })
//    })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
      .then(turmas => [].concat(...turmas))
      .then(alunos => alunos.map(aluno => aluno.nome))
      .then(x => console.log(x))
      .catch(e => console.log(e))
