ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-73.988981, 41.942468, -73.985306, 41.944462]);
var wms_layers = [];

var format_Cemetery_0 = new ol.format.GeoJSON();
var features_Cemetery_0 = format_Cemetery_0.readFeatures(json_Cemetery_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cemetery_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemetery_0.addFeatures(features_Cemetery_0);
var lyr_Cemetery_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cemetery_0, 
                style: style_Cemetery_0,
                popuplayertitle: 'Cemetery',
                interactive: false,
                title: '<img src="styles/legend/Cemetery_0.png" /> Cemetery'
            });
var format_Interred_1 = new ol.format.GeoJSON();
var features_Interred_1 = format_Interred_1.readFeatures(json_Interred_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Interred_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Interred_1.addFeatures(features_Interred_1);
var lyr_Interred_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Interred_1, 
                style: style_Interred_1,
                popuplayertitle: 'Interred',
                interactive: true,
    title: 'Interred<br />\
    <img src="styles/legend/Interred_1_0.png" /> Single Burial<br />\
    <img src="styles/legend/Interred_1_1.png" /> Multiple Burials<br />' });

lyr_Cemetery_0.setVisible(true);lyr_Interred_1.setVisible(true);
var layersList = [lyr_Cemetery_0,lyr_Interred_1];
lyr_Cemetery_0.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'id': 'id', 'section': 'section', 'block': 'block', 'boarder': 'boarder', 'label': 'label', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_Interred_1.set('fieldAliases', {'Key': 'Key', 'Section': 'Section', 'MapLgnd': 'MapLgnd', 'BurialCnt': 'BurialCnt', 'NameI': 'NameI', 'Name': 'Name', 'Deceased': 'Deceased', 'Age': 'Age', 'xLong': 'xLong', 'yLat': 'yLat', 'StatusCode': 'StatusCode', });
lyr_Cemetery_0.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'TextEdit', 'id': 'TextEdit', 'section': 'TextEdit', 'block': 'TextEdit', 'boarder': 'TextEdit', 'label': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', });
lyr_Interred_1.set('fieldImages', {'Key': 'Hidden', 'Section': 'Hidden', 'MapLgnd': 'Hidden', 'BurialCnt': 'Hidden', 'NameI': 'TextEdit', 'Name': 'TextEdit', 'Deceased': 'TextEdit', 'Age': 'Range', 'xLong': 'Hidden', 'yLat': 'Hidden', 'StatusCode': 'Hidden', });
lyr_Cemetery_0.set('fieldLabels', {'fid': 'no label', 'qc_id': 'no label', 'id': 'no label', 'section': 'no label', 'block': 'no label', 'boarder': 'no label', 'label': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', });
lyr_Interred_1.set('fieldLabels', {'NameI': 'no label', 'Name': 'inline label - always visible', 'Deceased': 'inline label - always visible', 'Age': 'inline label - always visible', });
lyr_Interred_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});