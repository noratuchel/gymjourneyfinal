# Introducing GymJourney

GymJourney ist eine Plattform auf der sich Sportbegeisterte miteinander in Form von Foren austauschen und ihre eigene Erfolge festhalten können.

## Setup and Installation

1. **Repository von GitLab klonen**

   ```sh
   git clone https://gitlab.beuth-hochschule.de/s78740/we2-2020-wise-noratuchel.git
   cd  Uebung3/gymjourney
   ```

2. **Alle yarn dependencies installieren**

   ```sh
   yarn install
   ```

3. **Umgebungsvariablen benutzen**

   folgende Umgebungsvariablen müssen vorhanden sein und je nach Deployment (lokal/live) angepasst werden:

   ```
   REACT_APP_BACKEND_URL
   ```

4. **Die Applikation starten**

   ```
    yarn start
   ```

Dies läuft auf dem Standardport 3000. Alle Routen können über http://localhost:3000 erreicht werden.
