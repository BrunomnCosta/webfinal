//// Selecting the search form
searchForm = document.querySelector('.search-form');

//// Toggle the 'active' class on the search form when the search button is clicked
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// Selecting the login form container
let loginForm = document.querySelector('.login-form-container');

// Toggle the 'active' class on the login form container when the login button is clicked
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

// Removing the 'active' class from the login form container when the close button is clicked
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

// Handling scroll event
window.onscroll = () =>{

    // Removing the 'active' class from the search form when scrolling
    searchForm.classList.remove('active');

    // Adding or removing the 'active' class from the header based on scroll position
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

// Handling window onload event
window.onload = () =>{

    // Removing the 'active' class from the search form on window load
    searchForm.classList.remove('active');

    // Adding or removing the 'active' or 'remove' class from the header based on scroll position on window load
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.add('remove');
    }

  // Calling the fadeOut function after a delay of 4000 milliseconds
  fadeOut();    
}

// Loader function
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

// Function to fade out loader
function fadeOut(){
  setTimeout(loader, 1500);
}

// Swiper sliders initialization (Books slider)
var swiper = new Swiper(".books-slider", {
  // Slider configuration options
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Swiper sliders initialization (Featured slider)
  var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Swiper sliders initialization (Arrivals slider)
  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Swiper sliders initialization (Reviews slider)
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true ,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Swiper sliders initialization (Blogs slider)
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true ,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


// estrelas  rating
// Espera até que o conteúdo da página esteja completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os elementos com a classe 'rating'
  const ratings = document.querySelectorAll('.rating');

  // Para cada elemento com a classe 'rating', executa o seguinte código
  ratings.forEach(function (rating) {
      // Seleciona todas as estrelas dentro do elemento 'rating'
      const stars = rating.querySelectorAll('.star');

      // Para cada estrela dentro do 'rating', adiciona um ouvinte de evento de clique
      stars.forEach(function (star) {
          star.addEventListener('click', function () {
              // Obtém o valor da classificação da estrela clicada
              const value = parseInt(star.getAttribute('data-value'));
              
              // Define o valor da classificação no atributo 'data-rating' do elemento 'rating'
              rating.setAttribute('data-rating', value);
              
              // Remove qualquer destaque anterior das estrelas
              resetStars(stars);
              
              // Destaca as estrelas até o valor da classificação atual
              highlightStars(rating, value);
          });
      });

      // Define as estrelas destacadas até o valor de classificação atual
      const currentRating = parseInt(rating.getAttribute('data-rating'));
      highlightStars(rating, currentRating);
  });
});

// Função para remover qualquer destaque anterior das estrelas
function resetStars(stars) {
  stars.forEach(function (star) {
      star.classList.remove('active');
  });
}

// Função para destacar as estrelas até um determinado valor
function highlightStars(rating, value) {
  // Seleciona todas as estrelas dentro do elemento 'rating'
  const stars = rating.querySelectorAll('.star');
  
  // Para cada estrela, destaca-a se o seu índice for menor que o valor da classificação
  stars.forEach(function (star, index) {
      if (index < value) {
          star.classList.add('active');
      }
  });
}

