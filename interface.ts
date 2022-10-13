/**let pessoa = {
    nome: "Pietro",
    idade: 22,
    altura: 1.8,
    cpf: "123.456.789.-00",
    solteiro: false,
    habilidade: ["Angula", "Java", "JavaScript", "SpringBoot", "Node.js"],
    endereco: {
        rua: "Rua Feliz",
        numero: 565,
        estado: "CE",
        complemento: "sem complemento",
        cep: "123000-00"
    }
}
let pessoa2 = {
    nome: "Pietro",
    idade: 22,
    altura: 1.8,
    cpf: "123.456.789.-00",
    solteiro: false,
    habilidade: ["Angula", "Java", "JavaScript", "SpringBoot", "Node.js"],
    endereco: {
        rua: "Rua Feliz",
        numero: 565,
        estado: "CE",
        complemento: "sem complemento",
        cep: "123000-00"
    },
    rg: "123456789"
}*/

interface Endereco {
  rua: string;
  numero: number;
  estado: string;
  complemento: string;
  cep: string;
}

interface Pessoa {
  nome: string;
  idade: number;
  altura: number;
  cpf: string;
  solteiro: boolean;
  habilidade: Array<String>; // string[]
  endereco: Endereco;
  rg: string;
  comprimentar(): void;
}

const p: Pessoa = {
  nome: "João",
  idade: 12,
  altura: 1.65,
  cpf: "222.222.222-22",
  solteiro: true,
  habilidade: ["HTML"],
  endereco: {
    rua: "Bacana",
    cep: "12300-500",
    complemento: "apartamento",
    estado: "PE",
    numero: 789,
  },
  rg: "789456123",
  comprimentar() {
    console.log("Olá, meu nome é " + this.nome);
  },
};

const p2: Pessoa = {
  nome: "Paula",
  idade: 24,
  altura: 1.63,
  cpf: "222.222.222-22",
  solteiro: true,
  habilidade: ["HTML", "CSS", "BootStrap"],
  endereco: {
    rua: "Bacana",
    cep: "12300-500",
    complemento: "apartamento",
    estado: "PE",
    numero: 789,
  },
  rg: "789456123",
  comprimentar() {
    console.log("Olá a todos! Prazer em conhece-los!");
  },
};
