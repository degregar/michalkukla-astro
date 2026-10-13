---
created: 2020-01-01T16:44:00
updated: 2024-04-02T16:45
title: KorpoMapa
description: Platforma z ogłoszeniami o pracę od korporacji
tags:
  - platforma-wielostronna
---
## Geneza

Pomysł zrodził się w głowie mojej koleżanki, Beaty.

Mieszkała w Krakowie, pracowała w banku i właśnie zmieniała pracę na inną. Przy rozsyłaniu CV do różny korpo sugerowała się lokalizacją biura, żeby nie musiała się przeprowadzać z rodziną, mieć szybki dojazd i nie marnować czasu w korkach.

Żaden z portali ogłoszeniowych nie umożliwiał filtrowania po lokalizacji biura.

Stąd pomysł, żeby wspólnie zrobić taki serwis i wypełnić lukę na rynku.

Z rozmów ze znajomymi wynikało, że dużo osób szuka pracy przez pracuj.pl po czym idą na stronę firmy i szukają tam info gdzie ta firma jest. Albo jeśli jest adres na pracuj.pl to szukają na google gdzie ta firma a i tak nie mają pewności że praca będzie w tym miejscu. I jeszcze wkurza ich wszystkich, że trzeba jednak uzupełniać ten formularz z danymi z CV.

Chodziło o to, żeby dało się wyszukać nie tylko po mapie, ale też po działach, w jakich ta firma szukała pracowników, np. finanse, łańcuch dostaw, infrastruktura, itd.

Ostatecznie Beatę interesowało, aby pracować w zawodzie, więc podstawowe funkcjonalności wyszukiwarki ofert pracy musieliśmy mieć.

## Platforma wielostronna

Model biznesowy tego portalu to platforma wielostronna. Z jednej strony mamy kandydatów do zmiany pracy, a z drugiej strony korporacje, szukające pracowników.

To dość kłopotliwy model.

Chcieliśmy kasę brać od korporacji za wystawianie ogłoszeń u nas, ale oni będą mogli zapłacić dopiero wtedy, kiedy pokażemy, że warto wystawiać u nas ogłoszenie. A warto wtedy, kiedy jest baza kandydatów, do których możemy dostarczyć ogłoszenie o pracy.

Bazę kandydatów z kolei zbudujemy wtedy, kiedy będą ogłoszenia o pracę. Nie ma sensu wchodzić do portalu, w którym jest tylko 1 ogłoszenie.

Ale już jest sens wchodzić, jeśli chcemy się zrekrutować do konkretnego działu, miasta, dzielnicy albo firmy.

Można więc zacząć od tego, aby umieścić na mapie lokalizację poszczególnych działów, a potem publikować ogłoszenia, choćby za darmo.

To wymaga utrzymania serwisu przez jakiś czas za własną kasę. Trudno o bootstrapping, a więc potrzebujemy jakiejś inwestycji na start albo wykonania mnóstwo pracy, żeby pozyskać pierwszych płacących klientów.

## Szybko, szybko

Kupiliśmy domenę i opracowaliśmy w arkuszu Google wstępną bazę firm, które potem mieliśmy nanieść na mapę.

Trzeba było zrobić stronę, wystawić jakiś cennik, zgłaszać się do korpo i tworzyć ogłoszenia. Wszystko to mogliśmy zrobić na darmowym WordPressie i nie musieliśmy robić żadnych turbofunkcjonalności. Mapa, wyszukiwarka, i to w zasadzie tyle.

Rozważaliśmy przez jakiś czas czy robić to po polsku, czy też po angielsku. W korpo pracują często anglojęzyczni pracownicy. Postanowiliśmy to odłożyć na przyszłość.

Wstępną stronę ograłem bardzo szybko. Przejrzałem dostępne wtyczki do listingów, nawet na darmowych mogliśmy wystartować.

To, co musieliśmy zrobić, to zbudować bazę korpo, nanieść na mapę i pomału publikować ogłoszenia o pracę.

