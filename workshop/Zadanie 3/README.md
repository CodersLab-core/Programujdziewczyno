# Zadanie 3 - Zmiana wyglądu dolnej krawędzi menu przy scrollu

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Nasze menu ma teraz niewidoczną dolną krawędź. Kiedy zjeżdzamy niżej na stronę, widzimy, że menu zlewa się z tłem (na wysokości sekcji z przyciskami `więcej`). Naszym celem jest zmiana koloru dolnej krawędzi menu (np. na jasnoszary), gdy użytkownik zaczyna scrollować stronę. Dzięki temu unikniemy efektu zlewania się menu z innymi elementami.

## Instrukcja

1. Przypisz do zmiennej element, któremu chcemy dodać dolną krawędź. Jeśli nie jesteś pewna, który to element, spróbuj zmodyfikować właśność `border` w pliku CSS dla tych elementów, które wydają Ci sie prawdopodobne. Gdy dodasz własność `border-bottom` razem z wartością np. `1px solid red`, powinnaś zobaczyć dolną krawędź danego elementu. Po przypisaniu zmiennej wyświetl ją w konsoli, aby sprawdźić, czy wszystko zadziałało prawidłowo. Jeśli nie pamiętasz, jak przypisać zmienną, sprawdź w punkcie pierwszym Zadania 1.
2. W JS możemy dodawać różne `listenery` do elementów strony. Nas teraz będzie interesował `event` o nazwie `scroll`. Chcemy przypisać go do całego okna, ponieważ będziemy dodawać style do krawędzi przy scrollowaniu całej strony. Dodaj więcej `eventListener` o nazwie `scroll` do okna, czyli `window`. Zrób `console.log` wewnątrz funkcji i sprawdź, czy pojawia się w konsoli, gdy scrollujesz stronę.
```javascript
    window.addEventListener('scroll', function() {
      console.log('działa przy scrollu');
    });
```
3. Zamień teraz `console.log` na odpowiednią akcję - podczas scrollowania ma zmienić się kolor dolnej krawędzi menu. Chodzi więc o własność `style.borderBottom`. Przypisz do niej odpowiednią wartość. Pamiętaj, że działa to dokładnie tak samo jak w pliku CSS. Podaj wiec grubość linii, jej typ oraz kolor. Jeśli nie masz pomysłu, jaki kolor ma mieć dolna krawędź, możesz ustawić go na `#7f7f7f`. Zakładajac, że menu przypisałaś do zmiennej o nazwie `menu`, tak np. może wyglądać przypisanie wartości:
```javascript
    menu.style.borderBottom = '1px solid #7f7f7f';
```
Pamiętaj: w CSS zapisujemy własności z myślnikiem np. `border-bottom`, w JS musimy robić to używając camelCase, czyli `borderBottom`. 
Gotowe!

4. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 3-menu-border-on-scroll
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 4`.
