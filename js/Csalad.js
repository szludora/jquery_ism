class CsaladTabla {
  constructor(lista, szuloElem) {
    this.lista = lista;
    this.szuloElem = szuloElem;
    let txt = this.htmlOsszeallit(lista);
    this.szuloElem.append(txt);
    this.rendezesIrany = "asc";
    this.cella = this.szuloElem.find(".szulcella");
    this.cella.on("click", (event) => {
      if (!$(event.target).hasClass("icon")) {
        this.rendezTabla();
      }
    });
  }

  htmlOsszeallit(lista) {
    const d = new Date();
    let ev = d.getFullYear();
    let txt =
      "<table><thead><td>Családtag</td><td>Vezetéknév</td><td>Keresztnév</td><td>Középső név</td>" +
      "<td class='szulcella'><span class='szulspan' title='Rendezés'>Születési év</span>" +
      "<img class='icon' src='https://icon-library.com/images/swap-icon-png/swap-icon-png-15.jpg'" +
      "nosend='1 alt='Line' title='Kor/Év'></td></thead>";

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
          if (tag[kulcs] == ev){
            txt += `${plusz}<td class="szul baba">${tag[kulcs]}</td>`;
          } else {
            txt += `${plusz}<td class="szul">${tag[kulcs]}</td>`;
          }
        } else if (kulcs == "honap") {
          // nem csinál semmit
          txt += `<span class="honap rejtett">${tag[kulcs]}</span>`;
        } else if (kulcs == "nap") {
          txt += `<span class="nap rejtett">${tag[kulcs]}</span>`;
        } else {
          txt += `<td>${tag[kulcs]}</td>`;
        }
      }
      // lenulláza a cellát, hogy ha nem szükséges, ne adjon hozzá üres cellát
      plusz = "";
      txt += `${plusz}`;
    }
    txt += `</tr>`;
    txt += `</table>`;
    return txt;
  }

  rendezTabla() {
    const tbody = this.szuloElem.find("table tbody");
    const sorok = tbody.find("tr");

    sorok.sort((a, b) => {
      const elsoEv = parseInt($(a).find(".szul").text(), 10);
      const masodikEv = parseInt($(b).find(".szul").text(), 10);

      if (this.rendezesIrany === "asc") {
        return elsoEv - masodikEv;
      } else {
        return masodikEv - elsoEv;
      }
    });

    tbody.html(sorok);

    // Rendezés irányának megfordítása a következő kattintáskor
    this.rendezesIrany = this.rendezesIrany === "asc" ? "desc" : "asc";
  }
}

export default CsaladTabla;