// Lista de livros
var livros = {
  "livro1": {
      "titulo": "L'Étranger",
      "autor": "Albert Camus",
      "ano": "1942",
      "genero": "Novel",
      "resumo": "Em nossa sociedade, qualquer homem que não chore no funeral de sua mãe corre o risco de ser condenado à morte."
  },
  "livro2": {
    "titulo": "À la recherche du temps perdu",
    "autor": "Marcel Proust",
    "ano": "1913",
    "genero": "Romance",
    "resumo": "Em busca do tempo perdido apresenta um mundo fictício desdobrado em dois tempos: tempo perdido e tempo redescoberto. O tempo perdido caracteriza-se pela sensação que o herói transmite de um tempo profundamente voltado para si mesmo e atado por fortes laços de lembranças e reconhecimento."
},
"livro3": {
  "titulo": "Der Prozess",
  "autor": "Franz Kafka",
  "ano": "1925",
  "genero": "Romance",
  "resumo": "É um romance do escritor checo Franz Kafka, que conta a história de Josef K., que acorda certa manhã, e é processado e sujeito a longo e incompreensível processo por um crime não especificado."
},
"livro4": {
  "titulo": "Le Petit Prince",
  "autor": "Antoine de Saint-Exupéry",
  "ano": "1943",
  "genero": "Novel",
  "resumo": "O pequeno príncipe é um clássico da literatura infantil que narra a amizade entre um menino e um piloto de avião. O principezinho vem do asteroide B 612, e encontra o piloto no deserto do Saara. A obra fala de amor, amizade e sobre a sabedoria infantil."
},
"livro5": {
  "titulo": "Voyage au bout de la nuit",
  "autor": "Louis-Ferdinand Céline",
  "ano": "1932",
  "genero": "Romance",
  "resumo": "Publicado no início da década de 30, este romance de Louis Ferdinand Céline, foi um soco no estômago, não só na literatura francesa, como na civilização, falando grosso modo. Se o uso de uma linguagem popular crua e obscena foi um choque, por outro lado, Céline não poupava nada nem ninguém. Bardamu, o narrador, anda pela Primeira Grande Guerra, por África, pela América, pelos bairros populares de Paris, descendo ao mais baixo das pessoas e das coisas. A mesquinhez embrutecida dos militares, os comerciantes que roubam para..."
},
"livro6": {
  "titulo": "The Grapes of Wrath",
  "autor": "John Steinbeck",
  "ano": "1939",
  "genero": "Romance",
  "resumo": "Na década de 1930, as grandes planícies do Texas e do Oklahoma foram assoladas por centenas de tempestades de poeira que causaram um desastre ecológico sem precedentes, agravaram os efeitos da Grande Depressão, deixaram cerca de meio milhão de americanos sem casa e provocaram o êxodo de muitos deles para oeste, rumo à Califórnia, em busca de trabalho. Quando os Joad perdem a quinta de que eram rendeiros no Oklahoma, juntam-se a milhares de outros ao longo das estradas, no sonho de conseguirem uma terra que possam considerar sua. E noite após noite, eles e os seus companheiros de desdita reinventam toda uma sociedade: escolhem-se líderes, redefinem-se códigos implícitos de generosidade, irrompem acessos de violência, de desejo brutal, de raiva assassina. Este romance que é universalmente considerado a obra-prima de John Steinbeck, publicado em 1939 e premiado com o Pulitzer em 1940, é o retrato épico do desapiedado conflito entre os poderosos e aqueles que nada têm, do modo como um homem pode reagir à injustiça, e também da força tranquila e estoica de uma mulher. As Vinhas da Ira é um marco da literatura mundial."
},
"livro7": {
  "titulo": "For Whom the Bell Tolls",
  "autor": "Ernest Hemingway",
  "ano": "1940",
  "genero": "Romance",
  "resumo": "Em 1937 Ernest Hemingway viajou para Madrid, com o intuito de aí realizar algumas reportagens sobre a resistência do governo legítimo de Espanha ao avanço dos revoltosos fascistas. Três anos mais tarde, concluiria a elaboração de um dos mais famosos romances sobre a Guerra Civil de Espanha, 'Por Quem os Sinos Dobram'. A história de Robert Jordan, um jovem americano das Brigadas Internacionais, membro de uma unidade guerrilheira que combate algures numa zona montanhosa, é um relato de coragem e lealdade, de amor e derrota, que acabou por constituir um dos mais belos romances de guerra do século XX. «Se a função de um escritor é revelar a realidade», escreveria o editor Maxwell Perkins em carta dirigida a Hemingway após ter concluído a leitura do seu manuscrito, <nunca ninguém o fez melhor do que você."
},
"livro8": {
  "titulo": "Le Grand Meaulnes",
  "autor": "Alain-Fournier",
  "ano": "1913",
  "genero": "Romance",
  "resumo": "«O Grande Meaulnes» é um dos raros romances mágicos nascidos na Europa. E a jovem morte de Alain-Fournier, desaparecido na frente de batalha da Primeira Guerra Mundial, acentuou o mistério que encolve este seu único livros.Nele um sonho vago e nítido parece deslizar através da vida, sensível aos seus ecos, mas irredutível aos seus apelos. Não se trata, porém, de um mundo artificial, mas de um quotidiano campestre, visto através de um olhar adolescente decidido a apagar a linha de separação entre a paisagem observada e a desejada, a ciência e a magia, a realidade e o sonho. Inspirada na infância do autor ao Sologne, na sua breve e intensa paixão por uma adolescente parisiense e no desespero da sua perda, «O Grande Meaulnes» é um romance de aventuras e descobertas, pleno de nostalgia da infância e dos desejos e paixões adolescentes. «Já que é impossível seguir Meaulnes fora do romance, só nos resta recomeçar a leitura do próprio livro», escreveu um dia o crítico Walter Johr."
},
"livro9": {
  "titulo": "L'Écume des jours",
  "autor": "Boris Vian",
  "ano": "1947",
  "genero": "Romance",
  "resumo": "«Chamaram-lhe, alguns, a obra-prima do autor. E num prefácio que andou durante muito tempo colado ao seu Arranca-corações, Raymond Queneau não hesitava perante um rótulo hierarquizante e audacioso: “o mais pungente dos romances de amor contemporâneos”. Nos anos sessenta, A Espuma dos Dias circulou com estas difíceis responsabilidades. Enfrentou-as mostrando a singularidade de um universo ainda não conhecido com tanto talento na literatura; que se comprazia a impor aos homens e aos objectos leis novas, interdependentes. De facto, os objectos que lá existiam tinham um comportamento emotivo e implacavelmente ligado aos estados de alma de quem os utilizava. O que já antes parecia sugerido por Edgar Allan Poe em 'A Queda da Casa Usher', assumia ali uma evidência despudorada que corria em dois sentidos, de sol e sombra, e nos informava muito mais sobre o interior das personagens do que qualquer alusão directa que o texto chegasse a fazer.»"
},
"livro10": {
  "titulo": "Brave New World",
  "autor": "Aldous Huxley",
  "ano": "1932",
  "genero": "Ficção Cientifica",
  "resumo": "Um clássico moderno, o romance distópico de Aldous Huxley é indispensável para quem busca leituras sobre autoritarismo, manipulação genética, ficção especulativa e outros temas que, embora tenham surgido com força durante a primeira metade do século XX, se tornam cada dia mais atuais. Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma 'reserva histórica' que preserva costumes de uma sociedade anterior - muito semelhante à do leitor - Bernard vai perceber as diferenças entre esta civilização e a sua - e a partir de um sentimento de inconformismo ele desafiará o mundo. A história de Bernard se passa em um ambiente em que a literatura, a música e o cinema só têm a função de solidificar a alienação. um universo que louva o avanço da técnica, a produção em série, a uniformidade contra a diversidade. Muitas das previsões de Huxley vieram a ser confirmadas anos mais tarde, como a tecnologia reprodutiva, as supostas técnicas de aprendizado durante o sono e a manipulação pelo condicionamento psicológico."
},
  // Adicione mais livros conforme necessário
};

function openModal(livroId) {
  var livro = livros[livroId];
  var modalContent = `
      <div class="modal-content">
          <span class="close" onclick="closeModal()">&times;</span>
          <h2>${livro.titulo}</h2>
          <p>Autor: ${livro.autor}</p>
          <p>Ano de Publicação: ${livro.ano}</p>
          <p>Gênero: ${livro.genero}</p>
          <p>Resumo: ${livro.resumo}</p>
          <!-- Adicione mais informações conforme necessário -->
      </div>
  `;
  // Coloca o conteúdo do modal dentro do elemento com id "myModal"
  document.getElementById("myModal").innerHTML = modalContent;
  // Exibe o modal
  document.getElementById("myModal").style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Função para fechar o modal quando clicar fora dele
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      closeModal();
  }
}
/*criar conta */
document.getElementById("create-account-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evita que o link direcione para outra página
  document.getElementById("login-form").style.display = "none";
  document.getElementById("create-account-form").style.display = "block";
});