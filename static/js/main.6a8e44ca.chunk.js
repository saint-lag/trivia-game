(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/trivia.466d153e.png"},34:function(e,t,n){e.exports=n(54)},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t){},48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),s=n(19),i=n(12),u=n(16),l=n(29),m=n(30),p=n(13),d=function(e){return{type:"ADD_TOKEN",token:e}},b={name:"",assertions:0,score:0,gravatarEmail:"",picture:""};var h=Object(u.combineReducers)({player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_TOKEN":return Object(p.a)(Object(p.a)({},e),{},{token:t.payload});case"ADD_LOGIN":return Object(p.a)(Object(p.a)({},e),{},{name:t.payload.name,gravatarEmail:t.payload.gravatarEmail,score:0,assertions:0});case"ADD_GRAVATAR_PICTURE":return Object(p.a)(Object(p.a)({},e),{},{picture:t.picture});case"UPDATE_SCORE":return Object(p.a)(Object(p.a)({},e),{},{score:t.payload+e.score});case"UPDATE_CORRECT_ANSWERS":return Object(p.a)(Object(p.a)({},e),{},{assertions:t.payload});default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TOKEN":return t.token;default:return e}}}),f=Object(u.createStore)(h,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(m.a)));window.Cypress&&(window.store=f);var v=f,g=(n(42),n(2)),y=n(31),O=n.n(y),E=(n(43),n(8)),k=n.n(E),w=n(14),j=n(20),N=n(3),C=n(4),A=n(6),x=n(5),T=function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api_token.php?command=request",e.next=3,fetch("https://opentdb.com/api_token.php?command=request");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,a=n.token,r=a,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=n(32),D=n.n(S),_=function(e){var t=D()(e).toString();return"https://www.gravatar.com/avatar/".concat(t)},q=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(N.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r),(function(){return e.validate()}))},e.validate=function(){var t=e.state,n=t.name,a=t.gravatarEmail;""!==n&&a.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)?e.setState({buttonDisable:!1}):e.setState({buttonDisable:!0})},e.handleClick=Object(w.a)(k.a.mark((function t(){var n,a,r,c,o,s,i,u,l,m,p;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:n=t.sent,a=e.props,r=a.history,c=a.updateToken,o=a.updatePlayer,s=a.updatePicture,i=e.state,u=i.gravatarEmail,l=i.name,m={gravatarEmail:u,name:l},p=_(u),s(p),c(n),o(m),r.push("/game");case 11:case"end":return t.stop()}}),t)}))),e.handleClickButtonSettings=function(){e.props.history.push("/settings")},e.state={name:"",gravatarEmail:"",buttonDisable:!0},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.gravatarEmail,a=e.buttonDisable;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("form",{className:"d-grid gap-3"},r.a.createElement("input",{className:" form-control","data-testid":"input-player-name",name:"name",placeholder:"Nome de Usu\xe1rio",onChange:this.handleChange,value:t}),r.a.createElement("input",{className:"form-control","data-testid":"input-gravatar-email",name:"gravatarEmail",placeholder:"E-mail",onChange:this.handleChange,value:n}),r.a.createElement("button",{style:{backgroundColor:"#5a189a"},className:"btn btn-primary btn-lg  mx-1","data-testid":"btn-play",type:"button",onClick:this.handleClick,disabled:a},"Play"))),r.a.createElement("footer",null,r.a.createElement("button",{style:{backgroundColor:"#0077b6"},className:"btn btn-primary btn-lg  mx-1",type:"button","data-testid":"btn-settings",onClick:this.handleClickButtonSettings},"Configura\xe7\xf5es")))}}]),n}(r.a.Component),R=Object(i.b)(null,(function(e){return{updateToken:function(t){return e(d(t))},updatePlayer:function(t){return e(function(e){return{type:"ADD_LOGIN",payload:e}}(t))},updatePicture:function(t){return e(function(e){return{type:"ADD_GRAVATAR_PICTURE",picture:e}}(t))}}}))(q),P=n(22),B=n(21),I=n(25),F=function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 5,n="https://opentdb.com/api.php?amount=".concat(5,"&token=").concat(t),e.prev=2,e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.score,a=e.picture;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("img",{src:a,"data-testid":"header-profile-picture",alt:t}),r.a.createElement("span",{"data-testid":"header-player-name"},t),r.a.createElement("span",{"data-testid":"header-score"},n)))}}]),n}(r.a.Component),U=Object(i.b)((function(e){return{name:e.player.name,picture:e.player.picture,score:e.player.score}}),null)(G),Q=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(N.a)(this,n),(a=t.call(this,e)).timer=function(){var e=a.state.time,t=a.props,n=t.isOverTime,r=t.timerOn,c=t.getTime;e>0&&r&&a.setState((function(e){return{time:e.time-1}})),e<=0&&(n(!0),clearInterval(a.interval),c(e)),r||(clearInterval(a.interval),c(e))},a.startTimer=function(){a.interval=setInterval(a.timer,1e3)},a.state={time:30},a}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"render",value:function(){var e=this.state.time;return r.a.createElement("h2",{className:"mt-3"},e)}}]),n}(r.a.Component),W=(n(48),function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(N.a)(this,n),(e=t.call(this)).randomNumber=function(){return Math.random()-.5},e.getTime=function(t){e.setState({currentTime:t})},e.calculateAndUpdateScore=function(){var t=e.state,n=t.gameQuestions,a=t.questionNumber,r=t.currentTime,c=e.props.updateScoreDispatch,o=0;"easy"===n[a].difficulty&&r>0?o=10+1*r:"medium"===n[a].difficulty&&r>0?o=10+2*r:"hard"===n[a].difficulty&&r>0&&(o=10+3*r),c(o)},e.handleEndOfAnswering=function(){var t=e.state;t.questionNumber===t.gameQuestions.length-1?e.setState({overTime:!0,timerOn:!1,questionAnswered:!0,redirectToFeedback:!0}):e.setState({overTime:!0,timerOn:!1,questionAnswered:!0,nextButton:!0})},e.checkAnswer=function(t){var n=e.state,a=n.gameQuestions[n.questionNumber].correct_answer,r=e.props,c=r.assertions,o=r.defineNumberCorrectAnswer;t===a&&(o(c+1),e.calculateAndUpdateScore()),e.handleEndOfAnswering()},e.clickNextButton=function(){var t=e.state.questionNumber;e.setState({questionNumber:t+1,nextButton:!1,timerOn:!0,questionAnswered:!1,overTime:!1})},e.selectClass=function(t,n){return e.state.questionAnswered?t===n?"mx-1 btn btn-success correct-answer":"mx-1 btn btn-danger wrong-answer":"mx-1 btn btn-light"},e.isOverTime=function(t){t&&e.handleEndOfAnswering()},e.state={gameQuestions:[],questionNumber:0,overTime:!1,timerOn:!0,questionAnswered:!1,currentTime:30,nextButton:!1,redirectToFeedback:!1,arrayOfAnswers:[]},e.getGame=e.getGame.bind(Object(B.a)(e)),e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.token;this.getGame(e)}},{key:"getGame",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n,a,r,c,o=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:n=e.sent,a=n.results,r=n.response_code,console.log(a),0,0===r?(c=[],console.log(this.randomNumber),a.forEach((function(e,t){var n=[e.correct_answer].concat(Object(P.a)(e.incorrect_answers));c[t]=n.sort(o.randomNumber)})),console.log(c),this.setState({gameQuestions:a,arrayOfAnswers:c})):this.getToken();case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.saveNewToken,e.next=3,T();case 3:n=e.sent,t(n),this.getGame(n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.gameQuestions,a=t.questionNumber,c=t.overTime,o=t.timerOn,s=t.nextButton,i=t.questionAnswered,u=t.redirectToFeedback,l=t.arrayOfAnswers;return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(g.a,{to:"/feedback"}),r.a.createElement(U,null),r.a.createElement("main",null,n.length>0&&r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"question-category"},Object(I.decode)(n[a].category)),r.a.createElement("h3",{"data-testid":"question-text"},Object(I.decode)(n[a].question)),r.a.createElement("div",{"data-testid":"answer-options"},l[a].map((function(t,o){return r.a.createElement("button",{key:"answer".concat(o),type:"button",onClick:function(){return e.checkAnswer(t)},"data-testid":t===n[a].correct_answer?"correct-answer":"wrong-answer-".concat(n[a].incorrect_answers.indexOf(t)),disabled:c||i,className:e.selectClass(t,n[a].correct_answer)},t)})),!s&&r.a.createElement(Q,{isOverTime:this.isOverTime,timerOn:o,getTime:this.getTime})),s&&r.a.createElement("button",{className:"my-3 btn btn-secondary",type:"button","data-testid":"btn-next",onClick:this.clickNextButton},"Next"))))}}]),n}(a.Component)),J=Object(i.b)((function(e){return{token:e.token,score:e.player.score,assertions:e.player.assertions}}),(function(e){return{saveNewToken:function(t){return e(d(t))},updateScoreDispatch:function(t){return e(function(e){return{type:"UPDATE_SCORE",payload:e}}(t))},defineNumberCorrectAnswer:function(t){return e(function(e){return{type:"UPDATE_CORRECT_ANSWERS",payload:e}}(t))}}}))(W),M=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",{"data-testid":"settings-title"},"Configura\xe7\xf5es")}}]),n}(a.Component),V=Object(i.b)()(M),K=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(N.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).saveOnStorage=function(){var t=e.props,n=t.name,a=t.score,r=t.picture,c=JSON.parse(localStorage.getItem("ranking"))||[],o={name:n,score:a,picture:r},s=[].concat(Object(P.a)(c),[o]);localStorage.setItem("ranking",JSON.stringify(s))},e.handlePlayAgainBtn=function(){e.props.history.push("/")},e}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.saveOnStorage()}},{key:"handleClick",value:function(){this.props.history.push("/ranking")}},{key:"render",value:function(){var e=this,t=this.props,n=t.assertions,a=t.score,c=n<3?"Could be better...":"Well Done!";return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement("main",null,r.a.createElement("h1",{className:"my-3","data-testid":"feedback-text"},c),r.a.createElement("label",{className:"mx-2",htmlFor:"total-score"},"Sua pontua\xe7\xe3o:",r.a.createElement("h2",{className:"mx-2",id:"total-score","data-testid":"feedback-total-score"},a)),r.a.createElement("label",{className:"mx-2",htmlFor:"total-questions"},"Voc\xea acertou:",r.a.createElement("h2",{className:"mx-2",id:"total-questions","data-testid":"feedback-total-question"},n)),r.a.createElement("button",{style:{backgroundColor:"#5a189a"},className:"mx-1 btn btn-primary",type:"button","data-testid":"btn-play-again",onClick:function(){return e.handlePlayAgainBtn()}},"Play Again"),r.a.createElement("button",{style:{backgroundColor:"#0077b6"},className:"mx-1 btn btn-primary","data-testid":"btn-ranking",type:"button",onClick:function(){return e.handleClick()}},"Ranking")))}}]),n}(a.Component),L=Object(i.b)((function(e){return{assertions:e.player.assertions,name:e.player.name,score:e.player.score,picture:e.player.picture}}),null)(K),$=function(e){Object(A.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(N.a)(this,n),(e=t.call(this)).state={ranking:JSON.parse(localStorage.getItem("ranking"))},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props.history,t=this.state.ranking;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("section",null,t.sort((function(e,t){return t.score-e.score})).map((function(e,t){return r.a.createElement("div",{key:"ranking".concat(t)},r.a.createElement("img",{src:e.picture,alt:"Foto do ".concat(e.name)}),r.a.createElement("span",{"data-testid":"player-name-".concat(t)},e.name),r.a.createElement("span",{"data-testid":"player-score-".concat(t)},e.score))}))),r.a.createElement("button",{style:{backgroundColor:"#0077b6"},className:"btn btn-primary",type:"button","data-testid":"btn-go-home",onClick:function(){return e.push("/")}},"Voltar \xe0 Login"))}}]),n}(r.a.Component);function z(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:O.a,className:"App-logo",alt:"logo"})),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:R}),r.a.createElement(g.b,{exact:!0,path:"/game",component:J}),r.a.createElement(g.b,{exact:!0,path:"/settings",component:V}),r.a.createElement(g.b,{exact:!0,path:"/feedback",component:L}),r.a.createElement(g.b,{exact:!0,path:"/ranking",component:$})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:v},r.a.createElement(s.a,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6a8e44ca.chunk.js.map