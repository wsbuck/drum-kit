(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),s=n.n(o),i=(n(49),n(50),n(51),n(7)),c=n(8),u=n(10),l=n(9),h=n(3),p=n(11),m=n(4),d=n.n(m),v=n(1),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={pressed:!1},n.synth=(new v.Synth).toMaster(),n.playSynth=n.playSynth.bind(Object(h.a)(n)),n.stopSynth=n.stopSynth.bind(Object(h.a)(n)),n.checkMouseDown=n.checkMouseDown.bind(Object(h.a)(n)),n.touchMove=n.touchMove.bind(Object(h.a)(n)),n.startTime=null,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"playSynth",value:function(e){e.preventDefault(),this.setState({pressed:!0}),this.synth.triggerAttack(this.props.pitch),this.startTime=v.context.currentTime.toFixed(2)}},{key:"stopSynth",value:function(e){e.preventDefault(),this.setState({pressed:!1}),this.synth.triggerRelease(),null!==this.startTime&&this.props.returnNote({pitch:this.props.pitch,startTime:this.startTime,endtime:v.context.currentTime.toFixed(2)}),this.startTime=null}},{key:"checkMouseDown",value:function(e){1===e.buttons||3===e.buttons?this.playSynth(e):this.stopSynth(e)}},{key:"touchMove",value:function(e){console.log(e),console.log(this.props.pitch),this.setState({pressed:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onMouseDown:function(t){return e.playSynth(t)},onMouseUp:function(t){return e.stopSynth(t)},onTouchStart:function(t){return e.playSynth(t)},onTouchEnd:function(t){return e.stopSynth(t)},onMouseEnter:function(t){return e.checkMouseDown(t)},onMouseLeave:function(t){return e.stopSynth(t)},className:this.state.pressed?"drum-button pressed":"drum-button"}))}}]),t}(a.Component),b=(a.Component,function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={pressed:!1},n.synth=(new v.AMSynth).toMaster(),n.play=n.play.bind(Object(h.a)(n)),n.setupSchedule=n.setupSchedule.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setupSchedule()}},{key:"setupSchedule",value:function(){var e=this;v.Transport.schedule(function(t){e.synth.triggerAttackRelease("C2","8n",t)},0),v.Transport.schedule(function(t){e.synth.triggerAttackRelease("C2","8n",t)},1),v.Transport.schedule(function(t){e.synth.triggerAttackRelease("C2","8n",t)},2),v.Transport.loopEnd=5,v.Transport.loop=!0}},{key:"play",value:function(){this.setState({pressed:!this.state.pressed}),v.Transport.toggle()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onMouseDown:function(){return e.play()},className:this.state.pressed?"drum-button pressed":"drum-button"}))}}]),t}(a.Component)),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={sequence:[]},n.returnNote=n.returnNote.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.envelope={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"}}},{key:"returnNote",value:function(e){var t=this.state.sequence;console.log(e),t.push({pitch:e.pitch,startTime:e.startTime,endTime:e.endTime}),this.setState({sequence:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"pad"},r.a.createElement("div",{className:"play-button"},r.a.createElement(d.a,{container:!0,spacing:24,justify:"center"},r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"A5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"B5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"C5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"D5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"E5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"F5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"G5",returnNote:this.returnNote,envelope:this.envelope})),r.a.createElement(d.a,{item:!0,sm:2},r.a.createElement(y,{pitch:"A6",returnNote:this.returnNote,envelope:this.envelope})))),r.a.createElement("div",{className:"playback-buttons"},r.a.createElement(d.a,{container:!0,spacing:24,justify:"center"},r.a.createElement(b,null))))}}]),t}(a.Component);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,n){e.exports=n(125)},49:function(e,t,n){},50:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.6414f8c0.chunk.js.map