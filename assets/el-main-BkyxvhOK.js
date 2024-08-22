import{D as A,Y as S,Z as j,N as x,b as D,q as J,r as z,l as v,u,d as i,$ as M,e as m,f as h,x as $,z as y,A as B}from"./index-CNxwuWfl.js";function T(e){for(var t=-1,s=e==null?0:e.length,a={};++t<s;){var o=e[t];a[o[0]]=o[1]}return a}const I="__epPropKey",ue=e=>e,G=e=>A(e)&&!!e[I],Y=(e,t)=>{if(!A(e)||G(e))return e;const{values:s,required:a,default:o,type:c,validator:d}=e,O={type:c,required:!!a,validator:s||d?w=>{let f=!1,p=[];if(s&&(p=Array.from(s),S(e,"default")&&p.push(o),f||(f=p.includes(w))),d&&(f||(f=d(w))),!f&&p.length>0){const C=[...new Set(p)].map(b=>JSON.stringify(b)).join(", ");j(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${C}], got value ${JSON.stringify(w)}.`)}return f}:void 0,[I]:!0};return S(e,"default")&&(O.default=o),O},ie=e=>T(Object.entries(e).map(([t,s])=>[t,Y(s,t)])),Z=(e,t)=>{if(e.install=s=>{for(const a of[e,...Object.values(t??{})])s.component(a.name,a)},t)for(const[s,a]of Object.entries(t))e[s]=a;return e},E=e=>(e.install=x,e),P="el",L="is-",_=(e,t,s,a,o)=>{let c=`${e}-${t}`;return s&&(c+=`-${s}`),a&&(c+=`__${a}`),o&&(c+=`--${o}`),c},Q=Symbol("namespaceContextKey"),R=e=>{const t=D()?J(Q,z(P)):z(P);return v(()=>u(t)||P)},g=(e,t)=>{const s=R();return{namespace:s,b:(n="")=>_(s.value,e,n,"",""),e:n=>n?_(s.value,e,"",n,""):"",m:n=>n?_(s.value,e,"","",n):"",be:(n,r)=>n&&r?_(s.value,e,n,r,""):"",em:(n,r)=>n&&r?_(s.value,e,"",n,r):"",bm:(n,r)=>n&&r?_(s.value,e,n,"",r):"",bem:(n,r,l)=>n&&r&&l?_(s.value,e,n,r,l):"",is:(n,...r)=>{const l=r.length>=1?r[0]:!0;return n&&l?`${L}${n}`:""},cssVar:n=>{const r={};for(const l in n)n[l]&&(r[`--${s.value}-${l}`]=n[l]);return r},cssVarName:n=>`--${s.value}-${n}`,cssVarBlock:n=>{const r={};for(const l in n)n[l]&&(r[`--${s.value}-${e}-${l}`]=n[l]);return r},cssVarBlockName:n=>`--${s.value}-${e}-${n}`}};var N=(e,t)=>{const s=e.__vccOpts||e;for(const[a,o]of t)s[a]=o;return s};const U=i({name:"ElContainer"}),W=i({...U,props:{direction:{type:String}},setup(e){const t=e,s=M(),a=g("container"),o=v(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:s&&s.default?s.default().some(d=>{const V=d.type.name;return V==="ElHeader"||V==="ElFooter"}):!1);return(c,d)=>(m(),h("section",{class:y([u(a).b(),u(a).is("vertical",u(o))])},[$(c.$slots,"default")],2))}});var X=N(W,[["__file","container.vue"]]);const k=i({name:"ElAside"}),ee=i({...k,props:{width:{type:String,default:null}},setup(e){const t=e,s=g("aside"),a=v(()=>t.width?s.cssVarBlock({width:t.width}):{});return(o,c)=>(m(),h("aside",{class:y(u(s).b()),style:B(u(a))},[$(o.$slots,"default")],6))}});var K=N(ee,[["__file","aside.vue"]]);const se=i({name:"ElFooter"}),te=i({...se,props:{height:{type:String,default:null}},setup(e){const t=e,s=g("footer"),a=v(()=>t.height?s.cssVarBlock({height:t.height}):{});return(o,c)=>(m(),h("footer",{class:y(u(s).b()),style:B(u(a))},[$(o.$slots,"default")],6))}});var q=N(te,[["__file","footer.vue"]]);const ne=i({name:"ElHeader"}),ae=i({...ne,props:{height:{type:String,default:null}},setup(e){const t=e,s=g("header"),a=v(()=>t.height?s.cssVarBlock({height:t.height}):{});return(o,c)=>(m(),h("header",{class:y(u(s).b()),style:B(u(a))},[$(o.$slots,"default")],6))}});var F=N(ae,[["__file","header.vue"]]);const re=i({name:"ElMain"}),oe=i({...re,setup(e){const t=g("main");return(s,a)=>(m(),h("main",{class:y(u(t).b())},[$(s.$slots,"default")],2))}});var H=N(oe,[["__file","main.vue"]]);const de=Z(X,{Aside:K,Footer:q,Header:F,Main:H});E(K);E(q);E(F);E(H);export{de as E,N as _,ie as a,Y as b,g as c,ue as d,E as e,T as f,R as u,Z as w};
