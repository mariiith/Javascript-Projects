# Interactive Systems: Übung 5

**Ausgabe**: 18. Juni 2020  
**Abgabe**: 24. Juni 2020 23:59 Uhr  

**Erreichte Punktzahl**: 	Theorie: **[5,5/10]**, 	Projekt: **[9,5/10]**, 	gesamt: **[15/20]**



## Theoretischer Teil: Metaphern und Conceptual Blending  *[10 Punkte]*



#### a) Metaphern *[4 Punkte]*

**1.** Wie hängen mentale Modelle und Metaphern zusammen? **[2 Punkte]**

------

Ein mentalles Modell ist das Wiedergeben bzw Repräsentieren von Wissen in unserer Vorstellung.
Darunter fallen Objekte, Systeme, Vorgänge, Problemlösungen usw.

Metaphern sind die Verwirklichung von mentalen Modellen. 

**[falsch, 0/2]**

------



**2.** Welche Risiken können durch Metaphern entstehen? **[2 Punkte]**

------

Ambiguity. Zum Beispiel die Geste, dass alles in Ordnung ist, indem man den Zeigefinder und Daumen zu einem Kreis formt,
hat in Belgien die Bedeutung, dass der Gegenüber eine Null ist.

Menschen interpretieren in manchen Metaphern etwas anderes hinein als andere, wodurch es zu Kommunikationsproblemen kommen kann.

AUch entwickeln sich die Menschen, weshalb Metaphern von damasl anders interpretiert werden können

**[richtig, 2/2]**

------





#### b) Conceptual Blending *[6 Punkte]*

**1.** Erläutern Sie das Konzept des Conceptual Blending am Beispiel des Papierkorbs.  **[2 Punkte]**

------

Es gibt zwei Inputs, die dannn zusammengeblendet werden, wodurch eine neue Struktur entsteht.

Der erste Input ist die Datei und der zweite Input ist der Mülleimer, *das ziehen des Dokumentes in den Mülleimer ist der Blend*. Dadurch wird eine neue Struktur erschaffen und zwar diese zum Löschen einer Datei.

Im echten Leben, wenn man etwas in den Papierkorb wirft, ist es nicht mehr da, wo es zuvor war, zB auf dem Schreibtisch.
Leert man dann diesen Papierkorb, ist es komplett verschwunden und nicht mehr zurückholbar.

Das Gleiche zB auf dem Laptop. Zieht man ein Dokument oder ein Bild in den Papierkorb, ist es nicht mehr da, wo es zuvor war, zB auf dem
Desktop. Leert man dann diesen Papierkorb, so ist das Element wie auch im realen Leben nicht mehr zurückholbar und verloren.

**[Genau gesehen ist das Blend der digitale Papierkorb, nicht nur die Interaktion damit. 2/2]**

------



**2.** Welche Chancen und Risiken birgt das Konzept generell für die Gestaltung interaktiver Systeme? **[4 Punkte]**

------

Chancen:

Es werden neue Funktionen geschaffen. Zum Beispiel kann man auf einem Laptop Ordner in einem Ordner anlegen, was so in Echt nicht geht. **[falsch]**

Durch ähnliche Abläufe wie im reallen Leben, wird es dem Nutzer leichter gemacht, das System zu bedienen, zu verstehen und ggf zu erlernen.
Man kann so Dinge, die einem in diesem System nicht bekannt sind, vorhersehen. **[richtig]**

Risiken:

Das System kann unter- bzw überschätzt werden, wenn vertraute Abläufe im echten Leben ähnlich zu diesem im System sind.
Zum Beipsiel kann man auf einem Laptop ein Dokument in einem Ordner abspeichern, so wie auch im echten Leben. Jeddoch kann man auch noch
weitere Ordner in diesem Ordner anlegen, was so im realen Leben nicht möglich bzw praktisch ist. Das ist dann eine Unterschätzung des Systems. **[Das stimmt zwar, ist aber eher ein Problem von Metaphern, bei denen die Funktionsweise der Quelldomäne fast 1:1 übertragen wird.]**

Funktionen sind sehr eingängig, und können die Sicht auf vertraute Abläufe etwas einengen.
zB. durch das Verschieben von Dateien in den Papierkorb, was ein sehr vertrauter Ablauf ist und wodurch das erschaffen neuer Funktionen eingeengt wird. **[Was ist daran ein Risiko von Blends?]**

