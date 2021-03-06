import * as React from 'react';
import styled from 'styled-components';

import SocialMedia from '../images/socialmedia.svg';
import Ecommerce from '../images/ecommerce.svg';
import Stronywww from '../images/stronywww.svg';

import ButtonLink from '../components/Basic/ButtonLink';
import Container from '../components/Basic/Container';
import Col from '../components/Basic/Col';
import Row from '../components/Basic/Row';
import { Card, CardTitle, CardContent, CardText, CardIcon } from '../components/Basic/Card';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/Carousel/CarouselItem/CarouselItem';
import Footer from '../components/Layout/Footer';
import Seo from '../components/seo';

import { StyledH2, StyledH3 } from '../components/Basic/Headings';

import Desktop from '../images/icons/Desktop.js';
import Gallery from '../images/icons/Gallery.js';
import People from '../images/icons/People.js';
import Bag from '../images/icons/Bag.js';

import Efficiency from '../images/icons/Efficiency.js';
import Web from '../images/icons/Web.js';
import UniqueDesign from '../images/icons/UniqueDesign.js';

import Contest from '../images/icons/Contest.js';
import Content from '../images/icons/Content.js';
import Organisation from '../images/icons/Organisation.js';
import Campagain from '../images/icons/Campagain.js';

import Payments from '../images/icons/Payments.js';
import Responsive from '../images/icons/Responsive.js';
import Easy from '../images/icons/Easy.js';
import Shop from '../images/icons/Shop.js';

const StyledCTA = styled.div`
  display: block;
  padding: 20px 0px;
`;

const StyledShape = styled.img`
  margin-left: auto;
  width: 80%;
  display: none;

  @media ${props => props.theme.media.fablet} {
    display: block;
  }
`;

const CarouselCol = styled(Col)`
  margin-top: auto;
  margin-bottom: auto;
`;

