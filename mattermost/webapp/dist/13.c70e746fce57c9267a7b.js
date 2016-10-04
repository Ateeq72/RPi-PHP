webpackJsonp([13],{1694:function(e,t,n){"use strict";var a=n(6),s=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(s,"a",s);var o=n(3),r=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(r,"a",r);var i=n(4),u=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(u,"a",u);var l=n(7),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(d,"a",d);var c=n(2),h=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(h,"a",h);var f=n(0),g=f&&f.__esModule?function(){return f["default"]}:function(){return f};n.d(g,"a",g);var C=n(1),p=C&&C.__esModule?function(){return C["default"]}:function(){return C};n.d(p,"a",p);var m=n(1644),v=n(1870),_=n(36),S=n(37),P=n(53),y=n(12),E=y&&y.__esModule?function(){return y["default"]}:function(){return y};n.d(E,"a",E);var L=function(e){function t(e){r()(this,t);var n=d()(this,(t.__proto__||s()(t)).call(this,e));return n.getStateFromStores=n.getStateFromStores.bind(n),n.isStateValid=n.isStateValid.bind(n),n.updateState=n.updateState.bind(n),n.state=n.getStateFromStores(e),n}return h()(t,e),u()(t,[{key:"getStateFromStores",value:function(e){var t=e.params.postid,n=_.a.getCurrent(),a=n?n.id:"",s=n?n.name:"",o=S.a.getCurrent(),r=o?o.name:"";return{channelId:a,channelName:s,teamName:r,postId:t}}},{key:"isStateValid",value:function(){return""!==this.state.channelId&&this.state.teamName}},{key:"updateState",value:function(){this.setState(this.getStateFromStores(this.props))}},{key:"componentDidMount",value:function(){_.a.addChangeListener(this.updateState),S.a.addChangeListener(this.updateState),g()("body").addClass("app__body")}},{key:"componentWillUnmount",value:function(){_.a.removeChangeListener(this.updateState),S.a.removeChangeListener(this.updateState),g()("body").removeClass("app__body")}},{key:"componentWillReceiveProps",value:function(e){this.setState(this.getStateFromStores(e))}},{key:"render",value:function(){return this.isStateValid()?p.a.createElement("div",{id:"app-content",className:"app__content"},p.a.createElement(m.a,{channelId:this.state.channelId}),p.a.createElement(v.a,null),p.a.createElement("div",{id:"archive-link-home"},p.a.createElement(P.b,{to:"/"+this.state.teamName+"/channels/"+this.state.channelName},p.a.createElement(y.FormattedMessage,{id:"center_panel.recent",defaultMessage:"Click here to jump to recent messages. "}),p.a.createElement("i",{className:"fa fa-arrow-down"})))):null}}]),t}(p.a.Component);t["default"]=L,L.propTypes={params:p.a.PropTypes.object.isRequired}},1870:function(e,t,n){"use strict";var a=n(112),s=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(s,"a",s);var o=n(42),r=o&&o.__esModule?function(){return o["default"]}:function(){return o};n.d(r,"a",r);var i=n(6),u=i&&i.__esModule?function(){return i["default"]}:function(){return i};n.d(u,"a",u);var l=n(3),d=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(d,"a",d);var c=n(4),h=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(h,"a",h);var f=n(7),g=f&&f.__esModule?function(){return f["default"]}:function(){return f};n.d(g,"a",g);var C=n(2),p=C&&C.__esModule?function(){return C["default"]}:function(){return C};n.d(p,"a",p);var m=n(1652),v=n(152),_=n(175),S=n(153),P=n(18),y=n(36),E=n(45),L=n(11),T=n(1),M=T&&T.__esModule?function(){return T["default"]}:function(){return T};n.d(M,"a",M);var b=L.a.ScrollTypes,N=function(e){function t(e){d()(this,t);var n=g()(this,(t.__proto__||u()(t)).call(this,e));n.onChannelChange=n.onChannelChange.bind(n),n.onPostsChange=n.onPostsChange.bind(n),n.onUserChange=n.onUserChange.bind(n),n.onEmojiChange=n.onEmojiChange.bind(n),n.onStatusChange=n.onStatusChange.bind(n),n.onPreferenceChange=n.onPreferenceChange.bind(n),n.onPostListScroll=n.onPostListScroll.bind(n);var a=S.a.getFocusedPostId(),s=y.a.getCurrent(),o=P.a.getProfiles();s&&s.type===L.a.DM_CHANNEL&&(o=r()({},o,P.a.getDirectProfiles()));var i=E.a.getBool(L.a.Preferences.CATEGORY_ADVANCED_SETTINGS,"join_leave",!0),l=void 0;return s&&s.type!==L.a.DM_CHANNEL&&(l=r()({},P.a.getStatuses())),n.state={postList:S.a.filterPosts(a,i),currentUser:P.a.getCurrentUser(),profiles:o,statuses:l,scrollType:b.POST,currentChannel:y.a.getCurrentId().slice(),scrollPostId:a,atTop:S.a.getVisibilityAtTop(a),atBottom:S.a.getVisibilityAtBottom(a),emojis:_.a.getEmojis(),flaggedPosts:E.a.getCategory(L.a.Preferences.CATEGORY_FLAGGED_POST)},n}return p()(t,e),h()(t,[{key:"componentDidMount",value:function(){y.a.addChangeListener(this.onChannelChange),S.a.addChangeListener(this.onPostsChange),P.a.addChangeListener(this.onUserChange),P.a.addStatusesChangeListener(this.onStatusChange),_.a.addChangeListener(this.onEmojiChange),E.a.addChangeListener(this.onPreferenceChange)}},{key:"componentWillUnmount",value:function(){y.a.removeChangeListener(this.onChannelChange),S.a.removeChangeListener(this.onPostsChange),P.a.removeChangeListener(this.onUserChange),P.a.removeStatusesChangeListener(this.onStatusChange),_.a.removeChangeListener(this.onEmojiChange),E.a.removeChangeListener(this.onPreferenceChange)}},{key:"onChannelChange",value:function(){var e=y.a.getCurrentId();this.state.currentChannel!==e&&this.setState({currentChannel:e.slice(),scrollType:b.POST})}},{key:"onPostsChange",value:function(){var e=S.a.getFocusedPostId();if(null!=e){var t=E.a.getBool(L.a.Preferences.CATEGORY_ADVANCED_SETTINGS,"join_leave",!0);this.setState({scrollPostId:e,postList:S.a.filterPosts(e,t),atTop:S.a.getVisibilityAtTop(e),atBottom:S.a.getVisibilityAtBottom(e)})}}},{key:"onUserChange",value:function(){var e=y.a.getCurrent(),t=P.a.getProfiles();e&&e.type===L.a.DM_CHANNEL&&(t=r()({},t,P.a.getDirectProfiles())),this.setState({currentUser:P.a.getCurrentUser(),profiles:JSON.parse(s()(t))})}},{key:"onStatusChange",value:function(){var e=y.a.getCurrent(),t=void 0;e&&e.type!==L.a.DM_CHANNEL&&(t=r()({},P.a.getStatuses())),this.setState({statuses:t})}},{key:"onEmojiChange",value:function(){this.setState({emojis:_.a.getEmojis()})}},{key:"onPreferenceChange",value:function(){var e=S.a.getFocusedPostId();if(null!=e){var t=E.a.getBool(L.a.Preferences.CATEGORY_ADVANCED_SETTINGS,"join_leave",!0);this.setState({postList:S.a.filterPosts(e,t),flaggedPosts:E.a.getCategory(L.a.Preferences.CATEGORY_FLAGGED_POST)})}}},{key:"onPostListScroll",value:function(){this.setState({scrollType:b.FREE})}},{key:"render",value:function(){var e={};e[this.state.scrollPostId]=!0;var t=void 0;return t=null==this.state.postList?M.a.createElement(v.a,{position:"absolute",key:"loading"}):M.a.createElement(m.a,{postList:this.state.postList,currentUser:this.state.currentUser,profiles:this.state.profiles,scrollType:this.state.scrollType,scrollPostId:this.state.scrollPostId,postListScrolled:this.onPostListScroll,showMoreMessagesTop:!this.state.atTop,showMoreMessagesBottom:!this.state.atBottom,postsToHighlight:e,isFocusPost:!0,emojis:this.state.emojis,flaggedPosts:this.state.flaggedPosts,statuses:this.state.statuses}),M.a.createElement("div",{id:"post-list"},t)}}]),t}(M.a.Component);t.a=N}});