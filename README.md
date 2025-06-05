# Mem Serwis

Aplikacja React do przeglądania i oceniania memów. Pozwala na głosowanie (upvote/downvote), oznaczanie ulubionych oraz dodawanie nowych memów.
Projekt zaliczeniowy na studia podyplomowe.

## Funkcje

- Wyświetlanie memów na dwóch głównych podstronach:
    - `/hotmemes` - memy z przewagą upvote - downvote > 5
    - `/` - popzostałe memy (Regular Memes)
- Głosowanie na memy: upvote / downvote
- Filtrowanie memów "na żywo"
- Oznaczanie memów jako ulubione (gwiazdka)
- Zakładka `/favoritememes` - memy oznaczone jako ulubione
- Nawigacja między stronami
- Dodawanie nowego mema z podaniem tytułu i linku do obrazka (formularz)

## Technologie 

- React
- React Router DOM
- React Icons
- CSS

### Instrukcja uruchomienia projektu lokalnie

1.Sklonuj repozytorium:

git clone https://github.com/marcelinasmolinska/mem-serwis
cd mem-serwis/mem-serwis

2. Zainstaluj zależności:

npm install

3. Uruchom aplikację:

npm start

4. Aplikacja będzie dostępna pod tym adresem:
http://localhost:3000

## Struktura projektu

- App.jsx - główny komponent aplikacji zawierający konfigurację tras za pomocą ReactRouter
- /pages  widoki: 
    - ErrorPage.jsx - strona błędu (404)
    - FavoriteMemes.jsx - memy oznaczone jako ulubione
    - HotMemes.jsx - memy z przewagą głosów pozytywnych
    - RegularMemes.jsx - pozostałe memy
- /components - komponenty: 
    - AddMeme.jsx - formularz dodania nowego mema
    - Mem.jsx - pojedynczy mem (z oceną i interakcjami)
    - Navigation.jsx - menu nawigacyjne
- memsData.js - początkowa lista memów (dane trzymane lokalnie)

## Uwagi

- Projekt wykonany w celach edukacyjnych.
- Nie użyto backendu ani bazy danych - wszystkie dane trzymane w stanie aplikacji (React useState).

## Autor

Projekt zaliczeniowy - studia podyplomowe.
Autor: Marcelina Smolińska

