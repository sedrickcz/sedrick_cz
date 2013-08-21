/*
 * jQuery UI Nested Sortable
 * v 1.3.4 / 28 apr 2011
 * http://mjsarfatti.com/sandbox/nestedSortable
 *
 * Depends:
 *	 jquery.ui.sortable.js 1.8+
 *
 * License CC BY-SA 3.0
 * Copyright 2010-2011, Manuele J Sarfatti
 */
!function(t){t.widget("ui.nestedSortable",t.extend({},t.ui.sortable.prototype,{options:{tabSize:20,disableNesting:"ui-nestedSortable-no-nesting",errorClass:"ui-nestedSortable-error",listType:"ol",maxLevels:0,noJumpFix:0},_create:function(){return 0==this.noJumpFix&&this.element.height(this.element.height()),this.element.data("sortable",this.element.data("nestedSortable")),t.ui.sortable.prototype._create.apply(this,arguments)},_mouseDrag:function(e){if(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var i=this.options,s=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop+i.scrollSpeed:e.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft+i.scrollSpeed:e.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(e.pageY-t(document).scrollTop()<i.scrollSensitivity?s=t(document).scrollTop(t(document).scrollTop()-i.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<i.scrollSensitivity&&(s=t(document).scrollTop(t(document).scrollTop()+i.scrollSpeed)),e.pageX-t(document).scrollLeft()<i.scrollSensitivity?s=t(document).scrollLeft(t(document).scrollLeft()-i.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<i.scrollSensitivity&&(s=t(document).scrollLeft(t(document).scrollLeft()+i.scrollSpeed))),s!==!1&&t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var o=this.items.length-1;o>=0;o--){var l=this.items[o],r=l.item[0],n=this._intersectsWithPointer(l);if(n&&r!=this.currentItem[0]&&this.placeholder[1==n?"next":"prev"]()[0]!=r&&!t.contains(this.placeholder[0],r)&&("semi-dynamic"==this.options.type?!t.contains(this.element[0],r):!0)){if(this.direction=1==n?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(l))break;this._rearrange(e,l),this._clearEmpty(r),this._trigger("change",e,this._uiHash());break}}var h=this.placeholder[0].parentNode.parentNode&&t(this.placeholder[0].parentNode.parentNode).closest(".ui-sortable").length?t(this.placeholder[0].parentNode.parentNode):null,a=this._getLevel(this.placeholder),p=this._getChildLevels(this.helper),c=this.placeholder[0].previousSibling?t(this.placeholder[0].previousSibling):null;if(null!=c)for(;"li"!=c[0].nodeName.toLowerCase()||c[0]==this.currentItem[0];){if(!c[0].previousSibling){c=null;break}c=t(c[0].previousSibling)}return newList=document.createElement(i.listType),this.beyondMaxLevels=0,null!=h&&this.positionAbs.left<h.offset().left?(h.after(this.placeholder[0]),this._clearEmpty(h[0]),this._trigger("change",e,this._uiHash())):null!=c&&this.positionAbs.left>c.offset().left+i.tabSize?(this._isAllowed(c,a+p+1),c.children(i.listType).length||c[0].appendChild(newList),c.children(i.listType)[0].appendChild(this.placeholder[0]),this._trigger("change",e,this._uiHash())):this._isAllowed(h,a+p),this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e){if(this.beyondMaxLevels){for(var i=this.placeholder.parent().closest(this.options.items),s=this.beyondMaxLevels-1;s>0;s--)i=i.parent().closest(this.options.items);this.placeholder.removeClass(this.options.errorClass),i.after(this.placeholder),this._trigger("change",e,this._uiHash())}t.ui.sortable.prototype._mouseStop.apply(this,arguments)},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/),o=(t(e.item||this).parent(e.listType).parent("li").attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);i&&s.push((e.key||i[1]+"["+(e.key&&e.expression?i[1]:i[2])+"]")+"="+(o?e.key&&e.expression?o[1]:o[2]:"root"))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toHierarchy:function(e){function i(s){var o=(t(s).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);if(null!=o){var l={id:o[2]};return t(s).children(e.listType).children("li").length>0&&(l.children=[],t(s).children(e.listType).children("li").each(function(){var e=i(t(this));l.children.push(e)})),l}}e=e||{},e.startDepthCount||0;var s=[];return t(this.element).children("li").each(function(){var e=i(t(this));s.push(e)}),s},toArray:function(e){function i(t,e){return t.left-e.left}function s(i,r,n){return right=n+1,t(i).children(e.listType).children("li").length>0&&(r++,t(i).children(e.listType).children("li").each(function(){right=s(t(this),r,right)}),r--),id=t(i).attr(e.attribute||"id").match(e.expression||/(.+)[-=_](.+)/),r===o+1?pid="root":(parentItem=t(i).parent(e.listType).parent("li").attr("id").match(e.expression||/(.+)[-=_](.+)/),pid=parentItem[2]),null!=id&&l.push({item_id:id[2],parent_id:pid,depth:r,left:n,right:right}),n=right+1}e=e||{};var o=e.startDepthCount||0,l=[],r=2;return l.push({item_id:"root",parent_id:"none",depth:o,left:"1",right:2*(t("li",this.element).length+1)}),t(this.element).children("li").each(function(){r=s(this,o+1,r)}),l=l.sort(i)},_clear:function(){t.ui.sortable.prototype._clear.apply(this,arguments);for(var e=this.items.length-1;e>=0;e--){var i=this.items[e].item[0];this._clearEmpty(i)}return!0},_clearEmpty:function(t){t.children[1]&&0==t.children[1].children.length&&t.removeChild(t.children[1])},_getLevel:function(t){var e=1;if(this.options.listType)for(var i=t.closest(this.options.listType);!i.is(".ui-sortable");)e++,i=i.parent().closest(this.options.listType);return e},_getChildLevels:function(e,i){var s=this,o=this.options,l=0;return i=i||0,t(e).children(o.listType).children(o.items).each(function(t,e){l=Math.max(s._getChildLevels(e,i+1),l)}),i?l+1:l},_isAllowed:function(t,e){var i=this.options;null!=t&&t.hasClass(i.disableNesting)?(this.placeholder.addClass(i.errorClass),this.beyondMaxLevels=i.maxLevels<e&&0!=i.maxLevels?e-i.maxLevels:1):i.maxLevels<e&&0!=i.maxLevels?(this.placeholder.addClass(i.errorClass),this.beyondMaxLevels=e-i.maxLevels):(this.placeholder.removeClass(i.errorClass),this.beyondMaxLevels=0)}})),t.ui.nestedSortable.prototype.options=t.extend({},t.ui.sortable.prototype.options,t.ui.nestedSortable.prototype.options)}(jQuery);