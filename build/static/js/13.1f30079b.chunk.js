(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{662:function(e,t,n){},676:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(50),o=n(52),c=n(51),i=n(53),s=n(0),u=n.n(s),p=(n(662),n(241)),l=n(226),d=n.n(l),m=n(197),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).Prev=function(){n.setState(function(e){return{pageIndex:e.pageIndex-1,prev:1!==e.pageIndex,next:!0}})},n.Next=function(){var e=Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage)-1;n.setState(function(t){return{pageIndex:t.pageIndex+1,prev:!0,next:t.pageIndex!==e-1}})},n.TouchStart=function(e){n.touchStartPos=e.touches[0].clientX,n.touchPos=e.touches[0].clientX},n.TouchMove=function(e){n.touchPos=e.touches[0].clientX},n.TouchEnd=function(){n.touchPos-n.touchStartPos<-100&&n.state.pageIndex<Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage)-1?n.Next():n.touchPos-n.touchStartPos>100&&n.state.pageIndex>0&&n.Prev()},n.JumpTo=function(){var e=Math.round(Number(document.getElementById("Shop-Jump-Content").querySelector("input").value));e=Math.max(e,1);var t=Math.ceil(n.props.brandInfo.length/n.props.itemsPerPage);e=Math.min(e,t),n.setState({pageIndex:e-1,openJumpBox:!1,prev:1!==e,next:e!==t})},n.ClickedCard=function(e){var t=e.target.closest("div.Card");t&&n.props.select(t.dataset.value)},n.featured=["amazonca","amazonus","starbucksca","starbucksus","keg","walmart","bestbuy","aircanada","americanairlines","cineplex","milestones","montanas","sephora"],n.state={pageIndex:0,prev:!1,next:n.props.brandInfo.length>n.props.itemsPerPage,openJumpBox:!1},n.touchStartPos=0,n.touchPos=0,n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.brandInfo.filter(function(t){return e.featured.includes(t.code)}).map(function(e,t){return u.a.createElement(p.a,{key:t,type:0,name:e.name,country:e.country,urlpath:e.code})}),n={centerMode:!0,centerPadding:this.props.itemsPerPage<5?"25%":"10%",dots:!1,arrows:!1,speed:500,slidesToShow:this.props.itemsPerPage<5?1:3,swipeToSlide:!0},a=this.state.prev?u.a.createElement("i",{className:"Pagination Left fas fa-arrow-circle-left",onClick:this.Prev}):null,r=this.state.next?u.a.createElement("i",{className:"Pagination Right fas fa-arrow-circle-right",onClick:this.Next}):null,o=this.props.brandInfo.slice(this.state.pageIndex*this.props.itemsPerPage,this.state.pageIndex*this.props.itemsPerPage+this.props.itemsPerPage).map(function(e,t){return u.a.createElement(p.a,{key:t,type:1,name:e.name,country:e.country,urlpath:e.code})}),c=u.a.createElement("div",{id:"Shop-Jump-Content"},"Navigate To ",u.a.createElement("input",{type:"number",min:"1",autoFocus:!0}),u.a.createElement("br",null),u.a.createElement("button",{className:"button-1",onClick:this.JumpTo},"Confirm"));return u.a.createElement("div",{id:"Shop-Grid"},u.a.createElement("div",{id:"Shop-Grid-Featured"},u.a.createElement("p",{className:"Title"},"Signatured"),u.a.createElement("div",{className:"Content",onClick:function(t){return e.ClickedCard(t)}},u.a.createElement(d.a,n,t))),u.a.createElement("div",{id:"Shop-Grid-Brands",onTouchStart:function(t){return e.TouchStart(t)},onTouchMove:function(t){return e.TouchMove(t)},onTouchEnd:this.TouchEnd},u.a.createElement("p",{className:"Title"},"All Brands ",u.a.createElement("span",null,"(",this.props.brandInfo.length,")")),u.a.createElement("div",{className:"Content",onClick:function(t){return e.ClickedCard(t)}},u.a.createElement("div",null,o.slice(0,o.length/2)),u.a.createElement("div",null,o.slice(o.length/2))),u.a.createElement("p",{className:"Notice"},"Swipe or Click Navigator to View More"),a,r,u.a.createElement("p",{id:"Grid-Jump",onClick:function(){return e.setState({openJumpBox:!0})}},this.state.pageIndex+1)),u.a.createElement(m.a,{open:this.state.openJumpBox,type:"input",content:c,buttonText:"Cancel",close:function(){return e.setState({openJumpBox:!1})}}))}}]),t}(u.a.Component);t.default=h}}]);
//# sourceMappingURL=13.1f30079b.chunk.js.map