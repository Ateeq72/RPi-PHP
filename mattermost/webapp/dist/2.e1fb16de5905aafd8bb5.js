webpackJsonp([2],{581:function(e,n,t){"use strict";(function(e){var r=t(6),a=r&&r.__esModule?function(){return r["default"]}:function(){return r};t.d(a,"a",a);var o=t(3),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(i,"a",i);var l=t(4),c=l&&l.__esModule?function(){return l["default"]}:function(){return l};t.d(c,"a",c);var u=t(7),s=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(s,"a",s);var f=t(2),d=f&&f.__esModule?function(){return f["default"]}:function(){return f};t.d(d,"a",d);var m=t(0),p=m&&m.__esModule?function(){return m["default"]}:function(){return m};t.d(p,"a",p);var _=t(12),v=_&&_.__esModule?function(){return _["default"]}:function(){return _};t.d(v,"a",v);var k=t(1),h=k&&k.__esModule?function(){return k["default"]}:function(){return k};t.d(h,"a",h);var w=function(n){function t(){return i()(this,t),s()(this,(t.__proto__||a()(t)).apply(this,arguments))}return d()(t,n),c()(t,[{key:"componentDidMount",value:function(){p()("body").addClass("sticky"),p()("#root").addClass("container-fluid")}},{key:"componentWillUnmount",value:function(){p()("body").removeClass("sticky"),p()("#root").removeClass("container-fluid")}},{key:"render",value:function(){var n=[];return e.window.mm_config.HelpLink&&n.push(h.a.createElement("a",{id:"help_link",className:"pull-right footer-link",target:"_blank",rel:"noopener noreferrer",href:e.window.mm_config.HelpLink},h.a.createElement(_.FormattedMessage,{id:"web.footer.help"}))),e.window.mm_config.TermsOfServiceLink&&n.push(h.a.createElement("a",{id:"terms_link",className:"pull-right footer-link",target:"_blank",rel:"noopener noreferrer",href:e.window.mm_config.TermsOfServiceLink},h.a.createElement(_.FormattedMessage,{id:"web.footer.terms"}))),e.window.mm_config.PrivacyPolicyLink&&n.push(h.a.createElement("a",{id:"privacy_link",className:"pull-right footer-link",target:"_blank",rel:"noopener noreferrer",href:e.window.mm_config.PrivacyPolicyLink},h.a.createElement(_.FormattedMessage,{id:"web.footer.privacy"}))),e.window.mm_config.AboutLink&&n.push(h.a.createElement("a",{id:"about_link",className:"pull-right footer-link",target:"_blank",rel:"noopener noreferrer",href:e.window.mm_config.AboutLink},h.a.createElement(_.FormattedMessage,{id:"web.footer.about"}))),h.a.createElement("div",{className:"inner-wrap"},h.a.createElement("div",{className:"row content"},this.props.children,h.a.createElement("div",{className:"footer-push"})),h.a.createElement("div",{className:"row footer"},h.a.createElement("div",{className:"footer-pane col-xs-12"},h.a.createElement("div",{className:"col-xs-12"},h.a.createElement("span",{className:"pull-right footer-site-name"},"Mattermost")),h.a.createElement("div",{className:"col-xs-12"},h.a.createElement("span",{className:"pull-right footer-link copyright"},"© 2015-2016 Mattermost, Inc."),n))))}}]),t}(h.a.Component);n["default"]=w,w.defaultProps={},w.propTypes={children:h.a.PropTypes.object}}).call(n,t(17))}});