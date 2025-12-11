// slides_config.js
// Konfigurasjon for Reveal.js slides
// Denne filen lastes inn av notebooken/slidene for å overstyre standardinnstillinger.

(function() {
    var config = {
        width: 1600,
        height: 900,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
        slideNumber: true,
    };

    var updateReveal = function(Reveal) {
        Reveal.configure(config);
        // Tving en layout-oppdatering
        if (Reveal.layout) Reveal.layout();
        console.log("Reveal.js config updated to 16:9 via slides_config.js");
    };

    // Sjekk om Reveal er tilgjengelig globalt (f.eks. i RISE)
    if (window.Reveal) {
        updateReveal(window.Reveal);
    } 
    // Sjekk om vi bruker RequireJS (standard nbconvert)
    else if (window.require) {
        // Vi må bruke samme URL som nbconvert bruker for å få tak i samme instans
        var revealUrl = "https://unpkg.com/reveal.js@4.0.2/dist/reveal.js";
        
        window.require([revealUrl], function(Reveal) {
            if (Reveal.isReady()) {
                updateReveal(Reveal);
            } else {
                Reveal.addEventListener('ready', function() {
                    updateReveal(Reveal);
                });
            }
        });
    }
})();
