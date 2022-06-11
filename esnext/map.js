const tecnologia = new Map()
tecnologia.set('react', { framework: false})
tecnologia.set('angular', { framework: true})

console.log(tecnologia.get('react').framework)
console.log(tecnologia.get('angular'))

const chavesVariadas = new Map([
   [function () { }, 'Função'],
   [{ }, 'Objeto'],
   [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
   console.log(ch, vl)
   console.log(chavesVariadas.get(ch))
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)