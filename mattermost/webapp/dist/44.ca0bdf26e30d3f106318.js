webpackJsonp([44],{1666:function(e,t,a){"use strict";(function(e){var r=a(6),n=r&&r.__esModule?function(){return r["default"]}:function(){return r};a.d(n,"a",n);var u=a(3),i=u&&u.__esModule?function(){return u["default"]}:function(){return u};a.d(i,"a",i);var l=a(4),o=l&&l.__esModule?function(){return l["default"]}:function(){return l};a.d(o,"a",o);var s=a(7),c=s&&s.__esModule?function(){return s["default"]}:function(){return s};a.d(c,"a",c);var f=a(2),d=f&&f.__esModule?function(){return f["default"]}:function(){return f};a.d(d,"a",d);var m=a(12),v=m&&m.__esModule?function(){return m["default"]}:function(){return m};a.d(v,"a",v);var p=a(19),_=a(152),E=a(53),h=a(1),y=h&&h.__esModule?function(){return h["default"]}:function(){return h};a.d(y,"a",y);var M=function(t){function a(e){i()(this,a);var t=c()(this,(a.__proto__||n()(a)).call(this,e));return t.state={verifyStatus:"pending",serverError:""},t}return d()(a,t),o()(a,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location.query.uid,a=this.props.location.query.hid,r=this.props.location.query.email;p.a.verifyEmail(t,a,function(){E.a.push("/login?extra=verified&email="+r)},function(t){e.setState({verifyStatus:"failure",serverError:t.message})})}},{key:"render",value:function(){return"failure"!==this.state.verifyStatus?y.a.createElement(_.a,null):y.a.createElement("div",null,y.a.createElement("div",{className:"signup-header"},y.a.createElement(E.b,{to:"/"},y.a.createElement("span",{className:"fa fa-chevron-left"}),y.a.createElement(m.FormattedMessage,{id:"web.header.back"}))),y.a.createElement("div",{className:"col-sm-12"},y.a.createElement("div",{className:"signup-team__container"},y.a.createElement("h3",null,y.a.createElement(m.FormattedMessage,{id:"email_verify.almost",defaultMessage:"{siteName}: You are almost done",values:{siteName:e.window.mm_config.SiteName}})),y.a.createElement("div",null,y.a.createElement("p",null,y.a.createElement(m.FormattedMessage,{id:"email_verify.verifyFailed"})),y.a.createElement("p",{className:"alert alert-danger"},y.a.createElement("i",{className:"fa fa-times"}),this.state.serverError)))))}}]),a}(y.a.Component);t["default"]=M,M.defaultProps={},M.propTypes={location:y.a.PropTypes.object.isRequired}}).call(t,a(17))}});