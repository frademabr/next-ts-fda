import { CONFIG } from "src/global-config";

import { _mock } from "./_mock";
import { _tags, _whats } from "./assets";

// ----------------------------------------------------------------------

// const WEBSITES = [`www.google.com.br`, `<h4 class="text-green-500">A Filial, Rio de Janeiro</h4>`];

const TITLES = [
  `Fradema - Rio de Janeiro`,
  `Fradema - São Paulo`,
  `Fradema - Campinas`,
  `Fradema - Brasília`,
  `Fradema - Salvador`,
  `Fradema - Piraúba`,
  `Fradema - Vitória`,
  `Fradema - Belo Horizonte`,
  `Fradema - Curitiba`,
  `Fradema - Joinville`,
  `Fradema - Recife`,
  `Fradema - Manaus`,
  `Fradema - Ribeirão Preto`,
  `Fradema - Nova Iorque`,
  `Fradema - Orlando`,
];

const CONTENT = [
  `
  <h4 class="text-green-500">A Filial, Rio de Janeiro</h4>
  <p>Localizada no coração da cidade maravilhosa, a matriz da Fradema Consultores está situada na Rua México, 41 – 14º Andar, no Centro do Rio de Janeiro. Este endereço estratégico, localizado em frente ao Consulado Americano, reflete o espírito vibrante e histórico do bairro, que é conhecido como o principal polo financeiro e cultural da cidade com bancos, Justiça Federal, Câmara Municipal do Rio de Janeiro e Tribunal de Justiça do Estado.
O Centro do Rio de Janeiro abriga ícones atualizações e históricos, como o Teatro Municipal, a Biblioteca Nacional, e o Museu de Arte Moderna (MAM), a poucos minutos de nossa localização. Além disso, chegamos à Cinelândia, um ponto de fácil acesso por transporte público, incluindo metrô e ônibus, o que facilita a chegada de clientes e parceiros.
A cidade do Rio de Janeiro, fundada em 1565, tem uma rica história como a antiga capital do Brasil e um dos maiores símbolos da cultura brasileira. Com uma mistura única de modernidade e tradição, o Rio é reconhecido mundialmente por suas praias, como Copacabana e Ipanema, além do Pão de Açúcar e do Cristo Redentor, uma das sete maravilhas do mundo moderno.
A matriz da Fradema reflete a essência da cidade: conectada ao lado do aeroporto Santos Drumond trazendo dinamismo. Nossas instalações no Centro são preparadas para atender clientes de todos os portes com excelência e confiança, continuando a tradição de anos de sucesso no mercado tributário.
</p>



  <h4 class="text-green-500">Informações</h4>

  <ul>
      <li>Rua México 41, Cinelândia, Centro Rio de Janeiro - RJ</li>
      <li>Telefone: (21) 2217-0600</li>
      <li>contato@fradema.com.br</li>
      <li>Seg à Qui das 9h às 18h | Sex das 9h às 17h</li>
  </ul>


  `,

  `<h4 class="text-green-500">A Filial, São Paulo</h4>
  <p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

  <h4 class="text-green-500">Informações</h4>

  <ul>
      <li>Rua Iraúna, 405 – Moema, São Paulo - SP</li>
      <li>Telefone: (11) 5041-8787</li>
      <li>frademasp@fradema.com.br</li>
      <li>Seg à Qui das 9h às 18h | Sex das 9h às 17h</li>
  </ul>


  `,

  `<h4 class="text-green-500">A Filial, Campinas</h4>
  <p>A filial da Fradema Consultores Tributários em Campinas está estrategicamente localizada em uma casa na Av. Andrade Neves, 1851, um ponto de fácil acesso e referência na cidade, no estado de São Paulo. Situada em uma das avenidas mais conhecidas, a localização é prática tanto para clientes quanto para parceiros da região.
Campinas, conhecida como a “Princesa do Oeste”, é uma cidade que concentra um dos principais polos econômicos e tecnológicos do Brasil. Fundada em 1774, possui uma rica história marcada pelo desenvolvimento agrícola e, posteriormente, pela industrialização. Hoje, com aproximadamente 1,2 milhão de habitantes, Campinas é reconhecida por sua inovação e por ser sede de importantes universidades, como a UNICAMP, um dos maiores centros de pesquisa do país.
Nas imediações da nossa filial, destacam-se importantes pontos de referência, como o Parque Portugal (conhecido como Lagoa do Taquaral), um dos espaços mais frequentados para lazer e atividades ao ar livre, e o Estádio Moisés Lucarelli, palco de grandes eventos esportivos.
A unidade de Campinas que foi inaugurada em 2017 é um ponto estratégico, já que é uma cidade que combina dinamismo econômico com uma excelente infraestrutura urbana, oferta de lazer e serviços, tornando-se uma das melhores cidades para viver e investir. Desta forma, a FRADEMA visa atender às necessidades de empresas e empreendedores da região com a qualidade e confiança.
</p>

  <h4 class="text-green-500">Parceiros</h4>

  <ul>
      <li>Av Andrade Neves 1851 – Jardim Chapadão, Campinas - SP</li>
      <li>Telefone: (19) 3743-4200</li>
      <li>frademacampi@fradema.com.br</li>
      <li>Seg à Qui das 9h às 18h | Sex das 9h às 17h</li>
  </ul>

  `,
];

