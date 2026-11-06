# Steam Component Challenge – Gruppeoppgave

## Om prosjektet

I denne oppgaven skal dere gjenskape deler av Steam Store ved hjelp av **HTML, CSS og vanilla JavaScript**.

Dere får utdelt et ferdig prosjekt med:

- JavaScript-filer for de ulike komponentene.
- Ferdige data i form av objekter og arrays.
- Bilder, ikoner og logo.
- Referansebilder fra et Figma-design.
- En `main.js` som setter sammen komponentene.

Målet er å lære hvordan man kan utvikle ulike deler av en nettside hver for seg, og deretter sette dem sammen til et større prosjekt.

Dere skal jobbe i **grupper på fire personer**, der hver person har ansvar for én komponent.

---

## 1. Kom i gang

### Klon prosjektet

Alle på gruppen skal først klone GitHub-repositoriet til sin egen datamaskin.

1. Åpne GitHub-repositoriet dere har fått utdelt.
2. Kopier URL-en til repositoriet, **eller klon det ved bruk av GitHub Desktop**
3. Åpne terminalen i VS Code og skriv `git clone <repository-url>`
4. Åpne prosjektmappen i VS Code.

### Samarbeid med GitHub eller Live Share

Dere skal samarbeide om det samme prosjektet.

Dere kan velge mellom to metoder:

**Alternativ 1: GitHub Collaborators**

- Én person har ansvar for repositoriet.
- De andre legges til som collaborators.
- Hver person jobber på sin egen branch.
- Når en komponent er ferdig, opprettes en Pull Request.
- Endringene merges inn i hovedbranchen etter at de er gjennomgått.

_Kan også pushe til main hvis dere ikke er kjent med branches_

**Alternativ 2: VS Code Live Share**

- Én person åpner prosjektet i VS Code.
- Start en Live Share-økt.
- Inviter de andre på gruppen.
- Fordel filene mellom dere slik at dere ikke redigerer samme fil samtidig.

Uansett hvilken metode dere velger, skal alle bidra med kode.

---

## 2. Prosjektstruktur

Prosjektet er organisert slik:

```text
Steam Component Challenge/
│
├── index.html
├── main.js
├── styles/
│   └── base.css
│
├── public/
│   ├── icons/
│   │   ├── arrow_icon.png
│   │   ├── favourite_icon.png
│   │   ├── notification_icon.png
│   │   ├── people_icon.png
│   │   └── windows8_icon.png
│   ├── images/
│   │   ├── american-truck-simulator.jpg
│   │   ├── avatar.png
│   │   ├── baldurs-gate.jpg
│   │   ├── batman-arkham-knight.jpg
│   │   ├── call-of-duty.jpg
│   │   ├── cyberpunk-2077.jpg
│   │   ├── elder-scrolls-online.jpg
│   │   ├── fallout-76.jpg
│   │   ├── logo.png
│   │   ├── metal-gear.jpg
│   │   ├── mortal-kombat-11.jpg
│   │   ├── new-world.jpg
│   │   ├── red-dead-redemption-2.jpg
│   │   ├── rust.jpg
│   │   └── starfield.jpg
│   └── project-design/
│       ├── header_component.png
│       ├── recently_updates_component.png
│       ├── steam_store.png
│       ├── top_sellers_component.png
│       └── under_5_dollars_component.png
├── src/
│   ├── components/
│   │   ├── GameCard.js
│   │   ├── Header.js
│   │   ├── SaleCard.js
│   │   └── UpdateCard.js
│   └── data/
│       └── steamData.js
```

### Hva brukes filene til?

| Fil/mappe                | Beskrivelse                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `index.html`             | Hovedfilen som laster inn JavaScript og CSS.                |
| `main.js`                | Setter sammen komponentene og viser dem på nettsiden.       |
| `styles/base.css`        | CSS for nettsiden.                                          |
| `src/data/steamData.js`  | Inneholder ferdige objekter og arrays med data.             |
| `src/components/`        | Inneholder JavaScript-funksjonene som genererer HTML.       |
| `public/images/`         | Inneholder spillbilder og Steam-logoen.                     |
| `public/icons/`          | Inneholder ikonene som brukes i designet.                   |
| `public/project-design/` | Inneholder referansebilder av designet dere skal gjenskape. |

---

## 3. Arbeidsfordeling

Hver person på gruppen skal velge én komponent.

