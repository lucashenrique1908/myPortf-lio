# Sprint 6 — Motion e interação

Branch de trabalho: `feature/LPORT-55-64-animations-interaction`.

## Estratégia e arquitetura

CSS + IntersectionObserver atendem às interações desta sprint. Não há scroll complexo que justifique GSAP/ScrollTrigger, nem necessidade de uma biblioteca de animação de componentes. Nenhuma dependência foi adicionada; React, Vite e JavaScript permanecem.

- `src/styles/motion.css`: tokens, entrada, reveal, microinterações, marquee e regras de capacidade/reduced motion. Duração principal de 420ms, microinterações de 180ms, distância de 18px, stagger de 60ms e easing sem bounce. Em telas até 767px: 320ms e 10px.
- `src/hooks/useScrollReveal.js`: observa cada seção uma vez por montagem, deixa de observá-la após a entrada e limpa observer/listeners ao desmontar. O foco dentro da seção cancela sua animação. Preferências de movimento são acompanhadas em tempo real.
- `TextReveal`: um span por linha/título, preservando os headings sem duplicar texto para leitores de tela.
- `Marquee`: reutiliza o título profissional e as tecnologias Core de `src/data/recruiter.js`. Loop CSS de 32s com duas cópias visuais, um único texto acessível e botão Pausar/Retomar movimento.
- `PointerAccent`: uma instância no App, fora das rotas. Ref + requestAnimationFrame atualizam transform sem estado React por movimento. O contorno fica dentro de uma camada fixa recortada ao viewport e não intercepta cliques.
- A antiga animação `visitor-enter` foi substituída pela entrada centralizada, evitando animações sobrepostas na Intro.

## Tasks e aplicação dos efeitos

| Task | Implementação |
| --- | --- |
| LPORT-55 | Foundation CSS + hook e componentes em `components/animations`, sem bibliotecas novas. |
| LPORT-56 | Logo, label, heading e botões da Intro entram progressivamente. A seleção continua imediata. |
| LPORT-57 | Text reveal por linha nos Heroes Recruiter/Client e no título de cada case study. |
| LPORT-58 | Reveal por seção em RecruiterSection, ClientSection e CaseStudySection. |
| LPORT-59 | Card com translação de -3px em hover apropriado, mudança de borda e underline dos links. Focus-within também destaca a borda. |
| LPORT-60 | Hover refinado com underline nos botões dos Heroes e links dos case studies; hit-area imóvel. |
| LPORT-61 | Marquee entre Hero e demais seções, uma instância por experiência, com pausa explícita. |
| LPORT-62 | Contorno discreto complementar ao cursor nativo, com indicação de links/botões. |
| LPORT-63 | Regras de reduced motion, touch, viewport e cleanup. |
| LPORT-64 | Validação de navegação, interação, responsividade e comandos de qualidade. |

## Decisões deliberadas

- Sem efeito magnético: o hover CSS proporciona feedback sem listeners adicionais, movimento da área clicável ou lógica de pointer em cada botão.
- Sem atraso de saída da Intro: não se retém a seleção nem uma cópia da tela anterior. A entrada do Hero dá continuidade à troca imediata. A sequência visual da Intro termina em até 660ms no desktop, mas seus controles ficam disponíveis desde o início.
- Sem efeitos por letra, por pequeno elemento, tilt, 3D, partículas, bounce, gradientes ou scroll-jacking. Scroll nativo e âncoras existentes permanecem.
- SectionTitle entra junto com sua seção; não recebe uma segunda animação. O estado de projeto inexistente permanece estático.
- Marquee somente em Home/experiências. Case studies ficam focados em leitura, sem texto contínuo em movimento.
- Header, switcher, contatos pendentes e botões de navegação não recebem magnetismo ou novos deslocamentos.
- O cursor nativo nunca é escondido. O complemento desaparece ao navegar com Tab, sair do viewport, perder foco da janela ou alterar a visibilidade do documento.
- Nenhum conteúdo de projeto, tecnologia, responsabilidade, resultado ou URL foi alterado. Os links dos projetos continuam HTTPS puro, sem Markdown.

## Reduced motion, mobile e acessibilidade

- `prefers-reduced-motion: reduce` remove entradas/reveals, transições de cards e botões, cursor complementar e movimento do marquee. Scroll permanece auto.
- O marquee passa a uma lista visual estática com quebra de linha, sem a cópia extra nem controle de pausa desnecessário. O texto acessível continua único.
- O conteúdo das seções é visível por padrão: não depende de animação ou IntersectionObserver para aparecer. Sem suporte ao observer, a página permanece legível.
- Cursor somente com largura mínima de 1024px, hover disponível, pointer fine e sem preferência por redução. Eventos de touch/pen não o exibem. Touch/coarse não ativa translação de cards nem underline animado dos CTAs.
- Não há mudança de ordem de headings, nomes dos links, roles de botões, foco inicial ou armazenamento do VisitorContext. Focus-visible existente foi preservado; a pausa do marquee é um botão nativo acessível por teclado e touch.
- Paleta preto/branco e Space Grotesk preservadas. Não há leitura duplicada do texto em movimento: cópias visuais estão em aria-hidden e o texto acessível é separado.

