import { checkPageWidth750 } from '../scripts/checkPageWidth';
import { Functionality } from '../components/Functionality';
import { MenuContent } from "../components/MenuContent";
import { ServiceItem } from '../components/ServiceItem';
import { BurgerMenu } from "../components/BurgerMenu";
import { Question } from '../components/Question';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { useEffect, useState } from 'react';

import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  const [isOpened, setIsOpened] = useState(false); 
  const [width, setWidth] = useState(0); 

  useEffect(()=>{
    setWidth(window.innerWidth);
  }, [])

  return (
    <div>
      {
        width <= 750 
        && (
          <>
            <BurgerMenu isOpened={isOpened} setIsOpened={setIsOpened}/>
            <MenuContent isOpened={isOpened} setIsOpened={setIsOpened}/>
          </>
        ) 
      }

      <Head>
        <title>LaiDesign | Home</title>
      </Head>

      <Menu background="#0D0D2B"/>

        <section className={styles.titleScreenContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.promoContainer}>
              <div>
                <p>
                  EM 2021
                </p>
              </div>

              <p>Seu Negócio Precisa de Um Site</p>
            </div>

            <h1>Criação de Sites Profissionais</h1>
            
            <p>
              Planejamos, desenvolvemos e gerenciamos sites respossivos que geram leads, vendem produtos e geram mais negócios.
            </p>
            <button className={styles.mainButton}>
              Faça um orçamento!
              <div>
                <img src="/icon/ArrowIcon.svg" alt="Seguir"/>
              </div>
            </button>
          </div>
        </section>

        <section className={styles.workContainer}>
          <div className={styles.textContainer}>
            <div className={styles.textContent}>
              <h2>
                Como <br/> Funciona?
              </h2>
              <p>
                Nosso processo para transformar suas ideias em lindos e eficazes sites é simples, organizado e rápido!
              </p>

              <button>Saiba Mais</button>
            </div>
          </div>

          <div className={styles.processContainer}>

            <div className={styles.processItem}>
              <img src="/icon/www.svg" alt="Escolha"/>
              <h2>Escolha o Tipo de Site</h2>
              <p>
                Site institucional, Hotsites, Blogs ou e-commerce?
                Qual site é o ideal para você?
              </p>
            </div>

            <div className={styles.processItem}>
              <img src="/icon/search.svg" alt="Extras"/>
              <h2>Quer algo mais?</h2>
              <p>
                Escolha se quer adicionais para seu site.
                Chat Online, Multi-idioma, integrações, formulários dinâmicos e mais!
              </p>
            </div>

            <div className={styles.processItem}>
              <img src="/icon/shop.svg" alt="Extras"/>
              <h2>Ok! Prontos para começar</h2>
              <p>
                Emissão de contrato, briefing e mãos na massa!
                Em poucos dias um site novinho em folha!
              </p>
            </div>
     
          </div>
        </section>

        <section className={styles.callForActionContainer}>
          <div className={styles.DarkContainer}>
            <div className={styles.DarkContent}>
              <h2>
                Criação de Sites: <br/> Qual a modalidade de site ideal para o seu negócio?
              </h2>
              <p>
                Antes de planejar a criação de site que atenda a todos os seus objetivos, <br/> tenha em mente que para cada estratégia, existe uma modalidade de site apropriada.
              </p>
            </div>
          </div>

          <div className={styles.WhiteContainer}>
            <div>
              <div className={styles.callContainer}>
                <div className={styles.mainTittle}>
                  <h2>
                    Criação de Sites Institucionais 
                  </h2>
                  <button>Solicite um orçamento</button>
                </div>

                <div className={styles.textContent}>
                  <p>Ideal para ser utilizado como apresentação do seu negócio bem como para projetos que almejam rankeamento orgânico no Google.</p>
                </div>
              </div>

              <div className={styles.callContainer}>
                <div className={styles.mainTittle}>
                  <h2>
                    Criação de Sites para Conversão
                  </h2>
                  <button>Solicite um orçamento</button>
                </div>

                <div className={styles.textContent}>
                  <p>Ideal para projetos de tráfego pago. Desenvolvimento de landing pages para captura de leads ou venda de infoproduto.</p>
                </div>
              </div>

              <div className={styles.callContainer}>
                <div className={styles.mainTittle}>
                  <h2>
                    Criação de Sites para Vendas
                  </h2>
                  <button>Solicite um orçamento</button>
                </div>

                <div className={styles.textContent}>
                  <p>Ideal para quem deseja vender múltiplos produtos através de carrinho próprio, integrando módulos de pagamento e envio.</p>
                </div>
              </div>

              <div className={styles.callContainer}>
                <div className={styles.mainTittle}>
                  <h2>
                    Criação de Sites para Conteúdo
                  </h2>
                  <button>Solicite um orçamento</button>
                </div>

                <div className={styles.textContent}>
                  <p>Ideal para projetos de marketing de conteúdo que visam gerar autoridade, captura leads, monetização e apoio para SEO.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.functionalitiesContainer}>
          <h2>
            Quais Funcionalidades Oferecemos?
          </h2>

          <div className={styles.functionalitiesSpace}>  
            <Functionality
              title="Sites Responsivos"
              text="Você sabia que o Google classifica negativamente websites que não funcionam bem em smartphones e tablets? Por isso, construímos sites com a tecnologia mais recente do mercado, criando uma versão para cada dispositivo: PC, Tablet e Smartphone."
              textId="text1"
              icon="/icon/responsiveIcon.svg"
            />
            <Functionality
              title="Personalização Completa"
              text="Desenvolvemos todos os sites de forma artesanal, layouts 100% exclusivos para a sua marca. Uma aparência bonita e moderna é o que irá transmitir confiança a seus visitantes. Formas, cores, imagens, ícones. Tudo isso é pensado nos mínimos detalhes, especialmente para você."
              textId="text2"
              icon="/icon/personalizationIcon.svg"
            />
            <Functionality
              title="Site Otimizado SEO"
              text="Todos os sites são criados para que possam ter um melhor posicionamento no Google. Ao desenvolver o site, seguimos todas as diretrizes e critérios impostos pelo Google. Seu site já será entregue para você totalmente otimizado para os buscadores e você poderá ficar na 1ª página do Google em pouco tempo."
              textId="text3"
              icon="/icon/optimizationIcon.svg"
            />
            <Functionality
              title="Tecnologias de Ponta" 
              text="O WordPress é a plataforma usada por mais de 30% dos sites do mundo, isto é, ele está constantemente recebendo melhorias da comunidade de design e criação. Recebe atualizações regulares, com correção de bugs e lançamentos de novos recursos."
              textId="text6"
              icon="/icon/hiTechIcon.svg"
            />
            <Functionality
              title="Fácil Gerenciamento"
              text="Com um painel de controle amigável, a tarefa de atualizar o conteúdo do seu site ficou fácil. Qualquer pessoa sem conhecimento técnico conseguirá gerenciar o site. Você poderá adicionar textos, posts, fotos, vídeos, promoções e outros conteúdos com facilidade e autonomia."
              textId="text4"
              icon="/icon/managementIcon.svg"
            />
            <Functionality
              title="Suporte Contínuo"
              text="Através do Plano de Cuidados com o Site, estaremos a postos para te ajudar através de nosso canal exclusivo de suporte. Realizamos atualizações semanais em todas as ferramentas do seu site, para manter seu site seguro e livre de bugs. Você também terá direito de solicitar um conjunto de alterações todos os meses e nossa equipe irá cuidar de tudo."
              textId="text5"
              icon="/icon/supportIcon.svg"
            />
          </div>
        </section>

        <section className={styles.servicesContainer}>
          <h2>
            Tipos de desenvolvimento:
          </h2>

          <div className={styles.services}>
            <ServiceItem
              icon="A"
              tittle="Wordpress"
              paragraph="Um site simples, mas eficaz, direto ao ponto, mas sem muitas funcionalidades"
            ></ServiceItem>

            <ServiceItem
              icon="A"
              tittle="Wordpress"
              paragraph="Um site simples, mas eficaz, direto ao ponto, mas sem muitas funcionalidades"
            ></ServiceItem>

            <ServiceItem
              id="ServiceItem3"
              icon="A"
              tittle="Wordpress"
              paragraph="Um site simples, mas eficaz, direto ao ponto, mas sem muitas funcionalidades"
            ></ServiceItem>
          </div>
        </section>

        <section className={styles.TechsContainer}>
            <h2>Conheça as tecnologias que <br/> utilizamos!</h2>

            <div className={styles.TechsContent}>
              <div className={styles.WordPressTech}>
                <div className={styles.TechContent}>
                  <h2>
                    WordPress
                  </h2>

                  <p>
                    Get full statistic information about the behaviour of <br/>
                    buyers and sellers will help you to make the decision. 
                  </p>

                  <button>
                    Saiba Mais
                  </button>
                </div>
              </div>

              <div className={styles.NextJsTech}>
                <div className={styles.TechContent}>
                  <h2>
                    NextJs
                  </h2>

                  <p>
                    Get full statistic information about the behaviour of <br/>
                    buyers and sellers will help you to make the decision. 
                  </p>

                  <button>
                    Saiba Mais
                  </button>
                </div>
              </div>

              <div className={styles.ReactJsTech}>
                <div className={styles.TechContent}>
                  <h2>
                    ReactJs
                  </h2>

                  <p>
                    Get full statistic information about the behaviour of <br/>
                    buyers and sellers will help you to make the decision. 
                  </p>

                  <button>
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
        </section>

        <section className={styles.transition}>

        </section>

        <section className={styles.FrequentQuestion}>
          <h2>
            Dúvidas Frequentes
          </h2> 

          <div className={styles.QuestionsGrid}>
            <Question 
              id='Question1' 
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question
              id='Question2' 
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question3'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question4'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question5'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question6'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question7'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question8'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question9'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
            <Question 
              id='Question10'
              question='Após finalizado, o website será meu?' 
              answer='Sim. O website é propriedade sua após finalizado.'
            ></Question>
          </div>
        </section>

        <section className={styles.ActionContainer}>
          <div className={styles.ActionBox}>
            <div className={styles.textContainer}>
              <h3>
                Escolha crescer agora!
              </h3>
              <p>
                Converse com nosso assistente virtual para determinarmos suas necessidades e iniciarmos o desenvolvimento.
              </p>
            </div>
            <button>
              Orçamento
            </button>
          </div>
        </section>

        <Footer/>
      </div>
  )
}
