# Sprint 3 — Recruiter Experience

Implementada na branch `feature/LPORT-25-34-recruiter-experience`, criada a partir do `develop` local. Trabalho ainda não commitado, enviado ou integrado. Nenhum deploy realizado.

## Entregas

| Task | Implementação |
| --- | --- |
| LPORT-25 | Hero com Front-End Developer, Portugal e âncoras para projetos e currículo. |
| LPORT-26 | About curto, baseado nas informações fornecidas. |
| LPORT-27 | Experiência freelance e links fornecidos de Medida Vibrante e Studio Cedro Marcenaria. |
| LPORT-28 | ProjectCard reutilizável e dados de GitHub Finder e CRM Sales, sem links ou tecnologias inventados. |
| LPORT-29 | Stack nas quatro categorias fornecidas, usando Tag. |
| LPORT-30 | Workflow com oito etapas, renderizado a partir de dados. |
| LPORT-31 | Currículo preparado para visualizar/baixar; mensagem de indisponibilidade enquanto a URL estiver pendente. |
| LPORT-32 | CTA final com configuração de email e LinkedIn, sem links fictícios. |
| LPORT-33 | RecruiterExperience compõe as oito sections; Home continua simples. |
| LPORT-34 | Build, lint, diff e testes de navegador concluídos. |

## Arquitetura

- `src/data/recruiter.js` reúne conteúdo, stack e configuração de currículo/contatos. A separação facilita uma futura versão PT/EN, sem adicionar sistema de tradução.
- `src/data/projects.js` mantém IDs, slugs e campos dos projetos técnicos, além dos projetos para clientes. Nenhuma rota de case study incompleto é apresentada como link funcional.
- `src/data/workflow.js` fornece os passos do processo.
- `RecruiterSection` reutiliza Container e SectionTitle para manter espaçamento e hierarquia. O Hero mantém composição própria.
- Button aceita `href` para renderizar links semânticos e continua renderizando buttons para ações. SectionTitle aceita um ID opcional para nomear as sections.
- Estilos ficam sob `.recruiter-experience`, com tokens existentes. A regra de reduced motion também desativa o scroll suave global já existente.
- Context, Provider, selector, switcher e layout da introdução não foram modificados. ClientExperience mantém seu conteúdo e comportamento anteriores.

## Pendências reais

- `recruiterProfile.resumeUrl`: arquivo ou URL real do currículo. Preferir um arquivo no mesmo domínio para que o atributo `download` funcione; em outro domínio, o servidor pode precisar enviar Content-Disposition apropriado. Para arquivos em public, considerar `import.meta.env.BASE_URL` ao configurar a URL no GitHub Pages.
- `recruiterProfile.email` e `recruiterProfile.linkedinUrl`: contatos pessoais reais.
- `developerProjects`: confirmar descrição, tecnologias, liveUrl e repositoryUrl de cada projeto técnico. Arrays de tecnologias vazios e URLs null são intencionais.
- Descrições dos dois projetos técnicos estão identificadas como apresentação provisória. Currículo e contatos mostram mensagens de indisponibilidade; não há controles falsos ou PDFs gerados.

## Validação

- `npm.cmd run build`: passou.
- `npm.cmd run lint`: passou.
- `git diff --check`: passou. Git apenas informou a conversão usual LF/CRLF nos arquivos modificados.
- Sem novas dependências ou regras ESLint desabilitadas.
- Chrome headless com Playwright disponível no cache local, sobre o build servido por Vite preview, sem instalar dependências no projeto.
- Larguras 375, 768, 1024 e 1440px, com altura de 900px: passaram.
- Sem overflow horizontal nos títulos, textos, links, botões, cards, tags e workflow. Capturas de 375 e 1440px inspecionadas visualmente.
- Um h1, sete h2 e oito sections na ordem solicitada.
- Seleção por teclado, foco visível, âncoras para projetos e currículo e destinos visíveis: passaram.
- Recruiter e client, refresh, troca nos dois sentidos, escolher novamente e limpeza de valor inválido no localStorage: passaram.
- localStorage bloqueado: seleção e troca continuam em memória.
- Reduced motion: animação da introdução, transições e scroll suave desativados; funcionalidade preservada.
- Nenhum link de currículo, contato ou projeto técnico aparece enquanto sua URL estiver ausente. Somente âncoras válidas e os dois sites fornecidos são exibidos.
- Nenhum erro JavaScript ou de console durante os cenários.
- Acessibilidade revisada por semântica, teclado, foco, cores do Design System e reduced motion. Não foi realizado teste com leitor de tela real.

## Antes do commit

Revisar o conteúdo profissional e as pendências acima. A interface permite concluir a sprint sem inventar essas informações, mas currículo, contatos e detalhes dos projetos precisam ser preenchidos antes da publicação profissional.

`main` permaneceu em `287af6681aa808e9d918e54d6eec12ea723416f8`. Nenhum merge, push ou deploy foi realizado. Um futuro PR deve ter `develop` como destino.
