(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{546:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(4232);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=o(e,n)),t&&(i.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1393:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(4232),i=n.useLayoutEffect,o=n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(4252),i=r(8365),o=r(7876),l=i._(r(4232)),u=n._(r(8477)),a=n._(r(9836)),s=r(4915),d=r(6904),c=r(72);r(546);let f=r(8265),p=n._(r(3829)),g=r(1026),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/react-idle/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,o,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:u,width:a,decoding:s,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:O,sizesInput:P,onLoad:S,onError:x,...E}=e,C=(0,l.useCallback)(e=>{e&&(x&&(e.src=e.src),e.complete&&h(e,p,_,w,j,v,P))},[r,p,_,w,j,x,v,P]),M=(0,g.useMergedRef)(t,C);return(0,o.jsx)("img",{...E,...b(f),loading:m,width:a,height:u,decoding:s,"data-nimg":y?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,_,w,j,v,P)},onError:e=>{O(!0),"empty"!==p&&j(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{var e;let t=m||n||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),i=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:i,qualities:o}},[n]),{onLoad:u,onLoadingComplete:a}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[b,_]=(0,l.useState)(!1),[w,j]=(0,l.useState)(!1),{props:O,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...O,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(4252),i=r(4915),o=r(2439),l=n._(r(3829));function u(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/react-idle/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=o.Image},3829:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:n,width:i,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+l+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4587:(e,t,r)=>{e.exports=r(3657)},4915:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(546);let n=r(5284),i=r(6904),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let s,d,c,{src:f,sizes:p,unoptimized:g=!1,priority:m=!1,loading:h,className:b,quality:v,width:y,height:_,fill:w=!1,style:j,overrideSrc:O,onLoad:P,onLoadingComplete:S,placeholder:x="empty",blurDataURL:E,fetchPriority:C,decoding:M="async",layout:R,objectFit:z,objectPosition:I,lazyBoundary:k,lazyRoot:A,...N}=e,{imgConf:D,showAltText:F,blurComplete:T,defaultLoader:U}=t,B=D||i.imageConfigDefault;if("allSizes"in B)s=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),n=null==(r=B.qualities)?void 0:r.sort((e,t)=>e-t);s={...B,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=N.loader||U;delete N.loader,delete N.srcSet;let G="__next_img_default"in L;if(G){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!p&&(p=t)}let W="",q=u(y),X=u(_);if((a=f)&&"object"==typeof a&&(l(a)||void 0!==a.src)){let e=l(f)?f.default:f;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(d=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,W=e.src,!w)if(q||X){if(q&&!X){let t=q/e.width;X=Math.round(e.height*t)}else if(!q&&X){let t=X/e.height;q=Math.round(e.width*t)}}else q=e.width,X=e.height}let H=!m&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:W)||f.startsWith("data:")||f.startsWith("blob:"))&&(g=!0,H=!1),s.unoptimized&&(g=!0),G&&!s.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(g=!0);let V=u(v),$=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:I}:{},F?{}:{color:"transparent"},j),J=T||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:X,blurWidth:d,blurHeight:c,blurDataURL:E||"",objectFit:$.objectFit})+'")':'url("'+x+'")',Y=o.includes($.objectFit)?"fill"===$.objectFit?"100% 100%":"cover":$.objectFit,Z=J?{backgroundSize:Y,backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:o,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:o,width:a[d]})}}({config:s,src:f,unoptimized:g,width:q,quality:V,sizes:p,loader:L});return{props:{...N,loading:H?"lazy":h,fetchPriority:C,width:q,height:X,decoding:M,className:b,style:{...$,...Z},sizes:K.sizes,srcSet:K.srcSet,src:O||K.src},meta:{unoptimized:g,priority:m,placeholder:x,fill:w}}}},5284:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,u=n?40*n:t,a=i?40*i:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5648:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9836:(e,t,r)=>{"use strict";var n=r(5364);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let i=r(4252),o=r(8365),l=r(7876),u=o._(r(4232)),a=i._(r(1393)),s=r(9896),d=r(6834),c=r(5648);function f(e){void 0===e&&(e=!1);let t=[(0,l.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(546);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(i.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:i})})}let h=function(e){let{children:t}=e,r=(0,u.useContext)(s.AmpStateContext),n=(0,u.useContext)(d.HeadManagerContext);return(0,l.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9896:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(4252)._(r(4232)).default.createContext({})}}]);