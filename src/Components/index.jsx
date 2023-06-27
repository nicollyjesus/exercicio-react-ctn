import './index.css';
import Header from './header-menu.jsx'; //importar o componente Header
import comida_imagens from '../assets/comidas/index-img.jsx'
import ctn_imgs from '../assets/ctn/index-ctn.jsx'

const Index = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="section-home section-all">
                    <div className="div-left">
                        <h1 className="h1-home">
                            Bem-vindo(a) ao Centro de Tradições Nordestinas
                            (CTN)
                        </h1>
                        <p className="p-home">
                            Neste website falarei um pouco sobre o CTN, sua
                            história e um pouco das comidas típicas do nordeste.
                        </p>{' '}
                    </div>
                    <div className="div-right">
                        <img
                            src={ctn_imgs.ctn1}
                            alt="Imagem do CTN"
                            className="img-home"
                        />
                        <img
                            src={ctn_imgs.ctn2}
                            alt="Imagem do CTN"
                            className="img-home"
                        />
                    </div>
                </section>
                <div style={{height: '30rem'}}></div>
                <section className="section-sobre section-all">
                    <div className="div-left">
                        <h2 className="h2-about"> Casa Nordestina </h2>

                        <p className="p-about">
                            O CTN possui uma arena com dez restaurantes que
                            oferecem os pratos mais apetitosos da culinária
                            nordestina. O lugar certo para se comer um saboroso
                            baião de dois, uma boa carne de sol, um escondidinho
                            de carne seca, sarapatel, buchada de bode e muito
                            mais.
                        </p>
                    </div>
                    <div className="div-right">
                        <img src={ctn_imgs.ctn4} alt="" className="img-logo" />
                    </div>
                </section>
                <div style={{height: '30rem'}}></div>

                <section className="section-gastro section-all">
                    <article className="div-gastro">
                        <div className="div-comida2">
                            <img src={comida_imagens.comida1} alt="" className="img-comida" />

                            <div className="div-comida">
                                <h2 className="h2-comida">Bobó de camarão</h2>
                                <p className="p-gastro">
                                    Bobó de camarão é um prato da culinária
                                    afro-brasileira. De consistência cremosa, é
                                    feito com camarões refogados em temperos
                                    verdes e leite de coco, misturados no purê
                                    de macaxeira e mais azeite de dendê,
                                    gengibre e camarões secos. É servido
                                    acompanhado de arroz branco, mas também pode
                                    ser servido com pirão.
                                </p>
                            </div>
                        </div>
                        <div className="div-comida2">
                            <img src={comida_imagens.comida2} alt="" className="img-comida" />
                            <div className="div-comida">
                                <h2 className="h2-comida">Escondidinho</h2>
                                <p className="p-gastro">
                                    O escondidinho é um prato que tem a cara do
                                    Brasil e a sua origem é incerta. Fontes
                                    levam que a origem remetem ao Nordeste
                                    brasileiro. Porém com diversas versões de
                                    Norte a Sul do Brasil, o escondidinho é
                                    cheio de histórias, variedades e métodos de
                                    preparos.
                                </p>
                            </div>
                        </div>
                        <div className="div-comida2">
                            <img src={comida_imagens.comida3} alt="" className="img-comida" />
                            <div className="div-comida">
                                <h2 className="h2-comida">Baião de dois</h2>
                                <p className="p-gastro">
                                    Baião de dois é um prato tipico da região
                                    Nordeste e partes da região Norte do Brasil,
                                    como Rondônia, Acre, Amazonas e Pará.
                                    Consiste num preparado de arroz e feijão, de
                                    preferência o feijão verde ou feijão novo. É
                                    frequente adicionar-se queijo coalho.
                                </p>
                            </div>
                        </div>
                        <div className="div-comida2">
                            <img src={comida_imagens.comida4} alt="" className="img-comida" />
                            <div className="div-comida">
                                <h2 className="h2-comida">Buchada de bode</h2>
                                <p className="p-gastro">
                                    Buchada de bode, ou simplesmente buchada, é
                                    um prato típico da região Nordeste do
                                    Brasil. A iguaria tem origem no maranho, da
                                    culinária portuguesa tradicional. A buchada
                                    remete também ao prato crux mechi da
                                    gastronomia libanesa.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Index;
