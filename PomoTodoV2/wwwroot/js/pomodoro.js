let timerInterval; // Intervalo do temporizador
let isWorkTime = true; // Determina se é tempo de trabalho
let currentTime = 25 * 60; // Tempo inicial em segundos (25 minutos)
let cycles = 0; // Contador de ciclos
const alarmSound = document.getElementById("alarmSound"); // Obter referência ao som de alarme

function startPomodoro() {
    if (timerInterval) {
        console.log("O temporizador já está em execução!"); // Log se o temporizador já estiver em execução
        return; // Não iniciar se já estiver em execução
    }
    console.log("Iniciando o temporizador Pomodoro! Boa sorte!"); // Log ao iniciar
    timerInterval = setInterval(updateTimer, 1000); // Atualiza a cada segundo
}

function pausePomodoro() {
    clearInterval(timerInterval); // Para o temporizador
    timerInterval = null;
    console.log("Temporizador pausado."); // Log ao pausar
}

function resetPomodoro() {
    clearInterval(timerInterval); // Para o temporizador
    timerInterval = null;
    currentTime = 25 * 60; // Reseta para 25 minutos
    updateDisplay(currentTime); // Atualiza a exibição
    console.log("Temporizador resetado para 25 minutos."); // Log ao resetar
}

function updateTimer() {
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alarmSound.loop = true; // Faz o som tocar em loop
        alarmSound.play(); // Toca o som de alarme

        // Chama o alerta e aguarda o clique do usuário
        alertUser(); // Função para mostrar o alerta
        return;
    }
    currentTime--; // Decrementa o tempo
    updateDisplay(currentTime); // Atualiza a exibição

    // Log quando o tempo restante estiver abaixo de 1 minuto
    if (currentTime <= 60 && currentTime > 0) {
        console.log("Atenção! O tempo está quase acabando!");
    }
}

function alertUser() {
    alert("Tempo esgotado! É hora de fazer uma pausa ou voltar ao trabalho!"); // Alert quando o tempo chega a zero
    alarmSound.pause(); // Para o som
    alarmSound.currentTime = 0; // Reseta o som

    // Alterna entre trabalho e descanso
    isWorkTime = !isWorkTime;
    currentTime = isWorkTime ? 25 * 60 : getShortBreakDuration() * 60; // Define o tempo para o próximo ciclo
    cycles++;
    updateDisplay(currentTime); // Atualiza a exibição

    // Log ao final do ciclo
    console.log(isWorkTime ? "Hora de trabalhar novamente!" : "Hora do descanso!");
}

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("pomodoro-timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function getShortBreakDuration() {
    return parseInt(document.getElementById("shortBreakInput").value, 10);
}

function getLongBreakDuration() {
    return parseInt(document.getElementById("longBreakInput").value, 10);
}

// Função para pular diretamente para o momento do descanso
function skipToBreak() {
    clearInterval(timerInterval); // Para qualquer temporizador em execução
    timerInterval = null;

    isWorkTime = false; // Define como tempo de descanso
    cycles++; // Incrementa o ciclo

    // Decide a duração do descanso baseado no ciclo atual
    currentTime = (cycles % 4 === 0) ? getLongBreakDuration() * 60 : getShortBreakDuration() * 60;
    updateDisplay(currentTime); // Atualiza a exibição do temporizador
    console.log(`Iniciando um ${cycles % 4 === 0 ? 'long' : 'short'} break!`); // Log ao usuário
    startPomodoro(); // Inicia o temporizador para o descanso
}

function updateCurrentCycle() {
    const cycleSelector = document.getElementById("cycleSelector");
    cycles = parseInt(cycleSelector.value, 10);
}
