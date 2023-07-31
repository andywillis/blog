var n$2,l$2,u$2,s$2=[];function y$2(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$2.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$2(l,f,i,o,null)}function d$2(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$2:r};return null==r&&null!=l$2.vnode&&l$2.vnode(f),f}function k$2(n){return n.children}n$2=s$2.slice,l$2={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;

var o=/[\s\n\\/='"\0<>]/,n$1=/^xlink:?./,a=/["&<]/;function i(e){if(0===e.length||!1===a.test(e))return e;for(var t=0,r=0,o="",n="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;default:continue}r!==t&&(o+=e.slice(t,r)),o+=n,t=r+1;}return r!==t&&(o+=e.slice(t,r)),o}var l$1={},c=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),s$1=/[A-Z]/g;function _(e){var t="";for(var r in e){var o=e[r];if(null!=o&&""!==o){var n="-"==r[0]?r:l$1[r]||(l$1[r]=r.replace(s$1,"-$&").toLowerCase()),a=";";"number"!=typeof o||n.startsWith("--")||c.has(n)||(a="px;"),t=t+n+":"+o+a;}}return t||void 0}var u$1,p,d$1,f,v=[],h=Array.isArray,m=Object.assign;function y$1(o,n){var a=l$2.__s;l$2.__s=!0,u$1=l$2.__b,p=l$2.diffed,d$1=l$2.__r,f=l$2.unmount;var i=y$2(k$2,null);i.__k=[o];try{return x(o,n||k$1,!1,void 0,i)}finally{l$2.__c&&l$2.__c(o,v),l$2.__s=a,v.length=0;}}function g(){this.__d=!0;}var k$1={};function b(e,t){var r,o=e.type,n=!0;return e.__c?(n=!1,(r=e.__c).state=r.__s):r=new o(e.props,t),e.__c=r,r.__v=e,r.props=e.props,r.context=t,r.__d=!0,null==r.state&&(r.state=k$1),null==r.__s&&(r.__s=r.state),o.getDerivedStateFromProps?r.state=m({},r.state,o.getDerivedStateFromProps(r.props,r.state)):n&&r.componentWillMount?(r.componentWillMount(),r.state=r.__s!==r.state?r.__s:r.state):!n&&r.componentWillUpdate&&r.componentWillUpdate(),d$1&&d$1(e),r.render(r.props,r.state,t)}function x(t,a,l,c,s){if(null==t||!0===t||!1===t||""===t)return "";if("object"!=typeof t)return "function"==typeof t?"":i(t+"");if(h(t)){var v="";s.__k=t;for(var y=0;y<t.length;y++){var k=t[y];null!=k&&"boolean"!=typeof k&&(v+=x(k,a,l,c,s));}return v}if(void 0!==t.constructor)return "";t.__=s,u$1&&u$1(t);var S,D,A,E=t.type,F=t.props,L=a;if("function"==typeof E){if(E===k$2){if(F.UNSTABLE_comment)return "\x3c!--"+i(F.UNSTABLE_comment||"")+"--\x3e";D=F.children;}else {if(null!=(S=E.contextType)){var T=a[S.__c];L=T?T.props.value:S.__;}if(E.prototype&&"function"==typeof E.prototype.render)D=b(t,L),A=t.__c;else {t.__c=A={__v:t,props:F,context:L,setState:g,forceUpdate:g,__d:!0,__h:[]};for(var U=0;A.__d&&U++<25;)A.__d=!1,d$1&&d$1(t),D=E.call(A,F,L);A.__d=!0;}if(null!=A.getChildContext&&(a=m({},a,A.getChildContext())),(E.getDerivedStateFromError||A.componentDidCatch)&&l$2.errorBoundaries){var W="";D=null!=D&&D.type===k$2&&null==D.key?D.props.children:D;try{return W=x(D,a,l,c,t)}catch(e){return E.getDerivedStateFromError&&(A.__s=E.getDerivedStateFromError(e)),A.componentDidCatch&&A.componentDidCatch(e,{}),A.__d&&(D=b(t,a),null!=(A=t.__c).getChildContext&&(a=m({},a,A.getChildContext())),W=x(D=null!=D&&D.type===k$2&&null==D.key?D.props.children:D,a,l,c,t)),W}finally{p&&p(t),t.__=void 0,f&&f(t);}}}var j=x(D=null!=D&&D.type===k$2&&null==D.key?D.props.children:D,a,l,c,t);return p&&p(t),t.__=void 0,f&&f(t),j}var M,z="<"+E,B="";for(var N in F){var H=F[N];switch(N){case"children":M=H;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in F)continue;N="for";break;case"className":if("class"in F)continue;N="class";break;case"defaultChecked":N="checked";break;case"defaultSelected":N="selected";break;case"defaultValue":case"value":switch(N="value",E){case"textarea":M=H;continue;case"select":c=H;continue;case"option":c!=H||"selected"in F||(z+=" selected");}break;case"dangerouslySetInnerHTML":B=H&&H.__html;continue;case"style":"object"==typeof H&&(H=_(H));break;default:if(l&&n$1.test(N))N=N.toLowerCase().replace(w,"xlink:");else {if(o.test(N))continue;"-"!==N[4]&&"draggable"!==N||null==H||(H+="");}}null!=H&&!1!==H&&"function"!=typeof H&&(z=!0===H||""===H?z+" "+N:z+" "+N+'="'+i(H+"")+'"');}if(o.test(E))throw new Error(E+" is not a valid HTML tag name in "+z+">");return B||("string"==typeof M?B=i(M):null!=M&&!1!==M&&!0!==M&&(B=x(M,a,"svg"===E||"foreignObject"!==E&&l,c,t))),p&&p(t),t.__=void 0,f&&f(t),!B&&C.has(E)?z+"/>":z+">"+B+"</"+E+">"}var w=/^xlink:?/,C=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);

var n,
  l,
  u,
  s = [];
function y(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return d(l, f, i, o, null);
}
function d(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u : r
  };
  return null == r && null != l.vnode && l.vnode(f), f;
}
function k(n) {
  return n.children;
}
n = s.slice, l = {
  __e: function (n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

function Div({
  content
}) {
  return y("div", null, content);
}

const App = y(k, null, y(Div, {
  content: "Hallo"
}));
console.log(y$1(App));
