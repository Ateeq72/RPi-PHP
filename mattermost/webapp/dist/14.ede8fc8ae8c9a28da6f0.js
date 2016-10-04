webpackJsonp([14],{1690:function(e,a,t){"use strict";(function(e){var n=t(6),r=n&&n.__esModule?function(){return n["default"]}:function(){return n};t.d(r,"a",r);var s=t(3),i=s&&s.__esModule?function(){return s["default"]}:function(){return s};t.d(i,"a",i);var o=t(7),l=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(l,"a",l);var u=t(4),c=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(c,"a",c);var d=t(2),m=d&&d.__esModule?function(){return d["default"]}:function(){return d};t.d(m,"a",m);var g=t(1864),f=t(1633),p=t(1630),h=t(54),E=t(18),v=t(19),_=t(26),w=t(97),b=t(13),M=t(11),S=t(12),N=S&&S.__esModule?function(){return S["default"]}:function(){return S};t.d(N,"a",N);var y=t(53),k=t(1),I=k&&k.__esModule?function(){return k["default"]}:function(){return k};t.d(I,"a",I);var L=t(1632),C=L&&L.__esModule?function(){return L["default"]}:function(){return L};t.d(C,"a",C);var F=function(a){function t(a){i()(this,t);var n=l()(this,(t.__proto__||r()(t)).call(this,a));return n.preSubmit=n.preSubmit.bind(n),n.submit=n.submit.bind(n),n.finishSignin=n.finishSignin.bind(n),n.handleLoginIdChange=n.handleLoginIdChange.bind(n),n.handlePasswordChange=n.handlePasswordChange.bind(n),n.checkSignUpEnabled=n.checkSignUpEnabled.bind(n),n.state={ldapEnabled:"true"===e.window.mm_license.IsLicensed&&"true"===e.window.mm_config.EnableLdap,usernameSigninEnabled:"true"===e.window.mm_config.EnableSignInWithUsername,emailSigninEnabled:"true"===e.window.mm_config.EnableSignInWithEmail,samlEnabled:"true"===e.window.mm_license.IsLicensed&&"true"===e.window.mm_config.EnableSaml,loginId:"",password:"",showMfa:!1},n}return m()(t,a),c()(t,null,[{key:"propTypes",get:function(){return{location:I.a.PropTypes.object.isRequired,params:I.a.PropTypes.object.isRequired}}}]),c()(t,[{key:"componentDidMount",value:function(){document.title=e.window.mm_config.SiteName,E.a.getCurrentUser()&&y.a.push("/select_team"),_.checkVersion()}},{key:"preSubmit",value:function(a){var t=this;a.preventDefault();var n=this.refs.loginId.value;n!==this.state.loginId&&this.setState({loginId:n});var r=this.refs.password.value;if(r!==this.state.password&&this.setState({password:r}),n=n.trim(),!n){var s="login.no";return this.state.emailSigninEnabled&&(s+="Email"),this.state.usernameSigninEnabled&&(s+="Username"),this.state.ldapEnabled&&(s+="LdapUsername"),void this.setState({serverError:I.a.createElement(S.FormattedMessage,{id:s,values:{ldapUsername:e.window.mm_config.LdapLoginFieldName||b.localizeMessage("login.ldapUsernameLower","AD/LDAP username")}})})}return r?void("true"===e.window.mm_config.EnableMultifactorAuthentication?v.a.checkMfa(n,function(e){"true"===e.mfa_required?t.setState({showMfa:!0}):t.submit(n,r,"")},function(e){t.setState({serverError:e.message})}):this.submit(n,r,"")):void this.setState({serverError:I.a.createElement(S.FormattedMessage,{id:"login.noPassword",defaultMessage:"Please enter your password"})})}},{key:"submit",value:function(e,a,t){var n=this;this.setState({serverError:null}),v.a.webLogin(e,a,t,function(){var e=n.props.location.query;return e.id||e.h?void v.a.addUserToTeamFromInvite(e.d,e.h,e.id,function(){n.finishSignin()},function(){n.finishSignin()}):void n.finishSignin()},function(a){return"api.user.login.not_verified.app_error"===a.id?void y.a.push("/should_verify_email?&email="+encodeURIComponent(e)):void("store.sql_user.get_for_login.app_error"===a.id||"ent.ldap.do_login.user_not_registered.app_error"===a.id?n.setState({showMfa:!1,serverError:I.a.createElement(S.FormattedMessage,{id:"login.userNotFound",defaultMessage:"We couldn't find an account matching your login credentials."})}):"api.user.check_user_password.invalid.app_error"===a.id||"ent.ldap.do_login.invalid_password.app_error"===a.id?n.setState({showMfa:!1,serverError:I.a.createElement(S.FormattedMessage,{id:"login.invalidPassword",defaultMessage:"Your password is incorrect."})}):n.setState({showMfa:!1,serverError:a.message}))})}},{key:"finishSignin",value:function(){var e=this;h.emitInitialLoad(function(){var a=e.props.location.query;h.loadDefaultLocale(),a.redirect_to?y.a.push(a.redirect_to):y.a.push("/select_team")})}},{key:"handleLoginIdChange",value:function(e){this.setState({loginId:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"createCustomLogin",value:function(){if("true"===e.window.mm_license.IsLicensed&&"true"===e.window.mm_license.CustomBrand&&"true"===e.window.mm_config.EnableCustomBrand){var a=e.window.mm_config.CustomBrandText||"";return I.a.createElement("div",null,I.a.createElement("img",{src:v.a.getAdminRoute()+"/get_brand_image"}),I.a.createElement("p",{dangerouslySetInnerHTML:{__html:w.formatText(a)}}))}return null}},{key:"createLoginPlaceholder",value:function(){var a=this.state.ldapEnabled,t=this.state.usernameSigninEnabled,n=this.state.emailSigninEnabled,r=[];return n&&r.push(b.localizeMessage("login.email","Email")),t&&r.push(b.localizeMessage("login.username","Username")),a&&(e.window.mm_config.LdapLoginFieldName?r.push(e.window.mm_config.LdapLoginFieldName):r.push(b.localizeMessage("login.ldapUsername","AD/LDAP Username"))),r.length>=2?r.slice(0,r.length-1).join(", ")+b.localizeMessage("login.placeholderOr"," or ")+r[r.length-1]:1===r.length?r[0]:""}},{key:"checkSignUpEnabled",value:function(){return"true"===e.window.mm_config.EnableSignUpWithEmail||"true"===e.window.mm_config.EnableSignUpWithGitLab||"true"===e.window.mm_config.EnableSignUpWithGoogle}},{key:"createLoginOptions",value:function(){var a=this.props.location.query.extra,t="";a&&(a===M.a.SIGNIN_CHANGE?t=I.a.createElement("div",{className:"alert alert-success"},I.a.createElement("i",{className:"fa fa-check"}),I.a.createElement(S.FormattedMessage,{id:"login.changed",defaultMessage:" Sign-in method changed successfully"})):a===M.a.SIGNIN_VERIFIED?t=I.a.createElement("div",{className:"alert alert-success"},I.a.createElement("i",{className:"fa fa-check"}),I.a.createElement(S.FormattedMessage,{id:"login.verified",defaultMessage:" Email Verified"})):a===M.a.SESSION_EXPIRED?t=I.a.createElement("div",{className:"alert alert-warning"},I.a.createElement("i",{className:"fa fa-exclamation-triangle"}),I.a.createElement(S.FormattedMessage,{id:"login.session_expired",defaultMessage:" Your session has expired. Please login again."})):a===M.a.PASSWORD_CHANGE&&(t=I.a.createElement("div",{className:"alert alert-success"},I.a.createElement("i",{className:"fa fa-check"}),I.a.createElement(S.FormattedMessage,{id:"login.passwordChanged",defaultMessage:" Password updated successfully"}))));var n=[],r=this.state.ldapEnabled,s="true"===e.window.mm_config.EnableSignUpWithGitLab,i="true"===e.window.mm_config.EnableSignUpWithGoogle,o="true"===e.window.mm_config.EnableSignUpWithOffice365,l=this.state.samlEnabled,u=this.state.usernameSigninEnabled,c=this.state.emailSigninEnabled;if(c||u||r){var d="";this.state.serverError&&(d=" has-error"),n.push(I.a.createElement("form",{key:"loginBoxes",onSubmit:this.preSubmit},I.a.createElement("div",{className:"signup__email-container"},I.a.createElement(p.a,{error:this.state.serverError,margin:!0}),I.a.createElement("div",{className:"form-group"+d},I.a.createElement("input",{className:"form-control",ref:"loginId",name:"loginId",value:this.state.loginId,onChange:this.handleLoginIdChange,placeholder:this.createLoginPlaceholder(),spellCheck:"false",autoCapitalize:"off"})),I.a.createElement("div",{className:"form-group"+d},I.a.createElement("input",{type:"password",className:"form-control",ref:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange,placeholder:b.localizeMessage("login.password","Password"),spellCheck:"false"})),I.a.createElement("div",{className:"form-group"},I.a.createElement("button",{type:"submit",className:"btn btn-primary"},I.a.createElement(S.FormattedMessage,{id:"login.signIn",defaultMessage:"Sign in"}))))))}return"true"===e.window.mm_config.EnableOpenServer&&this.checkSignUpEnabled()&&n.push(I.a.createElement("div",{className:"form-group",key:"signup"},I.a.createElement("span",null,I.a.createElement(S.FormattedMessage,{id:"login.noAccount",defaultMessage:"Don't have an account? "}),I.a.createElement(y.b,{to:"/signup_user_complete"+this.props.location.search,className:"signup-team-login"},I.a.createElement(S.FormattedMessage,{id:"login.create",defaultMessage:"Create one now"}))))),(u||c)&&n.push(I.a.createElement("div",{key:"forgotPassword",className:"form-group"},I.a.createElement(y.b,{to:"/reset_password"},I.a.createElement(S.FormattedMessage,{id:"login.forgot",defaultMessage:"I forgot my password"})))),(c||u||r)&&(s||i||l||o)&&(n.push(I.a.createElement("div",{key:"divider",className:"or__container"},I.a.createElement(S.FormattedMessage,{id:"login.or",defaultMessage:"or"}))),n.push(I.a.createElement("h5",{key:"oauthHeader"},I.a.createElement(S.FormattedMessage,{id:"login.signInWith",defaultMessage:"Sign in with:"})))),(s||l||o||i||s)&&n.push(I.a.createElement("h5",{key:"oauthHeader"},I.a.createElement(S.FormattedMessage,{id:"login.signInWith",defaultMessage:"Sign in with:"}))),s&&n.push(I.a.createElement("a",{className:"btn btn-custom-login gitlab",key:"gitlab",href:v.a.getOAuthRoute()+"/gitlab/login"+this.props.location.search},I.a.createElement("span",{className:"icon"}),I.a.createElement("span",null,I.a.createElement(S.FormattedMessage,{id:"login.gitlab",defaultMessage:"GitLab"})))),i&&n.push(I.a.createElement("a",{className:"btn btn-custom-login google",key:"google",href:v.a.getOAuthRoute()+"/google/login"+this.props.location.search},I.a.createElement("span",{className:"icon"}),I.a.createElement("span",null,I.a.createElement(S.FormattedMessage,{id:"login.google",defaultMessage:"Google Apps"})))),o&&n.push(I.a.createElement("a",{className:"btn btn-custom-login office365",key:"office365",href:v.a.getOAuthRoute()+"/office365/login"+this.props.location.search},I.a.createElement("span",{className:"icon"}),I.a.createElement("span",null,I.a.createElement(S.FormattedMessage,{id:"login.office365",defaultMessage:"Office 365"})))),l&&n.push(I.a.createElement("a",{className:"btn btn-custom-login saml",key:"saml",href:"/login/sso/saml"+this.props.location.search},I.a.createElement("span",{className:"icon fa fa-lock fa--margin-top"}),I.a.createElement("span",null,window.mm_config.SamlLoginButtonText))),0===n.length&&n.push(I.a.createElement(p.a,{error:I.a.createElement(S.FormattedMessage,{id:"login.noMethods",defaultMessage:"No sign-in methods are enabled. Please contact your System Administrator."}),margin:!0})),I.a.createElement("div",null,t,n)}},{key:"render",value:function(){var a=void 0,t=void 0,n=void 0;this.state.showMfa?a=I.a.createElement(g.a,{loginId:this.state.loginId,password:this.state.password,submit:this.submit}):(a=this.createLoginOptions(),t=this.createCustomLogin(),t&&(n="branded"));var r=null;return r="true"===e.window.mm_license.IsLicensed&&"true"===e.window.mm_license.CustomBrand&&"true"===e.window.mm_config.EnableCustomBrand?e.window.mm_config.CustomDescriptionText:I.a.createElement(S.FormattedMessage,{id:"web.root.signup_info",defaultMessage:"All team communication in one place, searchable and accessible anywhere"}),I.a.createElement("div",null,I.a.createElement(f.a,null),I.a.createElement("div",{className:"col-sm-12"},I.a.createElement("div",{className:"signup-team__container "+n},I.a.createElement("div",{className:"signup__markdown"},t),I.a.createElement("img",{className:"signup-team-logo",src:C.a}),I.a.createElement("div",{className:"signup__content"},I.a.createElement("h1",null,e.window.mm_config.SiteName),I.a.createElement("h4",{className:"color--light"},r),a))))}}]),t}(I.a.Component);a["default"]=F}).call(a,t(17))},1864:function(e,a,t){"use strict";var n=t(6),r=n&&n.__esModule?function(){return n["default"]}:function(){return n};t.d(r,"a",r);var s=t(3),i=s&&s.__esModule?function(){return s["default"]}:function(){return s};t.d(i,"a",i);var o=t(4),l=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(l,"a",l);var u=t(7),c=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(c,"a",c);var d=t(2),m=d&&d.__esModule?function(){return d["default"]}:function(){return d};t.d(m,"a",m);var g=t(13),f=t(12),p=f&&f.__esModule?function(){return f["default"]}:function(){return f};t.d(p,"a",p);var h=t(1),E=h&&h.__esModule?function(){return h["default"]}:function(){return h};t.d(E,"a",E);var v=function(e){function a(e){i()(this,a);var t=c()(this,(a.__proto__||r()(a)).call(this,e));return t.handleSubmit=t.handleSubmit.bind(t),t.state={serverError:""},t}return m()(a,e),l()(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a={},t=this.refs.token.value.trim().replace(/\s/g,"");return t?(a.serverError="",this.setState(a),void this.props.submit(this.props.loginId,this.props.password,t)):(a.serverError=g.localizeMessage("login_mfa.tokenReq","Please enter an MFA token"),void this.setState(a))}},{key:"render",value:function(){var e=void 0,a="";return this.state.serverError&&(e=E.a.createElement("label",{className:"control-label"},this.state.serverError),a=" has-error"),E.a.createElement("form",{onSubmit:this.handleSubmit},E.a.createElement("div",{className:"signup__email-container"},E.a.createElement("p",null,E.a.createElement(f.FormattedMessage,{id:"login_mfa.enterToken",defaultMessage:"To complete the sign in process, please enter a token from your smartphone's authenticator"})),E.a.createElement("div",{className:"form-group"+a},e),E.a.createElement("div",{className:"form-group"+a},E.a.createElement("input",{type:"text",className:"form-control",name:"token",ref:"token",placeholder:g.localizeMessage("login_mfa.token","MFA Token"),spellCheck:"false",autoComplete:"off",autoFocus:!0})),E.a.createElement("div",{className:"form-group"},E.a.createElement("button",{type:"submit",className:"btn btn-primary"},E.a.createElement(f.FormattedMessage,{id:"login_mfa.submit",defaultMessage:"Submit"})))))}}]),a}(E.a.Component);a.a=v,v.defaultProps={},v.propTypes={loginId:E.a.PropTypes.string.isRequired,password:E.a.PropTypes.string.isRequired,submit:E.a.PropTypes.func.isRequired}}});