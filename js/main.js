//step 1 create map
function createMap(){
    //create the map
    const map = L.map('map').setView([46, -87], 8);
    
    //Initializae API key
    const apiKey= "AAPKe3ed074605b74de0ba2d1e373dcc65bbcvEnFg_vWzBUO-ysOviHMlflp1cn4mNFShcpno5Good4EFgVfdiVJY52BX607Msp";
  
    //add OSM base tilelayer
    const basemap= L.tileLayer.provider('Stadia.StamenTerrain').addTo(map);
  
      
    // URL of the feature layer
    var featureLayerUrl = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Parcel_Viewer_WFL1/FeatureServer/6";
  
    // Create the feature layer
    var featureLayer = L.esri.featureLayer({
      url: featureLayerUrl,
      apiKey: apiKey // Include the API key if required
    });
  
    // Add the feature layer to the map
    featureLayer.addTo(map);
  
        var township = L.esri
        .featureLayer({
          url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Parcel_Viewer_WFL1/FeatureServer/6"
        });
  
        township.addTo(map);
  
        var county = L.esri
          .featureLayer({
            url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Parcel_Viewer_WFL1/FeatureServer/1"
          });
  
        county.addTo(map);
  
        var zipCode = L.esri
          .featureLayer({
            url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Parcel_Viewer_WFL1/FeatureServer/2"
          });
          zipCode.addTo(map);
  
      var parcelLayer = L.esri
          .featureLayer({
            url: "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Parcel_Viewer_WFL1/FeatureServer/3"
          });
          parcelLayer.addTo(map);
  
  };
  
  
  document.addEventListener('DOMContentLoaded',createMap)