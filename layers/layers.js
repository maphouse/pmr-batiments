class MapLayer {

    constructor(container_id, height, width) {
        this.container_id = container_id;
        this.height = height;
        this.width = width;
        this.map = null;  
    }
    
    init_map(center = [0, 0], zoom = 2,style = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json') {
        document.getElementById(this.container_id).style.height = this.height;
        document.getElementById(this.container_id).style.width = this.width;

        this.map = new maplibregl.Map({
            container: this.container_id,  
            style: style,  
            center: center,  
            zoom: zoom  
        });
 
    }
 
    add_building_layer(source_id, layer_id, data) {
        
        //console.log(data)

        // add manual id for now
        data.features.forEach((feature, index) => {
            if (!feature.id) {
                feature.id = index;
            }
        });

        this.map.addSource(source_id, {
            type: 'geojson',
            data: data
        });
 
        this.map.addLayer({
            id: layer_id,
            type: 'fill',
            source: source_id,
            paint: {
                'fill-color': [
                    'step',
                    ['to-number', ['get', 'ANNEE_CONS']],
                    'rgba(122,4,3,1.0)',   
                    1866, 'rgba(217,56,7,1.0)',  
                    1880, 'rgba(254,153,44,1.0)',  
                    1900, 'rgba(211,232,53,1.0)',  
                    1918, 'rgba(100,253,106,1.0)',  
                    1935, 'rgba(27,208,213,1.0)',  
                    1944, 'rgba(71,119,239,1.0)',  
                    1960, 'rgba(193,193,193,1.0)',   
                    9999, 'rgba(255,255,255,.5)'   
                ],
                'fill-opacity': [
                    'case',
                    ['==', ['to-number', ['get', 'ANNEE_CONS']], 9999],
                    0.5,  
                    1.0  
                ],
                'fill-outline-color': 'rgba(35,35,35,1.0)'
            }
        }); 

        this.map.addLayer({
            id: `${layer_id}-outline`,
            type: 'line',
            source: source_id,
            paint: {
                'line-color': 'rgba(35,35,35,1.0)',
                'line-width': 0.5
            }
        });

        // hover method
        this.map.on('mouseenter', layer_id, () => {
            this.map.getCanvas().style.cursor = 'pointer';
        });
    
        this.map.on('mouseleave', layer_id, () => {
            this.map.getCanvas().style.cursor = '';
        });

        // click / popup method
        this.map.on('click', layer_id, (e) => {
            const coordinates = e.lngLat;
            const properties = e.features[0].properties;
            const popupContent = `
                <div>
                    <h3>Layer: Unité d'évaluation foncière</h3>
                    <hr>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        ${Object.entries(properties)
                            .map(
                                ([key, value]) => `
                                    <tr>
                                        <td style="padding: 4px 8px; "><strong>${key}</strong></td>
                                        <td style="padding: 4px 8px; ">${value}</td>
                                    </tr>
                                `
                            )
                            .join('')}
                    </table>
                </div>
            `;

            new maplibregl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .addTo(this.map);

            if (this.selected_polygon_id !== null) {
                this.map.setFeatureState(
                    { source: source_id, id: this.selected_polygon_id },
                    { selected: false }
                );
            }
            console.log(e.features[0].id)
            this.selected_polygon_id = e.features[0].id;
            this.map.setFeatureState(
                { source: source_id, id: this.selected_polygon_id },
                { selected: true }
            );
        });

        // add outline highlight layer with poly id
        this.map.addLayer({
            id: `${layer_id}-highlight`,
            type: 'line',
            source: source_id,
            paint: {
                'line-color': '#242424',
                'line-width': [
                    'case',
                    ['boolean', ['feature-state', 'selected'], false],
                     2,
                    0
                ]
            }
        });
    
    }
  
}