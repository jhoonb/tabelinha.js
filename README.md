# Tabelinha.js

Simples tabelas HTML via js.


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
tab.load({
    cols: ["idade", "nome"],
    rows: [[18, "joaozinho"], [19, "mariazinha"]],
});

tab.render();
```

Exemplo e teste em: `test.html`