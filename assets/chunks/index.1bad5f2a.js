import{i as g,f as v,a1 as k,a5 as C,d as G,o as y,c as T,x as J,E as W,r as A,D as H,b as m,_ as Y,v as Q,a6 as U,a7 as X,j as ee,C as L,y as te,n as se}from"./framework.fe94f300.js";const j=e=>(e.install=t=>{const{name:n}=e;n&&t.component(n,e)},e),Fe=(e,t)=>(e.install=n=>{n.config.globalProperties[t]=e},e),Ne=(e,t)=>(e.install=n=>{n.directive(t,e)},e),Ee=(e,t=2)=>b(e)?Number(e.toFixed(t)):(O("keepDecimal","`value` is not a number"),e),$e=(e,t=1e3)=>{let n;return(...a)=>{n&&clearTimeout(n),n=setTimeout(()=>{e(...a)},t)}},Be=e=>e<10?`0${e}`:e.toString(),P=(e,t="px")=>e?h(e)?e:e+t:"",Le=e=>e?b(e)?e:Number.parseFloat(e)||0:0,w=e=>e.replace(/([A-Z])/g,(t,n)=>"-"+n.toLowerCase()),{toString:ne}=Object.prototype,F=(e,t)=>ne.call(e)===`[object ${t}]`,Pe=e=>F(e,"Date"),h=e=>typeof e=="string",b=e=>typeof e=="number"&&!isNaN(e),S=e=>F(e,"Boolean"),oe=e=>F(e,"Object"),re=e=>typeof e=="function",ce=Array.isArray,we=typeof window<"u",O=(e,t)=>{console.warn(`[fighting-design/${e}]: ${t}`)},Se=(e,t)=>{console.error(`[fighting-design/${e}]: ${t}`)},x=(e=!1)=>({type:Boolean,default:e}),xe=e=>({type:Number,default:e}),I=(e,t)=>{const n={type:String,default:e};return t&&(n.validator=t),n},D=e=>({type:[String,Number],default:e}),V=e=>({type:Object,default:()=>e}),z=e=>({type:Function,default:()=>e}),Ge=e=>({type:Array,default:()=>e}),N=(e,t)=>{const{filter:n}=ae(e),a=(r,u)=>g(()=>{const s=v([]),o=n(r);u&&s.value.push(u);for(const l in o)o[l]&&s.value.push(`f-${t}__${S(o[l])?w(l):o[l]}`);return s.value}),i=(r,u,s=!0)=>{if(S(s))return b(r)&&s?P(r):r;if(h(s)){if(s===u)return r}else if(ce(s)){for(const o of s)if(o===u)return r}return P(r)};return{classes:a,styles:(r,u=!0)=>g(()=>{const s=k({}),o=n(r);for(const l in o)o[l]&&(s[`--${t}-${w(l)}`]=i(o[l],l,u));return s})}},ae=e=>({filter:a=>{const i=k({});return a.forEach(c=>{h(c)?i[c]=C(e,c):oe(c)&&c.callback&&c.callback()&&(i[c.actualKey||c.key]=C(e,c.key))}),i},interceptors:(a,i,c=null)=>i()?C(e,a):c}),E=()=>({run:(t,...n)=>{re(t)&&t(...n)}}),Ae=["large","middle","small","mini"],le=["default","primary","success","danger","warning","info"],He=["_blank","_self","_parent","_top"],je=["fill","contain","cover","none","scale-down"],ie={icon:V(),color:I(),size:D(),onClick:z()},ue=G({name:"FSvgIcon",__name:"svg-icon",props:ie,setup(e){const t=e,{run:n}=E(),{styles:a}=N(t,"svg-icon"),i=r=>{n(t.onClick,r)},c=a(["size","color"]);return(r,u)=>(y(),T("i",{role:"img",class:"f-svg-icon","text-indent":"middle",style:H(m(c)),onClick:i},[r.icon?(y(),J(W(r.icon),{key:0})):A(r.$slots,"default",{key:1})],4))}}),fe=j(ue),de={},pe={width:"1em",height:"1em",viewBox:"0 0 16 16"},me=Q("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"},null,-1),ge=[me];function ye(e,t){return y(),T("svg",pe,ge)}const he=Y(de,[["render",ye]]),f=k({}),_=e=>e.props.placement,M=e=>{const t=_(e);return f[t].findIndex(n=>n.uid==e.uid)},R=e=>e.vnode.el.offsetHeight+16,be=e=>{const t=M(e),n=_(e);if(!(t<0))for(let a=t+1;a<f[n].length;a++){const i=f[n][a];i.exposed.offsetVal.value-=R(e)}},_e=e=>{be(e);const t=_(e);f[t].splice(M(e),1)},Oe=(e,t)=>{const n=s=>{const o=_(s);f[o]?f[o].push(s):f[o]=[s]},a=s=>{let o=s.offset||20;const l=f[s.placement?s.placement:t==="message"?"top":"top-right"];return l&&l.forEach(d=>{o+=R(d)}),o},i=s=>{const o=U(e,s),l=document.createElement("div");return X(o,l),document.body.appendChild(l.firstElementChild),o.component},c=s=>{const o=i(s);return n(o),o.proxy},r=s=>{const o={duration:2500,placement:t==="message"?"top":"top-right",offset:a(s),...s};return b(o.duration)||(o.duration=2500,O(`F${t}`,"Parameters `duration` is not a number.The default value has been used 2500.")),o},u=s=>{const o=h(s)?{message:s}:s;return c(r(o))};return le.forEach(s=>{u[s]=o=>c(r({message:o,type:s}))}),{Message:u}},De=(e,t)=>{const{classes:n,styles:a}=N(e,t),{run:i}=E(),c=ee(),r=v(!0),u=n(["type","placement","round"],`f-${t}`),s=a(["color","background","zIndex"],"zIndex"),o=g(()=>e.placement.includes("top")),l=v(e.offset);let d;const $=p=>{r.value=!1,i(e.onClose,p),clearTimeout(d)},Z=()=>{_e(c)},K=()=>{c.vnode.el&&c.vnode.el.parentElement.removeChild(c.vnode.el)},B=()=>{e.duration>0&&(d=setTimeout(()=>{$()},e.duration))};B();const q=g(()=>{const p={};return e.placement.includes("bottom")?p.bottom=l.value+"px":p.top=l.value+"px",p});return{classList:u,styleList:s,visible:r,isPosition:o,offsetStyle:q,offsetVal:l,onBeforeLeave:Z,onAfterLeave:K,clearTimer:()=>{d&&clearTimeout(d)},startTime:()=>{B()},handelClose:$}},Ce={size:D(),round:x(),disabled:x(),color:I(),hoverColor:I(),icon:V(),onClick:z()},ve=G({name:"FCloseBtn",__name:"close-btn",props:Ce,setup(e){const t=e,{styles:n,classes:a}=N(t,"close-btn"),{run:i}=E(),c=s=>{t.disabled||i(t.onClick,s)},r=a(["round","disabled"],"f-close-btn"),u=n(["color","hoverColor"]);return(s,o)=>(y(),T("div",{role:"button",class:se(m(r)),style:H(m(u)),onClick:c},[L(m(fe),{size:s.size,icon:s.icon},{default:te(()=>[A(s.$slots,"default",{},()=>[L(m(he))])]),_:3},8,["size","icon"])],6))}}),Ve=j(ve);export{je as A,Se as B,$e as C,Pe as D,Be as E,le as F,S as G,he as H,re as I,ae as J,Ne as K,x as a,xe as b,V as c,z as d,fe as e,Ve as f,Fe as g,Oe as h,h as i,Ae as j,ce as k,P as l,D as m,He as n,E as o,j as p,oe as q,Ee as r,I as s,Le as t,De as u,N as v,O as w,we as x,b as y,Ge as z};
