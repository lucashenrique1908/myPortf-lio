# Sprint 7 — Português, Inglês e contato

Branch: `feature/LPORT-65-74-i18n-contact`.

## Entregas

| Task | Implementação |
| --- | --- |
| LPORT-65 | LanguageContext, LanguageProvider, useLanguage e dicionários PT/EN sem biblioteca externa. |
| LPORT-66 | Controle PT/EN compartilhado, com botões nativos, aria-pressed, focus-visible e atualização de html lang. |
| LPORT-67 | Intro, seleção de visitante e troca/reset de modo traduzidos, independentes do idioma. |
| LPORT-68 | Conteúdo Recruiter, cards, links, tecnologias, processo, currículo e contato traduzidos. |
| LPORT-69 | Conteúdo Client, Hero, serviços, processo, projetos e contato traduzidos. |
| LPORT-70 | Estrutura e conteúdo existente dos case studies traduzidos; fatos e planejamento preservados. |
| LPORT-71 | contactConfig como única configuração, com email, WhatsApp, LinkedIn e GitHub confirmados. |
| LPORT-72 | Formulário compartilhado com validação, estados acessíveis e preparação segura de mailto. |
| LPORT-73 | Persistência e integração de idioma com VisitorContext, projetos, motion, teclado e layouts. |
| LPORT-74 | Validação dos dados, formulário, navegação, build, lint e diff. |

## Arquitetura de i18n

- `src/context/LanguageContext.js` e `LanguageProvider.jsx` mantêm `language` como `pt` ou `en`. `src/hooks/useLanguage.js` expõe `{ language, setLanguage, copy }`.
- Chave de localStorage: `language`. Ausência, valor inválido ou erro de acesso usam `pt`; valores inválidos são substituídos pelo fallback quando a escrita é possível. Não há detecção automática de idioma do navegador.
- Falhas de leitura/escrita não impedem a troca em memória. Sem armazenamento, um refresh retorna ao fallback PT.
- `src/data/i18n/pt.js` e `en.js` centralizam textos, labels acessíveis, mensagens, serviços, processo e traduções dos projetos. `index.js` organiza os grupos de projetos pelos IDs existentes.
- PT reutiliza os dados-base e traduz os títulos anteriormente misturados em inglês. EN reutiliza IDs, nomes, URLs e tecnologias, sobrepondo apenas textos traduzidos. Não há condicionais de idioma espalhadas nos componentes.
- `LanguageProvider` envolve o VisitorProvider dentro do BrowserRouter existente. Cada contexto mantém sua própria chave; trocar idioma não altera `visitorType`, e resetar visitante não altera `language`.
- O switcher aparece na Intro, nos headers Recruiter/Client e na navegação Project, inclusive no estado de slug inexistente. Os botões têm nomes acessíveis Português/English, atributo lang próprio, aria-pressed e estado visual contrastante.
- O efeito de idioma atualiza `document.documentElement.lang` para `pt` ou `en`. O HTML estático começa em PT. Títulos de documento também são atualizados.
- A página Project separa o efeito de foco/scroll, dependente do slug, do efeito de título traduzido. Trocar idioma não refoca o h1 nem executa scroll de navegação.

## Componentes traduzidos

- IntroExperience, ExperienceLayout por props, VisitorSelector, VisitorModeSwitcher e LanguageSwitcher.
- RecruiterHero, About, Experience, DeveloperProjects, TechStack, DevelopmentWorkflow, Resume e RecruiterCTA.
- ClientHero, Services, ClientProjects, HowIWork, ClientTechStack, ClientAbout e ClientCTA.
- ProjectCard: descrição/categoria via dados localizados, labels de tecnologias e links, incluindo nome acessível do estudo de caso.
- Project e ProjectCaseStudy: navegação, seções condicionais, textos, categorias, funcionalidades e planejamento. Nomes de projetos não são traduzidos.
- Marquee: label acessível e Pausar/Retomar. O texto de tecnologias e o título Front-End Developer permanecem como nomes já confirmados. O estado de pausa não é reiniciado pela troca de idioma.
- ContactChannels e ContactForm: labels, instruções, pendências, validação e feedback.
- Container, Button, Tag, SectionTitle e TextReveal continuam genéricos, recebendo conteúdo traduzido sem lógica própria de idioma.

## Dados preservados

