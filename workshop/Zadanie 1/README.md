# Zadanie 1 - Dropdown menu
Zadanie wykonywane z prowadzącą/prowadzącym

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest sprawienie, by po najechaniu kursorem myszy na część menu górnego z napisem `Materiały do nauki` pojawiało się dodatkowe rozwijane menu z linkami do stron z materiałami.

# Instrukcja

## Przygotowanie do pracy

1. Stwórz w swoim repozytorium katalog o nazwie `js`, a w nim plik `app.js`.
2. Podłącz plik JavaScript do strony.
3. Sprawdź, czy plik działa np. przez wpisanie w nim `console.log('działa');`. Ta wiadomość powinna wyświetlić się w konsoli po wejściu na stronę.
4. Strona ładuje się "od góry do dołu". Dlatego musimy zadbać o to, by załadowała się cała zawartość kodu HTML, zanim zaczniemy wykonywać na nim jakieś działania. Żeby to zrobić będziemy nasłuchiwać na `event` `DOMContentLoaded`. Ten `event` oznacza, że załadowała się cała struktura strony. Dzięki dodaniu `event listenera` do dokumentu, dopiero po załadowaniu całej struktury DOM, zacznie wykonywać się skrypt z pliku `app.js`. Umieść więc w swoim pliku następujący kod:
```javascript
    document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
    });
```
5. Już prawie gotowe :) Została nam do zrobienia tylko jedna rzecz. Chcemy uniknąć deklarowania w naszym kodzie zmiennych globalnych, dlatego użyjemy tzw. `strict mode`. Na samym początku swojego pliku (jeszcze przed dodaną przed chwilą funkcją) umieść następujący kod:
```javascript
    'use strict';
```
Strict mode robi też kilka innych rzeczy, więcej możesz poczytać <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">tutaj</a>.

Gotowe! Możemy przejść dalej. 

## Dropdown menu

1. Spójrz na kod HTML i znajdź w nim element, w którym znajduje się dodatkowe menu oraz element listy, na który trzeba najechać myszką, by ta dodatkowa sekcja się pokazała. Następnie zapisz oba elementy do zmiennych (użyj do tego `document.querySelector('nazwa-selektora')`). Pamiętaj, że używamy tutaj selektorów CSS, więc nazwę klasy musimy poprzedzić kropką (np. `.menu`), a nazwę id kratką (np. `#element`). Sprawdź, czy odpowiednio zapisałaś zmienne przez wyświetlenie ich w konsoli.

Pamiętaj: nazywaj zmienne tak, byś wiedziała, jakie elementy się za nimi kryją.

2. Teraz zaczynamy z logiką. Chcemy, by po najechaniu myszą na element listy pojawiało się dodatkowe menu. Do tego elementu więc dodamy `event listener`. Będzie to oznaczało tyle, że nasz skrypt będzie teraz nasłuchiwał, czy dany `event` nastąpił. Jeśli tak, zrobi to, co wskażemy mu w kodzie. Dołącz do elementu listy `event listener`, który będzie nasłuchiwał na `hover`, czyli najechanie myszką na dany element. 
Zwróć uwagę, że właśnie `event listener` dodaliśmy do całego naszego dokumentu na samym początku kodu. Teraz musimy zadziałać analogicznie.

3. Po dołączeniu `listenera` w funkcji, która jest do niego dołączona (to tzw. `callback`), dodaj `console.log` z jakimś tekstem. Teraz po najechaniu myszką na dany element listy powinnaś zobaczyć tekst z `console.log` w konsoli.

4. W JS możemy wpływać na wygląd elementów przez odwołanie się do `style`. Przykładowo `menu.style` to lista wszystkich stylów elementu przypisanego do zmiennej `menu`. Na początku kodu spróbuj zrobić `console.log`, który pokaże Ci style dla zmiennej z dodatkowym menu. Możesz zobaczyć teraz wszystkie własności CSS danego elementu. Ważna uwaga: `style` widzi tylko te style, które zostały przypisane do elementu w skrypcie. Oznacza to, że teraz dostaniesz pustą listę wyświetlając style dla dodatkowego menu.

5. Zajrzyj do pliku CSS. Odnajdź w nim część odpowiedzialną za ostylowanie dodatkowego menu. Zwróć uwagę, na co ustawiony jest `display`.

6. Naszym zadaniem jest zmiana wartości `display` dodatkowego menu z `none` na `block` po najechaniu myszką na element listy. To właśnie będzie ciało funkcji w naszym `listenerze`. Możesz przypisać odpowiednią wartość do własność CSS następująco:
```javascript
element.style.display = 'block';
```
Tak samo możesz wpływać na inne wartości CSS. Dodaj odpowiedni kod do funkcji i sprawdź, czy działa.

7. To jeszcze nie wszystko - wprawdzie menu pojawia się po najechaniu myszką na element listy, ale nie znika, gdy myszka już na nim nie jest. A przecież chcemy, by menu pojawiało się i znikało dynamicznie. Dodaj do elementu listy kolejny `event listener`, czyli `mouseout`. On będzie nasłuchiwał, kiedy myszka przestanie być na danym elemencie. Wtedy musimy zmienić `display` menu z powrotem na `none`. Zrób to sama wykonując kroki analogiczne do tych z punktów od 3 do 6.

8. Na sam koniec zwróć uwagę, czy dodatkowe menu jest dobrze ostylowane. Czy ładnie wygląda? Może coś byś zmieniła? Nie ma problemu - wprowadź poprawki w pliku CSS.

9. Skomituj swoje zmiany. Najlepiej dodaj też komentarz w pliku JS z informacją o numerze zadania, które właśnie zrobiłaś. Dzięki temu będzie Ci się łatwiej odnaleźć w kodzie.

10. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 1-dropdown-menu
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 2`.
