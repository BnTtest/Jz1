const WHATSAPP_NUMBER = "5511999999999"; // Troque pelo número real da Jozy, apenas dígitos.

const translations = {
  "pt-BR": {
    seo: {
      title: "Jozy Nutrition Coach | Hábitos saudáveis para a vida real",
      description: "Acompanhamento personalizado com Jozy para ajudar você a desenvolver hábitos mais saudáveis, organização e uma rotina sustentável."
    },
    nav: {home:"Início",about:"Sobre",how:"Como Funciona",services:"Serviços",results:"Resultados",contact:"Contato",talk:"Falar com Jozy"},
    hero:{
      tag:"NUTRIÇÃO • SAÚDE • RESULTADOS",
      title:'Sua melhor versão começa com <span>hábitos que você consegue manter.</span>',
      description:"Acompanhamento nutricional personalizado para quem deseja melhorar a alimentação, criar hábitos mais saudáveis e alcançar resultados reais sem transformar a rotina em uma guerra contra a comida.",
      primary:"Começar minha transformação",secondary:"Conhecer o acompanhamento",
      check1:"Atendimento personalizado",check2:"Estratégias adaptadas à sua rotina",check3:"Acompanhamento próximo",check4:"Foco em hábitos sustentáveis",
      float1:"Plano personalizado",floatSub1:"feito para a sua rotina",float2:"Hábitos sustentáveis",floatSub2:"passos que cabem na vida real",float3:"Acompanhamento próximo",floatSub3:"orientação ao longo do processo",highlight:"Seu plano. Sua rotina. Seus objetivos."
    },
    trust:{oneTitle:"100% Personalizado",oneText:"Estratégias criadas considerando sua rotina e seus objetivos.",twoTitle:"Acompanhamento",twoText:"Você não precisa fazer tudo sozinho.",threeTitle:"Vida Real",threeText:"Nutrição pensada para funcionar fora do papel.",fourTitle:"Sem Extremismos",fourText:"Equilíbrio, consistência e sustentabilidade."},
    about:{kicker:"SOBRE A JOZY",title:'Mais do que uma dieta. <span>Uma nova relação com a sua rotina.</span>',p1:"Eu sou Jozy, Nutrition Coach, e acredito que cuidar da alimentação não precisa significar viver seguindo regras impossíveis. Meu trabalho é ajudar você a construir uma rotina mais equilibrada através de estratégias que realmente façam sentido para sua vida.",p2:"Cada pessoa possui uma rotina, objetivos e desafios diferentes. Por isso, o acompanhamento é pensado de forma individual, respeitando suas necessidades e ajudando você a construir mudanças que possam permanecer no longo prazo.",cta:"Quero conversar com a Jozy"},
    fit:{kicker:"FEITO PARA A VIDA REAL",title:'O acompanhamento da Jozy <span>pode ser para você se...</span>',c1t:"Você começa e desiste",c1p:"Já tentou mudar sua alimentação várias vezes, mas tem dificuldade em manter os novos hábitos.",c2t:"Sua rotina é corrida",c2p:"Você precisa de estratégias que funcionem no mundo real.",c3t:"Está cansado de extremos",c3p:"Não quer viver preso a dietas extremamente restritivas.",c4t:"Quer mais organização",c4p:"Deseja entender melhor como estruturar alimentação e rotina.",c5t:"Quer acompanhamento",c5p:"Prefere ter orientação durante o processo em vez de tentar descobrir tudo sozinho.",c6t:"Busca consistência",c6p:"Seu objetivo é construir resultados através de hábitos sustentáveis."},
    process:{kicker:"COMO FUNCIONA",title:'Seu acompanhamento <span>em 4 passos</span>',subtitle:"Um processo simples, humano e ajustável — construído para evoluir junto com você.",s1t:"Conversamos",s1p:"Você conta sobre sua rotina, objetivos, dificuldades e o que deseja mudar.",s2t:"Criamos uma estratégia",s2p:"A Jozy organiza um direcionamento personalizado considerando sua realidade.",s3t:"Colocamos em prática",s3p:"Você começa a aplicar pequenas mudanças de forma progressiva.",s4t:"Acompanhamos sua evolução",s4p:"O processo é ajustado conforme sua experiência e evolução."},
    services:{kicker:"SERVIÇOS",title:'Escolha um caminho que <span>faça sentido para você.</span>',recommended:"DESTAQUE",s1p:"Acompanhamento individual voltado para criação de hábitos, organização da rotina e desenvolvimento de uma relação mais consciente com alimentação e estilo de vida.",s1cta:"Quero saber mais",s2t:"Acompanhamento Online",s2p:"Tenha orientação mesmo estando em outra cidade ou país.",s2cta:"Falar pelo WhatsApp",s3t:"Mudança de Hábitos",s3p:"Estratégias para tornar escolhas saudáveis mais simples e consistentes.",s3cta:"Começar agora",note:"Consulte disponibilidade e valores pelo WhatsApp."},
    benefits:{kicker:"BENEFÍCIOS",title:'Um processo pensado <span>para a vida real</span>',text:"Menos perfeição. Mais clareza, autonomia e estratégias possíveis de sustentar no seu dia a dia.",cta:"Quero entender melhor",b1:"Estratégias personalizadas",b2:"Organização alimentar",b3:"Educação nutricional",b4:"Desenvolvimento de hábitos",b5:"Planejamento",b6:"Acompanhamento",b7:"Metas realistas",b8:"Consistência",b9:"Autonomia",b10:"Qualidade de vida"},
    results:{kicker:"RESULTADOS",title:'Histórias de quem <span>decidiu mudar</span>'},
    motivation:{kicker:"UM PASSO DE CADA VEZ",title:"Você não precisa mudar tudo de uma vez.",text:"Mudanças consistentes começam com decisões pequenas que você consegue repetir.",cta:"Quero dar o primeiro passo"},
    faq:{title:'Perguntas frequentes, <span>respostas claras.</span>',subtitle:"Se ainda tiver alguma dúvida, fale diretamente com a Jozy pelo WhatsApp.",cta:"Tirar uma dúvida",q1:"Preciso seguir uma dieta extremamente restritiva?",a1:"O objetivo é desenvolver estratégias sustentáveis e adaptadas à sua rotina. O acompanhamento não deve transformar alimentação em sofrimento ou punição.",q2:"O atendimento pode ser online?",a2:"Sim. O acompanhamento pode ser realizado online, permitindo atendimento independentemente da sua localização.",q3:"Como faço para começar?",a3:"Clique em qualquer botão de WhatsApp do site e converse diretamente com a Jozy.",q4:"O acompanhamento é personalizado?",a4:"Sim. O direcionamento considera objetivos, rotina e necessidades individuais.",q5:"Como descubro os valores?",a5:"Entre em contato diretamente pelo WhatsApp para verificar modalidades, valores e disponibilidade."},
    contact:{kicker:"CONTATO",title:'Vamos conversar sobre <span>o próximo passo?</span>',text:"Conte um pouco sobre o que você busca. Se preferir, fale diretamente pelo WhatsApp.",whatsappHint:"Resposta direta com a Jozy"},
    form:{name:"Nome",goal:"Objetivo",goalPlaceholder:"Ex.: melhorar minha rotina alimentar",message:"Mensagem",messagePlaceholder:"Conte brevemente como a Jozy pode ajudar.",send:"Enviar mensagem",prefer:"Prefiro conversar pelo WhatsApp",sent:"Mensagem preparada! Você pode conectar este formulário ao seu backend ou serviço de e-mail."},
    final:{kicker:"SEU PRÓXIMO PASSO",title:"O próximo capítulo da sua rotina pode começar hoje.",text:"Converse com a Jozy e descubra como um acompanhamento personalizado pode ajudar você a construir hábitos mais saudáveis e sustentáveis.",cta:"Conversar com a Jozy no WhatsApp"},
    footer:{tagline:"Hábitos possíveis. Rotina mais leve. Mudanças que fazem sentido.",navigation:"Navegação",legal:"Legal",privacy:"Política de Privacidade",terms:"Termos",social:"Redes",copy:"© 2026 Jozy Nutrition Coach. Todos os direitos reservados."},
    whatsapp:{float:"Fale com a Jozy",message:"Olá, Jozy! Conheci seu trabalho através do seu site e gostaria de saber mais sobre o acompanhamento nutricional."}
  },
  "en-US": {
    seo:{title:"Jozy Nutrition Coach | Healthy habits for real life",description:"Personalized nutrition coaching with Jozy to help you build healthier habits, improve your routine and create sustainable lifestyle changes."},
    nav:{home:"Home",about:"About",how:"How It Works",services:"Services",results:"Results",contact:"Contact",talk:"Talk to Jozy"},
    hero:{
      tag:"NUTRITION • HEALTH • RESULTS",
      title:'Your best version starts with <span>habits you can actually maintain.</span>',
      description:"Personalized nutrition coaching for people who want to improve their eating habits, build a healthier lifestyle and achieve real results without turning food into a daily struggle.",
      primary:"Start my transformation",secondary:"Discover the coaching",
      check1:"Personalized guidance",check2:"Strategies adapted to your lifestyle",check3:"Ongoing support",check4:"Focus on sustainable habits",
      float1:"Personalized plan",floatSub1:"built around your routine",float2:"Sustainable habits",floatSub2:"steps that work in real life",float3:"Ongoing support",floatSub3:"guidance throughout the process",highlight:"Your plan. Your routine. Your goals."
    },
    trust:{oneTitle:"100% Personalized",oneText:"Strategies designed around your routine and goals.",twoTitle:"Ongoing Support",twoText:"You do not have to figure everything out alone.",threeTitle:"Real Life",threeText:"Nutrition designed to work beyond the plan.",fourTitle:"No Extremes",fourText:"Balance, consistency and sustainability."},
    about:{kicker:"ABOUT JOZY",title:'More than a diet. <span>A better relationship with your routine.</span>',p1:"I'm Jozy, a Nutrition Coach, and I believe improving your nutrition shouldn't mean living under impossible rules. My goal is to help you build a healthier and more balanced lifestyle through strategies that actually fit your life.",p2:"Everyone has a different routine, goals and challenges. That is why the coaching is personalized, respecting your needs and helping you build changes you can maintain over time.",cta:"Talk to Jozy"},
    fit:{kicker:"BUILT FOR REAL LIFE",title:'Jozy’s coaching <span>may be right for you if...</span>',c1t:"You start and stop",c1p:"You have tried changing your eating habits several times but struggle to stay consistent.",c2t:"Your routine is busy",c2p:"You need strategies that actually work in the real world.",c3t:"You are tired of extremes",c3p:"You do not want to live trapped in overly restrictive diets.",c4t:"You want more structure",c4p:"You want to better understand how to organize your meals and routine.",c5t:"You want support",c5p:"You prefer guidance throughout the process rather than figuring everything out alone.",c6t:"You want consistency",c6p:"Your goal is to build progress through sustainable habits."},
    process:{kicker:"HOW IT WORKS",title:'Your coaching journey <span>in 4 steps</span>',subtitle:"A simple, human and adaptable process designed to evolve with you.",s1t:"We talk",s1p:"You share your routine, goals, challenges and what you want to change.",s2t:"We create a strategy",s2p:"Jozy organizes personalized guidance based on your real life.",s3t:"We put it into practice",s3p:"You begin applying small changes progressively.",s4t:"We follow your progress",s4p:"The process is adjusted based on your experience and progress."},
    services:{kicker:"SERVICES",title:'Choose a path that <span>fits your life.</span>',recommended:"FEATURED",s1p:"Individual coaching focused on building habits, organizing your routine and developing a more mindful relationship with food and lifestyle.",s1cta:"Learn more",s2t:"Online Coaching",s2p:"Get guidance even if you live in another city or country.",s2cta:"Talk on WhatsApp",s3t:"Habit Change",s3p:"Strategies that make healthier choices simpler and more consistent.",s3cta:"Start now",note:"Ask about availability and pricing on WhatsApp."},
    benefits:{kicker:"BENEFITS",title:'A process designed <span>for real life</span>',text:"Less perfection. More clarity, autonomy and strategies you can actually sustain in everyday life.",cta:"Learn more",b1:"Personalized strategies",b2:"Meal organization",b3:"Nutrition education",b4:"Habit development",b5:"Planning",b6:"Ongoing support",b7:"Realistic goals",b8:"Consistency",b9:"Autonomy",b10:"Quality of life"},
    results:{kicker:"RESULTS",title:'Stories from people who <span>decided to change</span>'},
    motivation:{kicker:"ONE STEP AT A TIME",title:"You do not need to change everything at once.",text:"Consistent change starts with small decisions you can repeat.",cta:"Take the first step"},
    faq:{title:'Frequently asked questions, <span>clear answers.</span>',subtitle:"If you still have questions, talk directly with Jozy on WhatsApp.",cta:"Ask a question",q1:"Do I need to follow an extremely restrictive diet?",a1:"The goal is to develop sustainable strategies adapted to your routine. Coaching should not turn food into suffering or punishment.",q2:"Can the coaching be online?",a2:"Yes. Coaching can be done online, allowing support regardless of your location.",q3:"How do I get started?",a3:"Click any WhatsApp button on the website and talk directly with Jozy.",q4:"Is the coaching personalized?",a4:"Yes. Guidance considers your goals, routine and individual needs.",q5:"How can I find out the pricing?",a5:"Contact Jozy directly on WhatsApp to check options, pricing and availability."},
    contact:{kicker:"CONTACT",title:'Let’s talk about <span>your next step.</span>',text:"Tell us a little about what you are looking for. If you prefer, contact Jozy directly on WhatsApp.",whatsappHint:"Direct conversation with Jozy"},
    form:{name:"Name",goal:"Goal",goalPlaceholder:"E.g. improve my eating routine",message:"Message",messagePlaceholder:"Briefly tell Jozy how she can help.",send:"Send message",prefer:"I prefer to talk on WhatsApp",sent:"Message prepared! You can connect this form to your backend or email service."},
    final:{kicker:"YOUR NEXT STEP",title:"The next chapter of your journey can start today.",text:"Talk to Jozy and discover how personalized nutrition coaching can help you build healthier and more sustainable habits.",cta:"Talk to Jozy on WhatsApp"},
    footer:{tagline:"Practical habits. A lighter routine. Changes that make sense.",navigation:"Navigation",legal:"Legal",privacy:"Privacy Policy",terms:"Terms",social:"Social",copy:"© 2026 Jozy Nutrition Coach. All rights reserved."},
    whatsapp:{float:"Talk to Jozy",message:"Hi Jozy! I found your website and I'd like to learn more about your nutrition coaching."}
  }
};