| Person   | Komponent        | Fil                            |
| -------- | ---------------- | ------------------------------ |
| Person 1 | Header           | `src/components/Header.js`     |
| Person 2 | Top Sellers      | `src/components/GameCard.js`   |
| Person 3 | Recently Updated | `src/components/UpdateCard.js` |
| Person 4 | Under $5         | `src/components/SaleCard.js`   |

Alle skal ha ansvar for både **HTML-generering med JavaScript og CSS** for sin komponent.

**Lag eventuelt flere funksjoner som mindre komponenter enn å gjenta kode**.

### Person 1 – Header

Du skal gjenskape headeren fra designet.

Headeren inneholder blant annet:

- Steam-logo.
- Navigasjonsmeny.
- Brukerinformasjon.
- Ikoner.
- Eventuelle knapper og andre elementer.

Du skal bruke:

- Navigasjonsdata fra `src/data/steamData.js`.
- Brukerdata fra `src/data/steamData.js`.
- Logo fra `public/images/`.
- Ikoner fra `public/icons/`.

### Person 2 – Top Sellers

Du skal gjenskape seksjonen som viser de mest populære spillene.

Hvert spillkort skal vise relevant informasjon fra dataene, for eksempel:

- Spillbilde.
- Spilltittel.
- Pris.
- Eventuell rabatt.
- Ikoner.

Du skal bruke:

- Arrayen med Top Sellers fra `src/data/steamData.js`.
- Spillbilder fra `public/images/`.
- Ikoner fra `public/icons/`.

### Person 3 – Recently Updated

Du skal gjenskape seksjonen som viser spill som nylig har fått oppdateringer.

Hvert kort skal vise relevant informasjon, for eksempel:

- Spillbilde.
- Spilltittel.
- Beskrivelse av oppdateringen.
- Informasjon om bibliotek eller ønskeliste.

Du skal bruke:

- Arrayen med Recently Updated fra `src/data/steamData.js`.
- Spillbilder fra `public/images/`.
- Ikoner fra `public/icons/`.

### Person 4 – Under $5

Du skal gjenskape seksjonen som viser spill på tilbud til under fem dollar.

Hvert spillkort skal vise relevant informasjon, for eksempel:

- Spillbilde.
- Spilltittel.
- Opprinnelig pris.
- Tilbudspris.
- Rabattprosent.
- Når tilbudet avsluttes.

Du skal bruke:

- Arrayen med Under $5 fra `src/data/steamData.js`.
- Spillbilder fra `public/images/`.
- Ikoner fra `public/icons/`.

---

## 4. Bruk av data

All nødvendig informasjon ligger allerede i:

`src/data/steamData.js`

Denne filen inneholder objekter og arrays som dere skal bruke til å generere innholdet på nettsiden.

Dere skal ikke skrive inn all spillinformasjonen manuelt i HTML.

I stedet skal dere bruke dataene fra JavaScript.

---

## 5. Bilder, ikoner og logo

Alle bildene og ikonene dere trenger, er allerede lagt inn i prosjektet.

Det finnes også objekter i `src/data/steamData.js` som inneholder filstiene.

Bruk disse objektene når dere skal vise ikoner bildene istedenfor å skrive inn filstiene direkte.

Dere trenger ikke å lage egne ikoner.

### Referansebilder

Bildene av designet ligger i:

`public/project-design/`

Disse bildene viser hvordan komponentene skal se ut.

Bruk dem aktivt mens dere jobber med HTML og CSS.

Målet er å gjenskape designet så nøyaktig som mulig.

---

## 6. Lage komponenter med JavaScript

Prosjektet bruker vanlig JavaScript, uten React eller andre rammeverk.

Hver komponent er en JavaScript-funksjon som returnerer en HTML-streng.

Dere har allerede fått opprettet funksjonene i komponentfilene.

De returnerer foreløpig en tom streng:

```javascript
function TopSellers() {
  return "";
}
```

Deres oppgave er å fylle funksjonen med HTML, og Javascript. Husk å lage hjelpefunksjoner slik at ikke én funksjon blir for stor! Del det opp og gjenbruk det du kan.

Bruk dataene fra `steamData.js` til å generere innholdet dynamisk.

### main.js

I `main.js` blir komponentene satt sammen og vist på nettsiden.

Eksempel:

```javascript
function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${Header()}

    <main>
      ${TopSellers()}
      ${RecentlyUpdated()}
      ${UnderFive()}
    </main>
  `;
}

