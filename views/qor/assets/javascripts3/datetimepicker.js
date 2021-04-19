"use strict";function getSelect2Header(){var t=$("body").data().selectAjaxHeader,e=window.getSelect2HeaderFunction,i={};return t&&e&&$.isFunction(e)?(i[t]=e(),i):{}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}$.fn.qorSliderAfterShow=$.fn.qorSliderAfterShow||{},window.QOR={$formLoading:'<div id="qor-submit-loading" class="clearfix"><div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div></div>'},String.prototype.escapeSymbol=function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"};return this.replace(/[&<>"']/g,function(t){return e[t]||t})},window.Mustache&&(window.Mustache.tags=["[[","]]"]),$(document).ajaxComplete(function(t,e,i){"POST"!=i.type&&"PUT"!=i.type||$.fn.qorSlideoutBeforeHide&&($.fn.qorSlideoutBeforeHide=null,window.onbeforeunload=null)}),$.fn.select2.ajaxCommonOptions=function(t){var a=t.remoteDataPrimaryKey;return{dataType:"json",headers:getSelect2Header(t),cache:!0,delay:250,data:function(t){return{keyword:t.term,page:t.page,per_page:20}},processResults:function(t,e){e.page=e.page||1;var i=$.map(t,function(t){return t.id=t[a]||t.primaryKey||t.Id||t.ID,t});return{results:i,pagination:{more:20<=i.length}}}}},$.fn.select2.ajaxFormatResult=function(t,e,i){var a="";if(t.loading)return t.text;if(console.log("select2.ajaxFormatResult: Data"),console.log(t),console.log("select2.ajaxFormatResult: has remote image"),console.log(i),i){var n=t.text||t.Name||t.Title||t.Code||t[Object.keys(t)[0]],s=t.Image;return a=s?'<div class="select2-results__option-withimage"><img src="'+s+'"><span>'+n+"</span></div>":'<div class="select2-results__option-withimage">'+n+"</span></div>",$(a)}return a=0<e.length?window.Mustache.render(e.html().replace(/{{(.*?)}}/g,"[[$1]]"),t):t.text||t.Name||t.Title||t.Code||t[Object.keys(t)[0]],/<(.*)(\/>|<\/.+>)/.test(a)?$(a):a},function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}(function(e){var i=window.componentHandler,a='[class*="mdl-js"],[class*="mdl-tooltip"]';function n(t){i&&(e(t).is(a)?i.upgradeElements(t):i.upgradeElements(e(a,t).toArray()))}function s(t){i&&(e(t).is(a)?i.downgradeElements(t):i.downgradeElements(e(a,t).toArray()))}e(function(){e(document).on("enable.qor.material",function(t){n(t.target)}).on("disable.qor.material",function(t){s(t.target)}).on("update.qor.material",function(t){s(t.target),n(t.target)})})}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}(function(n){var a=n(document),s="qor.modal",t="click."+s,e="keyup."+s,r="transitionend",o="qor-modal-open",h="in",i="aria-hidden";function l(t,e){this.$element=n(t),this.options=n.extend({},l.DEFAULTS,n.isPlainObject(e)&&e),this.transitioning=!1,this.fadable=!1,this.init()}return l.prototype={constructor:l,init:function(){this.fadable=this.$element.hasClass("fade"),this.options.show?this.show():this.toggle()},bind:function(){this.$element.on(t,n.proxy(this.click,this)),this.options.keyboard&&a.on(e,n.proxy(this.keyup,this))},unbind:function(){this.$element.off(t,this.click),this.options.keyboard&&a.off(e,this.keyup)},click:function(t){var e=this.$element[0],i=t.target;if(i===e&&this.options.backdrop)this.hide();else for(;i!==e;){if("modal"===n(i).data("dismiss")){this.hide();break}i=i.parentNode}},keyup:function(t){27===t.which&&this.hide()},show:function(t){var e,i=this.$element;if(!this.transitioning&&!i.hasClass(h)&&(e=n.Event("show.qor.modal"),i.trigger(e),!e.isDefaultPrevented())){if(a.find("body").addClass(o),i.addClass("shown").scrollTop(0).get(0).offsetHeight,this.transitioning=!0,t||!this.fadable)return i.addClass(h),void this.shown();i.one(r,n.proxy(this.shown,this)),i.addClass(h)}},shown:function(){this.transitioning=!1,this.bind(),this.$element.attr(i,!1).trigger("shown.qor.modal").focus()},hide:function(t){var e,i=this.$element;if(!this.transitioning&&i.hasClass(h)&&(e=n.Event("hide.qor.modal"),i.trigger(e),!e.isDefaultPrevented())){if(a.find("body").removeClass(o),this.transitioning=!0,t||!this.fadable)return i.removeClass(h),void this.hidden();i.one(r,n.proxy(this.hidden,this)),i.removeClass(h)}},hidden:function(){this.transitioning=!1,this.unbind(),this.$element.removeClass("shown").attr(i,!0).trigger("hidden.qor.modal")},toggle:function(){this.$element.hasClass(h)?this.hide():this.show()},destroy:function(){this.$element.removeData(s)}},l.DEFAULTS={backdrop:!1,keyboard:!0,show:!0},l.plugin=function(a){return this.each(function(){var t,e=n(this),i=e.data(s);if(!i){if(/destroy/.test(a))return;e.data(s,i=new l(this,a))}"string"==typeof a&&n.isFunction(t=i[a])&&t.apply(i)})},n.fn.qorModal=l.plugin,n(function(){var e=".qor-modal";n(document).on(t,'[data-toggle="qor.modal"]',function(){var t=n(this),e=t.data(),i=n(e.target||t.attr("href"));l.plugin.call(i,i.data(s)?"toggle":e)}).on("disable.qor.modal",function(t){l.plugin.call(n(e,t.target),"destroy")}).on("enable.qor.modal",function(t){l.plugin.call(n(e,t.target))})}),l}),function(t){"function"==typeof define&&define.amd?define("datepicker",["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}(function(_){var t=_(window),n=window.document,p=_(n),s=window.Number,o="datepicker",i="click."+o,a="keyup."+o,r="focus."+o,e="resize."+o,h="show."+o,l="hide."+o,d="pick."+o,c=/(y|m|d)+/g,u=/\d+/g,f=/^\d{2,4}$/,m=o+"-top-left",y=o+"-bottom-left",g=[m,o+"-top-right",y,o+"-bottom-right"].join(" "),w=o+"-hide",v=Math.min,k=Object.prototype.toString;function D(t){return"string"==typeof t}function b(t){return"number"==typeof t&&!isNaN(t)}function $(t){return void 0===t}function x(t){return"date"===(e=t,k.call(e).slice(8,-1).toLowerCase());var e}function S(t,e){var i=[];return Array.from?Array.from(t).slice(e||0):(b(e)&&i.push(e),i.slice.apply(t,i))}function q(t,e){var i=S(arguments,2);return function(){return t.apply(e,i.concat(S(arguments)))}}function F(t,e){return[31,(i=t)%4==0&&i%100!=0||i%400==0?29:28,31,30,31,30,31,31,30,31,30,31][e];var i}function C(t,e){(e=_.isPlainObject(e)?e:{}).language&&(e=_.extend({},C.LANGUAGES[e.language],e)),this.$element=_(t),this.options=_.extend({},C.DEFAULTS,e),this.isBuilt=!1,this.isShown=!1,this.isInput=!1,this.isInline=!1,this.initialValue="",this.initialDate=null,this.startDate=null,this.endDate=null,this.init()}C.prototype={constructor:C,init:function(){var t=this.options,e=this.$element,i=t.startDate,a=t.endDate,n=t.date;this.$trigger=_(t.trigger||e),this.isInput=e.is("input")||e.is("textarea"),this.isInline=t.inline&&(t.container||!this.isInput),this.format=function(t){var e,i,a=String(t).toLowerCase(),n=a.match(c);if(!n||0===n.length)throw new Error("Invalid date format.");for(t={source:a,parts:n},e=n.length,i=0;i<e;i++)switch(n[i]){case"dd":case"d":t.hasDay=!0;break;case"mm":case"m":t.hasMonth=!0;break;case"yyyy":case"yy":t.hasYear=!0}return t}(t.format),this.initialValue=this.getValue(),n=this.parseDate(n||this.initialValue),i&&(i=this.parseDate(i),n.getTime()<i.getTime()&&(n=new Date(i)),this.startDate=i),a&&(a=this.parseDate(a),i&&a.getTime()<i.getTime()&&(a=new Date(i)),n.getTime()>a.getTime()&&(n=new Date(a)),this.endDate=a),this.date=n,this.viewDate=new Date(n),this.initialDate=new Date(this.date),this.bind(),(t.autoshow||this.isInline)&&this.show(),t.autopick&&this.pick()},build:function(){var t,e=this.options,i=this.$element;this.isBuilt||(this.isBuilt=!0,this.$picker=t=_(e.template),this.$week=t.find('[data-view="week"]'),this.$yearsPicker=t.find('[data-view="years picker"]'),this.$yearsPrev=t.find('[data-view="years prev"]'),this.$yearsNext=t.find('[data-view="years next"]'),this.$yearsCurrent=t.find('[data-view="years current"]'),this.$years=t.find('[data-view="years"]'),this.$monthsPicker=t.find('[data-view="months picker"]'),this.$yearPrev=t.find('[data-view="year prev"]'),this.$yearNext=t.find('[data-view="year next"]'),this.$yearCurrent=t.find('[data-view="year current"]'),this.$months=t.find('[data-view="months"]'),this.$daysPicker=t.find('[data-view="days picker"]'),this.$monthPrev=t.find('[data-view="month prev"]'),this.$monthNext=t.find('[data-view="month next"]'),this.$monthCurrent=t.find('[data-view="month current"]'),this.$days=t.find('[data-view="days"]'),this.isInline?_(e.container||i).append(t.addClass("datepicker-inline")):(_(n.body).append(t.addClass("datepicker-dropdown")),t.addClass(w)),this.fillWeek())},unbuild:function(){this.isBuilt&&(this.isBuilt=!1,this.$picker.remove())},bind:function(){var t=this.options,e=this.$element;_.isFunction(t.show)&&e.on(h,t.show),_.isFunction(t.hide)&&e.on(l,t.hide),_.isFunction(t.pick)&&e.on(d,t.pick),this.isInput&&(e.on(a,_.proxy(this.keyup,this)),t.trigger||e.on(r,_.proxy(this.show,this))),this.$trigger.on(i,_.proxy(this.show,this))},unbind:function(){var t=this.options,e=this.$element;_.isFunction(t.show)&&e.off(h,t.show),_.isFunction(t.hide)&&e.off(l,t.hide),_.isFunction(t.pick)&&e.off(d,t.pick),this.isInput&&(e.off(a,this.keyup),t.trigger||e.off(r,this.show)),this.$trigger.off(i,this.show)},showView:function(t){var e=this.$yearsPicker,i=this.$monthsPicker,a=this.$daysPicker,n=this.format;if(n.hasYear||n.hasMonth||n.hasDay)switch(s(t)){case 2:case"years":i.addClass(w),a.addClass(w),n.hasYear?(this.fillYears(),e.removeClass(w)):this.showView(0);break;case 1:case"months":e.addClass(w),a.addClass(w),n.hasMonth?(this.fillMonths(),i.removeClass(w)):this.showView(2);break;default:e.addClass(w),i.addClass(w),n.hasDay?(this.fillDays(),a.removeClass(w)):this.showView(1)}},hideView:function(){this.options.autohide&&this.hide()},place:function(){var t=this.options,e=this.$element,i=this.$picker,a=p.outerWidth(),n=p.outerHeight(),s=e.outerWidth(),r=e.outerHeight(),o=i.width(),h=i.height(),l=e.offset(),d=l.left,c=l.top,u=parseFloat(t.offset)||10,f=m;h<c&&n<c+r+h?(c-=h+u,f=y):c+=r+u,a<d+o&&(d=d+s-o,f=f.replace("left","right")),i.removeClass(g).addClass(f).css({top:c,left:d,zIndex:parseInt(t.zIndex,10)})},trigger:function(t,e){var i=_.Event(t,e);return this.$element.trigger(i),i},createItem:function(t){var e=this.options,i=e.itemTag,a={text:"",view:"",muted:!1,picked:!1,disabled:!1};return _.extend(a,t),"<"+i+" "+(a.disabled?'class="'+e.disabledClass+'"':a.picked?'class="'+e.pickedClass+'"':a.muted?'class="'+e.mutedClass+'"':"")+(a.view?' data-view="'+a.view+'"':"")+">"+a.text+"</"+i+">"},fillAll:function(){this.fillYears(),this.fillMonths(),this.fillDays()},fillWeek:function(){var t,e=this.options,i=parseInt(e.weekStart,10)%7,a=e.daysMin,n="";for(a=_.merge(a.slice(i),a.slice(0,i)),t=0;t<=6;t++)n+=this.createItem({text:a[t]});this.$week.html(n)},fillYears:function(){var t,e=this.options,i=e.disabledClass||"",a=e.yearSuffix||"",n=_.isFunction(e.filter)&&e.filter,s=this.startDate,r=this.endDate,o=this.viewDate,h=o.getFullYear(),l=o.getMonth(),d=o.getDate(),c=this.date,u=c.getFullYear(),f=!1,p=!1,m=!1,y=!1,g=!1,w="";for(t=-5;t<=6;t++)c=new Date(h+t,l,d),g=-5===t||6===t,y=h+t===u,m=!1,s&&(m=c.getFullYear()<s.getFullYear(),-5===t&&(f=m)),!m&&r&&(m=c.getFullYear()>r.getFullYear(),6===t&&(p=m)),!m&&n&&(m=!1===n.call(this.$element,c)),w+=this.createItem({text:h+t,view:m?"year disabled":y?"year picked":"year",muted:g,picked:y,disabled:m});this.$yearsPrev.toggleClass(i,f),this.$yearsNext.toggleClass(i,p),this.$yearsCurrent.toggleClass(i,!0).html(h+-5+a+" - "+(h+6)+a),this.$years.html(w)},fillMonths:function(){var t,e=this.options,i=e.disabledClass||"",a=e.monthsShort,n=_.isFunction(e.filter)&&e.filter,s=this.startDate,r=this.endDate,o=this.viewDate,h=o.getFullYear(),l=o.getDate(),d=this.date,c=d.getFullYear(),u=d.getMonth(),f=!1,p=!1,m=!1,y=!1,g="";for(t=0;t<=11;t++)d=new Date(h,t,l),y=h===c&&t===u,m=!1,s&&(m=(f=d.getFullYear()===s.getFullYear())&&d.getMonth()<s.getMonth()),!m&&r&&(m=(p=d.getFullYear()===r.getFullYear())&&d.getMonth()>r.getMonth()),!m&&n&&(m=!1===n.call(this.$element,d)),g+=this.createItem({index:t,text:a[t],view:m?"month disabled":y?"month picked":"month",picked:y,disabled:m});this.$yearPrev.toggleClass(i,f),this.$yearNext.toggleClass(i,p),this.$yearCurrent.toggleClass(i,f&&p).html(h+e.yearSuffix||""),this.$months.html(g)},fillDays:function(){var t,e,i,a=this.options,n=a.disabledClass||"",s=a.yearSuffix||"",r=a.monthsShort,o=parseInt(a.weekStart,10)%7,h=_.isFunction(a.filter)&&a.filter,l=this.startDate,d=this.endDate,c=this.viewDate,u=c.getFullYear(),f=c.getMonth(),p=u,m=f,y=u,g=f,w=this.date,v=w.getFullYear(),k=w.getMonth(),D=w.getDate(),b=!1,$=!1,x=!1,S=!1,q=[],C=[],T=[];for(0===f?(--p,m=11):--m,t=F(p,m),(i=(w=new Date(u,f,1)).getDay()-o)<=0&&(i+=7),l&&(b=w.getTime()<=l.getTime()),e=t-(i-1);e<=t;e++)w=new Date(p,m,e),x=!1,l&&(x=w.getTime()<l.getTime()),!x&&h&&(x=!1===h.call(this.$element,w)),q.push(this.createItem({text:e,view:"day prev",muted:!0,disabled:x}));for(11===f?(y+=1,g=0):g+=1,t=F(u,f),i=42-(q.length+t),w=new Date(u,f,t),d&&($=w.getTime()>=d.getTime()),e=1;e<=i;e++)w=new Date(y,g,e),x=!1,d&&(x=w.getTime()>d.getTime()),!x&&h&&(x=!1===h.call(this.$element,w)),C.push(this.createItem({text:e,view:"day next",muted:!0,disabled:x}));for(e=1;e<=t;e++)w=new Date(u,f,e),S=u===v&&f===k&&e===D,x=!1,l&&(x=w.getTime()<l.getTime()),!x&&d&&(x=w.getTime()>d.getTime()),!x&&h&&(x=!1===h.call(this.$element,w)),T.push(this.createItem({text:e,view:x?"day disabled":S?"day picked":"day",picked:S,disabled:x}));this.$monthPrev.toggleClass(n,b),this.$monthNext.toggleClass(n,$),this.$monthCurrent.toggleClass(n,b&&$).html(a.yearFirst?u+s+" "+r[f]:r[f]+" "+u+s),this.$days.html(q.join("")+T.join(" ")+C.join(""))},click:function(t){var e,i,a,n,s,r,o=_(t.target),h=this.viewDate;if(t.stopPropagation(),t.preventDefault(),!o.hasClass("disabled"))switch(e=h.getFullYear(),i=h.getMonth(),a=h.getDate(),r=o.data("view")){case"years prev":case"years next":e="years prev"===r?e-10:e+10,s=o.text(),(n=f.test(s))&&(e=parseInt(s,10),this.date=new Date(e,i,v(a,28))),this.viewDate=new Date(e,i,v(a,28)),this.fillYears(),n&&(this.showView(1),this.pick("year"));break;case"year prev":case"year next":e="year prev"===r?e-1:e+1,this.viewDate=new Date(e,i,v(a,28)),this.fillMonths();break;case"year current":this.format.hasYear&&this.showView(2);break;case"year picked":this.format.hasMonth?this.showView(1):this.hideView();break;case"year":e=parseInt(o.text(),10),this.date=new Date(e,i,v(a,28)),this.viewDate=new Date(e,i,v(a,28)),this.format.hasMonth?this.showView(1):this.hideView(),this.pick("year");break;case"month prev":case"month next":i="month prev"===r?i-1:"month next"===r?i+1:i,this.viewDate=new Date(e,i,v(a,28)),this.fillDays();break;case"month current":this.format.hasMonth&&this.showView(1);break;case"month picked":this.format.hasDay?this.showView(0):this.hideView();break;case"month":i=_.inArray(o.text(),this.options.monthsShort),this.date=new Date(e,i,v(a,28)),this.viewDate=new Date(e,i,v(a,28)),this.format.hasDay?this.showView(0):this.hideView(),this.pick("month");break;case"day prev":case"day next":case"day":i="day prev"===r?i-1:"day next"===r?i+1:i,a=parseInt(o.text(),10),this.date=new Date(e,i,a),this.viewDate=new Date(e,i,a),this.fillDays(),"day"===r&&this.hideView(),this.pick("day");break;case"day picked":this.hideView(),this.pick("day")}},clickDoc:function(t){for(var e,i=t.target,a=this.$trigger[0];i!==n;){if(i===a){e=!0;break}i=i.parentNode}e||this.hide()},keyup:function(){this.update()},getValue:function(){var t=this.$element,e="";return this.isInput?e=t.val():this.isInline&&!this.options.container||(e=t.text()),e},setValue:function(t){var e=this.$element;t=D(t)?t:"",this.isInput?e.val(t):this.isInline&&!this.options.container||e.text(t)},show:function(){this.isBuilt||this.build(),this.isShown||this.trigger(h).isDefaultPrevented()||(this.isShown=!0,this.$picker.removeClass(w).on(i,_.proxy(this.click,this)),this.showView(this.options.startView),this.isInline||(t.on(e,this._place=q(this.place,this)),p.on(i,this._clickDoc=q(this.clickDoc,this)),this.place()))},hide:function(){this.isShown&&(this.trigger(l).isDefaultPrevented()||(this.isShown=!1,this.$picker.addClass(w).off(i,this.click),this.isInline||(t.off(e,this._place),p.off(i,this._clickDoc))))},update:function(){this.setDate(this.getValue(),!0)},pick:function(t){var e=this.$element,i=this.date;this.trigger(d,{view:t||"",date:i}).isDefaultPrevented()||(this.setValue(i=this.formatDate(this.date)),this.isInput&&e.trigger("change"))},reset:function(){this.setDate(this.initialDate,!0),this.setValue(this.initialValue),this.isShown&&this.showView(this.options.startView)},getMonthName:function(t,e){var i=this.options,a=i.months;return _.isNumeric(t)?t=s(t):$(e)&&(e=t),!0===e&&(a=i.monthsShort),a[b(t)?t:this.date.getMonth()]},getDayName:function(t,e,i){var a=this.options,n=a.days;return _.isNumeric(t)?t=s(t):($(i)&&(i=e),$(e)&&(e=t)),(n=!0===i?a.daysMin:!0===e?a.daysShort:n)[b(t)?t:this.date.getDay()]},getDate:function(t){var e=this.date;return t?this.formatDate(e):new Date(e)},setDate:function(t,e){var i=this.options.filter;if(x(t)||D(t)){if(t=this.parseDate(t),_.isFunction(i)&&!1===i.call(this.$element,t))return;this.date=t,this.viewDate=new Date(t),e||this.pick(),this.isBuilt&&this.fillAll()}},setStartDate:function(t){(x(t)||D(t))&&(this.startDate=this.parseDate(t),this.isBuilt&&this.fillAll())},setEndDate:function(t){(x(t)||D(t))&&(this.endDate=this.parseDate(t),this.isBuilt&&this.fillAll())},parseDate:function(t){var e,i,a,n,s,r,o=this.format,h=[];if(x(t))return new Date(t.getFullYear(),t.getMonth(),t.getDate());if(D(t)&&(h=t.match(u)||[]),i=(t=new Date).getFullYear(),a=t.getDate(),n=t.getMonth(),e=o.parts.length,h.length===e)for(r=0;r<e;r++)switch(s=parseInt(h[r],10)||1,o.parts[r]){case"dd":case"d":a=s;break;case"mm":case"m":n=s-1;break;case"yy":i=2e3+s;break;case"yyyy":i=s}return new Date(i,n,a)},formatDate:function(t){var e,i,a,n,s,r=this.format,o="";if(x(t))for(o=r.source,i=t.getFullYear(),(n={d:t.getDate(),m:t.getMonth()+1,yy:i.toString().substring(2),yyyy:i}).dd=(n.d<10?"0":"")+n.d,n.mm=(n.m<10?"0":"")+n.m,e=r.parts.length,s=0;s<e;s++)a=r.parts[s],o=o.replace(a,n[a]);return o},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(o)}},C.LANGUAGES={},C.DEFAULTS={autoshow:!1,autohide:!1,autopick:!1,inline:!1,container:null,trigger:null,language:"",format:"yyyy-mm-dd",date:null,startDate:null,endDate:null,startView:0,weekStart:0,yearFirst:!1,yearSuffix:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],itemTag:"li",mutedClass:"muted",pickedClass:"picked",disabledClass:"disabled",template:'<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',offset:10,zIndex:1e3,filter:null,show:null,hide:null,pick:null},C.setDefaults=function(t){_.extend(C.DEFAULTS,_.isPlainObject(t)&&t)},C.other=_.fn.qorDatepicker,_.fn.qorDatepicker=function(n){var s,r=S(arguments,1);return this.each(function(){var t,e,i=_(this),a=i.data(o);if(!a){if(/destroy/.test(n))return;t=_.extend({},i.data(),_.isPlainObject(n)&&n),i.data(o,a=new C(this,t))}D(n)&&_.isFunction(e=a[n])&&(s=e.apply(a,r))}),$(s)?this:s},_.fn.qorDatepicker.Constructor=C,_.fn.qorDatepicker.languages=C.LANGUAGES,_.fn.qorDatepicker.setDefaults=C.setDefaults,_.fn.qorDatepicker.noConflict=function(){return _.fn.qorDatepicker=C.other,this}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}(function(o){var s="qor.datepicker",t="enable."+s,h="pick."+s,l="click."+s,d=".qor-datepicker__embedded",c=".qor-datepicker__save",i="[data-picker-type]";function u(t,e){this.$element=o(t),this.options=o.extend(!0,{},u.DEFAULTS,o.isPlainObject(e)&&e),this.date=null,this.formatDate=null,this.built=!1,this.pickerData=this.$element.data(),this.$parent=this.$element.closest(i),this.isDateTimePicker="datetime"==this.$parent.data("picker-type"),this.$targetInput=this.$parent.find(this.pickerData.targetInput||(this.isDateTimePicker?".qor-datetimepicker__input":".qor-datepicker__input")),this.init()}return u.prototype={init:function(){this.$targetInput.is(":disabled")?this.$element.remove():this.bind()},bind:function(){this.$element.on(l,o.proxy(this.show,this))},unbind:function(){this.$element.off(l,this.show)},build:function(){var t,i,e,a=this.$element,n=this.$targetInput,s=n.val(),r={date:new Date,inline:!0};this.built||(a.is(":input")&&Date.parse(a.val())?r.date=new Date(a.val()):s&&Date.parse(s)&&(r.date=new Date(s)),this.$modal=t=o((i=u.TEMPLATE,e=this.options.text,"string"==typeof i&&"object"===_typeof(e)&&o.each(e,function(t,e){i=i.replace("$["+String(t).toLowerCase()+"]",e)}),i)).appendTo("body"),n.data("start-date")&&(r.startDate=new Date(n.data("start-date"))),n.data("end-date")&&(r.endDate=new Date(n.data("end-date"))),t.find(d).on(h,o.proxy(this.change,this)).qorDatepicker(r).triggerHandler(h),t.find(c).on(l,o.proxy(this.pick,this)),this.built=!0)},unbuild:function(){this.built&&this.$modal.find(d).off(h,this.change).qorDatepicker("destroy").end().find(c).off(l,this.pick).end().remove()},change:function(t){var e,i=this.$modal,a=o(t.target);this.date=e=a.qorDatepicker("getDate"),this.formatDate=a.qorDatepicker("getDate",!0),i.find(".qor-datepicker__picked-year").text(e.getFullYear()),i.find(".qor-datepicker__picked-date").text([a.qorDatepicker("getDayName",e.getDay(),!0)+",",String(a.qorDatepicker("getMonthName",e.getMonth(),!0)),e.getDate()].join(" "))},show:function(){this.built||this.build(),this.$modal.qorModal("show")},pick:function(){var t=this.$targetInput,e=this.formatDate;if(this.isDateTimePicker){var i=/^\d{4}-\d{1,2}-\d{1,2}/,a=t.val();i.test(a)?e=a.replace(i,e):e+=" 00:00"}t.val(e).trigger("change"),this.$modal.qorModal("hide")},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(s)}},u.DEFAULTS={text:{title:"Pick a date",ok:"OK",cancel:"Cancel"}},u.TEMPLATE='<div class="qor-modal fade qor-datepicker" tabindex="-1" role="dialog" aria-hidden="true">\n            <div class="mdl-card mdl-shadow--2dp" role="document">\n                <div class="mdl-card__title">\n                    <h2 class="mdl-card__title-text">$[title]</h2>\n                </div>\n                <div class="mdl-card__supporting-text">\n                    <div class="qor-datepicker__picked">\n                        <div class="qor-datepicker__picked-year"></div>\n                        <div class="qor-datepicker__picked-date"></div>\n                    </div>\n                    <div class="qor-datepicker__embedded"></div>\n                </div>\n                <div class="mdl-card__actions">\n                    <a class="mdl-button mdl-button--colored  mdl-button--raised qor-datepicker__save">$[ok]</a>\n                    <a class="mdl-button mdl-button--colored " data-dismiss="modal">$[cancel]</a>\n                </div>\n            </div>\n        </div>',u.plugin=function(n){return this.each(function(){var t,e,i=o(this),a=i.data(s);if(!a){if(!o.fn.qorDatepicker)return;if(/destroy/.test(n))return;t=o.extend(!0,{},i.data(),"object"===_typeof(n)&&n),i.data(s,a=new u(this,t))}"string"==typeof n&&o.isFunction(e=a[n])&&e.apply(a)})},o(function(){var e='[data-toggle="qor.datepicker"]';o(document).on("disable.qor.datepicker",function(t){u.plugin.call(o(e,t.target),"destroy")}).on(t,function(t){u.plugin.call(o(e,t.target))}).triggerHandler(t)}),u}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?t(require("jquery")):t(jQuery)}(function(s){var r="qor.timepicker",t="enable."+r,e="click."+r,i="focus."+r,a="keydown."+r,n="blur."+r,o="selectTime."+r,h="[data-picker-type]";function l(t,e){this.$element=s(t),this.options=s.extend(!0,{},l.DEFAULTS,s.isPlainObject(e)&&e),this.formatDate=null,this.pickerData=this.$element.data(),this.parent=this.$element.closest(h),this.isDateTimePicker="datetime"==this.parent.data("picker-type"),this.$targetInput=this.parent.find(this.pickerData.targetInput||(this.isDateTimePicker?".qor-datetimepicker__input":".qor-datepicker__input")),this.init()}return l.prototype={init:function(){if(this.$targetInput.is(":disabled"))this.$element.remove();else{this.bind(),this.oldValue=this.$targetInput.val();var t=new Date,e=t.getMonth()+1,i=t.getDate();e=e<8?"0"+e:e,i=i<10?"0"+i:i,this.dateValueNow=t.getFullYear()+"-"+e+"-"+i}},bind:function(){this.isDateTimePicker&&this.$targetInput.qorTimepicker({timeFormat:"H:i",showOn:null,wrapHours:!1,scrollDefault:"now"}).on(o,s.proxy(this.changeTime,this)).on(n,s.proxy(this.blur,this)).on(i,s.proxy(this.focus,this)).on(a,s.proxy(this.keydown,this)),this.$element.on(e,s.proxy(this.show,this))},unbind:function(){this.$element.off(e,this.show),this.isDateTimePicker&&this.$targetInput.off(o,this.changeTime).off(n,this.blur).off(i,this.focus).off(a,this.keydown)},focus:function(){},blur:function(){var t,e,i,a,n,s,r=this.$targetInput.val(),o=r.split(" "),h=o.length,l=/\d{1,2}:\d{1,2}/,d=/^\d{4}-\d{1,2}-\d{1,2}/;if(r){if(1==h)d.test(o[0])&&(e=o[0],i="00:00"),l.test(o[0])&&(e=this.dateValueNow,i=o[0]);else for(var c=0;c<h;c++){a=d.test(o[c]),n=l.test(o[c]),a&&(e=o[c],s="-"),n&&(i=o[c],s=":"),t=o[c].split(s);for(var u=0;u<t.length;u++)t[u].length<2&&(t[u]="0"+t[u]);a&&(e=t.join(s)),n&&(i=t.join(s))}this.checkDate(e)&&this.checkTime(i)?(this.$targetInput.val(e+" "+i),this.oldValue=this.$targetInput.val()):this.$targetInput.val(this.oldValue)}},keydown:function(t){var e=t.keyCode;-1==[48,49,50,51,52,53,54,55,56,57,8,37,38,39,40,27,32,20,189,16,186,96,97,98,99,100,101,102,103,104,105].indexOf(e)&&t.preventDefault()},checkDate:function(t){return/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(t)},checkTime:function(t){return/^([01]\d|2[0-3]):?([0-5]\d)$/.test(t)},changeTime:function(){var t,e=this.$targetInput,i=this.oldValue,a=/\d{1,2}:\d{1,2}/,n=a.test(i),s=e.data().timepickerList.find(".ui-timepicker-selected").html();t=i?n?i.replace(a,s):i+" "+s:this.dateValueNow+" "+s,e.val(t)},show:function(){this.isDateTimePicker&&(this.$targetInput.qorTimepicker("show"),this.oldValue=this.$targetInput.val())},destroy:function(){this.unbind(),this.$targetInput.qorTimepicker("remove"),this.$element.removeData(r)}},l.DEFAULTS={},l.plugin=function(n){return this.each(function(){var t,e,i=s(this),a=i.data(r);if(!a){if(!s.fn.qorDatepicker)return;if(/destroy/.test(n))return;t=s.extend(!0,{},i.data(),"object"===_typeof(n)&&n),i.data(r,a=new l(this,t))}"string"==typeof n&&s.isFunction(e=a[n])&&e.apply(a)})},s(function(){var e='[data-toggle="qor.timepicker"]';s(document).on("disable.qor.timepicker",function(t){l.plugin.call(s(e,t.target),"destroy")}).on(t,function(t){l.plugin.call(s(e,t.target))}).triggerHandler(t)}),l});