- `src/data/projects.js` não foi alterado. As URLs permanecem strings HTTPS puras: `https://medidavibrante.com/` e `https://www.studiocedromarcenaria.com/`.
- IDs, slugs, nomes, stack confirmada, URLs, campos pendentes e imagens permanecem iguais nos dois idiomas.
- Medida Vibrante continua limitado às funcionalidades confirmadas. Studio Cedro continua com React e Vite. GitHub Finder continua sem stack ou funcionalidades inventadas.
- No CRM, as cinco entradas de escopo continuam explicitamente planejadas. A tradução informa que a implementação não está confirmada; Node.js e MongoDB não entram na lista de tecnologias implementadas.
- Não foram acrescentados serviços, responsabilidades, problemas de clientes, desafios, métricas ou resultados.

## Configuração de contato

`src/data/contact.js` é a única fonte de configuração. Os campos duplicados de email/LinkedIn foram retirados de recruiterProfile e as CTAs usam ContactChannels compartilhado.

| Campo | Valor atual |
| --- | --- |
| email | Contato.emphenrique@gmail.com |
| linkedinUrl | https://linkedin.com/in/lucassouzadevfullstack/ |
| whatsappUrl | https://wa.me/351931844699 |
| githubUrl | https://github.com/lucashenrique1908 |
| formUrl | null |

Os quatro canais foram confirmados explicitamente pelo usuário nesta conversa. O número +351931844699 foi normalizado para o formato wa.me, sem o sinal +. O email foi mantido exatamente como fornecido. Links do template Vite/React não foram tratados como perfil pessoal. `formUrl` permanece null e reservado a um formulário externo funcional; não é endpoint de envio. Somente valores não-null geram links. Nenhum contato fictício foi preenchido.

## Formulário e limites reais

- ContactForm é reutilizado em Client e Recruiter. Campos: nome, email, assunto e mensagem, todos obrigatórios, com labels associados e autocomplete de nome/email.
- Validação cliente em `src/utils/contact.js`: espaços vazios, formato básico de email e limites de 100/254/150/3000 caracteres, respectivamente. O formulário usa noValidate para oferecer mensagens consistentes PT/EN, preservando os atributos required e type=email.
- Erros usam códigos estáveis; assim, trocar idioma traduz a mensagem sem apagar os valores. Há aria-invalid, aria-describedby por campo, foco no primeiro inválido e região de status aria-live polite.
- O botão de submit se chama Preparar mensagem/Prepare message. Após validação, prepara um email para Contato.emphenrique@gmail.com. O fallback para email null continua seguro: informa a ausência do destinatário e não abre um email vazio.
- `createContactMailto` gera subject e body com encodeURIComponent, incluindo nome, email do remetente e mensagem. Quebras de linha no assunto são normalizadas. A abertura é iniciada pela ação do usuário.
- O fallback requer um aplicativo/handler de email no dispositivo. O usuário precisa revisar e enviar por esse aplicativo. O site não verifica abertura, envio ou entrega e nunca afirma que a mensagem foi enviada.
- O comprimento máximo aceito por mailto varia entre clientes; os limites dos campos não garantem compatibilidade com todo aplicativo. Não há backend, API, chaves de serviço, EmailJS ou Formspree.
- Os dados do formulário ficam apenas no estado React: são preservados em erro, ao preparar uma mensagem e na troca de idioma. Não são gravados em localStorage e não persistem após refresh ou saída da experiência.
- O destinatário já está configurado. Enviar a mensagem continua sendo uma ação do visitante no seu aplicativo de email. A validação captura o mailto sem abrir aplicativos externos ou enviar mensagens; não houve teste de entrega ou de um handler de email real.

## Responsive, acessibilidade e motion

- `language-contact.css` acrescenta estilos ao design system existente. Controles PT/EN têm dimensões mínimas de 44px, estados visuais e foco explícito. Formulário em duas colunas nas telas maiores e uma coluna no mobile, sem larguras rígidas nos campos.
- Headings semânticos, labels, grupos e referências acessíveis preservados. Textos e bordas usam os tokens preto/branco existentes, sem depender apenas de cor para indicar erros.
- motion.css, useScrollReveal, PointerAccent e TextReveal não foram alterados. Marquee mantém seu comportamento e recebe apenas textos localizados.
- Router, basename, Vite base, script do 404 SPA redirect e armazenamento do visitante permanecem. index.html só recebeu o lang inicial PT e título legível.

## Resultados de validação

