var wms_layers = [];

var format_Batiments_0 = new ol.format.GeoJSON();
var features_Batiments_0 = format_Batiments_0.readFeatures(json_Batiments_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batiments_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batiments_0.addFeatures(features_Batiments_0);
var lyr_Batiments_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batiments_0, 
                style: style_Batiments_0,
                popuplayertitle: "Batiments",
                interactive: true,
    title: 'Batiments<br />\
    <img src="styles/legend/Batiments_0_0.png" /> - 1866<br />\
    <img src="styles/legend/Batiments_0_1.png" /> 1866 - 1879<br />\
    <img src="styles/legend/Batiments_0_2.png" /> 1880 - 1899<br />\
    <img src="styles/legend/Batiments_0_3.png" /> 1900 - 1917<br />\
    <img src="styles/legend/Batiments_0_4.png" /> 1918 - 1934<br />\
    <img src="styles/legend/Batiments_0_5.png" /> 1935 - 1943<br />\
    <img src="styles/legend/Batiments_0_6.png" /> 1944 - 1959<br />\
    <img src="styles/legend/Batiments_0_7.png" /> 1960 - 2024<br />'
        });
var group_frame = new ol.layer.Group({
                                layers: [lyr_Batiments_0,],
                                fold: "open",
                                title: "frame"});

lyr_Batiments_0.setVisible(true);
var layersList = [group_frame];
lyr_Batiments_0.set('fieldAliases', {'fid': 'fid', 'ID_UEV': 'ID_UEV', 'CIVIQUE_DE': 'CIVIQUE_DE', 'CIVIQUE_FI': 'CIVIQUE_FI', 'NOM_RUE': 'NOM_RUE', 'SUITE_DEBU': 'SUITE_DEBU', 'MUNICIPALI': 'MUNICIPALI', 'ETAGE_HORS': 'ETAGE_HORS', 'NOMBRE_LOG': 'NOMBRE_LOG', 'ANNEE_CONS': 'ANNEE_CONS', 'CODE_UTILI': 'CODE_UTILI', 'LETTRE_DEB': 'LETTRE_DEB', 'LETTRE_FIN': 'LETTRE_FIN', 'LIBELLE_UT': 'LIBELLE_UT', 'CATEGORIE_': 'CATEGORIE_', 'MATRICULE8': 'MATRICULE8', 'SUPERFICIE': 'SUPERFICIE', 'SUPERFIC_1': 'SUPERFIC_1', 'NO_ARROND_': 'NO_ARROND_', });
lyr_Batiments_0.set('fieldImages', {'fid': 'TextEdit', 'ID_UEV': 'TextEdit', 'CIVIQUE_DE': 'TextEdit', 'CIVIQUE_FI': 'TextEdit', 'NOM_RUE': 'TextEdit', 'SUITE_DEBU': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'ETAGE_HORS': 'TextEdit', 'NOMBRE_LOG': 'TextEdit', 'ANNEE_CONS': 'TextEdit', 'CODE_UTILI': 'TextEdit', 'LETTRE_DEB': 'TextEdit', 'LETTRE_FIN': 'TextEdit', 'LIBELLE_UT': 'TextEdit', 'CATEGORIE_': 'TextEdit', 'MATRICULE8': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'SUPERFIC_1': 'TextEdit', 'NO_ARROND_': 'TextEdit', });
lyr_Batiments_0.set('fieldLabels', {'fid': 'no label', 'ID_UEV': 'no label', 'CIVIQUE_DE': 'no label', 'CIVIQUE_FI': 'no label', 'NOM_RUE': 'no label', 'SUITE_DEBU': 'no label', 'MUNICIPALI': 'no label', 'ETAGE_HORS': 'no label', 'NOMBRE_LOG': 'no label', 'ANNEE_CONS': 'no label', 'CODE_UTILI': 'no label', 'LETTRE_DEB': 'no label', 'LETTRE_FIN': 'no label', 'LIBELLE_UT': 'no label', 'CATEGORIE_': 'no label', 'MATRICULE8': 'no label', 'SUPERFICIE': 'no label', 'SUPERFIC_1': 'no label', 'NO_ARROND_': 'no label', });
lyr_Batiments_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});