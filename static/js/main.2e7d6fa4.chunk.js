(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:3,clicked:!1,photo:"assets/daenerys.png",name:"Danny"},{id:12,clicked:!1,photo:"assets/jon.png",name:"Snow"},{id:11,clicked:!1,photo:"assets/tyrion.png",name:"Tyrion"},{id:15,clicked:!1,photo:"assets/arya.png",name:"Arya"},{id:5,clicked:!1,photo:"assets/cersei.png",name:"Cersei"},{id:10,clicked:!1,photo:"assets/sansa.png",name:"Sansa"},{id:4,clicked:!1,photo:"assets/bran.png",name:"Bran"},{id:1,clicked:!1,photo:"assets/yara.png",name:"Yara"},{id:8,clicked:!1,photo:"assets/varys.png",name:"Varys"},{id:9,clicked:!1,photo:"assets/loras.png",name:"Loras"},{id:6,clicked:!1,photo:"assets/renly.png",name:"Renly"},{id:13,clicked:!1,photo:"assets/drogo.png",name:"Drogo"},{id:14,clicked:!1,photo:"assets/hodor.png",name:"Hodor"},{id:7,clicked:!1,photo:"assets/margaery.png",name:"Margaery"},{id:2,clicked:!1,photo:"assets/brienne.png",name:"Brienne"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),s=(a(15),a(4)),i=a(5),l=a(7),d=a(6),h=a(8),m=(a(16),a(1)),p=(a(17),function(e){return c.a.createElement("div",{className:"body-card",onClick:function(){return e.clickedPicture(e.id)}},c.a.createElement("img",{className:"player-pics",alt:e.name,src:e.photo}))}),u=(a(18),function(e){return c.a.createElement("div",{className:"score-container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h2",null,"Score: ",e.score),c.a.createElement("h2",null,"High Score: ",e.topScore)),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h5",{className:"description"},"Click on the Game of Thrones character only once!")))}),k=(a(19),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"header-container"},c.a.createElement("img",{src:"./assets/thrones.png",alt:"nebula"})))}),f=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={characterChoice:m,score:0,topScore:0,showAlert:0,showSuccess:0,clickedPicture:[]},a.clickedPicture=function(e){var t=a.state.clickedPicture,n=a.state.score,c=a.state.topScore;a.setState({showAlert:0}),-1===t.indexOf(e)?(t.push(e),a.handleIncrement(),a.makeShuffle()):12===a.state.score?a.setState({showSuccess:1,score:0,clickedPicture:[]}):(a.setState({score:0,clickedPicture:[]}),a.setState({showAlert:1})),n>c&&a.setState({topScore:n})},a.handleIncrement=function(){a.setState({score:a.state.score+1})},a.makeShuffle=function(){a.setState({characterChoice:f(m)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement("div",{className:"alert alert-danger",style:{opacity:this.state.showAlert}},"This character has already been selected. Please try another."),c.a.createElement("div",{className:"alert alert-success",style:{opacity:this.state.showSuccess}},"Great Memory."),c.a.createElement(u,{title:"Game of Thrones Clicky Game",score:this.state.score,topScore:this.state.topScore}),c.a.createElement("div",{className:"player-container"},this.state.characterChoice.map(function(t){return c.a.createElement(p,{key:t.id,id:t.id,name:t.name,photo:t.photo,clickedPicture:e.clickedPicture})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2e7d6fa4.chunk.js.map