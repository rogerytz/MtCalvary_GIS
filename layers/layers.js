ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-73.989977, 41.941659, -73.984410, 41.944978]);
var wms_layers = [];

var format_Sections_0 = new ol.format.GeoJSON();
var features_Sections_0 = format_Sections_0.readFeatures(json_Sections_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sections_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sections_0.addFeatures(features_Sections_0);
var lyr_Sections_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sections_0, 
                style: style_Sections_0,
                interactive: true,
                title: '<img src="styles/legend/Sections_0.png" /> Sections'
            });
var format_Deceased_1 = new ol.format.GeoJSON();
var features_Deceased_1 = format_Deceased_1.readFeatures(json_Deceased_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Deceased_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deceased_1.addFeatures(features_Deceased_1);
var lyr_Deceased_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deceased_1, 
                style: style_Deceased_1,
                interactive: true,
                title: '<img src="styles/legend/Deceased_1.png" /> Deceased'
            });

lyr_Sections_0.setVisible(true);lyr_Deceased_1.setVisible(true);
var layersList = [lyr_Sections_0,lyr_Deceased_1];
lyr_Sections_0.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'section': 'section', 'block': 'block', 'boarder': 'boarder', 'label': 'label', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_Deceased_1.set('fieldAliases', {'Key': 'Key', 'Section': 'Section', 'Sequence': 'Sequence', 'BurialCnt': 'BurialCnt', 'NameI': 'NameI', 'Name': 'Name', 'Deceased': 'Deceased', 'Age': 'Age', 'xLong': 'xLong', 'yLat': 'yLat', 'StatusCode': 'StatusCode', 'Space2': 'Space2', 'NameI2': 'NameI2', 'Name2': 'Name2', 'Deceased2': 'Deceased2', 'Age2': 'Age2', 'Space3': 'Space3', 'NameI3': 'NameI3', 'Name3': 'Name3', 'Deceased3': 'Deceased3', 'Age3': 'Age3', });
lyr_Sections_0.set('fieldImages', {'qc_id': 'Hidden', 'fid': 'Hidden', 'id': 'Hidden', 'section': 'Hidden', 'block': 'Hidden', 'boarder': 'Hidden', 'label': 'TextEdit', 'auxiliary_': 'Hidden', 'auxiliar_1': 'Hidden', 'auxiliar_2': 'Hidden', });
lyr_Deceased_1.set('fieldImages', {'Key': 'Hidden', 'Section': 'Hidden', 'Sequence': 'Hidden', 'BurialCnt': 'Hidden', 'NameI': 'TextEdit', 'Name': 'TextEdit', 'Deceased': 'TextEdit', 'Age': 'Range', 'xLong': 'Hidden', 'yLat': 'Hidden', 'StatusCode': 'Hidden', 'Space2': 'TextEdit', 'NameI2': 'Hidden', 'Name2': 'TextEdit', 'Deceased2': 'TextEdit', 'Age2': 'Range', 'Space3': 'TextEdit', 'NameI3': 'Hidden', 'Name3': 'TextEdit', 'Deceased3': 'TextEdit', 'Age3': 'Range', });
lyr_Sections_0.set('fieldLabels', {'label': 'no label', });
lyr_Deceased_1.set('fieldLabels', {'NameI': 'no label', 'Name': 'inline label', 'Deceased': 'inline label', 'Age': 'inline label', 'Space2': 'no label', 'Name2': 'no label', 'Deceased2': 'no label', 'Age2': 'no label', 'Space3': 'no label', 'Name3': 'no label', 'Deceased3': 'no label', 'Age3': 'no label', });
lyr_Deceased_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});