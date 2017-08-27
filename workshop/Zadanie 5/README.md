# Zadanie 5 - Slider z kropkami

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest napisanie obsługi slidera, który sprawi, że po kliknięciu w odpowiednią kropkę, pojawi się opis danego organizatora.

## Instrukcja

1. Przeanalizuj kod HTML - znajdź w nim elementy listy, którymi będziemy się zajmować (klasa `slider`) oraz kropki, które będą umożliwiały przejścia między opisami organizatorów. Slider to zazwyczaj odpowiednio ostylowana lista, w której mamy jeden widoczny element, reszta nie jest wyświetlana. Będziemy w zadaniu działać na klasach. W zależności od sytuacji dodamy lub usuniemy daną klasę dla elementu. Teraz widzisz wszystkie elementy listy, musimy to zmienić.
2. Zaczniemy od przygotowania klas. W pliku CSS dopisz kod, który sprawi, że wszystkie elementy listy `slider` będą miały własność `display` ustawioną na `none`. Sprawdź podgląd `index.html`, nie powinno teraz być widać żadnego opisu.
3. W pliku CSS dodaj klasę `visible`, która ustawia `display` na `inline-block`. W pliku HTML przypisz klasę `visible` do pierwszego elementu listy `slider`. Teraz powinnaś widzieć na stronie pierwszy element listy i trzy kropki pod nim.
4. Zwróć uwagę, że do pierwszej kropki przypisana jest klasa `active`, która zmienia kolor kropki. Dzięki temu użytkownik będzie wiedział, w którą kropkę przed chwilą kliknął i który opis jest aktywny.
5. W pliku JS przypisz do jednej zmiennej wszystkie elementy listy, a do drugiej wszystkie kropki. Powinnaś dostać dwie tablice, każda po trzy elementy. Zrób `console.log`, by to sprawdzić.
6. Rozwiążemy to zadanie na dwa sposóby - prostszy i trudniejszy. Zaczniemy od tego prostszego, dlatego nadaj poszczególnym kropkom różne `id` w kodzie HTML, a następnie przypisz je do trzech różnych zmiennych w pliku JS. 
7. Zastanów się nad logiką działania slidera. Po kliknięciu w daną kropkę, musimy sprawić, by tylko ta kropka miała klasę `active`. Konieczne więc będzie przejście pętlą `for` przez tablicę wszystkich kropek i zabranie im klasy `active`. Jednocześnie musimy ustawić klasę `visible` dla odpowiedniego elementu listy. Przejdziemy więc najpierw przez wszystkie elementy i zabierzemy im klasę `visible`, a potem przypiszemy ją tylko do wybranego elementu. Gdybyśmy nie usuwali klas za każdym razem, do kolejnych elementów dodawana bylaby klasa `visible`. Po trzech kliknięciach wszystkie elementy byłby widoczne, a tego nie chcemy. 
8. Do pierwszej kropki dodaj `eventListener` nasłuchujący na `click`. Klasy będziemy dodawać i usuwać korzystając z właściwości `classList` elementu. Żeby zobaczyć listę klas dla elementu, w który klikamy, zrób `console.log(this.classList)` wewnątrz funkcji i zobacz, jak wygląda lista. 
9. Do listy klas możemy dodawać i usuwać klasy korzystając z `classList.add('nazwa-klasy')` i `classList.remove(nazwa-klasy)`. Wewnątrz naszej funkcji najpierw dodaj pętlę, która przechodzi przez elementy tablicy kropek i każdemu z nich usuwa klasę `active`. Jako że mamy taką samą liczbę elementów w tablicy kropek i elementów listy, możemy jednocześnie usunąć klasę `visible` wszystkim elementom listy. Wnętrze pętli `for` będzie więc wyglądało tak:
```javascript
    dots[i].classList.remove('active');
    items[i].classList.remove('visible');
```
10. Teraz po kliknięciu w kropkę wszystkie kropki tracą klasę `active`, a wszystkie opisy klasę `visible`. Niekoniecznie o to nam chodziło. Musimy przecież jeszcze przypisać te klasy do odpowiednich elementów. Najpierw zajmiemy się kropką - wykorzstamy zmienną `this`, która w naszym przypadku oznacza kropkę, w którą kliknięliśmy. Korzystając z `this` dodaj do kropki klasę `active`. Pamiętaj, by zrobić to pod pętlą `for`, nie wewnątrz niej. Chcemy by najpierw wykonał się kod w pętli, a potem dopiero nadajemy klasy. 
11. Zostało nam nadanie klasy `visible` odpowiedniemu opisowi. W prostszej wersji naszej rozwiązania po prostu wybierz odpowiedni element tablicy z opisami, czyli w przypadku pierwszej kropki `items[0]` i nadaj mu klasę `visible`. 
12. Teraz wykonaj powyższe punkty dla drugiej i trzeciej kropki. Odpowiednio zmień kod, żeby klasy dodawały się do drugiej kropki i drugiego opisu itd.
13. Efektem naszej pracy są trzy funkcje przypisane do trzech różnych kropek. Kod działa tak, jak powinien, ale powtarzamy jego część. Dlatego teraz przypiszemy funkcję do wszystkich kropek za jednym zamachem. To zadanie jest trudniejsze ponieważ skorzystamy z tzw. `IIFE`, czyli `Immediately Invoked Function Expression`. Będzie to funkcja wywoływana od razu po zdeklarowaniu. Zaraz zobaczysz, jak to wygląda w praktyce. Nie przejmuj się, jeśli nie uda Ci się dokładnie rozumieć całego mechanizmu działania. To naprawdę zaawansowany temat :)
14. Na sam początek zakomentuj rozwiązanie, które przed chwilą zapisałaś. Stwórz teraz pętlę, która przejdzie przez tablicę kropek. Powinnaś mieć taki kod:
```javascript
    for(var i = 0; i <= dots.length; i++) {
        // tu będziemy pisać dalszą część kodu
    }
```
15. Dlaczego wewnątrz tej pętli nie możemy po prostu odwołać się do `this` i pozmieniać klasy dla opisów? Otóż pętla przechodzi przez kropki, nie opisy, `this` odnosi się więc do kropek, to po pierwsze. Po drugie - nie możemy tutaj skorzystać np. z `this.previousElementSibling`, bo kropki i opisy nie mają między sobą takiej relacji. To, co chcemy zrobić, to dla każdej kropki wywołać kolejną funckję, która będzie zmieniała klasy. W funkcji tej przekażemy indeks danej kropki. Dzięki zachowaniu indeksu będziemy mogli dodać klasę odpowiedniemu opisowi.
16. Wewnątrz pętli dodaj funckję, która jako argument przyjmuje `index`. Całą funkcję obejmij w dodatkowe nawiasy okrągłe i na sam koniec dodaj jej wywołanie przez `(i)`, to właśnie `IIFE`. Twój kod wewnątrz pętli `for` powinien wyglądać tak:
```javascript
    (function(index) {
        // tu będziemy pisać dalszą część kodu
    })(i);
```
17. Teraz w końcu wewnątrz funkcji możemy dodać `eventListener` na `click` do kropek w sposób, który już znasz, czyli:
```javascript
    dots[i].addEventListener('click', function() {

    }
```
18. To, co osiągnęliśmy to przypisanie `listenera` do kropek przy jednoczesnym zachowaniu indeksu. Wewnątrz funkcji wykonującej się na `click` dodaj poniższy kod i sprawdź konsolę po kliknięciu w kropki.
```javascript
    console.log('teraz i jest równe' + i);
    console.log('natomiast index jest równy' + index);
```
19. Teraz powtarzamy już nasz wcześniejszy kod - tzn. musimy usunąć klasę `active` wszystkim kropkom i klasę `visible` wszystkim opisom. Stwórz pętlę, która to zrobi analogicznie do tej, którą napisałaś w prostszej wersji rozwiązania. UWAGA! Wykorzystujesz już zmienną `i` i nie chcesz jej nadpisać. Dlatego do pętli użyj innej zmiennej, np. `j`. Twoja pętla powinna zaczynać się w ten sposób:
```javascript
    for(var j = 0; j <= dots.length; j++) {
        // tutaj usuń odpowiednie klasy elementom tablic kropek i opisów
    }
```
20. Ostatni punkt to dodanie klas odpowiedniej kropce i opisowi. Teraz wykorzystamy przekazany do funckji indeks. Ustaw odpowiednią klasę elementowi `dots[index]` oraz `items[index]`. Gotowe!
6. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 5-slider-with-dots
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 6`.
