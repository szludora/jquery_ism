export function csere() {
  let table = $("table");
  let gomb = $(".icon");
  const d = new Date();
  let ev = d.getFullYear();
  let fejlec = $(".szulspan");

  gomb.on("click", function () {
    table.find("td.szul").each(function () {
      let szul = $(this).html();
      $(this).html(ev - szul);
    });
    if (fejlec.html() == "Születési év") {
      fejlec.html("Kor");
    } else {
      fejlec.html("Születési év");
    }
  });
}
