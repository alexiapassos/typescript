/**Varivaies dentro de uma classe -> atributos ou propriedades */

class Cachorro {
  /**nome: string
    raca: string
    cor: string
    idade: number
    peso: number
    altura: number
    morde: boolean
    vacinado: boolean
    pedigree: boolean*/

  /**método construtor
   *
   * serve para criar um novo objeto da classe, possamos receber valores
   * que a classe utilize-os.
   *
   * se o programador não criar um construtor a propria linguagem irá criar um construtor
   * padrão
   *
   * no JavaScript/TypeScript se pode apenas ter um único método
   * construtor
   */

  constructor(
    /**this faz referência a propria classe dentro dela mesma */
    public nome: string,
    public raca: string,
    public cor: string,
    public idade: number,
    public peso: number,
    public altura: number,
    public morde: boolean,
    public vacinado: boolean,
    public pedigree: boolean
  ) {}

  somar(a: number, b: number): number {
    return a + b;
  }

  /**this.nome = nome
    this.raca = raca
    this.cor = cor
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.morde = morde
    this.vacinado = vacinado
    this.pedigree = pedigre*/
}

/**Objeto é uma instância de uma classe */

let c = new Cachorro("Toby", "SRD", "caramelo", 5, 5, 0.9, true, true, false);
let c2 = new Cachorro(
  "Princesa",
  "poodle",
  "branco",
  2,
  2,
  0.4,
  true,
  true,
  false
);

console.log(c);
console.log(c2);
