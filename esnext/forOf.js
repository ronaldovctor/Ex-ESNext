// através do valor
for (letra of "Cod3r"){
   console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// através do índice
for (let i in assuntosEcma){
   console.log(i)
}

for (let assunto of assuntosEcma){
   console.log(assunto)
}

const assuntosMap = new Map([
   ['Map', { abordado: true}],
   ['Set', { abordado: true}],
   ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap){
   console.log(assunto)
}

for (let chave of assuntosMap.keys()){
   console.log(chave)
}

for (let val of assuntosMap.values()){
   console.log(val)
}

for (let [ch,vl] of assuntosMap.entries()){
   console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
console.log(s)
for (let letra of s){
   console.log(letra)
}