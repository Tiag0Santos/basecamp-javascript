function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Tiago',
	idade: 30,
};

const pessoa2 = {
	nome: 'Maria',
	idade: 65,
};

const pessoa3 = {
	nome: 'Nelson',
	idade: 70,
};

console.log(calculaIdade.call(pessoa3, 10));
console.log(calculaIdade.apply(pessoa2, [5]));
console.log(calculaIdade.apply(pessoa1, [30]));