function valueAt(obj, path) { return path.split(".").reduce((acc, key) => acc?.[key], obj); }

let locale = localStorage.getItem("jozy_locale") || "pt-BR";
let theme = localStorage.getItem("jozy_theme") || "dark";

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("jozy_theme", theme);
}

function applyLanguage() {
  const dict = translations[locale];
  document.documentElement.lang = locale;
  document.title = dict.seo.title;
  document.querySelector('meta[name="description"]').setAttribute("content", dict.seo.description);
  document.querySelector('meta[property="og:title"]').setAttribute("content", dict.seo.title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", dict.seo.description);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = valueAt(dict, el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = valueAt(dict, el.dataset.i18nHtml);
    if (typeof v === "string") el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = valueAt(dict, el.dataset.i18nPlaceholder);
    if (typeof v === "string") el.placeholder = v;
  });
  document.querySelectorAll(".lang").forEach(el => el.classList.toggle("active", (locale === "pt-BR" && el.dataset.lang === "pt") || (locale === "en-US" && el.dataset.lang === "en")));
  localStorage.setItem("jozy_locale", locale);
  refreshWhatsAppLinks();
}

function refreshWhatsAppLinks() {
  const message = encodeURIComponent(translations[locale].whatsapp.message);
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

applyTheme();
applyLanguage();

const header = document.getElementById("siteHeader");
const progress = document.getElementById("sectionProgress");
const backTop = document.getElementById("backTop");

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  backTop.classList.toggle("visible", y > 500);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? (y / max) * 100 : 0}%`;
}
window.addEventListener("scroll", onScroll, {passive:true});
onScroll();

document.getElementById("themeToggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
});
document.getElementById("languageToggle").addEventListener("click", () => {
  locale = locale === "pt-BR" ? "en-US" : "pt-BR";
  applyLanguage();
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded","false");
}));

backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
},{rootMargin:"-35% 0px -55% 0px", threshold:0});
sections.forEach(s => sectionObserver.observe(s));

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = translations[locale].form.sent;
});

const testimonials = []; // Cadastre depoimentos reais aqui no futuro.
// Exemplo de estrutura:
// { name:"Nome", text:"Depoimento autorizado", rating:5, date:"2026-08-20", photo:"assets/cliente.webp" }

if (testimonials.length) {
  const section = document.getElementById("resultados");
  const grid = document.getElementById("testimonialsGrid");
  section.hidden = false;
  section.dataset.results = "filled";
  grid.innerHTML = testimonials.map(item => `
    <article class="feature-card">
      <strong>${item.name}</strong>
      <p>${item.text}</p>
      <small>${"★".repeat(item.rating || 5)} ${item.date || ""}</small>
    </article>
  `).join("");
}