renderApp();
```

Dere trenger i utgangspunktet ikke å endre denne filen.

Når dere skriver HTML i komponentfunksjonene, vil innholdet automatisk bli inkludert når `renderApp()` kjøres.

**Viktig:** Funksjonene må returnere en HTML-streng for at innholdet skal vises.

---

## 7. CSS og styling

Hver person har ansvar for å style sin egen komponent.

Dere skal bruke referansebildene fra Figma-designet for å gjenskape:

- Farger.
- Størrelser.
- Avstander.
- Typografi.
- Plassering av elementer.
- Bilder og ikoner.
- Layout med Flexbox eller CSS Grid.

### Unngå at CSS påvirker andre komponenter

Siden dere jobber på samme nettside, må dere passe på at CSS-en deres ikke ødelegger for de andre komponentene.

Bruk derfor egne klassenavn for komponentene.

Eksempel:

```css
.top-sellers {
  padding: 20px;
}

.top-sellers .games-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.top-sellers .game-card {
  background-color: #1b2838;
}
```

Unngå å bruke generelle selektorer som påvirker hele nettsiden, med mindre dere har avtalt det på gruppen.

For eksempel kan styling av alle `section`, `img` eller `button` påvirke komponentene til de andre.

Avtal gjerne hvordan dere skal organisere CSS-en før dere begynner.

---

## 8. Hvordan dere skal jobbe

Arbeidet skal gjennomføres i tre faser.

### Fase 1 – Individuelt arbeid

Start med å fordele komponentene mellom dere.

Deretter skal hver person jobbe med sin egen komponent.

Dere skal:

1. Studere referansebildet for komponenten.
2. Undersøke hvilke data som finnes i `steamData.js`.
3. Skrive JavaScript som genererer HTML.
4. Lage CSS som gjenskaper designet.
5. Teste komponenten underveis.
6. Ferdigstille komponenten så langt dere klarer.

**I denne fasen skal dere først og fremst konsentrere dere om deres egen komponent.**

Dere kan selvfølgelig hjelpe hverandre dersom noen står fast.

### Fase 2 – Sett sammen komponentene

Når alle har kommet så langt de kan med sine komponenter, skal dere samle arbeidet.

Hvis dere bruker GitHub, må dere sørge for at alle endringene blir merget inn i prosjektet.

Hvis dere bruker Live Share, må dere kontrollere at alle komponentene er lagret og fungerer sammen.

Start nettsiden og se hvordan resultatet blir når alle komponentene vises samtidig.

### Fase 3 – Felles testing og forbedringer

Nå skal dere jobbe sammen som en gruppe.

Kontroller blant annet:

- Vises alle komponentene?
- Lastes alle bilder og ikoner riktig?
- Hentes informasjonen fra `steamData.js`?
- Er det noen JavaScript-feil i konsollen?
- Påvirker CSS fra én komponent andre komponenter?
- Er avstandene mellom komponentene riktige?
- Ligner nettsiden på referansebildene?

Gjør nødvendige endringer og test nettsiden på nytt.

Målet er at alle komponentene skal fungere sammen som én nettside.

---

## 9. Hva trenger ikke å fungere?

Dere trenger ikke å implementere funksjonalitet for knapper eller andre interaktive elementer.

Det betyr for eksempel at:

- Navigasjonslenker ikke trenger å føre til andre sider.
- Ønskelisteknapper ikke trenger å legge til spill.
- Knapper ikke trenger å utføre handlinger.
- Søkefelt ikke trenger å kunne søke.
- Andre interaktive elementer ikke trenger JavaScript-funksjonalitet.

Elementene skal likevel være med dersom de finnes i designet.

**Det viktigste er at nettsiden ser riktig ut, og at innholdet genereres fra de ferdige dataene.**

---

## 10. Hva er målet med oppgaven?

I denne oppgaven skal dere øve på flere viktige ferdigheter innen webutvikling.

### JavaScript

- Bruke objekter og arrays.
- Hente ut informasjon fra ferdige datastrukturer.
- Bruke funksjoner som returnerer HTML.
- Bruke template literals.
- Bruke `.map()` til å generere HTML dynamisk.

### HTML og CSS

- Lage semantisk HTML.
- Gjenskape et eksisterende design.
- Bruke Flexbox og CSS Grid.
- Jobbe med bilder og ikoner.
- Lage CSS som ikke påvirker andre komponenter.

### Samarbeid

- Samarbeide om et felles kodeprosjekt.
- Bruke GitHub eller Live Share.
- Fordele arbeidsoppgaver.
- Jobbe med kode andre har skrevet.
- Sette sammen flere komponenter.
- Finne og rette feil som oppstår når kode kombineres.

---
