(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3871,191,3691],{"/UXv":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a=n("QF4Q")
var i=n("pgSO")
function r(e){var t=e&&Object(a["a"])(e)
return t&&Object(i["a"])()===t}},"3zPy":function(e,t){function n(e){if(e&&"object"===typeof e){var t=e.which||e.keyCode||e.charCode
t&&(e=t)}if("number"===typeof e)return o[e]
var n=String(e)
var r=a[n.toLowerCase()]
if(r)return r
r=i[n.toLowerCase()]
if(r)return r
if(1===n.length)return n.charCodeAt(0)
return}n.isEventKey=function(e,t){if(e&&"object"===typeof e){var n=e.which||e.keyCode||e.charCode
if(null===n||void 0===n)return false
if("string"===typeof t){var r=a[t.toLowerCase()]
if(r)return r===n
r=i[t.toLowerCase()]
if(r)return r===n}else if("number"===typeof t)return t===n
return false}}
t=e.exports=n
var a=t.code=t.codes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,"pause/break":19,"caps lock":20,esc:27,space:32,"page up":33,"page down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,command:91,"left command":91,"right command":93,"numpad *":106,"numpad +":107,"numpad -":109,"numpad .":110,"numpad /":111,"num lock":144,"scroll lock":145,"my computer":182,"my calculator":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222}
var i=t.aliases={windows:91,"⇧":16,"⌥":18,"⌃":17,"⌘":91,ctl:17,control:17,option:18,pause:19,break:19,caps:20,return:13,escape:27,spc:32,spacebar:32,pgup:33,pgdn:34,ins:45,del:46,cmd:91}
for(r=97;r<123;r++)a[String.fromCharCode(r)]=r-32
for(var r=48;r<58;r++)a[r-48]=r
for(r=1;r<13;r++)a["f"+r]=r+111
for(r=0;r<10;r++)a["numpad "+r]=r+96
var o=t.names=t.title={}
for(r in a)o[a[r]]=r
for(var s in i)a[s]=i[s]},"4Awi":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function a(e){return"string"===typeof e?e:e.displayName||e.name}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e&&e.type){var n=t.map((function(e){return a(e)}))
return n.indexOf(a(e.type))>=0}return false}},"65NJ":function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
n("w2hD")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let a=n.offset(),r=n.outerWidth(),o=n.outerHeight(),s=a.top,c=s+o,l=a.left,u=l+r,d="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),f=this.scrollLeft(),h=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
s-=e.top
c-=e.top
l-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){h=i()(window).height()
i()("#wizard_box:visible").length>0&&(h-=i()("#wizard_box:visible").height())
p=i()(window).width()
s-=d
l-=f
c-=d
u-=f}s<0||h<o&&c>h?t.scrollTop=s+d:c>h&&(t.scrollTop=c+d-h+20)
l<0?t.scrollLeft=l+f:u>p&&(t.scrollLeft=u+f-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"6SzX":function(e,t,n){"use strict"
n.d(t,"a",(function(){return y}))
var a=n("Ff2n")
var i=n("1OyB")
var r=n("vuIU")
var o=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var u=n("17x9")
var d=n.n(u)
var f=n("J2CL")
var h=n("KgFQ")
var p=n("jtGx")
var m,v,g,b
var _={componentId:"ergWt",template:function(e){return"\n\n.ergWt_bGBk{border:0;clip:rect(0 0 0 0);height:0.0625rem;inset-inline-start:0;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;top:0;width:0.0625rem}\n\n[dir=ltr] .ergWt_bGBk{left:0}\n\n[dir=rtl] .ergWt_bGBk{right:0}"},root:"ergWt_bGBk"}
var y=(m=Object(f["j"])(null,_),m(v=(b=g=function(e){Object(o["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e=this.props,t=e.children,i=Object(a["a"])(e,["children"])
var r=Object(h["a"])(n,i)
return l.a.createElement(r,Object.assign({},Object(p["b"])(i),{className:_.root}),t)}}])
n.displayName="ScreenReaderContent"
return n}(c["Component"]),g.propTypes={as:d.a.elementType,children:d.a.node},g.defaultProps={as:"span",children:null},b))||v)},BrAc:function(e,t,n){"use strict"
var a=n("vDqi")
var i=n.n(a)
i.a.defaults.xsrfCookieName="_csrf_token"
i.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=i.a.defaults.headers.common.Accept
i.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=i.a},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},"E+IV":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a=n("q1tI")
var i=n.n(a)
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("function"===typeof e){if(!(e.prototype&&e.prototype.isReactComponent))return e(t)
return i.a.createElement(e,t)}return e}},FZ6K:function(e,t,n){"use strict"
var a=n("RtDj")
var i=n("q1tI")
var r=n.n(i)
n("17x9")
var o=n("bZJi")
var s=n("HGxv")
const c=Object(s["useScope"])("assignment")
function l(e){return r.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),c.t("SpeedGrader™"))}function u(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let n={className:t,href:e.href}
e.disabled&&(n={...n,"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}})
return e.disabled?Object(a["a"])(o["a"],{placement:"bottom",renderTip:e.disabledTip,color:"primary"},void 0,l(n)):l(n)}t["a"]=u},HMVb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var a=n("ODXe")
var i=n("i/8D")
var r=n("DUTp")
var o=n("IPIv")
var s={}
function c(e,t){if(!i["a"])return 16
var n=e||Object(r["a"])(e).documentElement
if(!t&&s[n])return s[n]
var a=parseInt(Object(o["a"])(n).getPropertyValue("font-size"))
s[n]=a
return a}var l=n("CyAq")
function u(e,t){var n=t||document.body
if(!e||"number"===typeof e)return e
var i=Object(l["a"])(e),r=Object(a["a"])(i,2),o=r[0],s=r[1]
return"rem"===s?o*c():"em"===s?o*c(n):o}},aq8L:function(e,t,n){"use strict"
var a=n("HGxv")
var i=n("ouhR")
var r=n.n(i)
var o=n("gI0r")
var s=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const c=Object(a["useScope"])("instructure_misc_plugins")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(o["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(o["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const a=t.innerWidth()
e.remove()
return n-a}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let a=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!a){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(s["a"])()
r.a.ajaxJSON(e.url,"DELETE",a,n=>{e.success.call(t,n)},(n,a,i,o)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,a,i,o):r.a.ajaxJSON.unhandledXHRs.push(a)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){a=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:i,buttons:[{text:c.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:c.t("#buttons.delete","Delete"),class:o,click(){a=true
r()(this).dialog("close")}}]},t))
return}a=confirm(e.message)}i()}
r.a.fn.confirmDelete.defaults={get message(){return c.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let a=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(a="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let o=false
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){const e=r.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(o=true)}o||r.a._checkFragments.fragmentList.push({doc:i,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{a&&a.length>0?i.triggerHandler("document_fragment_change",a):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const a=n.doc
if(a[0].location.hash!=n.fragment){a.triggerHandler("document_fragment_change",a[0].location.hash)
n.fragment=a[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each((function(t){r()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const a=this.width()
const i=this.height()
const o=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:a+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),a=r()("#wrapper"),i=r()("#main"),o=r()("#not_right_side"),s=r()(window),c=r()(this).add(t.alsoResize)
function l(){c.height(0)
const e=s.height()-(a.offset().top+a.outerHeight())+(i.height()-o.height()),l=Math.max(400,e)
c.height(l)
r.a.isFunction(t.onResize)&&t.onResize.call(n,l)}l()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",a=r()(this),i=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily"),fontWeight:a.css("fontWeight"),letterSpacing:a.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(n===(n=a.val()))return
i.text(n)
const r=i.width(),o=r+e.comfortZone>=t?r+e.comfortZone:t,s=a.width(),c=o<s&&o>=t||o>t&&o<e.maxWidth
c&&a.width(o)})}
i.insertAfter(a)
r()(this).bind("keyup keydown blur update change",o)}))
return this}
r.a},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var a=n("Ff2n")
var i=n("VTBJ")
var r=n("1OyB")
var o=n("vuIU")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var u=n.n(l)
var d=n("17x9")
var f=n.n(d)
var h=n("nAyT")
var p=n("KgFQ")
var m=n("jtGx")
var v=n("sQ3t")
var g=n("E+IV")
var b=n("UCAh")
var _=n("BTe1")
var y=n("J2CL")
var w=n("oXx0")
var x=n("jsCG")
var O=n("AdN2")
var j=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var S,I,T,C,k,N
var F={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var E=(S=Object(h["a"])("8.0.0",{tip:"renderTip",variant:"color"}),I=Object(w["a"])(),T=Object(y["j"])(j,F),S(C=I(C=T(C=(N=k=function(e){Object(s["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
e=t.call.apply(t,[this].concat(i))
e._id=Object(_["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(o["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,a=e.as
var r=this.state.hasFocus
var o={"aria-describedby":this._id}
if(a){var s=Object(p["a"])(n,this.props)
var c=Object(m["a"])(this.props,n.propTypes)
return u.a.createElement(s,Object.assign({},c,o),t)}return"function"===typeof t?t({focused:r,getTriggerProps:function(e){return Object(i["a"])({},o,{},e)}}):Object(v["a"])(this.props.children,o)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,i=t.isShowingContent,r=t.defaultIsShowingContent,o=t.on,s=t.placement,c=t.mountNode,l=t.constrain,d=t.offsetX,f=t.offsetY,h=t.positionTarget,p=t.onShowContent,v=t.onHideContent,b=t.tip,_=(t.variant,Object(a["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return u.a.createElement(x["a"],Object.assign({},Object(m["b"])(_),{isShowingContent:i,defaultIsShowingContent:r,on:o,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:s,color:"primary"===y?"primary-inverse":"primary",mountNode:c,constrain:l,shadow:"none",offsetX:d,offsetY:f,positionTarget:h,renderTrigger:function(){return e.renderTrigger()},onShowContent:p,onHideContent:v,onFocus:this.handleFocus,onBlur:this.handleBlur}),u.a.createElement("span",{id:this._id,className:F.root,role:"tooltip"},n?Object(g["a"])(n):b))}}])
n.displayName="Tooltip"
return n}(l["Component"]),k.propTypes={children:f.a.oneOfType([f.a.node,f.a.func]).isRequired,renderTip:f.a.oneOfType([f.a.node,f.a.func]),isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,as:f.a.elementType,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),color:f.a.oneOf(["primary","primary-inverse"]),placement:b["a"].placement,mountNode:b["a"].mountNode,constrain:b["a"].constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),positionTarget:f.a.oneOfType([O["a"],f.a.func]),onShowContent:f.a.func,onHideContent:f.a.func,tip:f.a.node,variant:f.a.oneOf(["default","inverse"])},k.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},N))||C)||C)||C)},"dwl/":function(e,t,n){"use strict"
var a=n("RtDj")
n("17x9")
var i=n("sTNg")
var r=n("HGxv")
n("q1tI")
const o=Object(r["useScope"])("assignment")
function s(e){return Object(a["a"])("option",{value:e.id},e.id,e.name)}function c(e){return Object(a["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>s(e)))}function l(e){return Object(a["a"])(i["a"],{id:"student-group-filter",label:e.label},void 0,Object(a["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(a["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o.t("Select One")),e.categories.map(e=>c(e))))}t["a"]=l},eGSd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var a,i,r,o
var s=0
var c=[]
var l=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var u=!!n.leading
var d="maxWait"in n
var f=!("trailing"in n)||!!n.trailing
var h=d?Math.max(+n.maxWait||0,t):0
function p(t){var n=a
var o=i
a=i=void 0
s=t
if(true!==l){r=e.apply(o,n)
return r}}function m(e){s=e
c.push(setTimeout(b,t))
return u?p(e):r}function v(e){var n=e-o
var a=e-s
var i=t-n
return d?Math.min(i,h-a):i}function g(e){var n=e-o
var a=e-s
return"undefined"===typeof o||n>=t||n<0||d&&a>=h}function b(){var e=Date.now()
if(g(e))return _(e)
c.push(setTimeout(b,v(e)))}function _(e){x()
if(f&&a)return p(e)
a=i=void 0
return r}function y(){l=true
x()
s=0
a=o=i=void 0}function w(){return 0===c.length?r:_(Date.now())}function x(){c.forEach((function(e){return clearTimeout(e)}))
c=[]}function O(){var e=Date.now()
var n=g(e)
for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u]
a=l
i=this
o=e
if(n){if(0===c.length)return m(o)
if(d){c.push(setTimeout(b,t))
return p(o)}}0===c.length&&c.push(setTimeout(b,t))
return r}O.cancel=y
O.flush=w
return O}},fY8A:function(e,t,n){"use strict"
n.r(t)
n.d(t,"default",(function(){return b}))
var a=n("ouhR")
var i=n.n(a)
var r=n("3O+N")
var o=n.n(r)
var s=n("HGxv")
n("BGrI")
var c=o.a.default
var l=c.template,u=c.templates=c.templates||{}
var d="/work/canvas-deploy/generated/ui/shared/module-sequence-footer/jst/ModuleSequenceFooter"
u[d]=l((function(e,t,n,a,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var r,o,s,c="",l=n.helperMissing,u=this.escapeExpression,d="function",f=this
function h(e,t){var a,i,r,o=""
o+='\n      <span class="module-sequence-footer-button--previous" data-tooltip="right" data-html-tooltip-title="'+u((a=(a=e&&e.previous,null==a||false===a?a:a.tooltip),typeof a===d?a.apply(e):a))+'">\n          <a\n            href="'+u((a=(a=e&&e.previous,null==a||false===a?a:a.url),typeof a===d?a.apply(e):a))+'"\n            role="button"\n            class="Button"\n            aria-describedby="msf'
if(i=n.instanceNumber)a=i.call(e,{hash:{},data:t})
else{i=e&&e.instanceNumber
a=typeof i===d?i.call(e,{hash:{},data:t}):i}o+=u(a)+'-previous-desc"\n            aria-label="'+u((i=n.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},i?i.call(e,"previous_module_item_a9e57348","Previous Module Item",r):l.call(e,"t","previous_module_item_a9e57348","Previous Module Item",r)))
a=n["if"].call(e,(a=e&&e.previous,null==a||false===a?a:a.externalItem),{hash:{},inverse:f.noop,fn:f.program(2,p,t),data:t});(a||0===a)&&(o+=a)
o+='"\n          >\n            <i class="icon-mini-arrow-left"></i>'+u((i=n.t||e&&e.t,r={hash:{scope:"jquery.module_sequence_footer"},data:t},i?i.call(e,"previous","Previous",r):l.call(e,"t","previous","Previous",r)))+'\n            <span id="msf'
if(i=n.instanceNumber)a=i.call(e,{hash:{},data:t})
else{i=e&&e.instanceNumber
a=typeof i===d?i.call(e,{hash:{},data:t}):i}o+=u(a)+'-previous-desc" class="hidden" hidden>'+u((a=(a=e&&e.previous,null==a||false===a?a:a.tooltipText),typeof a===d?a.apply(e):a))+"</span>\n          </a>\n      </span>\n    "
return o}function p(e,t){var a,i,r=""
r+=" - "+u((a=n.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"opens_in_new_window_b4b99243","opens in new window",i):l.call(e,"t","opens_in_new_window_b4b99243","opens in new window",i)))
return r}function m(e,t){var a,i,r,o=""
o+='\n      <span class="module-sequence-footer-button--next" data-tooltip="left" data-html-tooltip-title="'+u((a=(a=e&&e.next,null==a||false===a?a:a.tooltip),typeof a===d?a.apply(e):a))+'">\n        <a\n          href="'+u((a=(a=e&&e.next,null==a||false===a?a:a.url),typeof a===d?a.apply(e):a))+'"\n          role="button"\n          class="Button"\n          aria-describedby="msf'
if(i=n.instanceNumber)a=i.call(e,{hash:{},data:t})
else{i=e&&e.instanceNumber
a=typeof i===d?i.call(e,{hash:{},data:t}):i}o+=u(a)+'-next-desc"\n          aria-label="'+u((i=n.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},i?i.call(e,"next_module_item_19e835f3","Next Module Item",r):l.call(e,"t","next_module_item_19e835f3","Next Module Item",r)))
a=n["if"].call(e,(a=e&&e.next,null==a||false===a?a:a.externalItem),{hash:{},inverse:f.noop,fn:f.program(2,p,t),data:t});(a||0===a)&&(o+=a)
o+='"\n            '
a=n["if"].call(e,(a=e&&e.next,null==a||false===a?a:a.modules_tab_disabled),{hash:{},inverse:f.noop,fn:f.program(5,v,t),data:t});(a||0===a)&&(o+=a)
o+="\n          "+u((i=n.disabledIf||e&&e.disabledIf,r={hash:{},data:t},i?i.call(e,(a=e&&e.next,null==a||false===a?a:a.modules_tab_disabled),r):l.call(e,"disabledIf",(a=e&&e.next,null==a||false===a?a:a.modules_tab_disabled),r)))+"\n        >\n          "+u((i=n.t||e&&e.t,r={hash:{scope:"jquery.module_sequence_footer"},data:t},i?i.call(e,"next","Next",r):l.call(e,"t","next","Next",r)))+'<i class="icon-mini-arrow-right"></i>\n          <span id="msf'
if(i=n.instanceNumber)a=i.call(e,{hash:{},data:t})
else{i=e&&e.instanceNumber
a=typeof i===d?i.call(e,{hash:{},data:t}):i}o+=u(a)+'-next-desc" class="hidden" hidden>'+u((a=(a=e&&e.next,null==a||false===a?a:a.tooltipText),typeof a===d?a.apply(e):a))+"</span>\n        </a>\n      </span>\n    "
return o}function v(e,t){return' aria-disabled="true" '}c+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer' role=\"navigation\" aria-label=\""+u((o=n.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:i},o?o.call(t,"module_navigation_97043417","Module Navigation",s):l.call(t,"t","module_navigation_97043417","Module Navigation",s)))+'">\n  <div class="module-sequence-footer-content">\n    '
r=n["if"].call(t,(r=t&&t.previous,null==r||false===r?r:r.show),{hash:{},inverse:f.noop,fn:f.program(1,h,i),data:i});(r||0===r)&&(c+=r)
c+="\n\n    "
r=n["if"].call(t,(r=t&&t.next,null==r||false===r?r:r.show),{hash:{},inverse:f.noop,fn:f.program(4,m,i),data:i});(r||0===r)&&(c+=r)
c+="\n  </div>\n</div>\n"
return c}))
var f=u[d]
var h=n("Y/W1")
var p=n.n(h)
var m=n("gI0r")
n("dhbk")
const v=Object(s["useScope"])("sequence_footer")
let g=0
i.a.fn.moduleSequenceFooter=function(e={}){if(!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID"
this.msfAnimation=e=>this.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)
if(!this.data("msfInstance")){this.msfInstance=new i.a.fn.moduleSequenceFooter.MSFClass(e)
this.data("msfInstance",this.msfInstance)
this.msfInstance.fetch().done(()=>{if(this.msfInstance.hide){this.hide()
return}this.html(f({instanceNumber:this.msfInstance.instanceNumber,previous:this.msfInstance.previous,next:this.msfInstance.next}))
e&&void 0!==e.animation&&this.msfAnimation(e.animation)
this.show()
i()(window).triggerHandler("resize")
e.onFetchSuccess&&e.onFetchSuccess()})}return this}
class b{constructor(e={}){this.iconClasses={ModuleItem:"icon-module",File:"icon-paperclip",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link",ExternalUrl:"icon-link","Lti::MessageHandler":"icon-link"}
this.success=e=>{this.modules=e.modules
if(!(e&&e.items&&1===e.items.length)){this.hide=true
return}this.item=e.items[0];(this.previous.show=this.item.prev)&&this.buildPreviousData()
if(this.item.next||this.awaitingPathProgress()){this.next.show=true
const e=this.awaitingPathProgress()
e?this.buildNextPathData():this.buildNextData()}}
this.instanceNumber=g++
this.courseID=e.courseID||"undefined"!==typeof ENV&&ENV.course_id
this.assetID=e.assetID
this.assetType=e.assetType
this.location=e.location||document.location
this.previous={}
this.next={}
this.url=`/api/v1/courses/${this.courseID}/module_item_sequence`}getQueryParams(e){let t
e=e.split("+").join(" ")
const n={}
const a=/[?&]?([^=]+)=([^&]*)/g
while(t=a.exec(e))n[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return n}fetch(){const e=this.getQueryParams(this.location.search)
return e.module_item_id?i.a.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:true},this.success,null,{}):i.a.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:true},this.success,null,{})}buildPreviousData(){this.previous.url=this.item.prev.html_url
this.previous.externalItem="ExternalUrl"===this.item.prev.type&&this.item.prev.new_tab
if(this.item.current.module_id===this.item.prev.module_id){this.previous.tooltip=`<i class='${Object(m["a"])(this.iconClasses[this.item.prev.type])}'></i> ${Object(m["a"])(this.item.prev.title)}`
this.previous.tooltipText=v.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})}else{const e=p.a.find(this.modules,e=>e.id===this.item.prev.module_id)
this.previous.tooltip=`<strong style='float:left'>${Object(m["a"])(v.t("prev_module","Previous Module:"))}</strong> <br> ${Object(m["a"])(e.name)}`
this.previous.tooltipText=v.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name})}}buildNextPathData(){const e=this.item.mastery_path
if(e.awaiting_choice){this.next.url=e.choose_url
this.next.tooltipText=v.t("Choose the next mastery path")}else{const t=v.t("Next mastery path is currently locked")
const n=v.t("Next mastery path is still processing, please periodically refresh the page")
const a=e.locked?t:n
this.next.modules_tab_disabled=e.modules_tab_disabled
this.next.url=e.modules_url
this.next.tooltipText=a}this.next.tooltip=`<i class='${Object(m["a"])(this.iconClasses.ModuleItem)}'/> ${this.next.tooltipText}`}buildNextData(){this.next.url=this.item.next.html_url
this.next.externalItem="ExternalUrl"===this.item.next.type&&this.item.next.new_tab
if(this.item.current.module_id===this.item.next.module_id){this.next.tooltip=`<i class='${Object(m["a"])(this.iconClasses[this.item.next.type])}'></i> ${Object(m["a"])(this.item.next.title)}`
this.next.tooltipText=v.t("Next: *item*",{wrapper:this.item.next.title})}else{const e=p.a.find(this.modules,e=>e.id===this.item.next.module_id)
this.next.tooltip=`<strong style='float:left'>${Object(m["a"])(v.t("next_module","Next Module:"))}</strong> <br> ${Object(m["a"])(e.name)}`
this.next.tooltipText=v.t("next_module_desc","Next Module: *module*",{wrapper:e.name})}}awaitingPathProgress(){const e=this.item.mastery_path
if(e&&e.is_student)return e.awaiting_choice||e.locked||e.still_processing}}i.a.fn.moduleSequenceFooter.MSFClass=b},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("QF4Q")
var i=n("i/8D")
var r=n("EgqM")
var o=n("DUTp")
function s(e){var t={top:0,left:0,height:0,width:0}
if(!i["a"])return t
var n=Object(a["a"])(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var c=e===document?document:Object(o["a"])(n)
var l=c&&c.documentElement
if(!l||!Object(r["a"])(l,n))return t
var u=n.getBoundingClientRect()
var d
for(d in u)t[d]=u[d]
if(c!==document){var f=c.defaultView.frameElement
if(f){var h=s(f)
t.top+=h.top
t.bottom+=h.top
t.left+=h.left
t.right+=h.left}}return{top:t.top+(window.pageYOffset||l.scrollTop)-(l.clientTop||0),left:t.left+(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:c.body.clientWidth-t.width-t.left,bottom:c.body.clientHeight-t.height-t.top}}},k72m:function(e,t,n){"use strict"
n.d(t,"b",(function(){return r}))
n.d(t,"a",(function(){return o}))
var a=n("ODXe")
var i={center:"center",start:"end",end:"start",top:"bottom",bottom:"top",stretch:"stretch",offscreen:"offscreen"}
function r(e,t){return s(e,(function(e,t){return[i[e],t]}),t)}function o(e,t){return s(e,(function(e,t){return[e,t].map((function(e){return"start"===e||"end"===e?i[e]:e}))}),t)}function s(e,t,n){var i=Array.isArray(e)?e:e.split(" "),r=Object(a["a"])(i,2),o=r[0],s=r[1]
var c=t(o,s).filter((function(e){return e}))
return n?c.join(n):c}},kR0I:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("KQm4")
var i=n("QF4Q")
function r(e,t){var n=e&&Object(i["a"])(e)
if(!n)return false
return n.matches?n.matches(t):n.msMatchesSelector(t)}var o=n("IPIv")
function s(e,t,n){var o=Object(i["a"])(e)
if(!o||"function"!==typeof o.querySelectorAll)return[]
var s="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]"
var c=Array.from(o.querySelectorAll(s))
n&&r(o,s)&&(c=[].concat(Object(a["a"])(c),[o]))
return c.filter((function(e){return"function"===typeof t?t(e)&&d(e):d(e)}))}function c(e){var t=Object(o["a"])(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function l(e){var t=["fixed","absolute"]
if(t.includes(e.style.position.toLowerCase()))return true
if(t.includes(Object(o["a"])(e).getPropertyValue("position").toLowerCase()))return true
return false}function u(e){while(e){if(e===document.body)break
if(c(e))return false
if(l(e))break
e=e.parentNode}return true}function d(e){return!e.disabled&&u(e)}},msTH:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var r=n("Y/W1")
var o=n.n(r)
var s=n("gI0r")
var c=n("HGxv")
const l=Object(c["useScope"])("user_content")
const u={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=i()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=i()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=i()(`<a\n        id='media_comment_${Object(s["a"])(i()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(s["a"])(i()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(s["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(s["a"])(i()(e).attr("data-alt"))}'\n      />`)
t.html(i()(e).html())
return t},convert(e,t={}){const n=i()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=i()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const a=i()(`<form\n            action='${Object(s["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(s["a"])(t)}'\n            id='form-${Object(s["a"])(t)}'\n          />`)
a.append(i()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
a.append(i()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
i()("body").append(a)
setTimeout(()=>a.submit(),0)
return i()(`<iframe\n            class='user_content_iframe'\n            name='${Object(s["a"])(t)}'\n            style='width: ${Object(s["a"])(e.data("uc_width"))}; height: ${Object(s["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(s["a"])(l.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=i()(t)
const a=u.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(a)})}return n.html()}}
t["a"]=u},pgSO:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){try{return(e||document).activeElement}catch(e){}}},rCtJ:function(e,t,n){"use strict"
n.r(t)
var a=n("ouhR")
var i=n.n(a)
n("fY8A")
var r=n("RtDj")
var o=n("BrAc")
var s=n("HGxv")
var c=n("q1tI")
var l=n.n(c)
var u=n("i8i4")
var d=n.n(u)
var f=n("FZ6K")
var h=n("dwl/")
const p=Object(s["useScope"])("module_sequence_footer")
class m extends c["Component"]{constructor(e){super(e)
this.state={selectedStudentGroupId:e.selectedStudentGroupId||"0"}
this.onStudentGroupSelected=this.onStudentGroupSelected.bind(this)}onStudentGroupSelected(e){if("0"!==e){o["a"].put(`/api/v1/courses/${this.props.courseId}/gradebook_settings`,{gradebook_settings:{filter_rows_by:{student_group_id:e}}})
this.setState({selectedStudentGroupId:e})}}render(){const e=this.props.filterSpeedGraderByStudentGroup&&"0"===this.state.selectedStudentGroupId
return l.a.createElement(l.a.Fragment,null,this.props.filterSpeedGraderByStudentGroup&&Object(r["a"])(h["a"],{categories:this.props.groupCategories,label:p.t("Select Group to Grade"),onChange:this.onStudentGroupSelected,value:this.state.selectedStudentGroupId}),Object(r["a"])(f["a"],{className:"btn button-sidebar-wide",disabled:e,disabledTip:p.t("Must select a student group first"),href:this.props.speedGraderUrl}))}}function v(){if(ENV.speed_grader_url){const e=document.getElementById("speed_grader_link_container")
d.a.render(Object(r["a"])(m,{courseId:ENV.COURSE_ID,filterSpeedGraderByStudentGroup:ENV.SETTINGS.filter_speed_grader_by_student_group,groupCategories:ENV.group_categories||[],selectedStudentGroupId:ENV.selected_student_group_id,speedGraderUrl:ENV.speed_grader_url}),e)}}i()(v)},rW8M:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("q1tI")
var i=n.n(a)
var r=n("4Awi")
var o=n("6SzX")
function s(e){var t=false
i.a.Children.forEach(e,(function(e){e&&!Object(r["a"])(e,[o["a"]])&&(t=true)}))
return t}}}])

//# sourceMappingURL=module_sequence_footer-c-79c201932f.js.map