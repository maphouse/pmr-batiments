var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Annedeconstruction_1 = new ol.format.GeoJSON();
var features_Annedeconstruction_1 = format_Annedeconstruction_1.readFeatures(json_Annedeconstruction_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annedeconstruction_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Annedeconstruction_1.addFeatures(features_Annedeconstruction_1);
var lyr_Annedeconstruction_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Annedeconstruction_1, 
                style: style_Annedeconstruction_1,
                popuplayertitle: "Unité d'évaluation foncière",
                interactive: true,
    title: 'Année de construction<br />\
    <img src="styles/legend/Annedeconstruction_1_0.png" /> --------- 1866<br />\
    <img src="styles/legend/Annedeconstruction_1_1.png" /> 1866 - 1879<br />\
    <img src="styles/legend/Annedeconstruction_1_2.png" /> 1880 - 1899<br />\
    <img src="styles/legend/Annedeconstruction_1_3.png" /> 1900 - 1917<br />\
    <img src="styles/legend/Annedeconstruction_1_4.png" /> 1918 - 1934<br />\
    <img src="styles/legend/Annedeconstruction_1_5.png" /> 1935 - 1943<br />\
    <img src="styles/legend/Annedeconstruction_1_6.png" /> 1944 - 1959<br />\
    <img src="styles/legend/Annedeconstruction_1_7.png" /> 1960 - 2024<br />'
        });
var group_Unitsdvaluationfoncire = new ol.layer.Group({
                                layers: [lyr_Annedeconstruction_1,],
                                fold: "open",
                                title: "Unités d'évaluation foncière"});
var group_misc = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "misc"});
var group_DAs = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DAs"});
var group_stm = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "stm"});
var group_basemap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "basemap"});

lyr_OSMStandard_0.setVisible(true);lyr_Annedeconstruction_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Unitsdvaluationfoncire];
lyr_Annedeconstruction_1.set('fieldAliases', {'fid': 'fid', 'ID_UEV': 'ID_UEV', 'CIVIQUE_DE': 'CIVIQUE_DE', 'CIVIQUE_FI': 'CIVIQUE_FI', 'NOM_RUE': 'NOM_RUE', 'SUITE_DEBU': 'SUITE_DEBU', 'MUNICIPALI': 'MUNICIPALI', 'ETAGE_HORS': 'ETAGE_HORS', 'NOMBRE_LOG': 'NOMBRE_LOG', 'ANNEE_CONS': 'ANNEE_CONS', 'CODE_UTILI': 'CODE_UTILI', 'LETTRE_DEB': 'LETTRE_DEB', 'LETTRE_FIN': 'LETTRE_FIN', 'LIBELLE_UT': 'LIBELLE_UT', 'CATEGORIE_': 'CATEGORIE_', 'MATRICULE8': 'MATRICULE8', 'SUPERFICIE': 'SUPERFICIE', 'SUPERFIC_1': 'SUPERFIC_1', 'NO_ARROND_': 'NO_ARROND_', });
lyr_Annedeconstruction_1.set('fieldImages', {'fid': 'TextEdit', 'ID_UEV': 'Hidden', 'CIVIQUE_DE': 'TextEdit', 'CIVIQUE_FI': 'TextEdit', 'NOM_RUE': 'TextEdit', 'SUITE_DEBU': 'TextEdit', 'MUNICIPALI': 'Hidden', 'ETAGE_HORS': 'TextEdit', 'NOMBRE_LOG': 'TextEdit', 'ANNEE_CONS': 'TextEdit', 'CODE_UTILI': 'Hidden', 'LETTRE_DEB': 'Hidden', 'LETTRE_FIN': 'Hidden', 'LIBELLE_UT': 'TextEdit', 'CATEGORIE_': 'TextEdit', 'MATRICULE8': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUPERFIC_1': 'TextEdit', 'NO_ARROND_': 'Hidden', });
lyr_Annedeconstruction_1.set('fieldLabels', {'fid': 'inline label - always visible', 'CIVIQUE_DE': 'inline label - always visible', 'CIVIQUE_FI': 'inline label - always visible', 'NOM_RUE': 'inline label - always visible', 'SUITE_DEBU': 'inline label - always visible', 'ETAGE_HORS': 'inline label - always visible', 'NOMBRE_LOG': 'inline label - always visible', 'ANNEE_CONS': 'inline label - always visible', 'LIBELLE_UT': 'inline label - always visible', 'CATEGORIE_': 'inline label - always visible', 'MATRICULE8': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'SUPERFIC_1': 'inline label - always visible', });
lyr_Annedeconstruction_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});