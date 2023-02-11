ol.proj.proj4.register(proj4);
ol.proj.get("").setExtent([166384.825676, 7220560.390528, 208650.856307, 7248958.424299]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_SolosLRe1_2 = new ol.format.GeoJSON();
var features_SolosLRe1_2 = format_SolosLRe1_2.readFeatures(json_SolosLRe1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_SolosLRe1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolosLRe1_2.addFeatures(features_SolosLRe1_2);
var lyr_SolosLRe1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolosLRe1_2, 
                style: style_SolosLRe1_2,
                interactive: true,
                title: '<img src="styles/legend/SolosLRe1_2.png" /> SolosLRe1'
            });
var format_SolosRe9_3 = new ol.format.GeoJSON();
var features_SolosRe9_3 = format_SolosRe9_3.readFeatures(json_SolosRe9_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_SolosRe9_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolosRe9_3.addFeatures(features_SolosRe9_3);
var lyr_SolosRe9_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolosRe9_3, 
                style: style_SolosRe9_3,
                interactive: true,
                title: '<img src="styles/legend/SolosRe9_3.png" /> SolosRe9'
            });
var format_SolosTRe2_4 = new ol.format.GeoJSON();
var features_SolosTRe2_4 = format_SolosTRe2_4.readFeatures(json_SolosTRe2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_SolosTRe2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolosTRe2_4.addFeatures(features_SolosTRe2_4);
var lyr_SolosTRe2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolosTRe2_4, 
                style: style_SolosTRe2_4,
                interactive: true,
                title: '<img src="styles/legend/SolosTRe2_4.png" /> SolosTRe2'
            });
var format_SOLOS_5 = new ol.format.GeoJSON();
var features_SOLOS_5 = format_SOLOS_5.readFeatures(json_SOLOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_SOLOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLOS_5.addFeatures(features_SOLOS_5);
var lyr_SOLOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOLOS_5, 
                style: style_SOLOS_5,
                interactive: true,
                title: '<img src="styles/legend/SOLOS_5.png" /> SOLOS'
            });
var format_RELEVODN6_6 = new ol.format.GeoJSON();
var features_RELEVODN6_6 = format_RELEVODN6_6.readFeatures(json_RELEVODN6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN6_6.addFeatures(features_RELEVODN6_6);
var lyr_RELEVODN6_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN6_6, 
                style: style_RELEVODN6_6,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN6_6.png" /> RELEVO DN6'
            });
var format_RELEVODN5_7 = new ol.format.GeoJSON();
var features_RELEVODN5_7 = format_RELEVODN5_7.readFeatures(json_RELEVODN5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN5_7.addFeatures(features_RELEVODN5_7);
var lyr_RELEVODN5_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN5_7, 
                style: style_RELEVODN5_7,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN5_7.png" /> RELEVO DN5'
            });
var format_RELEVODN4_8 = new ol.format.GeoJSON();
var features_RELEVODN4_8 = format_RELEVODN4_8.readFeatures(json_RELEVODN4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN4_8.addFeatures(features_RELEVODN4_8);
var lyr_RELEVODN4_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN4_8, 
                style: style_RELEVODN4_8,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN4_8.png" /> RELEVO DN4'
            });
var format_RELEVODN3_9 = new ol.format.GeoJSON();
var features_RELEVODN3_9 = format_RELEVODN3_9.readFeatures(json_RELEVODN3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN3_9.addFeatures(features_RELEVODN3_9);
var lyr_RELEVODN3_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN3_9, 
                style: style_RELEVODN3_9,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN3_9.png" /> RELEVO DN3'
            });
var format_RELEVODN2_10 = new ol.format.GeoJSON();
var features_RELEVODN2_10 = format_RELEVODN2_10.readFeatures(json_RELEVODN2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN2_10.addFeatures(features_RELEVODN2_10);
var lyr_RELEVODN2_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN2_10, 
                style: style_RELEVODN2_10,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN2_10.png" /> RELEVO DN2'
            });
var format_RELEVODN1_11 = new ol.format.GeoJSON();
var features_RELEVODN1_11 = format_RELEVODN1_11.readFeatures(json_RELEVODN1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RELEVODN1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELEVODN1_11.addFeatures(features_RELEVODN1_11);
var lyr_RELEVODN1_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RELEVODN1_11, 
                style: style_RELEVODN1_11,
                interactive: true,
                title: '<img src="styles/legend/RELEVODN1_11.png" /> RELEVO DN1'
            });
