(this["webpackJsonpoden-pretty-map"]=this["webpackJsonpoden-pretty-map"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),s=n(1),c=n(2),l=n(4),u=n(3),m=n(5),p=n.n(m),h=function(t){return console.log(t),"<h2>"+t.IdAdr+"</h2><p>"+t.EgenTypkod_typ+"</p><h5>Prim\xe4renergital: "+t.EgiPrimarenergital+" kWh/m\xb2</h5><p>Bygg\xe5r: "+t.EgenNybyggAr+"</p>"};n(13);p.a.accessToken="pk.eyJ1Ijoib2xla3NpaXBhc2ljaG55aSIsImEiOiJjaXRvZnN0Z2owMDBoMnRueTl3dDB1OXd3In0.Sog1Iz1Vc1RlMucteIEP_A";var d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={lng:18.063918,lat:59.332378,zoom:14.2},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=new p.a.Map({container:this.mapContainer,style:"mapbox://styles/oleksiipasichnyi/ck9lmg3q72w671iqop631a03x",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});e.on("move",(function(){t.setState({lng:e.getCenter().lng.toFixed(4),lat:e.getCenter().lat.toFixed(4),zoom:e.getZoom().toFixed(2)})})),e.on("click","masterfootprints-stockholm",(function(t){new p.a.Popup({closeButton:!1}).setLngLat(t.lngLat).setHTML(h(t.features[0].properties)).addTo(e)})),e.on("mouseenter","masterfootprints-stockholm",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","masterfootprints-stockholm",(function(){e.getCanvas().style.cursor=""}))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"sidebar"},o.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom:"," ",this.state.zoom)),o.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),n}(o.a.Component),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null))}}]),n}(o.a.Component);i.a.render(o.a.createElement(g,null),document.querySelector("#root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c9aaaa00.chunk.js.map