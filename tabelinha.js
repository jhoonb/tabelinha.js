/**
 * Jhonathan P. Banczek.
 * ------------------------------------------------------------- 
 * Tabelinha, objeto para gerar uma tabela HTML 
 * let tab = new Tabelinha();
 * tab.cols = ["nome", "idade"];
 * tab.rows = [["joãozinho", 20], ["mariazinha", "21"]];
 * 
 * el.innerHTML = tab.render(); // retorna o HTML ou
 * // id de algum div existente no HTML
 * tab.div = "div-tabela";
 * tab.render();
 * 
**/

"use strict";

function Tabelinha() {
    this.id = "tabelinha";
    this.div = "";

    this.class_table = "table";
    this.class_thead = '';
    this.class_tbody = '';
    this.class_th = '';
    this.class_td = '';
    this.class_tr = '';

    this.cols = [];
    this.rows = [];
    this.ihtml = ""; // para usar em el.innerHTML

    this.render = function () {
        let colsRaw = "";
        for (let c in this.cols) {
            colsRaw += `<th> ${this.cols[c]} </th>\n`;
        }

        let rowsRaw = '';
        for (let i = 0; i < this.rows.length; i++) {
            rowsRaw += `<tr class="${this.class_tr}">`;
            for (let j = 0; j < this.rows[i].length; j++) {
                rowsRaw += `<td> ${this.rows[i][j]} </td>\n`
            }
            rowsRaw += `</tr>`;
        }

        this.ihtml = `<table id="${this.id}" class="${this.class_table}">
        <thead class="${this.class_thead}">
            <tr class="${this.class_tr}">
                ${colsRaw}
            </tr>
        </thead>

        <tbody class="${this.class_tbody}">
            ${rowsRaw}
        </tbody>
        </table>
        `

        if (this.div !== "") {
            document.getElementById(this.div).innerHTML = this.ihtml;
        }
        return this.ihtml;
    }
    // load carrega os dados via um objeto json
    // [TODO] acrescentar os outros atributos
    this.load = function (jsonObject) {
        this.cols = jsonObject["cols"];
        this.rows = jsonObject["rows"];
    }
}