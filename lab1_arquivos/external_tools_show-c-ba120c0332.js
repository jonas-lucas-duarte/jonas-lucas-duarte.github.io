(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3813,191,3691],{"65NJ":function(t,e,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
n("w2hD")
i.a.fn.scrollToVisible=function(t){const e={}
const n=i()(t)
if(0===n.length)return
let s=n.offset(),o=n.outerWidth(),a=n.outerHeight(),r=s.top,l=r+a,c=s.left,u=c+o,d="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),m=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let t=i()("body").offset()
this.each((function(){try{t=i()(this).offset()
return false}catch(t){}}))
r-=t.top
l-=t.top
c-=t.left
u-=t.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){m=i()(window).height()
i()("#wizard_box:visible").length>0&&(m-=i()("#wizard_box:visible").height())
f=i()(window).width()
r-=d
c-=h
l-=d
u-=h}r<0||m<a&&l>m?e.scrollTop=r+d:l>m&&(e.scrollTop=l+d-m+20)
c<0?e.scrollLeft=c+h:u>f&&(e.scrollLeft=u+h-f+20)
1==e.scrollTop&&(e.scrollTop=0)
1==e.scrollLeft&&(e.scrollLeft=0)
this.scrollTop(e.scrollTop)
this.scrollLeft(e.scrollLeft)
return this}},G4i8:function(t,e,n){var s={"./__tests__/lti.resourceImported.test.js":["LFe7",4207],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4208],"./__tests__/lti.showAlert.test.js":["+y7l",4209],"./__tests__/org.imsglobal.lti.get_data.test.js":["CXUv",4195],"./__tests__/org.imsglobal.lti.put_data.test.js":["mElt",4196],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4210],"./lti.enableScrollEvents.js":["HVU3",4269],"./lti.fetchWindowSize.js":["OANa",4270],"./lti.frameResize.js":["bSyB",4197],"./lti.hideRightSideWrapper.js":["ozOx",4271],"./lti.removeUnloadMessage.js":["tjuu",4211],"./lti.resourceImported.js":["FC2N",4272],"./lti.screenReaderAlert.js":["YYEg",4273],"./lti.scrollToTop.js":["W/R1",4274],"./lti.setUnloadMessage.js":["6fDN",4212],"./lti.showAlert.js":["onLg",4275],"./lti.showModuleNavigation.js":["NSTA",4276],"./org.imsglobal.lti.capabilities.js":["zPPZ",4277],"./org.imsglobal.lti.get_data.js":["lH2A",4205],"./org.imsglobal.lti.put_data.js":["hugc",4206],"./requestFullWindowLaunch.js":["8IHO",4278],"./toggleCourseNavigationMenu.js":["ECMy",4279]}
function i(t){if(!n.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'")
e.code="MODULE_NOT_FOUND"
throw e}))
var e=s[t],i=e[0]
return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(s)}
i.id="G4i8"
t.exports=i},THl1:function(t,e,n){"use strict"
n.r(e)
var s=n("ouhR")
var i=n.n(s)
n("gI0r")
var o=n("M+ds")
n("fY8A")
var a=n("UWEG")
var r=n("oG6o")
var l=n("jFoo")
var c=n("3lLS")
var u=n.n(c)
u()(()=>{const t=i()("#tool_form")
const e=function(){const e=t.find("button")
t.show()
e.attr("disabled",false)
setTimeout(()=>{e.attr("disabled",true).text(e.data("expired_message"))},15e4)
t.submit((function(){i()(this).find(".load_tab,.tab_loaded").toggle()}))}
const n=function(){t.attr("target","_blank")
e()}
switch(t.data("tool-launch-type")){case"window":t.show()
n()
break
case"self":t.removeAttr("target")
try{t.submit()}catch(t){}break
default:try{t.submit()}catch(t){}i()("#tool_content").bind("load",()=>{if("https:"!==document.location.protocol||i()("#tool_form")[0].action.indexOf("https:")>-1){i()("#insecure_content_msg").hide()
t.hide()}})
setTimeout(()=>{if(i()("#insecure_content_msg").is(":visible")){i()("#load_failure").show()
n()}},3e3)}const s=t.data("tool-id")||"unknown"
const l=t.data("tool-path")
const c=t.data("message-type")||"tool_launch"
Object(o["a"])(c,s,l)
let u
let d,h
const m=i()(window)
u=i()(".tool_content_wrapper")
const f=new r["a"](d)
i()("iframe#tool_content")
const p=u.find(".before_external_content_info_alert, .after_external_content_info_alert")
p.on("focus",(function(t){u.find("iframe").css("border","2px solid #0374B5")
i()(this).removeClass("screenreader-only-tool")}))
p.on("blur",(function(t){u.find("iframe").css("border","none")
i()(this).addClass("screenreader-only-tool")}))
i()("body").hasClass("ic-full-screen-lti-tool")||(h=u.offset().top+i()("#footer").outerHeight(true))
u.length&&!i()("body").hasClass("ic-full-screen-lti-tool")&&m.resize(()=>{u.data("height_overridden")||f.resize_tool_content_wrapper(m.height()-h-i()("#sequence_footer").outerHeight(true))}).triggerHandler("resize")
null!=ENV.LTI&&null!=ENV.LTI.SEQUENCE&&i()("#module_sequence_footer").moduleSequenceFooter({assetType:"Lti",assetID:ENV.LTI.SEQUENCE.ASSET_ID,courseID:ENV.LTI.SEQUENCE.COURSE_ID})
i()("#content").on("click","#mark-as-done-checkbox",(function(){a["a"].toggle(this)}))})
Object(l["c"])()},UWEG:function(t,e,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
n("dhbk")
e["a"]={toggle(t){const e=i()(t).data.bind(i()(t))
return i.a.ajaxJSON(e("url"),e("isChecked")?"DELETE":"PUT",{},()=>{e("isChecked",!e("isChecked"))
i()(t).toggleClass("btn-success")
i()("i",t).toggleClass("icon-empty icon-complete")
i()(".mark-done-labels span",t).toggleClass("visible")})}}},aq8L:function(t,e,n){"use strict"
var s=n("HGxv")
var i=n("ouhR")
var o=n.n(i)
var a=n("gI0r")
var r=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(s["useScope"])("instructure_misc_plugins")
o.a.fn.setOptions=function(t,e){let n=t?"<option value=''>"+Object(a["a"])(t)+"</option>":""
null==e&&(e=[])
e.forEach(t=>{const e=Object(a["a"])(t)
n+='<option value="'+e+'">'+e+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(t){this.length&&t.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const t=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),e=t.find("div")
const n=e.innerWidth()
t.css("overflow-y","scroll")
const s=e.innerWidth()
t.remove()
return n-s}
o.a.fn.dim=function(t){return this.animate({opacity:.4},t)}
o.a.fn.undim=function(t){return this.animate({opacity:1},t)}
o.a.fn.confirmDelete=function(t){t=o.a.extend({},o.a.fn.confirmDelete.defaults,t)
const e=this
let n=null
let s=true
t.noMessage=t.noMessage||t.no_message
const i=function(){if(!s){t.cancelled&&o.a.isFunction(t.cancelled)&&t.cancelled.call(e)
return}t.confirmed||(t.confirmed=function(){e.dim()})
t.confirmed.call(e)
if(t.url){t.success||(t.success=function(t){e.fadeOut("slow",()=>{e.remove()})})
const s=t.prepareData?t.prepareData.call(e,n):{}
s.authenticity_token=Object(r["a"])()
o.a.ajaxJSON(t.url,"DELETE",s,n=>{t.success.call(e,n)},(n,s,i,a)=>{t.error&&o.a.isFunction(t.error)?t.error.call(e,n,s,i,a):o.a.ajaxJSON.unhandledXHRs.push(s)})}else{t.success||(t.success=function(){e.fadeOut("slow",()=>{e.remove()})})
t.success.call(e)}}
if(t.message&&!t.noMessage&&!o.a.skipConfirmations){if(t.dialog){s=false
const e="object"===typeof t.dialog?t.dialog:{}
const a=t.url.includes("assignments")?"btn-danger":"btn-primary"
n=o()(t.message).dialog(o.a.extend({},{modal:true,close:i,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:a,click(){s=true
o()(this).dialog("close")}}]},e))
return}s=confirm(t.message)}i()}
o.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(t){if(t&&true!==t){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var e=0;e<n.length;e++){const t=n[e]
t&&0===t.indexOf("hash=")&&(s="#"+t.substring(5))}this.bind("document_fragment_change",t)
const i=this
let a=false
for(e=0;e<o.a._checkFragments.fragmentList.length;e++){const t=o.a._checkFragments.fragmentList[e]
t.doc[0]==i[0]&&(a=true)}a||o.a._checkFragments.fragmentList.push({doc:i,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{s&&s.length>0?i.triggerHandler("document_fragment_change",s):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const t=o.a._checkFragments.fragmentList
for(let e=0;e<t.length;e++){const n=t[e]
const s=n.doc
if(s[0].location.hash!=n.fragment){s.triggerHandler("document_fragment_change",s[0].location.hash)
n.fragment=s[0].location.hash
o.a._checkFragments.fragmentList[e]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const t=this.eq(0)
t.hasClass("disabled_link")||t.click()}
o.a.fn.showIf=function(t){if(o.a.isFunction(t))return this.each((function(e){o()(this).showIf(t.call(this))}))
t?this.show():this.hide()
return this}
o.a.fn.disableIf=function(t){o.a.isFunction(t)&&(t=t.call(this))
this.prop("disabled",!!t)
return this}
o.a.fn.indicate=function(t){t=t||{}
let e
if("remove"==t){e=this.data("indicator")
e&&e.remove()
return}o()(".indicator_box").remove()
let n=this.offset()
t&&t.offset&&(n=t.offset)
const s=this.width()
const i=this.height()
const a=(t.container||this).zIndex()
e=o()(document.createElement("div"))
e.css({width:s+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
e.addClass("indicator_box")
e.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",e)
o()("body").append(e)
t&&t.singleFlash?e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):e.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
t&&t.scroll&&o()("html,body").scrollToVisible(e)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(t){console.log("%s: %o",t,this)
return this}
o.a.fn.fillWindowWithMe=function(t){const e=o.a.extend({minHeight:400},t),n=o()(this),s=o()("#wrapper"),i=o()("#main"),a=o()("#not_right_side"),r=o()(window),l=o()(this).add(e.alsoResize)
function c(){l.height(0)
const t=r.height()-(s.offset().top+s.outerHeight())+(i.height()-a.height()),c=Math.max(400,t)
l.height(c)
o.a.isFunction(e.onResize)&&e.onResize.call(n,c)}c()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
o.a.fn.autoGrowInput=function(t){t=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},t)
this.filter("input:text").each((function(){let e=t.minWidth||o()(this).width(),n="",s=o()(this),i=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(n===(n=s.val()))return
i.text(n)
const o=i.width(),a=o+t.comfortZone>=e?o+t.comfortZone:e,r=s.width(),l=a<r&&a>=e||a>e&&a<t.maxWidth
l&&s.width(a)})}
i.insertAfter(s)
o()(this).bind("keyup keydown blur update change",a)}))
return this}
o.a},fY8A:function(t,e,n){"use strict"
n.r(e)
n.d(e,"default",(function(){return b}))
var s=n("ouhR")
var i=n.n(s)
var o=n("3O+N")
var a=n.n(o)
var r=n("HGxv")
n("BGrI")
var l=a.a.default
var c=l.template,u=l.templates=l.templates||{}
var d="/work/canvas-deploy/generated/ui/shared/module-sequence-footer/jst/ModuleSequenceFooter"
u[d]=c((function(t,e,n,s,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,t.helpers)
i=i||{}
var o,a,r,l="",c=n.helperMissing,u=this.escapeExpression,d="function",h=this
function m(t,e){var s,i,o,a=""
a+='\n      <span class="module-sequence-footer-button--previous" data-tooltip="right" data-html-tooltip-title="'+u((s=(s=t&&t.previous,null==s||false===s?s:s.tooltip),typeof s===d?s.apply(t):s))+'">\n          <a\n            href="'+u((s=(s=t&&t.previous,null==s||false===s?s:s.url),typeof s===d?s.apply(t):s))+'"\n            role="button"\n            class="Button"\n            aria-describedby="msf'
if(i=n.instanceNumber)s=i.call(t,{hash:{},data:e})
else{i=t&&t.instanceNumber
s=typeof i===d?i.call(t,{hash:{},data:e}):i}a+=u(s)+'-previous-desc"\n            aria-label="'+u((i=n.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:e},i?i.call(t,"previous_module_item_a9e57348","Previous Module Item",o):c.call(t,"t","previous_module_item_a9e57348","Previous Module Item",o)))
s=n["if"].call(t,(s=t&&t.previous,null==s||false===s?s:s.externalItem),{hash:{},inverse:h.noop,fn:h.program(2,f,e),data:e});(s||0===s)&&(a+=s)
a+='"\n          >\n            <i class="icon-mini-arrow-left"></i>'+u((i=n.t||t&&t.t,o={hash:{scope:"jquery.module_sequence_footer"},data:e},i?i.call(t,"previous","Previous",o):c.call(t,"t","previous","Previous",o)))+'\n            <span id="msf'
if(i=n.instanceNumber)s=i.call(t,{hash:{},data:e})
else{i=t&&t.instanceNumber
s=typeof i===d?i.call(t,{hash:{},data:e}):i}a+=u(s)+'-previous-desc" class="hidden" hidden>'+u((s=(s=t&&t.previous,null==s||false===s?s:s.tooltipText),typeof s===d?s.apply(t):s))+"</span>\n          </a>\n      </span>\n    "
return a}function f(t,e){var s,i,o=""
o+=" - "+u((s=n.t||t&&t.t,i={hash:{i18n_inferred_key:true},data:e},s?s.call(t,"opens_in_new_window_b4b99243","opens in new window",i):c.call(t,"t","opens_in_new_window_b4b99243","opens in new window",i)))
return o}function p(t,e){var s,i,o,a=""
a+='\n      <span class="module-sequence-footer-button--next" data-tooltip="left" data-html-tooltip-title="'+u((s=(s=t&&t.next,null==s||false===s?s:s.tooltip),typeof s===d?s.apply(t):s))+'">\n        <a\n          href="'+u((s=(s=t&&t.next,null==s||false===s?s:s.url),typeof s===d?s.apply(t):s))+'"\n          role="button"\n          class="Button"\n          aria-describedby="msf'
if(i=n.instanceNumber)s=i.call(t,{hash:{},data:e})
else{i=t&&t.instanceNumber
s=typeof i===d?i.call(t,{hash:{},data:e}):i}a+=u(s)+'-next-desc"\n          aria-label="'+u((i=n.t||t&&t.t,o={hash:{i18n_inferred_key:true},data:e},i?i.call(t,"next_module_item_19e835f3","Next Module Item",o):c.call(t,"t","next_module_item_19e835f3","Next Module Item",o)))
s=n["if"].call(t,(s=t&&t.next,null==s||false===s?s:s.externalItem),{hash:{},inverse:h.noop,fn:h.program(2,f,e),data:e});(s||0===s)&&(a+=s)
a+='"\n            '
s=n["if"].call(t,(s=t&&t.next,null==s||false===s?s:s.modules_tab_disabled),{hash:{},inverse:h.noop,fn:h.program(5,g,e),data:e});(s||0===s)&&(a+=s)
a+="\n          "+u((i=n.disabledIf||t&&t.disabledIf,o={hash:{},data:e},i?i.call(t,(s=t&&t.next,null==s||false===s?s:s.modules_tab_disabled),o):c.call(t,"disabledIf",(s=t&&t.next,null==s||false===s?s:s.modules_tab_disabled),o)))+"\n        >\n          "+u((i=n.t||t&&t.t,o={hash:{scope:"jquery.module_sequence_footer"},data:e},i?i.call(t,"next","Next",o):c.call(t,"t","next","Next",o)))+'<i class="icon-mini-arrow-right"></i>\n          <span id="msf'
if(i=n.instanceNumber)s=i.call(t,{hash:{},data:e})
else{i=t&&t.instanceNumber
s=typeof i===d?i.call(t,{hash:{},data:e}):i}a+=u(s)+'-next-desc" class="hidden" hidden>'+u((s=(s=t&&t.next,null==s||false===s?s:s.tooltipText),typeof s===d?s.apply(t):s))+"</span>\n        </a>\n      </span>\n    "
return a}function g(t,e){return' aria-disabled="true" '}l+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer' role=\"navigation\" aria-label=\""+u((a=n.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:i},a?a.call(e,"module_navigation_97043417","Module Navigation",r):c.call(e,"t","module_navigation_97043417","Module Navigation",r)))+'">\n  <div class="module-sequence-footer-content">\n    '
o=n["if"].call(e,(o=e&&e.previous,null==o||false===o?o:o.show),{hash:{},inverse:h.noop,fn:h.program(1,m,i),data:i});(o||0===o)&&(l+=o)
l+="\n\n    "
o=n["if"].call(e,(o=e&&e.next,null==o||false===o?o:o.show),{hash:{},inverse:h.noop,fn:h.program(4,p,i),data:i});(o||0===o)&&(l+=o)
l+="\n  </div>\n</div>\n"
return l}))
var h=u[d]
var m=n("Y/W1")
var f=n.n(m)
var p=n("gI0r")
n("dhbk")
const g=Object(r["useScope"])("sequence_footer")
let _=0
i.a.fn.moduleSequenceFooter=function(t={}){if(!t.assetType||!t.assetID)throw"Option must be set with assetType and assetID"
this.msfAnimation=t=>this.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!t)
if(!this.data("msfInstance")){this.msfInstance=new i.a.fn.moduleSequenceFooter.MSFClass(t)
this.data("msfInstance",this.msfInstance)
this.msfInstance.fetch().done(()=>{if(this.msfInstance.hide){this.hide()
return}this.html(h({instanceNumber:this.msfInstance.instanceNumber,previous:this.msfInstance.previous,next:this.msfInstance.next}))
t&&void 0!==t.animation&&this.msfAnimation(t.animation)
this.show()
i()(window).triggerHandler("resize")
t.onFetchSuccess&&t.onFetchSuccess()})}return this}
class b{constructor(t={}){this.iconClasses={ModuleItem:"icon-module",File:"icon-paperclip",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link",ExternalUrl:"icon-link","Lti::MessageHandler":"icon-link"}
this.success=t=>{this.modules=t.modules
if(!(t&&t.items&&1===t.items.length)){this.hide=true
return}this.item=t.items[0];(this.previous.show=this.item.prev)&&this.buildPreviousData()
if(this.item.next||this.awaitingPathProgress()){this.next.show=true
const t=this.awaitingPathProgress()
t?this.buildNextPathData():this.buildNextData()}}
this.instanceNumber=_++
this.courseID=t.courseID||"undefined"!==typeof ENV&&ENV.course_id
this.assetID=t.assetID
this.assetType=t.assetType
this.location=t.location||document.location
this.previous={}
this.next={}
this.url=`/api/v1/courses/${this.courseID}/module_item_sequence`}getQueryParams(t){let e
t=t.split("+").join(" ")
const n={}
const s=/[?&]?([^=]+)=([^&]*)/g
while(e=s.exec(t))n[decodeURIComponent(e[1])]=decodeURIComponent(e[2])
return n}fetch(){const t=this.getQueryParams(this.location.search)
return t.module_item_id?i.a.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:t.module_item_id,frame_external_urls:true},this.success,null,{}):i.a.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:true},this.success,null,{})}buildPreviousData(){this.previous.url=this.item.prev.html_url
this.previous.externalItem="ExternalUrl"===this.item.prev.type&&this.item.prev.new_tab
if(this.item.current.module_id===this.item.prev.module_id){this.previous.tooltip=`<i class='${Object(p["a"])(this.iconClasses[this.item.prev.type])}'></i> ${Object(p["a"])(this.item.prev.title)}`
this.previous.tooltipText=g.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})}else{const t=f.a.find(this.modules,t=>t.id===this.item.prev.module_id)
this.previous.tooltip=`<strong style='float:left'>${Object(p["a"])(g.t("prev_module","Previous Module:"))}</strong> <br> ${Object(p["a"])(t.name)}`
this.previous.tooltipText=g.t("prev_module_desc","Previous Module: *module*",{wrapper:t.name})}}buildNextPathData(){const t=this.item.mastery_path
if(t.awaiting_choice){this.next.url=t.choose_url
this.next.tooltipText=g.t("Choose the next mastery path")}else{const e=g.t("Next mastery path is currently locked")
const n=g.t("Next mastery path is still processing, please periodically refresh the page")
const s=t.locked?e:n
this.next.modules_tab_disabled=t.modules_tab_disabled
this.next.url=t.modules_url
this.next.tooltipText=s}this.next.tooltip=`<i class='${Object(p["a"])(this.iconClasses.ModuleItem)}'/> ${this.next.tooltipText}`}buildNextData(){this.next.url=this.item.next.html_url
this.next.externalItem="ExternalUrl"===this.item.next.type&&this.item.next.new_tab
if(this.item.current.module_id===this.item.next.module_id){this.next.tooltip=`<i class='${Object(p["a"])(this.iconClasses[this.item.next.type])}'></i> ${Object(p["a"])(this.item.next.title)}`
this.next.tooltipText=g.t("Next: *item*",{wrapper:this.item.next.title})}else{const t=f.a.find(this.modules,t=>t.id===this.item.next.module_id)
this.next.tooltip=`<strong style='float:left'>${Object(p["a"])(g.t("next_module","Next Module:"))}</strong> <br> ${Object(p["a"])(t.name)}`
this.next.tooltipText=g.t("next_module_desc","Next Module: *module*",{wrapper:t.name})}}awaitingPathProgress(){const t=this.item.mastery_path
if(t&&t.is_student)return t.awaiting_choice||t.locked||t.still_processing}}i.a.fn.moduleSequenceFooter.MSFClass=b},fhP7:function(t,e,n){"use strict"
n.d(e,"k",(function(){return s}))
n.d(e,"e",(function(){return i}))
n.d(e,"f",(function(){return o}))
n.d(e,"g",(function(){return a}))
n.d(e,"h",(function(){return r}))
n.d(e,"l",(function(){return l}))
n.d(e,"i",(function(){return c}))
n.d(e,"b",(function(){return u}))
n.d(e,"j",(function(){return d}))
n.d(e,"c",(function(){return h}))
n.d(e,"d",(function(){return m}))
n.d(e,"a",(function(){return f}))
const s="@"
const i="mentions-marker"
const o="span#"+i
const a="mention-menu"
const r="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const c="mentions.NavigationEvent"
const u="mentions.InputChangeEvent"
const d="mentions.SelectionEvent"
const h={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const m={[h.up]:"UpArrow",[h.down]:"DownArrow",[h.enter]:"Enter"}
const f={ariaControlTemplate:t=>t+"-mention-popup",activeDescendant:(t,e)=>`${t}-mention-popup-item-${e}`}},jFoo:function(t,e,n){"use strict"
n.d(e,"b",(function(){return u}))
n.d(e,"a",(function(){return d}))
n.d(e,"c",(function(){return f}))
var s=n("fhP7")
const i="error"
const o="unsupported_subject"
const a="wrong_origin"
const r="bad_request"
const l=({targetWindow:t,origin:e,subject:n,message_id:s})=>{const l=(i={})=>{const o={subject:n+".response"}
s&&(o.message_id=s)
t?t.postMessage({...o,...i},e):console.error("Error sending response postMessage: target window does not exist")}
const c=()=>{l({})}
const u=(t,e)=>{const n={code:t}
e&&(n.message=e)
l({error:n})}
const d=t=>{u(i,t)}
const h=t=>{u(r,t)}
const m=()=>{u(a)}
const f=()=>{u(o)}
return{sendResponse:l,sendSuccess:c,sendError:u,sendGenericError:d,sendBadRequestError:h,sendWrongOriginError:m,sendUnsupportedSubjectError:f}}
var c=l
const u={}
const d=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.hideRightSideWrapper","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const h=["A2ExternalContentReady","LtiDeepLinkingResponse",s["i"],s["b"],s["j"]]
async function m(t,e=false){if(t.data.source&&t.data.source.includes("react-devtools"))return false
let s
try{s="string"===typeof t.data?JSON.parse(t.data):t.data}catch(t){return false}const i=s.subject||s.messageType
const o=c({targetWindow:t.source,origin:t.origin,subject:i,message_id:s.message_id})
if(h.includes(i))return false
if(!d.includes(i)){e&&o.sendUnsupportedSubjectError()
return false}if(!e&&i.includes("org.imsglobal.lti"))return false
try{const a=await n("G4i8")(`./${i}.js`)
const r=a.default({message:s,event:t,responseMessages:o})
!r&&e&&o.sendSuccess()
return true}catch(t){console.error(`Error loading or executing message handler for "${i}": ${t}`)
e&&o.sendGenericError(t.message)
return false}}function f(){var t,e
const n=null===(t=ENV)||void 0===t||null===(e=t.FEATURES)||void 0===e?void 0:e.lti_platform_storage
window.addEventListener("message",t=>{""!==t.data&&m(t,n)})}},msTH:function(t,e,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
var o=n("Y/W1")
var a=n.n(o)
var r=n("gI0r")
var l=n("HGxv")
const c=Object(l["useScope"])("user_content")
const u={translateMathmlForScreenreaders(t){var e,n
if(!(null!==(e=ENV)&&void 0!==e&&null!==(n=e.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const e=i()("<div/>").html(t.attr("x-canvaslms-safe-mathml")).html()
const n=i()('<span class="hidden-readable"></span>')
n.html(e)
return n}},toMediaCommentLink(t){const e=i()(`<a\n        id='media_comment_${Object(r["a"])(i()(t).data("media_comment_id"))}'\n        data-media_comment_type='${Object(r["a"])(i()(t).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(r["a"])(t.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(r["a"])(i()(t).attr("data-alt"))}'\n      />`)
e.html(i()(t).html())
return e},convert(t,e={}){const n=i()("<div />").html(t)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!e.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const t=i()(this)
if(!t.data("uc_snippet")||!t.data("uc_sig"))return this
const e=a.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const s=i()(`<form\n            action='${Object(r["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(r["a"])(e)}'\n            id='form-${Object(r["a"])(e)}'\n          />`)
s.append(i()("<input type='hidden'/>").attr({name:"object_data",value:t.data("uc_snippet")}))
s.append(i()("<input type='hidden'/>").attr({name:"s",value:t.data("uc_sig")}))
i()("body").append(s)
setTimeout(()=>s.submit(),0)
return i()(`<iframe\n            class='user_content_iframe'\n            name='${Object(r["a"])(e)}'\n            style='width: ${Object(r["a"])(t.data("uc_width"))}; height: ${Object(r["a"])(t.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(r["a"])(c.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((t,e)=>{const n=i()(e)
const s=u.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(s)})}return n.html()}}
e["a"]=u},oG6o:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var s=n("ouhR")
var i=n.n(s)
class o{constructor(t){this.minToolHeight=t||450}sanitizedWrapperId(t){var e
return null===t||void 0===t||null===(e=t.toString())||void 0===e?void 0:e.replace(/[^a-zA-Z0-9_-]/g,"")}tool_content_wrapper(t){let e=i()(`div[data-tool-wrapper-id*='${this.sanitizedWrapperId(t)}']`)
e.length<=0&&1===i()(".tool_content_wrapper").length&&(e=i()(".tool_content_wrapper"))
return e}resize_tool_content_wrapper(t,e){let n=t
"number"!==typeof n&&(n=this.minToolHeight)
const s=e||this.tool_content_wrapper()
s.height(!t||this.minToolHeight>n?this.minToolHeight:n)}}}}])

//# sourceMappingURL=external_tools_show-c-ba120c0332.js.map