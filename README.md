# Tabelinha.js

Simples tabelas HTML via js.

<img src="https://raw.githubusercontent.com/jhoonb/tabelinha.js/main/tabinho.png" 
height="100" width="95">


## Uso

No arquivo .html adicione o `tabelinha.js` (antes do seu código/script)
 
```html
<script src="tabelinha.js"></script>
```

Crie uma div onde será adicionada a tabela, crie um `id`.

```html
<div id="tabelinha-aqui">
</div>
```

No seu código `js` crie um objeto e sete os valores.

```js
let tab = new Tabelinha();
// adicione as colunas
tab.cols = ["idade", "nome"];
// adicione as linhas
tab.rows = [[21, "Joãozinho"], [21, "Mariazinha"]];
// elemento, passe o id da div criada no .html
let div = document.getElementById("tabelinha-aqui");
// atribui a tabela gerada
div.innerHTML = tab.render();

// outra forma
// para atribuir automaticamente a um elemento, 
// sete o atributo .div com o id da div criada no .html
tab.div = 'tabelinha-aqui';

// só executar o render()
tab.render();

// dados via json
let dados = {
    cols: ["idade", "nome"],
    rows: [
        {
            idade: 18,
            nome: "joaozinho"
        },
        {
            idade: 19,
            nome: "mariazinha"
        }
    ]
}
tab.load(dados);
tab.render();

// para mudar o titulo de cada coluna por uma máscara, passe um 
// objeto chave/valor com chave o nome da coluna e valor o valor
// a ser substituido. Ex.:
 
let dados = {
    cols: ["idade", "nome"],
    rows: [
        {
            idade: 18,
            nome: "joaozinho"
        },
        {
            idade: 19,
            nome: "mariazinha"
        }
    ]
}
// máscara
tab.cols_mask = {
    idade: "Idade da Pessoa",
    nome: "Nome Completo"
}

tab.load(dados);
tab.render();
```

## exemplo
Exemplo e teste em: `test.html`

## API
```js

// Atributos
Tabelinha
    // Atributos
         .id // default: "tabelinha" (string)
         .div // (string)

         .class_table // default: "table" (string)
         .class_thead // (String)
         .class_tbody // (String)
         .class_th // (String)
         .class_td // (String)
         .class_tr // (String)

         .cols // (Array)

         .cols_mask = {}; // (Object)

         .rows // (Array)
         .ihtml // (String)

    // Métodos
        // render gera o HTML para inserir no innerHTML do elemento .div
         .render() // (retorna): .ihtml 
        // carrega os atributos de um Json com chaves: cols: [String] e rows [Object]
         .load(json) // void

```
