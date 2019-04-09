import { Component,OnInit } from '@angular/core';
declare let L;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    const map=L.map('map').setView([38.5, -96],4);
    map.createPane('basePane');
    map.createPane('labelPane');
    map.createPane('dataPane');
    map.createPane('overlayPane');
    map.createPane('markerPane');
    map.createPane('tooltipPane');
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '',pane:'basePane',maxZoom:19
        }).addTo(map);
    

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',{
          attribution:'',pane:'labelPane',maxZoom:19
    }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',{
          attribution:'',pane:'markerPane',maxZoom:19
    }).addTo(map);
   
    /*let geojsonFeature = {
      "type": "Feature",
      "properties": {
          "name": "Coors Field",
          "amenity": "Baseball Stadium",
          "popupContent": "This is where the Rockies play!",
          "iconUrl":'src/assets/leaflet/images/marker-icon-2x.png'
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]

      }
  };
    L.geoJSON(geojsonFeature).addTo(map);*/
    let pointsArray=[
      {lat:27.02,lng:74.21},
      {lat:15.29,lng:74.12},
      {lat:22.25,lng:71.19},
      {lat:25.09,lng:85.31},
      {lat:15.31,lng:75.71},
    ];
    var greenIcon = L.icon({
      iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
      
  
      iconSize:     [50, 50], // size of the icon
      
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  let latLng=[];
    for(let points in pointsArray)
    {
      
       /* let circle=L.circle([pointsArray[points].lat,pointsArray[points].lng],{
          color:"red",
          fillColor:"#f03",
          fillOpacity:0.5,
          radius:1500
        }).addTo(map);*/
        
        L.marker([pointsArray[points].lat,pointsArray[points].lng],{icon:greenIcon}).addTo(map);
       
        //polyline array
        

    }
    let polygon=L.polygon([[15.91, 79.7400],
      [14.9, 78.9],
      [15.31, 79.31],
      [15.56,79.80]],{
        color:'blue'
      }).addTo(map);

      let pointA = new L.LatLng(28.635308, 77.22496);
      let pointB = new L.LatLng(28.984461, 77.70641);
      let pointC=new L.LatLng(30.12,76.45);
      let pointD=new L.LatLng(31.65,77.58);
      let pointList = [pointA, pointB,pointC,pointD];
      
      let firstpolyline = new L.Polyline(pointList, {
          color: 'red',
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1
      });
      firstpolyline.addTo(map);
  }
 
 
}
