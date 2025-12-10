# Intro til Maskinlæring i Akvakultur (RAS)

Dette prosjektet er en introduksjon til maskinlæring rettet mot akvakultur, spesielt RAS-anlegg (Resirkulerende Akvakultur System). Gjennom en Jupyter Notebook demonstreres det hvordan man kan laste inn data, utføre eksplorativ dataanalyse (EDA), og trene en enkel lineær regresjonsmodell for å predikere biomasse.

# Skyoppsett
Presentasjonsfilen [intro_to_ml.ipynb](presentasjon/intro_to_ml.ipynb) kan lastes opp i [Google Colab](https://colab.research.google.com/).

# Lokalt oppsett
## Forutsetninger

Prosjektet bruker [pixi](https://pixi.sh/) for pakke- og miljøhåndtering. Du må ha `pixi` installert på maskinen din.

Installasjon av pixi (Windows PowerShell):
```powershell
iwr -useb https://pixi.sh/install.ps1 | iex
```
For macOS/Linux, se [pixi dokumentasjonen](https://pixi.sh/).

## Oppsett og Installasjon

1. Klon dette repositoriet:
   ```bash
   git clone <url-til-repo>
   cd ml-fagskole
   ```

2. Pixi vil automatisk sette opp miljøet når du kjører en kommando.

## Kjøre prosjektet

Prosjektet har definerte oppgaver (tasks) i `pyproject.toml` som gjør det enkelt å kjøre de ulike delene.

### Starte Jupyter Lab
For å jobbe med koden og utforske notebooken:
```bash
pixi run lab
```

### Generere presentasjon (Slides)
Notebooken kan konverteres til en HTML-presentasjon (Reveal.js):
```bash
pixi run slides
```
Dette vil generere `intro_to_ml.slides.html`.

### Vise presentasjon
For å generere slides og starte en lokal webserver for å vise dem:
```bash
pixi run present
```
Dette vil gjøre presentasjonen tilgjengelig på [localhost](http://localhost:8000/intro_to_ml.slides.html).

## Prosjektstruktur

- `intro_to_ml.ipynb`: Hoved-notebooken med kode og forklaringer.
- `data/`: Mappe som inneholder datasett (f.eks. `ras_data.csv`).
- `pyproject.toml`: Konfigurasjonsfil for prosjektet og pixi.
- `requirements.txt`: Python-avhengigheter.
