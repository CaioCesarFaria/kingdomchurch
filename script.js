// 💬 Script de tradução completo com MENU incluso (header + footer)
document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    pt: {
      // 🔹 HERO
      vivaReino: "Viva o <span>Reino</span>.",
      experienciaPresenca: "Experimente a <span>Presença</span>.",
      facaParte: "Faça Parte da <span>Kingdom Church</span>.",
      subtituloInicio:
        "Uma família espiritual firmada na Palavra, no amor de Jesus e no poder do Espírito Santo.",
      btnVisitar: "Venha nos visitar",
      btnPastor: "Fale com um pastor",

      // 🔹 SOBRE
      sobreTitulo: "UMA IGREJA QUE <span>MANIFESTA</span> O CÉU NA TERRA",
      sobreTexto1:
        "A Kingdom Church é uma família espiritual que vive o Reino de Deus com alegria, propósito e amor por Jesus...",
      sobreTexto2:
        "Nascemos do anseio de ver pessoas rendidas à presença de Deus...",
      sobreTexto3:
        "Liderada pelos pastores Dagmo & Miss. Dayane, a Kingdom Church é um lugar de acolhimento...",
      sobreTexto4: "Vem ser Reino com a gente. Todos são bem-vindos.",

      // 🔹 MISSÃO & VISÃO
      tituloMissaoVisao: "NOSSA MISSÃO E VISÃO",
      missao: "MISSÃO",
      textoMissao:
        "Expandir o Reino de Deus através da pregação da Palavra, do discipulado intencional.",
      visao: "VISÃO",
      textoVisao:
        "Ver uma geração rendida a Cristo, firmada na verdade da Palavra.",

      // 🔹 FOTOS
      vemSerReino: "VEM SER <span>REINO</span> COM A GENTE",

      // 🔹 PROGRAMAÇÃO
      programacaoTitulo: "Programação <span>Semanal</span> & <span>Mensal</span>",
      programacaoSub: "Nossa casa está sempre aberta para a presença de Deus.",
      fixa: "PROGRAMAÇÃO FIXA",
      especial: "PROGRAMAÇÃO ESPECIAL DO MÊS",

      // 🔹 LOCALIZAÇÃO
      comoChegar: "COMO CHEGAR",
      comoChegarSub:
        "Estamos localizados em Henrico, Virginia, com fácil acesso para toda a região de Richmond. Venha nos visitar e experimentar a presença de Deus conosco!",
      maps: "ABRIR NO GOOGLE MAPS",

      // 🔹 CONTATO
      faleTitulo: "FALE CONOSCO",
      faleSub:
        "Queremos orar com você, ouvir sua história e caminhar ao seu lado. Se você precisa de ajuda, tem dúvidas ou deseja visitar a Kingdom Church, fale conosco!",
      canais: "CANAIS DE CONTATO",

      // 🔹 CONTRIBUIR
      contribuirTitulo: "CONTRIBUA COM PROPÓSITO",
      contribuirSub:
        "Generosidade é uma expressão de fé. Seu ato de doar sustenta a Casa, alcança os perdidos e transforma vidas.",
      contribuirFormas: "Duas formas de contribuir via Zelle:",
      paraIgreja: "Para a Igreja (dízimos e ofertas)",
      igrejaDesc: "Usado para manutenção da igreja, cultos, estrutura e projetos locais.",
      paraMissoes: "Para Missões (envios mensais)",
      missoesDesc: "Enviado a um país diferente todo mês. Parceiros do projeto One Hope · One Home.",

      // 🔹 TRANSPARÊNCIA
      transparenciaTitulo: "Transparência & Compromisso",
      transparenciaSub:
        "Todos os meses enviamos uma oferta missionária para nações diferentes. Somos comprometidos com o projeto One Hope · One Home...",

      // 🔹 VERSÍCULO
      bibliaVerso:
        "“Como crerão naquele de quem não ouviram? E como ouvirão, se não há quem pregue?”",
      bibliaRef: "Romanos 10:14-15",
      btnContribuir: "QUERO CONTRIBUIR COM A IGREJA",
      btnInvestir: "QUERO INVESTIR EM MISSÕES",

      // 🔹 FRASE FINAL
      sementeTitulo:
        "Cada semente plantada com fé abençoa pessoas, famílias e nações.",
      sementeSub: "Vem ser Reino com a gente. Todos são bem-vindos.",

      // 🔹 MENU (header .nav_links e footer .menus_footer)
      menuSobre: "Sobre Nós",
      menuVisao: "Visão e Missão",
      menuProgramacao: "Programação",
      menuLocalizacao: "Localização",
      menuContribua: "Contribua",
      menuContato: "Contato",
    },

    en: {
      // 🔹 HERO
      vivaReino: "Live the <span>Kingdom</span>.",
      experienciaPresenca: "Experience His <span>Presence</span>.",
      facaParte: "Be part of <span>Kingdom Church</span>.",
      subtituloInicio:
        "A spiritual family grounded in the Word, the love of Jesus, and the power of the Holy Spirit.",
      btnVisitar: "Plan your visit",
      btnPastor: "Talk to a pastor",

      // 🔹 ABOUT
      sobreTitulo: "A CHURCH THAT <span>BRINGS</span> HEAVEN TO EARTH",
      sobreTexto1:
        "Kingdom Church is a spiritual family that lives God's Kingdom with joy, purpose, and love for Jesus...",
      sobreTexto2:
        "We were born from the desire to see people surrendered to God's presence...",
      sobreTexto3:
        "Led by pastors Dagmo & Miss. Dayane, Kingdom Church is a place of welcome...",
      sobreTexto4: "Come be Kingdom with us. Everyone is welcome.",

      // 🔹 MISSION & VISION
      tituloMissaoVisao: "OUR MISSION AND VISION",
      missao: "MISSION",
      textoMissao:
        "Expand the Kingdom of God through preaching the Word and intentional discipleship.",
      visao: "VISION",
      textoVisao:
        "To see a generation surrendered to Christ, grounded in the truth of the Word.",

      // 🔹 PHOTOS
      vemSerReino: "COME BE <span>KINGDOM</span> WITH US",

      // 🔹 SCHEDULE
      programacaoTitulo: "Weekly <span>and</span> Monthly <span>Schedule</span>",
      programacaoSub:
        "Our house is always open for God's presence.",
      fixa: "WEEKLY SCHEDULE",
      especial: "MONTHLY SPECIAL SERVICES",

      // 🔹 LOCATION
      comoChegar: "HOW TO GET HERE",
      comoChegarSub:
        "We are located in Henrico, Virginia, with easy access to all of Richmond. Come visit us and experience God's presence!",
      maps: "OPEN IN GOOGLE MAPS",

      // 🔹 CONTACT
      faleTitulo: "CONTACT US",
      faleSub:
        "We want to pray with you, hear your story, and walk alongside you. If you need help, have questions, or plan to visit Kingdom Church, reach out!",
      canais: "CONTACT CHANNELS",

      // 🔹 GIVE
      contribuirTitulo: "GIVE WITH PURPOSE",
      contribuirSub:
        "Generosity is an expression of faith. Your giving supports God's house, reaches the lost, and transforms lives.",
      contribuirFormas: "Two ways to give via Zelle:",
      paraIgreja: "For the Church (tithes and offerings)",
      igrejaDesc:
        "Used for church maintenance, services, structure, and local projects.",
      paraMissoes: "For Missions (monthly support)",
      missoesDesc:
        "Sent to a different country each month. We are fixed partners of the One Hope · One Home project...",

      transparenciaTitulo: "Transparency & Commitment",
      transparenciaSub:
        "Every month we send a mission offering to different nations. We are committed to the One Hope · One Home project...",

      bibliaVerso:
        "“How can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them?”",
      bibliaRef: "Romans 10:14-15",
      btnContribuir: "I WANT TO GIVE TO THE CHURCH",
      btnInvestir: "I WANT TO INVEST IN MISSIONS",

      sementeTitulo:
        "Every seed sown in faith blesses people, families, and nations.",
      sementeSub: "Come be Kingdom with us. Everyone is welcome.",

      // 🔹 MENU (header .nav_links e footer .menus_footer)
      menuSobre: "About Us",
      menuVisao: "Mission & Vision",
      menuProgramacao: "Schedule",
      menuLocalizacao: "Location",
      menuContribua: "Give",
      menuContato: "Contact",
    },
  };

  function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // helper que atualiza 1 elemento
    const set = (selector, key) => {
      const el = document.querySelector(selector);
      if (el && t[key]) el.innerHTML = t[key];
    };

    // helper que atualiza TODOS os elementos que batem com o seletor
    const setAll = (selector, key) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (t[key]) el.innerHTML = t[key];
      });
    };

    // 🔹 HERO
    set(".linha_texto_inicio:nth-child(1)", "vivaReino");
    set(".linha_texto_inicio:nth-child(2)", "experienciaPresenca");
    set(".linha_texto_inicio:nth-child(3)", "facaParte");
    set(".box_subtitulo p", "subtituloInicio");
    set(".btn_visitar", "btnVisitar");
    set(".btn_pastor", "btnPastor");

    // 🔹 SOBRE
    set(".conteudo_texto h2", "sobreTitulo");
    const ps = document.querySelectorAll(".conteudo_texto p");
    if (ps.length >= 4) {
      ps[0].innerHTML = t["sobreTexto1"];
      ps[1].innerHTML = t["sobreTexto2"];
      ps[2].innerHTML = t["sobreTexto3"];
      ps[3].innerHTML = t["sobreTexto4"];
    }

    // 🔹 MISSÃO & VISÃO
    set(".missaoevisao_title", "tituloMissaoVisao");
    set(".missao_title", "missao");
    set(".missao_texto", "textoMissao");
    set(".visao_title", "visao");
    set(".visao_texto", "textoVisao");

    // 🔹 FOTOS
    set(".fotosIgreja_titulo", "vemSerReino");

    // 🔹 PROGRAMAÇÃO
    set(".programacao_titulo", "programacaoTitulo");
    set(".programacao_subtitulo", "programacaoSub");
    set(".programacao_semana .semana_title", "fixa");
    set(".programacao_semana + .programacao_semana .semana_title", "especial");

    // 🔹 LOCALIZAÇÃO
    set(".comochegar_titulo", "comoChegar");
    set(".comochegar_subtitulo", "comoChegarSub");
    set(".link_mapa", "maps");

    // 🔹 CONTATO
    set(".faleconosco_titulo", "faleTitulo");
    set(".faleconosco_subtitulo", "faleSub");
    set(".faleconosco_canais", "canais");

    // 🔹 CONTRIBUIR
    set(".proposito_titulo", "contribuirTitulo");
    set(".proposito_subtitulo", "contribuirSub");
    set(".contribuicao_titulo", "contribuirFormas");
    set(".contribuicao_subtitulo", "contribuirSub");
    const dizimos = document.querySelectorAll(".contribuicao_box");
    if (dizimos.length >= 2) {
      dizimos[0].querySelector(".dizimo_titulo").innerHTML = t["paraIgreja"];
      dizimos[0].querySelector(".dizimo_subtitulo").innerHTML = t["igrejaDesc"];
      dizimos[1].querySelector(".dizimo_titulo").innerHTML = t["paraMissoes"];
      dizimos[1].querySelector(".dizimo_subtitulo").innerHTML = t["missoesDesc"];
    }

    // 🔹 TRANSPARÊNCIA
    set(".transparencia_titulo", "transparenciaTitulo");
    set(".transparencia_subtitulo", "transparenciaSub");

    // 🔹 VERSÍCULO
    set(".biblia_versiculo", "bibliaVerso");
    set(".biblia_subtitulo", "bibliaRef");
    const botoes = document.querySelectorAll(".biblia_botoes a");
    if (botoes.length >= 2) {
      botoes[0].innerHTML = t["btnContribuir"];
      botoes[1].innerHTML = t["btnInvestir"];
    }

    // 🔹 FRASE FINAL
    set(".dayane_titulo", "sementeTitulo");
    set(".dayane_subtitulo", "sementeSub");

    // 🔹 MENU (header + footer)
    const menuMap = [
      { href: "#sobre", key: "menuSobre" },
      { href: "#visao", key: "menuVisao" },
      { href: "#programacao", key: "menuProgramacao" },
      { href: "#localizacao", key: "menuLocalizacao" },
      { href: "#contribua", key: "menuContribua" },
      { href: "#contato", key: "menuContato" },
    ];
    menuMap.forEach(({ href, key }) => {
      // atualiza o header
      setAll(`.nav_links a[href='${href}']`, key);
      // atualiza o footer
      setAll(`.menus_footer a[href='${href}']`, key);
    });
  }

  // deixa global se quiser chamar por console
  window.setLanguage = setLanguage;

  // 👉 Eventos das bandeiras (são <img>, sem <a>)
  const brFlag = document.querySelector(".brasil");
  const usFlag = document.querySelector(".eua");

  if (brFlag) {
    brFlag.addEventListener("click", () => setLanguage("pt"));
  }
  if (usFlag) {
    usFlag.addEventListener("click", () => setLanguage("en"));
  }
});



