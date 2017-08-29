# Zadanie 2 - Czytaj więcej

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest sprawienie, by po kliknięciu w przycisk `Więcej` rozwijał się opis pod daną sekcją. Jednocześnie przycisk ma zamienić się na `Mniej` i po kliknięciu chować pokazany wcześniej tekst.

## Instrukcja

1. Poszukaj w kodzie HTML przycisków `Więcej`. Nad każdym z nich widzisz teraz dwa paragrafy. Jeden z nich ma klasę `more`. Ukryj wszystkie paragrafy o klasie `more` przez zmianę `display` na `none` w pliku CSS. Nastepnie w pliku JS zapisz wszystkie przyciski `Więcej` do zmiennej używając `document.querySelectorAll('nazwa-selektora'`). Zmienną nazwij np. `buttons`. Wyświetl zmienną w konsoli - powinnaś zobaczyć tablicę z trzema przyciskami. Kod powinien wyglądać mniej więcej w ten sposób:
```javascript
    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
```
2. Nad każdym przyciskiem znajduje się paragraf o klasie `more` (mimo że teraz jest niewidoczny). Przycisk oraz paragraf mają tego samego rodzica, którym jest nadrzędny dla nich `section`. Są więc rodzeństwem. W JS możemy to wykorzystać. Po kliknięciu w przycisk ma pojawiać się jego poprzedni brat (albo siostra ;)). Żeby sprawdzić, czy faktycznie tak to zadziała, wypisz w konsoli rodzeństwo pierwszego elementu tablicy z przyciskami w ten sposób:
```javascript
    console.log(buttons[0].previousElementSibling); // Powinnaś zobaczyć w konsoli paragraf o klasie `more`
```
3. Do pierwszego elementu tablicy z przyciskami podłącz `event listener` nasłuchujący na `click`. Dodaj wewnątrz funkcji `console.log`, żeby sprawdzić, czy działa prawidłowo (czyli na kliknięcie). Zrób to w ten sposób:
```javascript
    buttons[0].addEventListener('click', function() {
      console.log('działa'); // To powinnaś zobaczyć w konsoli po kliknięciu w pierwszy przycisk
    });
```
4. Teraz chcemy, by pojawił się odpowiedni paragraf. Wykorzystamy do tego specjalną zmienną `this`. `this` w uproszczeniu odwołuje się do elementu, na którym została wywołana funkcja. Dzięki niej możemy odnieść się do stanu obiektu bez konieczności podawania jego nazwy. Dla nas `this` to będzie więc przycisk, do którego podłączyliśmy `listener`. Sprawdź to wpisując w kodzie wewnątrz funkcji `console.log(this)`.
```javascript
    buttons[0].addEventListener('click', function() {
      console.log(this); // Powinnaś zobaczyć przycisk w konsoli
    });
```
5. Dzięki użyciu `this` możemy teraz stworzyć zmienną np. o nazwie `textArea`, która będzie reprezentowała paragraf nad pierwszym przyciskiem. Do zmiennej przypisz `this.previousElementSibling` i sprawdź przez `console.log` czy przypisał się odpowiedni element. 
```javascript
    buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      console.log(textArea); // Powinien to być paragraf nad pierwszym przyciskiem
    });
```
6. Teraz zmień własność `display` paragrafu z `none` na `block` analogicznie do zadania z wyświetlaniem menu. Na kliknięcie w pierwszy przycisk powinien teraz pokazywać się pierwszy paragraf o klasie `more`. 
```javascript
    buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
    });
```
7. Oprócz wyświetlenia paragrafu, powinien zmienić się napis na przycisku. Umożliwi nam to własność `innerHTML`. Pobiera ona (albo zmienia) zbiór znaczników HTML w danym elemencie razem z ich treścią. Wyświetl w konsoli `innerHTML` przycisku `Więcej`. Użyj do tego `this`. 
```javascript
    console.log(this.innerHTML); 
```
Następnie analogicznie zmień zawartość HTML przycisku tak, by zawierała napis `Mniej` oraz odpowiednią ikonkę (w znaczniku `<span>`). Zmiana `innerHTML` powinna dziać się w tym samym miejscu kodu, gdzie zmieniamy `display` paragrafu.
```javascript
    buttons[0].addEventListener('click', function() {
      var textArea = this.previousElementSibling;
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    });
```
8. Chcemy teraz, aby dodatkowy paragraf schował się po kliknięciu w przycisk, który ma napis `Mniej`. Pamiętajmy, że to cały czas ten sam przycisk. Użyjemy prostego warunku `if`, który pozwoli nam sprawdzić, jaki jest `display` zmiennej `textArea`. Kiedy będzie równy `none`, zmienimy go na `block` i odwrotnie. Jest tu jednak jeden mały haczyk - JS widzi tylko te style, które zostały przypisane do elementu przez skrypt. Przed pierwszym kliknięciem w przycisk, żaden styl jeszcze nie będzie przypisany. Dlatego będzie trzeba ustawić warunek, który ma zadziałać zarówno, jak `display` ustawiony jest na `none`. Oraz wtedy, kiedy nie jest jeszcze ustawiony. Kod będzie wyglądał tak:
```javascript
    buttons[0].addEventListener('click', function() {

      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony

      if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    });
```
09. Teraz wszystko powinno dobrze działać dla pierwszego przycisku. Chcemy jednak, by dla dwóch pozostałych przycisków też pokazywały się odpowiednie paragrafy. Możemy skopiować kod i podłączyć funkcję trzy raz do różnych przycisków, ale byłoby to bezsensowne powtarzanie kodu. Dlatego użyjemy pętli `for` do podłączenia funkcji do wszystkich przycisków jednocześnie. Dzięki odwołaniu się do `this` wewnątrz funkcji, zostanie wybrany odpowiedni paragraf dla danego przycisku.
10. Najpierw przypiszmy całą funkcję, która była wywoływana przez `click` do funkcji, która nie będzie anonimowa. Wcześniej nasza funckja nie miała nazwy, po prostu od razu wypisywaliśmy jej ciało. Oba sposoby przypisania funkcji są poprawne. Wygodniej nam będzie po prostu operować funkcją osobno, a podłączać ją dopiero w pętli. Żeby to zrozumieć, spójrz na poniższe przykłady. 
Ten kod:
```javascript
    function showHide() {
        // tutaj jest funkcja, wykona się po kliknięciu
    };
    buttons[0].addEventListener('click', showHide);
```
Robi dokładnie to samo, co ten kod:
```javascript 
    buttons[0].addEventListener('click', function() {
      // tutaj jest funkcja, wykona się po kliknięciu
    });
```
W pierwszym przypadku tworzymy funkcję z osobną nazwą i tam określamy, co ma zrobić program. W drugim przypadku od razu przekazujemy to, co ma zrobić program do funkcji anonimowej.
11. Przypisz kod dodany na kliknięcie do funkcji, która nazywa się np. `showHide`. 
```javascript
    function showHide() {
      var textArea = this.previousElementSibling;
    
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
```
12. Sprawdź, czy kod nadal działa podając nazwę funkcji jako drugi argument dla `listenera`. Po kliknięciu w pierwszy przycisk powinien pojawiać się pierwszy paragraf.
```javascript
    buttons[0].addEventListener('click', showHide);
```
11. Teraz użyjemy pętli `for` do podłączenia funkcji `showHide` do wszystkich przycisków. Przyciski przechowujemy w zmiennej `buttons`, która jest tablicą. Nasza pętla przejdzie przez wszystkie elementy tablicy i na każdym z nich wykona wskazaną przez nas funkcję. Nasz kod będzie teraz wyglądał tak:
```javascript
    // Zaczynamy od pierwszego elementu tablicy, więc zmienną i ustawiamy na 0, bo to indeks pierwszego elementu
    // Kończymy naszą pętlę, gdy i jest równe długości tablicy, tj. przeszło przez wszystkie jej elementy
    // Nasza zmienna i ma podnosić się o 1 z każdą iteracją - oznaczamy to przez ++. Jest to równe wyrażeniu i + 1
    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
```
13. Gotowe! Wewnątrz pętli `for` do każdego elementu tablicy przypisaliśmy `eventListener` nasłuchujący na `click`. Kiedy wykona się `click` zostaje wywołana funckja `showHide`. Cały Twój kod powinien wyglądać tak:
```javascript
  var buttons = document.querySelectorAll('.read-more');

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
```
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
