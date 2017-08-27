# Zadanie 3 - Zmiana wyglądu dolnej krawędzi menu przy scrollu

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest zaznaczenie dolnej krawędzi menu, gdy użytkownik przesuwa stronę na dół. Po włączeniu strony menu nie ma wyraźnej dolnej granicy i zlewa się z jasnym tłem przy scrollowaniu.

## Instrukcja

1. Przypisz do zmiennej element, któremu chcemy dodać dolną krawędź. Jeśli nie jesteś pewna, który to element, spróbuj zmodyfikować właśność `border` w pliku CSS dla tych elementów, które wydają Ci sie prawdopodobne. Gdy dodasz własność `border-bottom` razem z wartością np. `1px solid red`, powinnaś zobaczyć dolną krawędź danego elementu. Po przypisaniu zmiennej wyświetl ją w konsoli, aby sprawdźić, czy wszystko zadziałało prawidłowo.
2. W JS możemy dodawać różne `listenery` do elementów strony. Nas teraz będzie interesował `event` o nazwie `scroll`. Chcemy przypisać go do całego okna, ponieważ będziemy dodawać style do krawędzi przy scrollowaniu całej strony. Dodaj więcej `eventListener` o nazwie `scroll` do okna, czyli `window`. Zrób `console.log` wewnątrz funkcji i sprawdź, czy pojawia się w konsoli, gdy scrollujesz stronę.
3. Zamień `console.log` na odpowiednią akcję - przypisz wartość dla `style.borderBottom` zapisanego w zmiennej elementu. Jeśli nie masz pomysłu, jaki kolor ma mieć dolna krawędź, możesz ustawić go na `#7f7f7f`.
4. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 3-menu-border-on-scroll
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 4`.
