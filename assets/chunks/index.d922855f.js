import{h as y,a1 as w,a5 as C,d as x,o as h,c as k,x as q,E as J,r as G,D as A,b as g,_ as W,v as Y,a6 as Q,a7 as U,f as E,k as X,C as P,y as tt,n as et}from"./framework.403449c4.js";const H=t=>(t.install=e=>{const{name:s}=t;s&&e.component(s,t)},t),Et=(t,e)=>(t.install=s=>{s.config.globalProperties[e]=t},t),Pt=(t,e)=>(t.install=s=>{s.directive(e,t)},t),St=(t,e=2)=>d(t)?Number(t.toFixed(e)):t,$t=(t,e=1e3)=>{let s;return(...a)=>{s&&clearTimeout(s),s=setTimeout(()=>{t(...a)},e)}},Bt=t=>d(t)?t<10?`0${t}`:t.toString():"00",S=(t,e="px")=>_(t)&&t.length?t:d(t)?t+e:"",Lt=t=>{if(!t)return 0;if(d(t))return t;const e=Number.parseFloat(t);return d(e)?e:0},nt=/([A-Z])/g,$=t=>t.replace(nt,(e,s,a)=>a===0?s.toLowerCase():"-"+s.toLowerCase()),wt=(t,e)=>!t||!t.length?[]:t.split(e),O=t=>e=>lt(e)===`[object ${t}]`,xt=O("Date"),_=t=>typeof t=="string",d=t=>typeof t=="number"&&!isNaN(t),B=t=>typeof t=="boolean",st=O("Object"),ot=t=>typeof t=="function",rt=Array.isArray,Gt=typeof window<"u",ct=(t,e)=>{console.warn(`[fighting-design/${t}]: ${e}`)},At=(t,e)=>{console.error(`[fighting-design/${t}]: ${e}`)},L=(t=!1)=>({type:Boolean,default:t}),Ht=t=>({type:Number,default:t}),I=(t,e)=>{const s={type:String,default:t};return e&&(s.validator=e),s},j=t=>({type:[String,Number],default:t}),V=(t=null)=>({type:Object,default:()=>t}),z=(t=null)=>({type:Function,default:t}),Ot=(t=[])=>({type:Array,default:()=>t}),{toString:at}=Object.prototype,lt=t=>at.call(t),v=(t,e)=>{const{filter:s}=it(t),a=(r,u)=>y(()=>{const n=[],o=s(r);u&&n.push(u);for(const l in o)o[l]&&n.push(`f-${e}__${B(o[l])?$(l):o[l]}`);return n}),i=(r,u,n=!0)=>{if(B(n))return d(r)&&n?S(r):r;if(_(n)){if(n===u)return r}else if(rt(n)){for(const o of n)if(o===u)return r}return S(r)};return{classes:a,styles:(r,u=!0)=>y(()=>{const n={},o=s(r);for(const l in o)o[l]&&(n[`--${e}-${$(l)}`]=i(o[l],l,u));return n})}},it=t=>({filter:a=>{const i=w({});return a.forEach(c=>{_(c)?i[c]=C(t,c):st(c)&&c.callback&&c.callback()&&(i[c.actualKey||c.key]=C(t,c.key))}),i},interceptors:(a,i,c=null)=>i()?C(t,a):c}),T=()=>({run:(e,...s)=>{ot(e)&&e(...s)}}),jt=["large","middle","small","mini"],ut=["default","primary","success","danger","warning","info"],Vt=["_blank","_self","_parent","_top"],zt=["fill","contain","cover","none","scale-down"],ft={icon:V(),color:I(),size:j(),onClick:z()},dt=x({name:"FSvgIcon",__name:"svg-icon",props:ft,setup(t){const e=t,{run:s}=T(),{styles:a}=v(e,"svg-icon"),i=r=>{s(e.onClick,r)},c=a(["size","color"]);return(r,u)=>(h(),k("i",{role:"img",class:"f-svg-icon","text-indent":"middle",style:A(g(c)),onClick:i},[r.icon?(h(),q(J(r.icon),{key:0})):G(r.$slots,"default",{key:1})],4))}}),pt=H(dt),mt={},gt={width:"1em",height:"1em",viewBox:"0 0 16 16"},yt=Y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"},null,-1),ht=[yt];function _t(t,e){return h(),k("svg",gt,ht)}const bt=W(mt,[["render",_t]]),f=w({}),b=t=>t.props.placement,D=t=>{const e=b(t);return f[e].findIndex(s=>s.uid==t.uid)},R=t=>t.vnode.el.offsetHeight+16,Ct=t=>{const e=D(t),s=b(t);if(!(e<0))for(let a=e+1;a<f[s].length;a++){const i=f[s][a];i.exposed.offsetVal.value-=R(t)}},It=t=>{Ct(t);const e=b(t);f[e].splice(D(t),1)},Dt=(t,e)=>{const s=n=>{const o=b(n);f[o]?f[o].push(n):f[o]=[n]},a=n=>{let o=n.offset||20;const l=f[n.placement?n.placement:e==="message"?"top":"top-right"];return l&&l.forEach(p=>{o+=R(p)}),o},i=n=>{const o=Q(t,n),l=document.createElement("div");return U(o,l),document.body.appendChild(l.firstElementChild),o.component},c=n=>{const o=i(n);return s(o),o.proxy},r=n=>{const o={duration:2500,placement:e==="message"?"top":"top-right",offset:a(n),...n};return d(o.duration)||(o.duration=2500,ct(`F${e}`,"Parameters `duration` is not a number.The default value has been used 2500.")),o},u=n=>{const o=_(n)?{message:n}:n;return c(r(o))};return ut.forEach(n=>{u[n]=o=>c(r({message:o,type:n}))}),{Message:u}},Rt=(t,e)=>{const{classes:s,styles:a}=v(t,e),{run:i}=T(),c=X(),r=E(!0),u=s(["type","placement","round"],`f-${e}`),n=a(["color","background","zIndex"],"zIndex"),o=y(()=>t.placement.includes("top")),l=E(t.offset);let p;const F=m=>{r.value=!1,i(t.onClose,m),clearTimeout(p)},M=()=>{It(c)},K=()=>{c.vnode.el&&c.vnode.el.parentElement.removeChild(c.vnode.el)},N=()=>{t.duration>0&&(p=setTimeout(()=>{F()},t.duration))};N();const Z=y(()=>{const m={};return t.placement.includes("bottom")?m.bottom=l.value+"px":m.top=l.value+"px",m});return{classList:u,style:n,visible:r,isPosition:o,offsetStyle:Z,offsetVal:l,onBeforeLeave:M,onAfterLeave:K,clearTimer:()=>{p&&clearTimeout(p)},startTime:()=>{N()},handelClose:F}},kt={size:j(),round:L(),disabled:L(),color:I(),hoverColor:I(),icon:V(),onClick:z()},vt=x({name:"FCloseBtn",__name:"close-btn",props:kt,setup(t){const e=t,{styles:s,classes:a}=v(e,"close-btn"),{run:i}=T(),c=n=>{e.disabled||i(e.onClick,n)},r=a(["round","disabled"],"f-close-btn"),u=s(["color","hoverColor"]);return(n,o)=>(h(),k("div",{role:"button",class:et(g(r)),style:A(g(u)),onClick:c},[P(g(pt),{size:n.size,icon:n.icon},{default:tt(()=>[G(n.$slots,"default",{},()=>[P(g(bt))])]),_:3},8,["size","icon"])],6))}}),Mt=H(vt);export{d as A,Ot as B,zt as C,At as D,$t as E,ut as F,bt as G,xt as H,B as I,Bt as J,it as K,Pt as L,L as a,Ht as b,V as c,z as d,pt as e,Mt as f,Et as g,Dt as h,_ as i,jt as j,v as k,H as l,j as m,ot as n,T as o,rt as p,S as q,Vt as r,I as s,st as t,Rt as u,St as v,ct as w,Lt as x,Gt as y,wt as z};
