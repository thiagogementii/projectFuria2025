# Chat da Torcida FURIA

Este projeto é uma simulação de uma interface de chat, inspirada no ambiente de transmissões ao vivo (como Twitch), voltada para a torcida da organização de e-sports FURIA.

## Funcionalidades Principais

*   **Player Incorporado:** Exibe uma transmissão ao vivo da Twitch (atualmente configurado para o canal `gaules`, mas pode ser alterado).
*   **Chat Simulado:** Mensagens de "fãs" (com nomes e conteúdo pré-definidos) aparecem automaticamente em intervalos aleatórios, simulando um chat ativo.
*   **Mensagens do Usuário:** Permite que o usuário digite e envie suas próprias mensagens para o chat.
*   **Menu Hambúrguer:** Um menu lateral acessível por um ícone no canto superior esquerdo, contendo:
    *   Links para as redes sociais oficiais da FURIA (Twitter/X, Facebook, Instagram, TikTok, Twitch).
    *   Link para a página "Formulário da FaFúria".
    *   Link para a página "Time CS".
*   **Página de Formulário (`form.html`):** Uma página separada com um formulário para coletar dados básicos e de interesse dos torcedores.
    *   Checkbox customizados para melhor apelo visual.
    *   *Nota:* A funcionalidade de envio do formulário não está implementada (requer backend).
*   **Página de Informações do Time (`team_cs.html`):** Uma página separada que exibe informações sobre o time de Counter-Strike da FURIA, organizada em abas:
    *   História
    *   Conquistas
    *   Elenco Atual
    *   Resultados Recentes
    *   *Nota:* As informações nesta página são estáticas e baseadas em dados coletados anteriormente.
*   **Layout Responsivo e de Tela Cheia:** As páginas principais (Chat/Stream, Formulário e Informações do Time) são projetadas para ocupar toda a tela do navegador e se ajustar a diferentes tamanhos de tela, garantindo uma experiência de visualização otimizada. O conteúdo interno das seções é rolável quando necessário.
*   **Estilização Consistente e Responsiva:** Usa variáveis CSS, Flexbox e outras técnicas CSS para manter um tema visual coeso em todas as páginas, com layouts que se adaptam a diferentes dispositivos e interações do usuário (como a abertura do menu lateral).

## Tecnologias Utilizadas

*   HTML5
*   CSS3
    *   Variáveis CSS (Custom Properties)
    *   Flexbox
*   JavaScript (Vanilla)
    *   Manipulação do DOM
    *   Event Listeners (click, keypress)
    *   `setTimeout` / `Math.random` para simulação
*   Font Awesome (para ícones)

## Estrutura de Arquivos

```
/
├── src/
│   ├── index (2).html      # Página principal do chat
│   ├── form.html           # Página do formulário
│   ├── team_cs.html        # Página de informações do time
│   ├── js/
│   │   ├── script.js         # Lógica principal (chat, menu)
│   │   └── team_cs.js        # Lógica das abas da página do time
│   └── style/
│       ├── style.css         # Estilos globais e do chat/menu
│       ├── form.css          # Estilos específicos do formulário
│       └── team_cs.css       # Estilos específicos da página do time
└── README.md               # Este arquivo
```

## Como Executar

1.  **Clone ou baixe o repositório (se aplicável).**
2.  **Abra o arquivo `src/index (2).html` em um navegador web moderno.**

**Observação Importante sobre o Player da Twitch:**

*   O player incorporado (`<iframe>`) da Twitch utiliza o parâmetro `parent` para especificar quais domínios têm permissão para exibir o conteúdo.
*   Atualmente, está configurado para `localhost` e `127.0.0.1`.
*   Se você abrir o arquivo `index (2).html` diretamente do seu sistema de arquivos (usando `file:///...`), o player da Twitch **provavelmente não carregará** devido às políticas de segurança da Twitch.
*   **Recomendação:** Para garantir que o player funcione corretamente, sirva os arquivos através de um servidor web local simples. Exemplos:
    *   Usando a extensão "Live Server" no VS Code.

## Limitações

*   O chat é uma simulação e não reflete interações em tempo real.
*   O envio do formulário na página `form.html` não está funcional, pois requer uma aplicação backend para processar os dados.
*   As informações na página `team_cs.html` são estáticas e podem precisar ser atualizadas manualmente. 