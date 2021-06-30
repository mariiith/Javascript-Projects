# Interactive Systems: Übung 2

**Ausgabe**: 14. Mai 2020  
**Abgabe**: 20. Mai 2020 23:59 Uhr  

**Erreichte Punktzahl**: 	Theorie: **[10/10]**, 	Projekt: **[10/10]**, 	gesamt: **[20/20]**



## Theoretischer Teil: NASA TLX  *[10 Punkte]*

In einem Experiment wurden 2 Texteingabemethoden (A und B) miteinander verglichen. Jeder Teilnehmer wurde nach der Nutzung gebeten, die kognitive Belastung der beiden System mithilfe des NASA-TLX Fragebogens zu bewerten. Die folgende Tabelle zeigt die Ergebnisse für einen Teilnehmer.

|                 | Rating System A | Rating System B | Gewicht |
| --------------- | --------------- | --------------- | ------- |
| Mental Demand   | 30              | 20              | 3       |
| Physical Demand | 90              | 80              | 2       |
| Temporal Demand | 85              | 60              | 2       |
| Performance     | 25              | 10              | 1       |
| Effort          | 10              | 5               | 2       |
| Frustration     | 5               | 10              | 5       |



#### a) Berechnung des Overall Workload Score *[5 Punkte]*

**1.**  Berechnen Sie den Overall Workload Score für beide Systeme. Geben Sie auch die Rechenwege mit an. **[4 Punkte]**

------
System A: (30x3)/15 + (90x2)/15 + (85x2)/15 + (25x1)/15 + (10x2)/15 + (5x5)/15 = 510/15 = 34 **[richtig]**

System B: (20x3)/15 + (80x2)/15 + (60x2)/15 + (10x1)/15 + (5x2)/15 + (10x5)/15 = 410/15 = 27,333 **[richtig]**

**[4/4]**

------



**2.** Welches System war weniger belastend für den Nutzer?  **[1 Punkt]**

------

System B ist weniger belastend. **[richtig]**

Denn, Workload für System A (34) > Workload für System B (27,33)

**[1/1]**

------



#### b) Berechnung per Raw-TLX *[5 Punkte]*

Gehen Sie nun davon aus, dass anstatt des kompletten NASA-TLX der Raw-TLX Fragebogen verwendet wurde.

**1.**  Worin liegt der prinzipielle Unterschied gegenüber dem "vollständigen" Verfahren? **[1 Punkt]**

------

Bei NASA-TLX spielt die Gewichtung eine Rolle, bei Raw-TLX nicht, dort wird sie einfach weggelassen.
Bei NASA-TLX wird jede Skala individuell gewichtet. Ausgerechnet wird bei NASA-TLX das Overall Workload in dem man für jede Skala das Rating mit 
dem Gewicht multipliziert und alles dann zusammen addiert und am Ende durch 15 teilt. 15 deshalb, weil das die Anzahl der Vergleiche
zwischen den Skalen ist.
Außerdem zeigt die Gewichtung einer Skala wie groß der Einfluss der Skala auf den Gesamt-Workload ist. 

Bei Raw-TLX werden einfach alle Ratings addiert und durch die Anzahl an Skalen dividiert (hier also 6), denn *es gibt hier ja die Gewichtung
nicht mehr, also auch die 15 Vergleiche fallen weg.* **Genau genommen ist es andersrum: Dadurch, dass die Vergleiche wegfallen, gibt es keine Gewichtung.**

**[richtig]**

**[1/1]**

------



**2.** Berechnen Sie nun das Overall Rating für die Ergebnisse des RAW TLX Fragebogens. **[4 Punkte]**



------
Nach der Formel auf den Tutorial Slides.

System A: (30 + 90 + 85 + 25 + 10 + 5)/6 = 245/6 = 40,8333 **[richtig]**

System B: (20 + 80 + 60 + 10 + 5 + 10)/6 = 185/6 = 30,8333 **[richtig]**

**[4/4]**

------





## Praktischer Teil: Die unendliche Liste *[10 Punkte]*

### Patterns

- **Infinite List**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/infinite_list_html
-  **Loading Indicators**  
  https://proquest.tech.safaribooksonline.de/book/software-engineering-and-development/9781449379711/the-patterns/loading_indicators_html

### Aufgabenstellung

Ziel dieser Übung ist es einen Liste von Bildern angeordnet in einem Raster anzuzeigen, welche beim Erreichen des Endes der Liste durch eine Aktion des Nutzers weitere Bilder lädt.

### Beispiel

Bildersuche bei Google https://images.google.de/

<img src="images/google-search.png" alt="Google Bildersuche" width="500" />

### Anforderungen und Punkte

- Der Nutzer kann eine Liste von Bilder angeordnet in einem
  Raster betrachten. **[4/4 Punkte]**
- Der Nutzer kann beim Erreichen des Endes der Liste weitere
  Bilder durch klicken eines Buttons laden. **[3/3 Punkte]**
- Wenn neue Bilder geladen werden erhält der Nutzer Rückmeldung über den Zustand durch *Loading Indicators*. **[3/3 Punkte]**

### Hinweise

- Für die Bilder kann ein Platzhalter verwendet werden.
- Das Laden neuer Bilder kann simuliert werden, indem das Anzeigen um 1-2 Sekunden verzögert wird. So kann man die verwendeten *Loading Indicators* in Aktion sehen.



**Gesamtpunktzahl praktischer Teil: 10/10 Punkte. **

**Eure Website sieht richtig gut aus :). Gut gemacht!**

