class CsaladTabla {
  constructor(lista, szuloElem) {
    this.lista = lista;
    this.szuloElem = szuloElem;
    const d = new Date();
    this.ev = d.getFullYear();
    let txt = this.htmlOsszeallit(lista);
    this.szuloElem.append(txt);
  }

  htmlOsszeallit(lista) {
    let txt =
      "<table><thead><td>Családtag</td><td>Vezetéknév</td><td>Keresztnév</td><td>Középső név</td>"+
      "<td><span class='szul'>Születési év</span><img class='icon' src='https://icon-library.com/images/swap-icon-png/swap-icon-png-15.jpg'" +
      "nosend='1 alt='Line' title='Line'></td></thead>";

    for (let i = 0; i < lista.length; i++) {
      let plusz = "";
      txt += `<tr>`;
      let tag = this.lista[i];
      //   Ha egy családtagnak van középső neve, adjon hozzá egy üres cellát
      if (!tag.hasOwnProperty("koz")) {
        plusz = `<td></td>`;
      }
      for (const kulcs in tag) {
        // a születési év előtt hozzáadja a cellát,  amennyiben szükséges
        if (kulcs == "szul") {
          txt += `${plusz}`;
        }
        txt += `<td>${tag[kulcs]}</td>`;
      }
      // lenulláza a cellát, hogy ha nem szükséges, ne adjon hozzá üres cellát
      plusz = "";
      txt += `${plusz}`;
    }
    txt += `</tr>`;
    txt += `</table>`;

    return txt;
  }
}

export default CsaladTabla;
