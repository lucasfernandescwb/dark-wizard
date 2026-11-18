import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso da DarkWizard, incluindo aquisição, utilização, propriedade intelectual, reembolso e responsabilidade.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 overflow-hidden bg-[#09060f] py-16 text-white sm:py-24">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <Container className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            DarkWizard
          </p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-3 text-sm text-slate-400">Última atualização: 18 de novembro de 2026</p>
          <div className="mt-8 space-y-8 rounded-3xl border border-violet-300/15 bg-[#100c18] p-6 leading-8 text-slate-300 sm:p-9">
            <section>
              <h2 className="text-xl font-black text-white">1. Sobre nós</h2>
              <p className="mt-3">Estes Termos de Uso regulam a aquisição e utilização da <strong className="text-white">DarkWizard</strong> (doravante denominada &quot;Produto&quot; ou &quot;Skill&quot;), comercializada sob a marca <strong className="text-white">DarkWizard</strong> por <strong className="text-white">Lucas Fernandes Lima</strong> (doravante denominado &quot;Vendedor&quot;).</p>
              <p className="mt-3">A DarkWizard é uma ferramenta baseada em instruções e recursos de inteligência artificial, desenvolvida para auxiliar criadores de conteúdo na produção de vídeos, especialmente para canais do YouTube e formatos de conteúdo digital.</p>
              <p className="mt-3">Ao adquirir ou utilizar o Produto, você (&quot;Usuário&quot; ou &quot;Comprador&quot;) declara que leu, compreendeu e concorda com estes Termos.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">2. Aceitação dos termos</h2>
              <p className="mt-3">A aquisição e utilização da DarkWizard implicam a aceitação destes Termos de Uso.</p>
              <p className="mt-3">Caso não concorde com alguma das condições aqui estabelecidas, recomendamos que não adquira ou utilize o Produto.</p>
              <p className="mt-3">O Usuário declara possuir capacidade legal para realizar a contratação ou estar devidamente autorizado a fazê-lo.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">3. Descrição do produto</h2>
              <p className="mt-3">A DarkWizard é uma skill de inteligência artificial desenvolvida para auxiliar na criação e organização de produções audiovisuais.</p>
              <p className="mt-3">Entre suas funcionalidades e recursos, conforme a versão disponibilizada, podem estar incluídos:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Desenvolvimento de ideias e conceitos para vídeos;</li>
                <li>Criação e estruturação de roteiros;</li>
                <li>Planejamento de cenas e sequências visuais;</li>
                <li>Desenvolvimento de prompts para geração de imagens e vídeos;</li>
                <li>Orientação de produção audiovisual;</li>
                <li>Criação de narrações por meio de tecnologia TTS (Text-to-Speech);</li>
                <li>Organização de etapas de produção e edição;</li>
                <li>Auxílio na preparação de conteúdo para YouTube, Shorts e outras plataformas.</li>
              </ul>
              <p className="mt-3">A DarkWizard funciona por meio de recursos de inteligência artificial disponibilizados em plataformas compatíveis, podendo depender de serviços e ferramentas de terceiros.</p>
              <p className="mt-3">As funcionalidades podem ser aprimoradas, atualizadas ou modificadas ao longo do tempo.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">4. Aquisição, acesso e requisitos de utilização</h2>
              <p className="mt-3">A aquisição do Produto é realizada por meio da plataforma de comercialização indicada na página oficial de vendas, atualmente a <strong className="text-white">Kiwify</strong>.</p>
              <p className="mt-3">Após a confirmação do pagamento, o Comprador receberá as instruções necessárias para acessar e utilizar a DarkWizard, conforme o procedimento de entrega informado no momento da compra.</p>
              <p className="mt-3">Para utilizar o Produto, o Usuário poderá precisar de:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Uma conta ativa em plataforma compatível com a execução de skills ou instruções de inteligência artificial;</li>
                <li>Acesso à internet;</li>
                <li>Ferramentas externas de geração de imagens, vídeos, áudio ou edição, quando desejadas;</li>
                <li>Planos pagos ou créditos de serviços de terceiros, quando exigidos por essas ferramentas.</li>
              </ul>
              <p className="mt-3">O Usuário é responsável por manter suas próprias contas, credenciais, assinaturas e recursos necessários à utilização de serviços externos.</p>
              <p className="mt-3">A compra da DarkWizard não inclui automaticamente assinaturas, créditos ou licenças de ferramentas de terceiros, salvo quando expressamente informado na oferta.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">5. Utilização da ferramenta</h2>
              <p className="mt-3">A DarkWizard deve ser utilizada de maneira lícita, ética e em conformidade com estes Termos e com as políticas das plataformas utilizadas.</p>
              <p className="mt-3">O Usuário concorda em não:</p>
              <ol className="mt-3 list-inside list-[lower-alpha] space-y-2">
                <li>Utilizar o Produto para atividades ilegais, fraudulentas ou que violem direitos de terceiros;</li>
                <li>Produzir conteúdo que viole direitos autorais, marcas, direitos de imagem ou outros direitos de propriedade intelectual;</li>
                <li>Utilizar a ferramenta para criar conteúdos destinados a fraudes, golpes, assédio, ameaças ou outras atividades ilícitas;</li>
                <li>Tentar obter acesso não autorizado a sistemas, contas, ferramentas ou recursos de terceiros;</li>
                <li>Copiar, revender, sublicenciar, compartilhar publicamente ou redistribuir a própria Skill ou seus materiais de maneira não autorizada;</li>
                <li>Utilizar o Produto de maneira que comprometa sua segurança, integridade ou funcionamento.</li>
              </ol>
              <p className="mt-3">O Usuário é responsável pelas decisões relacionadas ao conteúdo produzido e pela utilização que fizer dos resultados gerados.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">6. Recursos de inteligência artificial, TTS e voiceover</h2>
              <p className="mt-3">A DarkWizard utiliza recursos de inteligência artificial para auxiliar na criação de conteúdo audiovisual.</p>
              <p className="mt-3">Os resultados gerados podem incluir textos, roteiros, ideias, instruções visuais, narrações e outros materiais relacionados à produção de vídeos.</p>
              <h3 className="mt-5 font-black text-white">6.1. Narração e áudio</h3>
              <p className="mt-2">Durante o fluxo de produção, o Usuário poderá optar, conforme os recursos disponibilizados, por:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Enviar uma gravação própria de narração (<em>voiceover</em>), baseada no roteiro; ou</li>
                <li>Solicitar a geração de uma narração por meio de tecnologia TTS, utilizando o texto do roteiro.</li>
              </ul>
              <p className="mt-3">A utilização de ferramentas externas de síntese de voz poderá depender de disponibilidade, compatibilidade, créditos, assinaturas e condições estabelecidas pelos respectivos fornecedores.</p>
              <p className="mt-3">O Usuário declara possuir os direitos e autorizações necessários sobre gravações, vozes e materiais de áudio enviados.</p>
              <h3 className="mt-5 font-black text-white">6.2. Responsabilidade pelos resultados</h3>
              <p className="mt-2">Os conteúdos gerados por inteligência artificial podem apresentar erros, imprecisões, inconsistências ou informações desatualizadas.</p>
              <p className="mt-3">O Usuário deve revisar e validar os resultados antes de publicá-los, especialmente quando envolverem informações históricas, científicas, religiosas, educacionais, comerciais ou outros assuntos que exijam precisão.</p>
              <p className="mt-3">A DarkWizard é uma ferramenta de auxílio à produção e não garante que os resultados sejam originais, exclusivos, livres de erros ou adequados a qualquer finalidade específica.</p>
              <h3 className="mt-5 font-black text-white">6.3. Uso responsável</h3>
              <p className="mt-2">É proibido utilizar os recursos da DarkWizard para produzir conteúdos ilícitos, deepfakes não autorizados, falsificações, fraudes, discursos de ódio ou materiais que violem direitos de terceiros.</p>
              <p className="mt-3">O Usuário também deve respeitar as políticas de uso das plataformas de inteligência artificial e dos serviços externos utilizados durante a produção.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">7. Propriedade intelectual</h2>
              <p className="mt-3">A marca DarkWizard, sua identidade visual, estrutura, organização, instruções, metodologia, documentação e materiais próprios são protegidos pelas normas aplicáveis de propriedade intelectual.</p>
              <p className="mt-3">A aquisição do Produto concede ao Comprador uma licença de uso pessoal e não exclusiva para utilizar a Skill em suas próprias atividades de criação de conteúdo.</p>
              <p className="mt-3">A licença não representa transferência de propriedade intelectual.</p>
              <p className="mt-3">Salvo autorização expressa do Vendedor, não é permitido:</p>
              <ol className="mt-3 list-inside list-[lower-alpha] space-y-2">
                <li>Revender ou comercializar a Skill;</li>
                <li>Compartilhar, distribuir ou disponibilizar publicamente os arquivos, instruções ou materiais originais do Produto;</li>
                <li>Copiar ou reproduzir substancialmente a estrutura da ferramenta para comercialização de produto concorrente;</li>
                <li>Remover avisos de autoria ou identificação de propriedade intelectual;</li>
                <li>Distribuir o acesso adquirido a terceiros como se fosse uma licença coletiva ou comercial.</li>
              </ol>
              <p className="mt-3">Os conteúdos finais produzidos pelo Usuário com auxílio da DarkWizard poderão ser utilizados pelo próprio Usuário, respeitados os direitos de terceiros, as condições das ferramentas utilizadas e a legislação aplicável.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">8. Pagamento e processamento da compra</h2>
              <p className="mt-3">A comercialização e o processamento dos pagamentos são realizados por meio da plataforma <strong className="text-white">Kiwify</strong>, conforme as condições apresentadas na página de venda.</p>
              <p className="mt-3">A Kiwify atua como plataforma intermediadora de pagamento e disponibilização do produto digital, conforme seus próprios termos e políticas.</p>
              <p className="mt-3">A relação de consumo referente à aquisição da DarkWizard é estabelecida entre o Comprador e o Vendedor, sem prejuízo das responsabilidades legais da plataforma intermediadora quando aplicáveis.</p>
              <p className="mt-3">O preço, as condições de pagamento e eventuais ofertas são apresentados no momento da contratação.</p>
              <p className="mt-3">A confirmação da compra e a liberação do acesso dependem da aprovação do pagamento e dos procedimentos operacionais da plataforma.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">9. Direito de arrependimento e reembolsos</h2>
              <p className="mt-3">Nas compras realizadas pela internet, o consumidor poderá exercer o direito de arrependimento no prazo legal de <strong className="text-white">7 (sete) dias</strong>, contado da assinatura ou do recebimento do produto ou serviço, conforme o artigo 49 do Código de Defesa do Consumidor, observadas as disposições legais aplicáveis.</p>
              <p className="mt-3">A solicitação de reembolso da compra realizada pela Kiwify deverá ser encaminhada pelo canal oficial:</p>
              <a href="https://reembolso.kiwify.com.br" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-bold text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition hover:text-violet-200">
                https://reembolso.kiwify.com.br
              </a>
              <p className="mt-3">O processamento do pedido seguirá os procedimentos da plataforma e a legislação de defesa do consumidor.</p>
              <p className="mt-3">Nenhuma disposição destes Termos tem a finalidade de restringir ou afastar direitos assegurados ao consumidor pela legislação brasileira.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">10. Disponibilidade e serviços de terceiros</h2>
              <p className="mt-3">A DarkWizard depende, direta ou indiretamente, de plataformas digitais e tecnologias de terceiros para seu funcionamento e para a execução de determinadas atividades.</p>
              <p className="mt-3">Não garantimos disponibilidade ininterrupta de serviços externos, ferramentas de inteligência artificial, plataformas de geração de mídia ou sistemas de terceiros.</p>
              <p className="mt-3">Alterações, limitações, interrupções, políticas, preços ou encerramento de serviços externos podem afetar determinadas funcionalidades.</p>
              <p className="mt-3">O Vendedor não controla os serviços de terceiros e não se responsabiliza por falhas exclusivamente atribuíveis a esses fornecedores, sem prejuízo dos direitos do consumidor e das responsabilidades legalmente aplicáveis.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">11. Limitação de responsabilidade</h2>
              <p className="mt-3">A DarkWizard é uma ferramenta de apoio à produção de conteúdo e não garante resultados financeiros, crescimento de canais, monetização, visualizações, engajamento, aprovação em programas de monetização ou sucesso comercial.</p>
              <p className="mt-3">O desempenho dos conteúdos depende de diversos fatores, incluindo estratégia, qualidade da produção, consistência, público, distribuição e políticas das plataformas.</p>
              <p className="mt-3">O Usuário é responsável por revisar os materiais produzidos, verificar informações e decidir sobre sua publicação.</p>
              <p className="mt-3">Nada nestes Termos exclui ou limita responsabilidades que não possam ser afastadas por lei, especialmente aquelas previstas na legislação de proteção ao consumidor.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">12. Suspensão e encerramento de acesso</h2>
              <p className="mt-3">O Vendedor poderá adotar medidas razoáveis para proteger a integridade do Produto e seus direitos de propriedade intelectual em caso de utilização comprovadamente abusiva, fraudulenta ou contrária a estes Termos.</p>
              <p className="mt-3">Medidas de restrição ou encerramento de acesso deverão observar a legislação aplicável e os direitos do consumidor.</p>
              <p className="mt-3">A aquisição do Produto não autoriza o compartilhamento irrestrito dos materiais originais ou a redistribuição não autorizada da Skill.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">13. Privacidade e proteção de dados</h2>
              <p className="mt-3">Os dados pessoais relacionados à compra e ao atendimento poderão ser tratados para finalidades como:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Processamento e confirmação da compra;</li>
                <li>Disponibilização do Produto;</li>
                <li>Atendimento ao Comprador;</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>Prevenção de fraudes e exercício regular de direitos.</li>
              </ul>
              <p className="mt-3">Os dados de pagamento poderão ser tratados pela plataforma Kiwify e pelos prestadores envolvidos no processamento da transação, conforme suas próprias políticas de privacidade.</p>
              <p className="mt-3">Quando o Usuário utilizar ferramentas externas de inteligência artificial, geração de voz, imagem ou vídeo, poderá haver tratamento de dados diretamente pelos respectivos fornecedores, de acordo com suas políticas e condições.</p>
              <p className="mt-3">O tratamento de dados pessoais deverá observar a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).</p>
              <p className="mt-3">O Usuário poderá entrar em contato pelo canal de atendimento indicado na página oficial da DarkWizard para solicitar informações relacionadas aos seus dados pessoais.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">14. Alterações destes Termos</h2>
              <p className="mt-3">Estes Termos poderão ser atualizados para refletir alterações no Produto, em seus recursos, nas condições comerciais ou na legislação aplicável.</p>
              <p className="mt-3">A versão vigente será disponibilizada na página oficial da DarkWizard, acompanhada da respectiva data de atualização.</p>
              <p className="mt-3">Alterações não poderão retirar direitos legalmente assegurados ao consumidor.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">15. Lei aplicável e foro</h2>
              <p className="mt-3">Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
              <p className="mt-3">Eventuais conflitos serão resolvidos conforme a legislação brasileira, respeitadas as regras de competência e proteção do consumidor, inclusive quanto ao foro legalmente assegurado ao consumidor.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">16. Contato</h2>
              <p className="mt-3">Para dúvidas, solicitações ou assuntos relacionados à utilização da DarkWizard, entre em contato pelo canal oficial:</p>
              <dl className="mt-4 space-y-2">
                <div><dt className="inline font-black text-white">Marca:</dt> <dd className="inline">DarkWizard</dd></div>
                <div><dt className="inline font-black text-white">Vendedor:</dt> <dd className="inline">Lucas Fernandes Lima</dd></div>
                <div><dt className="inline font-black text-white">E-mail de suporte:</dt> <dd className="inline">suporte@darkwizard.com</dd></div>
                {/* <div><dt className="inline font-black text-white">Endereço:</dt> <dd className="inline">[INSERIR ENDEREÇO EXIGIDO PARA IDENTIFICAÇÃO DO FORNECEDOR]</dd></div> */}
              </dl>
            </section>

            <p className="border-t border-violet-300/10 pt-8 font-bold text-white">
              Ao adquirir ou utilizar a DarkWizard, o Usuário declara estar ciente destes Termos de Uso.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
