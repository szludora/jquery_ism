class ListaMegjelenit {
  constructor(lista, szuloElem) {
    this.lista = lista;
    this.szuloElem = szuloElem;
    let txt = this.htmlOsszeallit(lista);
    this.szuloElem.append(txt);
  }

  htmlOsszeallit() {
    let txt = "<ul>";
    for (var i = 0; i < this.lista.length; i++) {
      const element = this.lista[i];
      txt += `<li>${element}</li>`;
    }
    txt += `</ul>`;
    return txt;
  }
}

export default ListaMegjelenit;
