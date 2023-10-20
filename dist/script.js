!function(){"use strict";class e{constructor(){let{container:e=null,btns:t=null,next:s=null,prev:i=null,activeClass:n="",animate:l,autoplay:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.container=document.querySelector(e);try{this.slides=this.container.children}catch(e){}this.btns=document.querySelectorAll(t),this.prev=document.querySelector(i),this.next=document.querySelector(s),this.activeClass=n,this.animate=l,this.autoplay=a,this.slideIndex=1}}class t extends e{constructor(e){super(e)}showSlides(e){e>this.slides.length&&(this.slideIndex=1),e<1&&(this.slideIndex=this.slides.length);try{this.hanson.style.opacity="0",3==e?(this.hanson.classList.add("animated"),setTimeout((()=>{this.hanson.style.opacity="1",this.hanson.classList.add("slideInUp")}),3e3)):this.hanson.classList.remove("slideInUp")}catch(e){}[...this.slides].forEach((e=>{e.style.display="none"})),this.slides[this.slideIndex-1].style.display="block",this.slides[this.slideIndex-1].classList.add("animated","fadeIn")}plusSlides(e){this.showSlides(this.slideIndex+=e)}bindTriggers(){this.btns.forEach((e=>{e.addEventListener("click",(()=>{this.plusSlides(1)})),e.parentNode.previousElementSibling.addEventListener("click",(e=>{this.container.classList.contains("page")&&(e.preventDefault(),this.slideIndex=1,this.showSlides(this.slideIndex))}))}));let e=document.querySelectorAll(".prevmodule").length;document.querySelectorAll(".prevmodule").forEach((t=>{t.setAttribute("href",`#${e}`),e--,console.log(t)})),document.querySelectorAll(".prevmodule").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(-1)}))})),document.querySelectorAll(".nextmodule").forEach((e=>{e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),this.plusSlides(1)}))}))}render(){if(this.container){try{this.hanson=document.querySelector(".hanson")}catch(e){}this.showSlides(this.slideIndex),this.bindTriggers()}}}class s extends e{constructor(e,t,s,i,n,l){super(e,t,s,i,n,l)}decorizeSlides(){[...this.slides].forEach((e=>{e.classList.remove(this.activeClass),this.animate&&(e.querySelector(".card__title").style.opacity=".4",e.querySelector(".card__controls-arrow").style.opacity="0")})),this.slides[0].classList.add(this.activeClass),this.animate&&(this.slides[0].querySelector(".card__title").style.opacity="1",this.slides[0].querySelector(".card__controls-arrow").style.opacity="1")}nextSlide(){this.prev.parentNode===this.container?this.container.insertBefore(this.slides[0],this.prev):this.container.appendChild(this.slides[0]),this.decorizeSlides()}goAutoplay(){let e=setInterval((()=>this.nextSlide()),5e3);this.container.addEventListener("mouseenter",(()=>{clearInterval(e)})),this.prev.addEventListener("mouseenter",(()=>{clearInterval(e)})),this.next.addEventListener("mouseenter",(()=>{clearInterval(e)}))}bindTriggers(){this.next.addEventListener("click",(()=>this.nextSlide())),this.prev.addEventListener("click",(()=>{this.prev.parentNode===this.container?this.container.insertBefore(this.slides[this.slides.length-3],this.slides[0]):this.container.insertBefore(this.slides[this.slides.length-1],this.slides[0]),this.decorizeSlides()}))}init(){try{this.container.style.cssText="\n            display: flex;\n            flex-wrap: wrap;\n            overflow: hidden;\n            align-items: flex-start;\n            ",this.bindTriggers(),this.decorizeSlides(),this.autoplay&&this.goAutoplay()}catch(e){}}}class i{constructor(e,t){this.btns=document.querySelectorAll(e),this.overlay=document.querySelector(t),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}bindTriggers(){this.btns.forEach(((e,t)=>{try{const s=e.closest(".module__video-item").nextElementSibling;t%2==0&&s.setAttribute("data-disabled","true")}catch(e){}e.addEventListener("click",(()=>{e.closest(".module__video-item")&&"true"===e.closest(".module__video-item").getAttribute("data-disabled")||(this.activeBtn=e,document.querySelector("iframe#frame")?(this.overlay.style.display="flex",this.path!==e.getAttribute("data-url")&&(this.path=e.getAttribute("data-url"),this.player.loadVideoById({videoId:this.path}))):(this.path=e.getAttribute("data-url"),this.createPlayer(this.path)))}))}))}bindCloseBtn(){this.close.addEventListener("click",(()=>{this.overlay.style.display="none",this.player.stopVideo()}))}createPlayer(e){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:`${e}`,events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}onPlayerStateChange(e){try{const t=this.activeBtn.closest(".module__video-item").nextElementSibling,s=this.activeBtn.querySelector("svg").cloneNode(!0);0===e.data&&t.querySelector(".play__circle").classList.contains("closed")&&(t.querySelector(".play__circle").classList.remove("closed"),t.querySelector("svg").remove(),t.querySelector(".play__circle").appendChild(s),t.querySelector(".play__text").textContent="play video",t.querySelector(".play__text").classList.remove("attention"),t.style.opacity=1,t.style.filter="none",t.setAttribute("data-disabled","false"))}catch(e){}}init(){if(this.btns.length>0){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.bindTriggers(),this.bindCloseBtn()}}}class n{constructor(e,t,s){try{this.oldOfficer=document.querySelector(e),this.newOfficer=document.querySelector(t),this.oldItems=this.oldOfficer.querySelectorAll(s),this.newItems=this.newOfficer.querySelectorAll(s),this.oldCounter=0,this.newCounter=0}catch(e){}}bindTriggers(e,t,s){e.querySelector(".plus").addEventListener("click",(()=>{s!==t.length-2?(t[s].classList.add("animated","fadeIn"),t[s].style.display="flex",s++):(t[s].style.display="flex",t[t.length-1].remove())}))}hideItems(e){e.forEach(((e,t,s)=>{t!==s.length-1&&(e.style.display="none")}))}init(){try{this.hideItems(this.oldItems),this.hideItems(this.newItems),this.bindTriggers(this.oldOfficer,this.oldItems,this.oldCounter),this.bindTriggers(this.newOfficer,this.newItems,this.newCounter)}catch(e){}}}class l{constructor(e){this.forms=document.querySelectorAll(e),this.inputs=document.querySelectorAll("input"),this.message={loading:"Loading...",success:"Thank you, we will contact you",failure:"Something wrong..."},this.path="assets/question.php"}clearInputs(){this.inputs.forEach((e=>{e.value=""}))}checkMailInputs(){document.querySelectorAll('[type="email"]').forEach((e=>{e.addEventListener("keypress",(function(e){e.key.match(/[^a-z 0-9 @ \. _ -]/gi)&&e.preventDefault()}))}))}initMask(){function e(){let e="+1 (___) ___-____",t=0,s=e.replace(/\D/g,""),i=this.value.replace(/\D/g,"");s.length>=i.length&&(i=s),this.value=e.replace(/./g,(function(e){return/[_\d]/.test(e)&&t<i.length?i.charAt(t++):t>=i.length?"":e})),"blur"===event.type?3==this.value.length&&(this.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let s=t.createTextRange();s.collapse(!0),s.moveEnd("character",e),s.moveStart("character",e),s.select()}})(this.value.length,this)}document.querySelectorAll('[name="phone"]').forEach((t=>{t.addEventListener("input",e),t.addEventListener("keydown",e),t.addEventListener("focus",e),t.addEventListener("blur",e)}))}async postData(e,t){let s=await fetch(e,{method:"POST",body:t});return await s.text()}init(){this.checkMailInputs(),this.initMask(),this.forms.forEach((e=>{e.addEventListener("submit",(t=>{t.preventDefault();let s=document.createElement("div");s.style.cssText="\n                    margin-top: 15px;\n                    font-size: 18px;\n                    color: grey;\n                ",e.parentNode.appendChild(s),s.textContent=this.message.loading;const i=new FormData(e);this.postData(this.path,i).then((e=>{console.log(e),s.textContent=this.message.success})).catch((()=>{s.textContent=this.message.failure})).finally((()=>{this.clearInputs(),setTimeout((()=>{s.remove()}),5e3)}))}))}))}}class a{constructor(e){this.btns=document.querySelectorAll(e)}init(){this.btns.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".module__info-show").nextElementSibling;t.classList.add("animated","fadeInUp"),t.classList.toggle("msg")}))}))}}class r{constructor(e){this.btns=document.querySelectorAll(e),this.path="assets/img/mainbg.jpg"}downloadItem(e){const t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","nice_picture"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}init(){this.btns.forEach((e=>{e.addEventListener("click",(()=>{this.downloadItem(this.path)}))}))}}window.addEventListener("DOMContentLoaded",(()=>{new t({container:".page",btns:".next"}).render(),new t({container:".moduleapp",btns:".next"}).render(),new s({container:".showup__content-slider",prev:".showup__prev",next:".showup__next",activeClass:"card-active",animate:!0}).init(),new s({container:".modules__content-slider",prev:".modules__info-btns .slick-prev",next:".modules__info-btns .slick-next",activeClass:"card-active",animate:!0,autoplay:!0}).init(),new s({container:".feed__slider",prev:".feed__slider .slick-prev",next:".feed__slider .slick-next",activeClass:"feed__item-active"}).init(),new i(".showup .play",".overlay").init(),new i(".module__video-item .play",".overlay").init(),new n(".officerold",".officernew",".officer__card-item").init(),new l(".form").init(),new a(".plus__content").init(),new r(".download").init()}))}();