**[1,5/4]**

------







## Praktischer Teil: Pizza-Bestellvorgang Teil 2 *[10 Punkte]*

In dieser Übung soll der Bestellvorgang des letzten Projekts fertig umgesetzt werden. Die Übung ist in Teilaufgaben unterteilt und in dieser Übung soll **Schritt 2 des Bestellvorgangs** (Teilaufgabe a) sowie **Schritt 3 und 4 des Bestellvorgangs** (Teilaufgabe b) umgesetzt werden.  

**Hinweis:** Sie dürfen Ihre bisherige Lösung weiter verwenden oder die bereitgestellte Musterlösung verwenden.  

Im Folgenden wird nochmals kurz erläutert, wie der gesamte Bestellvorgang aussehen soll: 

Der Nutzer soll in der Lage sein, eine eigene Pizza zusammenzustellen und diese dann auch zu bestellen. Es soll insgesamt vier Schritte geben:

- Schritt 1: Hier soll der Nutzer die grundlegenden Eigenschaften der Pizza festlegen.
- Schritt 2: Hier soll der Nutzer den Belag seiner Pizza bestimmen können.
- Schritt 3: Hier soll der Nutzer eine Übersicht seiner bisherigen Auswahl einsehen können und seine Lieferadresse festlegen können.
- Schritt 4: Hier soll der Nutzer über den Erfolg des Vorgangs informiert werden.

 Die zu bearbeitenden Teilaufgaben dieser Übung sind im Folgenden im Detail beschrieben.

### a) Bestellvorgang Schritt 2 - Pizzabelag *[5 Punkte]*

#### Patterns

- **Thumbnail Grid**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/thumbnail_grid_html
- **Hover Tools**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/hover_tools_html
- **List Builder**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/list_builder_html

#### Aufgabenstellung

Ziel dieser Übung ist es, Schritt 2 des Wizards umzusetzen und somit den Platzhalter für diesen Schritt zu ersetzen. 

Was auf die Pizza kommt, soll der Nutzer hier auswählen können. Unter der Verwendung des *Thumbnail Grid* Pattern werden dem Nutzer die verschiedenen Zutaten angezeigt (z.B. Salami, Ananas, Peperoni). Das Auswählen der einzelnen Zutaten soll durch Anklicken geschehen und eine Übersicht der schon ausgewählten Zutaten soll angezeigt werden (*List Builder* Pattern). Für jedes einzelne Element des Grids soll das *Hover Tools* Pattern angewandt werden, d.h. beim Hovern wird ein Button angezeigt, der es dem Nutzer ermöglicht, den Belag hinzuzufügen bzw. wieder zu entfernen. 

#### Beispiel

Auf https://www.youtube.com/ wird ein *Thumbnail Grid* in Kombination mit *Hover Tools (rot markiert)* verwendet.

<img src="images/hover.png" alt="Hover Tools" width="600" />

#### Anforderungen und Punkte

- Der Nutzer kann aus mindestens 8 verschiedenen Pizza Belägen wählen. **[0,5/0,5 Punkte]**
- Das *Thumbnail Grid* Pattern wird verwendet, um die Beläge zu präsentieren. Jedes Element des Grids enthält

  - ein Bild passend zum Pizzabelag **[0,5/0,5 Punkte]**
  - den Namen des Pizzabelags **[0,5/0,5 Punkte]**
  - die zusätzlichen Kosten des Pizzabelags **[0,5/0,5 Punkte]**
- Beim Drüberfahren (hovern) über ein Element des Grids wird das einzelne Element hervorgehoben. **[0,5/0,5 Punkte]**
- Beim Drüberfahren (hovern) über ein Element des Grids wird ein Button zum Hinzufügen oder Entfernen des Belags angezeigt, je nach dem ob dieser Belag schon ausgewählt wurde oder nicht. **[1/1 Punkt]**
- Dem Nutzer wird eine Liste mit den ausgewählten Belägen angezeigt (*List Builder* Pattern):

  - Das *Thumbnail Grid* soll hier als Quelle (*source*) dienen. **[0,5/0,5 Punkte]**
  - Das Ziel (*destination*) soll eine List sein, die zumindest die Namen der hinzugefügten Beläge  enthält. Ansonsten kann sie frei gestaltet werden. **[0,5/0,5 Punkte]**
  - Wenn ein Belag schon ausgewählt wurde, soll das im *Thumbnail Grid* kenntlich gemacht werden. **[0,5/0,5 Punkte]**