## Performance e preservação

- Entradas usam opacity e transform; movimento contínuo do marquee usa transform via CSS, sem loop JavaScript.
- Cursor agenda no máximo um requestAnimationFrame pendente, sem ler geometria de layout ou provocar renderização React a cada pointermove. Não há atualização contínua de top/left.
- Observers e listeners de media query, foco, pointer, teclado e visibilidade têm cleanup. Nenhum listener de scroll foi adicionado.
- Package.json e lockfile não foram alterados. Router, basename, Vite base, localStorage, index.html e 404 SPA redirect preservados.

## Resultados de validação

- `npm.cmd run build`: passou. Bundle JavaScript de 256,58 kB (80,82 kB gzip) e CSS de 16,64 kB (3,57 kB gzip), conforme saída do Vite. Esses tamanhos não constituem um benchmark de FPS ou de dispositivos reais.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou, com os avisos usuais LF/CRLF do Windows.
- Chrome headless via Playwright já disponível no cache local; nenhuma instalação no projeto. Scripts e capturas temporários ficaram fora do repositório. Testes sobre o build servido localmente com fallback para o 404.html real, simulando o GitHub Pages.
- Matriz **375, 768, 1024 e 1440px**, altura de 900px, com movimento normal e com reduced motion: Intro, seleção por teclado, ambos os Heroes, troca de modo, reset, localStorage e refresh passaram.
- Todos os blocos de seção foram percorridos. Reveal executa uma vez por montagem; sair e retornar ao viewport não reinicia a animação. Opacidade final é 1; sem observer o conteúdo também fica visível.
- Cards: hover discreto com pointer fine, ausência de deslocamento em reduced motion/coarse e links internos funcionais. CTAs mantêm exatamente a mesma caixa antes/depois do hover.
- Marquee: animação CSS ativa no modo normal; Pausar/Retomar funciona por teclado e touch. Reduced motion remove a animação e o controle desnecessário. Conferida uma única representação acessível e cópias visuais em aria-hidden.
- Cursor: ativo somente nos desktops elegíveis, destaca links, some com Tab, ignora evento touch e não causa overflow na borda direita. Alterar reduced motion e redimensionar para menos de 1024px remove seu listener de pointermove.
- Touch/coarse em **375, 768, 1024 e 1440px**: seleção, pausa do marquee, abertura de case study e retorno passaram; sem cursor complementar ou translação de card.
- Quatro case studies e slug inexistente passaram em todas as larguras, com e sem reduced motion. Acesso direto e refresh preservam rota, dois parâmetros de query e hash após recuperação pelo 404 SPA redirect. Navegação Home → case study → Home mantém a experiência escolhida.
- Auditoria: um h1 por página, headings sem saltos de nível, aria-labelledby válido, ausência de href vazio/Markdown, navegação com Tab/Enter e focus-visible. Sem overflow horizontal do documento ou dos elementos de conteúdo; apenas a faixa visual do marquee é intencionalmente recortada.
- Mudança de prefers-reduced-motion durante a sessão remove as animações em execução. No modo reduzido, nenhuma animação em execução foi encontrada pela API de animações do navegador.
- Instrumentação de cleanup: cinco ciclos recruiter → client → reset deixam zero alvos observados e um único listener de pointermove no desktop; reduced motion e viewport menor deixam zero listeners de pointermove. Não houve acúmulo nas trocas.
- Fallbacks: com IntersectionObserver ausente e localStorage bloqueado, seleção, troca e reset permanecem funcionais e o conteúdo fica visível.
- Nenhum erro JavaScript ou warning de console nos cenários. Respostas HTTP 404 esperadas da simulação de navegação direta foram tratadas separadamente.
- Capturas de Recruiter em 375px e Client em 1440px e 375px/reduced motion foram inspecionadas visualmente, preservando a tipografia e a estética minimalista.
- Não houve teste em dispositivo físico, leitor de tela real ou múltiplos motores de navegador. A validação de motion/performance cobre comportamento, tamanho de build e cleanup, sem alegar uma medição de Core Web Vitals ou FPS.

## Estado de entrega

- Nenhum commit, push, merge, deploy ou staging realizado.
- Alterações somente na working tree da branch solicitada.
- `main` preservada em `287af6681aa808e9d918e54d6eec12ea723416f8`.
- `develop` preservada em `9b0a524bd9e75277851b424e4e2914fad69f9c56`.
- Servidor de validação exclusivamente local; não constitui deploy.