const CarouselBeforeHeading = styled.p`
  color: ${({ theme }) => theme.accentColor.primary};
  font-weight: 500;
  padding-left: 15px;
  position: relative;
  text-transform: uppercase;

  :before{
    color: ${({ theme }) => theme.accentColor.primary};
    content: "/";
    font-weight: 700;
    left: 0px;
    position: absolute;
    top: 0px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Seo title="JukonMedia.pl - Strony Internetowe, Sklepy Internetowe, SocialMedia" />
      <Carousel items={1} autoplay pauseTime={10000} dots transitionTime={1000} pauseTime={5000} padding='0px 0px 40px 0px' >
        <CarouselItem>
          <Container>
            <Row style={{ padding: '30px 0', alignItems: 'center' }}>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={Stronywww} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Unikatowe
                </CarouselBeforeHeading>
                <h1> STRONY INTERNETOWE </h1>
                <p>
                  Chcesz stworzy?? stron?? internetow??? Z nami mo??esz zrobi?? to szybko
                  i efektywnie! Do ka??dego projektu podchodzimy indywidualnie, zwracaj??c szczeg??ln?? uwag??
                  na potrzeby Klienta. Oferujemy szybk??, wstepn?? wycen?? projektu!
                </p>
                <StyledCTA>
                  <ButtonLink to="/stronywww" round="5px" margin="30px 0px">
                    Stw??rz sw??j pakiet
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container>
            <Row>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={SocialMedia} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Profesjonalne
                </CarouselBeforeHeading>
                <h1> SOCIAL MEDIA </h1>
                <p>
                  Media spo??eczno??ciowe to nowy, skuteczny  model
                  komunikacji firm oraz podej??cie do szeroko
                  rozumianej promocji w internecie.Obs??ugujemy
                  profile social media firm oraz prowadzimy
                  efektywn?? reklam?? na Facebook, Instagram,
                  Twitter, YouTube.
                </p>
                <StyledCTA>
                  <ButtonLink to="/socialmedia" round="5px" margin="30px 0px">
                    Sprawd??
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem>
          <Container>
            <Row>
              <Col md={6} style={{ order: 2, textAlign: 'end' }}>
                <StyledShape src={Ecommerce} alt="" />
              </Col>
              <CarouselCol md={6}>
                <CarouselBeforeHeading>
                  Skuteczne
                </CarouselBeforeHeading>
                <h1> SKLEPY INTERNETOWE </h1>
                <p>
                  Sklep online pozwoli Ci na sprzeda?? swoich
                  produkt??w w intrenecie. Tworzymy indywidualne i nowoczesne sklepy
                  internetowe, dostosowane do urz??dze?? mobilnych i przegl??darek.
                </p>
                <StyledCTA>
                  <ButtonLink to="/stronywww" round="5px" margin="30px 0px">
                    Sprawd??
                  </ButtonLink>
                </StyledCTA>
              </CarouselCol>
            </Row>
          </Container>
        </CarouselItem>
      </Carousel>
      <Container>
        <Row style={{ margin: '50px 0px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Dzia??aj skutecznie w sieci z nami!
            </StyledH2>
          </Col>
          <Col>
            <p style={{ textAlign: 'center' }}>
              Oferujemy kompleksowe dzia??ania maj??ce na celu zwi??kszenie widoczno??ci
              Twojej firmy w internecie, przez skutecznie kampanie reklamowe
              w mediach spo??eczno??ciowych, profesjonalne i szybkie strony oraz sklepy internetowe, a tak??e
              przez tworzenie materia????w graficznych na potrzeby Twojej firmy.
            </p>
          </Col>
        </Row>
        <Row itemsMargin={30} style={{ margin: '20px 0 40px 0' }}>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Desktop />
                </CardIcon>
                <CardTitle>Strony internetowe</CardTitle>
                <CardText>
                  Tworzymy wydajne i przyjemne dla oka strony internetowe,
                  kt??re pozwol?? na zwi??kszenie widoczno??ci Twojej firmy w internecie.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Bag />
                </CardIcon>
                <CardTitle>Sklepy internetowe</CardTitle>
                <CardText>
                  Sklep online pozwoli Ci na sprzeda?? swoich
                  produkt??w w intrenecie. Tworzymy indywidualne i nowoczesne sklepy
                  internetowe, dostosowane do urz??dze?? mobilnych i przegl??darek.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <People />
                </CardIcon>
                <CardTitle>Socialmedia</CardTitle>
                <CardText>
                  Docieraj do wi??kszej ilo??ci odbiorc??w dzi??ki profesjonalnie
                  prowadzonym socialmediom oraz kampaniom reklamowym.
                </CardText>
              </CardContent>
            </Card>
          </Col>
          <Col sm={6} lg={3}>
            <Card equal direction="column">
              <CardContent alignItems="flex-start" padding="25px">
                <CardIcon padding="20px 0px" width="50px">
                  <Gallery />
                </CardIcon>
                <CardTitle>Grafika</CardTitle>
                <CardText>
                  Stworzymy dla Ciebie profesjonalne projekty graficzne od wizyt??wek,
                  ulotek, katalog??w po makiety strony internetowych.
                </CardText>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '50px 0px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Profesjonalne strony internetowe!
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Przej??ysty proces realizacji
                </StyledH3>
                <p>
                  Zajmujemy si?? tworzeniem stron internetowych od pocz??tku do ko??ca.
                  Stworzymy dla Ciebie unikalny projekt oparty na systemie Wordpress lub stron?? statyczn??.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Optymalizacja SEO
                </StyledH3>
                <p>
                  Nasze stony sa zoptymalizowane pod k??tem SEO.
                  Stworzymy dla Ciebie unikalny projekt oparty na systemie Wordpress lub stron?? statyczn??.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Responsywna budowa i zgodno???? z przegl??darkami
                </StyledH3>
                <p>
                  Nasze strony prawid??owo wygl??daj?? i dzia??a??aj?? zar??wno w tradycyjnych przegl??darkach
                  typu desktop jak r??wnie?? na urz??dzeniach typu tablet oraz smartfon
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Row itemsMargin={30} style={{ marginBottom: '40px' }}>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Responsive />
                    </CardIcon>
                    <CardTitle>Responsywne</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Efficiency />
                    </CardIcon>
                    <CardTitle>Wydajne</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <UniqueDesign />
                    </CardIcon>
                    <CardTitle>Unikalne</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Web />
                    </CardIcon>
                    <CardTitle>Optymalizacja SEO</CardTitle>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '50px 0' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Prowadzenie i kampanie socialmedia
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="mobile-order">
            <Row itemsMargin={30} style={{ marginBottom: '40px' }}>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Campagain />
                    </CardIcon>
                    <CardTitle>Kampanie reklamowe</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Contest />
                    </CardIcon>
                    <CardTitle>Konkursy</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Organisation />
                    </CardIcon>
                    <CardTitle>Prowadzenie profili</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Content />
                    </CardIcon>
                    <CardTitle>Tworzenie materia????w</CardTitle>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm={8}>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Prowadzenie Profilu Facebook
                </StyledH3>
                <p>
                  Oferujemy aktywne prowadzenie profili na portalach spo??eczno??ciowych
                  (w tym odpowiadanie na wiadomo??ci i komentarze) oraz prowadzenie kampanii reklamowych.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Tworzenie materia????w
                </StyledH3>
                <p>
                  Przygotowujemy anga??uj??ce tre??ci, przykuwaj??c?? uwag?? szat?? graficzna, ustalamy harmonogram publikacji i dzia??a?? reklamowych.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Prowadzenie profilu Instagram
                </StyledH3>
                <p>
                  Poprowadzimy Tw??j profil na Instagramie wed??ug Twoich zalece?? i oczekiwa??. Zadbamy o odpowiedni dob??r oraz publikacje zdj????,
                  opis??w oraz hashtag??w wg. ustalonego harmonogramu publikacji.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Kampanie reklamowe
                </StyledH3>
                <p>
                  Proponujemy kompleksow?? obs??ug?? kampanii z mo??liwo??ci?? skierowania spersonalizowanej tre??ci
                  do konkretnego u??ytkownika oraz bie????c?? optymalizacj?? i raportowaniem wynik??w.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ margin: '50px 0' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledH2>
              Sklepy internetowe
            </StyledH2>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Prosty w obs??udze system Woocommerce
                </StyledH3>
                <p>
                  WooCommerce to bardzo popularny system do obs??ugi sklep??w internetowych.
                  Pozwala stworzy?? bardzo rozbudowany sklep, pe??ny nowoczesnych i przydatnych funkcji.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Wi??ksza sprzeda??
                </StyledH3>
                <p>
                  Du???? zalet?? e-sklep??w tworzonych na platformie WooCommerce jest prostota.
                  Dzi??ki temu praktycznie ka??dy szybko i bez wi??kszego wysi??ku jest w stanie
                  nauczy?? si?? korzystania z niego.
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: '20px' }}>
              <Col sm={12}>
                <StyledH3>
                  Wiele sposob??w p??atno??ci
                </StyledH3>
                <p>
                  Instalacja bramki p??atno??ci w sklepie WooCommerce zapewnia szybkie i
                  bezpiecznie p??atno??ci. Wprowad?? w Twoim sklepie p??atno??ci online, kt??re s?? standardem.
                  To kluczowy element powodzenia sklepu internetowego!
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Row itemsMargin={30} style={{ marginBottom: '40px' }}>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Responsive />
                    </CardIcon>
                    <CardTitle>Dost??pno????</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Shop />
                    </CardIcon>
                    <CardTitle>Wi??ksza sprzeda??</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Payments />
                    </CardIcon>
                    <CardTitle>P??atno??ci</CardTitle>
                  </CardContent>
                </Card>
              </Col>
              <Col sm={12}>
                <Card direction="row">
                  <CardContent alignItems="center" padding="15px 25px">
                    <CardIcon
                      style={{ marginRight: '15px' }}
                      padding="0px"
                      width="40px"
                    >
                      <Easy />
                    </CardIcon>
                    <CardTitle>??atwo??c obs??ugi</CardTitle>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Container>
      <Row style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <StyledH2>
          Zaufali nam
        </StyledH2>
      </Row>
      <Row style={{ marginBottom: '40px' }}>
        <Carousel
          items={5}
          autoplay
          transitionTime={1000}
          pauseTime={3000}
          padding={50}>
          <CarouselItem>
            <FontAwesomeIcon icon={faBehance} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faAws} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faBitcoin} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faFacebookSquare} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faCpanel} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faApple} size={'4x'} color={'#536273'} />
          </CarouselItem>
          <CarouselItem>
            <FontAwesomeIcon icon={faAlipay} size={'4x'} color={'#536273'} />
          </CarouselItem>
        </Carousel>
      </Row>
    </Container> */}
      <Container>
        <Footer />
      </Container>
    </>);
};

export default IndexPage;
