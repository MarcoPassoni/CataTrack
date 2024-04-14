# CataTrack 🚀

## Servizi
[![News API](https://img.shields.io/badge/News%20API-Explore-00ACEE?style=flat&logo=feedly&logoColor=white)](https://newsapi.org) [![EmailJS](https://img.shields.io/badge/EmailJS-Send%20Email-0eafd0?style=flat&logo=email&logoColor=white)](https://www.emailjs.com) [![NASA EONET](https://img.shields.io/badge/NASA%20EONET-Explore%20Events-0067C5?style=flat&logo=nasa&logoColor=white)](https://eonet.gsfc.nasa.gov) [![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) [![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com) [![Leaflet](https://img.shields.io/badge/Leaflet-Interactive%20Maps-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)

## Collaboratori fornitura dati 🤝

[![METOC Navy](https://img.shields.io/badge/METOC%20Navy-Explore-0094FF?style=flat&logo=navy&logoColor=white)](https://www.metoc.navy.mil/) [![DisasterAware](https://img.shields.io/badge/DisasterAware-Explore-F55848?style=flat&logo=disasteraware&logoColor=white)](https://disasteraware.pdc.org/) [![Smithsonian Volcano](https://img.shields.io/badge/Smithsonian%20Volcano-Explore-FF5733?style=flat&logo=volcano&logoColor=white)](https://volcano.si.edu/) [![Copernicus Emergency](https://img.shields.io/badge/Copernicus%20Emergency-Explore-34A853?style=flat&logo=copernicus&logoColor=white)](https://emergency.copernicus.eu/) [![NASA Earth Observatory](https://img.shields.io/badge/NASA%20Earth%20Observatory-Explore-4781A5?style=flat&logo=nasa&logoColor=white)](https://earthobservatory.nasa.gov/) [![GDACS](https://img.shields.io/badge/GDACS-Explore-F7931E?style=flat&logo=gdacs&logoColor=white)](https://www.gdacs.org/) [![International Charter](https://img.shields.io/badge/International%20Charter-Explore-4A90E2?style=flat&logo=charter&logoColor=white)](https://disasterscharter.org/web/guest) [![ReliefWeb](https://img.shields.io/badge/ReliefWeb-Explore-FF6347?style=flat&logo=reliefweb&logoColor=white)](https://reliefweb.int/disasters) [![BYU SCP](https://img.shields.io/badge/BYU%20SCP-Explore-003366?style=flat&logo=scp&logoColor=white)](https://www.scp.byu.edu/)

## Descrizione del Progetto 🌐

Questo progetto offre un'interfaccia interattiva per monitorare e tracciare eventi naturali come vulcani, incendi, uragani e iceberg. Integra dati provenienti dalla **NASA** e dalla **News API** per fornire agli utenti una panoramica completa degli eventi attuali. Inoltre, include un modulo di contatto che consente agli utenti di comunicare direttamente con il team di supporto.

## Motivo del Progetto 🚀

Il progetto è stato ideato come parte integrante del percorso educativo della classe **5iB** della scuola **Villa Greppi** di Monticello Brianza (LC). L'obiettivo principale è stato quello di applicare le conoscenze acquisite durante il corso di studi, mettendo in pratica le competenze informatiche nello sviluppo di un'applicazione funzionale e divertente. Questo approccio ha consentito agli studenti di acquisire esperienza pratica nell'utilizzo di tecnologie informatiche.

## Collaboratore 👨‍💻

- **Passoni Marco:** [Profilo GitHub](https://github.com/MarcoPassoni)

## Descrizione Dettagliata del Programma 📝

### Mappa Interattiva di Vulcani, Incendi, Uragani e Iceberg 🗺️

La mappa interattiva di **CataTrack** è uno strumento potente per visualizzare e comprendere gli eventi naturali come vulcani, incendi, uragani e iceberg. Questa sezione fornisce una panoramica approfondita su come la mappa viene popolata con dati in tempo reale e interagisce con gli utenti.

### Tecnologie e API Utilizzate 🛠️

##### NASA EONET API 🌌

La **NASA EONET API** è il cuore della mappa interattiva. CataTrack utilizza questa API per ottenere dati dettagliati sugli eventi naturali in tutto il mondo. In particolare, la NASA EONET offre informazioni aggiornate su:

- **Vulcani:** Localizzazione e attività vulcanica.
- **Incendi:** Estensione degli incendi e aree colpite.
- **Uragani:** Posizione, intensità e percorsi degli uragani.
- **Iceberg:** Posizione e dimensioni degli iceberg.

#### Leaflet - Libreria di Mappe Interattive 🍃

Per visualizzare gli eventi sulla mappa, CataTrack utilizza la libreria **Leaflet**. Questa libreria JavaScript open-source offre un'interfaccia user-friendly per creare mappe interattive. I marcatori sulla mappa rappresentano gli eventi naturali, e cliccandoci sopra, gli utenti possono accedere a dettagli e collegamenti alle fonti.

#### Implementazione 🚀

Al caricamento della pagina, CataTrack effettua richieste asincrone all'API della NASA EONET per ottenere dati sugli eventi naturali più recenti. I dati vengono poi elaborati e i marcatori vengono posizionati sulla mappa Leaflet. Gli utenti hanno la possibilità di selezionare un anno specifico per visualizzare gli eventi in quel periodo, fornendo un'esperienza personalizzata.

Questa mappa interattiva non solo fornisce informazioni vitali sugli eventi naturali, ma offre anche un modo coinvolgente per esplorare e apprendere. È un elemento chiave nell'approccio educativo del progetto, fornendo agli utenti uno strumento visuale per comprendere meglio la geografia degli eventi naturali e la loro distribuzione temporale.

### Notizie su Eventi Naturali 📰

CataTrack integra l'API **News**, permettendo agli utenti di selezionare categorie come vulcani, incendi, uragani e iceberg. Le notizie vengono presentate in una griglia con titoli, immagini e link diretti alle notizie complete, offrendo una panoramica completa degli sviluppi recenti legati agli eventi naturali.

### Modulo di Contatto 📬

Il modulo di contatto richiede nome, cognome, e-mail, oggetto e messaggio. La validità dei campi e dell'indirizzo e-mail viene verificata prima dell'invio. L'invio del modulo è gestito da **EmailJS**, garantendo una comunicazione diretta senza la necessità di un server backend dedicato. Dopo l'invio con successo, gli utenti ricevono un messaggio di conferma.

Questi elementi arricchiscono l'esperienza degli utenti su CataTrack, fornendo loro informazioni tempestive e una via diretta di comunicazione con il team dietro il progetto.

## Come Contribuire 🤝

Se desideri contribuire allo sviluppo di questo sito, segui i passaggi seguenti:

1. Forka il repository.
2. Crea un branch per il tuo lavoro (`git checkout -b nome-tua-caratteristica`).
3. Committa i tuoi cambiamenti (`git commit -m 'Aggiunta nuova caratteristica'`).
4. Fai push del tuo branch (`git push origin nome-tua-caratteristica`).
5. Apri una richiesta pull.

## Avviso 🚨

Si noti che il sito web è stato sviluppato con un'organizzazione particolare. L'index iniziale si trova all'interno della cartella `page_1` come `index.html`, anziché essere posizionato come l'index principale nella directory principale del sito web. Questa scelta è stata fatta per motivi organizzativi e di struttura del progetto. Per testare il sito, è necessario avviare l'`index.html` situato nella cartella `page_1`, anche se si desidera ospitarlo su un server. Questo approccio è stato adottato per garantire una corretta navigazione e funzionalità del sito. Quando il sito viene caricato su un server, è importante assicurarsi che la struttura delle directory sia mantenuta per garantire il funzionamento ottimale delle risorse e dei collegamenti interni. Se si desidera modificare l'indirizzo URL di base o utilizzare un'organizzazione diversa, è consigliabile apportare le opportune modifiche ai percorsi dei file all'interno del codice sorgente.

## Riconoscimenti 🌟

Desidero esprimere la mia profonda gratitudine ai servizi API che hanno giocato un ruolo essenziale nello sviluppo di questo sito web. Senza il loro prezioso supporto, questo progetto sarebbe stato molto più difficile da realizzare. Ogni servizio elencato qui ha contribuito in modo significativo ad arricchire l'esperienza degli utenti e a migliorare la funzionalità del sito.
Un ringraziamento speciale va a:
- [News API](https://newsapi.org) per l'accesso alle notizie in tempo reale.
- [EmailJS](https://www.emailjs.com) per semplificare la gestione delle email.
- [NASA EONET](https://eonet.gsfc.nasa.gov) per i dati preziosi sui fenomeni naturali.
- [Leaflet](https://leafletjs.com/) per la creazione di mappe interattive coinvolgenti.

Ringrazio anche i collaboratori per la fornitura di dati tramite API pubbliche:

- [METOC Navy](https://www.metoc.navy.mil/)
- [DisasterAware](https://disasteraware.pdc.org/)
- [Smithsonian Volcano](https://volcano.si.edu/)
- [Copernicus Emergency](https://emergency.copernicus.eu/)
- [NASA Earth Observatory](https://earthobservatory.nasa.gov/)
- [GDACS](https://www.gdacs.org/)
- [International Charter](https://disasterscharter.org/web/guest)
- [ReliefWeb](https://reliefweb.int/disasters)
- [BYU SCP](https://www.scp.byu.edu/)

## Licenza 📜

CataTrack è un progetto open source concesso in licenza sotto i termini della **GNU General Public License versione 3.0 (GNU GPL-3.0)**. Questa licenza promuove la condivisione e la collaborazione, garantendo che il software rimanga sempre libero e accessibile a tutti. Di seguito sono forniti alcuni dettagli chiave sulla licenza:

### [GNU GPL-3.0](https://opensource.org/licenses/GPL-3.0)

La GNU GPL-3.0 è una licenza copyleft che assicura che qualsiasi opera derivata o estesa del software originale rimanga anch'essa libera e aperta. I principali punti della licenza includono:

- **Libertà di Condividere:** Puoi condividere il software con chiunque e in qualsiasi modo.
- **Libertà di Modificare:** Se apporti modifiche al software, sei libero di distribuire tali modifiche.
- **Libertà di Distribuire:** Puoi distribuire il software e le tue modifiche, anche a scopo commerciale.

Per una comprensione completa delle condizioni della licenza, consulta il file [LICENSE.md](https://github.com/MarcoPassoni/sitoweb-MarcoPassoni/blob/main/LICENSE) all'interno del repository.

### Grazie per l'interesse e la partecipazione! 🚀

Il tuo interesse e coinvolgimento nel progetto sono molto apprezzati. La licenza open source favorisce una comunità collaborativa e consente a chiunque di contribuire, migliorare e apprezzare il lavoro svolto. Grazie per essere parte di CataTrack!
