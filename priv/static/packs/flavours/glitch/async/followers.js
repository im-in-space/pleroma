(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{702:function(a,t,c){"use strict";c.r(t),c.d(t,"default",function(){return T});var e,o,s,n=c(0),r=c(2),p=c(7),i=c(1),u=c(63),d=c.n(u),l=c(3),h=c.n(l),b=c(12),f=c(5),j=c.n(f),O=c(18),m=c.n(O),I=c(293),w=c(23),M=c(6),g=c(459),v=c(662),y=c(992),H=c(997),k=c(19),R=c(969),A=c(963),T=Object(b.connect)(function(a,t){return{isAccount:!!a.getIn(["accounts",t.params.accountId]),accountIds:a.getIn(["user_lists","followers",t.params.accountId,"items"]),hasMore:!!a.getIn(["user_lists","followers",t.params.accountId,"next"])}})((s=o=function(a){function t(){for(var t,c=arguments.length,e=new Array(c),o=0;o<c;o++)e[o]=arguments[o];return t=a.call.apply(a,[this].concat(e))||this,Object(i.a)(Object(r.a)(t),"handleHeaderClick",function(){t.column.scrollTop()}),Object(i.a)(Object(r.a)(t),"handleScroll",function(a){var c=a.target;c.scrollTop===c.scrollHeight-c.clientHeight&&t.props.hasMore&&t.props.dispatch(Object(w.D)(t.props.params.accountId))}),Object(i.a)(Object(r.a)(t),"handleLoadMore",d()(function(){t.props.dispatch(Object(w.D)(t.props.params.accountId))},300,{leading:!0})),Object(i.a)(Object(r.a)(t),"setRef",function(a){t.column=a}),t}Object(p.a)(t,a);var c=t.prototype;return c.componentWillMount=function(){this.props.accountIds||(this.props.dispatch(Object(w.F)(this.props.params.accountId)),this.props.dispatch(Object(w.H)(this.props.params.accountId)))},c.componentWillReceiveProps=function(a){a.params.accountId!==this.props.params.accountId&&a.params.accountId&&(this.props.dispatch(Object(w.F)(a.params.accountId)),this.props.dispatch(Object(w.H)(a.params.accountId)))},c.render=function(){var a=this.props,t=a.accountIds,c=a.hasMore;if(!a.isAccount)return Object(n.a)(v.a,{},void 0,Object(n.a)(R.a,{}));if(!t)return Object(n.a)(v.a,{},void 0,Object(n.a)(I.a,{}));var e=Object(n.a)(M.b,{id:"account.followers.empty",defaultMessage:"No one follows this user yet."});return h.a.createElement(v.a,{ref:this.setRef},Object(n.a)(y.a,{onClick:this.handleHeaderClick}),Object(n.a)(A.a,{scrollKey:"followers",hasMore:c,onLoadMore:this.handleLoadMore,prepend:Object(n.a)(H.a,{accountId:this.props.params.accountId,hideTabs:!0}),alwaysPrepend:!0,emptyMessage:e},void 0,t.map(function(a){return Object(n.a)(g.a,{id:a,withNote:!1},a)})))},t}(k.a),Object(i.a)(o,"propTypes",{params:j.a.object.isRequired,dispatch:j.a.func.isRequired,accountIds:m.a.list,hasMore:j.a.bool,isAccount:j.a.bool}),e=s))||e}}]);
//# sourceMappingURL=followers.js.map