Mogliśmy zacząć od jednej firmy, w jednym mieście (Krakowie) i potem rozszerzać na kolejne firmy i miasta.

Uznaliśmy wspólnie, że będziemy to jak najtańszym kosztem zrobić, a więc marketing partyzancki, word of mouth. W korporacjach znajomi znajomym przy watercoolerze mogli podrzucić powertipa jak tu łatwo znaleźć po lokalizacji nowego pracodawcę.

Może udałoby się jakiś marketing wirusowy wbudować?

## Wirus

Z tym „wirusowym” to wyszło zupełnie inaczej, niż sądziliśmy.

Zaczęliśmy ten projekt w styczniu 2020 roku.

Wygrzebałem z końca stycznia fragment naszej rozmowy o zmianie pracy:

![](https://michalkukla.pl/wp-content/uploads/2023/05/Screenshot-2023-03-30-at-11.43.10.png)

Nikt się nie spodziewał tego, co będzie od marca.

A od marca świat przeszedł w tryb paniki i chaosu. W tej sytuacji kontynuowanie projektu nie miało absolutnie żadnego sensu.

Biura się pozamykały i korpo w znacznej mierze przeszły w tryb pracy zdalnej.

## Jak podszedłbym do tego teraz?

Trudno ocenić, bo nie mieliśmy za bardzo szansy na sprawdzenie tego w boju. W lutym dodatkowo trochę mi się na głowę zwaliło projektów dla klientów, więc miałem mniej czasu.

Na pewno ograniczenie do jednego miasta było dobrym wyborem. Podobnie zrobił Uber na początku, ograniczając się jedynie do San Francisco.

Liczyliśmy mocno na marketing szeptany, ale nie wiem, czy to by się sprawdziło. Prawdopodobnie potrzebowalibyśmy wsparcia marketingu płatnego przez jakiś czas, żeby rozbudować bazę kandydatów. Do tego newsletter, aby wysyłać do kandydatów powiadomienia o nowych ogłoszeniach w interesującej ich okolicy.

I jednocześnie musieliśmy zadbać o dodawanie nowych ogłoszeń. W modelu platformy wielostronnej zazwyczaj najprostszym sposobem osiągnięcia tipping point jest dofinansowanie jednej grupy docelowej, czego nie braliśmy za bardzo pod uwagę. YOLO.

## Jak zaaplikować pretotyping?

Teraz być może zacząłbym od zbudowania bazy pracowników, którzy szukają pracy. Być może znalazłbym pierwszą firmę, która najwięcej rekrutuje, ma biura w jednej dzielnicy Krakowa i poszukałbym po innych korpo, które mają te same działy w tych samych dzielnicach.

W tych działach, ale w innych korpo, poszukałbym ludzi, którzy szukają pracy, odzywał się do nich na LinkedIn z propozycją dopisania do listy mailowej, jeśli będą zainteresowani zmianą firmy.

W ten sposób sprawdziłbym na mniejszej próbce, czy w ogóle jest baza potencjalnych kandydatów zainteresowanych szukaniem pracy w konkretnej okolicy. Taką małą bazę możnaby nawet dostarczyć działom HR z tych korpo.

To skłoniłoby mnie do przemyśleń (tak jak skłania w tym momencie), czy przypadkiem headhunterzy nie odzywają się bezpośrednio już do ludzi na Linked In z ofertą pracy.

Sprawdzenie tej hipotezy mogłoby być stosunkowo tanie (mało czasu, bez pieniędzy) i dałoby mi lepszy wgląd w prawdziwe problemy pracowników i działów HR.

Mogłoby się na przykład okazać, że ta konkretna firma nie ma problemów z zatrudnianiem, albo ma właśnie ogromne problemy, bo wszyscy z niej w panice uciekają.

Albo mogłoby się okazać coś zupełnie innego, czego do tej pory nie braliśmy pod uwagę.

Zbudowanie takiej bazy nawet nie wymagałoby stawiania strony internetowej. Wystarczyłby telefon i Excel.