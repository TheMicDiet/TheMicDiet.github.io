const questions = JSON.parse(`[{"question":"Softwaretechnik befasst sich mit der objektorientierten Programmierung von Altsystemen.","answer":"f"},{"question":"Software ist leichter zu ändern als ein physisches Produkt vergleichbarer Komplexität.","answer":"f"},{"question":"Software ist schwerer auszuliefern als ein physisches Produkt vergleichbarer Komplexität.","answer":"f"},{"question":"Software unterliegt keinem Verschleiß.","answer":"w"},{"question":"Werkzeuge können die Einhaltung von Methoden, Verfahren, Standards und Notationen erhöhen.","answer":"w"},{"question":"Innerhalb eines Projektes darf jeder Entwickler seinem eigenen Programmierstil folgen, solange er ihn konsequent anwendet.","answer":"f"},{"question":"In Java ist Swing die einzige mitgelieferte GUI-Schnittstelle.","answer":"f"},{"question":"Softwarekonfigurationsverwaltung ist die Disziplin zur Verfolgung und Steuerung der Evolution von Software.","answer":"w"},{"question":"CVS (Concurrent Version System) kam historisch vor RCS (Revision Control System).","answer":"f"},{"question":"SVN speichert Einbuchungen als Dateisystem-Schnappschüsse.","answer":"f"},{"question":"Ein Git-Depot ist ein gerichteter, azyklischer Graph.","answer":"w"},{"question":"Jede Git-Einbuchung hat genau eine oder zwei Eltern-Einbuchungen.","answer":"f"},{"question":"Bei jedem Einbuchen wird bei Git der Kopf-Zeiger (HEAD) automatisch auf die neu erstellte Einbuchung gesetzt.","answer":"w"},{"question":"Um einen neuen Entwicklungszweig anzulegen wird eine neue Einbuchung mit dem Ausgangszustand des neuen Zweiges erzeugt.","answer":"f"},{"question":"Git identifiziert Einbuchungen global eindeutig durch einen kryptographischen Streuwert (Hash).","answer":"w"},{"question":"SVN identifiziert Einbuchungen global eindeutig durch eine fortlaufende Nummer.","answer":"w"},{"question":"Anders als bei Git werden in SVN alle Operationen auf einem (entfernten) Depot/Server durchgeführt.","answer":"f"},{"question":"Subversion ist wie Git ein verteiltes Versionierungssystem.","answer":"f"},{"question":"Striktes Ausbuchen erfordert ein Einbuchen desselben ausbuchenden Programmierers, bevor ein zweiter Programmierer dasselbe Element strikt ausbuchen kann.","answer":"w"},{"question":"Striktes Ausbuchen von Dateien gibt dem Ausbuchenden das exklusive Änderungsrecht an den ausgebuchten Dateien.","answer":"w"},{"question":"Ein Versionskontrollsystem mit striktem Ausbuchen erlaubt pro Datei immer nur eine Ausbuchung jener Datei gleichzeitig.","answer":"w"},{"question":"Vorwärtsdeltas in einem Konfigurationsverwaltungssystem erlauben den schnellen Zugriff auf die aktuelle Revision.","answer":"f"},{"question":"Rückwärtsdeltas speichern die aktuelle Version und die davor durchgeführten Änderungen.","answer":"w"},{"question":"Git benötigt weniger Speicherplatz bei der Verwaltung der Versionshistorie als SVN.","answer":"w"},{"question":"Entwicklungszweige (branches) und benannte Versionsstände (tags) werden in Subversion als (Verzeichnis-)Kopien im Depot abgelegt und sind auf Namenskonventionen angewiesen.","answer":"w"},{"question":"Optimistisches Ausbuchen erspart Verschmelzen beim Zurückschreiben. Beim strikten Ausbuchen ist das nicht der Fall.","answer":"f"},{"question":"Git erlaubt das Einbuchen einer Änderung auch ohne Netzwerkverbindung, da es für diesen Vorgang keinen zentralen Server benötigt. Subversion hingegen braucht zum Einbuchen immer eine Netzwerkverbindung zum zentralen Server.","answer":"f"},{"question":"Das Artefakt Lastenheft dient dazu, eine grobe Übersicht über das Vorhaben abzustecken.","answer":"w"},{"question":"Das Lastenheft ist eine Verfeinerung des Pflichtenheftes.","answer":"f"},{"question":"Das Lastenheft ist ein Ergebnis der Definitionsphase.","answer":"f"},{"question":"Funktionale Anforderungen geben die Implementierung vor, indem sie die Interaktionen zwischen dem System und der Systemumgebung beschreiben.","answer":"f"},{"question":"Qualitätsanforderungen wie die Benutzbarkeit erhöhen die Systemqualität und gehören zu den funktionalen Anforderungen.","answer":"f"},{"question":"Nicht-funktionale Eigenschaften beschreiben, was das Produkt nicht tun sollte.","answer":"f"},{"question":"Nicht-funktionale Anforderungen sind sowohl Teil des Pflichtenhefts als auch des Lastenhefts.","answer":"w"},{"question":"(Hohe) Performanz ist eine funktionale Anforderung.","answer":"f"},{"question":"Sicherheit ist eine nicht-funktionale Anforderung.","answer":"w"},{"question":"Datenschutz ist eine nichtfunktionale Anforderung.","answer":"w"},{"question":"Ein Pflichtenheft spezifiziert die Anforderungen an eine Software in eindeutiger Weise, so dass sie implementiert werden können.","answer":"w"},{"question":"Das Pflichtenheft beschreibt nur, was zu implementieren ist und nicht wie.","answer":"w"},{"question":"Die Erhebungstechnik „Anwendungsfälle“ hilft bei der Bestimmung der Systemgrenzen und erfasst viel Domänenwissen.","answer":"f"},{"question":"Anwendungsfälle helfen nicht dabei, Grenzen des Softwaresystems zu bestimmen.","answer":"f"},{"question":"Attribute können im UML-Klassendiagramm durch Pfeile dargestellt werden.","answer":"w"},{"question":"In UML hat eine Methode die Signatur methodenname : Rückgabetyp(Parameterliste).","answer":"f"},{"question":"Eine Komposition ist in UML strenger als eine Aggregation, da Teile keine Daseinsberechtigung ohne das Ganze haben.","answer":"w"},{"question":"Bei Kompositionen haben Teile keine Daseinsberechtigung ohne das Ganze; dies muss beispielsweise bei Löschoperationen beachtet werden.","answer":"w"},{"question":"Um bei Multiplizitäten „beliebig viele“ auszudrücken, verwendet man 8.","answer":"f"},{"question":"UML-Anwendungsfalldiagramme werden während der Planungsphase verwendet, um das von außen sichtbare Verhalten des Systems darzustellen.","answer":"w"},{"question":"Ein UML-Anwendungsfalldiagramm modelliert typische Interaktionen des Benutzers mit dem System.","answer":"w"},{"question":"Anwendungsfalldiagramme sind dynamische Modelle.","answer":"f"},{"question":"Sequenzdiagramme skizzieren einen ganz konkreten Ablauf eines Anwendungsfalls.","answer":"w"},{"question":"Im Sequenzdiagramm zeigen Pfeile von dem Objekt weg, auf dem die angegebene Methode aufgerufen wird.","answer":"f"},{"question":"In Sequenzdiagrammen können Rückgabewerte an den Rückführungspfeilen angegeben werden.","answer":"w"},{"question":"Sequenzdiagramme skizzieren einen ganz konkreten Ablauf eines Anwendungsfalls.","answer":"w"},{"question":"UML-Sequenzdiagramme unterstützen Nebenläufigkeit.","answer":"w"},{"question":"Bei asynchronen Aufrufen im Sequenzdiagramm wird die Quelle in der Ausführung bis zum Erhalt der Antwort blockiert.","answer":"f"},{"question":"Aktivitätsdiagramme unterstützen keine Nebenläufigkeit.","answer":"f"},{"question":"In UML-Aktivitätsdiagrammen unterscheidet man zwischen Objekt- und Kontrollflüssen.","answer":"w"},{"question":"Zusicherungen in OCL sind UML-Elemente.","answer":"w"},{"question":"Nebenläufige Zustandsdiagramme sind echt mächtiger als normale Zustandsdiagramme.","answer":"f"},{"question":"Zustandsdiagramme halten immer.","answer":"f"},{"question":"Ein Zustandsdiagramm hat nur endlich viele Zustände.","answer":"w"},{"question":"H in Zustandsdiagrammen mit Gedächtnis steht für Hirn.","answer":"f"},{"question":"Jeder Zustand in einem UML-Zustandsdiagramm kann eine entry/exit-Methode angeben.","answer":"w"},{"question":"Unter welchen Umständen ein Objekt welche Botschaft entgegen nimmt, spezifiziert man in einem UML-Zustandsdiagramm.","answer":"w"},{"question":"Solange sich ein Objekt in einem Zustand befindet, reagiert es im gleichen Kontext immer gleich auf seine Umwelt.","answer":"w"},{"question":"Ein Modul sollte ohne Kenntnis der späteren Nutzung entworfen, implementiert, getestet und überarbeitet werden können.","answer":"w"},{"question":"Ein Modul ist eine Menge von Programmelementen, die nach dem Geheimnisprinzip gemeinsam entworfen und geändert werden.","answer":"w"},{"question":"Folgt man dem Geheimnis-/Kapselungsprinzip, dann wird bei einer Änderung einer Entwurfsentscheidung auch die zugehörige Schnittstelle geändert.","answer":"f"},{"question":"Das Geheimnisprinzip steigert die Widerstandsfähigkeit gegen Sicherheitslücken.","answer":"f"},{"question":"Das Geheimnisprinzip besagt, dass Implementierungsdetails hinter einer Schnittstelle verborgen sind.","answer":"w"},{"question":"Programmkomponente A benutzt Programmkomponente B genau dann, wenn der korrekte Ablauf von A die Verfügbarkeit einer korrekten Implementierung von B erfordert.","answer":"w"},{"question":"Bei einer intransparenten Schichtenarchitektur kann eine innere Schicht nur auf direkt benachbarte Schichten zugreifen.","answer":"f"},{"question":"Schichtenarchitekturen unterstützen das Testen von Programmen.","answer":"w"},{"question":"Ist die Benutztrelation zwischen Modulen zyklenfrei, sind Teillieferungen bei Entwicklungsverzögerungen einzelner Module möglich.","answer":"w"},{"question":"Wenn die Benutztrelation zyklenfrei ist, heißt sie Benutzthierarchie.","answer":"w"},{"question":"Eine Fließband-Architektur in Software kann nur auf Parallelrechnern ausgeführt werden.","answer":"f"},{"question":"Bei einer Schichtenarchitektur mit drei übereinander liegenden Schichten kann die mittlere Schicht auf die Dienste der oberen und der unteren Schicht zugreifen.","answer":"f"},{"question":"In Java muss eine Klasse, die eine Schnittstelle implementiert, alle in der Schnittstelle vorgegebenen Methoden implementieren.","answer":"f"},{"question":"Auf ein privates Attribut eines Exemplars einer Klasse kann nur das Exemplar selber zugreifen.","answer":"f"},{"question":"Das Überladen einer Methode entsteht durch die Existenz einer zweiten Methode gleichen Namens (in derselben oder einer Unterklasse), aber unterschiedlicher Argumenttypen.","answer":"w"},{"question":"Wenn eine Klasse eine abstrakte Methode besitzt, ist sie auch selbst abstrakt.","answer":"w"},{"question":"Kovarianz beschreibt die Variation von Parametertypen parallel zur Vererbungsrichtung.","answer":"w"},{"question":"Bei der Implementierungsvererbung kann die Implementierung einer Methode mit einer neuen Signatur versehen werden.","answer":"f"},{"question":"Schnittstellen können Implementierungsdetails vererben.","answer":"f"},{"question":"In Java besteht eine Methodensignatur aus dem Namen und dem Rückgabetyp.","answer":"f"},{"question":"Implementierungsvererbung ist die Voraussetzung für Signaturvererbung.","answer":"f"},{"question":"Haben zwei Klassen gleichnamige Methoden, sollten diese in eine Schnittstelle ausgelagert werden.","answer":"f"},{"question":"Bei Gleichheit 0. Stufe handelt sich um dasselbe Objekt oder die Objekte sind identisch.","answer":"w"},{"question":"Bei einer seichten Kopie eines Objekts werden alle Attribute kopiert, ausschließlich der Referenzen auf andere Objekte.","answer":"f"},{"question":"Eine Klasse B wird erst dann zu einer Unterklasse einer Klasse A, wenn gezeigt werden kann, dass jedes Exemplar von A auch als ein Exemplar von B gesehen werden kann.","answer":"f"},{"question":"static class MyClass {} deklariert in Java eine statische Klasse namens „MyClass“.","answer":"f"},{"question":"Das Adaptermuster lässt Klassen zusammenarbeiten, die wegen inkompatibler Schnittstellen ansonsten dazu nicht in der Lage wären.","answer":"w"},{"question":"Das Entwurfsmuster Strategie bietet die Möglichkeit, eine Klasse mit einer von mehreren möglichen Verhaltensweisen zu konfigurieren.","answer":"w"},{"question":"Das Schlüsselwort final in Java erlaubt es, eine Schablonenmethode so zu definieren, dass Unterklassen den Algorithmus der Schablonenmethode nicht mehr verändern können, sondern nur noch die Implementierung der Einschubmethoden überschreiben bzw. implementieren dürfen.","answer":"w"},{"question":"Eine Fassade bietet eine vereinfachte Schnittstelle zu einer Menge von Schnittstellen eines Subsystems.","answer":"w"},{"question":"Eine Fassade bietet eine einheitliche Schnittstelle zu den Schnittstellen eines Subsystems und erleichtert so dessen Benutzung.","answer":"w"},{"question":"Die beiden Entwurfsmuster Fassade und Adapter können jeweils mehrere Klassen benutzen. Der primäre Einsatzzweck des Entwurfsmusters Fassade ist es jedoch, die Schnittstelle zu vereinfachen, während der Zweck des Entwurfsmusters Adapter darin besteht, eine andere Schnittstelle für eine gegebene Klasse anzubieten.","answer":"w"},{"question":"Beim Kompositum sollten so viele Methoden wie möglich in den Blättern deklariert werden, da in der Komponente keine sinnvolle Implementierung angegeben werden kann.","answer":"f"},{"question":"Das Entwurfsmuster Kompositum erlaubt nur das Erstellen von baumartigen Strukturen, allgemeinere Graphen können nicht modelliert werden.","answer":"f"},{"question":"Das Strategiemuster erfüllt das Geheimnisprinzip, indem es Datenstrukturen, die in einer konkreten Strategie enthalten sind, vor dem Klienten verbirgt.","answer":"w"},{"question":"Klienten können mithilfe des Strategiemusters Sammlungen von Objekten und einzelne Objekte auf die gleiche Weise behandeln.","answer":"f"},{"question":"Klienten können mithilfe des Iterator-Musters Sammlungen von Objekten und einzelne Objekte auf die gleiche Weise behandeln.","answer":"f"},{"question":"Das Muster Strategie kapselt austauschbares Verhalten und verwendet Delegierung, um zu entscheiden, welches Verhalten verwendet wird.","answer":"w"},{"question":"In Java wird das Entwurfsmuster Null-Objekt durch null realisiert.","answer":"f"},{"question":"Verwendet man das Entwurfsmuster Kompositum, so bietet sich das Entwurfsmuster Iterator an, um die Elemente der Bestandshierarchie in einer bestimmten Reihenfolge zu durchlaufen.","answer":"w"},{"question":"Der Adapter ermöglicht das Verwenden von Klassen, die nicht mit der erwarteten Schnittstelle kompatibel sind. Der Dekorierer hingegen lässt die Schnittstelle unverändert.","answer":"w"},{"question":"Ein Adapter umhüllt immer nur eine einzige Klasse.","answer":"f"},{"question":"Iterator und Besucher gehören zu den Entkopplungsmustern.","answer":"f"},{"question":"Das Entwurfsmuster Iterator ist den Variantenmustern zuzuordnen.","answer":"f"},{"question":"Das Entwurfsmuster Iterator ermöglicht polymorphe Iteration.","answer":"w"},{"question":"Bei Entkopplungsmustern werden Gemeinsamkeiten von verwandten Einheiten zentralisiert, d. h. herausgezogen und an einer einzigen Stelle beschrieben.","answer":"f"},{"question":"Fassade und Adapter gehören zu den Bequemlichkeitsmustern.","answer":"f"},{"question":"Eine Komponente kann immer nur mit einem einzigen Dekorierer versehen werden.","answer":"f"},{"question":"Die Fabrikmethode sorgt dafür, dass nur eine einzige Instanz einer Klasse fabriziert wird.","answer":"f"},{"question":"Findet man im Klassendiagramm eine Assoziation, an deren beiden Enden 1..* steht, so eignet sich eine Fabrikmethode, um Konsistenz beim Erzeugen der ersten Instanzen sicherzustellen.","answer":"w"},{"question":"Sowohl beim Fließband- als auch beim Auftraggeber-/Auftragnehmer-Entwurfsmuster gibt es eine zentrale Aufgabenverteilung.","answer":"f"},{"question":"Das parallele Muster Auftraggeber/Auftragnehmer (master/worker) wird verwendet, wenn es mehrere Aufgaben gibt, die unabhängig voneinander bearbeitet werden können.","answer":"w"},{"question":"Beim Zustandsmuster gibt es einen definierten Startzustand.","answer":"w"},{"question":"Sowohl beim Zustandsmuster als auch beim Strategiemuster wird das Verhalten an den konkreten Zustand bzw. die konkrete Strategie delegiert.","answer":"w"},{"question":"Sowohl beim Zustandsmuster als auch beim Strategiemuster bestimmt ein Zustand bzw. eine Strategie den nachfolgenden Zustand bzw. Strategie.","answer":"f"},{"question":"Das Hinzufügen einer neuen konkreten Strategie erfordert keine Änderung existierender konkreter Strategien.","answer":"w"},{"question":"Beim Zustandsmuster muss die Implementierung einer Methode in einem Zustand explizit berücksichtigen, in welchem Zustand sich der Zustandsautomat befindet.","answer":"f"},{"question":"Eine Fassade kann dadurch implementiert werden, dass Methoden eines Subsystems mit Standardparameterwerten aufgerufen werden.","answer":"w"},{"question":"Wird beim Beobachter-Muster nachträglich ein neuer Beobachter hinzugefügt, muss der Quelltext des beobachteten Subjekts angepasst werden.","answer":"f"},{"question":"Ein Beobachter kann immer nur ein Subjekt beobachten, da sonst beim Aktualisierungsrundruf nicht klar ist, welches Subjekt sich geändert hat.","answer":"f"},{"question":"Eine Schablonenmethode ist immer auch eine Fabrikmethode.","answer":"f"},{"question":"Dekorierer fügen zu einem Objekt neue Funktionalität hinzu, indem sie das Objekt selber ändern.","answer":"f"},{"question":"Wird das Muster Dekorierer benutzt, darf die Schnittstelle des dekorierten Subjekts nicht geändert werden.","answer":"f"},{"question":"Der extrinsische Zustand beim Fliegengewicht wird nicht im konkreten Fliegengewicht selber gespeichert.","answer":"w"},{"question":"Beim Zugriff auf ein spezifisches Fliegengewicht erzeugt der Klient das Fliegengewicht, falls es noch nicht existiert.","answer":"f"},{"question":"Ob auf die getInstance()-Methode des Einzelstücks gleichzeitig von verschiedenen Klienten aufgerufen werden kann oder nicht, spielt keine Rolle.","answer":"f"},{"question":"Ein Aufbewahrer im Entwurfsmuster Memento kann beliebig viele Mementos verwalten. Für die Restauration im Falle eines Reset ist er allerdings nicht verantwortlich.","answer":"w"},{"question":"Ein Prototyp im Entwurfsmuster Prototyp muss herkömmlich erstellt werden, ohne von einem anderen Objekt geklont zu werden.","answer":"f"},{"question":"Das Prototypmuster wird verwendet, wenn es von einer Klasse nur eine einzige Instanz geben darf und diese Instanz den Klienten an einer bekannten Stelle zugänglich gemacht werden soll.","answer":"f"},{"question":"Bei dem Entwurfsmuster Befehl kennt der Empfänger den Befehl nicht, jedoch der Befehl den Empfänger.","answer":"w"},{"question":"Bei der Verwendung eines Null-Objektes fallen eventuell mehr Null-Absicherungen an als ohne.","answer":"f"},{"question":"Moderne Betriebssysteme können eine Verklemmung in einem laufenden Programm erkennen und darauf reagieren.","answer":"f"},{"question":"Ein Kontrollfaden besitzt in Java stets einen eigenen Keller sowie einen eigenen Programmzähler.","answer":"w"},{"question":"Ein Algorithmus der in vier Teile aufgeteilt ist, welche parallel abgearbeitet werden können, benötigt nur noch ein Viertel der Ausführungszeit, die der Algorithmus sequentiell implementiert benötigen würde.","answer":"f"},{"question":"Jeder Kontrollfaden eines Prozesses besitzt ein eigenes Code- und Datensegment im Hauptspeicher.","answer":"f"},{"question":"Eine Verklemmung ist eine Blockade, die durch eine zyklische Abhängigkeit von Fäden auf gemeinsame Ressourcen hervorgerufen wird.","answer":"w"},{"question":"Bei einer Verklemmung warten zwei oder mehr Fäden aufeinander, aber keiner kann weiterarbeiten.","answer":"w"},{"question":"Mit Hilfe des Schlüsselworts synchronized vor Klassenvariablen lassen sich diese in Java vor gleichzeitigen parallelen Zugriffen und somit vor Wettläufen schützen.","answer":"f"},{"question":"In Java kann jedes Objekt, insbesondere auch jeder primitive Datentyp, als Monitor verwendet werden.","answer":"f"},{"question":"Bei heutigen CPUs brauchen Cache-Effekte wie zum Beispiel Cache-Misses nicht mehr beachtet werden.","answer":"f"},{"question":"Nicht jeder Algorithmus lässt sich durch Parallelisierung beschleunigen.","answer":"w"},{"question":"Ein Thread sollte in Java mit run() gestartet werden.","answer":"f"},{"question":"Die Anweisung i++ ist atomar.","answer":"f"},{"question":"Dynamische Testverfahren können die Korrektheit des Codes belegen.","answer":"f"},{"question":"Kontrollflussorientierte Tests und datenflussorientierte Tests gehören zur statischen Analyse von Programmen.","answer":"f"},{"question":"Kontrollflussorientierte Tests gehören zu den statischen Testverfahren.","answer":"f"},{"question":"Durchsichten sind auf Code und Testfälle anwendbar.","answer":"w"},{"question":"Zusicherungen (z. B. mit dem Schlüsselwort assert in Java) werden zur Laufzeit eines Programms ausgeführt.","answer":"w"},{"question":"Bei der mehrfachen Bedingungsüberdeckung ist die Größe der minimalen Testfallmenge unabhängig davon, ob Kurzauswertung vorgenommen wird oder nicht.","answer":"w"},{"question":"Die Anweisungsüberdeckung subsumiert die einfache Bedingungsüberdeckung.","answer":"f"},{"question":"Die Zweigüberdeckung subsumiert die minimal-mehrfache Bedingungsüberdeckung.","answer":"f"},{"question":"Die Pfadüberdeckung subsumiert die Anweisungsüberdeckung.","answer":"w"},{"question":"Die einfache Bedingungsüberdeckung fordert, dass die Kombinationen der atomaren Bedingungen mit allen möglichen Permutationen der Wahrheitswerte Wahr und Falsch belegt werden.","answer":"f"},{"question":"Ein Stresstest testet das Verhalten des Systems beim Überschreiten der definierten Grenzen.","answer":"w"},{"question":"Stresstests testen das Verhalten eines Systems bzw. einer Komponente innerhalb des erlaubten Grenzbereichs.","answer":"f"},{"question":"JUnit führt Testfälle in alphabetischer Reihenfolge aus.","answer":"f"},{"question":"Mit JUnit kann man funktionale und nicht-funktionale Anforderungen testen.","answer":"f"},{"question":"Fügt man einer Testklasse eine Methode mit der Annotation @BeforeClass hinzu, dann wird diese in einem JUnit-Durchlauf genau einmal ausgeführt.","answer":"w"},{"question":"In Testfällen werden tatsächliche Ergebnisse der getesteten Methoden mit erwarteten Ergebnissen verglichen.","answer":"w"},{"question":"JUnit erlaubt das selektive Ausführen einzelner Tests einer Testklasse.","answer":"w"},{"question":"JUnit ist für Regressionstests ungeeignet.","answer":"f"},{"question":"Wenn in einem JUnit-Testfall eine Ausnahme auftritt, wird dieser dadurch als fehlgeschlagen dargestellt.","answer":"f"},{"question":"JUnit führt Testfälle, die aus unterschiedlichen Testklassen stammen, parallel aus.","answer":"f"},{"question":"Im Quelltext eines Programms verwendet man das Java-Schlüsselwort assert, in JUnit-Tests hingegen die datentypspezifischen Methoden der Klasse Assert.","answer":"w"},{"question":"JUnit-Tests und Java-Zusicherungen lassen sich zum Testen von Programmen nicht miteinander kombinieren.","answer":"f"},{"question":"Eine unvollständige oder fehlerhafte Umsetzung einer Anforderung fällt in die Fehlerklasse der Anforderungsfehler.","answer":"f"},{"question":"Inspektionen sind statische Testverfahren.","answer":"w"},{"question":"Bei einer Inspektion durch mehrere Inspektoren untersucht jeder Inspektor das Software-Dokument für sich alleine nach Fehlern.","answer":"w"},{"question":"Eine Inspektion ist anwendbar auf alle Softwaredokumente: Pflichtenhefte, Spezifikationen, Entwürfe, Code und Testfälle.","answer":"w"},{"question":"Ein konsistenter Programmierstil erleichtert die Lesbarkeit und vereinfacht so Inspektionen.","answer":"w"},{"question":"Bei einer Inspektion durch mehrere Inspektoren untersucht jeder Inspektor das Software-Dokument für sich alleine nach Fehlern.","answer":"w"},{"question":"Die Zweigüberdeckung gehört zu den Black-Box-Testverfahren.","answer":"f"},{"question":"Ein Defekt verursacht einen Irrtum.","answer":"f"},{"question":"Wurde eine Methode verifiziert, so braucht sie nicht mehr getestet zu werden.","answer":"w"},{"question":"Ein Korrektheitsbeweis macht das Testen der „bewiesenen“ Methode mit JUnit überflüssig.","answer":"w"},{"question":"Ob eine Sammlung von JUnit-Tests zur Anweisungsüberdeckung ausreicht, muss man manuell bestimmen – z. B. mithilfe eines Kontrollflussgraphen.","answer":"f"},{"question":"Die Qualität der Abnahmetests verringert sich, wenn ein eigenständiges Wartungsteam eingesetzt wird.","answer":"f"},{"question":"Testen garantiert die Fehlerfreiheit eines Programms.","answer":"f"},{"question":"Mithilfe von Komponententests kann man in der Regel keine Fehler im Pflichtenheft finden.","answer":"w"},{"question":"Der Abnahmetest ist die Grundlage für die bindende Erklärung der Annahme des Produkts.","answer":"w"},{"question":"Im Prozessmodell „Synchronisiere und Stabilisiere“ ist die Priorisierung nach Funktionen nicht möglich.","answer":"f"},{"question":"Beim Prozessmodell „Synchronisiere und Stabilisiere“ folgt auf das Ende der Entwicklungsphase eine Stabilisierungsphase, in der die Integration und die Komponententests durchgeführt werden.","answer":"f"},{"question":"Ein Nachteil im Prozessmodell „Synchronisiere und Stabilisiere“ ist, dass Rückmeldungen erst sehr spät einfließen können.","answer":"f"},{"question":"Bei agilen Softwareentwicklungsprozessen beschränkt man die Vorausplanung auf das Nötigste und plant inkrementell.","answer":"w"},{"question":"Bei der agilen Softwareentwicklung gibt es ebenfalls ein Pflichtenheft zum Nachschlagen von Anforderungen.","answer":"f"},{"question":"Der Integrationstest im V-Modell ist der abschließende Test des Auftragnehmers in einer realistischen Umgebung ohne den Kunden.","answer":"f"},{"question":"Das V-Modell XT besteht aus den vier Submodellen Projektmanagement, Qualitätssicherung, Konfigurationsmanagement und Systemerstellung.","answer":"w"},{"question":"In der Implementierungsphase des Wasserfallmodells finden die Umsetzung der Spezifikation in korrekte, lauffähige Programme und deren Dokumentation statt.","answer":"w"},{"question":"In der letzten Phase des Wasserfallmodells finden Einsatz und Wartung statt.","answer":"w"},{"question":"Das Prototypmodell eignet sich für Systeme, die keine vollständige Spezifikation haben und bei denen diese Spezifikation ohne explorative Entwicklung bzw. Experimente nicht erstellt werden kann.","answer":"w"},{"question":"Die Durchführbarkeitsuntersuchung ist Teil der Planungsphase des Wasserfallmodells.","answer":"w"},{"question":"Das iterative Modell als Erweiterung der Prototypenidee eignet sich dann, wenn zumindest Teile der Funktionalität klar definiert und Funktionalitäten dem Produkt Schritt für Schritt hinzugefügt werden können.","answer":"w"},{"question":"Im Prozessmodell „Prototyp“ wird der Prototyp iterativ entwickelt und nach der Testphase produktiv eingesetzt und gewartet.","answer":"f"},{"question":"Beim Prozessmodell „Scrum“ enthält die Aufgabenliste (engl. sprint backlog) die Produktanforderungen und eine Liste aller Projektarbeiten.","answer":"f"},{"question":"Der „Scrum Master“ legt die Anforderungen an das Produkt fest sowie dessen Auslieferungstermin.","answer":"f"},{"question":"Im Wasserfallmodell ist das Pflichtenheft ein Ergebnisartefakt der Planungsphase.","answer":"f"},{"question":"Im Wasserfallmodell folgt die Planungsphase auf die Definitionsphase.","answer":"f"},{"question":"In der Planungsphase des Wasserfallmodells entstehen die Durchführbarkeitsstudie, das Lastenheft, die Projektkalkulation und der Projektplan.","answer":"w"},{"question":"Die letzte Phase des klassischen Wasserfallmodells ist „Testen und Abnahme“.","answer":"f"},{"question":"Im Wasserfall-Entwicklungsprozess steigen die Kosten für Änderungen exponentiell mit der Zeit.","answer":"w"},{"question":"Beim Prototyp-Prozessmodell wird aus einem Prototypen Stück für Stück das finale Softwareprodukt entwickelt.","answer":"f"},{"question":"Das Fehlerlogbuch und der Regelkatalog beim selbstkontrollierten Programmieren werden von jedem Programmierer selbst geführt und auf seine eigenen Bedürfnisse angepasst und gepflegt.","answer":"w"},{"question":"Beim selbstkontrollierten Programmieren dient das Zeitlogbuch dazu, die Selbsteinschätzung des Entwicklers zu verbessern.","answer":"w"},{"question":"Beim „Extreme Programming“ entscheiden die Entwickler, welche Priorität die Funktionalitäten eines Produkts haben.","answer":"f"},{"question":"Beim „Extreme Programming“ sind Codeinspektionen Teil der normalen Arbeitszeit und finden im wöchentlichen Rhythmus statt.","answer":"f"},{"question":"Beim „Extreme Programming“ werden Akzeptanztests vom Kunden spezifiziert und müssen spätestens bei der Auslieferung „grün“ sein, d. h. sie dürfen keine Fehler melden.","answer":"w"},{"question":"Wird „Extreme Programming“ (XP) bei großen Projekten eingesetzt, ist (trotz XP) eine Anforderungs- und Entwurfsphase erforderlich.","answer":"w"},{"question":"„Extreme Programming“ bezieht den Kunden stärker in den Entwicklungsprozess ein als das Wasserfallmodell.","answer":"w"},{"question":"Aufgrund der permanenten gegenseitigen Kontrolle ist die Paarprogrammierung gegenüber der Einzelprogrammierung mit Inspektionen klar im Vorteil, was das Verhältnis Kosten zu Nutzen angeht.","answer":"f"},{"question":"Bei der Paarprogrammierung gibt es pro Entwicklerpaar nur eine Tastatur und eine Maus.","answer":"w"},{"question":"Bei der Paarprogrammierung schreibt der Fahrer keine Komponententests, da der Navigator den Code ständig auf Fehler überprüft.","answer":"f"},{"question":"Dank kollektivem Codebesitz darf jeder Entwickler Änderungen am gesamten Produkt vornehmen, z. B. bei Umstrukturierungen (Refactoring).","answer":"w"},{"question":"Bei der testgetriebenen Entwicklung dienen die Tests unter anderem zur Schnittstellendefinition.","answer":"w"},{"question":"Dank testgetriebener Entwicklung, kontinuierlicher Integration und Regressionstests sind agil entwickelte Programmkomponenten fehlerfrei.","answer":"f"},{"question":"Das einzige Ziel der Softwaretechnik ist es, die Kosten der Erstellung von Software zu senken.","answer":"f"},{"question":"Die Entwicklungskosten eines Softwaresystems bestehen zum größten Teil aus Personalkosten.","answer":"w"},{"question":"Für ein Softwareentwicklungsprojekt gilt die Faustregel: Der Aufwand für Wartung und Pflege ist typischerweise um einen Faktor von 2 bis 4 größer als der Entwicklungsaufwand.","answer":"w"},{"question":"COCOMO II betrachtet neben den multiplikativen Kostenfaktoren auch Skalierungsfaktoren für die Zusammenarbeit im Entwicklungsteam.","answer":"w"},{"question":"Die Multiplikatormethode ermöglicht eine Aufwandsschätzung ohne umfangreiche empirische Datensammlung.","answer":"f"},{"question":"Die „Analogiemethode“ bezeichnet das Abschätzen des Gesamtaufwandes auf der Basis der im Projekt bereits abgeschlossenen Phasen.","answer":"f"},{"question":"Im Teufelsquadrat werden Qualität, Quantität, Entwicklungsdauer und Produktivität aufgetragen, um die Kosten zu schätzen.","answer":"f"},{"question":"Bei eigenständiger Wartungsorganisation ist eine gleichmäßige Auslastung der Mitarbeiter schwer zu erreichen.","answer":"w"}]`)