#### Hinweise

  - Jeder Belag kann nur einmal hinzugefügt werden.
- Auf https://thenounproject.com/ findet man brauchbare Bilder für die Beläge.
- Aufpreise können frei gewählt werden.



### b) Bestellvorgang Schritt 3 und 4 - Abschluss der Bestellung *[5 Punkte]*

#### Patterns

- **Responsive Disclosure**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/responsive_disclosure_html
- **Input Prompt**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/input_prompt_html

#### Aufgabenstellung

Ziel dieser Übung ist es, Schritt 3 und 4 des Wizards umzusetzen und somit den Platzhalter für diese Schritte zu ersetzen. 

**Schritt 3:** Hier soll eine Übersicht der ausgewählten Optionen aus Schritt 1 und 2 angezeigt werden zusammen mit dem Gesamtpreis der Bestellung. Außerdem soll dem Nutzer hier die Möglichkeit gegeben werden, eine Lieferadresse einzugeben. Dabei soll es zwei Optionen für den Nutzer zum Auswählen geben: entweder wird die Option gewählt, die Lieferadresse aus dem Profil des Nutzers zu nutzen (wir gehen davon aus, dass der Nutzer eingeloggt ist und eine Adresse hinterlegt hat) oder eine alternative Adresse einzugeben. Das Pattern *Responsive Disclosure* soll hierbei genutzt werden: die Eingabefelder der Adresse werden verborgen, wenn die erste Option ausgewählt ist und angezeigt, wenn die zweite ausgewählt ist. Die Adresseingabe soll mit Hilfe von *Input Prompts* realisiert werden. 

**Schritt 4:** Hier soll der Nutzer lediglich über den Erfolg des Vorgangs informiert werden.

#### Anforderungen und Punkte

- Der Nutzer kann eine Zusammenfassung seiner Bestellung einsehen. **[1,5/1,5 Punkte]** Diese soll zumindest folgende Informationen beinhalten:
  - Ausgewählte Größe und deren Preis
  - Ausgewählter Teig und dessen Preis
  - Ausgewählte Soße und deren Preis
  - Jeder ausgewählte Pizzabelag und dessen Preis
  - Den Gesamtpreis der Bestellung
- Der Nutzer kann wählen, ob die im Profil hinterlegte Adresse (Option 1) oder eine Alternative (Option 2) für die Lieferung verwendet werden soll. **[1/1 Punkt]**

- Die Eingabefelder für eine Alternative Adresse sollen nur angezeigt werden, wenn Option 2 ausgewählt wurde (*Responsive Disclosure*). **[1/1 Punkt]**

- Der Nutzer kann eine alternative Lieferadresse mit Hilfe von *Input Prompts* eingeben. **[1/1 Punkt]** Diese besteht aus:

  - Dem Namen des Empfängers
  - Straße und Hausnummer
  - Stadt und Postleitzahl

- Der Nutzer wird darüber informiert, dass der Vorgang erfolgreich abgeschlossen ist und die Pizza unterwegs ist. **[0,25/0,25 Punkte]**

- Der Nutzer kann einen Button klicken, der den Vorgang zurücksetzt und den Nutzer zu Schritt 1 zurückkehren lässt. **[0,25/0,25 Punkte]**

#### Hinweise

- (Schritt 3) Für die Konsistenz sollte man den Stil der *Titled Sections* aus Schritt 1 wiederverwenden, um Übersicht der Bestellung und Adresseingabe zu trennen.
- Das Label des Buttons, welcher den Nutzer zum nächsten Schritt führt, sollte angepasst werden, sodass dem Nutzer klar ist, dass durch das Klicken die Pizza bestellt wird.
  - **[Bei euch ist nicht ersichtlich, dass dieser Button zum Abschicken der Bestellung führt. -0,25]**

**[Auch wenn der Benutzer eine neue Adresse eingibt, bleibt die "Standard-Adresse" sichtbar. -0,25]**



**Gesamtpunktzahl praktischer Teil: 9,5/10. Gut gemacht!**