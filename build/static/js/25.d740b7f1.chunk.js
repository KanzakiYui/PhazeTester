(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{180:function(e,t,a){"use strict";t.a=function(e,t){var a;return t=t||200,function(n){a&&clearTimeout(a),a=setTimeout(e,t,n)}}},487:function(e,t,a){},639:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),o=a(12),l=a(11),s=a(13),c=a(0),i=a.n(c),p=(a(487),a(91)),u=a(14),m=a.n(u),f=a(150),d=a(180),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).ScrollLoad=function(e){e.currentTarget.addEventListener("scroll",Object(d.a)(a.Scroll,500))},a.Scroll=function(e){for(var t=e.target.getBoundingClientRect().left,n=e.target.querySelectorAll("img"),r=Array.from(n),o=-1,l=0;l<r.length;l++)if(r[l].getBoundingClientRect().left+r[l].offsetWidth-t>0){o=l;break}-1!==o&&a.setState({price:a.props.brandInfo.array[o]})},a.InputChange=function(e){var t=e.target.value;if(/^[0-9]+$/.test(t)||""===t){var n=a.props.brandInfo.min,r=a.props.brandInfo.max;a.setState({price:t,priceError:Number(t)>r||Number(t)<n})}},a.Confirm=function(){if(!a.state.priceError){var e=Number(a.state.price),t=1.02*e,n=a.state.apply?Math.min(a.props.promoInfo.amount,t*a.props.promoInfo.rate):0,r={name:a.props.brandInfo.name,code:a.props.brandInfo.code,country:a.props.brandInfo.country,price:e,apply:a.state.apply,promo:a.props.promoInfo.code,total:Number((t-n).toFixed(2))};a.props.ConfirmAmount(r)}},a.state={type:null,price:0,apply:!1,openNote:!1,priceError:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.brandInfo?(window.scrollTo({top:0,left:0,behavior:"smooth"}),this.setState({type:this.props.brandInfo.array?0:1,price:this.props.brandInfo.array?this.props.brandInfo.array[0]:""})):this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this;if(!this.props.brandInfo)return null;var t=Number(this.state.price),a=1.02*t,n=a*this.props.promoInfo.rate,r=this.props.promoInfo.amount;n=Math.min(r,n),this.state.apply&&(a-=n);var o=f.a[f.b[this.props.brandInfo.country]],l=null,s=null;if(0===this.state.type){var c=this.props.brandInfo.array.map(function(t,a){return i.a.createElement(p.a,{key:a,urlpath:e.props.brandInfo.code})});l=i.a.createElement("div",{onLoad:function(t){return e.ScrollLoad(t)},className:"Denomination-Content"},c),s=i.a.createElement("span",null,"$",t.toFixed(2))}else{l=i.a.createElement("div",{className:"Range-Content"},i.a.createElement(p.a,{urlpath:this.props.brandInfo.code}));var u=this.props.brandInfo.min+"~"+this.props.brandInfo.max;s=i.a.createElement("div",{className:"Range-Input"},"$",i.a.createElement("input",{className:this.state.priceError?"Error":"",type:"text",onChange:function(t){return e.InputChange(t)},value:this.state.price,placeholder:u}),".00 ",this.state.priceError?i.a.createElement("p",{className:"Error"},"only "+u+" is allowed"):null)}return i.a.createElement("div",{id:"Payment"},i.a.createElement("div",{id:"Payment-Background"}),i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("/dashboard")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," SHOP"),i.a.createElement("p",{className:"Title"},this.props.brandInfo.name),l,i.a.createElement("div",{className:"DetailPanel"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-money-bill"}),i.a.createElement("span",null),s),i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-hand-holding-usd"}),i.a.createElement("span",null,"(+)"),i.a.createElement("span",null,"$",(.02*t).toFixed(2))),i.a.createElement("div",{className:this.state.apply?"Apply":""},i.a.createElement("i",null,i.a.createElement("img",{src:m.a,alt:""})),i.a.createElement("span",null,"(-)"),i.a.createElement("span",null,i.a.createElement("i",{className:"fas fa-exclamation-circle",onClick:function(){return e.setState({openNote:!0})}}),"$",n.toFixed(2)),this.state.apply?i.a.createElement("button",{className:"Apply"},i.a.createElement("i",{className:"fas fa-check"}),"Applied"):i.a.createElement("button",{onClick:function(){return e.setState({apply:!0})}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"}),"Apply"))),i.a.createElement("div",{className:"Total"},i.a.createElement("span",null,"Total"),i.a.createElement("span",null,"$",a.toFixed(2)," ",i.a.createElement("small",null,o))),i.a.createElement("button",{onClick:function(){return e.props.history.push("/dashboard")},className:"button-2 Goback"},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})),i.a.createElement("button",{className:"button-2 Confirm",onClick:this.Confirm},"confirm",i.a.createElement("i",{className:"fas fa-arrow-right"})),this.state.openNote?i.a.createElement("div",{id:"Payment-CreditNote"},i.a.createElement("i",{className:"fas fa-times",onClick:function(){return e.setState({openNote:!1})}})):null)}}]),t}(i.a.Component);t.default=h},91:function(e,t,a){"use strict";var n=a(9),r=a(10),o=a(12),l=a(11),s=a(13),c=a(0),i=a.n(c),p=(a(92),function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(l.a)(t).call(this,e))).GetURL=function(){a(94)("./"+r.props.urlpath+".png").then(function(e){return r.setState({urlpath:r.props.urlpath,url:e.default})}).catch(r.GetPlaceHolder)},r.GetPlaceHolder=function(){a.e(1).then(a.t.bind(null,86,7)).then(function(e){return r.setState({urlpath:r.props.urlpath,url:e.default})}).catch(function(){})},r.state={urlpath:null,url:null},r}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.GetURL()}},{key:"componentDidUpdate",value:function(){this.props.urlpath!==this.state.urlpath&&this.GetURL()}},{key:"render",value:function(){return i.a.createElement("img",{"data-value":this.props.urlpath,className:"GiftCard-Simple",src:this.state.url,alt:""})}}]),t}(i.a.Component));t.a=p},92:function(e,t,a){},94:function(e,t,a){var n={"./aircanada.png":[119,9],"./amazonca.png":[120,10],"./amazonus.png":[121,11],"./americanairlines.png":[122,12],"./bestbuy.png":[123,13],"./blank.png":[86,1],"./cineplex.png":[124,14],"./keg.png":[125,15],"./milestones.png":[126,16],"./montanas.png":[127,17],"./sephora.png":[128,18],"./starbucksca.png":[129,19],"./starbucksus.png":[130,20],"./walmart.png":[131,21]};function r(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(n)},r.id=94,e.exports=r}}]);
//# sourceMappingURL=25.d740b7f1.chunk.js.map