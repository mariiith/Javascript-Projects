# Interactive Systems: Übung 3

**Ausgabe**: 28. Mai 2020  
**Abgabe**: 3. Juni 2020 23:59 Uhr  

**Erreichte Punktzahl**: 	Theorie: **[9/10]**, 	Projekt: **[8/10]**, 	gesamt: **[17/20]**



## Theoretischer Teil: Zielgerichtete Handlungen und Fehler  *[10 Punkte]*

Der Nutzer eines Computersystems möchte den Inhalt seiner externen Festplatte lokal auf seinen Computer kopieren.



#### a) Seven Stages of Action *[7 Punkte]*

Beschreiben Sie anhand des Modells *Seven Stages of Action* einen kompletten (!) und erfolgreichen Ablauf für diese zielgerichtete Handlung. **[1 Punkt pro *Stage of Action*]**

------

*Antwortbereich*

1. **Ziel**: Datenübertragung  **[richtig, 1/1 Punkt]**
2. **Beabsichtigte Handlung**: Inhalt der externen Festplatte auf Computer kopieren  **[richtig, 1/1 Punkt]**
3. **Folge von Aktionen**: Computer anschalten, Festplatte einstecken, Finder öffnen, Festplatte auswählen, Daten anklicken, Daten rüberziehen  **[richtig, 1/1 Punkt]**
4. **Ausführung von Aktionen**: zum Computer laufen, Startknopf finden und drücken, warten bis hochgefahren wurde, keyboard verwenden, passwort eingeben, maus finden, auf Finder klicken, Externe Festplatte raussuchen und einstecken, auf externe Festplatte im Finder klicken, Daten die übertragen werden sollen markieren durch ein mausclick, Daten per drag and drop in einen Ort auf dem lokalen Computer bewegen.  **[richtig, 1/1 Punkt]**
5. **Beobachtung der Reaktion**: Daten können übertragen werden oder nicht.  **[falsch: das hier ist schon eine Interpretation der Beobachtung. Die Beobachtung wäre zB, dass dass die Datei-Icons im Zielordner erscheinen oder dass eine Fehlermeldung kommt, dass der Kopiervorgang nicht möglich, weil die Festplatte voll ist. 0/1 Punkt]**
6. **Interpretation der Beobachtung**: Daten werden übertragen oder nicht (kein Speicher auf lokalen Computer mehr, Keine Daten ausgewählt?)  **[richtig, 1/1 Punkt]**
7. **Bewertung der Ergebnisse**: Daten der externen Festplatte wurden fehlerfrei auf den Computer übertragen, falls nicht, beginne wieder bei Schritt 1  **[richtig, 1/1 Punkt]**



------





#### b) Fehlerarten *[3 Punkte]*

**1.** Nennen Sie einen *Slip*, der bei der obigen Handlung auftreten kann. **[1 Punkt]**

------

Auf den Startknopf drücken, mit dem Gedanken, der Computer sei aus und dabei den Computer versehentlich ausschalten, da er eigentlich An war.

 **[richtig, 1/1 Punkt]**

------



**2.** Spezifizieren Sie die Stelle (*Stage*), an der diese Fehlleistung auftritt. **[1 Punkt]**

------

4. Stage, Ausführung von Aktionen

    **[richtig, 1/1 Punkt]**

------



**3.** Wie könnte der von Ihnen genannte *Slip* vermieden werden? **[1 Punkt]****

------

Auf eine Random Taste drücken wie zB. space und schauen ob der Bildschirm angeht. Wenn er angeht kann man den Schritt mit dem Anschalten des Computer überspringen, wenn nicht dann nicht.

 **[richtig, 1/1 Punkt]**

------



 





## Praktischer Teil: Eine einfache ToDo-Liste *[10 Punkte]*

### Patterns

- **Animated Transitions**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/animated_transition_html
- **Input Prompt**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/input_prompt_html
- **Row Striping**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/row_striping_html

### Aufgabenstellung

Ziel dieser Übung ist es, ein kleines Interface für eine einfache ToDo-Liste zu erstellen. Der Nutzer soll in ein Eingabefeld einen Text eingeben können und diesen dann zu der Liste hinzufügen können. Der Fokus hier soll auf den Animationen der Listeneinträge liegen, sowohl beim Hinzufügen als auch beim Entfernen.

### Anforderungen und Punkte

- Der Nutzer kann mit Hilfe eines Text-Eingabefelds (*Input Prompt*) und eines Buttons neue Einträge der ToDo Liste anfügen. **[2/2 Punkte]**
- Ein einzelner Listeneintrag soll aus dem eingegeben Text bestehen und einem Button zum Löschen des Eintrags, leere Einträge sind nicht erlaubt. **[2/2 Punkte]**
- Die Listeneinträge sollen alternierende Hintergrundfarben besitzen (*Row Striping*). Auch nach Aktualisierung der Liste (Hinzufügen oder Entfernen von Einträgen) sollte das *Row Striping* aktualisiert werden. **[2/2 Punkte]**
- Das Hinzufügen und Entfernen eines Listeneintrags wird durch eine Animation visuell unterstützt (*Animated Transition*). **[2/4 Punkte]**
  - **Das Entfernen eines Eintrags ist nicht animiert.**

### Hinweise

- Eine Hinzufügen-Animation wäre z.B., dass der Eintrag kurz aufleuchtet.
- Beim Entfernen eines Eintrags in der Mitte der Liste sollte beachtet werden, dass danach die alternierenden Farben noch stimmen.



**Gesamtpunktzahl praktischer Teil: 8/10 Punkte.**