(this["webpackJsonpit-kamasu"]=this["webpackJsonpit-kamasu"]||[]).push([[3],{295:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",userPhoto:"ProfileInfo_userPhoto__1UIR7"}},296:function(t,e,s){t.exports={postBlock:"MyPosts_postBlock__3b6E0",posts:"MyPosts_posts__3tZ1c"}},297:function(t,e,s){t.exports={item:"Post_item__ihtu9"}},299:function(t,e,s){"use strict";s.r(e);var o=s(5),c=s(36),n=s(37),i=s(39),a=s(38),r=s(0),u=s.n(r),p=s(295),j=s.n(p),l=s(33),d=s(125),b=s(1),h=function(t){var e=Object(r.useState)(!1),s=Object(d.a)(e,2),o=s[0],c=s[1],n=Object(r.useState)(t.status),i=Object(d.a)(n,2),a=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!o&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"----"})}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},f=s.p+"static/media/Viktar.e5117e8e.png",O=function(t){var e=t.profile,s=t.status,o=t.updateStatus;return e?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("img",{src:null!=e.photos.large?e.photos.large:f,alt:"",className:j.a.userPhoto}),Object(b.jsx)(h,{status:s,updateStatus:o})]})}):Object(b.jsx)(l.a,{})},x=s(93),D=s(296),m=s.n(D),B=s(297),v=s.n(B),P=function(t){return Object(b.jsxs)("div",{className:v.a.item,children:[Object(b.jsx)("img",{src:"https://cdn.xxl.thumbs.canstockphoto.ru/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-isolated-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B8%D0%BF%D0%B0%D1%80%D1%82%D1%8B_csp64736665.jpg",alt:""}),t.message,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:[t.count," like"]})})]})},g=s(86),k=s(124),_=s(83),S=s(34),w=Object(_.a)(10),y=Object(k.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{name:"newPostText",component:S.b,placeholder:"Post message...",validate:[_.b,w]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{children:"Add post"}),Object(b.jsx)("div",{})]})]})})),A=function(t){var e=t.posts.map((function(t){return Object(b.jsx)(P,{message:t.message,count:t.likesCount})}));return Object(b.jsxs)("div",{className:m.a.postBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(y,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(b.jsx)("div",{className:m.a.posts,children:e})]})},I=s(18),N=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(A),C=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(N,{})]})},T=s(11),U=s(9),E=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserId)||this.props.history.push("/Login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(C,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(U.d)(T.f,Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.e}))(E)}}]);
//# sourceMappingURL=3.a5821cf7.chunk.js.map