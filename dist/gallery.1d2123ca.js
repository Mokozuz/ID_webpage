console.clear();const{gsap:e,imagesLoaded:t}=window,r={prev:document.querySelector(".btn--left"),next:document.querySelector(".btn--right")},n=document.querySelector(".cards__wrapper"),o=document.querySelector(".app__bg"),a=document.querySelector(".info__wrapper");function s(t){let s=n.querySelector(".current--card"),l=n.querySelector(".previous--card"),d=n.querySelector(".next--card"),u=o.querySelector(".current--image"),p=o.querySelector(".previous--image"),y=o.querySelector(".next--image");(function(t){let n=a.querySelector(".current--info"),o=a.querySelector(".previous--info"),s=a.querySelector(".next--info");e.timeline().to([r.prev,r.next],{duration:.2,opacity:.5,pointerEvents:"none"}).to(n.querySelectorAll(".text"),{duration:.4,stagger:.1,translateY:"-120px",opacity:0},"-=").call(()=>{n.classList.remove("current--info"),o.classList.remove("previous--info"),s.classList.remove("next--info"),"right"===t?(n.classList.add("previous--info"),s.classList.add("current--info"),o.classList.add("next--info")):"left"===t&&(n.classList.add("next--info"),s.classList.add("previous--info"),o.classList.add("current--info"))}).call(()=>c()).fromTo("right"===t?s.querySelectorAll(".text"):o.querySelectorAll(".text"),{opacity:0,translateY:"40px"},{duration:.4,stagger:.1,translateY:"0px",opacity:1}).to([r.prev,r.next],{duration:.2,opacity:1,pointerEvents:"all"})})(t),s.classList.remove("current--card"),l.classList.remove("previous--card"),d.classList.remove("next--card"),u.classList.remove("current--image"),p.classList.remove("previous--image"),y.classList.remove("next--image"),s.style.zIndex="50",u.style.zIndex="-2","right"===t?(l.style.zIndex="20",d.style.zIndex="30",y.style.zIndex="-1",s.classList.add("previous--card"),l.classList.add("next--card"),d.classList.add("current--card"),u.classList.add("previous--image"),p.classList.add("next--image"),y.classList.add("current--image")):"left"===t&&(l.style.zIndex="30",d.style.zIndex="20",p.style.zIndex="-1",s.classList.add("next--card"),l.classList.add("current--card"),d.classList.add("previous--card"),u.classList.add("next--image"),p.classList.add("current--image"),y.classList.add("previous--image")),function(e){e.removeEventListener("pointermove",i)}(s)}function i(t){let r=t.currentTarget,n=r.getBoundingClientRect(),o={x:n.left+n.width/2,y:n.top+n.height/2},s=Math.atan2(t.pageX-o.x,0)*(35/Math.PI);e.set(r,{"--current-card-rotation-offset":`${s}deg`});let i=a.querySelector(".current--info");e.set(i,{rotateY:`${s}deg`})}function c(){let t=n.querySelector(".current--card");t.addEventListener("pointermove",i),t.addEventListener("pointerout",t=>{!function(t){let r=t.currentTarget,n=a.querySelector(".current--info");e.set(r,{"--current-card-rotation-offset":0}),e.set(n,{rotateY:0})}(t)})}r.next.addEventListener("click",()=>s("right")),r.prev.addEventListener("click",()=>s("left")),c(),(()=>{let o=[...document.querySelectorAll("img")],s=o.length,i=0,c=document.querySelector(".loader span");e.set(n.children,{"--card-translateY-offset":"100vh"}),e.set(a.querySelector(".current--info").querySelectorAll(".text"),{translateY:"40px",opacity:0}),e.set([r.prev,r.next],{pointerEvents:"none",opacity:"0"}),o.forEach(o=>{t(o,t=>{if(t.isComplete){let t=++i/s;e.to(c,{duration:1,scaleX:t,backgroundColor:`hsl(${120*t}, 100%, 50%`}),s==i&&e.timeline().to(".loading__wrapper",{duration:.8,opacity:0,pointerEvents:"none"}).call(()=>void e.timeline().to(n.children,{delay:.15,duration:.5,stagger:{ease:"power4.inOut",from:"right",amount:.1},"--card-translateY-offset":"0%"}).to(a.querySelector(".current--info").querySelectorAll(".text"),{delay:.5,duration:.4,stagger:.1,opacity:1,translateY:0}).to([r.prev,r.next],{duration:.4,opacity:1,pointerEvents:"all"},"-=0.4"))}})})})();//# sourceMappingURL=gallery.1d2123ca.js.map

//# sourceMappingURL=gallery.1d2123ca.js.map