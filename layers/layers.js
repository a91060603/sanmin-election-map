var wms_layers = [];

var format____0 = new ol.format.GeoJSON();
var features____0 = format____0.readFeatures(json____0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____0.addFeatures(features____0);
var lyr____0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____0, 
                style: style____0,
                popuplayertitle: '高雄_三民區_人口',
                interactive: true,
    title: '高雄_三民區_人口<br />\
    <img src="styles/legend/___0_0.png" /> 734 - 2000<br />\
    <img src="styles/legend/___0_1.png" /> 2000 - 4000<br />\
    <img src="styles/legend/___0_2.png" /> 4000 - 6000<br />\
    <img src="styles/legend/___0_3.png" /> 6000 - 8000<br />\
    <img src="styles/legend/___0_4.png" /> 8000 - 10000<br />\
    <img src="styles/legend/___0_5.png" /> 10000 - 12000<br />\
    <img src="styles/legend/___0_6.png" /> 12000 - 14000<br />\
    <img src="styles/legend/___0_7.png" /> 14000 - 16000<br />\
    <img src="styles/legend/___0_8.png" /> 16000 - 18000<br />\
    <img src="styles/legend/___0_9.png" /> 18000 - 20000<br />\
    <img src="styles/legend/___0_10.png" /> 20000 - 22000<br />\
    <img src="styles/legend/___0_11.png" /> 22000 - 24000<br />\
    <img src="styles/legend/___0_12.png" /> 24000 - 25298<br />' });

lyr____0.setVisible(true);
var layersList = [lyr____0];
lyr____0.set('fieldAliases', {'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', '里名': '里名', '人口': '人口', '民進黨': '民進黨', '國民黨': '國民黨', '時代力量': '時代力量', '台灣基進': '台灣基進', '政黨傾向': '政黨傾向', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr____0.set('fieldImages', {'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', '里名': 'TextEdit', '人口': 'TextEdit', '民進黨': 'TextEdit', '國民黨': 'TextEdit', '時代力量': 'TextEdit', '台灣基進': 'TextEdit', '政黨傾向': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', });
lyr____0.set('fieldLabels', {'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', '里名': 'no label', '人口': 'no label', '民進黨': 'no label', '國民黨': 'no label', '時代力量': 'no label', '台灣基進': 'no label', '政黨傾向': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr____0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});