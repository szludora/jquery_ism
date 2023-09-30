export function csere() {
  let table = $("table");
  let gomb = $(".icon");
  const d = new Date();
  let ev = d.getFullYear();
  let honap = d.getMonth() + 1;
  let fejlec = $(".szulspan");
  let babaHonap = $(".honap").html();

  gomb.on("click", function () {
    // kor/év lecserélése
    table.find("td.szul").each(function () {
      let szul = $(this).html();
      // ha egy tag a baba osztállyal rendelkezik
        if ($(this).attr("class") == "szul baba" || $(this).attr("class") == "szul baba2") {
            $(this).toggleClass("baba")
            $(this).toggleClass("baba2")
            if($(this).attr("class") == "szul baba"){
                $(this).html(honap - babaHonap + "hónapos");
            }

      } else {
        $(this).html(ev - szul);
      }
    });
    // fejléc átírása
    if (fejlec.html() == "Születési év") {
      fejlec.html("Kor");
    } else {
      fejlec.html("Születési év");
    }
  });
}
