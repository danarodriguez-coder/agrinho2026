// ===========================================
// SCRIPT DO PROJETO AGRINHO 2026
// Funcionalidades: Gerador de dicas, botão vídeo, acessibilidade
// ===========================================

// 1. GERADOR DE DICAS SUSTENTÁVEIS (funcionalidade principal)
const listaDicas = [
    "💧 Use irrigação por gotejamento: economiza até 60% de água em comparação com aspersão.",
    "🌧️ Capture água da chuva com cisternas e use nos períodos de seca.",
    "🌾 Mantenha o solo coberto com palha: reduz evaporação e mantém a umidade.",
    "⏰ Irrigue sempre no início da manhã ou no final da tarde para evitar perda por calor.",
    "🔄 Reutilize água de lavagem de equipamentos ou de criação de peixes (aquaponia).",
    "📏 Calcule a necessidade real de água da sua plantação para evitar excessos.",
    "🚜 Utilize sensores de umidade do solo para irrigar somente quando necessário.",
    "🌱 Plante espécies adaptadas ao clima da sua região, que precisam de menos água.",
    "💦 Verifique vazamentos em canos e conexões: uma pequena goteira desperdiça litros por dia.",
    "🍅 Crie um sistema de reuso: água da pia tratada pode irrigar plantas ornamentais."
];

// Função para gerar dica aleatória
function gerarDicaSustentavel() {
    const indiceAleatorio = Math.floor(Math.random() * listaDicas.length);
    return listaDicas[indiceAleatorio];
}

// Capturar botão e elemento onde a dica será exibida
const botaoGerar = document.getElementById('botaoGerarDica');
const divDica = document.getElementById('dicaGerada');

if (botaoGerar) {
    botaoGerar.addEventListener('click', () => {
        const novaDica = gerarDicaSustentavel();
        divDica.innerHTML = `✨ ${novaDica} ✨`;
        // Pequeno efeito visual
        divDica.style.transform = 'scale(1.02)';
        setTimeout(() => {
            divDica.style.transform = 'scale(1)';
        }, 200);
    });
}

// 2. BOTÃO PARA EXIBIR VÍDEO SOBRE REUTILIZAÇÃO DA ÁGUA
const botaoVideo = document.getElementById('botaoVideo');
const videoContainer = document.getElementById('videoContainer');

if (botaoVideo && videoContainer) {
    botaoVideo.addEventListener('click', () => {
        if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
            videoContainer.style.display = 'block';
            botaoVideo.textContent = '🎬 Ocultar vídeo';
        } else {
            videoContainer.style.display = 'none';
            botaoVideo.textContent = '🎬 Ver vídeo sobre reutilização da água';
        }
    });
}

// 3. BOTÕES DE ACESSIBILIDADE (Aumentar/Diminuir Fonte + Alto Contraste)
// Configuração de fonte padrão
let tamanhoFonteAtual = 100; // em porcentagem

function aplicarTamanhoFonte() {
    document.body.style.fontSize = tamanhoFonteAtual + '%';
}

function aumentarFonte() {
    if (tamanhoFonteAtual < 150) { // limite máximo 150%
        tamanhoFonteAtual += 10;
        aplicarTamanhoFonte();
    }
}

function diminuirFonte() {
    if (tamanhoFonteAtual > 70) { // limite mínimo 70%
        tamanhoFonteAtual -= 10;
        aplicarTamanhoFonte();
    }
}

// Alto contraste
function toggleAltoContraste() {
    document.body.classList.toggle('alto-contraste');
}

// 4. PAINEL DE ACESSIBILIDADE (mostrar/esconder)
const botaoAcessibilidade = document.getElementById('acessibilidadeBotao');
const painel = document.getElementById('painelAcessibilidade');
const fecharPainel = document.getElementById('fecharPainel');

if (botaoAcessibilidade && painel) {
    botaoAcessibilidade.addEventListener('click', () => {
        painel.classList.toggle('mostrar');
    });
}

if (fecharPainel) {
    fecharPainel.addEventListener('click', () => {
        painel.classList.remove('mostrar');
    });
}

// Associar ações aos botões de acessibilidade
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');
const btnContraste = document.getElementById('altoContraste');

if (btnAumentar) btnAumentar.addEventListener('click', aumentarFonte);
if (btnDiminuir) btnDiminuir.addEventListener('click', diminuirFonte);
if (btnContraste) btnContraste.addEventListener('click', toggleAltoContraste);

// 5. Fechar painel clicando fora (opcional, melhoria de usabilidade)
document.addEventListener('click', function(event) {
    // Se o painel estiver aberto e o clique não foi no botão de acessibilidade nem dentro do painel
    if (painel && painel.classList.contains('mostrar')) {
        if (!botaoAcessibilidade.contains(event.target) && !painel.contains(event.target)) {
            painel.classList.remove('mostrar');
        }
    }
});

// Mensagem no console para indicar que o JS está funcionando
console.log('Site Agro Futuro carregado com sucesso! Funcionalidades ativas: Gerador de dicas, vídeo e acessibilidade.');
