# technologie-chmurowe-zadanie-9.1-rest-api
Zadanie polega na stworzeniu obrazu Docker, który będzie zawierał aplikację typu REST. Obraz powinien również zawierać skonfigurowany healthcheck, który będzie regularnie sprawdzał, czy aplikacja jest w pełni funkcjonalna.

    1.Pierwszym krokiem jest napisanie aplikacji typu REST. Możemy użyć dowolnego języka programowania i frameworka. Należy upewnić się, że aplikacja działa poprawnie i udostępnia kilka prostych endpointów.

    2.Następnie należy stworzyć plik Dockerfile, w którym zostaną określone potrzebne zależności, skonfigurowane środowisko i uruchomienie aplikacji. W pliku Dockerfile należy także dodać instrukcję HEALTHCHECK, która będzie regularnie testować, czy aplikacja jest w pełni funkcjonalna.

    3.Ostatnim krokiem będzie utworzenie pliku docker-compose.yml, w którym zdefiniujemy usługę dla utworzonego wcześniej kontenera. Usługa powinna zawierać kilka argumentów takich jak:

        1.Polecenie do testowania zdrowia aplikacji

        2.Czas w sekundach pomiędzy kolejnymi testami

        3.Maksymalny czas oczekiwania na odpowiedź od aplikacji

        4.Liczba powtórzeń testu, zanim aplikacja zostanie uznana za niezdrową
