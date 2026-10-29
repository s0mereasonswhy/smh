/* ===== EDYTUJ: dane restauracji, menu, opisy i ceny ===== */
var R = {
  tel: "+48 533 060 233",
  addr: "Browarna 2, 62-800 Kalisz",
  lat: 51.7614092,
  lng: 18.0907601,
  tables: 10,
};
var DAYS = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];
var HOURS = {
  0: ["12:00", "21:00"],
  1: ["13:00", "21:00"],
  2: ["13:00", "21:00"],
  3: ["13:00", "21:00"],
  4: ["13:00", "21:00"],
  5: ["13:00", "21:00"],
  6: ["12:00", "21:00"],
};
var MENU = [
  {
    t: "Na początek",
    e: "",
    c: "#e9a23b",
    s: "Czekadełko, które robi pierwsze wrażenie",
    i: [
      [
        "",
        "Pasztet z dziczyzny",
        "Domowy pasztet do smarowania na chlebie – goście wspominają go jako powitalne czekadełko i pierwszy zwiastun bieszczadzkich smaków.",
        "czekadełko",
      ],
    ],
  },
  {
    t: "Zupy",
    e: "",
    c: "#a63d52",
    s: "Na rozgrzewkę, w polskim stylu",
    i: [
      [
        "",
        "Żurek",
        "Klasyczna zupa na żytnim zakwasie – kwaśna, aromatyczna, sycąca.",
        "",
      ],
      [
        "",
        "Barszcz czerwony",
        "Rubinowy barszcz o wyrazistym, lekko słodko-kwaśnym smaku.",
        "",
      ],
      [
        "",
        "Rydze w śmietanie",
        "Kremowa zupa z rydzami – leśny, grzybowy aromat w śmietanowej oprawie.",
        "",
      ],
    ],
  },
  {
    t: "Dania z dziczyzny",
    e: "",
    c: "#1f4030",
    s: "Serce bieszczadzkiej kuchni",
    i: [
      [
        "",
        "Kotlety z daniela",
        "Delikatne, subtelne w smaku kotlety z dziczyzny – goście chwalą idealne wysmażenie.",
        "",
      ],
      [
        "",
        "Danie sezonowe z dziczyzny",
        "Zmienna propozycja kuchni – dzik, jeleń lub daniel w zależności od sezonu. Zapytaj obsługę o dzisiejszą ofertę.",
        "pytaj o dzisiejsze",
      ],
    ],
  },
  {
    t: "Placki i ryby",
    e: "",
    c: "#8a5a2b",
    s: "Syto, domowo, po bieszczadzku",
    i: [
      [
        "",
        "Placki po bieszczadzku",
        "Rumiane placki ziemniaczane w bieszczadzkim stylu – duże porcje, sycące i pełne smaku.",
        "",
      ],
      [
        "",
        "Placki z gulaszem",
        "Chrupiące placki z gęstym, mięsnym gulaszem.",
        "",
      ],
      [
        "",
        "Pstrąg",
        "Pstrąg w kuchennym wydaniu restauracji – lekka alternatywa dla dań mięsnych.",
        "",
      ],
    ],
  },
  {
    t: "Burger",
    e: "",
    c: "#c3731a",
    s: "Dla fanów mocniejszych smaków",
    i: [
      [
        "",
        "Burger",
        "Soczysty burger z karty restauracji – dobry wybór, gdy ma być szybko i konkretnie.",
        "",
      ],
    ],
  },
  {
    t: "Napoje",
    e: "",
    c: "#2f8f8a",
    s: "Orzeźwienie do dania",
    i: [
      [
        "",
        "Lemoniada",
        "Domowa lemoniada – goście chwalą ją jako przepyszną.",
        "",
      ],
    ],
  },
];
var FEATS = [
  [
    "c1",
    "",
    "Dziczyzna",
    "Kuchnia bieszczadzka z daniami z dziczyzny – dzik, jeleń, daniel.",
  ],
  ["c2", "", "Duże porcje", "Goście zgodnie piszą: syto, domowo i smacznie."],
  [
    "c3",
    "",
    "Czekadełko",
    "Na start czeka pasztet z dziczyzny do posmarowania chlebem.",
  ],
  [
    "c4",
    "",
    "Dla każdego",
    "Rodziny z dziećmi, krzesełka do karmienia i psy mile widziane.",
  ],
];
var sel = {};
function mins(s) {
  var p = s.split(":");
  return +p[0] * 60 + +p[1];
}
function openNow() {
  var n = new Date(),
    t = HOURS[n.getDay()],
    m = n.getHours() * 60 + n.getMinutes();
  return !!t && m >= mins(t[0]) && m < mins(t[1]);
}
function mapLink() {
  return (
    "https://www.google.com/maps/search/?api=1&query=" + R.lat + "," + R.lng
  );
}
function pines() {
  var h =
    '<svg class="trees" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true"><path fill="#fbf4e4" class="tf" d="M0 90V60l20-40 20 40 15-25 25 50 20-45 25 45 15-30 20 45 25-55 20 50 20-35 25 55 20-45 25 40 20-30 20 50 20-40 25 45 20-50 20 45 25-35 20 50 20-40 25 55 20-50 20 40 25-30 20 45 20-55 25 50 20-40 25 45 20-35 20 50 25-45 20 35 20-50 25 55 20-40 25 40 20-35 20 45 25-50 20 40 20-30 25 50 20-45 25 40 20-50 20 55 25-40V90z"/></svg>';
  return h;
}
function flies() {
  var h = "";
  for (var i = 0; i < 0; i++)
    h +=
      '<i class="ff" style="left:' +
      (5 + i * 6.5) +
      "%;top:" +
      (15 + ((i * 37) % 60)) +
      "%;animation-delay:" +
      i * 0.9 +
      's"></i>';
  return h;
}
function home() {
  var d = new Date().getDay(),
    o = openNow();
  var h =
    '<section class="hero">' +
    flies() +
    '<div class="eb">Kalisz · kuchnia bieszczadzka</div><h1>Chyb <em>i</em> Chwost</h1><p>Dziczyzna, domowe placki i czekadełko na dobry początek. Kameralna restauracja kilka kroków od Głównego Rynku.</p><div class="btns"><button class="btn" onclick="go(\'menu\')">Zobacz menu</button><a class="btn alt" href="tel:' +
    R.tel.replace(/\s/g, "") +
    '">Zadzwoń i zarezerwuj</a></div>' +
    pines() +
    "</section>";
  h +=
    '<div class="wrap"><section class="s rv"><div class="kick">Dlaczego u nas</div><h2>Smak, który zostaje w pamięci</h2><p class="lead">Gospodarze stawiają na dobre składniki i dopracowane receptury. W opiniach gości wraca ta sama lista: pyszne jedzenie, miła obsługa, klimatyczne wnętrze, duże porcje i przystępne ceny.</p><div class="grid">' +
    FEATS.map(function (f) {
      return (
        '<div class="f ' +
        f[0] +
        '"><span class="ic">' +
        f[1] +
        "</span><h3>" +
        f[2] +
        "</h3><p>" +
        f[3] +
        "</p></div>"
      );
    }).join("") +
    '</div><div class="chips"><span> Płatność kartą</span><span> Na miejscu i na wynos</span><span> Krzesełka dla dzieci</span><span> Psy mile widziane</span><span> Płatny parking przy ulicy</span><span> Orientacyjnie 40–80 zł</span></div></section>';
  h +=
    '<section class="s rv"><div class="kick">Skosztuj</div><h2>Trzy rzeczy, od których warto zacząć</h2><div class="grid">' +
    [
      [0, 0],
      [2, 0],
      [3, 0],
    ]
      .map(function (p, ix) {
        var c = MENU[p[0]],
          x = c.i[p[1]];
        return (
          '<div class="f ' +
          ["c3", "c1", "c2"][ix] +
          '" style="cursor:pointer" onclick="go(\'menu\')"><span class="ic">' +
          x[0] +
          "</span><h3>" +
          x[1] +
          "</h3><p>" +
          x[2] +
          "</p></div>"
        );
      })
      .join("") +
    "</div></section>";
  h +=
    '<section class="s rv"><div class="kick">Odwiedź nas</div><h2>Godziny i dojazd</h2><div class="two" style="margin-top:18px"><div class="card"><div class="st"><span class="dot' +
    (o ? "" : " off") +
    '"></span>' +
    (o ? "Teraz otwarte" : "Teraz zamknięte") +
    "</div><table>" +
    [1, 2, 3, 4, 5, 6, 0]
      .map(function (i) {
        return (
          "<tr" +
          (i === d ? ' class="today"' : "") +
          "><td>" +
          DAYS[i] +
          "</td><td>" +
          HOURS[i][0] +
          " – " +
          HOURS[i][1] +
          "</td></tr>"
        );
      })
      .join("") +
    '</table><p class="note">Godziny mogą się różnić w święta i weekendy – w razie wątpliwości zadzwoń.</p></div><div class="card"><p><b> ' +
    R.addr +
    '</b></p><p>Restauracja leży w samym sercu Kalisza, 2–3 minuty pieszo od Głównego Rynku. Samochód zostaw na płatnym parkingu przy ulicy lub w pobliżu centrum.</p><p> <a href="tel:' +
    R.tel.replace(/\s/g, "") +
    '">' +
    R.tel +
    '</a></p><p class="note">W weekendy polecamy rezerwację telefoniczną.</p><div class="btns" style="justify-content:flex-start"><a class="btn dk" href="' +
    mapLink() +
    '" target="_blank" rel="noopener">Wyznacz trasę</a></div></div></div></section>';
  h +=
    '<section class="s rv"><div class="kick">Przy stoliku</div><h2>Zeskanuj kod QR i przeglądaj menu</h2><p class="lead">Na każdym stoliku stoi własny kod QR. Telefon otwiera menu z numerem Twojego stolika, a przyciskiem „+” możesz zebrać dania i pokazać listę obsłudze.</p></section></div>';
  return h;
}
function menuV(tbl) {
  var h =
    '<div class="mh"><div class="eb" style="color:var(--amber)">Chyb i Chwost</div><h1>Menu</h1>' +
    (tbl
      ? '<div class="tb">Stolik nr ' + tbl + " · smacznego!</div>"
      : '<div class="note" style="color:#f0e4c8;margin:4px auto 0">Aktualne ceny podajemy w karcie na miejscu.</div>') +
    '</div><div class="tabs">' +
    MENU.map(function (c, i) {
      return (
        '<a href="#" onclick="jump(' +
        i +
        ');return false" style="--c2:' +
        c.c +
        '">' +
        c.t +
        "</a>"
      );
    }).join("") +
    '</div><div class="wrap">';
  MENU.forEach(function (c, ci) {
    h +=
      '<div class="cat" id="cat' +
      ci +
      '" style="--c:' +
      c.c +
      '"><h3><i style="color:' +
      c.c +
      '">' +
      String(ci + 1).padStart(2, "0") +
      "</i>" +
      c.t +
      '</h3><p class="sub">' +
      c.s +
      "</p>";
    c.i.forEach(function (x, i) {
      h +=
        '<div class="it" style="--c:' +
        c.c +
        ";animation-delay:" +
        i * 80 +
        'ms"><span class="em">' +
        x[0] +
        '</span><div class="tx"><b>' +
        x[1] +
        '</b><span class="d">' +
        x[2] +
        '</span><span class="pr">' +
        (x[3] ? x[3] + " · " : "") +
        'cena w karcie</span></div><button class="add' +
        (sel[x[1]] ? " on" : "") +
        '" data-n="' +
        x[1] +
        '" aria-label="Dodaj do wyboru">' +
        (sel[x[1]] ? "✓" : "+") +
        "</button></div>";
    });
    h += "</div>";
  });
  h +=
    '<p class="note">Opisy dań powstały na podstawie opinii gości i ogólnego charakteru kuchni bieszczadzkiej; dokładny skład, alergeny i ceny podaje restauracja. O alergeny pytaj obsługę.</p></div>';
  return h;
}
function jump(i) {
  var e = document.getElementById("cat" + i);
  if (e) e.scrollIntoView();
}
function qrV() {
  var base = location.href.split("#")[0];
  var h =
    '<div class="mh"><div class="eb" style="color:var(--amber)">Panel restauracji</div><h1>Kody QR do stolików</h1><p style="max-width:540px;margin:6px auto 0;color:#f0e4c8">Wydrukuj kody i postaw je na stolikach. Gość skanuje kod i od razu widzi menu ze swoim numerem stolika.</p></div><div class="wrap"><div class="card noprint" style="margin-top:24px"><label for="bu">Adres strony (wklej docelowy adres, gdy będziesz miał własną domenę)</label><input id="bu" value="' +
    base +
    '"><label for="tn">Liczba stolików</label><input id="tn" type="number" min="1" max="60" value="' +
    R.tables +
    '"><div class="btns" style="justify-content:flex-start;margin-top:16px"><button class="btn" id="gen">Utwórz kody</button><button class="btn dk" onclick="window.print()">Drukuj</button></div></div><div class="qrg" id="qrg"></div><p class="note noprint">Kody prowadzą na adres wpisany powyżej z dopiskiem #stolik-1, #stolik-2 itd. Kod „Menu ogólne” otwiera samo menu.</p></div>';
  return h;
}
function makeQR() {
  var b = document.getElementById("bu").value.split("#")[0],
    n = Math.max(1, Math.min(60, +document.getElementById("tn").value || 1)),
    g = document.getElementById("qrg");
  g.innerHTML = "";
  var list = [["Menu ogólne", "menu"]];
  for (var i = 1; i <= n; i++) list.push(["Stolik " + i, "stolik-" + i]);
  list.forEach(function (x) {
    var c = document.createElement("div");
    c.className = "qc";
    c.innerHTML =
      '<b>Chyb i Chwost</b><div class="q"></div><b>' +
      x[0] +
      "</b><small>Zeskanuj, aby zobaczyć menu</small>";
    g.appendChild(c);
    try {
      new QRCode(c.querySelector(".q"), {
        text: b + "#" + x[1],
        width: 150,
        height: 150,
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {
      c.querySelector(".q").textContent = "Brak biblioteki QR";
    }
  });
}
function fab() {
  var n = Object.keys(sel).length,
    w = document.getElementById("fabw");
  w.innerHTML = n
    ? '<button class="fab" onclick="openSel()"> Mój wybór (' + n + ")</button>"
    : "";
}
function openSel() {
  var k = Object.keys(sel),
    m = document.createElement("div");
  m.className = "modal";
  var t = (/^#stolik-(\d+)/.exec(location.hash) || [])[1];
  m.innerHTML =
    '<div class="box"><h2 style="font-size:26px">Mój wybór' +
    (t ? " · stolik " + t : "") +
    '</h2><p class="note" style="margin-top:4px">To lista pomocnicza, nie zamówienie – pokaż ją obsłudze.</p>' +
    k
      .map(function (x) {
        return "<p> " + x + "</p>";
      })
      .join("") +
    '<div class="btns" style="justify-content:flex-start"><button class="btn dk" id="cl">Zamknij</button><button class="btn alt" id="cc">Wyczyść</button></div></div>';
  document.body.appendChild(m);
  m.onclick = function (e) {
    if (e.target === m) m.remove();
  };
  m.querySelector("#cl").onclick = function () {
    m.remove();
  };
  m.querySelector("#cc").onclick = function () {
    sel = {};
    m.remove();
    fab();
    document.querySelectorAll(".add").forEach(function (b) {
      b.classList.remove("on");
      b.textContent = "+";
    });
  };
}
function reveal() {
  var e = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    e.forEach(function (x) {
      x.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  e.forEach(function (x) {
    io.observe(x);
  });
}
function render(t) {
  var m = /^stolik-(\d+)$/.exec(t),
    r = m ? "menu" : t === "menu" || t === "qr" ? t : "start";
  document.title =
    (r === "menu" ? "Menu – " : r === "qr" ? "Kody QR – " : "") +
    "Chyb i Chwost – Kalisz";
  document.getElementById("app").innerHTML =
    '<div class="view">' +
    (r === "menu" ? menuV(m && m[1]) : r === "qr" ? qrV() : home()) +
    "</div>";
  ["start", "menu", "qr"].forEach(function (n) {
    document.getElementById("n-" + n).className = n === r ? "on" : "";
  });
  var g = document.getElementById("gen");
  if (g) {
    g.onclick = makeQR;
    makeQR();
  }
  document.querySelectorAll(".add").forEach(function (b) {
    b.onclick = function () {
      var n = b.dataset.n;
      if (sel[n]) {
        delete sel[n];
        b.classList.remove("on");
        b.textContent = "+";
      } else {
        sel[n] = 1;
        b.classList.add("on");
        b.textContent = "✓";
      }
      fab();
    };
  });
  fab();
  window.scrollTo(0, 0);
  reveal();
}
function go(t) {
  try {
    history.replaceState(null, "", "#" + t);
  } catch (e) {}
  render(t);
}
render((location.hash || "").replace("#", ""));
window.addEventListener("hashchange", function () {
  render(location.hash.replace("#", ""));
});
