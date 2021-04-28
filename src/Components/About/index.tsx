import React from 'react';
import './style.scss';
import image from '../../images/about-image.jpg'

class About extends React.Component {
    render() {
        return (
            <div className="About">
                <div className="imagewrapper">
                    <img src={image} alt="Nuori nainen käyttää kannettavaa tietokonetta keittiönpöydän äärellä, taustalla nuori mies" />
                </div>
                <p className="standfirst">
                    DigiPoint-hankkeen tavoitteena on kehittää työnhakijoille sujuvia väyliä digialojen työpaikkoihin ja koulutukseen. Hanke vahvistaa työnhakijoiden sosiaalisia taitoja ja elämänhallintaa sekä kehittää joustavia opintomahdollisuuksia korkeakouluissa. Hanke tuottaa osaavaa ja koulutettua työvoimaa työvoimapulasta kärsiville teknologia-aloille.</p><p>
                    DigiPoint kehittää palveluja ja toimintamalleja, jotka sopivat vaikeasti työllistyvien henkilöiden osaamisen kehittämiseen ja elämäntilanteeseen. Tarkoituksena on vaikuttaa positiivisesti henkilöiden elämäntilanteeseen ja työllistymisen edellytyksiin. Heidän itsetuntemuksensa, sosiaaliset taitonsa ja vuorovaikutustaitonsa vahvistuvat. Tulevaisuudennäkymästä tulee positiivisempi ja tavoitteet koulutus- ja työnhaussa selkiytyvät.</p><p>
                    Korkeakouluyhteistyön ja joustavien opintomahdollisuuksien lisääminen on tarpeellista, jotta mahdollisimman moni vaikeasti työllistyvä henkilö saa elämäntilanteeseensa sopivia osaamisen kehittämisen palveluja ja malleja. Korkeakoulujen on tunnistettava työelämässä tarvittava osaaminen paremmin, jotta voidaan kehittää opiskelijan ja työelämän toimijoiden osaamista työmarkkinoiden tarpeen mukaan sekä tunnistaa myös muualla hankittu osaaminen osaksi opintoja.</p><p>
                    Hankkeessa haetaan myös ratkaisuja digitalisaation aiheuttamiin osaamisvaatimuksiin työelämässä ja hyödynnetään digitaalisuuden mahdollisuuksia osaamisen kehittämisessä.
                </p>
                <p>
                    Vantaan DigiPoint-osahankkeen päätavoitteena on parantaa ICT-osaamistaustaisten toisen asteen suorittaneiden nuorten työttömien työnhakijoiden työllistymistä. Tavoitteeseen päästään tarjoamalla nuorille kahdenlaisia ryhmämuotoisia toimintoja. Lyhyemmissä kuuden viikon mittaisissa työpajajaksoissa edistetään työllistymistä kohentamalla työelämätaitoja tehostetulla monialaisella tuella ja tiiviillä yritysyhteistyöllä. Työpajajaksot voivat sisältää koodausta, robotiikkaa, pelisuunnittelua, maker-kulttuuria jne. Näitä työpajajaksoja on tarjolla noin sadalle vantaalaiselle nuorelle lokakuusta 2020 lähtien.</p><p>
                    Pidemmissä kuuden kuukauden mittaisissa ammattikorkeakoulukokeiluissa tähtäimenä on poluttuminen kohti AMK-tutkinto-opiskelua. Jakson aikana suoritetaan Laurean tarjoamia avoimen ammattikorkeakoulun kursseja, joiden sisältö vaihtelee työelämätaidoista ICT-taitoihin. AMK-kokeilu alkaa 23.11.2020 ja kestää 21.5.2021 saakka. Paikkoja on tarjolla 20–30 nuorelle. Opinnot on mahdollista suorittaa lyhytkestoisena opiskeluna (yli 25-vuotiaat) tai sivutoimisina opintoina (alle 25-vuotiaat) työttömyysetuudella. Tätä oikeutta pitää hakea erikseen TE-toimistosta.
                </p>
                <p>
                    <a href="https://webropol.com/s/digipoint">Jos haluat mukaan DigiPointiin, täytä yhteydenottolomake</a>.
                </p>
                <p><b>Hankkeessa mukana:</b> Turun kaupunki (päätoteuttaja), Vantaan kaupunki, Espoon kaupunki, Helsingin kaupunki/Stadin ammatti- ja aikuisopisto, Laurea ammattikorkeakoulu ja Metropolia ammattikorkeakoulu.</p>
                <ul>
                    <li>Kesto: 1.4.2020 - 31.12.2021</li>
                    <li>Budjetti: 1 342 594 euroa</li>
                </ul>
            </div>
        );
    }
}

export default About;
