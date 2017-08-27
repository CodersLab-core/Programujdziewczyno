# Zadanie 3 - Przycisk -Wróć na górę-

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest dodanie do kodu HTML przycisku `wróc na górę`, a następnie przypisanie do niego funkcji, która sprawi, że po kliknięciu użytkownik zostanie przeniesiony na górę strony bez konieczności scrollowania całej zawartości ręcznie.

## Instrukcja

1. W kodzie HTML dodaj element `button` z treścią `wróć na górę`. Powinien być widoczny gdzieś na dole strony (np. w stopce). Nadaj mu odpowiednią klasę - sprawdź, jakie klasy mają inne przyciski. Takie klasy jak np. `btn` są klasami Bootstrapa, więc zawierają już jakieś style. Sprawdź róźne klasy. Możesz oczywiście ostylować przycisk w pliku CSS. 
2. W pliku JS przypisz przycisk do zmiennej i wyświetl zmienną w konsoli, żeby sprawdzić, czy wszystko przebiegło prawidłowo.
3. W poprzednim zadaniu nasłuchiwaliśmy na `scroll` dla okna, czyli `window`. Okno w JS ma wiele właściwiości, które możemy wykorzystać. Jedną z nich jest `scroll`. Pozwala ona na przeniesienie do konkretnego miejsca na stronie przez wskazanie jego koordynatów według zasady `window.scroll( x, y)`. `x` jest pikselem wdłuż poziomej osi dokumentu, licząc od lewego górnego rogu. `y` jest pikselem wdłuż pionowej osi, również licząc od lewego górnego rogu.
4. My chcemy się przenieść na samą górę, a więc do miejsca `(0,0)`. Do przycisku dodaj `eventListener` nasłuchujący na `click`, dodaj `console.log` i sprawdź, czy wywołuje się on na kliknięcie. 
5. Następnie wskaż wewnątrz funkcji, gdzie ma zostać przeniesiony użytkoniwk po kliknięciu wpisując odpowiednie wartości dla `window.scroll`. Gotowe!
6. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 4-back-to-top-button
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 4`.
