(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(42),s=n.n(r),i=(n(49),n(50),n(16)),c=n(17),u=n(19),l=n(18),h=n(4),p=n(20),m=n(26),v=n.n(m),y=n(21),d=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={pressed:!1},n.playSynth=n.playSynth.bind(Object(h.a)(n)),n.stopSynth=n.stopSynth.bind(Object(h.a)(n)),n.checkMouseDown=n.checkMouseDown.bind(Object(h.a)(n)),n.touchMove=n.touchMove.bind(Object(h.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.synth=new y.Synth({envelope:this.props.envelope}).toMaster(),this.startTime=null}},{key:"playSynth",value:function(t){t.preventDefault(),this.setState({pressed:!0}),this.synth.triggerAttack(this.props.pitch),this.startTime=y.context.currentTime.toFixed(2)}},{key:"stopSynth",value:function(t){t.preventDefault(),this.setState({pressed:!1}),this.synth.triggerRelease(),null!==this.startTime&&this.props.returnNote({pitch:this.props.pitch,startTime:this.startTime,endtime:y.context.currentTime.toFixed(2)}),this.startTime=null}},{key:"checkMouseDown",value:function(t){1===t.buttons||3===t.buttons?this.playSynth(t):this.stopSynth(t)}},{key:"touchMove",value:function(t){console.log(t),console.log(this.props.pitch),this.setState({pressed:!0})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement("button",{onMouseDown:function(e){return t.playSynth(e)},onMouseUp:function(e){return t.stopSynth(e)},onTouchStart:function(e){return t.playSynth(e)},onTouchEnd:function(e){return t.stopSynth(e)},onMouseEnter:function(e){return t.checkMouseDown(e)},onMouseLeave:function(e){return t.stopSynth(e)},className:this.state.pressed?"drum-button pressed":"drum-button"}))}}]),e}(o.Component),f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={sequence:[],octave:3},n.returnNote=n.returnNote.bind(Object(h.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){this.envelope={attack:.01,decay:.1,sustain:.5,release:1,attackCurve:"linear",decayCurve:"exponential",releaseCurve:"exponential"}}},{key:"returnNote",value:function(t){var e=this.state.sequence;console.log(t),e.push({pitch:t.pitch,startTime:t.startTime,endTime:t.endTime}),this.setState({sequence:e})}},{key:"render",value:function(){var t=this,e=this.state.octave,n=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return n=n.map(function(t){return t+e}),a.a.createElement("div",{className:"pad"},a.a.createElement(v.a,{container:!0,spacing:24,justify:"center"},n.map(function(e,n){return a.a.createElement(v.a,{item:!0,sm:2,key:n},a.a.createElement(d,{pitch:e,returnNote:t.returnNote,evelope:t.envelope}))})))}}]),e}(o.Component);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},44:function(t,e,n){t.exports=n(124)},49:function(t,e,n){},50:function(t,e,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.e9d9e29f.chunk.js.map