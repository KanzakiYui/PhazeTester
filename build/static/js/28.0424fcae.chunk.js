(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{635:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),o=n(12),l=n(11),s=n(13),c=n(0),i=n.n(c),p=(n(636),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=100*this.props.promoInfo.rate;return t=t.toFixed(2)+"%",i.a.createElement("div",{id:"Account"},i.a.createElement("p",{className:"Title"},"Profile"),i.a.createElement("div",{className:"General-Info"},i.a.createElement("p",null,"Email"),i.a.createElement("p",null,this.props.username),i.a.createElement("p",null,"Identity"),i.a.createElement("p",null,this.props.kycCountry?this.props.kycCountry:"Unverified"),i.a.createElement("p",null,"Phaze Promo Code"),i.a.createElement("p",null,this.props.promoInfo.code),i.a.createElement("p",null,"Applicable Rate"),i.a.createElement("p",null,t)),this.props.kycCountry?null:i.a.createElement("button",{className:"button-1",onClick:function(){return e.props.history.push("identity")}},"Verify Your Identity",i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("button",{className:"button-2",onClick:function(){return e.props.history.push("changepassword")}},"Change Password",i.a.createElement("i",{className:"fas fa-arrow-right"})),i.a.createElement("button",{className:"button-2",onClick:function(){return e.props.history.push("orderhistory")}},"View Order History",i.a.createElement("i",{className:"fas fa-arrow-right"})))}}]),t}(i.a.Component));t.default=p},636:function(e,t,n){}}]);
//# sourceMappingURL=28.0424fcae.chunk.js.map