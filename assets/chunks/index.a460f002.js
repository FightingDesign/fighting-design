import{a1 as C,a6 as H,a7 as L,f as v,h as I,k as N}from"./framework.f50263fa.js";import{F as $,h as M,i as P,u as V,j as G}from"./index.ccb77e9b.js";const O=(e,s)=>{console.warn(`[fighting-design/${e}]: ${s}`)},_=(e,s)=>{console.error(`[fighting-design/${e}]: ${s}`)},r=C({}),g=e=>e.props.placement,T=e=>{const s=g(e);return r[s].findIndex(c=>c.uid==e.uid)},x=e=>e.vnode.el.offsetHeight+16,k=e=>{const s=T(e),c=g(e);if(!(s<0))for(let a=s+1;a<r[c].length;a++){const u=r[c][a];u.exposed.offsetVal.value-=x(e)}},w=e=>{k(e);const s=g(e);r[s].splice(T(e),1)},z=(e,s)=>{const c=t=>{const n=g(t);r[n]?r[n].push(t):r[n]=[t]},a=t=>{let n=t.offset||20;const o=r[t.placement?t.placement:s==="message"?"top":"top-right"];return o&&o.forEach(i=>{n+=x(i)}),n},u=t=>{const n=H(e,t),o=document.createElement("div");return L(n,o),document.body.appendChild(o.firstElementChild),n.component},l=t=>{const n=u(t);return c(n),n.proxy},d=t=>{const n={duration:2500,placement:s==="message"?"top":"top-right",offset:a(t),...t};return M(n.duration)||(n.duration=2500,O(`F${s}`,"Parameters `duration` is not a number.The default value has been used 2500.")),n},m=t=>{const n=P(t)?{message:t}:t;return l(d(n))};return $.forEach(t=>{m[t]=n=>l(d({message:n,type:t}))}),{Message:m}},S=(e,s)=>{const{classes:c,styles:a}=V(e,s),{run:u}=G(),l=N(),d=v(!0),m=c(["type","placement","round"],`f-${s}`),t=a(["color","background","zIndex"],"zIndex"),n=I(()=>e.placement.includes("top")),o=v(e.offset);let i;const p=f=>{d.value=!1,u(e.onClose,f),clearTimeout(i)},E=()=>{w(l)},y=()=>{l.vnode.el&&l.vnode.el.parentElement.removeChild(l.vnode.el)},h=()=>{e.duration>0&&(i=setTimeout(()=>{p()},e.duration))};h();const b=I(()=>{const f={};return e.placement.includes("bottom")?f.bottom=o.value+"px":f.top=o.value+"px",f});return{classList:m,style:t,visible:d,isPosition:n,offsetStyle:b,offsetVal:o,onBeforeLeave:E,onAfterLeave:y,clearTimer:()=>{i&&clearTimeout(i)},startTime:()=>{h()},handelClose:p}};export{z as a,_ as e,S as u,O as w};
