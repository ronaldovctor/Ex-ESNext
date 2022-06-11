// sem repetição e index
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeitas').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)