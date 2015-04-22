module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0,n(38);var o=n(15),a=r(o);e["default"]=a["default"],t.exports=e["default"]},function(t,e,n){t.exports=require("react")},function(t,e,n){t.exports=require("classnames")},function(t,e,n){"use strict";e.__esModule=!0;var r=n(13);e["default"]=r.tag({create:function(t,e,n){return{type:t,position:e,parent:n}},destroy:function(t){return t},update:function(t,e){return{id:t,content:e}},shift:function(t,e){return{id:t,delta:e}}}),t.exports=e["default"]},,,,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};e.__esModule=!0;var a=n(1),u=r(a),i=n(43),s=r(i),c=u["default"].createClass({displayName:"Button",getDefaultProps:function(){return{className:"col-btn",hide:!1,tagName:"button",type:"button"}},render:function(){var t=this.props,e=t.children,n=t.hide,r=t.tagName,a=o(t,["children","hide","tagName"]);return n?null:u["default"].createElement(r,a,[u["default"].createElement(s["default"],{key:"__ink__"}),e])}});e["default"]=c,t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){return t.filter(e.parent?function(t){return t.parent===e.parent}:function(t){return!t.parent})}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(44),a=r(o),u=n(1),i=r(u);e["default"]=i["default"].createClass({displayName:"Animator",getDefaultProps:function(){return{component:"div",transitionName:"col-editor-block"}},render:function(){return i["default"].createElement(a["default"],this.props,this.props.children)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(1),i=r(u),s=n(23),c=r(s),l=n(22),f=r(l),p=n(2),d=r(p);e["default"]=i["default"].createClass({displayName:"Switch",propTypes:{app:i["default"].PropTypes.object.isRequired},getInitialState:function(){return{open:!1}},componentWillReceiveProps:function(){this.setState({open:!1})},getTypes:function(){var t=this.props,e=t.app,n=t.parent,r=e.get("blockTypes");if(!n)return r;var o=function(){var t=r.filter(function(t){return t.id===n.type})[0].types;return{v:r.filter(function(e){return t.indexOf(e.id)>-1})}}();return"object"==typeof o?o.v:void 0},render:function(){var t=this.props,e=t.app,n=t.forceOpen,r=t.parent,o=t.position,a=this.getTypes(),u=n||this.state.open;return a.length?i["default"].createElement("div",{className:d["default"]("col-switch",{"col-switch-open":u})},i["default"].createElement(c["default"],{onClick:this._onToggle,secondary:r,hide:u}),i["default"].createElement(f["default"],{app:e,blockTypes:a,parent:r,hide:!u,position:o})):null},_onToggle:function(){var t=this.getTypes();if(1===t.length){var e=this.props,n=e.app,r=e.position,o=e.parent;n.push(a["default"].create,t[0].id,r,o)}this.setState({open:!0})}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};e.__esModule=!0;var a=n(36),u=r(a),i=function(){function t(e){o(this,t),this.id=u["default"](),this.content=e.content,this.parent=e.parent,this.type=e.type}return t.prototype.valueOf=function(){return this.id},t}();e["default"]=i,t.exports=e["default"]},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){e.__esModule=!0;var r=n(5);e.tag=r,e["default"]=n(2)},function(t,e,n){t.exports=function(t,e){var n=void 0===arguments[2]?{}:arguments[2],r=Object.keys(t);return r.reduce(function(n,r){return n[r]=e(t[r],r),n},n)}},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},u=n(6),i=n(7),s=n(3),c=n(4),l=n(1);t.exports=function(t){function e(){o(this,e),t.call(this),u.decorate(this),this._stores={},this._plugins=[]}return a(e,t),e.prototype.push=function(t){for(var e=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];var a=t.apply(void 0,r);return a instanceof Promise?a.then(function(n){return e.dispatch(t,n)}):this._root.dispatch(t,a)},e.prototype.prepare=function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];return(e=this.push).bind.apply(e,[this,t].concat(r))},e.prototype.replace=function(t){this.commit(this.deserialize(t)),this.emit()},e.prototype.dispatch=function(t,e){var n=!1;for(var r in this._stores){var o=this._stores[r][t];o&&(this.set(r,o(this.get(r),e)),n=!0)}return n&&this.emit(),e},e.prototype.addPlugin=function(t,e){this._plugins.push([t,e])},e.prototype.addStore=function(t,e){this._stores[t]=r({},s,e)},e.prototype.serialize=function(){var t=this;return l(this._stores,function(e,n){return e.serialize(t.get(n))})},e.prototype.deserialize=function(){var t=void 0===arguments[0]?{}:arguments[0];return l(this._stores,function(e,n){return e.deserialize(t[n])})},e.prototype.toJSON=function(){return this.serialize()},e.prototype.start=function(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];this.commit(l(this._stores,function(t){return t.getInitialState()})),c(this._plugins,this,function(){e.forEach(function(t){return t()})})},e}(i)},function(t,e,n){t.exports={getInitialState:function(){return void 0},serialize:function(t){return t},deserialize:function(){var t=void 0===arguments[0]?this.getInitialState():arguments[0];return t}}},function(t,e,n){t.exports=function r(t,e,n){var o=t[0],a=t.slice(1);if(!o)return n();var u=o[0],i=o[1];u.register(e,i,function(t){if(t)throw t;r(a,e,n)})}},function(t,e,n){function r(t){return"function"==typeof t}function o(t,e){var n=t.bind(null),r="_"+e+"_"+s++;return n.toString=function(){return r},n}var a=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var u=n(1),i=a(u),s=0;e["default"]=function(t){return i["default"](t,function(t,e){return r(t)?o(t,e):t})},t.exports=e["default"]},function(t,e,r){t.exports=n(39)},function(t,e,r){t.exports=n(40)}])},,function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)};e.__esModule=!0;var u=n(26),i=r(u),s=n(27),c=r(s),l=n(13),f=r(l),p=n(1),d=(r(p),n(24)),h=r(d),v=n(25),m=r(v),g=function(t){function e(n){var r=n.el,a=n.blocks,u=n.blockTypes;o(this,e),t.call(this),this.addStore("blocks",c["default"]),this.addStore("blockTypes",i["default"]),this.addPlugin(h["default"],{blocks:a,blockTypes:u}),this.addPlugin(m["default"],{el:r})}return a(e,t),e.prototype.toJSON=function(){return this.serialize().blocks},e}(f["default"]);e["default"]=g,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(10),a=r(o),u=n(18),i=r(u),s=n(1),c=r(s),l=n(11),f=r(l);e["default"]=c["default"].createClass({displayName:"App",propTypes:{app:c["default"].PropTypes.object.isRequired},getBlock:function(t,e){return c["default"].createElement(i["default"],{key:t.id,app:this.props.app,block:t})},render:function(){var t=this.props.app,e=t.refine("blocks").filter(function(t){return!t.parent});return c["default"].createElement("div",{className:"colonel"},c["default"].createElement(f["default"],{app:t}),c["default"].createElement(a["default"],null,e.map(this.getBlock)))}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(1),i=r(u),s=n(19),c=r(s),l=n(2),f=r(l);e["default"]=i["default"].createClass({displayName:"Block",propTypes:{app:i["default"].PropTypes.object.isRequired,block:i["default"].PropTypes.object.isRequired},getClassName:function(t){return f["default"]("col-block","col-block-"+t)},render:function(){var t=this.props,e=t.app,n=t.block,r=t.children,o=t.first,a=t.last,u=e.refine("blockTypes").find(function(t){return t.id===n.type}),s=(u.id,u.component);return i["default"].createElement("div",{className:this.getClassName(n.type)},i["default"].createElement(s,{ref:"block",content:n.content,onChange:this._onChange},r),i["default"].createElement(c["default"],{app:e,block:n,first:o,last:a}))},_onChange:function(t){var e=this.props,n=e.app,r=e.block;n.push(a["default"].update,r,t)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(10),a=r(o),u=n(17),i=r(u),s=n(11),c=r(s),l=n(1),f=r(l),p=f["default"].createClass({displayName:"EditorBlock",propTypes:{app:f["default"].PropTypes.object.isRequired,block:f["default"].PropTypes.object.isRequired},getBlock:function(t,e){return f["default"].createElement(p,{key:t.id,app:this.props.app,block:t})},render:function(){var t=this.props,e=t.app,n=t.block,r=e.refine("blocks").filter(function(t){return t.parent===n});return f["default"].createElement("div",{className:"col-editor-block"},f["default"].createElement(i["default"],{app:e,block:n},f["default"].createElement(c["default"],{app:e,parent:n}),f["default"].createElement(a["default"],null,r.map(this.getBlock))),f["default"].createElement(c["default"],{app:e,position:n,parent:n.parent}))}});e["default"]=p,t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(42),a=r(o),u=n(20),i=r(u),s=n(21),c=r(s),l=n(1),f=r(l),p=n(33),d=r(p),h=n(34),v=r(h),m=n(3);e["default"]=f["default"].createClass({displayName:"Menu",propTypes:{app:f["default"].PropTypes.object.isRequired,block:f["default"].PropTypes.object.isRequired},getInitialState:function(){return{open:!1}},render:function(){var t=this.props,e=t.app,n=t.block,r=e.get("blocks");return f["default"].createElement("div",{className:"col-menu-wrapper"},f["default"].createElement(i["default"],{ref:"handle",onClick:this._onHandleClick}),f["default"].createElement(a["default"],{element:"nav",role:"navigation",className:"col-menu",onExit:this._onExit,active:this.state.open},f["default"].createElement(c["default"],{ref:"moveUp",label:"Move Up",onClick:e.prepare(m.shift,n.id,-1),hide:d["default"](r,n)}),f["default"].createElement(c["default"],{ref:"moveDown",label:"Move Down",onClick:e.prepare(m.shift,n.id,1),hide:v["default"](r,n)}),f["default"].createElement(c["default"],{ref:"destroy",label:"Remove",onClick:e.prepare(m.destroy,n.id)})))},_onExit:function(){this.setState({open:!1})},_onHandleClick:function(t){t.preventDefault(),this.setState({open:!this.state.open})}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};e.__esModule=!0;var a=n(1),u=r(a),i=n(41),s=r(i);e["default"]=u["default"].createClass({displayName:"MenuHandle",getDefaultProps:function(){return{className:"col-menu-handle",label:"Open the menu for this block",type:"button"}},render:function(){var t=this.props,e=t.label,n=o(t,["label"]);return u["default"].createElement("button",n,u["default"].createElement("span",{className:"col-hidden"},e),u["default"].createElement("span",{"aria-hidden":"true",dangerouslySetInnerHTML:{__html:s["default"]}}))}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n};e.__esModule=!0;var a=n(7),u=r(a),i=n(1),s=r(i);e["default"]=s["default"].createClass({displayName:"MenuItem",propTypes:{label:s["default"].PropTypes.string.isRequired,onClick:s["default"].PropTypes.func.isRequired},getDefaultProps:function(){return{className:"col-menu-item",hide:!1,type:"button"}},render:function(){var t=this.props,e=t.hide,n=t.label,r=o(t,["hide","label"]);return e?null:s["default"].createElement(u["default"],r,n)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(3),a=r(o),u=n(7),i=r(u),s=n(1),c=r(s);e["default"]=c["default"].createClass({displayName:"SwitchNav",propTypes:{app:c["default"].PropTypes.object.isRequired,blockTypes:c["default"].PropTypes.array.isRequired},getButton:function(t){var e=this,n=t.id,r=t.label;return c["default"].createElement(i["default"],{key:n,className:"col-switch-btn",onClick:function(){return e._onAdd(n)}},r)},render:function(){var t=this.props,e=(t.app,t.blockTypes),n=t.hide;return n?null:c["default"].createElement("nav",{className:"col-switch-nav",role:"navigation"},e.map(this.getButton))},_onAdd:function(t){var e=this.props,n=e.app,r=e.position,o=e.parent;n.push(a["default"].create,t,r,o)}}),t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(7),a=r(o),u=n(1),i=r(u),s=n(2),c=r(s);e["default"]=i["default"].createClass({displayName:"SwitchToggle",propTypes:{onClick:i["default"].PropTypes.func.isRequired},getDefaultProps:function(){return{label:"Open block creation menu",hide:!1,secondary:!1,symbol:"+"}},render:function(){var t=this.props,e=t.label,n=t.hide,r=t.onClick,o=t.secondary,u=t.symbol,s=c["default"]("col-btn-fab",{"col-btn-fab-secondary":o});return i["default"].createElement(a["default"],{ref:"toggle",className:s,onClick:r,hide:n},i["default"].createElement("span",{className:"col-hidden"},e),i["default"].createElement("span",{"aria-hidden":"true"},u))}}),t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]={register:function(t,e,n){var r=e.blocks,o=e.blockTypes;t.replace({blocks:r,blockTypes:o}),n()}},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(16),a=r(o),u=n(1),i=r(u);e["default"]={render:function(t,e){i["default"].render(i["default"].createElement(a["default"],{app:t}),e)},register:function(t,e,n){var r=this,o=e.el;this.render(t,o),t.listen(function(e){return r.render(t,o)}),n()}},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var a=n(1),u=r(a);e["default"]={getInitialState:function(){return[]},deserialize:function(){var t=void 0===arguments[0]?[]:arguments[0];return t.map(function(t){var e=t.component;return"object"==typeof e&&(e=u["default"].createClass(e)),o({types:[]},t,{component:e})})},serialize:function(){return void 0}},t.exports=e["default"]},function(t,e,n){"use strict";var r,o=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var a=n(3),u=o(a),i=n(12),s=o(i),c=n(28),l=o(c),f=n(30),p=o(f),d=n(31),h=o(d),v=n(32),m=o(v),g=n(8),y=o(g);e["default"]=(r={},r.getInitialState=function(){return[]},r.serialize=n(29),r.deserialize=n(35),r[u["default"].create]=function(t,e){var n=e.type,r=e.parent,o=e.position,a=void 0===o?0:o,u=new s["default"]({parent:r,type:n});return a instanceof s["default"]&&(a=t.indexOf(a)+1),m["default"](t,u,a)},r[u["default"].destroy]=function(t,e){return p["default"](t,e)},r[u["default"].update]=function(t,e){var n=h["default"](t,e.id);return n.content=l["default"](n.content,e.content),t},r[u["default"].shift]=function(t,e){var n=e.id,r=e.delta,o=h["default"](t,n),a=y["default"](t,o),u=a.indexOf(o)+r,i=t.indexOf(a[u]),s=t.filter(function(t){return t!==o});return m["default"](s,o,i)},r),t.exports=e["default"]},function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=function(t,e){return r({},t,e)},t.exports=e["default"]},function(t,e,n){"use strict";function r(t){function e(n){var r=t.filter(function(t){return t.parent===n});return{content:n.content,type:n.type,blocks:r.map(e)}}t=t||[];var n=t.filter(function(t){return!t.parent});return n.map(e)}e.__esModule=!0,e["default"]=r,t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){return t.filter(function(t){for(var n=t;n;n=n.parent)if(n.id==e)return!1;return!0})},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0,e["default"]=function(t,e){var n=void 0===arguments[2]?"id":arguments[2],r=t.filter(function(t){return t[n]==e});if(r.length)return r[0];throw new Error("Unable to find record with "+n+" of "+e)},t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t,e,n){return Math.max(e,Math.min(n,t))};e["default"]=function(t,e){var n=void 0===arguments[2]?t.length:arguments[2];return function(){var o=r(n,0,t.length),a=t.slice(0,o),u=t.slice(o);return a.concat(e,u)}()},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(8),a=r(o);e["default"]=function(t,e){var n=a["default"](t,e);return n[0]===e},t.exports=e["default"]},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{"default":t}};e.__esModule=!0;var o=n(8),a=r(o);e["default"]=function(t,e){var n=a["default"](t,e);return n[n.length-1]===e},t.exports=e["default"]},function(t,e,n){"use strict";function r(t,e){return t=t||[],t.reduce(function(t,n){var o=new i["default"](a({},n,{parent:e})),u=r(n.blocks,o);return t.concat(o,u)},[])}var o=function(t){return t&&t.__esModule?t:{"default":t}},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=r;var u=n(12),i=o(u);t.exports=e["default"]},function(t,e,n){"use strict";e.__esModule=!0;var r=0;e["default"]=function(){return"c"+(r+=1)},t.exports=e["default"]},,function(t,e,n){},function(t,e,n){function r(t){var e=[],n=t;t=t||{};var r=function(){for(var n=0;n<e.length;n++)e[n].apply(t,arguments)};return t.listen=function(t){e=e.concat(t)},t.ignore=function(t){e=e.filter(function(e){return e!==t})},t.emit=function(){r.apply(t,arguments)},t.volley=function(){var o=arguments;e.length>0&&(cancelAnimationFrame(n),n=requestAnimationFrame(function(){r.apply(t,o)}))},t}t.exports=r(),t.exports.decorate=r},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){this._path=[],this._root=this,this._state=t}var o=n(4),a=n(5),u=n(2);r.prototype={getPath:function(t){return this._path.concat(t).filter(function(t){return void 0!==t})},getRoot:function(){return this._root},getState:function(){return this.getRoot()._state},commit:function(t){this.getRoot()._state=t},get:function(t,e){var n=u(this.getState(),this.getPath(t));return void 0===n?e:n},set:function(t,e){1===arguments.length&&(e=arguments[0],t=void 0),this.commit(o(this.getState(),this.getPath(t),e))},remove:function(t){this.commit(a(this.getState(),this.getPath(t)))},refine:function(t){return Object.create(this,{_path:{value:this.getPath(t)}})},keys:function(){return Object.keys(this.valueOf()||{})},values:function(){var t=this;return this.keys().map(function(e){return t.get(e)})},valueOf:function(){return u(this.getState(),this.getPath())},toJSON:function(){return this.valueOf()},is:function(t){return t.valueOf()==this.valueOf()},find:function(){return this.filter.apply(this,arguments)[0]},first:function(){return this.values().shift()},last:function(){return this.values().pop()},size:function(){return this.values().length}};var i=["sort","map","reduce","filter","forEach","some","every","join"];i.forEach(function(t){r.prototype[t]=function(){var e;return(e=this.values())[t].apply(e,arguments)}}),t.exports=r},function(t,e,n){t.exports=function(t){if(Array.isArray(t))return t.slice();var e={};for(var n in t)e[n]=t[n];return e}},function(t,e,n){var r=n(3);t.exports=function(t,e){for(var n=!0;n;){u=i=void 0,n=!1;var o=t,a=e,u=a[0],i=a.slice(1);if(!u)return o;if(r(o,a)===!1)return void 0;if(!i.length)return o[u];t=o[u],e=i,n=!0}}},function(t,e,n){t.exports=function(t,e){var n=!0;t:for(;n;){a=u=i=s=void 0,n=!1;var r=t,o=e,a=o[0],u=o.slice(1),i=void 0!==r,s=i&&a in r;if(u.length){if(s){t=r[a],e=u,n=!0;continue t}return!1}return s}}},function(t,e,n){var r=n(1),o=n(2);t.exports=function a(t,e,n){if(o(t,e)===n)return t;var u=e[0],i=e.slice(1),s=r(t);return i.length?s[u]=a(u in s?s[u]:{},i,n):u?s[u]=n:s=n,s}},function(t,e,n){var r=n(1),o=n(3);t.exports=function a(t,e){if(o(t,e)===!1)return t;var n=e[0],u=e.slice(1),i=r(t);return u.length?i[n]=a(t[n],u):delete i[n],i}}])},function(t,e,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>\n'},function(t,e,n){!function(e,r){t.exports=r(n(1))}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1),o=n(2);t.exports=o.createClass({displayName:"exports",mixins:[r],propTypes:{active:o.PropTypes.bool,onExit:o.PropTypes.func.isRequired,role:o.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!0,className:"focus-trap-inner",element:"section",role:"dialog"}},getBackdrop:function(){return o.createElement("div",{className:"focus-trap-backdrop","aria-hidden":!0,onClick:this.props.onExit})},getInner:function(){var t=this.props,e=t.className,n=t.element,r=t.children;return o.createElement(n,{className:e},r)},render:function(){var t=this.props,e=t.active,n=t.role;return e?o.createElement("div",{className:"focus-trap",tabIndex:"0",role:n,onKeyUp:this._onKeyUp},this.getBackdrop(),this.getInner()):null},_onKeyUp:function(t){"Escape"===t.key&&this.props.onExit()}})},function(t,e,n){"use strict";t.exports={_pushFocus:function(){this.setState({previousFocus:document.activeElement}),this._focus()},_popFocus:function(){this.state.previousFocus&&(this.state.previousFocus.focus(),this._clearTrap())},_focus:function(){var t=this.getDOMNode();t&&t.focus()},_trapFocus:function(){this._focusTimer=setTimeout(this._focus,10)},_clearTrap:function(){clearTimeout(this._focusTimer)},componentDidMount:function(){var t=this.getDOMNode();t&&(t.addEventListener("focusin",this._clearTrap),t.addEventListener("focusout",this._trapFocus)),this._pushFocus()},componentWillUnmount:function(){var t=this.getDOMNode();this._popFocus(),t&&(t.removeEventListener("focusin",this._clearTrap),t.removeEventListener("focusout",this._trapFocus))}}},function(e,n,r){e.exports=t}])})},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(4),a=0,u=n(5),i=n(8),s=n(2),c=n(7),l=i.PropTypes,f=2*Math.PI,p=n(1),d=n(6),h=i.createClass({displayName:"Ink",shouldComponentUpdate:d,propTypes:{background:l.bool,duration:l.number,opacity:l.number,radius:l.number,recenter:l.bool},getDefaultProps:function(){return{background:!0,duration:1e3,opacity:.25,radius:150,recenter:!0}},getInitialState:function(){return{store:c(this.tick),touchEvents:this.touchEvents()}},touchEvents:function(){return o?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease,onTouchLeave:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},tick:function(){var t=this.state.ctx,e=this.state.color,n=this.state.density,r=this.state.height,o=this.state.width,a=this.state.store;t.save(),t.scale(n,n),t.clearRect(0,0,o,r),t.fillStyle=e,this.props.background&&(t.globalAlpha=a.getTotalOpacity(this.props.opacity),t.fillRect(0,0,o,r)),a.each(this.makeBlot,this),t.restore()},makeBlot:function(t){var e=this.state.ctx,n=this.state.height,r=this.state.width,o=t.x,a=t.y,u=t.radius;if(e.globalAlpha=p.getBlotOpacity(t,this.props.opacity),e.beginPath(),this.props.recenter){var i=Math.max(n,r);o+=p.getBlotShiftX(t,i,r),a+=p.getBlotShiftY(t,i,n)}e.arc(o,a,u*p.getBlotScale(t),0,f),e.closePath(),e.fill()},componentWillUnmount:function(){this.state.store.stop()},pushBlot:function(t,e,n){var r=this,o=this.getDOMNode(),a=o.getBoundingClientRect(),i=a.top,s=a.bottom,c=a.left,l=a.right,f=window.getComputedStyle(o),d=f.color,h=this.state.ctx||o.getContext("2d"),v=this.state.density||u(h),m=s-i,g=l-c,y=p.getMaxRadius(m,g,this.props.radius);this.setState({color:d,ctx:h,density:v,height:m,width:g},function(){r.state.store.add({duration:r.props.duration,mouseDown:t,mouseUp:0,radius:y,x:e-c,y:n-i})})},render:function(){var t=this.state.density,e=this.state.height,n=this.state.width,o=this.state.touchEvents;return i.createElement("canvas",r({className:"ink",style:r({},s,this.props.style),height:e*t,width:n*t,onDragOver:this._onRelease},o))},_onPress:function(t){var e=t.button,n=t.ctrlKey,r=t.clientX,o=t.clientY,u=t.changedTouches,i=Date.now();if(u)for(var s=0;s<u.length;s++){var c=u[s].clientX,l=u[s].clientY;this.pushBlot(i,c,l)}else e!==a||n||this.pushBlot(i,r,o)},_onRelease:function(){this.state.store.release(Date.now())}});t.exports=h},function(t,e,n){"use strict";function r(t){return l(t.duration,Date.now()-t.mouseDown)}function o(t){return t.mouseUp>0?Date.now()-t.mouseUp:0}function a(t){var e=t.duration,n=t.radius,a=.85*u(r(t),0,n,e),i=.15*u(o(t),0,n,e),l=.02*n*s(Date.now()/e);return c(0,a+i+l)}var u=n(3),i=Math.sqrt(2),s=Math.cos,c=Math.max,l=Math.min;t.exports={getMaxRadius:function(t,e,n){return l(.5*c(t,e),n)},getBlotOpacity:function(t,e){return u(o(t),e,-e,t.duration)},getBlotOuterOpacity:function(t,e){return l(this.getBlotOpacity(t,e),u(r(t),0,.3,3*t.duration))},getBlotShiftX:function(t,e,n){return l(1,a(t)/e*2/i)*(n/2-t.x)},getBlotShiftY:function(t,e,n){return l(1,a(t)/e*2/i)*(n/2-t.y)},getBlotScale:function(t){return a(t)/t.radius}}},function(t){"use strict";t.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"}},function(t){"use strict";t.exports=function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}},function(t){"use strict";var e=!1;"undefined"!=typeof window&&(e="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),t.exports=e},function(t){"use strict";t.exports=function(t){var e=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return e/n}},function(t){"use strict";function e(t,e){for(var n in t)if(this.props[n]!==t[n])return!0;for(var r in e)if(this.state[r]!==e[r])return!0;return!1}t.exports=e},function(t,e,n){"use strict";var r=n(1),o=function(t){var e=t.mouseUp,n=t.duration;return!e||Date.now()-e<n};t.exports=function(t){var e=[],n=!1,a=void 0,u={each:function(t,n){for(var r=0,o=e.length;o>r;r++)t.call(n,e[r])},play:function(){n||(n=!0,u.update())},stop:function(){n=!1,cancelAnimationFrame(a)},getTotalOpacity:function(t){for(var n=0,o=0,a=e.length;a>o;o++)n+=r.getBlotOuterOpacity(e[o],t);return n},update:function(){e=e.filter(o),e.length?(a=requestAnimationFrame(u.update),t()):u.stop()},add:function(t){e.push(t),u.play()},release:function(t){for(var n=e.length-1;n>=0;n--)if(!e[n].mouseUp)return e[n].mouseUp=t}};return u}},function(t){t.exports=n(1)}])},function(t,e,n){t.exports=require("react/lib/ReactCSSTransitionGroup")}]);
//# sourceMappingURL=colonel-kurtz.js.map