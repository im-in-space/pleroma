(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{757:function(e,t,a){"use strict";a.r(t);var o,c,n,i,r,s,u=a(0),l=a(2),d=a(7),b=a(1),j=a(63),p=a.n(j),f=(a(3),a(12)),h=a(6),O=a(19),m=a(5),v=a.n(m),_=a(18),g=a.n(_),w=a(294),M=a(663),q=a(670),y=a(204),z=a(286),R=a(107),N=a(116),I=a(51),k=Object(h.f)({authorize:{id:"follow_request.authorize",defaultMessage:"Authorize"},reject:{id:"follow_request.reject",defaultMessage:"Reject"}}),A=Object(h.g)((n=c=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.intl,a=e.account,o=e.onAuthorize,c=e.onReject,n={__html:a.get("note_emojified")};return Object(u.a)("div",{className:"account-authorize__wrapper"},void 0,Object(u.a)("div",{className:"account-authorize"},void 0,Object(u.a)(z.a,{href:a.get("url"),to:"/accounts/"+a.get("id"),className:"detailed-status__display-name"},void 0,Object(u.a)("div",{className:"account-authorize__avatar"},void 0,Object(u.a)(R.a,{account:a,size:48})),Object(u.a)(N.a,{account:a})),Object(u.a)("div",{className:"account__header__content",dangerouslySetInnerHTML:n})),Object(u.a)("div",{className:"account--panel"},void 0,Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(I.a,{title:t.formatMessage(k.authorize),icon:"check",onClick:o})),Object(u.a)("div",{className:"account--panel__button"},void 0,Object(u.a)(I.a,{title:t.formatMessage(k.reject),icon:"times",onClick:c}))))},t}(O.a),Object(b.a)(c,"propTypes",{account:g.a.map.isRequired,onAuthorize:v.a.func.isRequired,onReject:v.a.func.isRequired,intl:v.a.object.isRequired}),o=n))||o,T=a(26),C=Object(f.connect)(function(){var e=Object(y.d)();return function(t,a){return{account:e(t,a.id)}}},function(e,t){var a=t.id;return{onAuthorize:function(){e(Object(T.v)(a))},onReject:function(){e(Object(T.I)(a))}}})(A),L=a(964);a.d(t,"default",function(){return U});var S=Object(h.f)({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}}),U=Object(f.connect)(function(e){return{accountIds:e.getIn(["user_lists","follow_requests","items"]),hasMore:!!e.getIn(["user_lists","follow_requests","next"])}})(i=Object(h.g)((s=r=function(e){function t(){for(var t,a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,Object(b.a)(Object(l.a)(t),"handleLoadMore",p()(function(){t.props.dispatch(Object(T.x)())},300,{leading:!0})),t}Object(d.a)(t,e);var a=t.prototype;return a.componentWillMount=function(){this.props.dispatch(Object(T.B)())},a.render=function(){var e=this.props,t=e.intl,a=e.shouldUpdateScroll,o=e.accountIds,c=e.hasMore,n=e.multiColumn;if(!o)return Object(u.a)(M.a,{},void 0,Object(u.a)(w.a,{}));var i=Object(u.a)(h.b,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."});return Object(u.a)(M.a,{bindToDocument:!n,icon:"user-plus",heading:t.formatMessage(S.heading)},void 0,Object(u.a)(q.a,{}),Object(u.a)(L.a,{scrollKey:"follow_requests",onLoadMore:this.handleLoadMore,hasMore:c,shouldUpdateScroll:a,emptyMessage:i,bindToDocument:!n},void 0,o.map(function(e){return Object(u.a)(C,{id:e},e)})))},t}(O.a),Object(b.a)(r,"propTypes",{params:v.a.object.isRequired,dispatch:v.a.func.isRequired,shouldUpdateScroll:v.a.func,hasMore:v.a.bool,accountIds:g.a.list,intl:v.a.object.isRequired,multiColumn:v.a.bool}),i=s))||i)||i}}]);
//# sourceMappingURL=follow_requests.js.map