const quizDisplay = document.getElementById("quiz")
const questionsLeftDisplay = document.getElementById("questionCount")
const rightAnswersDisplay = document.getElementById("rightAnswers")
const buttons = document.getElementsByTagName("button")
quizDisplay.style.color = "black"

let i = 0
if (localStorage.getItem("question") !== null && i !== (questions.length - 1) {
    i = Number(localStorage.getItem("question"))    
}
let score =  0
if (localStorage.getItem("score") !== null) {
    score = Number(localStorage.getItem("score"))
    
}

let questionsLeft = questions.length - i
questionsLeftDisplay.innerText = questionsLeft  + " Fragen übrig."

function showQuestion() {
    quizDisplay.innerText = questions[i].question 
}

function trueClick() {
    checkAnswer("w")
}
    
function falseClick() {
    checkAnswer("f")
}

function nextClick() {
    if(quizDisplay.style.color !== "black") {        
        quizDisplay.style.color = "black"
        buttons[0].style.color = "black"
        buttons[1].style.color = "black"
        showQuestion()
    }        
    
}

function checkAnswer(boolean) {
    if(quizDisplay.style.color === "black") {    

        if(questions[i].answer === "w") {
            quizDisplay.style.color = "green"
            if(questions[i].answer === boolean) {
                buttons[0].style.color = "green"
                score++
                localStorage.setItem("score", score)
            } else {
                buttons[1].style.color = "red"
            }        
                             
        } else {
            quizDisplay.style.color = "red"   
            if(questions[i].answer === boolean) {
                buttons[1].style.color = "green"
                score++; 
            } else {
                buttons[0].style.color = "red"
            }      
        }

        questionsLeft--
        questionsLeftDisplay.innerText = questionsLeft + " Fragen übrig."
        if(i < questions.length) {
            i++
        } else {
            i = 0;
            window.alert(`Alle Fragen wurden beantwortet. Du hast ${score} von ${questions.length} Fragen richtig beantwortet. :)`)
        }
        
        localStorage.setItem("question", i)
    }
}

showQuestion()
