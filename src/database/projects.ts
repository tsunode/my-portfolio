import blogLogin from "../assets/images/projects/blog/Blog-login.png";
import blogMain from "../assets/images/projects/blog/Blog-main-page.png";
import blogRegister from "../assets/images/projects/blog/Blog-register.png";
import ecommerceCart from "../assets/images/projects/ecommerce-js-vanilla/Home-1024px-CartInclude.png";
import eccomerceHome2 from "../assets/images/projects/ecommerce-js-vanilla/Home-1024px.png";
import ecommerceHome from "../assets/images/projects/ecommerce-js-vanilla/Home-1440px.png";
import healthyGoAboutUs from "../assets/images/projects/healthy-go/healthyGoAboutUs.jpg";
import healthyGoCart from "../assets/images/projects/healthy-go/healthyGoCart.jpg";
import healthyGoCheckout from "../assets/images/projects/healthy-go/healthyGoCheckOut.jpg";
import healthyGoHomee from "../assets/images/projects/healthy-go/healthyGoHome1.png";
import healthyGoHome from "../assets/images/projects/healthy-go/healthyGoHome1.png";
import healthyGoLogin from "../assets/images/projects/healthy-go/healthyGoLogin.jpg";
import healthyGoProfile from "../assets/images/projects/healthy-go/healthyGoProfile.jpg";
import healthyGoRegister from "../assets/images/projects/healthy-go/healthyGoRegister.jpg";
import healthyGoRestaurant from "../assets/images/projects/healthy-go/healthyGoRestaurant.jpg";
import healthyGoSuccess from "../assets/images/projects/healthy-go/healthyGoSuccess.jpg";
import kenzieBurguerDark from "../assets/images/projects/kenzie-burguer/HomePage-DarkTheme-EmptyCart.jpg";
import kenzieBurguerDark2 from "../assets/images/projects/kenzie-burguer/HomePage-DarkTheme.jpg";
import kenzieBurguerLight from "../assets/images/projects/kenzie-burguer/HomePage-LightTheme-EmptyCart.jpg";
import kenzieBurguerLight2 from "../assets/images/projects/kenzie-burguer/HomePage-LightTheme.jpg";
import kenzieHubHome from "../assets/images/projects/kenzie-hub/Home-tela-grande.png";
import Hometelagrande from "../assets/images/projects/kenzie-hub/Home-tela-grande.png";
import kenzieHubLogin from "../assets/images/projects/kenzie-hub/kenzie-hub-login.png";
// import kenzieHubMobile from "../assets/images/projects/kenzie-hub/mobile-montage.jpg";
import kenzieHubRegister from "../assets/images/projects/kenzie-hub/Register-1440px.png";
import nuKenzieHome from "../assets/images/projects/nu-kenzie/home-page-1440px.png";
import nuKenzieLight from "../assets/images/projects/nu-kenzie/main-page-1440px-light-mode.png";
import nuKenzieDark from "../assets/images/projects/nu-kenzie/main-page-1440px.png";
import oregonTrail from "../assets/images/projects/oregon-trail/Oregon-trail-HomePage.png";

