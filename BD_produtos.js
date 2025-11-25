// ================================
// BANCO DE DADOS COMPLETO DE PRODUTOS
// ================================
const produtos = {

    // -------------------------
    // COMPUTADORES MONTADOS
    // -------------------------

    pc_ryzen7_3060: {
        nome: "PC Gamer Ryzen 7 5700X + RTX 3060 + 16GB + SSD 512GB",
        descricao: "Computador gamer potente com excelente performance para jogos AAA em 1080p e 1440p.",
        imagem: "assets/pc2.jpg",
        preco: "R$ 5.999,00"
    },

    pc_ryzen5_5060: {
        nome: "PC Gamer Ryzen 5 5500 + RTX 5060 + 16GB + SSD 480GB",
        descricao: "Setup gamer equilibrado com ótimo custo-benefício.",
        imagem: "assets/pc3.jpg",
        preco: "R$ 4.799,00"
    },

    pc_ryzen3_1650: {
        nome: "PC Gamer Ryzen 3 + GTX 1650 + 16GB + SSD 128GB",
        descricao: "Ideal para jogos competitivos e tarefas do dia a dia.",
        imagem: "assets/pc4.jpg",
        preco: "R$ 3.499,00"
    },

    pc_i5_10400f_rx6600: {
        nome: "PC Gamer i5-10400F + RX 6600 + 16GB + SSD 256GB",
        descricao: "Excelente desempenho em jogos atuais em Full HD.",
        imagem: "assets/pc5.jpg",
        preco: "R$ 4.399,00"
    },

    // -------------------------
    // PROCESSADORES
    // -------------------------

    ryzen5600: {
        nome: "Ryzen 5 5600",
        descricao: "Processador de 6 núcleos e 12 threads com ótimo desempenho em jogos.",
        imagem: "assets/Ryzen_55600.jpg",
        preco: "R$ 799,00"
    },

    intel12400f: {
        nome: "Intel Core i5-12400F",
        descricao: "6 núcleos de performance com excelente eficiência.",
        imagem: "assets/Intel5_12400F.jpg",
        preco: "R$ 999,00"
    },

    ryzen5800x3d: {
        nome: "Ryzen 7 5800X3D",
        descricao: "Um dos melhores processadores para jogos graças ao 3D V-Cache.",
        imagem: "assets/Ryzen_75800X3D.jpg",
        preco: "R$ 1.799,00"
    },

    intel13900k: {
        nome: "Intel Core i9-13900K",
        descricao: "Processador topo de linha para jogos e produtividade extrema.",
        imagem: "assets/Intel_i913900K.jpg",
        preco: "R$ 3.199,00"
    },

    ryzen4100: {
        nome: "Ryzen 3 4100",
        descricao: "Processador básico com bom desempenho em tarefas comuns.",
        imagem: "assets/Ryzen3_4100.jpg",
        preco: "R$ 349,00"
    },

    intel13700f: {
        nome: "Intel Core i7-13700F",
        descricao: "Ótimo desempenho para jogos e multitarefas.",
        imagem: "assets/Intel_i713700F.jpg",
        preco: "R$ 2.199,00"
    },

    ryzen7950x: {
        nome: "Ryzen 9 7950X",
        descricao: "Um dos processadores mais poderosos do mercado.",
        imagem: "assets/Ryzen_97950X.jpg",
        preco: "R$ 3.999,00"
    },

    intel12100f: {
        nome: "Intel Core i3-12100F",
        descricao: "Excelente custo-benefício para jogos competitivos.",
        imagem: "assets/Intel_i312100F.jpg",
        preco: "R$ 599,00"
    },

    // -------------------------
    // PLACAS-MÃE
    // -------------------------

    b550m_aorus: {
        nome: "Gigabyte B550M Aorus Elite",
        descricao: "Ótima placa-mãe AM4 para processadores Ryzen.",
        imagem: "assets/Gigabyte B550M Aorus Elite.jpg",
        preco: "R$ 749,00"
    },

    asus_x570_prime: {
        nome: "ASUS X570 Prime",
        descricao: "Placa-mãe premium para alto desempenho.",
        imagem: "assets/ASUS X570 Prime.jpg",
        preco: "R$ 1.299,00"
    },

    msi_b460m: {
        nome: "MSI B460M PRO-VDH WiFi",
        descricao: "Modelo custo-benefício para processadores Intel 10ª geração.",
        imagem: "assets/MSI B460M PRO-VDH WiFi.jpg",
        preco: "R$ 599,00"
    },

    b660m_ds3h: {
        nome: "Gigabyte B660M DS3H DDR4",
        descricao: "Excelente opção para Intel 12ª/13ª geração.",
        imagem: "assets/Gigabyte B660M DS3H DDR4.jpeg",
        preco: "R$ 899,00"
    },

    asus_a320m: {
        nome: "ASUS Prime A320M-K",
        descricao: "Placa-mãe básica para escritório e uso leve.",
        imagem: "assets/ASUS Prime A320M-K.jpg",
        preco: "R$ 349,00"
    },

    msi_z690a: {
        nome: "MSI PRO Z690-A DDR4",
        descricao: "Placa-mãe robusta para processadores Intel.",
        imagem: "assets/MSI PRO Z690-A DDR4.jpg",
        preco: "R$ 1.099,00"
    },

    b450m_gaming: {
        nome: "Gigabyte B450M Gaming",
        descricao: "Ótimo custo-benefício para PCs gamers AM4.",
        imagem: "assets/Gigabyte B450M Gaming.jpg",
        preco: "R$ 529,00"
    },

    h610m_hdv: {
        nome: "ASRock H610M-HDV/M.2",
        descricao: "Modelo básico compatível com Intel 12ª/13ª geração.",
        imagem: "assets/H610M-HDVM.2.png",
        preco: "R$ 479,00"
    },

    // -------------------------
    // PLACAS DE VÍDEO
    // -------------------------

    rtx3060: {
        nome: "GeForce RTX 3060 12GB",
        descricao: "Placa de vídeo excelente para 1080p/1440p.",
        imagem: "assets/GeForce_RTX3060_12GB.jpg",
        preco: "R$ 1.999,00"
    },

    rx6600_gpu: {
        nome: "AMD Radeon RX 6600 8GB",
        descricao: "Ótima performance para jogos competitivos.",
        imagem: "assets/AMD Radeon RX 6600 8GB.jpg",
        preco: "R$ 1.499,00"
    },

    gtx1650: {
        nome: "GeForce GTX 1650 4GB",
        descricao: "Placa simples para e-sports.",
        imagem: "assets/GeForce GTX 1650 4GB.jpg",
        preco: "R$ 899,00"
    },

    rtx4060: {
        nome: "GeForce RTX 4060 8GB",
        descricao: "Excelente eficiência e ótimo desempenho.",
        imagem: "assets/GeForce RTX 4060 8GB.jpg",
        preco: "R$ 2.199,00"
    },

    rx6700xt: {
        nome: "AMD Radeon RX 6700 XT",
        descricao: "Placa muito forte para jogos 1440p.",
        imagem: "assets/AMD Radeon RX 6700 XT.jpeg",
        preco: "R$ 2.499,00"
    },

    rtx3050: {
        nome: "GeForce RTX 3050 8GB",
        descricao: "Alternativa custo-benefício para 1080p.",
        imagem: "assets/GeForce RTX 3050 8GB2.jpg",
        preco: "R$ 1.399,00"
    },

    gtx1660s: {
        nome: "GeForce GTX 1660 Super",
        descricao: "Placa de vídeo clássica e muito eficiente.",
        imagem: "assets/GeForce GTX 1660 Super2.jpg",
        preco: "R$ 1.299,00"
    },

    rx550: {
        nome: "AMD Radeon RX 550 4GB",
        descricao: "Ideal para PCs de entrada.",
        imagem: "assets/AMD Radeon RX 550 4GB.jpg",
        preco: "R$ 399,00"
    }

};

// -------------------------------------------------------
// SISTEMA DE CARREGAMENTO DO PRODUTO
// -------------------------------------------------------
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const produto = produtos[id];

if (!produto) {
    document.body.innerHTML = `
    <div class="container text-center mt-5 pt-5">
        <h1 class="fw-bold text-danger">Produto não encontrado</h1>
        <a href="index.html" class="btn btn-primary mt-4">Voltar ao início</a>
    </div>
`;
} else {
    document.getElementById("nome").textContent = produto.nome;
    document.getElementById("descricao").textContent = produto.descricao;
    document.getElementById("preco").textContent = produto.preco;
    document.getElementById("img").src = produto.imagem;
}

if (produto.linkKabum) {
    document.getElementById("btnKabum").href = produto.linkKabum;
} else {
    document.getElementById("btnKabum").style.display = "none";
}

if (produto.linkAmazon) {
    document.getElementById("btnAmazon").href = produto.linkAmazon;
} else {
    document.getElementById("btnAmazon").style.display = "none";
}

if (produto.linkML) {
    document.getElementById("btnML").href = produto.linkML;
} else {
    document.getElementById("btnML").style.display = "none";
}
