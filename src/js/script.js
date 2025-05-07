document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const sideMenu = document.getElementById('sideMenu');
    const mainContainer = document.querySelector('.main-container');
    let messageInterval;

    const fanNames = [
        "FURIOSO_1999", "Pantera Negra", "CS_Lover_BR", "FURIA_Raiz",
        "GamerApaixonado", "Torcedor_Fiel", "ProPlayer_SQN", "AwpNaVeia"
    ];

    const fanMessagesSamples = [
        "VAMOOOOOO FURIAAAAA! QUE JOGADA!",
        "art tá amassando hoje! 🔥🔥🔥",
        "Isso que é mira, KSCERATO!",
        "Meu coração não aguenta essa partida! 🤯",
        "FalleN mostrando porque é o verdadeiro!",
        "QUE BALA FOI ESSAAAA??? 😱",
        "A pantera tá solta no servidor!",
        "Não podemos perder esse round! #DIADEFURIA",
        "Alguém me dá um calmante, por favor!",
        "GANHAMOOOOOOS! É NOIS CARALHOOOO! 🏆",
        "Essa comunicação tá linda de ver!",
        "A torcida tá junto com vocês, time!",
        "AIAIAIAI QUE ROUND APERTADO!",
        "Confia no processo! #DIADEFURIA",
        "O adversário tá perdido!",
        "Que clutch insano do yuurih!",
        "Chegaram no Major voando!",
        "Essa Nuke tá sendo nossa!",
        "Dominando o bombsite!",
        "PRA CIMA DELES FURIA! 🖤💚"
    ];

    const fanColors = [
        'sender-color-1', 'sender-color-2', 'sender-color-3',
        'sender-color-4', 'sender-color-5', 'sender-color-6'
    ];

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function addMessage(sender, text, isUserMessage = false) {
        if (!chatMessages || !text.trim()) return;

        const messageElement = document.createElement('div');
        messageElement.classList.add('message');

        const contentElement = document.createElement('div');

        if (isUserMessage) {
            messageElement.classList.add('user-message');
        } else {
            messageElement.classList.add('fan-message');
            const senderElement = document.createElement('div');
            const senderColor = getRandomElement(fanColors);
            senderElement.classList.add('sender', senderColor);
            senderElement.textContent = sender;
            contentElement.appendChild(senderElement);
        }

        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.textContent = text;
        contentElement.appendChild(textElement);

        const timestampElement = document.createElement('div');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = getCurrentTime();
        contentElement.appendChild(timestampElement);

        messageElement.appendChild(contentElement);
        chatMessages.appendChild(messageElement);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addSimulatedMessage() {
        const senderName = getRandomElement(fanNames);
        const messageText = getRandomElement(fanMessagesSamples);
        addMessage(senderName, messageText, false);
    }

    function sendUserMessage() {
        const messageText = messageInput.value;
        addMessage("Você", messageText, true);
        messageInput.value = '';
    }

    sendButton.addEventListener('click', sendUserMessage);

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            sendUserMessage();
        }
    });

    setTimeout(addSimulatedMessage, 500);

    function startSimulation() {
        addSimulatedMessage();
        const randomInterval = Math.random() * 4000 + 1500;
        messageInterval = setTimeout(startSimulation, randomInterval);
    }

    setTimeout(startSimulation, 2000);

    if (hamburgerIcon && sideMenu && mainContainer) {
        hamburgerIcon.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            hamburgerIcon.classList.toggle('active');
            mainContainer.classList.toggle('main-content-shifted');
        });

        document.addEventListener('click', (event) => {
            if (!sideMenu.contains(event.target) && !hamburgerIcon.contains(event.target) && sideMenu.classList.contains('active')) {
                sideMenu.classList.remove('active');
                hamburgerIcon.classList.remove('active');
                mainContainer.classList.remove('main-content-shifted');
            }
        });
    }
}); 