export interface IProjects {
  "project-name": string;
  "github-link": string;
  "project-url": string;
  description: string;
  "about-project": string[];
  techs: string[];
  features: string[];
  images: string[];
}
const projects: IProjects[] = [
  {
    "project-name": "HealthyGo",
    "github-link": "https://github.com/guiwustro/healthy-go-project",
    "project-url": "https://healthygo.vercel.app/home/",
    description:
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes, podendo filtrar restaurantes de acordo com suas restrições alimentares até finalizar o seu pedido.",
    "about-project": [
      "Alimentar-se bem é saber fazer boas escolhas e a missão da Healthygo é te ajudar nessa decisão tão importante! O projeto foi inspirado com o objetivo de facilitar a vida das pessoas com restrições alimentares: os com intolerância a lactose, glúten, vegetarianos e veganos.",
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes os quais se encaixam nessas restrições. Além de possuir filtros, para facilitar o usuário, podendo escolher quais restaurantes possuem essa categoria alimentícia.",
    ],
    techs: [
      "React",
      "TypeScript",
      "Axios",
      "ContextAPI",
      "Styled Components",
      "React Router DOM",
      "Hot-Toastify",
      "Framer motion",
      "react-google-auth",
      "react-input-mask",
    ],
    features: [
      "Página inicial com os restaurantes da API a amostra, para o usuários deslogado;",
      "Página para Login, onde o usuário pode logar com as credenciais do Google;",
      "Página para Cadastro de usuário;",
      "Não é possível adicionar produtos ao carrinho deslogado, sendo enviado feedbacks ao usuário quando tenta adicionar produtos ao carrinho deslogado, indicando o Login;",
      "Usuário logado pode editar perfil, tendo suas informações salvas na API, além de adicionar endereços e remove-los;",
      "Usuário tem a opção de pegar o endereço através da localização atual, os dados são retirados da API Geolocation/DB;",
      "Usuário logado pode adicionar produtos ao carrinho através dos restaurantes, podendo adicionar produtos de diversos restaurantes. O Frete é calculado numa taxa fixa por restaurante;",
      "Usuário logado pode manipular seu carrinho (adicionando, diminuindo e removendo produtos) através do próprio carrinho;",
      "Usuário logado pode finalizar seu pedido, redirecionando para a página de CheckOut, onde há campos para o registro de Cartão de Débito/Crédito, além do resumo do pedido do usuário;",
      "Depois do preenchimento dos dados do cartão e seleção de um Endereço, e clicado no botão Finalizar pedido, o usuário é notificado com uma mensagem de Sucesso e o carrinho é esvaziado",
      "Feedback ao usuário (notificações de erro) caso falte alguma informação a preencher no checkout;",
      "O carrinho do usuário fica salvo na API , ou seja, enquanto o usuário, ou seja, o carrinho estará lá até remover os produtos ou o usuário finalizar o pedido;",
      "Página com os pedidos do usuário;",
      "Responsivo para todas as telas entre 320px e 4k;",
      " Dark-Mode;",
    ],
    images: [
      healthyGoHome,
      healthyGoHomee,
      healthyGoRestaurant,
      healthyGoAboutUs,
      healthyGoCart,
      healthyGoCheckout,
      healthyGoLogin,
      healthyGoProfile,
      healthyGoRegister,
      healthyGoSuccess,
    ],
  },
  {
    "project-name": "Kenzie Hub",
    "github-link": "https://github.com/guiwustro/kenzie-hub",
    "project-url": "https://kenzie-hub-guiwustro.vercel.app/",
    description:
      "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas e os projetos criados.",
    "about-project": [
      "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas, escolhendo o nível de entendimento da tecnologia (básico, intermediário ou avançado). Além da adição de novas tecnologias na plataforma, o usuário é capaz de editar e remover tecnologias.",
      "A aplicação também conta com uma página de Login e Registro para novos usuários, tendo seus dados salvos numa API.",
    ],
    techs: [
      "React",
      "TypeScript",
      "Axios",
      "ContextAPI",
      "Styled Components",
      "React Router DOM",
      "Toastify",
      "Framer motion",
    ],
    features: [
      "Página para o usuário criar uma conta;",
      "Validação dos dados ao se registrar, a senha possui requisitos mínimos para ser criada e todos os campos são obrigatórios. Tudo isso é notificado pela aplicação ao fazer a criação de uma nova conta;",
      "Notificações de feedback ao usuário ao criar uma conta, fazer login, criação, alteração ou remoção de novas tecnologias e proejtos;",
      "Login do usuário na plataforma, verificando se o usuário já está cadastrado;",
      "O usuário é capaz de inserir novas tecnologias e novos projetos;",
      "O usuário é capaz de alterar e remover as tecnologias e os projetos já existentes;",
      "Responsivo para todas as telas.",
    ],
    images: [kenzieHubHome, kenzieHubLogin, kenzieHubRegister],
  },
  {
    "project-name": "Hamburgueria da Kenzie",
    "github-link": "https://github.com/guiwustro/kenzie-burguer",
    "project-url": "https://hamburgueria-kenzie-guiwustro.vercel.app/",
    description:
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras e uma barra de filtros, um campo de pesquisa.",
    "about-project": [
      "A aplicação conta com um tema escuro além do tema claro, para o usuário escolher, e o tema fica salvo na página do usuário, ou seja, caso o usuário selecione o modo escuro, a próxima vez que ele conectar na página continuará sendo esse modo.",
      "O carrinho de compras só é visível ao usuário quando algum produto é adicionado ao carrinho. Dentro dele o usuário é capaz de aumentar, diminuir a quantidade do produto através dos botões + e - ou remover o produto. É feito automaticamente o cálculo ao cliente do carrinho a cada adição, diminuição ou remoção de produto.",
    ],
    techs: ["React", "CSS", "Axios", "Styled Components", "ContextAPI"],
    features: [
      "Vitrine com os produtos do e-commerce;",
      " Botão com a opção de adicionar ao carrinho em cada produto do e-commerce;",
      " Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
      " Opção de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
      " Cálculo total do carrinho de compras;",
      " Opção de remover todos os produtos do carrinho;",
      " Responsivo para qualquer tela;",
      " Dark-mode.",
    ],
    images: [
      kenzieBurguerLight,
      kenzieBurguerDark,
      kenzieBurguerLight2,
      kenzieBurguerDark2,
    ],
  },
  {
    "project-name": "Nu Kenzie",
    "github-link": "https://github.com/guiwustro/nu-kenzie",
    "project-url": "https://nu-kenzie-guiwustro.vercel.app/",
    description:
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
    "about-project": [
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
      "O usuário é capaz de filtrar suas despesas e entradas, e o valor total é calculado dinamicamente de acordo com o filtro selecionado.",
    ],
    techs: ["React", "Axios", "Context API"],
    features: [
      "Formulário para o usuário registrar uma nova entrada/saída;",
      "Filtro de despesas e entradas;",
      "Calculo dinâmico do valor total de acordo com o que está sendo filtrado (todos, entradas ou despesas);",
      "Opção de remover entrada/despesa inserida;",
      "Responsivo para todas as telas;",
      "Dark-mode;",
    ],
    images: [nuKenzieLight, nuKenzieDark, nuKenzieHome],
  },
  {
    "project-name": "Blog",
    "github-link": "https://github.com/guiwustro/blog",
    "project-url": "https://guiwustro.github.io/blog/",
    description:
      "A ideia desse projeto é simular uma comunidade, onde todos os membros cadastrados podem consumir, criar, atualizar e deletar publicações de texto. Foi desenvolvido utilizando Programação Orientada a Objetos.",
    "about-project": [
      "O projeto conta com 3 páginas, uma para registro, outra para login e por último, a página principal, onde é possível criar, editar e deletar mensagens.",
      "Na página de registro, o usuário é capaz de fazer registro caso preencha os campos corretamente, caso não for preenchido corretamente algum campo, é disparado um erro ao usuário. Logo após o registro, o usuário é direcionado a página principal, não havendo a necessidade de passar pelo Login. Caso o usuário já tenha uma conta criada, é possível acessar pela página de Login.",
      "A página do blog, conta com as últimas mensagens enviadas pelos usuários. Nela o usuário é capaz de enviar mensagens, editar a mensagem já enviada e também deleta-la. Também há um botão de Logout para o usuário desconectar de sua conta.",
    ],
    techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
    features: [
      "Página de registro do usuário contando com 4 campos (nome de usuário, e-mail, foto de perfil e senha);",
      "Página de login;",
      "Redirecionamento automático ao blog após o registro ou realização do login;",
      "Página do blog com exibição das últimas mensagens enviadas pelos usuários ativos do blog;",
      "Campo para criação de uma nova mensagem;",
      "Possibilidade de edição da mensagem realizada pelo usuário;",
      "Possibilidade de remoção da mensagem do usuário;",
      "Responsivo para todas as telas.",
    ],
    images: [blogMain, blogRegister, blogLogin],
  },
  {
    "project-name": "E-commerce single-page",
    "github-link": "https://github.com/guiwustro/e-commerce-single-page",
    "project-url": "https://guiwustro.github.io/e-commerce-single-page/",
    description:
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras,uma barra de filtros e um campo de pesquisa.",
    "about-project": [
      "O projeto possui uma vitrine de produtos, o qual é possível adicionar o produto ao carrinho clicando no botão Comprar.",
      "O carrinho de compras só é visível ao usuário quando algum produto é adicionado ao carrinho. Dentro dele o usuário é capaz de aumentar, diminuir a quantidade do produto através dos botões + e - ou remover o produto. É feito automaticamente o cálculo ao cliente do carrinho a cada adição, diminuição ou remoção de produto. O número de produtos do carrinho é atualizado automaticamente também no ícone de carrinho na barra de navegação.",
      "O projeto também conta com uma barra de pesquisa por produto e categoria, e uma barra de filtros de categorias.",
    ],
    techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
    features: [
      "Vitrine com os produtos do e-commerce;",
      "Botão com a opção de adicionar ao carrinho em cada produto do e-commerce;",
      "Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
      "Barra de filtros por categoria;",
      "Opção de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
      "Cálculo total do carrinho de compras;",
      "Opção de remover todos os produtos do carrinho;",
      "Responsivo para qualquer tela;",
    ],
    images: [ecommerceHome, ecommerceCart, eccomerceHome2],
  },
  {
    "project-name": "Oregon Trail",
    "github-link": "https://github.com/guiwustro/oregon-trail-game",
    "project-url": "https://guiwustro.github.io/oregon-trail-game/",
    description:
      "Baseado no jogo The Oregon Trail, é uma aplicação em que o usuário monta sua própria carroça, escolhe quantos vagões ela terá , e nela consegue adicionar três tipos de viajantes. Cada viajante possui ações específicas, podendo ser a de caçar comida, comer e/ou curar. Desenvolvido utilizando Programação Orientada a Objetos. ",
    "about-project": [
      "Essa aplicação é composta por duas páginas, a primeira, o usuário deve escolher, o número de vagões que a carroça deverá ter e assim que escolhida, o usuário é redirecionado para página do jogo.",
      "Na página do jogo, o usuário é capaz de adicionar novos viajantes ao vagão. É disparado um erro, caso o usuário não digite um nome para o viajante, digite um nome com mais de 15 caracteres ou tente adicionar viajantes sem possuir vagas na carroça.",
      "Cada tipo de viajante tem seu cartão personalizado, tendo ações específicas para cada tipo de viajante.",
      "A aplicação possui um espaço específico em que mostra o Status da carroça, ou seja, o número de viajantes doentes, a comida total e as vagas restantes.",
    ],
    techs: ["JavaScript", "CSS -Metodologia BEM", "HTML"],
    features: [
      "Escolha do número de vagões (até 20);",
      "Formulário para o usuário cadastrar novos viajantes;",
      "Modais de notificação ao usuário, avisando ao usuário em casos de: viajante adicionado não possui nome definido, possui mais de 15 caractéres ou não há mais espaço na carroça;",
      "Uma vitrine contendo todos os viajantes adicionados;",
      "Card personalizado acordo com o tipo do viajante adicionado;",
      "Ação de comer e caçar para o viajante comum;",
      "Ação de comer, caçar e transferir comida para o Caçador;",
      "Ação de comer, caçar e curar outro viajante para o Doutor;",
      "Responsivo para todas as telas;",
      "Modais de notificação ao usuário em caso de transferência de comida sem ter a comida suficiente, comer doente, entre outros;",
      "Botão para voltar ao menu inicial para criar outra carroça do zero, escolhendo uma nova quantidade de vagões.",
    ],
    images: [oregonTrail],
  },
];

export default projects;