- `npm.cmd run build`: passou. JavaScript: 272,14 kB (85,54 kB gzip); CSS: 18,62 kB (3,89 kB gzip), conforme saída do Vite. Nenhuma dependência adicionada.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou, com os avisos usuais de conversão LF/CRLF no Windows.
- Dados: verificada paridade de estrutura/chaves PT/EN e preservação dos IDs, slugs, nomes, URLs, stack, campos factuais pendentes e imagens dos quatro projetos. As cinco entradas de planejamento do CRM continuam explicitamente planejadas em inglês; a stack implementada permanece vazia.
- Configuração: conferidos os quatro contatos fornecidos pelo usuário e formUrl null. Nas experiências, os quatro links aparecem com os destinos exatos, sem sintaxe Markdown e sem mensagem de canais indisponíveis.
- Utilitários de formulário: passaram casos de campos vazios/espaços, email inválido, limite de tamanho e destinatário ausente. Testada codificação PT/EN de assunto e corpo com acentos, quebras de linha, &, ?, #, + e %. Dados sintéticos usados somente nos scripts temporários de teste, nunca como configuração do portfólio.
- Chrome headless via Playwright já disponível no cache local, sem instalação. Testes sobre o build com servidor estático local usando o 404.html real para simular navegação direta do GitHub Pages. Scripts e capturas ficaram fora do repositório.
- Matriz **375, 768, 1024 e 1440px**, altura de 900px, em **PT e EN**: Intro, seleção e troca de experiência, headers, Heroes, cards, serviços, processo, currículo, contato e traduções passaram sem overflow horizontal.
- PT → EN e EN → PT: html lang e aria-pressed corretos; sem refresh. Refresh preserva idioma. Troca de visitorType, ida/volta de case study e reset do visitante mantêm language. O switcher da página Project mantém o foco ao alterar idioma.
- Formulário: submit vazio foca o primeiro inválido e apresenta quatro erros associados; email inválido é detectado. Valores e erros são preservados/traduzidos ao trocar idioma. O submit válido mantém os valores e prepara o destinatário real, assunto e corpo esperados.
- Para testar o submit sem abrir aplicativos externos, apenas a atribuição de navegação mailto foi substituída por uma captura no JavaScript servido pelo teste. O código da aplicação permanece com a abertura real por ação do usuário. A captura confirmou Contato.emphenrique@gmail.com como destinatário e preservação do texto Unicode. Nenhuma mensagem foi enviada.
- Quatro case studies e slug inexistente passaram em PT/EN nas quatro larguras. Acesso direto e refresh preservam rota, query com dois parâmetros e hash após redirecionamento 404. Títulos, tecnologias e links dos projetos foram comparados entre idiomas.
- Acessibilidade: navegação real com Tab/Enter, focus-visible, um h1 por página, headings sem saltos de nível, labels/required dos campos, aria-labelledby/aria-describedby válidos, aria-invalid e status aria-live. Nenhum href vazio ou Markdown. Textos ingleses foram inspecionados sem corte horizontal; o layout usa quebra de linha.
- Reduced motion e touch/coarse passaram nas quatro larguras. O modo reduzido não apresenta animações em execução, mantém scroll auto, oculta o cursor complementar e transforma o marquee em texto estático. Navegação por toque continua funcional após alterar a preferência; o teste aguarda o término do reveal antes do toque.
- Marquee: labels PT/EN e controles de pausa/retomada funcionam; trocar idioma mantém o estado de pausa. A estrutura e os estilos de motion existentes foram preservados.
- Fallbacks: idioma inválido retorna a PT sem alterar visitorType. Com localStorage bloqueado, idioma e modos continuam funcionando em memória; refresh retorna ao fallback PT.
- Nenhum erro JavaScript ou warning de console nos cenários finais. Respostas 404 esperadas na simulação foram tratadas separadamente.
- Capturas do formulário em inglês em 375 e 1440px foram inspecionadas visualmente. Cores, bordas, tipografia e foco usam o design system existente; os campos e mensagens permanecem legíveis.
- Limites: não houve envio de email, teste de entrega, abertura de WhatsApp, leitor de tela real ou dispositivo físico. Não foi verificada disponibilidade HTTP dos perfis externos; os destinos foram validados contra os dados confirmados.

## Estado de entrega

- Nenhum commit, push, merge, deploy ou staging realizado.
- Alterações somente na working tree da branch solicitada.
- `main` preservada em `287af6681aa808e9d918e54d6eec12ea723416f8`.
- `develop` preservada em `e86eee5c25a641e5ec4cd8a98c307103314148a5`.
- Servidores de validação usados apenas localmente, sem deploy.
