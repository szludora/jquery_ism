import { lista } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";
import { csaladTagok } from "./csaladAdat.js";
import Csalad from "./Csalad.js";

$(function () {
  const szuloElem = $(".tartalom");
  new ListaMegjelenit(lista, szuloElem);
  new Csalad(csaladTagok, szuloElem);
});
