# Zadanie 2 - Czytaj więcej

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest sprawienie, by po kliknięciu w przycisk `Więcej` rozwijał się opis pod daną sekcją. Jednocześnie przycisk ma zamienić się na `Mniej` i po kliknięciu chować pokazany wcześniej tekst.

## Instrukcja

1. Poszukaj w kodzie HTML przycisków `Więcej` i zapisz je wszystkie do zmiennej używając `document.querySelectorAll('nazwa-selektora'`). Wyświetl zmienną w konsoli - powinnaś zobaczyć tablicę z trzema przyciskami.
2. Nad każdym przyciskiem znajduje się paragraf o klasie `more`. Przycisk oraz paragraf mają tego samego rodzica, którym jest nadrzędny dla nich `section`. Są więc rodzeństwem. W JS możemy to wykorzystać. Po kliknięciu w przycisk ma pojawiać się jego poprzedni brat (albo siostra ;)). Żeby sprawdzić, czy faktycznie tak to zadziała, wypisz w konsoli rodzeństwo pierwszego elementu tablicy z przyciskami w ten sposób:
```javascript
    console.log(buttons[0].previousElementSibling);
```
3. Do pierwszego elementu tablicy z przyciskami podłącz `event listener` nasłuchujący na `click`. Dodaj wewnątrz funkcji `console.log`, żeby sprawdzić, czy działa prawidłowo (czyli na kliknięcie).
4. Teraz chcemy, by pojawił się odpowiedni paragraf. Wykorzystamy do tego specjalną zmienną `this`. `this` w uproszczeniu odwołuje się do elementu, na którym została wywołana funkcja. Dzięki niej możemy odnieść się do stanu obiektu bez konieczności podawania jego nazwy. Dla nas `this` to będzie więc przycisk, do którego podłączyliśmy `listener`. Sprawdź to wpisując w kodzie wewnątrz funkcji `console.log(this)`. Powinnaś zobaczyć przycisk w konsoli.
5. Dzięki użyciu `this` możemy teraz stworzyć zmienną np. o nazwie `textArea`, która będzie reprezentowała paragraf nad pierwszym przyciskiem. Do zmiennej przypisz `this.previousElementSibling` i sprawdź przez `console.log` czy przypisał się odpowiedni element. Powinien to być paragraf nad pierwszym przyciskiem.
6. Teraz zmień własność `display` paragrafu z `none` na `block` analogicznie do poprzedniego zadania. Na kliknięcie w pierwszy przycisk powinien teraz pokazywać się pierwszy paragraf o klasie `more`. 
7. Oprócz wyświetlenia paragrafu, powinien zmienić się napis na przycisku. Umożliwi nam to własność `innerHTML`. Pobiera ona (albo zmienia) zbiór znaczników HTML w danym elemencie razem z ich treścią. Wyświetl w konsoli `innerHTML` przycisku `Więcej`. Użyj do tego `this`. Następnie analogicznie zmień zawartość HTML przycisku tak, by zawierała napis `Mniej` oraz odpowiednią ikonkę (w znaczniku `<span>`). Zmiana `innerHTML` powinna dziać się w tym samym miejscu kodu, gdzie zmieniamy `display` paragrafu.
8. Chcemy teraz, aby dodatkowy paragraf schował się po kliknięciu w przycisk, który ma napis `Mniej`. Pamiętajmy, że to cały czas ten sam przycisk. Użyjemy prostego warunku `if`, który pozwoli nam sprawdzić, czy zmienna `textArea` jest różna od `null`. Kiedy będzie ona równa `null` oznaczać to będzie, że ma `display` ustawiony na `none`, skrypt nie widzi jej w kodzie HTML. Ciało funkcji będzie wyglądąło mniej więcej tak:
```javascript
    var textArea = this.previousElementSibling // przypisujemy do zmiennej paragraf

    if (textArea !== null) {
        // Ten kod powinien wykonać się, gdy nasza zmienna nie równa się `null` tj. gdy ma jakąś zawartość. Zmienna nie będzie równa `null`, gdy będzie wyświetlona na stronie, tzn. jej `display` będzie równał się `block
    } else {
        // Ten kod wykona się, gdy nasza zmienna nie będzie widoczna na stronie, czyli w przypadku, gdy nie ma jej w kodzie HTML, bo ma `display` ustawiony na `none`
    }
```
9. Wpisz odpowiedni kod do warunków. Pamiętaj, że w przypadku gdy zmienna nie jest wyświetlona i ustawiamy jej `display` na `block`, musimy ustawić też odpowiednią treść przycisku. Ponieważ nie wróci ona sama do `Więcej`, gdy kilkukrotnie klikniemy na przycisk.
10. Teraz wszystko powinno dobrze działać dla pierwszego przycisku. Chcemy jednak, by dla dwóch pozostałych przycisków też pokazywały się odpowiednie paragrafy. Możemy skopiować kod i podłączyć funckję trzy raz do różnych przycisków, ale byłoby to bezsensowne powtarzanie kodu. Dlatego użyjemy pętli `for` do podłączenia funkcji do wszystkich przycisków jednocześnie. Dzięki odwołaniu się do `this` wewnątrz funkcji, zostanie wybrany odpowiedni paragraf dla danego przycisku.
11. Najpierw przypiszmy całą funkcję, która była wywoływana przez `click` do funkcji, która nie będzie anonimowa. Wcześniej nasza funckja nie miała nazwy, po prostu od razu wypisywaliśmy jej ciało. Teraz zrobimy to w trochę inny sposób:
```javascript
    function showHide(): {
        // tutaj skopiuj ciało funkcji
    }
```
12. Teraz użyjemy pętli `for` do podłączenia funkcji `showHide` do wszystkich przycisków. Przyciski przechowujemy w zmiennej `buttons`, która jest tablicą. Nasza pętla przejdzie przez wszystkie elementy tablicy i na każdym z nich wykona wskazaną przez nas funkcję. Nasz kod będzie teraz wyglądał tak:
```javascript
    // Zaczynamy od pierwszego elementu tablicy, więc zmienną i ustawiamy na 0, bo to indeks pierwszego elementu
    // Kończymy naszą pętlę, gdy i jest równe długości tablicy, tj. przeszło przez wszystkie jej elementy
    // Nasza zmienna i ma podnosić się o 1 z każdą iteracją - oznaczamy to przez ++. Jest to równe wyrażeniu i + 1
    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEvenetListener('click', showHide)
    }
```
13. Gotowe! Wewnątrz pętli `for` do każdego elementu tablicy przypisaliśmy `eventListener` nasłuchujący na `click`. Kiedy wykona się `click` zostaje wywołana funckja `showHide`. 
14. Możesz teraz skasować (albo zakomentować) kod, który napisaliśmy na początku dla jednego przycisku. Pętla sprawia, że możemy ukrywać i pokazywać paragrafy dla wszystkich trzech przycisków.
15. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 2-read-more
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 3`.
