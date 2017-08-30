# Zadanie 5 - Slider z kropkami

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest napisanie obsługi slidera, który sprawi, że po kliknięciu w odpowiednią kropkę, pojawi się opis danego organizatora.

# Instrukcja

1. Przeanalizuj kod HTML - znajdź w nim elementy listy, którymi będziemy się zajmować (klasa `slider`) oraz kropki, które będą umożliwiały przejścia między opisami organizatorów. Slider to zazwyczaj odpowiednio ostylowana lista, w której mamy jeden widoczny element, reszta nie jest wyświetlana. Będziemy w zadaniu działać na klasach. W zależności od sytuacji dodamy lub usuniemy daną klasę dla elementu. Teraz widzisz wszystkie elementy listy, musimy to zmienić.
2. Zaczniemy od przygotowania klas. W pliku CSS dopisz kod, który sprawi, że wszystkie elementy listy `slider` będą miały własność `display` ustawioną na `none`. Sprawdź podgląd `index.html`, nie powinno teraz być widać żadnego opisu.
3. W pliku CSS dodaj klasę `visible`, która ustawia `display` na `inline-block`. W pliku HTML przypisz klasę `visible` do pierwszego elementu listy `slider`. Teraz powinnaś widzieć na stronie pierwszy element listy i trzy kropki pod nim.
4. Zwróć uwagę, że do pierwszej kropki przypisana jest klasa `active`, która zmienia kolor kropki. Dzięki temu użytkownik będzie wiedział, w którą kropkę przed chwilą kliknął i który opis jest aktywny.
5. W pliku JS przypisz do jednej zmiennej wszystkie elementy listy (nazwij je np. `items`), a do drugiej wszystkie kropki (nazwij je np. `dots`). Powinnaś dostać dwie tablice, każda po trzy elementy. Zrób `console.log`, by to sprawdzić.
6. Możemy przypisywać `listenery` do kropek odwołując się do nich przez indeks w tablicy zmiennej z kropkami (np. dla pierwszej kropki to byłoby `dots[0]`). Możesz też przypisać id do każdej kropki w pliku HTML i potem stworzyć trzy osobne zmienne w pliku JS, każda z przypisaną jedną kropką. Załóżmy, że nadałaś pierwszej kropce id `dot1` w pliku HTML. Wtedy zmienna dla Twojej pierwszej kropki będzie wyglądała tak: `var dot1 = document.querySelector('#dot1')`.
7. Zastanów się nad logiką działania slidera. Po kliknięciu w daną kropkę, musimy sprawić, by tylko ta kropka miała klasę `active`. Konieczne więc będzie przejście pętlą `for` przez tablicę wszystkich kropek i zabranie im klasy `active`. Jednocześnie musimy ustawić klasę `visible` dla odpowiedniego elementu listy. Przejdziemy więc najpierw przez wszystkie elementy i zabierzemy im klasę `visible`, a potem przypiszemy ją tylko do wybranego elementu. Gdybyśmy nie usuwali klas za każdym razem, do kolejnych elementów dodawana bylaby klasa `visible`. Po trzech kliknięciach wszystkie elementy byłby widoczne, a tego nie chcemy. 
8. Do pierwszej kropki dodaj `eventListener` nasłuchujący na `click`. Klasy będziemy dodawać i usuwać korzystając z właściwości `classList` elementu. Żeby zobaczyć listę klas dla elementu, w który klikamy, zrób `console.log(this.classList)` wewnątrz funkcji i zobacz, jak wygląda lista. 
9. Do listy klas możemy dodawać i usuwać klasy korzystając z `classList.add('nazwa-klasy')` i `classList.remove(nazwa-klasy)`. Wewnątrz naszej funkcji najpierw dodaj pętlę, która przechodzi przez elementy tablicy kropek i każdemu z nich usuwa klasę `active`. Jako że mamy taką samą liczbę elementów w tablicy kropek i elementów listy, możemy jednocześnie usunąć klasę `visible` wszystkim elementom listy. Wnętrze pętli `for` będzie więc wyglądało tak:
```javascript
    dots[i].classList.remove('active');
    items[i].classList.remove('visible');
```
10. Teraz po kliknięciu w kropkę wszystkie kropki tracą klasę `active`, a wszystkie opisy klasę `visible`. Niekoniecznie o to nam chodziło. Musimy przecież jeszcze przypisać te klasy do odpowiednich elementów. Najpierw zajmiemy się kropką - wykorzstamy zmienną `this`, która w naszym przypadku oznacza kropkę, w którą kliknięliśmy. Korzystając z `this` dodaj do kropki klasę `active`. Pamiętaj, by zrobić to pod pętlą `for`, nie wewnątrz niej. Chcemy by najpierw wykonał się kod w pętli, a potem dopiero nadajemy klasy. 
11. Zostało nam nadanie klasy `visible` odpowiedniemu opisowi. W prostszej wersji naszej rozwiązania po prostu wybierz odpowiedni element tablicy z opisami, czyli w przypadku pierwszej kropki `items[0]` i nadaj mu klasę `visible`. 
12. Teraz wykonaj powyższe punkty dla drugiej i trzeciej kropki. Odpowiednio zmień kod, żeby klasy dodawały się do drugiej kropki i drugiego opisu itd. Efektem Twojej pracy powinny trzy funkcje przypisane do trzech różnych kropek. Gotowe!
13. Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 5-slider-with-dots
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Czas na kolejne zadania! Przejdź do folderu `Zadanie 6`.
