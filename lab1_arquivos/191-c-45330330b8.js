(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[191,3691],{fY8A:function(e,t,s){"use strict"
s.r(t)
s.d(t,"default",(function(){return b}))
var n=s("ouhR")
var a=s.n(n)
var i=s("3O+N")
var o=s.n(i)
var l=s("HGxv")
s("BGrI")
var r=o.a.default
var u=r.template,c=r.templates=r.templates||{}
var d="/work/canvas-deploy/generated/ui/shared/module-sequence-footer/jst/ModuleSequenceFooter"
c[d]=u((function(e,t,s,n,a){this.compilerInfo=[4,">= 1.0.0"]
s=this.merge(s,e.helpers)
a=a||{}
var i,o,l,r="",u=s.helperMissing,c=this.escapeExpression,d="function",m=this
function h(e,t){var n,a,i,o=""
o+='\n      <span class="module-sequence-footer-button--previous" data-tooltip="right" data-html-tooltip-title="'+c((n=(n=e&&e.previous,null==n||false===n?n:n.tooltip),typeof n===d?n.apply(e):n))+'">\n          <a\n            href="'+c((n=(n=e&&e.previous,null==n||false===n?n:n.url),typeof n===d?n.apply(e):n))+'"\n            role="button"\n            class="Button"\n            aria-describedby="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===d?a.call(e,{hash:{},data:t}):a}o+=c(n)+'-previous-desc"\n            aria-label="'+c((a=s.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"previous_module_item_a9e57348","Previous Module Item",i):u.call(e,"t","previous_module_item_a9e57348","Previous Module Item",i)))
n=s["if"].call(e,(n=e&&e.previous,null==n||false===n?n:n.externalItem),{hash:{},inverse:m.noop,fn:m.program(2,p,t),data:t});(n||0===n)&&(o+=n)
o+='"\n          >\n            <i class="icon-mini-arrow-left"></i>'+c((a=s.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},a?a.call(e,"previous","Previous",i):u.call(e,"t","previous","Previous",i)))+'\n            <span id="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===d?a.call(e,{hash:{},data:t}):a}o+=c(n)+'-previous-desc" class="hidden" hidden>'+c((n=(n=e&&e.previous,null==n||false===n?n:n.tooltipText),typeof n===d?n.apply(e):n))+"</span>\n          </a>\n      </span>\n    "
return o}function p(e,t){var n,a,i=""
i+=" - "+c((n=s.t||e&&e.t,a={hash:{i18n_inferred_key:true},data:t},n?n.call(e,"opens_in_new_window_b4b99243","opens in new window",a):u.call(e,"t","opens_in_new_window_b4b99243","opens in new window",a)))
return i}function f(e,t){var n,a,i,o=""
o+='\n      <span class="module-sequence-footer-button--next" data-tooltip="left" data-html-tooltip-title="'+c((n=(n=e&&e.next,null==n||false===n?n:n.tooltip),typeof n===d?n.apply(e):n))+'">\n        <a\n          href="'+c((n=(n=e&&e.next,null==n||false===n?n:n.url),typeof n===d?n.apply(e):n))+'"\n          role="button"\n          class="Button"\n          aria-describedby="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===d?a.call(e,{hash:{},data:t}):a}o+=c(n)+'-next-desc"\n          aria-label="'+c((a=s.t||e&&e.t,i={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"next_module_item_19e835f3","Next Module Item",i):u.call(e,"t","next_module_item_19e835f3","Next Module Item",i)))
n=s["if"].call(e,(n=e&&e.next,null==n||false===n?n:n.externalItem),{hash:{},inverse:m.noop,fn:m.program(2,p,t),data:t});(n||0===n)&&(o+=n)
o+='"\n            '
n=s["if"].call(e,(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),{hash:{},inverse:m.noop,fn:m.program(5,_,t),data:t});(n||0===n)&&(o+=n)
o+="\n          "+c((a=s.disabledIf||e&&e.disabledIf,i={hash:{},data:t},a?a.call(e,(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),i):u.call(e,"disabledIf",(n=e&&e.next,null==n||false===n?n:n.modules_tab_disabled),i)))+"\n        >\n          "+c((a=s.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},a?a.call(e,"next","Next",i):u.call(e,"t","next","Next",i)))+'<i class="icon-mini-arrow-right"></i>\n          <span id="msf'
if(a=s.instanceNumber)n=a.call(e,{hash:{},data:t})
else{a=e&&e.instanceNumber
n=typeof a===d?a.call(e,{hash:{},data:t}):a}o+=c(n)+'-next-desc" class="hidden" hidden>'+c((n=(n=e&&e.next,null==n||false===n?n:n.tooltipText),typeof n===d?n.apply(e):n))+"</span>\n        </a>\n      </span>\n    "
return o}function _(e,t){return' aria-disabled="true" '}r+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer' role=\"navigation\" aria-label=\""+c((o=s.t||t&&t.t,l={hash:{i18n_inferred_key:true},data:a},o?o.call(t,"module_navigation_97043417","Module Navigation",l):u.call(t,"t","module_navigation_97043417","Module Navigation",l)))+'">\n  <div class="module-sequence-footer-content">\n    '
i=s["if"].call(t,(i=t&&t.previous,null==i||false===i?i:i.show),{hash:{},inverse:m.noop,fn:m.program(1,h,a),data:a});(i||0===i)&&(r+=i)
r+="\n\n    "
i=s["if"].call(t,(i=t&&t.next,null==i||false===i?i:i.show),{hash:{},inverse:m.noop,fn:m.program(4,f,a),data:a});(i||0===i)&&(r+=i)
r+="\n  </div>\n</div>\n"
return r}))
var m=c[d]
var h=s("Y/W1")
var p=s.n(h)
var f=s("gI0r")
s("dhbk")
const _=Object(l["useScope"])("sequence_footer")
let v=0
a.a.fn.moduleSequenceFooter=function(e={}){if(!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID"
this.msfAnimation=e=>this.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)
if(!this.data("msfInstance")){this.msfInstance=new a.a.fn.moduleSequenceFooter.MSFClass(e)
this.data("msfInstance",this.msfInstance)
this.msfInstance.fetch().done(()=>{if(this.msfInstance.hide){this.hide()
return}this.html(m({instanceNumber:this.msfInstance.instanceNumber,previous:this.msfInstance.previous,next:this.msfInstance.next}))
e&&void 0!==e.animation&&this.msfAnimation(e.animation)
this.show()
a()(window).triggerHandler("resize")
e.onFetchSuccess&&e.onFetchSuccess()})}return this}
class b{constructor(e={}){this.iconClasses={ModuleItem:"icon-module",File:"icon-paperclip",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link",ExternalUrl:"icon-link","Lti::MessageHandler":"icon-link"}
this.success=e=>{this.modules=e.modules
if(!(e&&e.items&&1===e.items.length)){this.hide=true
return}this.item=e.items[0];(this.previous.show=this.item.prev)&&this.buildPreviousData()
if(this.item.next||this.awaitingPathProgress()){this.next.show=true
const e=this.awaitingPathProgress()
e?this.buildNextPathData():this.buildNextData()}}
this.instanceNumber=v++
this.courseID=e.courseID||"undefined"!==typeof ENV&&ENV.course_id
this.assetID=e.assetID
this.assetType=e.assetType
this.location=e.location||document.location
this.previous={}
this.next={}
this.url=`/api/v1/courses/${this.courseID}/module_item_sequence`}getQueryParams(e){let t
e=e.split("+").join(" ")
const s={}
const n=/[?&]?([^=]+)=([^&]*)/g
while(t=n.exec(e))s[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return s}fetch(){const e=this.getQueryParams(this.location.search)
return e.module_item_id?a.a.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:true},this.success,null,{}):a.a.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:true},this.success,null,{})}buildPreviousData(){this.previous.url=this.item.prev.html_url
this.previous.externalItem="ExternalUrl"===this.item.prev.type&&this.item.prev.new_tab
if(this.item.current.module_id===this.item.prev.module_id){this.previous.tooltip=`<i class='${Object(f["a"])(this.iconClasses[this.item.prev.type])}'></i> ${Object(f["a"])(this.item.prev.title)}`
this.previous.tooltipText=_.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})}else{const e=p.a.find(this.modules,e=>e.id===this.item.prev.module_id)
this.previous.tooltip=`<strong style='float:left'>${Object(f["a"])(_.t("prev_module","Previous Module:"))}</strong> <br> ${Object(f["a"])(e.name)}`
this.previous.tooltipText=_.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name})}}buildNextPathData(){const e=this.item.mastery_path
if(e.awaiting_choice){this.next.url=e.choose_url
this.next.tooltipText=_.t("Choose the next mastery path")}else{const t=_.t("Next mastery path is currently locked")
const s=_.t("Next mastery path is still processing, please periodically refresh the page")
const n=e.locked?t:s
this.next.modules_tab_disabled=e.modules_tab_disabled
this.next.url=e.modules_url
this.next.tooltipText=n}this.next.tooltip=`<i class='${Object(f["a"])(this.iconClasses.ModuleItem)}'/> ${this.next.tooltipText}`}buildNextData(){this.next.url=this.item.next.html_url
this.next.externalItem="ExternalUrl"===this.item.next.type&&this.item.next.new_tab
if(this.item.current.module_id===this.item.next.module_id){this.next.tooltip=`<i class='${Object(f["a"])(this.iconClasses[this.item.next.type])}'></i> ${Object(f["a"])(this.item.next.title)}`
this.next.tooltipText=_.t("Next: *item*",{wrapper:this.item.next.title})}else{const e=p.a.find(this.modules,e=>e.id===this.item.next.module_id)
this.next.tooltip=`<strong style='float:left'>${Object(f["a"])(_.t("next_module","Next Module:"))}</strong> <br> ${Object(f["a"])(e.name)}`
this.next.tooltipText=_.t("next_module_desc","Next Module: *module*",{wrapper:e.name})}}awaitingPathProgress(){const e=this.item.mastery_path
if(e&&e.is_student)return e.awaiting_choice||e.locked||e.still_processing}}a.a.fn.moduleSequenceFooter.MSFClass=b},msTH:function(e,t,s){"use strict"
var n=s("ouhR")
var a=s.n(n)
var i=s("Y/W1")
var o=s.n(i)
var l=s("gI0r")
var r=s("HGxv")
const u=Object(r["useScope"])("user_content")
const c={translateMathmlForScreenreaders(e){var t,s
if(!(null!==(t=ENV)&&void 0!==t&&null!==(s=t.FEATURES)&&void 0!==s&&s.new_math_equation_handling)){const t=a()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const s=a()('<span class="hidden-readable"></span>')
s.html(t)
return s}},toMediaCommentLink(e){const t=a()(`<a\n        id='media_comment_${Object(l["a"])(a()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(l["a"])(a()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(l["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(l["a"])(a()(e).attr("data-alt"))}'\n      />`)
t.html(a()(e).html())
return t},convert(e,t={}){const s=a()("<div />").html(e)
s.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return c.toMediaCommentLink(this)}))
s.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){s.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=a()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let s="/object_snippet"
ENV.files_domain&&(s=`//${ENV.files_domain}${s}`)
const n=a()(`<form\n            action='${Object(l["a"])(s)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(l["a"])(t)}'\n            id='form-${Object(l["a"])(t)}'\n          />`)
n.append(a()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
n.append(a()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
a()("body").append(n)
setTimeout(()=>n.submit(),0)
return a()(`<iframe\n            class='user_content_iframe'\n            name='${Object(l["a"])(t)}'\n            style='width: ${Object(l["a"])(e.data("uc_width"))}; height: ${Object(l["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(l["a"])(u.t("User Content"))}'\n          />`)}))
s.find("img.equation_image").each((e,t)=>{const s=a()(t)
const n=c.translateMathmlForScreenreaders(s)
s.removeAttr("x-canvaslms-safe-mathml")
s.after(n)})}return s.html()}}
t["a"]=c}}])

//# sourceMappingURL=191-c-45330330b8.js.map