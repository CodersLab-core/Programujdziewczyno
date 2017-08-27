# Zadanie 6 - Lista zadań

## Jak pracować z instrukcjami?

1. Dokładnie zapoznaj się z każdym krokiem zadania.
2. Na bieżąco wprowadzaj zmiany do swojego kodu zgodnie z instrukcjami.
3. Jeśli coś jest niejasne, pytaj śmiało!

## Cel zadania

Naszym celem jest napisanie obsługi listy zadań znajdującej się w sekcji Plan działania. Chcemy umożliwić użytkownikowi dodanie zadań do listy. W ramach zadań dodatkowych umożliwimy też usuwanie, oznaczanie zadań jako wykonane oraz dodamy walidację pola służącego do wpisywania zadania.

## Instrukcja

Poniżej znajdziesz instrukcje jak napisać cztery różne funkcje. Każda z nich będzie dodawała zadanie do listy i posiadała inne funckjonalności (np. możliwość usuwania zadania). W naszym kodzie powinna znajdowac się tylko finalna funkcja. Zapisujmy tylko to, czego używamy. Oczywiście w ramach ćwiczeń możesz zostaw wszystkie funkcje w kodzie, ale pamiętaj, by unikać tego w realnych projektach. 

## Dodawania zadania do listy

1. JS pozwala nam nie tylko pracować na istniejących już elementach strony, ale także dodawać elementy albo je usuwać. I to zupełnie ze struktury DOM, a nie tylko przez zabranie im wartości `display`. Właśnie to wykorzystamy w trakcie tego zadania.
2. Najpierw przeanalizuj kod HTML. Zobacz, gdzie znajduje się lista, jakie klasy mają elementy, które będą nam potrzebne do obsługi listy zadań. 
3. Stwórz trzy zmienne: przycisk, który będzie dodawał elementy do listy, listę zadań oraz input, do którego wprowadzamy treść zadania i przypisz do nich odpowiednie elementy HTML. Zrób `console.log` i sprawdź, czy wszystkie zmienne są przypisane prawidłowo.
4. W tym zadaniu wykorzystamy wcześniej już pokazany sposób przypisywania konkretnych funkcji jako `callback`. Będziemy więc tworzyć funckje z opdowiednimi nazwami, a potem dopiero podawać je jako argument dla `eventListenera`.
5. Stwórz funckję `addTask()` i następnie podaj ją jako `callback` dla `eventListenera` równego `click` dla przycisku. Twój kod powinien wyglądać w ten sposób:
```javascript
    function addTask() {
        // tu zapiszemy mechanizm dodawania zadań
    };

    button.addEventListener('click', addToList);
```
6. Po kliknięciu w przycisk do listy ma zostać dodane zadanie, którego treść jest równa zawartości wpisanej do inputu. Pierwsza rzecz jakąs musimy zrobić jest stworzenie nowego elementu listy. Zrobimy to używając `document.createElement('znacznik HTML')`. Przypiszmy ten element do odpowiedniej zmiennej, np:
```javascript
    var newTask = document.createElement('li');
```
7. Stworzyliśmy nowy element listy, a teraz chcemy przypisać mu treść. Wartość inputu możemy pobrać korzystając z właśności `value`. Zrób `console.log(input.value)`, żeby zobaczyć, czy faktycznie tak to działa. Potem przypisz `value` jako `innerHTML` Twojego nowego elementu listy. Zrób `console.log`, który sprawdza, jaki `innerHTML` ma Twój nowy element.
8. Żeby zobaczyć element na stronie, nie wystarczy go tylko stworzyć przez `createElement`, musimy go jeszcze odpowiednio umiejscowić w strukturze DOM. Zrobimy to przez odwołanie do istniejących już elementów. Dzięki temu skrypt będzie wiedział, w którym miejscu dodać nasz element. Wykorzystamy teraz właściwość `appendChild`. To znaczy, będziemy dodawać kolejne dzieci do listy zadań. Dodaj następujący kod wewnątrz funkcji:
```javascript
    tasksList.appendChild(newTask);
```
9. Teraz po wpisaniu czegoś w input i kliknięciu przycisku, pojawia się nowy element listy o treści równej tej z inputu. Po dodaniu zadania chcemy, by input był znowu pusty, żeby móc dodać nowe zadania. Wewnątrz funkcji przypisz więc do `value` inputu `''`, czyli pusty string. Dzięki temu input będzie się czyścił po każdym dodaniu nowego elementu. Gotowe!

## Dodawanie zadania z możliwością usunięcia z listy

