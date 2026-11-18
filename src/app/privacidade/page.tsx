import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Conheça como a DarkWizard trata dados pessoais no contexto de compras, atendimento, navegação e utilização do produto.",
};

export default function PrivacyPage() {
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
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-slate-400">Última atualização: 18 de novembro de 2026</p>
          <div className="mt-8 space-y-8 rounded-3xl border border-violet-300/15 bg-[#100c18] p-6 leading-8 text-slate-300 sm:p-9">
            <p>A sua privacidade é importante para nós. Esta Política de Privacidade explica como os dados pessoais são tratados no contexto da comercialização, disponibilização e utilização da <strong className="text-white">DarkWizard</strong>, ferramenta de inteligência artificial voltada à produção de conteúdo audiovisual.</p>
            <p>Ao adquirir ou utilizar a DarkWizard, você declara estar ciente das práticas descritas neste documento.</p>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">1. Quem somos</h2>
              <p className="mt-3">A DarkWizard é uma marca comercial de uma ferramenta de inteligência artificial desenvolvida para auxiliar criadores de conteúdo na produção de vídeos, roteiros, narrações, prompts e materiais audiovisuais.</p>
              <p className="mt-3">O responsável pela comercialização do produto é:</p>
              <dl className="mt-3 space-y-2">
                <div><dt className="inline font-black text-white">Marca:</dt> <dd className="inline">DarkWizard</dd></div>
                <div><dt className="inline font-black text-white">Responsável:</dt> <dd className="inline">Lucas Fernandes Lima</dd></div>
                <div><dt className="inline font-black text-white">E-mail para assuntos de privacidade:</dt> <dd className="inline">suporte@darkwizard.com</dd></div>
                {/* <div><dt className="inline font-black text-white">Site:</dt> <dd className="inline">[INSERIR DOMÍNIO OFICIAL]</dd></div> */}
              </dl>
              <p className="mt-3">Para os tratamentos de dados pessoais realizados diretamente no contexto da comercialização e do atendimento da DarkWizard, o responsável atuará como controlador, nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD), conforme as atividades efetivamente realizadas.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">2. Quais dados pessoais podemos tratar</h2>
              <p className="mt-3">Podemos tratar diferentes categorias de dados pessoais, dependendo da interação do Usuário com a DarkWizard.</p>
              <h3 className="mt-5 font-black text-white">2.1. Dados relacionados à compra</h3>
              <p className="mt-2">Quando você adquire a DarkWizard, poderão ser tratados:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Nome completo;</li><li>Endereço de e-mail;</li><li>Informações relacionadas à compra;</li><li>Identificadores da transação;</li><li>Situação do pagamento;</li><li>Informações necessárias para atendimento, suporte e reembolso.</li>
              </ul>
              <p className="mt-3">Os dados completos do cartão de crédito e outros dados de pagamento são tratados conforme os procedimentos e sistemas da plataforma responsável pelo processamento da transação, não sendo necessário que o Usuário os forneça diretamente à DarkWizard.</p>
              <h3 className="mt-5 font-black text-white">2.2. Dados de atendimento</h3>
              <p className="mt-2">Quando você entra em contato conosco, poderemos tratar:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Nome ou identificação informada;</li><li>Endereço de e-mail;</li><li>Mensagens enviadas;</li><li>Informações relacionadas a dúvidas, solicitações ou problemas técnicos;</li><li>Arquivos ou capturas de tela enviados voluntariamente para auxiliar no atendimento.</li>
              </ul>
              <h3 className="mt-5 font-black text-white">2.3. Dados técnicos e de navegação</h3>
              <p className="mt-2">Durante a navegação no site oficial, poderão ser tratados dados técnicos, conforme as ferramentas efetivamente utilizadas, tais como:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Endereço IP;</li><li>Tipo e versão do navegador;</li><li>Tipo de dispositivo;</li><li>Páginas acessadas;</li><li>Data e horário de acesso;</li><li>Informações de cookies e tecnologias semelhantes.</li>
              </ul>
              <p className="mt-3">A coleta desses dados dependerá da configuração das ferramentas de hospedagem, segurança, análise e funcionamento do site.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">3. Como utilizamos seus dados</h2>
              <p className="mt-3">Os dados pessoais poderão ser utilizados para:</p>
              <ol className="mt-3 list-inside list-[lower-alpha] space-y-2">
                <li>Processar e confirmar compras;</li><li>Disponibilizar o acesso à DarkWizard;</li><li>Enviar instruções de utilização e informações relacionadas ao produto;</li><li>Prestar suporte técnico e atendimento ao comprador;</li><li>Processar solicitações de cancelamento e reembolso;</li><li>Prevenir fraudes, acessos indevidos e atividades ilícitas;</li><li>Cumprir obrigações legais, regulatórias e fiscais;</li><li>Exercer direitos em processos administrativos ou judiciais;</li><li>Melhorar a experiência de navegação e a apresentação do produto, quando aplicável.</li>
              </ol>
              <p className="mt-3">Não utilizamos dados pessoais para finalidades incompatíveis com aquelas informadas nesta Política.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">4. Plataforma de pagamento e comercialização</h2>
              <p className="mt-3">A comercialização da DarkWizard é realizada por meio da plataforma <strong className="text-white">Kiwify</strong>.</p>
              <p className="mt-3">Durante o processo de compra, a Kiwify poderá coletar e tratar informações pessoais e financeiras necessárias para:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identificação do comprador;</li><li>Processamento do pagamento;</li><li>Prevenção de fraudes;</li><li>Confirmação da transação;</li><li>Disponibilização do produto digital;</li><li>Atendimento relacionado à compra e ao reembolso.</li>
              </ul>
              <p className="mt-3">O tratamento realizado pela Kiwify está sujeito à sua própria Política de Privacidade e aos seus termos de utilização.</p>
              <p className="mt-3">A DarkWizard poderá receber informações relacionadas à compra, como identificação do comprador, e-mail, situação do pagamento e dados necessários à disponibilização do produto e ao suporte.</p>
              <p className="mt-3">Para conhecer as práticas da plataforma, consulte sua política oficial de privacidade:</p>
              <a href="https://kiwify.com.br/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex font-bold text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition hover:text-violet-200">https://kiwify.com.br/</a>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">5. Utilização de inteligência artificial e ferramentas externas</h2>
              <p className="mt-3">A DarkWizard foi desenvolvida para auxiliar na criação de conteúdo com inteligência artificial. Sua utilização poderá envolver plataformas e serviços externos, como ferramentas de geração de texto, imagens, vídeos, áudio e narração.</p>
              <p className="mt-3">Esses serviços possuem suas próprias políticas de privacidade e condições de utilização.</p>
              <h3 className="mt-5 font-black text-white">5.1. Conteúdos inseridos pelo Usuário</h3>
              <p className="mt-2">Durante a utilização da DarkWizard, o Usuário poderá inserir ou enviar informações como:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Ideias e instruções para criação de vídeos;</li><li>Roteiros e textos;</li><li>Referências visuais;</li><li>Imagens e arquivos;</li><li>Gravações de voz (<em>voiceover</em>);</li><li>Outros materiais necessários à produção audiovisual.</li>
              </ul>
              <p className="mt-3">Quando esses materiais forem enviados diretamente a plataformas externas, o tratamento dos dados será realizado conforme as políticas e configurações desses respectivos serviços.</p>
              <p className="mt-3">O Usuário deverá consultar as políticas das ferramentas utilizadas antes de enviar informações pessoais, confidenciais ou materiais que envolvam terceiros.</p>
              <h3 className="mt-5 font-black text-white">5.2. Geração de narração por TTS</h3>
              <p className="mt-2">A DarkWizard poderá auxiliar na geração de narrações por tecnologia TTS (<em>Text-to-Speech</em>), transformando textos em áudio por meio de ferramentas compatíveis.</p>
              <p className="mt-3">O processamento poderá ocorrer em serviços externos, conforme a ferramenta escolhida pelo Usuário.</p>
              <p className="mt-3">As informações enviadas a esses serviços estarão sujeitas às respectivas políticas de privacidade, condições de armazenamento e regras de utilização.</p>
              <h3 className="mt-5 font-black text-white">5.3. Envio de voiceover próprio</h3>
              <p className="mt-2">Caso o Usuário opte por enviar uma gravação própria de voz, será responsável por possuir os direitos e autorizações necessários para utilizar esse material.</p>
              <p className="mt-3">O envio de gravações a plataformas externas poderá envolver o tratamento de dados pessoais e, dependendo do contexto e da tecnologia utilizada, dados biométricos ou outros dados sujeitos a proteção específica.</p>
              <p className="mt-3">Recomendamos que o Usuário não envie gravações de terceiros sem autorização adequada.</p>
              <h3 className="mt-5 font-black text-white">5.4. Responsabilidade sobre serviços externos</h3>
              <p className="mt-2">A DarkWizard não controla integralmente as práticas de privacidade, armazenamento, retenção ou processamento de dados adotadas por plataformas independentes.</p>
              <p className="mt-3">Cada fornecedor externo é responsável por suas próprias práticas, de acordo com sua relação com o Usuário e com a legislação aplicável.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">6. Compartilhamento de dados pessoais</h2>
              <p className="mt-3">Os dados pessoais poderão ser compartilhados apenas quando necessário para as finalidades descritas nesta Política, incluindo com:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-white">Kiwify:</strong> para processamento da compra, pagamento, entrega do produto e atendimento relacionado à transação;</li>
                <li><strong className="text-white">Provedores de hospedagem e infraestrutura:</strong> para funcionamento e segurança do site;</li>
                <li><strong className="text-white">Serviços de comunicação:</strong> para envio de mensagens e atendimento;</li>
                <li><strong className="text-white">Prestadores de serviços técnicos:</strong> quando necessários à operação e manutenção da atividade;</li>
                <li><strong className="text-white">Autoridades públicas:</strong> quando houver obrigação legal, regulatória ou determinação válida.</li>
              </ul>
              <p className="mt-3">Não comercializamos dados pessoais dos compradores.</p>
              <p className="mt-3">Os dados compartilhados serão limitados ao necessário para a finalidade correspondente, observadas as obrigações legais e contratuais aplicáveis.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">7. Transferência internacional de dados</h2>
              <p className="mt-3">Algumas plataformas e prestadores de serviços utilizados na operação da DarkWizard poderão armazenar ou processar dados em servidores localizados fora do Brasil.</p>
              <p className="mt-3">Nessas situações, poderá ocorrer transferência internacional de dados pessoais, observadas as exigências da LGPD e as regulamentações aplicáveis da Autoridade Nacional de Proteção de Dados (ANPD).</p>
              <p className="mt-3">O Usuário deverá consultar as políticas dos serviços externos que utilizar, especialmente quando inserir roteiros, gravações, imagens ou outros arquivos diretamente nessas plataformas.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">8. Cookies e tecnologias semelhantes</h2>
              <p className="mt-3">O site oficial da DarkWizard poderá utilizar cookies e tecnologias semelhantes para:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Garantir o funcionamento adequado das páginas;</li><li>Melhorar a navegação;</li><li>Memorizar preferências;</li><li>Proteger o site contra atividades suspeitas;</li><li>Obter informações estatísticas de utilização, quando aplicável.</li>
              </ul>
              <p className="mt-3">Quando necessário, o Usuário poderá gerenciar suas preferências por meio das configurações de cookies disponibilizadas no site ou do próprio navegador.</p>
              <p className="mt-3">A desativação de determinados cookies poderá afetar algumas funcionalidades da página.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">9. Armazenamento e segurança dos dados</h2>
              <p className="mt-3">Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, alteração, divulgação ou destruição indevida.</p>
              <p className="mt-3">O acesso às informações será limitado ao necessário para a execução das atividades relacionadas à comercialização, disponibilização e atendimento da DarkWizard.</p>
              <p className="mt-3">Entretanto, nenhum sistema eletrônico pode garantir segurança absoluta. Por isso, recomendamos que o Usuário também adote boas práticas de segurança, como proteger suas contas, utilizar senhas fortes e evitar compartilhar informações confidenciais em canais não seguros.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">10. Retenção e eliminação dos dados</h2>
              <p className="mt-3">Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades descritas nesta Política.</p>
              <p className="mt-3">Algumas informações poderão ser conservadas mesmo após uma solicitação de exclusão quando sua manutenção for necessária para:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Cumprimento de obrigações legais ou regulatórias;</li><li>Atendimento de obrigações fiscais e contábeis;</li><li>Exercício regular de direitos;</li><li>Prevenção de fraudes;</li><li>Cumprimento de determinações de autoridades competentes.</li>
              </ul>
              <p className="mt-3">Quando não houver mais necessidade ou fundamento legal para a manutenção dos dados, eles serão eliminados ou anonimizados, conforme aplicável.</p>
              <p className="mt-3">Os prazos de armazenamento de dados mantidos por plataformas externas serão definidos pelos respectivos fornecedores.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">11. Direitos dos titulares de dados</h2>
              <p className="mt-3">Nos termos da LGPD, o Usuário poderá exercer seus direitos em relação aos dados pessoais tratados pelo controlador, incluindo:</p>
              <ol className="mt-3 list-inside list-[lower-alpha] space-y-2">
                <li>Confirmar a existência de tratamento de seus dados;</li><li>Solicitar acesso aos dados pessoais;</li><li>Solicitar a correção de informações incompletas, inexatas ou desatualizadas;</li><li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a legislação;</li><li>Solicitar informações sobre o compartilhamento de dados;</li><li>Solicitar a portabilidade dos dados, observadas as normas aplicáveis;</li><li>Solicitar a eliminação dos dados tratados com base no consentimento, ressalvadas as hipóteses legais de conservação;</li><li>Revogar o consentimento, quando essa for a base legal utilizada;</li><li>Opor-se ao tratamento realizado em desconformidade com a legislação;</li><li>Solicitar informações sobre as consequências de não fornecer consentimento, quando aplicável.</li>
              </ol>
              <p className="mt-3">As solicitações poderão ser encaminhadas pelo canal de privacidade indicado nesta Política.</p>
              <p className="mt-3">O atendimento será realizado conforme os prazos e procedimentos previstos na legislação aplicável.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">12. Dados de crianças e adolescentes</h2>
              <p className="mt-3">A DarkWizard não é direcionada especificamente a crianças.</p>
              <p className="mt-3">Caso sejam tratados dados pessoais de crianças ou adolescentes, o tratamento deverá observar as disposições legais aplicáveis, incluindo as exigências específicas da LGPD e o princípio do melhor interesse.</p>
              <p className="mt-3">Não recomendamos o envio de informações pessoais de crianças ou adolescentes em prompts, gravações ou arquivos sem a devida autorização e fundamento legal.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">13. Alterações nesta Política</h2>
              <p className="mt-3">Esta Política poderá ser atualizada periodicamente para refletir mudanças nas funcionalidades da DarkWizard, nos serviços utilizados, nas práticas de tratamento de dados ou na legislação aplicável.</p>
              <p className="mt-3">A versão mais recente estará disponível na página oficial da DarkWizard, acompanhada da respectiva data de atualização.</p>
              <p className="mt-3">Recomendamos que o Usuário consulte esta página periodicamente.</p>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-xl font-black text-white">14. Contato e solicitações de privacidade</h2>
              <p className="mt-3">Caso tenha dúvidas sobre esta Política ou deseje exercer seus direitos relacionados à proteção de dados pessoais, entre em contato pelo canal abaixo:</p>
              <dl className="mt-4 space-y-2">
                <div><dt className="inline font-black text-white">Marca:</dt> <dd className="inline">DarkWizard</dd></div>
                <div><dt className="inline font-black text-white">Responsável:</dt> <dd className="inline">Lucas Fernandes Lima</dd></div>
                <div><dt className="inline font-black text-white">E-mail para privacidade:</dt> <dd className="inline">suporte@darkwizard.com</dd></div>
              </dl>
              <p className="mt-4">As solicitações serão atendidas por meio do canal de privacidade indicado nesta Política, conforme os prazos e procedimentos aplicáveis.</p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
