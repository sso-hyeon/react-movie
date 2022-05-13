(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{74:function(n,e,t){"use strict";t.r(e);var c=t(0),o=t(27),i=t.n(o),r=t(13),a=t(50),l=t(7),s=t(6),d=t(18),j=t(9),b=t(41),h="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(h,"/coins")).then((function(n){return n.json()}))}var p=t(44),x=t.n(p),O=t(1);var f,g=function(n){var e,t=n.coinId,c=n.mode,o=Object(r.useQuery)(["ohlcv",t],(function(){return function(n){var e=Math.ceil(Date.now()/1e3),t=e-2419200;return fetch("".concat(h,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(t)})),i=o.isLoading,a=o.data;return Object(O.jsx)("div",{children:i?"Loading chart...":Object(O.jsx)(x.a,{type:"candlestick",series:[{name:"Price",data:null!==(e=null===a||void 0===a?void 0:a.map((function(n){return{x:n.time_close,y:[n.open.toFixed(3),n.high.toFixed(3),n.low.toFixed(3),n.close.toFixed(3)]}})))&&void 0!==e?e:[]}],options:{theme:{mode:c?"dark":"light"},chart:{height:500,width:500,toolbar:{show:!1},background:"transparent"},dataLabels:{enabled:!1},grid:{show:!0},plotOptions:{candlestick:{colors:{upward:"#ee5353",downward:"#2e86de"},wick:{useFillColor:!0}}},yaxis:{show:!1},xaxis:{axisBorder:{show:!0},axisTicks:{show:!1},labels:{show:!0},type:"datetime",categories:null===a||void 0===a?void 0:a.map((function(n){return n.time_close}))}}})})},m=s.c.li(f||(f=Object(l.a)(["\n    width: 100%;\n    line-height: 40px;\n    color: black;\n    background-color: ",";\n    margin-bottom: 15px;\n    text-align: center;\n    display: flex;\n    justify-content: space-around;\n    border-radius: 10px;\n    font-weight: bold;\n    color: ",";\n    span {\n        font-weight: normal;\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.theme.textColor}));var v,y,k,w,C,F,I,L,q,B,S=function(n){var e,t,c,o,i,a=n.coinId,l=Object(r.useQuery)(["todayPrice",a],(function(){return function(n){return fetch("".concat(h,"/coins/").concat(n,"/ohlcv/today")).then((function(n){return n.json()}))}(a)}),{refetchInterval:5e3}),s=l.isLoading,d=l.data;return Object(O.jsx)("div",{children:s?"Loading price...":Object(O.jsxs)("ul",{children:[Object(O.jsxs)(m,{children:["Open ",Object(O.jsx)("span",{children:null===d||void 0===d||null===(e=d.at(0))||void 0===e?void 0:e.open.toFixed(3)})]}),Object(O.jsxs)(m,{children:["High ",Object(O.jsx)("span",{children:null===d||void 0===d||null===(t=d.at(0))||void 0===t?void 0:t.high.toFixed(3)})]}),Object(O.jsxs)(m,{children:["Low ",Object(O.jsx)("span",{children:null===d||void 0===d||null===(c=d.at(0))||void 0===c?void 0:c.low.toFixed(3)})]}),Object(O.jsxs)(m,{children:["Volume ",Object(O.jsx)("span",{children:null===d||void 0===d||null===(o=d.at(0))||void 0===o?void 0:o.volume})]}),Object(O.jsxs)(m,{children:["Market cap ",Object(O.jsx)("span",{children:null===d||void 0===d||null===(i=d.at(0))||void 0===i?void 0:i.market_cap})]})]})})},z=s.c.div(v||(v=Object(l.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),Q=s.c.header(y||(y=Object(l.a)(["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n"]))),P=s.c.h1(k||(k=Object(l.a)(["\n    font-size: 48px;\n    color: ",";\n"])),(function(n){return n.theme.accentColor})),_=s.c.span(w||(w=Object(l.a)(["\n    text-align: center;\n    display: block;\n"]))),A=s.c.div(C||(C=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: ",";\n    padding: 10px 20px;\n    border-radius: 10px;\n"])),(function(n){return n.theme.contentsBgColor})),D=s.c.div(F||(F=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    span:first-child {\n        font-size: 10px;\n        font-weight: 400;\n        text-transform: uppercase;\n        margin-bottom: 5px;\n    }\n"]))),M=s.c.p(I||(I=Object(l.a)(["\n    margin: 20px 0px;\n"]))),E=s.c.div(L||(L=Object(l.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 25px 0px;\n    gap: 10px;\n"]))),J=s.c.span(q||(q=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: ",";\n    padding: 7px 0px;\n    border-radius: 10px;\n    color: ",";\n    a {\n        display: block;\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),R=s.c.button(B||(B=Object(l.a)(["\n    font-size: 30px;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 70px;\n    line-height: 15vh;\n    a {\n        display: block;\n    }\n"])));var T,H,U,V,$,G,K,N=function(n){var e=n.mode,t=Object(j.g)().coinId,c=Object(j.f)().state,o=Object(j.h)("/:coinId/price"),i=Object(j.h)("/:coinId/chart"),a=Object(r.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(h,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),l=a.isLoading,s=a.data,u=Object(r.useQuery)(["tickers",t],(function(){return function(n){return fetch("".concat(h,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)})),p=u.isLoading,x=u.data,f=l||p;return Object(O.jsxs)(z,{children:[Object(O.jsx)(b.a,{children:Object(O.jsx)("title",{children:"coin"})}),Object(O.jsxs)(Q,{children:[Object(O.jsx)(R,{children:Object(O.jsx)(d.b,{to:"/",children:"\ud83d\udc48"})}),Object(O.jsx)(P,{children:null!==c&&void 0!==c&&c.name?c.name:f?"Loading...":null===s||void 0===s?void 0:s.name})]}),f?Object(O.jsx)(_,{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(A,{children:[Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:"Rank:"}),Object(O.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:"Symbol:"}),Object(O.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:"Price:"}),Object(O.jsx)("span",{children:null===x||void 0===x?void 0:x.quotes.USD.price.toFixed(3)})]})]}),Object(O.jsx)(M,{children:null===s||void 0===s?void 0:s.description}),Object(O.jsxs)(A,{children:[Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:"Total Suply:"}),Object(O.jsx)("span",{children:null===x||void 0===x?void 0:x.total_supply})]}),Object(O.jsxs)(D,{children:[Object(O.jsx)("span",{children:"Max Supply:"}),Object(O.jsx)("span",{children:null===x||void 0===x?void 0:x.max_supply})]})]}),Object(O.jsxs)(E,{children:[Object(O.jsx)(J,{isActive:null!==i,children:Object(O.jsx)(d.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(O.jsx)(J,{isActive:null!==o,children:Object(O.jsx)(d.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId/price",children:Object(O.jsx)(S,{coinId:t})}),Object(O.jsx)(j.a,{path:"/:coinId/chart",children:Object(O.jsx)(g,{coinId:t,mode:e})})]})]})]})},W=s.c.div(T||(T=Object(l.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin: 0 auto;\n"]))),X=s.c.header(H||(H=Object(l.a)(["\n    height: 15vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Y=s.c.ul(U||(U=Object(l.a)([""]))),Z=s.c.li(V||(V=Object(l.a)(["\n    background-color: ",";\n    color: ",";\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        padding: 20px;\n        transition: color 0.2s ease-in;\n        display: flex;\n        align-items: center;\n    }\n    &:hover {\n        a {\n            color: ",";\n        }\n    }\n"])),(function(n){return n.theme.contentsBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),nn=s.c.h1($||($=Object(l.a)(["\n    font-size: 48px;\n    color: ",";\n"])),(function(n){return n.theme.accentColor})),en=s.c.img(G||(G=Object(l.a)(["\n    width: 35px;\n    height: 35px;\n    margin-right: 10px;\n"]))),tn=s.c.span(K||(K=Object(l.a)(["\n    text-align: center;\n    display: block;\n"])));var cn=function(){var n=Object(r.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(O.jsxs)(W,{children:[Object(O.jsx)(X,{children:Object(O.jsx)(nn,{children:"Coins"})}),e?Object(O.jsx)(tn,{children:"Loading..."}):Object(O.jsx)(Y,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(O.jsx)(Z,{children:Object(O.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(en,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var on,rn,an=function(n){var e=n.mode;return Object(O.jsx)(d.a,{basename:"/react-crypto-tracker",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId",children:Object(O.jsx)(N,{mode:e})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(cn,{})})]})})},ln=t(49),sn={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#44bd32",contentsBgColor:"rgba(0,0,0,0.5)"},dn={bgColor:"#f5f6fa",textColor:"#2f3640",accentColor:"#44bd32",contentsBgColor:"#F9EBC8"},jn=Object(s.b)(on||(on=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tbackground: transparent;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\n:focus {\n\toutline: 0;\n}\n\nins {\n\ttext-decoration: none;\n}\ndel {\n\ttext-decoration: line-through;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n    background-color: ",";\n    color: ",";\n}\na {\n    text-decoration: none;\n    color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),bn=s.c.button(rn||(rn=Object(l.a)(["\n    border: none;\n    position: absolute;\n    top: 5vh;\n    left: 370px;\n    right: 0;\n    margin: 0 auto;\n    font-size: 25px;\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n    background-color: ",";\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])),(function(n){return n.theme.textColor}));var hn=function(){var n=Object(c.useState)(!0),e=Object(a.a)(n,2),t=e[0],o=e[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(s.a,{theme:t?sn:dn,children:[Object(O.jsx)(bn,{onClick:function(){o((function(n){return!n}))},children:t?"\ud83c\udf1e":"\ud83c\udf19"}),Object(O.jsx)(jn,{}),Object(O.jsx)(an,{mode:t}),Object(O.jsx)(ln.ReactQueryDevtools,{initialIsOpen:!1})]})})},un=new r.QueryClient;i.a.render(Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(r.QueryClientProvider,{client:un,children:Object(O.jsx)(hn,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.1e670958.chunk.js.map