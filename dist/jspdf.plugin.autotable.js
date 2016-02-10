/** 
 * jsPDF AutoTable plugin v2.0.19
 * Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable 
 * 
 * Licensed under the MIT License. 
 * http://opensource.org/licenses/mit-license 
 * 
 * @preserve 
 */
!function(){"use strict";function t(){return{theme:"striped",styles:{},headerStyles:{},bodyStyles:{},alternateRowStyles:{},columnStyles:{},startY:!1,margin:40,pageBreak:"auto",tableWidth:"auto",createdHeaderCell:function(t,e){},createdCell:function(t,e){},drawHeaderRow:function(t,e){},drawRow:function(t,e){},drawHeaderCell:function(t,e){},drawCell:function(t,e){},beforePageContent:function(t){},afterPageContent:function(t){}}}function e(){return{cellPadding:5,fontSize:10,font:"helvetica",lineColor:200,lineWidth:.1,fontStyle:"normal",overflow:"ellipsize",fillColor:255,textColor:20,halign:"left",valign:"top",fillStyle:"F",rowHeight:20,columnWidth:"auto"}}var n={};n["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},n.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n.createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var o=function d(){n.classCallCheck(this,d),this.height=0,this.width=0,this.contentWidth=0,this.rows=[],this.columns=[],this.headerRow=null,this.settings={},this.pageCount=1},i=function f(t){n.classCallCheck(this,f),this.raw=t||{},this.index=0,this.styles={},this.cells={},this.height=0,this.y=0},r=function c(t){n.classCallCheck(this,c),this.raw=t,this.styles={},this.text="",this.contentWidth=0,this.textPos={},this.height=0,this.width=0,this.x=0,this.y=0},l=function y(t){n.classCallCheck(this,y),this.dataKey=t,this.options={},this.styles={},this.contentWidth=0,this.width=0,this.x=0},a=1.15,s={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal",fillStyle:"F"},header:{textColor:255,fillColor:[41,128,185],rowHeight:23,fontStyle:"bold"},body:{},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1,fillStyle:"DF"},header:{textColor:255,fillColor:[26,188,156],rowHeight:23,fillStyle:"F",fontStyle:"bold"},body:{},alternateRow:{}},plain:{header:{fontStyle:"bold"}}},h=function(){function o(){n.classCallCheck(this,o)}return n.createClass(o,null,[{key:"initSettings",value:function(e){var n=Object.assign({},t(),e);"undefined"!=typeof n.extendWidth&&(n.tableWidth=n.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),"undefined"!=typeof n.margins&&("undefined"==typeof n.margin&&(n.margin=n.margins),console.error("Use of deprecated option: margins, use margin instead.")),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(t){var e="string"==typeof t?t:t[0],o="string"==typeof t?t:t[1];"undefined"!=typeof n[e]&&("undefined"==typeof n.styles[o]&&(n.styles[o]=n[e]),console.error("Use of deprecated option: "+e+", use the style "+o+" instead."))});var o=n.margin;return n.margin={},"number"==typeof o.horizontal&&(o.right=o.horizontal,o.left=o.horizontal),"number"==typeof o.vertical&&(o.top=o.vertical,o.bottom=o.vertical),["top","right","bottom","left"].forEach(function(t,e){if("number"==typeof o)n.margin[t]=o;else{var i=Array.isArray(o)?e:t;n.margin[t]="number"==typeof o[i]?o[i]:40}}),n}},{key:"styles",value:function(t){return t.unshift(e()),t.unshift({}),Object.assign.apply(this,t)}}]),o}();!function(t){function e(t,e,o){t&&"object"===("undefined"==typeof t?"undefined":n["typeof"](t))||console.error("The headers should be an object or array, is: "+("undefined"==typeof t?"undefined":n["typeof"](t))),e&&"object"===("undefined"==typeof e?"undefined":n["typeof"](e))||console.error("The data should be an object or array, is: "+("undefined"==typeof e?"undefined":n["typeof"](e))),o&&"object"!==("undefined"==typeof o?"undefined":n["typeof"](o))&&console.error("The data should be an object or array, is: "+("undefined"==typeof e?"undefined":n["typeof"](e))),Array.prototype.forEach||console.error("The current browser does not support Array.prototype.forEach which is required for jsPDF-AutoTable. You can try polyfilling it by including this script https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill")}function d(t,e){j=new o;var a=/\r\n|\r|\n/g,d=new i(t);d.index=-1;var f=h.styles([s[P.theme].table,s[P.theme].header]);d.styles=Object.assign({},f,P.styles,P.headerStyles),t.forEach(function(t,e){"object"===("undefined"==typeof t?"undefined":n["typeof"](t))&&(e="undefined"!=typeof t.dataKey?t.dataKey:t.key),"undefined"!=typeof t.width&&console.error("Use of deprecated option: column.width, use column.styles.columnWidth instead.");var o=new l(e);o.styles=P.columnStyles[o.dataKey]||{},j.columns.push(o);var i=new r;i.raw="object"===("undefined"==typeof t?"undefined":n["typeof"](t))?t.title:t,i.styles=Object.assign({},d.styles),i.text=""+i.raw,i.contentWidth=2*i.styles.cellPadding+m(i.text,i.styles),i.text=i.text.split(a),d.cells[e]=i,P.createdHeaderCell(i,{column:o,row:d,settings:P})}),j.headerRow=d,e.forEach(function(t,e){var n=new i(t),o=e%2===0,l=h.styles([s[P.theme].table,o?s[P.theme].alternateRow:{}]),d=Object.assign({},P.styles,P.bodyStyles,o?P.alternateRowStyles:{});n.styles=Object.assign({},l,d),n.index=e,j.columns.forEach(function(e){var o=new r;o.raw=t[e.dataKey],o.styles=Object.assign({},n.styles,e.styles),o.text="undefined"!=typeof o.raw?""+o.raw:"",n.cells[e.dataKey]=o,P.createdCell(o,b({column:e,row:n})),o.contentWidth=2*o.styles.cellPadding+m(o.text,o.styles),o.text=o.text.split(a)}),j.rows.push(n)})}function f(t,e){var n=0;j.columns.forEach(function(t){t.contentWidth=j.headerRow.cells[t.dataKey].contentWidth,j.rows.forEach(function(e){var n=e.cells[t.dataKey].contentWidth;n>t.contentWidth&&(t.contentWidth=n)}),t.width=t.contentWidth,n+=t.contentWidth}),j.contentWidth=n;var o=e-P.margin.left-P.margin.right,i=o;"number"==typeof P.tableWidth?i=P.tableWidth:"wrap"===P.tableWidth&&(i=j.contentWidth),j.width=o>i?i:o;var r=[],l=0,d=j.width/j.columns.length,f=0;j.columns.forEach(function(t){var e=h.styles([s[P.theme].table,P.styles,t.styles]);"wrap"===e.columnWidth?t.width=t.contentWidth:"number"==typeof e.columnWidth?t.width=e.columnWidth:("auto"===e.columnWidth,t.contentWidth<=d&&j.contentWidth>j.width?t.width=t.contentWidth:(r.push(t),l+=t.contentWidth,t.width=0)),f+=t.width}),c(r,f,l,d),j.height=0;var y=j.rows.concat(j.headerRow);y.forEach(function(e,n){var o=0;j.columns.forEach(function(n){var i=e.cells[n.dataKey];w(i.styles);var r=n.width-2*i.styles.cellPadding;"linebreak"===i.styles.overflow?i.text=t.splitTextToSize(i.text,r+1,{fontSize:i.styles.fontSize}):"ellipsize"===i.styles.overflow?i.text=v(i.text,r,i.styles):"visible"===i.styles.overflow||("hidden"===i.styles.overflow?i.text=v(i.text,r,i.styles,""):"function"==typeof i.styles.overflow?i.text=i.styles.overflow(i.text,r):console.error("Unrecognized overflow type: "+i.styles.overflow));var l=Array.isArray(i.text)?i.text.length-1:0;l>o&&(o=l)}),e.heightStyle=e.styles.rowHeight,e.height=e.heightStyle+o*e.styles.fontSize*a,j.height+=e.height})}function c(t,e,n,o){for(var i=j.width-e-n,r=0;r<t.length;r++){var l=t[r],a=l.contentWidth/n,s=l.contentWidth+i*a<o;if(0>i&&s){t.splice(r,1),n-=l.contentWidth,l.width=o,e+=l.width,c(t,e,n,o);break}l.width=l.contentWidth+i*a}}function y(t){P.afterPageContent(b()),t(),j.pageCount++,C={x:P.margin.left,y:P.margin.top},P.beforePageContent(b()),P.drawHeaderRow(j.headerRow,b({row:j.headerRow}))!==!1&&p(j.headerRow,P.drawHeaderCell)}function u(t){var e=C.y+t+P.margin.bottom;return e>=W.height}function g(t){j.rows.forEach(function(e,n){if(u(e.height)){y(t)}e.y=C.y,P.drawRow(e,b({row:e}))!==!1&&p(e,P.drawCell)})}function p(t,e){C.x=P.margin.left;for(var n=0;n<j.columns.length;n++){var o=j.columns[n],i=t.cells[o.dataKey];if(i){w(i.styles),i.x=C.x,i.y=C.y,i.height=t.height,i.width=o.width,"top"===i.styles.valign?i.textPos.y=C.y+i.styles.cellPadding:"bottom"===i.styles.valign?i.textPos.y=C.y+t.height-i.styles.cellPadding:i.textPos.y=C.y+t.height/2,"right"===i.styles.halign?i.textPos.x=i.x+i.width-i.styles.cellPadding:"center"===i.styles.halign?i.textPos.x=i.x+i.width/2:i.textPos.x=i.x+i.styles.cellPadding;var r=b({column:o,row:t});e(i,r)!==!1&&(x.rect(i.x,i.y,i.width,i.height,i.styles.fillStyle),x.autoTableText(i.text,i.textPos.x,i.textPos.y,{halign:i.styles.halign,valign:i.styles.valign})),C.x+=i.width}}C.y+=t.height}function w(t){Object.keys(S).forEach(function(e){var n=t[e],o=S[e];"undefined"!=typeof n&&(n.constructor===Array?o.apply(this,n):o(n))})}function b(t){return Object.assign({pageCount:j.pageCount,settings:P,table:j,cursor:C},t||{})}function m(t,e){w(e);var n=x.getStringUnitWidth(t);return n*e.fontSize}function v(t,e,n,o){if(o="undefined"!=typeof o?o:"...",Array.isArray(t))return t.forEach(function(i,r){t[r]=v(i,e,n,o)}),t;if(e>=m(t,n))return t;for(;e<m(t+o,n)&&!(t.length<2);)t=t.substring(0,t.length-1);return t.trim()+o}var x,C,S,W,P,j;t.autoTable=function(t,n,o){e(t,n,o),x=this,W=x.internal.pageSize,S={fillColor:x.setFillColor,textColor:x.setTextColor,fontStyle:x.setFontStyle,lineColor:x.setDrawColor,lineWidth:x.setLineWidth,font:x.setFont,fontSize:x.setFontSize},P=h.initSettings(o||{}),C={x:P.margin.left,y:P.startY===!1?P.margin.top:P.startY};var i={textColor:30,fontSize:x.internal.getFontSize(),fontStyle:x.internal.getFont().fontStyle};d(t,n),f(this,W.width);var r=j.rows[0]&&"auto"===P.pageBreak?j.rows[0].height:0,l=P.startY+P.margin.bottom+j.headerRow.height+r;return"avoid"===P.pageBreak&&(l+=j.height),("always"===P.pageBreak&&P.startY!==!1||P.startY!==!1&&l>W.height)&&(this.addPage(this.addPage),C.y=P.margin.top),w(i),P.beforePageContent(b()),P.drawHeaderRow(j.headerRow,b({row:j.headerRow}))!==!1&&p(j.headerRow,P.drawHeaderCell),w(i),g(this.addPage),P.afterPageContent(b()),w(i),this},t.autoTableEndPosY=function(){return"undefined"==typeof C||"undefined"==typeof C.y?0:C.y},t.autoTableHtmlToJson=function(t,e){e=e||!1;for(var n=t.rows[0],o={columns:[],rows:[]},i=0;i<n.cells.length;i++){var r=n.cells[i];o.columns.push("undefined"!=typeof r?r.textContent:"")}for(var l=1;l<t.rows.length;l++){var a=t.rows[l],s=window.getComputedStyle(a);if(e||"none"!==s.display){for(var h=[],d=0;d<n.cells.length;d++)h.push("undefined"!=typeof a.cells[d]?a.cells[d].textContent:"");o.rows.push(h)}}return o.data=o.rows,o},t.autoTableText=function(t,e,n,o){("number"!=typeof e||"number"!=typeof n)&&console.error("The x and y parameters are required. Missing for the text: ",t);var i=this.internal.getFontSize()/this.internal.scaleFactor,r=a,l=/\r\n|\r|\n/g,s=null,h=1;if(("middle"===o.valign||"bottom"===o.valign||"center"===o.halign||"right"===o.halign)&&(s="string"==typeof t?t.split(l):t,h=s.length||1),n+=i*(2-r),"middle"===o.valign?n-=h/2*i:"bottom"===o.valign&&(n-=h*i),"center"===o.halign||"right"===o.halign){var d=i;if("center"===o.halign&&(d*=.5),h>=1){for(var f=0;f<s.length;f++)this.text(s[f],e-this.getStringUnitWidth(s[f])*d,n),n+=i;return x}e-=this.getStringUnitWidth(t)*d}return this.text(t,e,n),this}}(jsPDF.API),"function"!=typeof Object.assign&&!function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(void 0!==o&&null!==o)for(var i in o)o.hasOwnProperty(i)&&(e[i]=o[i])}return e}}()}();