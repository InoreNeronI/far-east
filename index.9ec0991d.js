let i,t,o=window.innerWidth,n=window.innerHeight;const e=document.querySelector(".canvas-background");function a(i){let t=0;for(;0===t||90===t||180===t||360===t;)t=Math.floor(360*Math.random());let o=180*t/Math.PI;i.directionX=Math.sin(o)*i.speed,i.directionY=Math.cos(o)*i.speed}function r(){o=window.innerWidth,n=window.innerHeight,e.width=o,e.height=n}e&&e.getContext&&((i=e.getContext("2d")).globalCompositeOperation="destination-over",window.addEventListener("resize",r,!1),r(),function(){t=[];for(let i=0;i<100;i++){let o=5+Math.random()*(window.innerWidth-5),n=5+Math.random()*(window.innerHeight-5),e=-2+4*Math.random(),a=-2+4*Math.random();t.push({position:{x:o,y:n},size:10,directionX:e,directionY:a,speed:2,targetX:o,targetY:n,depth:0,index:i,fillColor:`#${(60159*Math.random()+16711680|0).toString(16)}`})}}(),function e(){i.fillStyle="rgba(0,0,0,0.2)",i.fillRect(0,0,i.canvas.width,i.canvas.height);let r=0,s=0;for(let e=0;e<t.length;e++){let s=t[e],d={x:s.position.x,y:s.position.y};(s.position.x<=s.size/2||s.position.x>=o-5)&&(s.directionX*=-1),(s.position.y<=s.size/2||s.position.y>=n-5)&&(s.directionY*=-1);for(let i=0;i<t.length;i++){let o=t[i];o.index!==s.index&&(r=10,Math.sqrt(Math.abs(o.position.x-s.position.x)**2+Math.abs(o.position.y-s.position.y)**2)<r&&(a(s),a(o)))}s.position.x-=s.directionX,s.position.y-=s.directionY,i.beginPath(),i.fillStyle=s.fillColor,i.lineWidth=s.size,i.moveTo(d.x,d.y),i.arc(s.position.x,s.position.y,s.size/2,0,2*Math.PI,!0),i.closePath(),i.fill()}requestAnimationFrame(e)}());
//# sourceMappingURL=index.9ec0991d.js.map
