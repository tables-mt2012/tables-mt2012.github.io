"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2933],{2933:(z,x,a)=>{a.r(x),a.d(x,{ion_item_option:()=>o,ion_item_options:()=>g,ion_item_sliding:()=>E});var c=a(5861),e=a(4083),h=a(5273),w=a(2854),f=a(6655),u=a(4862);const o=class{constructor(t){(0,e.r)(this,t),this.onClick=i=>{i.target.closest("ion-item-option")&&i.preventDefault()},this.color=void 0,this.disabled=!1,this.download=void 0,this.expandable=!1,this.href=void 0,this.rel=void 0,this.target=void 0,this.type="button"}render(){const{disabled:t,expandable:i,href:n}=this,d=void 0===n?"button":"a",r=(0,h.b)(this),m="button"===d?{type:this.type}:{download:this.download,href:this.href,target:this.target};return(0,e.h)(e.H,{onClick:this.onClick,class:(0,w.c)(this.color,{[r]:!0,"item-option-disabled":t,"item-option-expandable":i,"ion-activatable":!0})},(0,e.h)(d,Object.assign({},m,{class:"button-native",part:"native",disabled:t}),(0,e.h)("span",{class:"button-inner"},(0,e.h)("slot",{name:"top"}),(0,e.h)("div",{class:"horizontal-wrapper"},(0,e.h)("slot",{name:"start"}),(0,e.h)("slot",{name:"icon-only"}),(0,e.h)("slot",null),(0,e.h)("slot",{name:"end"})),(0,e.h)("slot",{name:"bottom"})),"md"===r&&(0,e.h)("ion-ripple-effect",null)))}get el(){return(0,e.f)(this)}};o.style={ios:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){-webkit-padding-end:calc(0.7em + var(--ion-safe-area-right));padding-inline-end:calc(0.7em + var(--ion-safe-area-right))}:host(.in-list.item-options-start:first-child){-webkit-padding-start:calc(0.7em + var(--ion-safe-area-left));padding-inline-start:calc(0.7em + var(--ion-safe-area-left))}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}",md:":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){-webkit-padding-end:calc(0.7em + var(--ion-safe-area-right));padding-inline-end:calc(0.7em + var(--ion-safe-area-right))}:host(.in-list.item-options-start:first-child){-webkit-padding-start:calc(0.7em + var(--ion-safe-area-left));padding-inline-start:calc(0.7em + var(--ion-safe-area-left))}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}"};const g=class{constructor(t){(0,e.r)(this,t),this.ionSwipe=(0,e.d)(this,"ionSwipe",7),this.side="end"}fireSwipeEvent(){var t=this;return(0,c.Z)(function*(){t.ionSwipe.emit({side:t.side})})()}render(){const t=(0,h.b)(this),i=(0,f.p)(this.side);return(0,e.h)(e.H,{class:{[t]:!0,[`item-options-${t}`]:!0,"item-options-start":!i,"item-options-end":i}})}get el(){return(0,e.f)(this)}};let p;g.style={ios:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}.item-options-start ion-item-option:first-child{-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}.item-options-end ion-item-option:last-child{-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}",md:"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}.item-options-start ion-item-option:first-child{-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}.item-options-end ion-item-option:last-child{-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"};const E=class{constructor(t){(0,e.r)(this,t),this.ionDrag=(0,e.d)(this,"ionDrag",7),this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.contentEl=null,this.initialContentScrollY=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var t=this;return(0,c.Z)(function*(){t.item=t.el.querySelector("ion-item"),t.contentEl=(0,u.f)(t.el),yield t.updateOptions(),t.gesture=(yield Promise.resolve().then(a.bind(a,1898))).createGesture({el:t.el,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:i=>t.canStart(i),onStart:()=>t.onStart(),onMove:i=>t.onMove(i),onEnd:i=>t.onEnd(i)}),t.disabledChanged()})()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,p===this.el&&(p=void 0)}getOpenAmount(){return Promise.resolve(this.openAmount)}getSlidingRatio(){return Promise.resolve(this.getSlidingRatioSync())}open(t){var i=this;return(0,c.Z)(function*(){var n;if(null===(i.item=null!==(n=i.item)&&void 0!==n?n:i.el.querySelector("ion-item")))return;const r=i.getOptions(t);r&&(void 0===t&&(t=r===i.leftOptions?"start":"end"),t=(0,f.p)(t)?"end":"start",i.openAmount<0&&r===i.leftOptions||i.openAmount>0&&r===i.rightOptions||(i.closeOpened(),i.state=4,requestAnimationFrame(()=>{i.calculateOptsWidth(),p=i.el,i.setOpenAmount("end"===t?i.optsWidthRightSide:-i.optsWidthLeftSide,!1),i.state="end"===t?8:16})))})()}close(){var t=this;return(0,c.Z)(function*(){t.setOpenAmount(0,!0)})()}closeOpened(){return(0,c.Z)(function*(){return void 0!==p&&(p.close(),p=void 0,!0)})()}getOptions(t){return void 0===t?this.leftOptions||this.rightOptions:"start"===t?this.leftOptions:this.rightOptions}updateOptions(){var t=this;return(0,c.Z)(function*(){const i=t.el.querySelectorAll("ion-item-options");let n=0;t.leftOptions=t.rightOptions=void 0;for(let d=0;d<i.length;d++){const r=i.item(d),m=void 0!==r.componentOnReady?yield r.componentOnReady():r;"start"==((0,f.p)(m.side)?"end":"start")?(t.leftOptions=m,n|=1):(t.rightOptions=m,n|=2)}t.optsDirty=!0,t.sides=n})()}canStart(t){return!("rtl"===document.dir?window.innerWidth-t.startX<15:t.startX<15)&&(p&&p!==this.el&&this.closeOpened(),!(!this.rightOptions&&!this.leftOptions))}onStart(){this.item=this.el.querySelector("ion-item");const{contentEl:t}=this;t&&(this.initialContentScrollY=(0,u.d)(t)),p=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onMove(t){this.optsDirty&&this.calculateOptsWidth();let n,i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}i>this.optsWidthRightSide?(n=this.optsWidthRightSide,i=n+.55*(i-n)):i<-this.optsWidthLeftSide&&(n=-this.optsWidthLeftSide,i=n+.55*(i-n)),this.setOpenAmount(i,!1)}onEnd(t){const{contentEl:i,initialContentScrollY:n}=this;i&&(0,u.r)(i,n);const d=t.velocityX;let r=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;const m=this.openAmount>0==!(d<0),y=Math.abs(d)>.3,O=Math.abs(this.openAmount)<Math.abs(r/2);C(m,y,O)&&(r=0);const j=this.state;this.setOpenAmount(r,!0),32&j&&this.rightOptions?this.rightOptions.fireSwipeEvent():64&j&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.rightOptions.style.display="flex",this.optsWidthRightSide=this.rightOptions.offsetWidth,this.rightOptions.style.display=""),this.optsWidthLeftSide=0,this.leftOptions&&(this.leftOptions.style.display="flex",this.optsWidthLeftSide=this.leftOptions.offsetWidth,this.leftOptions.style.display=""),this.optsDirty=!1}setOpenAmount(t,i){if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.gesture&&this.gesture.enable(!1),this.tmr=setTimeout(()=>{this.state=2,this.tmr=void 0,this.gesture&&this.gesture.enable(!this.disabled)},600),p=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}getSlidingRatioSync(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}render(){const t=(0,h.b)(this);return(0,e.h)(e.H,{class:{[t]:!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}})}get el(){return(0,e.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},C=(t,i,n)=>!i&&n||t&&i;E.style="ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}"},2854:(z,x,a)=>{a.d(x,{c:()=>h,g:()=>f,h:()=>e,o:()=>k});var c=a(5861);const e=(s,o)=>null!==o.closest(s),h=(s,o)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},o):o,f=s=>{const o={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(s).forEach(l=>o[l]=!0),o},u=/^[a-z][a-z0-9+\-.]*:/,k=function(){var s=(0,c.Z)(function*(o,l,v,g){if(null!=o&&"#"!==o[0]&&!u.test(o)){const b=document.querySelector("ion-router");if(b)return null!=l&&l.preventDefault(),b.push(o,v,g)}return!1});return function(l,v,g,b){return s.apply(this,arguments)}}()}}]);