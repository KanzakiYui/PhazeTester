(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{190:function(e,t,n){"use strict";var a=n(9),r=n(10),s=n(12),p=n(11),o=n(13),l=n(0),i=n.n(l),c=(n(191),function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(s.a)(this,Object(p.a)(t).call(this,e))).GetURL=function(){n(193)("./"+r.props.urlpath+".png").then(function(e){return r.setState({urlpath:r.props.urlpath,url:e.default})}).catch(r.GetPlaceHolder)},r.GetPlaceHolder=function(){n.e(2).then(n.t.bind(null,152,7)).then(function(e){return r.setState({urlpath:r.props.urlpath,url:e.default})}).catch(function(){})},r.state={urlpath:null,url:null},r}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.GetURL()}},{key:"componentDidUpdate",value:function(){this.props.urlpath!==this.state.urlpath&&this.GetURL()}},{key:"render",value:function(){switch(this.props.type){case 0:return i.a.createElement("img",{src:this.state.url,alt:""});default:return i.a.createElement("div",{"data-value":this.props.urlpath,className:"GiftLogo-Simple"},i.a.createElement("img",{src:this.state.url,alt:""}))}}}]),t}(i.a.Component));t.a=c},191:function(e,t,n){},193:function(e,t,n){var a={"./1800baskets.png":[262,36],"./1800flowers.png":[263,37],"./1800petsupplies.png":[264,38],"./abercrombie.png":[265,39],"./adidas.png":[266,40],"./aeca.png":[267,41],"./aerieca.png":[268,42],"./aerieus.png":[269,43],"./aeropostale.png":[270,44],"./aeusa.png":[271,45],"./aircanada.png":[272,46],"./amazonca.png":[273,47],"./amazonus.png":[274,48],"./amctheatres.png":[275,49],"./americanairlines.png":[276,50],"./applebees.png":[277,51],"./applemusic.png":[278,52],"./athleta.png":[279,53],"./babygap.png":[280,54],"./bananarepca.png":[281,55],"./bananarepus.png":[282,56],"./barnesandnoble.png":[283,57],"./bassproshops.png":[284,58],"./bedbathandbeyond.png":[285,59],"./bestbuy.png":[286,60],"./blank.png":[152,2],"./bubbagump.png":[287,61],"./bucadibeppo.png":[288,62],"./buildabear.png":[289,63],"./cabelas.png":[290,64],"./callaway.png":[291,65],"./caseys.png":[292,66],"./charitychoice.png":[293,67],"./charthouse.png":[294,68],"./chefd.png":[295,69],"./cheryls.png":[296,70],"./chilis.png":[297,71],"./cineplex.png":[298,72],"./claimjumper.png":[299,73],"./columbia.png":[300,74],"./crutchfield.png":[301,75],"./cvs.png":[302,76],"./delta.png":[303,77],"./destinationmaternity.png":[304,78],"./dominos.png":[305,79],"./dunkindonuts.png":[306,80],"./eastsidemarios.png":[307,81],"./ebay1.png":[308,82],"./express.png":[309,83],"./footlocker.png":[310,84],"./fragrancenet.png":[311,85],"./fruitbouquets.png":[312,86],"./gamestop.png":[313,87],"./ganz.png":[314,88],"./gapca.png":[315,89],"./gapus.png":[316,90],"./globalhotelus.png":[317,91],"./golfthere.png":[318,92],"./goplaygolf.png":[319,93],"./greatamericandays.png":[320,94],"./grouponca.png":[321,95],"./grouponcawhite.png":[322,96],"./grouponus.png":[323,97],"./harveys.png":[324,98],"./hollister.png":[325,99],"./homedepot.png":[326,100],"./hotels.png":[327,101],"./ihop.png":[328,102],"./indego.png":[329,103],"./indigo.png":[330,104],"./itunesca.png":[331,105],"./itunesus.png":[332,106],"./jcpenny.png":[333,107],"./jiggylube.png":[334,108],"./karmakoin.png":[335,109],"./keg.png":[336,110],"./kelseys.png":[337,111],"./kernels.png":[338,112],"./kmart.png":[339,113],"./kobo.png":[340,114],"./kohls.png":[341,115],"./lobstergram.png":[342,116],"./lowes.png":[343,117],"./magazines.png":[344,118],"./maggianos.png":[345,119],"./mccormickschmick.png":[346,120],"./milestones.png":[347,121],"./montanas.png":[348,122],"./mortons.png":[349,123],"./nexonkarmakoin.png":[350,124],"./nike.png":[351,125],"./nordstrom.png":[352,126],"./office.png":[353,127],"./oldnavyca.png":[354,128],"./oldnavyus.png":[355,129],"./omahasteaks.png":[356,130],"./ontheborder.png":[357,131],"./overstock.png":[358,132],"./pandora.png":[359,133],"./papjohns.png":[360,134],"./playstationus.png":[361,135],"./proamgolf.png":[362,136],"./rainforestcafe.png":[363,137],"./reddoorspa.png":[364,138],"./redrobin.png":[365,139],"./regal.png":[366,140],"./rixty.png":[367,141],"./sears.png":[368,142],"./sephora.png":[369,143],"./spaweek.png":[370,144],"./staples.png":[371,145],"./starbucksca.png":[372,146],"./starbucksus.png":[373,147],"./steiner.png":[374,148],"./stubhub.png":[375,149],"./swisschalet.png":[376,150],"./target.png":[377,151],"./tjmaxx.png":[378,152],"./uber.png":[379,153],"./walmart.png":[380,154],"./wholefoods.png":[381,155],"./wine.png":[382,156],"./xbox.png":[383,157],"./zappos.png":[384,158]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=193,e.exports=r},643:function(e,t,n){},645:function(e,t,n){},662:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),s=n(12),p=n(11),o=n(13),l=n(0),i=n.n(l),c=(n(643),n(261)),g=n(83),u=(n(645),n(190)),m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={expand:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.info.currency,n=Number(this.props.info.price)/100,a=Number(this.props.info.fee)/100,r=Number(this.props.info.price_charged)/100,s=n+a-r,p=r/Number(this.props.info.price_crypto),o=this.props.info.link?"Link":"NoLink";return i.a.createElement("div",{className:"OrderSnippet"},i.a.createElement("div",{className:"GeneralInfo",onClick:function(){return e.setState({expand:!e.state.expand})}},i.a.createElement(u.a,{type:0,urlpath:this.props.info.brand}),i.a.createElement("div",null,i.a.createElement("p",null,"$",n.toFixed(2)),i.a.createElement("p",null,function(e){var t=e.split("-");return h[Number(t[1])-1]+" "+t[2]+", "+t[0]}(new Date(this.props.info.time).toLocaleDateString("en-ca")))),i.a.createElement("i",{className:"fas fa-angle-down"})),i.a.createElement("div",{className:"DetailInfo "+(this.state.expand?"Active":"")+" "+o},i.a.createElement("p",{className:"Line First"}),i.a.createElement("p",{className:"Time"},function(e){var t=e.split(" ");return t[1]=t[1].includes("p")?"PM":"AM",t[0]+t[1]}(new Date(this.props.info.time).toLocaleTimeString("en-ca"))),i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Fee(2%)"),i.a.createElement("p",null,"$",a.toFixed(2)," ",i.a.createElement("span",null,t))),i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Applied Credit"),i.a.createElement("p",null,"$",s.toFixed(2)," ",i.a.createElement("span",null,t))),i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Promo Code"),i.a.createElement("p",{className:"Promo"},this.props.info.promo_code?this.props.info.promo_code:i.a.createElement("span",null,"UNAVAILABLE"))),i.a.createElement("p",{className:"SubLine"}),i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Total"),i.a.createElement("p",null,"$",r.toFixed(2)," ",i.a.createElement("span",null,t))),i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null),i.a.createElement("p",null,this.props.info.price_crypto," ",i.a.createElement("span",null,this.props.info.crypto))),i.a.createElement("p",{className:"Rate"},"Exchange rate ",this.props.info.crypto," 1.00 = $",p.toFixed(2)," ",t),i.a.createElement("p",{className:"Line"}),i.a.createElement("br",null),this.props.info.link?i.a.createElement("a",{className:"Link",href:this.props.info.link,target:"_blank",rel:"noopener noreferrer"},"VIEW GIFT CARD"):null,this.props.info.code?i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Gift card code"),i.a.createElement("p",null,this.props.info.code)):null,this.props.info.pin?i.a.createElement("div",{className:"Inline-Amount"},i.a.createElement("p",null,"Gift card pin"),i.a.createElement("p",null,this.props.info.pin)):null,this.props.info.code||this.props.info.pin?i.a.createElement("a",{className:"Link",href:"https://www.google.ca",target:"_blank",rel:"noopener noreferrer"},"AUTOFILL GIFT CARD CODE"):null))}}]),t}(i.a.Component),h=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];var d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).FetchAllOrders=function(){Object(g.b)("users/list_txns/brand/ALL/crypto/ALL").then(function(e){var t=e.result.sort(function(e,t){return new Date(t.time).getTime()-new Date(e.time).getTime()});n.setState({data:t,showContent:!0,pageIndex:0,totalPage:Math.ceil(t.length/n.maxRecordsPerPage),prev:!1,next:t.length>n.maxRecordsPerPage})}).catch(function(){return n.props.push("/")})},n.Goto=function(e){n.setState({pageIndex:e,prev:0!==e,next:e!==n.state.totalPage-1})},n.maxRecordsPerPage=20,n.maxIndicators=5,n.state={showContent:!1,data:null,pageIndex:0,totalPage:1,prev:!1},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),this.FetchAllOrders()}},{key:"render",value:function(){var e=this;if(!this.state.showContent)return i.a.createElement(c.a,{type:"Oval",message:"Loading Data",color:"var(--color-red-normal)"});if(0===this.state.data.length)return i.a.createElement("div",{id:"OrderHistory"},i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("account")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," BACK"),i.a.createElement("p",{className:"Title"},"Order History"),i.a.createElement("p",{className:"Empty"},"You haven\u2019t purchased any gift cards yet."));var t,n,a=this.state.pageIndex*this.maxRecordsPerPage,r=a+this.maxRecordsPerPage,s=this.state.data.slice(a,r).map(function(e,t){return i.a.createElement(m,{key:t,info:e})}),p=Math.floor(this.maxIndicators/2);this.state.pageIndex-p<0?(t=0,n=Math.min(this.state.totalPage-1,t+this.maxIndicators-1)):this.state.pageIndex+p>this.state.totalPage-1?(t=Math.max(0,this.state.totalPage-this.maxIndicators),n=this.state.totalPage-1):(t=this.state.pageIndex-p,n=this.state.pageIndex+p);for(var o=[],l=function(t){o.push(i.a.createElement("span",{key:t,className:e.state.pageIndex===t?"Active":"",onClick:function(){return e.Goto(t)}},t+1))},g=t;g<=n;g++)l(g);return i.a.createElement("div",{id:"OrderHistory"},i.a.createElement("p",{className:"Goback",onClick:function(){return e.props.history.push("account")}},i.a.createElement("i",{className:"fas fa-long-arrow-alt-left"})," BACK"),i.a.createElement("p",{className:"Title"},"Order History"),i.a.createElement("div",{className:"Content"},s),i.a.createElement("div",{className:"Pagination"},i.a.createElement("p",{className:"Prev"},this.state.prev?i.a.createElement("i",{className:"fas fa-angle-left",onClick:function(){return e.Goto(e.state.pageIndex-1)}}):null),o,i.a.createElement("p",{className:"Next"},this.state.next?i.a.createElement("i",{className:"fas fa-angle-right",onClick:function(){return e.Goto(e.state.pageIndex+1)}}):null)))}}]),t}(i.a.Component);t.default=d}}]);
//# sourceMappingURL=31.90e45d7f.chunk.js.map