1. Podstawowa funkcjonalność naszej listy zadań gotowa. Ale zawsze możemy pójść dalej :) Teraz postaramy się napisać funkcję, która obok każdego nowego elementu listy utworzy przycisk umożliwiający usunięcie go z listy. Stwórz nową funckję np. o nazwie `addTaskWithDeleteButton` i przekaż ją jako `callback` do `eventListenera`. 
2. Baza będzie taka sama, więc możesz skopiować kod z funckji `addTask()` i zaraz weźmiemy się za modyfikacje. Po kliknięciu, zupełnie jak wyżej, tworzy się nowey element o treści zawartości inputa. To zostaje bez zmian. 
3. Chcemy stworzyć kolejny nowy element po kliknięciu, tym razem będzie to `button`. Stwórz zmienną i przypisz do niej `documnet.createElement('button')`. Ustaw mu odpowiedni `innerHTML`, np. `Usuń` analogicznie do wcześniejszych zadań. Nowym elementom można też przypisywać klasy. Do przycisku dodaj klasy `btn` oraz `delete-btn` korzystając z `classList.add('nazwa klasy', 'nazwa klasy')`. W pliku CSS możesz teraz dodać klasę `.delete-btn` i odpowiednio ją ostylować. Wszystkie Twoje nowe przyciski o klasie `delete-btn` będą miały przypisane te style.
4. Teraz czas wskazać, gdzie nasz nowy przycisk ma zostać dodany. Zmieńmy trochę strukturę naszego nowego elementu. Do zmiennej `newTask` powinień być przypisany nowy element `li`. Następnie stwórz zmienną `newTaskContent` i przypisz do niej nowy `div`. `innerHTML` diva to będzie treść zadania wprowadzonego w do inputa.
5. Teraz zarówno `div` jak i `button` będą dziećmi `li`. Korzystając z `appendChild` umieść je w odpowiednim miejscu DOM.
6. Czas na napisanie funkcji, która pozwoli nam usuwać zadania po kliknięciu w przyciski `usuń`. Dalej wewnątrz funckcji dodaj do przycisku `usuń` `eventListener` nasłuchujący na `click`. Wewnątrz tej funckji napiszemy kod, który sprawi, że usunie się dane zadanie. Aby usunąć element musimy odwołać się do jego rodzica, w naszym wypadku ciało funckji usuwania będzie wyglądało tak:
```javascript
    this.parentElement.parentNode.removeChild(this.parentElement);
```
7. Sprawdź, czy wszystko działa prawidłowo. Powinnaś móc teraz usuwać poszczególne elementy listy zadań.

## Dodawanie zadania z możliwości oznaczenia jako wykonane

1. Kolejnym krokiem będzie napisanie funkcji, która umożliwi nam oznaczenie zadania jako wykonane. Stwórz nową funkcję, nadaj jej odpowiednią nazwę i przypisz ją jako `callback` w `eventListenerze`.
2. Mechanizm działania będzie podobny do tego z przyciskiem usuwania. Przy kliknięciu ma stworzyć się nowy element listy oraz nowy przycisk o odpowiedniej treści, który będzie umożliwiał oznaczanie zadań jako wykonane. Oznaczenie wykonania to może być np. przekreślenie treści. 
3. Patrząc na kody dwóch funkcji, które już napisałaś, napisz kod, który po kliknięciu przycisku `Dodaj` doda do listy zadań nowy element, a obok niego przycisk z napisem `Zrobione`. 
4. Do przycisku `zrobione` dodaj `eventListener` nasłuchujący na `click`. Napisz kod, który po kliknięciu sprawi, że artybut `style.textDecoration` zadania zmieni się na `line-through`. Do odpowiedniego zadania z listy możesz odwołać się korzystając z `this.previousElementSibling`, bo zadanie i przycisk są rodzeństwem. Zamiast bezpośrednich modyfikacji stylu możesz też przypisać zadaniu odpowiednią klasę, którą ostylujesz w pliku CSS. Wybór należy do Ciebie. Gotowe!

## Walidacja treści inputu przed dodaniem zadania do listy

1. Kolejna wariacja na temat naszej funkcji do walidacja treści inputu. Chcemy, by zadanie dodawało się do listy tylko, gdy input nie jest pusty. Inaczej przy każdym naciśnięciu `Dodaj` do listy zadań doda nam się pusty element. 
2. Napisz kolejną funckję i dodaj do `eventListenera`. Tym razem sama postaraj się zbudować mechanizm działania. Walidację dodaj przez wprowadzenie warunku `if`. Jeśli wartość inputu nie jest pusta, do listy powinno dodać się zadanie. Jeśli jest pusta, użytkownik musi zostać poinformowany, że nie można dodawać pustych zadań. 
3. Żeby wyświetlić informacje o błędzie, zazwyczaj w kodzie HTML umieszcza się odpowiednią sekcje i ustawia się jej `display` na `none`. Gdy input będzie pusty, zmienia się `display` tej sekcji, dzięki czemu użytkownik może ją zobaczyć. Pamiętaj, by ukryć sekcję z powrotem, jeśli input będzie prawidłowy.
4. Postaraj się wykonywać zadanie analogicznie do powyższych, tj. przypisuj zmienne, sprawdzaj je w konsoli, itp. Powodzenia!

Jeśli chcesz zobaczyć rozwiązanie zadania, wpisz w konsoli następującą komendę (KONIECZNIE PAMIĘTAJ O COMMICIE NAJPIERW, INACZEJ STRACISZ SWOJE ZMIANY)
```
git checkout 6-tasks-list
```
Do głównej gałęzi repozytorium powrócisz wpisując:
```
git checkout master
```
Gratulacje! Udało Ci się przejść przez wszystkie zadania. Jeśli nadal masz ochotę pobawić się z kodem, sprawdź pomysły na kolejne funkcjnonalności, które możesz wprowadzić na stronie w folderze `Zadania dodatkowe`. 