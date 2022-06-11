// operador ... rest (juntar)/spread(espalhar)

const funcionario = { nome: 'Maria', salario: 1248.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Luiza', ...grupoA, 'Carlos']
console.log(grupoFinal)