// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var args42278 = [];
var len__19923__auto___42284 = arguments.length;
var i__19924__auto___42285 = (0);
while(true){
if((i__19924__auto___42285 < len__19923__auto___42284)){
args42278.push((arguments[i__19924__auto___42285]));

var G__42286 = (i__19924__auto___42285 + (1));
i__19924__auto___42285 = G__42286;
continue;
} else {
}
break;
}

var G__42280 = args42278.length;
switch (G__42280) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42278.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__42281 = cljs.core._EQ_;
var expr__42282 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__42281.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__42282))){
return ((function (pred__42281,expr__42282){
return (function (p1__42274_SHARP_){
return console.warn(p1__42274_SHARP_);
});
;})(pred__42281,expr__42282))
} else {
if(cljs.core.truth_(pred__42281.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__42282))){
return ((function (pred__42281,expr__42282){
return (function (p1__42275_SHARP_){
return console.debug(p1__42275_SHARP_);
});
;})(pred__42281,expr__42282))
} else {
if(cljs.core.truth_(pred__42281.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__42282))){
return ((function (pred__42281,expr__42282){
return (function (p1__42276_SHARP_){
return console.error(p1__42276_SHARP_);
});
;})(pred__42281,expr__42282))
} else {
return ((function (pred__42281,expr__42282){
return (function (p1__42277_SHARP_){
return console.log(p1__42277_SHARP_);
});
;})(pred__42281,expr__42282))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1445816822867