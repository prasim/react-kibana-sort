(this["webpackJsonpreact-kibana-sort"]=this["webpackJsonpreact-kibana-sort"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(0),n=a.n(c),l=a(9),o=a.n(l),r=(a(27),a.p,a(28),a(17)),i=a(13),h=a(14),u=a(7),b=a(21),d=a(20),j=a(11),m=a.n(j),g=a(12),v=a(41),O=a(42),S=a(44),x=a(39),f=a(40),k=a(43),y=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var s;Object(i.a)(this,a),(s=t.call(this,e)).state={logs:{},k8sValue:"",scfValue:"",localStorageKeyName:"",localStorageKeys:[],showSaveAs:!1};var c=localStorage.getItem("k8sLogs"),n=localStorage.getItem("scfLogs");return c&&(s.state.k8sValue=c),n&&(s.state.scfValue=n),s.handlek8sChange=s.handlek8sChange.bind(Object(u.a)(s)),s.handlescfChange=s.handlescfChange.bind(Object(u.a)(s)),s.submit=s.submit.bind(Object(u.a)(s)),s.saveLog=s.saveLog.bind(Object(u.a)(s)),s.handleKeyNameChange=s.handleKeyNameChange.bind(Object(u.a)(s)),s.showThisLog=s.showThisLog.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)().then((function(t){e.setState({localStorageKeys:t})}))}},{key:"handlek8sChange",value:function(e){this.setState({k8sValue:e.target.value})}},{key:"handlescfChange",value:function(e){this.setState({scfValue:e.target.value})}},{key:"handleKeyNameChange",value:function(e){this.setState({localStorageKeyName:e.target.value})}},{key:"getRandomColor",value:function(){return"hsl("+360*Math.random()+", 100%, 75%)"}},{key:"showThisLog",value:function(e){var t=this,a=e.target.value;Object(g.a)(a).then((function(e){e&&t.setState({logs:e,k8sValue:"",showSaveAs:!1,scfValue:""})}))}},{key:"saveLog",value:function(){var e=this;Object(g.c)(this.state.localStorageKeyName,this.state.logs),Object(g.b)().then((function(t){e.setState({localStorageKeys:t,showSaveAs:!1})}))}},{key:"submit",value:function(e){localStorage.setItem("k8sLogs",this.state.k8sValue);var t=[];this.state.k8sValue&&(t=JSON.parse(this.state.k8sValue).responses[0].hits.hits);localStorage.setItem("scfLogs",this.state.scfValue);var a=[];this.state.scfValue&&(a=JSON.parse(this.state.scfValue).responses[0].hits.hits);a.forEach((function(e,t){e._source.log=e._source.msg;var a=m.a.utc(e.sort[0],"x");e._source.timeExact=a.local().format("YYYY-MM-DD HH:mm:ss.SSS"),e.sort[1]=t})),t.forEach((function(e,t){var a=e._source.log,s=/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3,6})/.exec(a),c=/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3,6})/.exec(a);if(s&&s[1]){var n=s[1],l=m.a.utc(n,"YYYY-MM-DD[T]h:mm:ss.SSSSSS"),o=l.valueOf();e._source.timeExact=l.local().format("YYYY-MM-DD HH:mm:ss.SSS"),e.sort[0]=o,e.sort[1]=n}else if(c&&c[1]){var r=c[1],i=m.a.utc(r,"YYYY-MM-DD h:mm:ss,SSS"),h=i.valueOf();e._source.timeExact=i.local().format("YYYY-MM-DD HH:mm:ss.SSS"),e.sort[0]=h,e.sort[1]=t}else{var u=m.a.utc(e.sort[0],"x");e.doubtFull="[Doubtfull]",e._source.timeExact=u.local().format("YYYY-MM-DD HH:mm:ss.SSS"),e.sort[1]=t}e._source.component_name=e._source.kubernetes.container_name}));var s=[].concat(Object(r.a)(t),Object(r.a)(a));s.sort((function(e,t){return e.sort[0]<t.sort[0]?1:e.sort[0]>t.sort[0]?-1:e.sort[1]<t.sort[1]?1:e.sort[1]>t.sort[1]?-1:0})),this.setState({logs:s,showSaveAs:!0}),console.log(s)}},{key:"render",value:function(){var e,t,a=this;return Object.keys(this.state.logs).length&&(e=this.state.logs.map((function(e,t){return Object(s.jsx)(v.a,{children:Object(s.jsxs)(O.a,{children:[Object(s.jsxs)(O.a.Header,{children:[e.doubtFull,Object(s.jsx)("span",{className:"bubble red",children:e._source.component_name}),"\xa0",Object(s.jsx)("span",{className:"bubble green",children:e._source.timeExact}),"\xa0",Object(s.jsx)("span",{className:"bubble green",children:e.sort[0]})," \xa0",Object(s.jsx)("span",{className:"bubble blue",children:e._source.log})," \xa0"]}),Object(s.jsx)(v.a.Collapse,{eventKey:""+t,children:Object(s.jsx)(O.a.Body,{children:e._source.log})})]})},t)}))),Object.keys(this.state.localStorageKeys).length&&(t=this.state.localStorageKeys.map((function(e,t){return Object(s.jsx)(S.a,{onClick:a.showThisLog,variant:"link",size:"sm",value:e,children:e})}))),Object(s.jsxs)("div",{className:"main-section",children:[Object(s.jsxs)("div",{className:"width-10 overflow",children:["\xa0",Object(s.jsx)(x.a,{vertical:!0,children:t})]}),Object(s.jsxs)("div",{className:"width-80",children:[Object(s.jsxs)(f.a,{className:"mb-3",children:[Object(s.jsx)(f.a.Prepend,{children:Object(s.jsx)(f.a.Text,{children:"KIBANA(K8S) Logs Object"})}),Object(s.jsx)(k.a,{as:"textarea","aria-label":"With textarea",value:this.state.k8sValue,onChange:this.handlek8sChange})]}),Object(s.jsxs)(f.a,{className:"mb-3",children:[Object(s.jsx)(f.a.Prepend,{children:Object(s.jsx)(f.a.Text,{children:"KIBANA(SCF) Logs Object"})}),Object(s.jsx)(k.a,{as:"textarea","aria-label":"With textarea",value:this.state.scfValue,onChange:this.handlescfChange})]}),Object(s.jsxs)("div",{className:"button-section",children:[Object(s.jsx)("div",{className:"action-button",children:Object(s.jsx)(S.a,{variant:"primary",onClick:this.submit,children:"Submit"})}),Object(s.jsx)("div",{className:this.state.showSaveAs?"action-button":"hidden",children:Object(s.jsxs)(f.a,{className:"mb-3",children:[Object(s.jsx)(f.a.Prepend,{children:Object(s.jsx)(S.a,{variant:"outline-secondary",onClick:this.saveLog,children:"Save As"})}),Object(s.jsx)(k.a,{"aria-describedby":"basic-addon1",value:this.state.localStorageKeyName,onChange:this.handleKeyNameChange})]})})]}),Object(s.jsx)("div",{className:"overflow",children:e})]}),Object(s.jsx)("div",{className:"width-10",children:"\xa0"})]})}}]),a}(c.Component);a(35);var p=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(y,{})})})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.51b4dafb.chunk.js.map