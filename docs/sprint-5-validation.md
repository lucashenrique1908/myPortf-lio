# Sprint 5 — Projects e Case Studies

Implementação na working tree de `feature/LPORT-45-54-project-case-studies`.

## Tasks implementadas

| Task | Entrega |
| --- | --- |
| LPORT-45 | Dados detalhados compartilhados, campos pendentes vazios e exportação agregada `projects`. |
| LPORT-46 | Resolução por `useParams` na rota existente, projeto inexistente e retorno seguro ao portfólio. |
| LPORT-47 | `ProjectCaseStudy` reutilizável, com seções condicionais e HTML semântico. |
| LPORT-48 | Medida Vibrante com descrição, funcionalidades, tecnologias e URL confirmadas. |
| LPORT-49 | Studio Cedro Marcenaria com descrição, React, Vite e URL confirmados. |
| LPORT-50 | GitHub Finder com os dados existentes, sem stack ou funcionalidades presumidas. |
| LPORT-51 | CRM Sales com objetivo, fluxo e escopo explicitamente planejado. |
| LPORT-52 | ProjectCard compartilhado com Link interno, preservando as ações e labels dos dois modos. |
| LPORT-53 | CSS responsivo, foco, headings, seções identificadas e reduced motion. |
| LPORT-54 | Build, lint, revisão do diff e registro de validação. |

## Arquitetura

- `src/data/projects.js` preserva IDs, slugs, grupos e URLs anteriores. Os campos comuns incluem summary, role, problem, solution, challenges, result, image, screenshots e clientType. `features` guarda funcionalidades confirmadas; `plannedScope` guarda somente planejamento.
- `src/pages/Project.jsx` usa a rota `/project/:slug` existente e a coleção agregada. A página ajusta o título do documento e move o foco para o h1 ao entrar. O retorno usa `Link to="/"`, inclusive em acessos diretos sem histórico prévio no portfólio.
- `src/components/common/ProjectCaseStudy/ProjectCaseStudy.jsx` compõe hero e seções com conteúdo. Reutiliza Button, Tag e SectionTitle; a página reutiliza Container. Arrays vazios e textos ausentes não geram seções.
- `src/styles/project.css` usa os tokens preto/branco, tipografia local, grid e espaçamentos existentes. Não há animações novas.
- Imagens futuras usam `{ src, alt }`; screenshots usam um array desse formato. Nenhuma imagem é exibida sem ambos os campos preenchidos. Não foram adicionadas imagens ou placeholders.
- ProjectCard continua único, com os textos de live/repository recebidos por props. Links internos usam React Router; links externos continuam sendo âncoras.
- App, BrowserRouter, basename `/myPortf-lio`, Vite base, index.html e public/404.html foram preservados. O slug anterior de Studio Cedro permanece `studio-cedro`.
- VisitorContext, VisitorProvider, VisitorModeSwitcher, IntroExperience, RecruiterExperience e ClientExperience não foram alterados.

## Conteúdo confirmado e pendências

As informações novas vêm exclusivamente do enunciado da sprint; as anteriores vêm dos dados existentes no repositório.

- Medida Vibrante: projeto real para empresa de climatização; HTML, CSS e JavaScript; formulário com validação de NIF e telefone, galeria, avaliações, tema claro/escuro e zonas atendidas. URL preservada: https://medidavibrante.com/.
- Studio Cedro Marcenaria: projeto real de site profissional de marcenaria com React e Vite. URL preservada: https://www.studiocedromarcenaria.com/.
- GitHub Finder: nome, slug, categoria e texto provisório existentes. Tecnologias, funcionalidades, URLs e informações técnicas permanecem pendentes.
- CRM Sales: objetivo de CRM para vendedores e gestores e fluxo Lead → contato → negociação → ganho/perdido. MVP, autenticação, permissões e métricas aparecem como previstos/planejados. Node.js e MongoDB estão apenas no escopo planejado, fora da lista de tecnologias implementadas. O texto avisa que a implementação não está confirmada.
- Para todos: responsabilidades individuais, problemas do cliente, soluções para problemas específicos, desafios, resultados, repositórios e imagens permanecem null ou arrays vazios onde não há confirmação. As seções correspondentes são omitidas.
- Nenhuma métrica, resultado comercial, depoimento, desafio ou responsabilidade foi inventado. A referência à funcionalidade de avaliações não inclui depoimentos fabricados.

## Validação

- `npm.cmd run build`: passou.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou; somente avisos de conversão LF/CRLF do Windows.
- Nenhuma dependência instalada, nenhum TypeScript ou Figma utilizado.
- Chrome headless com Playwright já disponível no cache local, sem instalação. Script e capturas temporários ficaram fora do repositório. Testes executados sobre `dist`, com servidor estático local que devolve o `404.html` real para caminhos inexistentes, simulando a recuperação de rotas do GitHub Pages.
- Larguras **375, 768, 1024 e 1440px**, com altura de 900px: os quatro projetos e o slug inexistente passaram em todas. Acesso direto e refresh preservaram rota, query string com dois parâmetros e hash após o redirecionamento 404 → index.
- Cada página tem um único h1 e headings sem saltos de nível; todas as associações aria-labelledby apontam para IDs existentes. Nenhuma seção vazia, imagem falsa ou link com href vazio foi renderizado.
- Sem overflow horizontal nos elementos dos case studies, medido pelos limites de cada elemento, além da largura do documento. Medida Vibrante foi também inspecionado visualmente em capturas completas de 375 e 1440px.
- Navegação por Tab/Shift+Tab e Enter: foco visível no retorno e nos links de case study dos dois modos. Entrada no case study foca seu h1. O retorno determinístico funciona sem histórico prévio.
- Client e Recruiter: cards abrem os projetos corretos, retorno preserva visitorType, refresh mantém a experiência, troca de modos e reset funcionam. Dois cards por modo e um h1 por experiência; sem overflow do documento nas quatro larguras.
- Reduced motion: transições dos botões do case study em 0s e scrollBehavior em auto. Nenhuma animação adicionada.
- Contraste calculado dos tokens usados: texto secundário #a3a3a3 sobre preto aproximadamente 8,3:1; branco sobre #111 aproximadamente 18,9:1; branco/preto 21:1. Sem mudança de paleta.
- Nenhum erro JavaScript nos cenários. Respostas HTTP 404 de navegação são intencionais na simulação do GitHub Pages. Não foi realizado teste com leitor de tela real nem deploy para teste remoto.
- As duas URLs externas foram preservadas e renderizadas como links HTTPS. A tentativa de consulta HTTP HEAD falhou por conexão com o servidor remoto neste ambiente; disponibilidade externa não confirmada. Isso não demonstra indisponibilidade dos sites.

## Estado de entrega

- Nenhum commit, push, merge ou deploy realizado; nenhuma operação de staging realizada.
- Alterações somente na working tree da branch solicitada.
- `main` preservada em `287af6681aa808e9d918e54d6eec12ea723416f8`.
- `develop` preservada em `d6068a2b03d9b81b7f984f7f4f66c47da0546b4a`.
- O servidor usado na validação é exclusivamente local e não constitui deploy.