var format_GEOLOGIA_12 = new ol.format.GeoJSON();
var features_GEOLOGIA_12 = format_GEOLOGIA_12.readFeatures(json_GEOLOGIA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_GEOLOGIA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIA_12.addFeatures(features_GEOLOGIA_12);
var lyr_GEOLOGIA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGIA_12, 
                style: style_GEOLOGIA_12,
                interactive: true,
                title: '<img src="styles/legend/GEOLOGIA_12.png" /> GEOLOGIA'
            });
var format_AGRCOLA_13 = new ol.format.GeoJSON();
var features_AGRCOLA_13 = format_AGRCOLA_13.readFeatures(json_AGRCOLA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_AGRCOLA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRCOLA_13.addFeatures(features_AGRCOLA_13);
var lyr_AGRCOLA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRCOLA_13, 
                style: style_AGRCOLA_13,
                interactive: true,
                title: '<img src="styles/legend/AGRCOLA_13.png" /> AGRÍCOLA'
            });
var format_REAFLORESTAL_14 = new ol.format.GeoJSON();
var features_REAFLORESTAL_14 = format_REAFLORESTAL_14.readFeatures(json_REAFLORESTAL_14, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_REAFLORESTAL_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REAFLORESTAL_14.addFeatures(features_REAFLORESTAL_14);
var lyr_REAFLORESTAL_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REAFLORESTAL_14, 
                style: style_REAFLORESTAL_14,
                interactive: true,
                title: '<img src="styles/legend/REAFLORESTAL_14.png" /> ÁREA FLORESTAL'
            });
var format_PASTAGEM_15 = new ol.format.GeoJSON();
var features_PASTAGEM_15 = format_PASTAGEM_15.readFeatures(json_PASTAGEM_15, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_PASTAGEM_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASTAGEM_15.addFeatures(features_PASTAGEM_15);
var lyr_PASTAGEM_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PASTAGEM_15, 
                style: style_PASTAGEM_15,
                interactive: true,
                title: '<img src="styles/legend/PASTAGEM_15.png" /> PASTAGEM'
            });
var format_CONFLITOCAR_16 = new ol.format.GeoJSON();
var features_CONFLITOCAR_16 = format_CONFLITOCAR_16.readFeatures(json_CONFLITOCAR_16, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_CONFLITOCAR_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONFLITOCAR_16.addFeatures(features_CONFLITOCAR_16);
var lyr_CONFLITOCAR_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONFLITOCAR_16, 
                style: style_CONFLITOCAR_16,
                interactive: true,
                title: '<img src="styles/legend/CONFLITOCAR_16.png" /> CONFLITO CAR'
            });
var format_AVIARIOSPOCILGAS_17 = new ol.format.GeoJSON();
var features_AVIARIOSPOCILGAS_17 = format_AVIARIOSPOCILGAS_17.readFeatures(json_AVIARIOSPOCILGAS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_AVIARIOSPOCILGAS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AVIARIOSPOCILGAS_17.addFeatures(features_AVIARIOSPOCILGAS_17);
var lyr_AVIARIOSPOCILGAS_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVIARIOSPOCILGAS_17, 
                style: style_AVIARIOSPOCILGAS_17,
                interactive: true,
                title: '<img src="styles/legend/AVIARIOSPOCILGAS_17.png" /> AVIARIOS & POCILGAS'
            });
var format_AUDES_18 = new ol.format.GeoJSON();
var features_AUDES_18 = format_AUDES_18.readFeatures(json_AUDES_18, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_AUDES_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDES_18.addFeatures(features_AUDES_18);
var lyr_AUDES_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDES_18, 
                style: style_AUDES_18,
                interactive: true,
                title: '<img src="styles/legend/AUDES_18.png" /> AÇUDES'
            });
var format_URBANO_19 = new ol.format.GeoJSON();
var features_URBANO_19 = format_URBANO_19.readFeatures(json_URBANO_19, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_URBANO_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_URBANO_19.addFeatures(features_URBANO_19);
var lyr_URBANO_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_URBANO_19, 
                style: style_URBANO_19,
                interactive: true,
                title: '<img src="styles/legend/URBANO_19.png" /> URBANO'
            });
