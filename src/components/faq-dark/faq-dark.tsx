import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "lucide-react";

const faqs = [
  {
    question: "Qual a diferença entre tributos, impostos e taxas?",
    answer:
      "Conforme disposto no artigo 3º do Código Tributário Nacional (CTN), tributo é “toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada”. A CF em seus arts. 145, 149, 149-A, classifica os tributos pela Pentapartição (impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais). E o CTN em seu art. 5º segue a teoria da Tripartição(impostos, taxas e contribuições de melhoria): “Os tributos são impostos, taxas e contribuições de melhoria”. O imposto é considerado o tributo mais importante, estando disposto no artigo 16º do CTN, imposto “é o tributo cuja obrigação tem por fato gerador uma situação independente de qualquer atividade estatal específica, relativa ao contribuinte”. Dentre os principais impostos do Brasil, podemos citar: Imposto s/Circulação de Mercadorias e Serviços (ICMS), Imposto sobre a Propriedade de Veículos Automotores (IPVA), Imposto sobre a Propriedade Predial e Territorial Urbana (IPTU), Imposto sobre a Renda e Proventos de Qualquer Natureza (IR – pessoa física e jurídica), Imposto sobre Operações de Crédito (IOF), Imposto sobre Serviços de Qualquer Natureza (ISS). Já de acordo com o artigo 77º do CTN, taxa é um tributo “que tem como fato gerador o exercício regulador do poder de polícia, ou a utilização efetiva e potencial, de serviço público específico e divisível”. – Taxa de Emissão de Documentos (níveis municipais, estaduais e federais), Taxa de Licenciamento Anual de Veículo, Taxas do Registro do Comércio (Juntas Comerciais), Taxa cobrada para registro do Contrato Social de uma empresa.",
  },
  {
    question: "Como faço para pagar menos imposto?",
    answer:
      "Neste caso o ideal é: Analisar o melhor regime tributário que poderá ser feito à partir de uma Auditoria Fiscal com base nas informações prestadas aos órgãos federais, estaduais e/ou municipais. Marcar uma reunião presencial para conseguir entender as reais intenções dos empresários, bem como a rotina empresarial para uma melhor análise.",
  },
  {
    question: "Como faço para pagar minha dívida Tributária? E como parcelar?",
    answer:
      "O crédito tributário, já constituído, é impeditivo para emissão de Certidões Negativas de Débitos, certidões estas que são exigidas por alguns tomadores, podendo, inclusiveinviabilizar a atividade da empresa. O Governo Federal, geralmente de dois em dois anos possibilidade, ou não, de revisão dos referidos créditos.",
  },
  {
    question: "O débito Tributário, prescreve?",
    answer:
      "Sim. Necessário destacar que a prescrição é uma modalidade da extinção do crédito tributário disposto no art. 156, inciso V do CTN, sendo que, a partir do momento que ocorre a prescrição contra a Fazenda Pública acarreta a extinção total do crédito tributário. Em linhas gerais, a prescrição é o não exercício do direito dentro de um prazo legal, sendo a perda do direito de ação, onde o direito material torna-se inexigível e, em se tratando de matéria tributária, é o prazo em que a Fazenda Pública tem para propor a execução do crédito tributário contra o sujeito passivo, conforme dispõe o art. 174 do CTN, in verbis: Art. 174 A ação para a cobrança do credito tributário prescreve em cinco anos, contados da data da sua constituição definitiva. Além da prescrição propriamente dita, o Superior Tribunal de Justiça, a fim de harmonizar o artigo 174 do Código Tributário Nacional com o artigo 40 da Lei nº 6.830 /1980, pacificou a prescrição intercorrente na Execução Fiscal. A Lei nº 11.051 /2004, no artigo 6º , trouxe a previsão da prescrição intercorrente, visto que, acrescentou ao artigo 40 da Lei nº 6.830 /1980 o § 4º, in verbis: “Art. 40 – O juiz suspenderá o curso da execução, enquanto não for localizado o devedor ou encontrados bens sobre os quais possa recair a penhora, e, nesses casos, não correrá o prazo de prescrição. (…). § 4º – Se da decisão que ordenar o arquivamento tiver decorrido o prazo prescricional, o juiz, depois de ouvida a Fazenda Pública, poderá, de ofício, reconhecer a prescrição intercorrente e decretá-la de imediato”. Destaca-se que a prescrição intercorrente necessariamente ocorrerá quando o Fisco, após iniciar a Execução contra o contribuinte, não da curso ao procedimento judicial fiscal, ou seja, o processo não pode ser eterno, sendo certo que a mesma somente será reconhecida se o Fisco for o responsável pela inércia da Execução por mais de cinco anos, quando então, a cobrança será considerada prescrita e o crédito tributário extinto.",
  },
  {
    question:
      "A partir de que idade, a criança é obrigada à tirar CPF para abater no imposto de renda?",
    answer:
      "De acordo com a Instrução Normativa RFB nº 1.760, de 2017, que trata do Cadastro de Pessoas Físicas (CPF). Os contribuintes que desejarem incluir seus dependentes na declaração do Imposto de Renda de 2018 deverão registrá-los no CPF caso tenham 8 anos ou mais. A obrigatoriedade valia somente para dependentes com 12 anos ou mais. A redução da idade visa evitar a retenção em malha fiscal do contribuinte declarante, possibilitando maior celeridade na restituição do crédito tributário. A partir do exercício de 2019, estarão obrigadas a se inscrever no CPF as pessoas físicas que constem como dependentes para fins de Imposto sobre a Renda da Pessoa Física, independentemente da idade.",
  },
];

export default function FaqDark() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Perguntas Frequentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusIcon
                        aria-hidden="true"
                        className="size-6 group-[&:not([data-open])]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