// const WHATS = [
//   `<h1><a href="https://wa.me/5521970346980?text=Bem-vindo(a)%20à%20Fradema%20Rio de Janeiro,
//     ,>WhatsApp</a></h1>`,
//   `https://wa.me/552191367-7551?text=Bem-vindo(a)%20à%20Fradema%20São Paulo`,
//   `https://wa.me/551999196-0007?text=Bem-vindo(a)%20à%20Fradema%20Rio de Janeiro,
//     `,
// ];
// ----------------------------------------------------------------------

const getCategory = (index: number) => {
  if ([1].includes(index)) return _tags[1];
  if ([2].includes(index)) return _tags[2];
  if ([3].includes(index)) return _tags[3];
  if ([4].includes(index)) return _tags[4];
  if ([5].includes(index)) return _tags[5];
  if ([6].includes(index)) return _tags[6];
  if ([7].includes(index)) return _tags[7];
  if ([8].includes(index)) return _tags[8];
  if ([9].includes(index)) return _tags[9];
  if ([10].includes(index)) return _tags[10];
  if ([11].includes(index)) return _tags[11];
  if ([12].includes(index)) return _tags[12];
  if ([13].includes(index)) return _tags[13];
  if ([14].includes(index)) return _tags[14];
  if ([15].includes(index)) return _tags[15];
  return _tags[0];
};

const getWhats = (index: number) => {
  if ([1].includes(index)) return _whats[1];
  if ([2].includes(index)) return _whats[2];
  if ([3].includes(index)) return _whats[3];
  if ([4].includes(index)) return _whats[4];
  if ([5].includes(index)) return _whats[5];
  if ([6].includes(index)) return _whats[6];
  if ([7].includes(index)) return _whats[7];
  if ([8].includes(index)) return _whats[8];
  if ([9].includes(index)) return _whats[9];
  if ([10].includes(index)) return _whats[10];
  return _whats[0];
};

const getGalleryImgs = () => Array.from({ length: 6 }, (_, index) => _mock.image.filiais(index));

// const getWebsite = () => Array.from({ length: 15 }, (_, index) => _mock.whats(index));

export const _caseStudies = TITLES.map((_, index) => ({
  id: _mock.id(index),
  content: CONTENT[index],
  title: TITLES[index],
  createdAt: _mock.time(index),
  website: getWhats(index),
  // whats: WHATS[index],
  description: _mock.description(index),
  coverUrl: _mock.image.filiais(index + 1),
  heroUrl: _mock.image.filiaisHero(index + 1),
  how_we_work:
    "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
  results:
    "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
  category: getCategory(index),
  galleryImgs: getGalleryImgs(),
}));