var format_HIDROGRAFIA_20 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_20 = format_HIDROGRAFIA_20.readFeatures(json_HIDROGRAFIA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_HIDROGRAFIA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_20.addFeatures(features_HIDROGRAFIA_20);
var lyr_HIDROGRAFIA_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HIDROGRAFIA_20, 
                style: style_HIDROGRAFIA_20,
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_20.png" /> HIDROGRAFIA'
            });
var format_ESTRADAS_21 = new ol.format.GeoJSON();
var features_ESTRADAS_21 = format_ESTRADAS_21.readFeatures(json_ESTRADAS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_ESTRADAS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTRADAS_21.addFeatures(features_ESTRADAS_21);
var lyr_ESTRADAS_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTRADAS_21, 
                style: style_ESTRADAS_21,
                interactive: true,
                title: '<img src="styles/legend/ESTRADAS_21.png" /> ESTRADAS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(false);lyr_SolosLRe1_2.setVisible(true);lyr_SolosRe9_3.setVisible(true);lyr_SolosTRe2_4.setVisible(true);lyr_SOLOS_5.setVisible(false);lyr_RELEVODN6_6.setVisible(false);lyr_RELEVODN5_7.setVisible(false);lyr_RELEVODN4_8.setVisible(false);lyr_RELEVODN3_9.setVisible(false);lyr_RELEVODN2_10.setVisible(false);lyr_RELEVODN1_11.setVisible(false);lyr_GEOLOGIA_12.setVisible(false);lyr_AGRCOLA_13.setVisible(false);lyr_REAFLORESTAL_14.setVisible(false);lyr_PASTAGEM_15.setVisible(false);lyr_CONFLITOCAR_16.setVisible(false);lyr_AVIARIOSPOCILGAS_17.setVisible(false);lyr_AUDES_18.setVisible(false);lyr_URBANO_19.setVisible(false);lyr_HIDROGRAFIA_20.setVisible(false);lyr_ESTRADAS_21.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_SolosLRe1_2,lyr_SolosRe9_3,lyr_SolosTRe2_4,lyr_SOLOS_5,lyr_RELEVODN6_6,lyr_RELEVODN5_7,lyr_RELEVODN4_8,lyr_RELEVODN3_9,lyr_RELEVODN2_10,lyr_RELEVODN1_11,lyr_GEOLOGIA_12,lyr_AGRCOLA_13,lyr_REAFLORESTAL_14,lyr_PASTAGEM_15,lyr_CONFLITOCAR_16,lyr_AVIARIOSPOCILGAS_17,lyr_AUDES_18,lyr_URBANO_19,lyr_HIDROGRAFIA_20,lyr_ESTRADAS_21];
lyr_SolosLRe1_2.set('fieldAliases', {'UMAP': 'UMAP', 'LEGENDA_81': 'LEGENDA_81', 'LEGENDA_99': 'LEGENDA_99', 'GGRUPO_99': 'GGRUPO_99', 'CLASSE_99': 'CLASSE_99', 'AREA_HA': 'AREA_HA', 'TEXTURA': 'TEXTURA', 'RELEVO': 'RELEVO', 'CLIMA': 'CLIMA', 'FERT_CORRE': 'FERT_CORRE', 'PRAT_CONS': 'PRAT_CONS', 'VEGETACAO': 'VEGETACAO', 'MECANIZACA': 'MECANIZACA', 'PRIM_NIVEL': 'PRIM_NIVEL', });
lyr_SolosRe9_3.set('fieldAliases', {'UMAP': 'UMAP', 'LEGENDA_81': 'LEGENDA_81', 'LEGENDA_99': 'LEGENDA_99', 'GGRUPO_99': 'GGRUPO_99', 'CLASSE_99': 'CLASSE_99', 'AREA_HA': 'AREA_HA', 'TEXTURA': 'TEXTURA', 'RELEVO': 'RELEVO', 'CLIMA': 'CLIMA', 'FERT_CORRE': 'FERT_CORRE', 'PRAT_CONS': 'PRAT_CONS', 'VEGETACAO': 'VEGETACAO', 'MECANIZACA': 'MECANIZACA', 'PRIM_NIVEL': 'PRIM_NIVEL', });
lyr_SolosTRe2_4.set('fieldAliases', {'UMAP': 'UMAP', 'LEGENDA_81': 'LEGENDA_81', 'LEGENDA_99': 'LEGENDA_99', 'GGRUPO_99': 'GGRUPO_99', 'CLASSE_99': 'CLASSE_99', 'AREA_HA': 'AREA_HA', 'TEXTURA': 'TEXTURA', 'RELEVO': 'RELEVO', 'CLIMA': 'CLIMA', 'FERT_CORRE': 'FERT_CORRE', 'PRAT_CONS': 'PRAT_CONS', 'VEGETACAO': 'VEGETACAO', 'MECANIZACA': 'MECANIZACA', 'PRIM_NIVEL': 'PRIM_NIVEL', });
lyr_SOLOS_5.set('fieldAliases', {'UMAP': 'UMAP', 'LEGENDA_81': 'LEGENDA_81', 'LEGENDA_99': 'LEGENDA_99', 'GGRUPO_99': 'GGRUPO_99', 'CLASSE_99': 'CLASSE_99', 'AREA_HA': 'AREA_HA', 'TEXTURA': 'TEXTURA', 'RELEVO': 'RELEVO', 'CLIMA': 'CLIMA', 'FERT_CORRE': 'FERT_CORRE', 'PRAT_CONS': 'PRAT_CONS', 'VEGETACAO': 'VEGETACAO', 'MECANIZACA': 'MECANIZACA', 'PRIM_NIVEL': 'PRIM_NIVEL', });
lyr_RELEVODN6_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RELEVODN5_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RELEVODN4_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RELEVODN3_9.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RELEVODN2_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RELEVODN1_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_GEOLOGIA_12.set('fieldAliases', {'COD_UNI_ES': 'COD_UNI_ES', 'SIGLA_UNID': 'SIGLA_UNID', 'SIGLAS_ANT': 'SIGLAS_ANT', 'NOME_UNIDA': 'NOME_UNIDA', 'HIERARQUIA': 'HIERARQUIA', 'IDADE_MAX': 'IDADE_MAX', 'ERRO_MAX': 'ERRO_MAX', 'EON_IDAD_M': 'EON_IDAD_M', 'ERA_MAXIMA': 'ERA_MAXIMA', 'PERIODO_MA': 'PERIODO_MA', 'EPOCA_MAX': 'EPOCA_MAX', 'SISTEMA_GE': 'SISTEMA_GE', 'METODO_GEO': 'METODO_GEO', 'QLDE_INFER': 'QLDE_INFER', 'IDADE_MIN': 'IDADE_MIN', 'ERRO_MIN': 'ERRO_MIN', 'EON_IDAD_1': 'EON_IDAD_1', 'ERA_MINIMA': 'ERA_MINIMA', 'PERIODO_MI': 'PERIODO_MI', 'EPOCA_MIN': 'EPOCA_MIN', 'SISTEMA__1': 'SISTEMA__1', 'METODO_G_1': 'METODO_G_1', 'QLDE_INF_1': 'QLDE_INF_1', 'AMBSEDIMEN': 'AMBSEDIMEN', 'SISTSEDIME': 'SISTSEDIME', 'TIPO_DEPOS': 'TIPO_DEPOS', 'ASSOC_MAGM': 'ASSOC_MAGM', 'NIVEL_CRUS': 'NIVEL_CRUS', 'TEXTURA_IG': 'TEXTURA_IG', 'FONTE_MAGM': 'FONTE_MAGM', 'MORFOLOGIA': 'MORFOLOGIA', 'AMBIENTE_T': 'AMBIENTE_T', 'METAMORFIS': 'METAMORFIS', 'METODO_G_2': 'METODO_G_2', 'TEMP_PICO': 'TEMP_PICO', 'ERRO_TEMP_': 'ERRO_TEMP_', 'PRESSAO_PI': 'PRESSAO_PI', 'ERRO_PRESS': 'ERRO_PRESS', 'TIPO_BARIC': 'TIPO_BARIC', 'TRAJETORIA': 'TRAJETORIA', 'LITOTIPO1': 'LITOTIPO1', 'LITOTIPO2': 'LITOTIPO2', 'CLASSE_ROC': 'CLASSE_ROC', 'CLASSE_R_1': 'CLASSE_R_1', 'BB_SUBCLAS': 'BB_SUBCLAS', 'BB_SUBCL_1': 'BB_SUBCL_1', 'areaHA': 'areaHA', });
lyr_AGRCOLA_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_REAFLORESTAL_14.set('fieldAliases', {'DN': 'DN', });
lyr_PASTAGEM_15.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'tevolv2016': 'tevolv2016', 'tevolv2014': 'tevolv2014', 'tevolv2015': 'tevolv2015', 'tevolv2017': 'tevolv2017', });
lyr_CONFLITOCAR_16.set('fieldAliases', {'IDF': 'IDF', 'NOM_TEMA': 'NOM_TEMA', 'NUM_AREA': 'NUM_AREA', 'areakm2': 'areakm2', });
lyr_AVIARIOSPOCILGAS_17.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_AUDES_18.set('fieldAliases', {'id': 'id', });
lyr_URBANO_19.set('fieldAliases', {'id': 'id', 'area': 'area', 'areakm': 'areakm', });
lyr_HIDROGRAFIA_20.set('fieldAliases', {'noriocomp': 'noriocomp', });
lyr_ESTRADAS_21.set('fieldAliases', {'id': 'id', 'compriment': 'compriment', });
lyr_SolosLRe1_2.set('fieldImages', {'UMAP': 'TextEdit', 'LEGENDA_81': 'TextEdit', 'LEGENDA_99': 'TextEdit', 'GGRUPO_99': 'TextEdit', 'CLASSE_99': 'TextEdit', 'AREA_HA': 'TextEdit', 'TEXTURA': 'TextEdit', 'RELEVO': 'TextEdit', 'CLIMA': 'TextEdit', 'FERT_CORRE': 'TextEdit', 'PRAT_CONS': 'TextEdit', 'VEGETACAO': 'TextEdit', 'MECANIZACA': 'TextEdit', 'PRIM_NIVEL': 'TextEdit', });
lyr_SolosRe9_3.set('fieldImages', {'UMAP': 'TextEdit', 'LEGENDA_81': 'TextEdit', 'LEGENDA_99': 'TextEdit', 'GGRUPO_99': 'TextEdit', 'CLASSE_99': 'TextEdit', 'AREA_HA': 'TextEdit', 'TEXTURA': 'TextEdit', 'RELEVO': 'TextEdit', 'CLIMA': 'TextEdit', 'FERT_CORRE': 'TextEdit', 'PRAT_CONS': 'TextEdit', 'VEGETACAO': 'TextEdit', 'MECANIZACA': 'TextEdit', 'PRIM_NIVEL': 'TextEdit', });
lyr_SolosTRe2_4.set('fieldImages', {'UMAP': 'TextEdit', 'LEGENDA_81': 'TextEdit', 'LEGENDA_99': 'TextEdit', 'GGRUPO_99': 'TextEdit', 'CLASSE_99': 'TextEdit', 'AREA_HA': 'TextEdit', 'TEXTURA': 'TextEdit', 'RELEVO': 'TextEdit', 'CLIMA': 'TextEdit', 'FERT_CORRE': 'TextEdit', 'PRAT_CONS': 'TextEdit', 'VEGETACAO': 'TextEdit', 'MECANIZACA': 'TextEdit', 'PRIM_NIVEL': 'TextEdit', });
lyr_SOLOS_5.set('fieldImages', {'UMAP': 'TextEdit', 'LEGENDA_81': 'TextEdit', 'LEGENDA_99': 'TextEdit', 'GGRUPO_99': 'TextEdit', 'CLASSE_99': 'TextEdit', 'AREA_HA': 'TextEdit', 'TEXTURA': 'TextEdit', 'RELEVO': 'TextEdit', 'CLIMA': 'TextEdit', 'FERT_CORRE': 'TextEdit', 'PRAT_CONS': 'TextEdit', 'VEGETACAO': 'TextEdit', 'MECANIZACA': 'TextEdit', 'PRIM_NIVEL': 'TextEdit', });
lyr_RELEVODN6_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RELEVODN5_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RELEVODN4_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RELEVODN3_9.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RELEVODN2_10.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RELEVODN1_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_GEOLOGIA_12.set('fieldImages', {'COD_UNI_ES': 'TextEdit', 'SIGLA_UNID': 'TextEdit', 'SIGLAS_ANT': 'TextEdit', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'TextEdit', 'IDADE_MAX': 'TextEdit', 'ERRO_MAX': 'TextEdit', 'EON_IDAD_M': 'TextEdit', 'ERA_MAXIMA': 'TextEdit', 'PERIODO_MA': 'TextEdit', 'EPOCA_MAX': 'TextEdit', 'SISTEMA_GE': 'TextEdit', 'METODO_GEO': 'TextEdit', 'QLDE_INFER': 'TextEdit', 'IDADE_MIN': 'TextEdit', 'ERRO_MIN': 'TextEdit', 'EON_IDAD_1': 'TextEdit', 'ERA_MINIMA': 'TextEdit', 'PERIODO_MI': 'TextEdit', 'EPOCA_MIN': 'TextEdit', 'SISTEMA__1': 'TextEdit', 'METODO_G_1': 'TextEdit', 'QLDE_INF_1': 'TextEdit', 'AMBSEDIMEN': 'TextEdit', 'SISTSEDIME': 'TextEdit', 'TIPO_DEPOS': 'TextEdit', 'ASSOC_MAGM': 'TextEdit', 'NIVEL_CRUS': 'TextEdit', 'TEXTURA_IG': 'TextEdit', 'FONTE_MAGM': 'TextEdit', 'MORFOLOGIA': 'TextEdit', 'AMBIENTE_T': 'TextEdit', 'METAMORFIS': 'TextEdit', 'METODO_G_2': 'TextEdit', 'TEMP_PICO': 'TextEdit', 'ERRO_TEMP_': 'TextEdit', 'PRESSAO_PI': 'TextEdit', 'ERRO_PRESS': 'TextEdit', 'TIPO_BARIC': 'TextEdit', 'TRAJETORIA': 'TextEdit', 'LITOTIPO1': 'TextEdit', 'LITOTIPO2': 'TextEdit', 'CLASSE_ROC': 'TextEdit', 'CLASSE_R_1': 'TextEdit', 'BB_SUBCLAS': 'TextEdit', 'BB_SUBCL_1': 'TextEdit', 'areaHA': 'TextEdit', });
lyr_AGRCOLA_13.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_REAFLORESTAL_14.set('fieldImages', {'DN': 'Range', });
lyr_PASTAGEM_15.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'tevolv2016': 'TextEdit', 'tevolv2014': 'TextEdit', 'tevolv2015': 'TextEdit', 'tevolv2017': 'TextEdit', });
lyr_CONFLITOCAR_16.set('fieldImages', {'IDF': 'TextEdit', 'NOM_TEMA': 'TextEdit', 'NUM_AREA': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_AVIARIOSPOCILGAS_17.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_AUDES_18.set('fieldImages', {'id': 'TextEdit', });
lyr_URBANO_19.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'areakm': 'TextEdit', });
lyr_HIDROGRAFIA_20.set('fieldImages', {'noriocomp': 'TextEdit', });
lyr_ESTRADAS_21.set('fieldImages', {'id': 'TextEdit', 'compriment': 'TextEdit', });
lyr_SolosLRe1_2.set('fieldLabels', {'UMAP': 'no label', 'LEGENDA_81': 'no label', 'LEGENDA_99': 'no label', 'GGRUPO_99': 'no label', 'CLASSE_99': 'no label', 'AREA_HA': 'no label', 'TEXTURA': 'no label', 'RELEVO': 'no label', 'CLIMA': 'no label', 'FERT_CORRE': 'no label', 'PRAT_CONS': 'no label', 'VEGETACAO': 'no label', 'MECANIZACA': 'no label', 'PRIM_NIVEL': 'no label', });
lyr_SolosRe9_3.set('fieldLabels', {'UMAP': 'no label', 'LEGENDA_81': 'no label', 'LEGENDA_99': 'no label', 'GGRUPO_99': 'no label', 'CLASSE_99': 'no label', 'AREA_HA': 'no label', 'TEXTURA': 'no label', 'RELEVO': 'no label', 'CLIMA': 'no label', 'FERT_CORRE': 'no label', 'PRAT_CONS': 'no label', 'VEGETACAO': 'no label', 'MECANIZACA': 'no label', 'PRIM_NIVEL': 'no label', });
lyr_SolosTRe2_4.set('fieldLabels', {'UMAP': 'no label', 'LEGENDA_81': 'no label', 'LEGENDA_99': 'no label', 'GGRUPO_99': 'no label', 'CLASSE_99': 'no label', 'AREA_HA': 'no label', 'TEXTURA': 'no label', 'RELEVO': 'no label', 'CLIMA': 'no label', 'FERT_CORRE': 'no label', 'PRAT_CONS': 'no label', 'VEGETACAO': 'no label', 'MECANIZACA': 'no label', 'PRIM_NIVEL': 'no label', });
lyr_SOLOS_5.set('fieldLabels', {'UMAP': 'no label', 'LEGENDA_81': 'no label', 'LEGENDA_99': 'no label', 'GGRUPO_99': 'no label', 'CLASSE_99': 'no label', 'AREA_HA': 'no label', 'TEXTURA': 'no label', 'RELEVO': 'no label', 'CLIMA': 'no label', 'FERT_CORRE': 'no label', 'PRAT_CONS': 'no label', 'VEGETACAO': 'no label', 'MECANIZACA': 'no label', 'PRIM_NIVEL': 'no label', });
lyr_RELEVODN6_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RELEVODN5_7.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RELEVODN4_8.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RELEVODN3_9.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RELEVODN2_10.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RELEVODN1_11.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_GEOLOGIA_12.set('fieldLabels', {'COD_UNI_ES': 'no label', 'SIGLA_UNID': 'no label', 'SIGLAS_ANT': 'no label', 'NOME_UNIDA': 'no label', 'HIERARQUIA': 'no label', 'IDADE_MAX': 'no label', 'ERRO_MAX': 'no label', 'EON_IDAD_M': 'no label', 'ERA_MAXIMA': 'no label', 'PERIODO_MA': 'no label', 'EPOCA_MAX': 'no label', 'SISTEMA_GE': 'no label', 'METODO_GEO': 'no label', 'QLDE_INFER': 'no label', 'IDADE_MIN': 'no label', 'ERRO_MIN': 'no label', 'EON_IDAD_1': 'no label', 'ERA_MINIMA': 'no label', 'PERIODO_MI': 'no label', 'EPOCA_MIN': 'no label', 'SISTEMA__1': 'no label', 'METODO_G_1': 'no label', 'QLDE_INF_1': 'no label', 'AMBSEDIMEN': 'no label', 'SISTSEDIME': 'no label', 'TIPO_DEPOS': 'no label', 'ASSOC_MAGM': 'no label', 'NIVEL_CRUS': 'no label', 'TEXTURA_IG': 'no label', 'FONTE_MAGM': 'no label', 'MORFOLOGIA': 'no label', 'AMBIENTE_T': 'no label', 'METAMORFIS': 'no label', 'METODO_G_2': 'no label', 'TEMP_PICO': 'no label', 'ERRO_TEMP_': 'no label', 'PRESSAO_PI': 'no label', 'ERRO_PRESS': 'no label', 'TIPO_BARIC': 'no label', 'TRAJETORIA': 'no label', 'LITOTIPO1': 'no label', 'LITOTIPO2': 'no label', 'CLASSE_ROC': 'no label', 'CLASSE_R_1': 'no label', 'BB_SUBCLAS': 'no label', 'BB_SUBCL_1': 'no label', 'areaHA': 'no label', });
lyr_AGRCOLA_13.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_REAFLORESTAL_14.set('fieldLabels', {'DN': 'no label', });
lyr_PASTAGEM_15.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', 'tevolv2016': 'no label', 'tevolv2014': 'no label', 'tevolv2015': 'no label', 'tevolv2017': 'no label', });
lyr_CONFLITOCAR_16.set('fieldLabels', {'IDF': 'no label', 'NOM_TEMA': 'no label', 'NUM_AREA': 'no label', 'areakm2': 'no label', });
lyr_AVIARIOSPOCILGAS_17.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_AUDES_18.set('fieldLabels', {'id': 'no label', });
lyr_URBANO_19.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'areakm': 'no label', });
lyr_HIDROGRAFIA_20.set('fieldLabels', {'noriocomp': 'no label', });
lyr_ESTRADAS_21.set('fieldLabels', {'id': 'no label', 'compriment': 'no label', });
lyr_ESTRADAS_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});