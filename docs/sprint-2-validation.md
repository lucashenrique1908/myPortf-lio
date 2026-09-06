# Sprint 2 — Visitor Experience

Validação realizada em 2026-09-06 na branch `feature/LPORT-17-visitor-context`.

## Qualidade

- `npm.cmd run build`: passou.
- `npm.cmd run lint`: passou, sem desabilitar regras.
- `git diff --check`: passou.
- Nenhuma dependência adicionada. Sem merge ou deploy.

## Navegador

Testes automatizados com Playwright disponível no cache local e Chrome headless, sem instalar dependências no projeto.

Os cenários abaixo passaram nas larguras 375, 768, 1024 e 1440px, com altura de 900px:

- Primeira visita mostra a introdução.
- Seleção de recruiter por Tab + Enter e client por Tab + Espaço.
- Persistência dos dois modos após refresh.
- Troca nos dois sentidos.
- Escolher novamente remove a chave `visitorType`; refresh mantém a introdução.
- Valor inválido no localStorage retorna à introdução e remove a chave inválida.
- Foco no título após mudar de experiência e foco visível nos botões.
- Sem overflow horizontal nos elementos principais, títulos, textos e botões, nas três experiências.
- Reduced motion desativa a animação e as transições dos botões, mantendo a seleção funcional.

Também passou o cenário com acesso ao localStorage bloqueado: seleção e troca continuam em memória, sem erros JavaScript. Nesse caso, a preferência não persiste após refresh.

Capturas da introdução em 375 e 1440px foram inspecionadas visualmente. As cores reutilizam os tokens preto, branco e cinza do Design System. A validação de acessibilidade incluiu semântica, teclado, foco e reduced motion; não incluiu teste com leitor de tela real.

## Arquitetura

- `VisitorContext.js` exporta apenas o contexto e `VisitorProvider.jsx` exporta o componente, mantendo compatibilidade com a regra de React Refresh.
- O Provider centraliza normalização, leitura inicial e sincronização do localStorage.
- Home apenas seleciona a experiência. Os componentes compartilham layout, Button, Container e tokens existentes.
- As experiências recruiter e client são provisórias; o Hero e as seções finais continuam fora desta sprint.
