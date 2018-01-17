{% include scripts.html %}

# Meny
 - [Søk](#Søk)
 - [Visning dokument](#Visning dokument)
 - [Sluttbruker](#Sluttbruker)
 - [Forvalter og innholdleverandør](#Forvalter og innholdleverandør)


# Søk
**Bruk: [https://test.einnsyn.no](https://test.einnsyn.no)**

***

#### Hvor mange dokumenter (journalposter) finnes i løsningen?
 
 Svar: <span style="color:white">Ca. 15 millioner, men vi har ikke lastet inn alt enda.</span>

<video  controls preload="metadata" style="width:100%">
  <source src="filtreringPåDokumentSak.webm" type="video/webm">
</video>

Merk at løsningen "husker" at man har filtrert på f.eks. interne dokument når man bytter til å filtrere på saksmappe. Detter er en bug.

***

#### Hvor mange dokumenter (journalposter) har DIFI?
 
 Svar: <span style="color:white">44 196</span>
 
<video  controls preload="metadata" style="width:100%">
  <source src="enkelFiltrering.webm" type="video/webm">
</video>
 
***
 
 
#### "Avdeling for kommunikasjon" er en undervirksomhet under Arbeidstilsynet. Hvem har de pratet med om "Overvåkningssystem"?
 
 Svar: <span style="color:white">NRK Trøndelag</span>
 
<video  controls preload="metadata" style="width:100%">
  <source src="dypFiltrering.webm" type="video/webm">
</video>


***



#### Sorterting er verdt å øve på. Kan du finne dokumentdato på det tidligst publiserte dokumentet?

Hint: <span style="color:white">Filtrer på Dokument. </span>

Hint: <span style="color:white">Sorter på eldste først. </span>

Hint: <span style="color:white">Velg datotype i DATOAVGRENSING (husk å trykke på "Vis datotype"</span>

Svar: <span style="color:white">3.04.0004 hehe :)</span>

<video  controls preload="metadata" style="width:100%">
  <source src="sortering.webm" type="video/webm">
</video>


***
#### Søke på nynorsk ord

Prøv feks.

 - tilskudd / tilskot
 - annerledes / annleis
 - antakelig / truleg (merk at stemming ikke fungerer her)

<video  controls preload="metadata" style="width:100%">
  <source src="Kapture 2018-01-17 at 12.16.58.webm" type="video/webm">
</video>

*** 

#### Søke på saksnummer

Man kan søke på saksnummer på formatet "år/sekvensnummer" eg. 2017/297

Søket gir ofte mange treff, så filtrering på virksomhet er lurt.

Det er også mulig å søke på to siffer for år, eg. 17/297

Vi støtter ikke ledende 0 eller andre tegn, men det er planlagt for fremtiden. Da vil man kunne søke på 2017/0297 og kanskje 2017/0297-1 (for dokument).

<video  controls preload="metadata" style="width:100%">
  <source src="søkPåSaksnummer.webm" type="video/webm">
</video>


***

#### Søke med *

Søk med stjerne er mulig på slutten av et ord. Det fungerer ikke for * først, eller for * inni ord. Det er maks 3 stjerner.

<video  controls preload="metadata" style="width:100%">
  <source src="stjerneSøk.webm" type="video/webm">
</video>

***

#### Søke med "eller" og "minus"

Søk er "og" som standard. Man kan bruke | for å søke på to ord selv om de ikke forekommer i samme dokument.

<video  controls preload="metadata" style="width:100%">
  <source src="ellerSøk.webm" type="video/webm">
</video>


Hvis man får for mange treff, så kan man redusere søket ved å fjerne ord. Feks: bistand systemutvikling -midlertidig -soa -tilbud -avrop

Husk at det ikke skal være mellomrom etter -

Det er også viktig å vite at detter fungerer dårlig på tvers av dokument og saksmappe.

<video  controls preload="metadata" style="width:100%">
  <source src="fjerneTreff.webm" type="video/webm">
</video>


***

#### Info om spesialtegn i søk

Hvor finner man mer info om spesialtegn? 

Trykk på "Om eInnsyn" øverst og velg "Brukerveiledning".

[https://test.einnsyn.no/informasjon/brukerveiledning](https://test.einnsyn.no/informasjon/brukerveiledning)


***

#### SSB og Finansdepartementet har vært i blesten for ikke så lenge siden. Hvor mange dokument/saker har Finansdepartementet om SSB?
 
 Husk at SSB er en forkortelse, så du søke på både SSB og Statistisk sentralbyrå.
 
 Svar: <span style="color:white">1 636</span>
 
Hvis du også legger til det fra Finanstilsynet, hvor mange blir det da?

 Svar: <span style="color:white">1 705</span>

***

#### Difi og KMD har snakket sammen om budsjett. Hva har de snakket sammen om?
 
 Tips:
  - Man kan filtrere på flere virksomheter samtidig.
  - Man kan søke på flere ord, og gruppere logikk. F.eks. auka (leikanger skole | oslo skole)
  - Man kan fjerne ting fra søket, f.eks. -sametinget
 
 Svar: <span style="color:white">Statsbudsjettet, frokostseminar, medfinansieringsordningen og digital opplæring</span>
 
 **Video viser gruppering av logikk i fritekstsøk**
 
<video  controls preload="metadata" style="width:100%">
  <source src="difiKmdGruppering.webm" type="video/webm">
</video>


***

#### Finn det utgående brevet hos Difi

[Start med dette dokumentet](https://test.einnsyn.no/saksmappe?id=http%3A%2F%2Fdata.einnsyn.no%2Foep-dump%2Fsaksmappe%2F3435209&jid=http%3A%2F%2Fdata.einnsyn.no%2Foep-dump%2Fjournalpost%2F16918699)

Prøv å finn det utgående brevet hos Difi.

Tips:
 - Filtrere på virksomhet
 - Søke på tittel
 - Avgrens datoene
 - Filtrer på utgående/innkommende
 
 <video  controls preload="metadata" style="width:100%">
   <source src="difiKmdFinnUtgående.webm" type="video/webm">
 </video>








# Sluttbruker
**Bruk: [https://test.einnsyn.no](https://test.einnsyn.no)**


***

#### Prøv å opprett en bruker.

Gå til [https://www.mailinator.com](https://www.mailinator.com) for å få en ny epost.

Forslag til passord: Passord123!

<video  controls preload="metadata" style="width:100%">
  <source src="opprettBruker.webm" type="video/webm">
</video>




***

#### Gjør et søk og lagre søket. Kan du finne det igjen i Mitt eInnsyn?

Hva gjør abonnere på søk? Da får du epost når det kommer nye treff i søket ditt. Du kan melde deg av på Mitt eInnsyn.

<video  controls preload="metadata" style="width:100%">
  <source src="lagreSøk.webm" type="video/webm">
</video>




***

#### Gå inn på en sak (eller trykk på saken fra et dokument). Lagre saken.

<video  controls preload="metadata" style="width:100%">
  <source src="lagreSak.webm" type="video/webm">
</video>


***

#### Opprette et innsynskrav

<video  controls preload="metadata" style="width:100%">
  <source src="innsynskrav.webm" type="video/webm">
</video>
***

#### Endre status på innsynskrav selv

Status oppdaterer seg ikke automatisk. Men brukere kan endre statusen på innsynskravene manuelt i løsningen. De kan se tidligere statuser. 

Sortering og filtrering på status fungerer ikke i dagens løsning.

Merk, det er mulig å "ødelegge" innsynskravene ved å endre status for raskt, slik at løsningen mister oversikt over rekkefølgen. Det er ikke noen enkel måte å fikse det på.


<video  controls preload="metadata" style="width:100%">
  <source src="innsynskravStatus.webm" type="video/webm">
</video>
***


#### Opprette et innsynskrav anonymt

Husk å logge ut

<video  controls preload="metadata" style="width:100%">
  <source src="innsynskravAnonymt.webm" type="video/webm">
</video>
***


# Forvalter og innholdleverandør
**Bruk: [https://test.einnsyn.no](https://test.einnsyn.no)**
**Logg inn som forvalter med "admin" som brukernavn**

***

#### Opprette en virksomhet


<video  controls preload="metadata" style="width:100%">
  <source src="opprettVirksomhet.webm" type="video/webm">
</video>




***

#### Opprette en virksomhetsbruker

Gå til [https://www.mailinator.com](https://www.mailinator.com) for å få en ny epost.


<video  controls preload="metadata" style="width:100%">
  <source src="opprettVirksomhetsbruker.webm" type="video/webm">
</video>




***

#### Opprette undervirksomhet

Logg inn som virksomhetsbrukeren din og opprett en undervirksomhet. 

<video  controls preload="metadata" style="width:100%">
  <source src="opprettUndervirksomhet.webm" type="video/webm">
</video>




***

#### Opprette bruker på undervirksomhet

Opprett en bruker på den nye undervirksomheten din.

Denne brukeren får rettigheter på dette nivået og nedover.

<video  controls preload="metadata" style="width:100%">
  <source src="opprettBrukerUndervirksomhet.webm" type="video/webm">
</video>



***

#### Sletting - undervirksomhet

Man kan ikke slette en virksomhet som har brukere eller data. Men hvis man sletter brukeren så kan man slette undervirksomheten.

<video  controls preload="metadata" style="width:100%">
  <source src="slettUndervirksomhet.webm" type="video/webm">
</video>



***

#### Sletting - virksomhet

Man kan fint slette seg selv, men for å slette en topp virksomhet så må man være forvalter.

<video  controls preload="metadata" style="width:100%">
  <source src="slettVirksomhet.webm" type="video/webm">
</video>



***

#### Skjule en virksomhet

Virksomheter kan skjules hvis de har feilpublisert noe og de ikke vil at noen skal få se hva de har publisert.

Kun virksomheten hvor dataene er blitt levert blir skjult. Så hvis man har et dypt hierarki av virksomheter og man ønsker å skjule alt, så må man skjule én og én. 
Undervirksomheter som er av administrativEnhet kan ikke skjules, selv om det kan se slik ut.

Logg inn som forvalter ("admin") og skjul en **tilfeldig** virksomhet. Ikke skjul DIFI! Husk å logge ut for å se om skjulingen fungerte.

**Husk å vise virksomheten igjen når du er ferdig!**

<video  controls preload="metadata" style="width:100%">
  <source src="skjulVirksomhet.webm" type="video/webm">
</video>

***


#### Slette data

Virksomheter kan slette data hvis de har feilpublisert noe. Enten ett og ett dokument, eller en sak med alle dokumentene. 

Opprett en virksomhetsbruker på en tilfeldig virksomhet (ikke DIFI). 

Gå til [https://www.mailinator.com](https://www.mailinator.com) for å få en ny epost.

Logg inn som virksomhetsbrukeren din, filtrer på virksomheten din i et søk og slett et dokument. Merk at dokumentet er borte hvis du søker på nytt.

<video  controls preload="metadata" style="width:100%">
  <source src="sletteData.webm" type="video/webm">
</video>

***


