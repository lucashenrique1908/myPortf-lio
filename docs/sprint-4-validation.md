# Sprint 4 — Client Experience

Implementação realizada na working tree de `feature/LPORT-35-44-client-experience`.

## Entregas

| Task | Entrega |
| --- | --- |
| LPORT-35 | ClientHero próprio, com título em três linhas e âncoras Ver meu trabalho e Solicitar orçamento. |
| LPORT-36 | Seis serviços confirmados em services.js, renderizados por map. |
| LPORT-37 | Dois projetos reais em projects.js, com URLs puras e ProjectCard compartilhado. |
| LPORT-38 | Conversation, Planning, Development e Delivery em clientProcess.js. |
| LPORT-39 | HTML, CSS, JavaScript, React, Firebase e REST APIs, usando Tag. |
| LPORT-40 | About para clientes, limitado às informações profissionais fornecidas. |
| LPORT-41 | CTA comercial que informa a disponibilidade futura dos canais enquanto não houver contatos reais. |
| LPORT-42 | contact.js centraliza a configuração pendente de WhatsApp, email, LinkedIn e formulário. |
| LPORT-43 | ClientExperience compõe as sete seções e mantém VisitorModeSwitcher no header. |
| LPORT-44 | Build, lint, diff e validações de navegador concluídos. |

## Arquitetura

- `src/sections/client/` contém ClientHero, Services, ClientProjects, HowIWork, ClientTechStack, ClientAbout e ClientCTA.
- `ClientSection` reutiliza Container e SectionTitle, com título associado e destino de âncora focável. A composição das seções Client usa um layout próprio, sem refatorar as seções Recruiter.
- `src/data/client.js` reúne textos e tecnologias; `services.js` e `clientProcess.js` mantêm as listas. Nenhum sistema de tradução foi adicionado.
- `src/data/contact.js` mantém os quatro canais como null. Uma URL de formulário futura deverá apontar para um formulário funcional; não há endpoint, envio ou sucesso simulado.
- Os projetos profissionais continuam no arquivo de dados existente. Slug, category, description, technologies e image foram preparados; campos não confirmados permanecem null ou vazios.
- ProjectCard foi reutilizado com textos de links recebidos por props. Categoria, descrição e ações ausentes não geram elementos vazios. Seu comportamento anterior no Recruiter foi preservado.
- `ClientExperience.jsx` substitui o placeholder removido de `VisitorExperience.jsx`; Home apenas seleciona a experiência correspondente.
- `client.css` preserva os tokens, Space Grotesk, preto/branco, bordas e espaçamentos. O Hero limita o tamanho do título pela largura disponível. Reduced motion mantém a regra global existente de scroll e remove transições do Client.
- Nenhum Context, Provider, selector, switcher, seção Recruiter ou dependência foi alterado. A configuração de contato anterior do Recruiter permanece intacta.

## Pendências reais

- WhatsApp, email, LinkedIn e URL de formulário funcional. Nenhum contato pessoal foi inferido dos sites dos clientes.
- Categorias, descrições, tecnologias e imagens dos projetos profissionais não foram fornecidas e não são exibidas.
- Não há Case Studies, preços, métricas, depoimentos, resultados comerciais ou imagens fictícias.
- O CTA do Hero leva à seção de contato real. Nessa seção, não há botão de envio ou link comercial falso: aparece uma mensagem discreta de disponibilidade futura. A contratação por contato externo depende do preenchimento dos dados reais.
- Integração de formulário, currículo e tradução completa não fazem parte desta sprint.

## Qualidade

- `npm.cmd run build`: passou.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou, com os avisos habituais LF/CRLF do Windows.
- UTF-8 dos 51 arquivos JavaScript, JSX e CSS verificado, sem padrões de corrupção encontrados.
- Nenhuma dependência adicionada e nenhuma regra ESLint desabilitada.

## Testes de navegador realizados

Chrome headless via Playwright já disponível no cache local, sem instalação no projeto. Testes executados sobre o build servido por Vite preview local.

Larguras testadas: **375, 768, 1024 e 1440px**, com altura de 900px.

Em todas as larguras:

- Intro inicial, seleção de Client por Tab e Enter, seleção dos modos e reset passaram.
- Client tem um h1 e sete seções na ordem solicitada. Foram confirmados seis serviços, dois projetos, quatro etapas e seis tecnologias.
- Headings em ordem lógica e associações aria-labelledby válidas.
- Ver meu trabalho e Solicitar orçamento navegam por teclado para os destinos reais, com foco no destino e seção visível.
- Focus-visible dos links do Hero foi verificado.
- Projetos mostram somente os dois sites fornecidos. Sem imagens, descrições, listas de tecnologias vazias ou links de repositório inventados.
- Contato pendente não mostra links, botões de envio ou formulários falsos.
- Sem href vazio, href="#" ou sintaxe Markdown em links.
- Sem overflow horizontal nos headers, títulos, textos, botões, projetos, serviços, tags e processo. Capturas completas de 375 e 1440px foram também inspecionadas visualmente.
- Recruiter foi testado novamente: oito seções, projetos técnicos sem links ausentes, âncoras para projetos e currículo, foco e layout preservados.
- Trocas client → recruiter e recruiter → client passaram. Refresh preserva ambos os tipos. Escolher novamente remove a chave e mantém Intro após refresh.
- Valor inválido no localStorage retorna à Intro e é removido.
- Reduced motion desativa a animação inicial, scroll suave e transições Client, mantendo a navegação funcional.
- Nenhum texto corrompido no navegador.
- Nenhum erro JavaScript ou de console durante os cenários.

Também foi testado localStorage bloqueado: seleção de Client, troca para Recruiter e reset continuam funcionando em memória.

Contraste das combinações de texto do Design System foi calculado: entre **6:1 e 21:1** nas combinações verificadas, acima de 4,5:1. Não foi realizado teste com leitor de tela real nem teste de envio/contato externo, pois a integração está pendente.

## Estado de entrega

- Visitor Experience e Recruiter Experience continuam funcionando nos cenários acima.
- Branch mantida: `feature/LPORT-35-44-client-experience`.
- `main` permaneceu em `287af6681aa808e9d918e54d6eec12ea723416f8`.
- Nenhum git add, commit, push, merge ou deploy foi realizado.
- Alterações permanecem somente na working tree. O servidor preview usado nos testes é local e não constitui deploy.
