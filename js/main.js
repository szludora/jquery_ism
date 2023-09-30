import { lista } from "./adatok.js";
import ListaMegjelenit from "./Megjelenit.js";

$(function () {
  const szuloElem = $(".tartalom");
  new ListaMegjelenit(lista, szuloElem);
});
