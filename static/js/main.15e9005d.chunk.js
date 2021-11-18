(this["webpackJsonpxclothes-frontend"]=this["webpackJsonpxclothes-frontend"]||[]).push([[0],{10:function(e,t,n){"use strict";var r=n(2).a.div.withConfig({displayName:"styles__StyledWrapper",componentId:"sc-dk43t1-0"})(["padding:0 ",";margin:auto;max-width:1200px;"],"1.6rem"),c=n(0);t.a=function(e){var t=e.children;return Object(c.jsx)(r,{children:t})}},102:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),o=n.n(a),i=n(25),s=n.n(i),l=(n(71),n(37)),d=n(26),u=n(32),p=n(10),h={login:"/login",home:"/",hats:"/hats",jackets:"/jackets",sneakers:"/sneakers",checkout:"/checkout"},m=n(2),f=n(23),b=m.a.header.withConfig({displayName:"styles__StyledHeader",componentId:"sc-x1mdpa-0"})(["font-size:1.6rem;position:sticky;top:0;left:0;right:0;background:white;border-bottom:0.1rem solid lightgray;z-index:1;"]),j=m.a.div.withConfig({displayName:"styles__HeaderContent",componentId:"sc-x1mdpa-1"})(["display:flex;justify-content:center;align-items:center;position:relative;height:4.8rem;"]),g=m.a.p.withConfig({displayName:"styles__Logo",componentId:"sc-x1mdpa-2"})(["font-size:3.2rem;font-weight:bold;"]),y=m.a.button.withConfig({displayName:"styles__MenuToggle",componentId:"sc-x1mdpa-3"})(["position:absolute;left:0;border:0;font-size:2.4rem;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;}"]),x=Object(m.a)(f.b).withConfig({displayName:"styles__CartIconWrapper",componentId:"sc-x1mdpa-4"})(["color:black;position:absolute;right:0;&:hover{cursor:pointer;}"]),O=Object(m.a)(d.a).withConfig({displayName:"styles__CartIcon",componentId:"sc-x1mdpa-5"})(["font-size:2.4rem;user-select:none;"]),v=m.a.span.withConfig({displayName:"styles__CartIconItemsCount",componentId:"sc-x1mdpa-6"})(["font-size:1.2rem;padding:0.4rem;position:absolute;right:-0.8rem;top:-0.8rem;background-color:white;display:flex;align-items:center;justify-content:center;min-width:2rem;height:2rem;border-radius:2.5rem;border:0.1rem solid black;user-select:none;"]),k=m.a.nav.withConfig({displayName:"styles__Menu",componentId:"sc-x1mdpa-7"})(["position:absolute;top:100%;background-color:white;left:0;right:0;border-bottom:0.1rem solid lightgray;"]),C=Object(m.a)(f.b).withConfig({displayName:"styles__MenuItem",componentId:"sc-x1mdpa-8"})(["display:block;color:black;text-decoration:none;text-align:center;padding:1.6rem 0;font-weight:bold;"]),w=n(5),I=n(18),_=n(9),N=n(38),S=Object(_.c)({selectId:function(e){return e.clothingId}}),z=S.getInitialState(),T=Object(_.d)({name:"cart",initialState:z,reducers:{itemAdded:function(e,t){var n=t.payload;e.entities[n]?e.entities[n].quantity++:S.addOne(e,{clothingId:n,quantity:1})},itemRemoved:function(e,t){var n=t.payload;1!==e.entities[n].quantity?e.entities[n].quantity--:S.removeOne(e,n)}}}),E=S.getSelectors((function(e){return e.cart})).selectAll,q=Object(N.a)(E,(function(e){var t=0;return e.forEach((function(e){t+=e.quantity})),t})),F=T.actions,D=F.itemAdded,M=F.itemRemoved,B=Object(N.a)(E,(function(e){return e.clothes.entities}),(function(e,t){var n=0;return e.forEach((function(e){t[e.clothingId]&&(n=e.quantity*t[e.clothingId].priceInDollarCents+n)})),n})),A=function(e){return function(t){t(D(e))}},U=T.reducer,P=n(0),W=function(e){return!e},L=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(w.b)(),o=Object(w.c)(I.e),i=Object(w.c)(q),s=function(){return r(!1)};return Object(P.jsxs)(b,{children:[Object(P.jsx)(p.a,{children:Object(P.jsxs)(j,{children:[Object(P.jsx)(g,{children:"xclothes"}),Object(P.jsx)(y,{"aria-label":"showMenu",onClick:function(){return r(W)},children:Object(P.jsx)(d.a,{icon:u.a})}),Object(P.jsxs)(x,{to:h.checkout,children:[Object(P.jsx)(O,{icon:u.b}),Object(P.jsx)(v,{children:i})]})]})}),n&&Object(P.jsx)(k,{children:Object(P.jsx)(p.a,{children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)(C,{to:h.home,onClick:s,children:"Home"})}),Object(P.jsx)("li",{children:o.token?Object(P.jsx)(C,{onClick:function(){s(),c(Object(I.c)())},to:h.home,children:"Logout"}):Object(P.jsx)(C,{onClick:s,to:h.login,children:"Login"})})]})})})]})},R=n(7),H=Object(m.a)(f.b).withConfig({displayName:"styles__StyledClothingCategory",componentId:"sc-v6g0bh-0"})(["border:0.1rem solid gray;overflow:hidden;border-radius:1.6rem;"]),J=m.a.img.withConfig({displayName:"styles__StyledImg",componentId:"sc-v6g0bh-1"})(["width:100%;max-height:300px;object-fit:cover;"]),$=m.a.figure.withConfig({displayName:"styles__StyledFigure",componentId:"sc-v6g0bh-2"})(["position:relative;"]),K=m.a.figcaption.withConfig({displayName:"styles__StyledFigCaption",componentId:"sc-v6g0bh-3"})(["position:absolute;display:flex;justify-content:center;align-items:center;color:white;top:0;bottom:0;left:0;right:0;font-size:3.2rem;font-weight:bold;"]),Q=function(e){var t=e.image,n=e.to,r=e.alt,c=e.text;return Object(P.jsx)(H,{to:n,children:Object(P.jsxs)($,{children:[Object(P.jsx)(J,{src:t,alt:r}),Object(P.jsx)(K,{children:c})]})})},Z=m.a.div.withConfig({displayName:"styles__StyledHome",componentId:"sc-1tjbxcl-0"})(["padding-top:1.6rem;display:flex;flex-direction:column;list-style:none;gap:1.6rem;"]),X=m.a.p.withConfig({displayName:"styles__SuccessfulMessage",componentId:"sc-1tjbxcl-1"})(["color:green;font-size:1.6rem;font-weight:bold;"]),G=n.p+"static/media/hats.78889842.jpg",V=n.p+"static/media/jackets.dbb445ff.jpg",Y=n.p+"static/media/sneakers.73639ffd.jpg",ee=n(4),te=n.n(ee),ne=n(30),re=n(8),ce=n(19),ae=n.n(ce),oe=n(17),ie=function(){var e=Object(re.a)(te.a.mark((function e(t,n,r,c,a){var o,i;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.createPaymentMethod({type:"card",card:n.getElement(r)});case 2:return o=e.sent,i=o.paymentMethod,e.prev=4,e.next=7,ae.a.post("".concat(oe.a,"/create-payment-intent"),Object(ne.a)({paymentMethodId:i.id,checkoutItems:c},a));case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new Error(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n,r,c,a){return e.apply(this,arguments)}}(),se="idle",le="loading",de="succeeded",ue={paymentStatus:se,showCheckoutForm:!1},pe=Object(_.b)("payment/createPaymentIntent",(function(e,t){var n=e.stripe,r=e.elements,c=e.CardElement,a=e.formData,o=E(t.getState());return ie(n,r,c,o,a)})),he=Object(_.d)({initialState:ue,name:"payment",reducers:{paymentStatusUpdated:function(e,t){e.paymentStatus=t.payload},showCheckoutFormUpdated:function(e,t){e.showCheckoutForm=t.payload}},extraReducers:function(e){e.addCase(pe.pending,(function(e){e.paymentStatus=le})),e.addCase(pe.fulfilled,(function(e){e.paymentStatus=de,e.showCheckoutForm=!1})),e.addCase(pe.rejected,(function(e){e.paymentStatus="failed"}))}}),me=function(e){return e.payment.paymentStatus},fe=function(e){return e.payment.showCheckoutForm},be=he.actions,je=be.paymentStatusUpdated,ge=be.showCheckoutFormUpdated,ye=he.reducer,xe=m.a.div.withConfig({displayName:"styles__Modal",componentId:"sc-27i9k6-0"})(["position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:2;padding:0 1.6rem;background-color:rgba(0,0,0,0.8);"]),Oe=m.a.div.withConfig({displayName:"styles__Center",componentId:"sc-27i9k6-1"})(["position:relative;width:100rem;background-color:white;border-radius:1.6rem;border:0.1rem solid lightgray;padding-top:3.2rem;padding-bottom:1.6rem;"]),ve=m.a.button.withConfig({displayName:"styles__CloseButton",componentId:"sc-27i9k6-2"})(["display:flex;justify-content:center;align-items:center;position:absolute;border:none;top:0;padding-top:0.4rem;padding-right:0.8rem;font-size:1.6rem;right:0;&:hover{cursor:pointer;}"]),ke=function(e){var t=e.children,n=e.onClose;return Object(P.jsx)(xe,{children:Object(P.jsxs)(Oe,{children:[Object(P.jsx)(ve,{onClick:n,children:Object(P.jsx)(d.a,{icon:u.c})}),t]})})},Ce=function(){var e=Object(w.c)(me),t=Object(w.b)();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(p.a,{children:Object(P.jsxs)(Z,{children:[Object(P.jsx)(Q,{image:G,to:h.hats,alt:"hats",text:"HATS"}),Object(P.jsx)(Q,{image:V,to:h.jackets,alt:"jackets",text:"JACKETS"}),Object(P.jsx)(Q,{image:Y,to:h.sneakers,alt:"sneakers",text:"SNEAKERS"})]})}),e===de&&Object(P.jsx)(ke,{onClose:function(){t(je(se))},children:Object(P.jsx)(p.a,{children:Object(P.jsx)(X,{children:"Successful payment"})})})]})},we=n(44),Ie=m.a.p(r||(r=Object(we.a)(["\n  font-size: 3.2rem;\n  font-weight: bold;\n  padding-top: 1.6rem;\n"]))),_e=m.a.div(c||(c=Object(we.a)(["\n  padding-top: 1.6rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.6rem;\n"]))),Ne=n(20),Se=function(){var e=Object(re.a)(te.a.mark((function e(t){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.a.get("".concat(Ne.b,"/").concat(t,"/clothes"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(re.a)(te.a.mark((function e(t){var n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.a.get("".concat(Ne.a,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Te=Object(_.c)(),Ee=Te.getInitialState(),qe=Object(_.b)("clothes/fetchClothesByCategory",(function(e){return Se(e)})),Fe=Object(_.b)("clothes/fetchClothingById",(function(e){return ze(e)})),De=Object(_.d)({name:"clothes",initialState:Ee,extraReducers:function(e){e.addCase(qe.fulfilled,(function(e,t){Te.upsertMany(e,t.payload)})),e.addCase(Fe.fulfilled,(function(e,t){Te.upsertOne(e,t.payload)}))}}),Me=Te.getSelectors((function(e){return e.clothes})),Be=Me.selectAll,Ae=Me.selectById,Ue=function(e){return Object(N.a)(function(e){return Object(N.a)(Be,(function(t){return t.filter((function(t){return t.category===e}))}))}(e),(function(e){return e.map((function(e){return e.id}))}))},Pe=De.reducer,We=m.a.div.withConfig({displayName:"styles__StyledClothingItem",componentId:"sc-qultdk-0"})(["border:0.1rem solid lightgrey;overflow:hidden;background-color:white;display:inline-flex;flex-direction:column;align-items:center;border-radius:1.6rem;justify-content:space-between;"]),Le=m.a.img.withConfig({displayName:"styles__StyledImg",componentId:"sc-qultdk-1"})(["width:100%;max-height:30rem;object-fit:scale-down;"]),Re=m.a.div.withConfig({displayName:"styles__Content",componentId:"sc-qultdk-2"})(["display:inline-flex;flex-direction:column;padding:0 1.6rem 1.6rem;"]),He=m.a.p.withConfig({displayName:"styles__Name",componentId:"sc-qultdk-3"})(["font-size:1.6rem;text-align:center;"]),Je=m.a.p.withConfig({displayName:"styles__Price",componentId:"sc-qultdk-4"})(["font-size:1.6rem;text-align:center;"]),$e=m.a.button.withConfig({displayName:"styles__Button",componentId:"sc-qultdk-5"})(["font-size:1.6rem;text-align:center;background-color:midnightblue;color:white;padding:0.8rem;border-radius:1.6rem;margin-top:1.6rem;&:hover{cursor:pointer;}"]),Ke=function(e){var t=e.clothingId,n=Object(w.c)((function(e){return Ae(e,t)})),r=Object(w.b)();return Object(P.jsxs)(We,{children:[Object(P.jsx)(Le,{src:n.image,alt:""}),Object(P.jsxs)(Re,{children:[Object(P.jsx)(He,{children:n.name}),Object(P.jsx)(Je,{children:"$".concat(n.priceInDollarCents/100)}),Object(P.jsx)($e,{onClick:function(){r(A(t))},children:"Add to cart"})]})]})},Qe=function(e){var t=e.sectionTitle,n=e.clothingCategoyId,r=Object(w.b)(),c=Object(w.c)(Ue(n));return Object(a.useEffect)((function(){r(qe(n))}),[r,n]),Object(P.jsxs)(p.a,{children:[Object(P.jsx)(Ie,{children:t}),Object(P.jsx)(_e,{children:c.map((function(e){return Object(P.jsx)(Ke,{clothingId:e},e)}))})]})},Ze="6.4rem",Xe=m.a.div.withConfig({displayName:"styles__StyledTotalCheckout",componentId:"sc-55cz3t-0"})(["position:fixed;bottom:0;background-color:rgba(255,255,255,0.8);left:0;right:0;height:",";border-top:0.1rem solid lightgray;"],Ze),Ge=m.a.div.withConfig({displayName:"styles__TotalCheckoutWrapper",componentId:"sc-55cz3t-1"})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:",";"],Ze),Ve=m.a.p.withConfig({displayName:"styles__Total",componentId:"sc-55cz3t-2"})(["font-size:2.4rem;font-weight:bold;"]),Ye=m.a.div.withConfig({displayName:"styles__StyledCheckout",componentId:"sc-6ge3nz-0"})(["padding-top:3.2rem;padding-bottom:calc("," + 1.6rem);"],Ze),et=m.a.div.withConfig({displayName:"styles__CheckoutWrapper",componentId:"sc-6ge3nz-1"})(["display:flex;flex-direction:column;gap:1.6rem;"]),tt=m.a.div.withConfig({displayName:"styles__StyledCheckoutItem",componentId:"sc-1phdz21-0"})(["background-color:white;border:0.1rem solid lightgray;border-radius:1.6rem;display:grid;grid-template-columns:12rem auto 12rem;height:12rem;overflow:hidden;gap:1.6rem;"]),nt=m.a.div.withConfig({displayName:"styles__CheckoutItemImgWrapper",componentId:"sc-1phdz21-1"})(["display:flex;justify-content:center;overflow:hidden;height:100%;"]),rt=m.a.img.withConfig({displayName:"styles__CheckoutItemImg",componentId:"sc-1phdz21-2"})([""]),ct=m.a.div.withConfig({displayName:"styles__CheckoutInfo",componentId:"sc-1phdz21-3"})(["display:flex;flex-direction:column;justify-content:center;"]),at=m.a.div.withConfig({displayName:"styles__CheckoutQuantityWrapper",componentId:"sc-1phdz21-4"})(["display:inline-flex;flex-direction:column;align-items:flex-end;justify-content:center;padding-right:1.6rem;"]),ot=m.a.div.withConfig({displayName:"styles__CheckoutQuantity",componentId:"sc-1phdz21-5"})(["display:flex;flex-direction:column;align-items:center;"]),it=m.a.p.withConfig({displayName:"styles__CheckoutDescription",componentId:"sc-1phdz21-6"})(["font-size:1.4rem;"]),st=m.a.p.withConfig({displayName:"styles__CheckoutPrice",componentId:"sc-1phdz21-7"})(["font-size:1.6rem;font-weight:bold;"]),lt=m.a.span.withConfig({displayName:"styles__Sign",componentId:"sc-1phdz21-8"})(["padding:0 0.8rem;width:2.4rem;height:2.4rem;display:flex;justify-content:center;align-items:center;font-size:1.6rem;user-select:none;&:hover{cursor:pointer;}"]),dt=m.a.span.withConfig({displayName:"styles__Count",componentId:"sc-1phdz21-9"})(["font-size:1.6rem;"]),ut=function(e){var t=e.clothingId,n=e.quantity,r=Object(w.b)();Object(a.useEffect)((function(){r(Fe(t))}),[r,t]);var c,o=Object(w.c)((function(e){return Ae(e,t)}));return o?Object(P.jsxs)(tt,{children:[Object(P.jsx)(nt,{children:Object(P.jsx)(rt,{src:o.image})}),Object(P.jsxs)(ct,{children:[Object(P.jsx)(it,{children:o.name}),Object(P.jsx)(st,{children:"$".concat((c=o.priceInDollarCents,c/100))})]}),Object(P.jsx)(at,{children:Object(P.jsxs)(ot,{children:[Object(P.jsx)(lt,{onClick:function(){r(A(t))},children:"+"}),Object(P.jsx)(dt,{children:n}),Object(P.jsx)(lt,{onClick:function(){r(function(e){return function(t){t(M(e))}}(t))},children:"-"})]})})]}):null},pt=n(31),ht=n(24),mt=n(60),ft=n(36),bt=m.a.form.withConfig({displayName:"styles__Content",componentId:"sc-ps9n8z-0"})(["display:flex;flex-direction:column;gap:0.8rem;font-size:1.6rem;"]),jt=n(27),gt=function(){var e=Object(R.g)(),t=Object(ht.useStripe)(),n=Object(ht.useElements)(),r=Object(a.useState)({email:oe.b()?"test@email.com":"",name:oe.b()?"test":"",address:oe.b()?"naranjal":"",city:oe.b()?"lima":"",country:oe.b()?"Pery":""}),c=Object(l.a)(r,2),o=c[0],i=c[1],s=Object(w.b)(),d=Object(w.c)(me),u=function(){var r=Object(re.a)(te.a.mark((function r(c){return te.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c.preventDefault(),s(pe({stripe:t,elements:n,CardElement:ht.CardElement,formData:o})).then((function(){e.push(h.home)}));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(e){i((function(t){return Object(ne.a)(Object(ne.a)({},t),{},Object(ft.a)({},e.target.name,e.target.value))}))};return Object(P.jsx)(ke,{onClose:function(){s(ge(!1))},children:Object(P.jsx)(p.a,{children:Object(P.jsxs)(bt,{onSubmit:u,children:[Object(P.jsx)(ht.CardElement,{}),Object(P.jsx)(jt.a,{onChange:m,required:!0,value:o.email,label:"Email",type:"email",name:"email"}),Object(P.jsx)(jt.a,{onChange:m,required:!0,value:o.name,label:"Name",name:"name"}),Object(P.jsx)(jt.a,{onChange:m,required:!0,value:o.address,label:"Address",name:"address"}),Object(P.jsx)(jt.a,{onChange:m,required:!0,value:o.city,label:"City",name:"city"}),Object(P.jsx)(jt.a,{onChange:m,required:!0,value:o.country,label:"Country",name:"country"}),d===le?Object(P.jsx)(pt.a,{disabled:!0,type:"submit",children:"Loading..."}):Object(P.jsx)(pt.a,{type:"submit",children:"Pay"})]})})})},yt=n(61),xt=n(62),Ot=n(66),vt=n(65),kt=document.getElementById("modal-root"),Ct=function(e){Object(Ot.a)(n,e);var t=Object(vt.a)(n);function n(e){var r;return Object(yt.a)(this,n),(r=t.call(this,e)).el=document.createElement("div"),r}return Object(xt.a)(n,[{key:"componentDidMount",value:function(){kt.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){kt.removeChild(this.el)}},{key:"render",value:function(){return s.a.createPortal(this.props.children,this.el)}}]),n}(o.a.Component),wt=Object(mt.a)("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL"),It=function(){var e=Object(w.c)(B),t=Object(w.c)(fe),n=Object(w.b)();return e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Xe,{children:Object(P.jsx)(p.a,{children:Object(P.jsxs)(Ge,{children:[Object(P.jsx)(pt.a,{onClick:function(){n(ge(!0))},children:"Checkout"}),Object(P.jsxs)(Ve,{children:[Object(P.jsx)("span",{children:"$"}),e/100]})]})})}),t&&Object(P.jsx)(Ct,{children:Object(P.jsx)(ht.Elements,{stripe:wt,children:Object(P.jsx)(gt,{})})})]}):null},_t=function(){var e=Object(w.c)(E);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Ye,{children:Object(P.jsx)(p.a,{children:Object(P.jsx)(et,{children:e.map((function(e){return Object(P.jsx)(ut,{clothingId:e.clothingId,quantity:e.quantity},e.clothingId)}))})})}),Object(P.jsx)(It,{})]})},Nt=(n(102),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,107))}))),St=function(){var e=Object(w.c)(I.e),t=Object(w.b)();return Object(a.useEffect)((function(){t(Object(I.d)())}),[t]),Object(P.jsx)("div",{className:"app",children:Object(P.jsxs)(f.a,{children:[Object(P.jsx)(L,{}),Object(P.jsx)(a.Suspense,{fallback:null,children:Object(P.jsxs)(R.d,{children:[Object(P.jsx)(R.b,{exact:!0,path:h.login,children:e.token?Object(P.jsx)(R.a,{to:h.home}):Object(P.jsx)(Nt,{})}),Object(P.jsx)(R.b,{exact:!0,path:h.home,children:Object(P.jsx)(Ce,{})}),Object(P.jsx)(R.b,{exact:!0,path:h.hats,children:Object(P.jsx)(Qe,{sectionTitle:"Hats",clothingCategoyId:"6195f67407f9ec275e4e73f6"})}),Object(P.jsx)(R.b,{exact:!0,path:h.jackets,children:Object(P.jsx)(Qe,{sectionTitle:"Jackets",clothingCategoyId:"6195f67407f9ec275e4e73fd"})}),Object(P.jsx)(R.b,{exact:!0,path:h.sneakers,children:Object(P.jsx)(Qe,{sectionTitle:"Sneakers",clothingCategoyId:"6195f67407f9ec275e4e73d8"})}),Object(P.jsx)(R.b,{exact:!0,path:h.checkout,children:Object(P.jsx)(_t,{})})]})})]})})},zt=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,106)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},Tt=n(11),Et=n(63),qt=n.n(Et),Ft=n(45),Dt=Object(Tt.b)({user:I.a,clothes:Pe,cart:U,payment:ye}),Mt={key:"root",storage:qt.a,whitelist:["cart"]},Bt=Object(Ft.a)(Mt,Dt),At=function(){var e=Object(_.a)({reducer:Bt});return{store:e,persistor:Object(Ft.b)(e)}},Ut=n(28),Pt=n(64),Wt=At(),Lt=Wt.store,Rt=Wt.persistor;Object(Ut.b)(Lt),s.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(w.a,{store:Lt,children:Object(P.jsx)(Pt.a,{loading:null,persistor:Rt,children:Object(P.jsx)(St,{})})})}),document.getElementById("root")),zt()},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(){return!1},c=r()?"http://localhost:4000":"https://xclothes-backend.herokuapp.com"},18:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(4),c=n.n(r),a=n(8),o=n(9),i=n(39),s=Object(o.b)("user/logInUser",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b(t.email,t.password);case 2:return r=e.sent,n.dispatch(p(Date.now())),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(o.b)("user/refreshAccessToken",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c();case 2:return r=e.sent,n.dispatch(p(Date.now())),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.b)("user/logOutUser",Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.d());case 1:case"end":return e.stop()}}),e)})))),u=Object(o.d)({name:"user",initialState:{currentUser:{name:null,email:null,id:null},accessToken:{obtainingDate:null,token:null,secondsToExpire:null},loginErrorMessage:null},reducers:{accessTokenObtainingDateUpdated:function(e,t){var n=t.payload;e.accessToken.obtainingDate=n},accessTokenRefreshed:function(e,t){var n=t.payload,r=n.accessToken,c=n.user;e.accessToken.token=r.token,e.accessToken.secondsToExpire=r.secondsToExpire,e.currentUser=c}},extraReducers:function(e){e.addCase(s.fulfilled,(function(e,t){var n=t.payload,r=n.user,c=n.accessToken;e.loginErrorMessage=null,e.currentUser=r,e.accessToken.token=c.token,e.accessToken.secondsToExpire=c.secondsToExpire})),e.addCase(s.rejected,(function(e){e.loginErrorMessage="Incorrect email or password"})),e.addCase(l.fulfilled,(function(e,t){var n=t.payload,r=n.accessToken,c=n.user;e.accessToken.token=r.token,e.accessToken.secondsToExpire=r.secondsToExpire,e.currentUser=c})),e.addCase(d.fulfilled,(function(e){e.accessToken.token=null}))}}),p=u.actions.accessTokenObtainingDateUpdated,h=(u.actions.accessTokenRefreshed,function(e){return e.user.accessToken}),m=function(e){return e.user.loginErrorMessage},f=function(){return d()},b=function(e){return s(e)},j=function(){return l()};t.a=u.reducer},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(17),c="".concat(r.a,"/users"),a="".concat(r.a,"/clothing-categories"),o="".concat(r.a,"/clothes")},27:function(e,t,n){"use strict";var r=n(2),c=r.a.div.withConfig({displayName:"styles__FormItemWrapper",componentId:"sc-1jrtjph-0"})(["display:flex;flex-direction:column;gap:0.8rem;"]),a=r.a.label.withConfig({displayName:"styles__FormItemLabel",componentId:"sc-1jrtjph-1"})(["font-size:1.6rem;font-weight:bold;margin-left:0.8rem;color:midnightblue;"]),o=r.a.input.withConfig({displayName:"styles__FormItemInput",componentId:"sc-1jrtjph-2"})(["font-size:1.6rem;border-radius:1.6rem;padding:0.8rem;border-color:transparent;background-color:white;"]),i=n(0);t.a=function(e){var t=e.label,n=e.id,r=e.name,s=e.type,l=e.value,d=e.onChange,u=e.required;return Object(i.jsxs)(c,{children:[Object(i.jsx)(a,{htmlFor:n,children:t}),Object(i.jsx)(o,{name:r,type:s,id:n,value:l,onChange:d,required:u})]})}},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return m}));var r,c=n(4),a=n.n(c),o=n(8),i=n(19),s=n.n(i),l=n(59),d=n.n(l),u=n(18),p=s.a.create(),h=function(e){return d()().diff(e.obtainingDate,"seconds")>=e.secondsToExpire};p.interceptors.request.use(function(){var e=Object(o.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(c=null===(n=r.getState().user)||void 0===n?void 0:n.accessToken)||void 0===c?void 0:c.token){e.next=3;break}return e.abrupt("return",t);case 3:if(t.headers.Authorization="Bearer ".concat(r.getState().user.accessToken.token),h(c)){e.next=6;break}return e.abrupt("return",t);case 6:return e.next=8,r.dispatch(Object(u.d)());case 8:return t.headers.Authorization="Bearer ".concat(r.getState().user.accessToken.token),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)}));var m=function(e){r=e};t.a=p},31:function(e,t,n){"use strict";var r=n(2).a.button.withConfig({displayName:"styles__WrappedButton",componentId:"sc-16yxtj-0"})(["font-size:1.6rem;color:white;background-color:midnightblue;border-radius:1.6rem;padding:1rem 1.6rem;&:hover{cursor:pointer;}&:disabled{cursor:wait;background-color:royalblue;}"]),c=n(0);t.a=function(e){var t=e.children,n=e.type,a=e.onClick,o=e.disabled;return Object(c.jsx)(r,{type:n,onClick:a,disabled:o,children:t})}},39:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return h}));var r=n(4),c=n.n(r),a=n(8),o=n(19),i=n.n(o),s=n(20),l=n(28),d=function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.from("".concat(n,":").concat(r)).toString("base64"),t.prev=1,t.next=4,l.a.post("".concat(s.c,"/access-token"),null,{withCredentials:!0,headers:{Authorization:"Basic ".concat(a)}});case 4:return o=t.sent,t.abrupt("return",o.data);case 8:throw t.prev=8,t.t0=t.catch(1),new Error(t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(s.c),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("".concat(s.c,"/refresh-access-token"),null,{withCredentials:!0});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(s.c,"/revoke-refresh-token"),null,{withCredentials:!0});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()}).call(this,n(80).Buffer)},71:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.15e9005d.chunk.js.map