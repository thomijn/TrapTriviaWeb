(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/logo.a2a92be4.svg"},104:function(e,t,n){e.exports=n.p+"static/media/Stairsladyfoot.f666e377.svg"},107:function(e,t,n){e.exports=n(246)},112:function(e,t,n){},219:function(e,t){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(20),i=n.n(s),o=(n(112),n(21)),l=n(22),c=n(24),u=n(23),m=n(25),h=n(19),d=n(16),p=n.n(d),f=n(2),g=n.n(f);var v=function(e){var t,n;return t=!0===e.answerCorrect?"answercorrect":!0===e.answerFalse?"answerfalse":"answer",r.a.createElement("div",null,r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement("div",{className:t},r.a.createElement(p.a,{align:"center",variant:"h3",component:"h2"},(n=e.content,(new DOMParser).parseFromString("<!doctype html><body>"+n,"text/html").body.textContent)))))},w=n(26),E=n(17),y=n.n(E),b=n(27),S=n.n(b),C=n(18),j={paddingBottom:2,paddingTop:2};var k=Object(C.withStyles)(function(e){return{root:Object(w.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){var t=e.classes,n="True"===e.answercontent,a="False"===e.answercontent;return r.a.createElement("div",{style:{textAlign:"center"},className:"answerOption"},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(y.a,{square:!0,className:t.root,elevation:4},r.a.createElement(p.a,{variant:"h6"},r.a.createElement("p",null,"Selected answer "),r.a.createElement("hr",null),r.a.createElement(g.a,{item:!0,direction:"row",alignItems:"stretch",justify:"flex-start",container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(y.a,{style:j,square:!0,elevation:4},r.a.createElement("div",{className:n?"selectedtrue":"unselected"},r.a.createElement("p",null,"True")))),r.a.createElement(g.a,{item:!0,xs:6},r.a.createElement(y.a,{style:j,square:!0,elevation:4},r.a.createElement("div",{className:a?"selectedfalse":"unselected"},r.a.createElement("p",null,"False")))))),r.a.createElement("hr",null),r.a.createElement(S.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:e.onAnswerSelected},"SUBMIT"))))});var O=function(e){return r.a.createElement(g.a,{direction:"column",alignItems:"stretch",justify:"flex-start",container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(v,{content:e.question,answerFalse:e.answerFalse,answerCorrect:e.answerCorrect})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(k,{questionId:e.questionId,onAnswerSelected:e.onAnswerSelected,answercontent:e.answercontent})))};var q=function(e){return r.a.createElement("div",{className:"questionCount",style:{textAlign:"center"}},r.a.createElement("h2",null,"Question ",r.a.createElement("span",null,e.counter)," of ",r.a.createElement("span",null,e.total)))};var x=function(e){return r.a.createElement("h2",{className:"Score",style:{textAlign:"center"}},"Score: ",e.score)},A=n(99),T=n.n(A),I=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{percentage:this.props.percentage,strokeWidth:20,styles:{root:{width:200,marginLeft:35},path:{stroke:"#f88",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#d6d6d6"},text:{fill:"#f88",fontSize:"30px"}}})}}]),t}(r.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onNextquestion",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.a,{square:!0,className:e.root,elevation:4},r.a.createElement(q,{counter:this.props.questionId,total:this.props.questionTotal}),r.a.createElement(x,{score:this.props.score}),r.a.createElement(I,{percentage:this.props.percentage}))}}]),t}(r.a.Component),F=Object(C.withStyles)(function(e){return{root:Object(w.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(N),G=n(100),R=n.n(G);var B=function(e){return r.a.createElement(R.a,{className:"confetti",numberOfPieces:750,run:e.ConfettiShow,width:window.innerWidth,height:window.innerHeight})};var D=Object(C.withStyles)(function(e){return{root:Object(w.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(function(e){var t=e.classes;return r.a.createElement(g.a,{container:!0},r.a.createElement(B,{ConfettiShow:e.ConfettiShow}),r.a.createElement(g.a,{item:!0,sm:6},r.a.createElement(y.a,{square:!0,className:t.root,elevation:4},r.a.createElement(p.a,{variant:"h5"},"End result ",r.a.createElement("br",null),r.a.createElement("hr",null)),r.a.createElement(p.a,{variant:"h5"},r.a.createElement("strong",null,e.quizResult),"!"),r.a.createElement("hr",null),r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:e.onTryAgain},"PLAY AGAIN"))))}),M=n(101),W=n.n(M);var z=Object(C.withStyles)(function(e){return{root:Object(w.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),icon:{marginLeft:10}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:"start"},r.a.createElement(g.a,{direction:"column",alignItems:"stretch",justify:"flex-start",container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:9},r.a.createElement(y.a,{square:!0,className:t.root,elevation:4},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},r.a.createElement("strong",null,"TrapTrivia")),r.a.createElement("hr",null),r.a.createElement(p.a,{component:"p"},"Test your knowledge and climb up!"),r.a.createElement("hr",null),r.a.createElement(S.a,{variant:"outlined",color:"primary",onClick:e.handleClickOpenDialog},"Game instrutions",r.a.createElement(W.a,{className:t.icon,fontSize:"small"},"info_outlined")))),r.a.createElement(g.a,{item:!0,xs:9},r.a.createElement(y.a,{square:!0,className:t.root,elevation:4},r.a.createElement(p.a,{gutterBottom:!0,component:"p",variant:"h5"},"Start a game!"),r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:e.onStartGame},"START GAME")))))}),V=n(102),L=n.n(V),P=(n(92),n(103)),Q=n.n(P);var Y=function(){return r.a.createElement("div",{id:"appheader"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:Q.a,alt:"footerimg"}),r.a.createElement("h3",null,"TrapTrivia")))},U=n(104),_=n.n(U);var J=function(){return r.a.createElement("img",{className:"footerimg",src:_.a,alt:"footerimg"})},H=n(106),$=n(28),K=n.n($),X=n(105),Z=n.n(X),ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){n.props.onClose(n.props.selectedValue)},n.handleListItemClick=function(e){n.props.onClose(e)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.classes,e.onClose,e.selectedValue,Object(H.a)(e,["classes","onClose","selectedValue"]));return r.a.createElement(Z.a,Object.assign({fullWidth:!0,open:!0,maxWidth:"sm",onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},t),r.a.createElement(K.a,{id:"simple-dialog-title"},"Instructions"),r.a.createElement(K.a,{id:"simple-dialog-title"},"- Tee questions for the game are true or false questions"),r.a.createElement(K.a,{id:"simple-dialog-title"},"- You answer by standing on either the true or false side "),r.a.createElement(K.a,{id:"simple-dialog-title"},"- You have 10 seconds to answer"),r.a.createElement(K.a,{id:"simple-dialog-title"},"- If you can complete all the questions you win!"),r.a.createElement(K.a,{id:"simple-dialog-title"},"- If you answer incorrectly you have to start over"))}}]),t}(r.a.Component),te=[],ne=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClickOpenDialog=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={counter:0,result:0,questionId:1,question:"",answerOptions:[],answerGiven:"",answer:"",score:0,mode:"begin",response:void 0,endpoint:"http://127.0.0.1:4001",open:!1,answerCorrect:!1,answerFalse:!1,ConfettiShow:!1,percentage:0,outoftime:!1},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(h.a)(Object(h.a)(n))),n.onTryAgain=n.onTryAgain.bind(Object(h.a)(Object(h.a)(n))),n.startGame=n.startGame.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.endpoint;return L()(t).on("FromAPI",function(t){1===parseInt(t)?e.setState({response:"True"}):0===parseInt(t)?e.setState({response:"False"}):e.setState({response:"nothing"})}),fetch("https://opentdb.com/api.php?amount=2&difficulty=easy&type=boolean").then(function(e){return e.json()}).then(function(e){console.log(e.results),te=e.results.map(function(e){return{question:e.question,answer:e.correct_answer}})}).then(function(t){return e.setState({question:te[0].question,answer:te[0].answer})}).catch(function(e){console.error(e)}),te}},{key:"onStartCounter",value:function(){var e=this;this.interval=setInterval(function(){e.setState({percentage:e.state.percentage+10}),110===e.state.percentage&&(clearInterval(e.interval),e.setState({outoftime:!0}),e.setResults())},1e3)}},{key:"setUserAnswer",value:function(){var e=this;this.setState({answerGiven:this.state.response},function(){return e.handleAnswerSubmit()})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({answerCorrect:!1,counter:e,questionId:t,question:te[e].question,answerGiven:"",answer:te[e].answer,percentage:0})}},{key:"handleAnswerSubmit",value:function(){var e=this;"nothing"!==this.state.answerGiven?this.state.answerGiven===this.state.answer?(console.log("vraag goed beantwoord"),this.setState({score:this.state.score+10}),this.state.questionId<te.length?(this.onAnswerCorrect(),setTimeout(function(){return e.setNextQuestion()},500)):(this.onAnswerCorrect(),setTimeout(function(){return e.setResults(e.getResults())},500))):(this.onAnswerFalse(),setTimeout(function(){return e.setResults(e.getResults())},500)):console.log("voer wat in")}},{key:"onAnswerCorrect",value:function(){this.setState({answerCorrect:!0})}},{key:"onAnswerFalse",value:function(){this.setState({answerFalse:!0})}},{key:"handleAnswerSelected",value:function(){this.setUserAnswer()}},{key:"getResults",value:function(){return this.state.score}},{key:"setResults",value:function(e){this.result=this.state.score,this.result>=1&&this.result<50?this.setState({result:e}):this.result===10*te.length?this.setState({ConfettiShow:!0,result:"You have completed TrapTrivia",confetti:!0}):this.state.outoftime?this.setState({result:"You ran out of time.."}):(console.log(this.state.outoftime),this.setState({result:"Not even one?"}))}},{key:"renderQuiz",value:function(){return"game"===this.state.mode?r.a.createElement("div",{className:"container"},r.a.createElement(g.a,{direction:"row",alignItems:"center",justify:"flex-start",spacing:24,container:!0},r.a.createElement(g.a,{item:!0,xs:5},r.a.createElement(O,{answerCorrect:this.state.answerCorrect,answerFalse:this.state.answerFalse,notification:this.state.notification,answercontent:this.state.response,question:this.state.question,onAnswerSelected:this.handleAnswerSelected,getAnswerClasses:this.getAnswerClasses})),r.a.createElement(g.a,{container:!0,direction:"column",alignItems:"stretch",justify:"flex-start",item:!0,xs:3},r.a.createElement(g.a,{item:!0},r.a.createElement(F,{percentage:this.state.percentage,score:this.state.score,questionId:this.state.questionId,questionTotal:te.length}))))):null}},{key:"renderStart",value:function(){return"begin"===this.state.mode?r.a.createElement("div",{className:"container"},r.a.createElement(g.a,{container:!0,alignItems:"stretch",justify:"flex-start"},r.a.createElement(g.a,{item:!0,xs:8},r.a.createElement(z,{handleClickOpenDialog:this.handleClickOpenDialog,onStartGame:this.startGame}),r.a.createElement(ee,{selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleClose})))):null}},{key:"restartGame",value:function(){var e=this;clearInterval(this.interval),fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean").then(function(e){return e.json()}).then(function(e){te=e.results.map(function(e){return{question:e.question,answer:e.correct_answer}})}).then(function(t){return e.setState({question:te[0].question,answer:te[0].answer})}).catch(function(e){console.error(e)}),setTimeout(function(){return e.setState({mode:"begin",result:0,counter:0,questionId:1,score:0,question:te[0].question,answer:te[0].answer,answerFalse:!1,answerCorrect:!1,ConfettiShow:!1,percentage:0})},500)}},{key:"startGame",value:function(){var e=this;setTimeout(function(){return e.setState({mode:"game",percentage:0})},500),clearInterval(this.interval),this.onStartCounter()}},{key:"renderResult",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g.a,{direction:"column",alignItems:"flex-start",justify:"flex-start",container:!0,spacing:24},r.a.createElement(D,{ConfettiShow:this.state.ConfettiShow,quizResult:this.state.result,onTryAgain:this.onTryAgain})))}},{key:"onTryAgain",value:function(){this.restartGame()}},{key:"render",value:function(){return console.log(this.state.percentage),r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),this.renderStart(),this.state.result?this.renderResult():this.renderQuiz(),r.a.createElement(J,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=Object(C.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#e26161",dark:"#FF4D4D",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{fontFamily:'"source sans pro"',useNextVariants:!0}});i.a.render(r.a.createElement(C.MuiThemeProvider,{theme:ae},r.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.314139f6.chunk.js.map