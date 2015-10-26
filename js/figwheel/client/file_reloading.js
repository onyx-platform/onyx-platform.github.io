// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__42290_SHARP_,p2__42291_SHARP_){
var and__18872__auto__ = p1__42290_SHARP_;
if(cljs.core.truth_(and__18872__auto__)){
return p2__42291_SHARP_;
} else {
return and__18872__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18884__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18884__auto__){
return or__18884__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__42293_SHARP_,p2__42292_SHARP_){
return [cljs.core.str(p2__42292_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18884__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18884__auto__){
return or__18884__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18884__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19778__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19782__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19782__auto__,method_table__19778__auto__,prefer_table__19779__auto__,method_cache__19780__auto__,cached_hierarchy__19781__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42294){
var map__42295 = p__42294;
var map__42295__$1 = ((((!((map__42295 == null)))?((((map__42295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42295):map__42295);
var file = cljs.core.get.call(null,map__42295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__42297){
var map__42298 = p__42297;
var map__42298__$1 = ((((!((map__42298 == null)))?((((map__42298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42298):map__42298);
var namespace = cljs.core.get.call(null,map__42298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19778__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19782__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19782__auto__,method_table__19778__auto__,prefer_table__19779__auto__,method_cache__19780__auto__,cached_hierarchy__19781__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e42300){if((e42300 instanceof Error)){
var e = e42300;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42300;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args42301 = [];
var len__19923__auto___42304 = arguments.length;
var i__19924__auto___42305 = (0);
while(true){
if((i__19924__auto___42305 < len__19923__auto___42304)){
args42301.push((arguments[i__19924__auto___42305]));

var G__42306 = (i__19924__auto___42305 + (1));
i__19924__auto___42305 = G__42306;
continue;
} else {
}
break;
}

var G__42303 = args42301.length;
switch (G__42303) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42301.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42308,callback){
var map__42311 = p__42308;
var map__42311__$1 = ((((!((map__42311 == null)))?((((map__42311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42311):map__42311);
var file_msg = map__42311__$1;
var request_url = cljs.core.get.call(null,map__42311__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42311,map__42311__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42311,map__42311__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42313){
var map__42316 = p__42313;
var map__42316__$1 = ((((!((map__42316 == null)))?((((map__42316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42316):map__42316);
var file_msg = map__42316__$1;
var namespace = cljs.core.get.call(null,map__42316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__42316__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18884__auto__ = meta_data;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18872__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18872__auto__){
var or__18884__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18884__auto____$1)){
return or__18884__auto____$1;
} else {
var and__18872__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18872__auto____$1){
var or__18884__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18884__auto____$2){
return or__18884__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18872__auto____$1;
}
}
}
} else {
return and__18872__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42318,callback){
var map__42321 = p__42318;
var map__42321__$1 = ((((!((map__42321 == null)))?((((map__42321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42321):map__42321);
var file_msg = map__42321__$1;
var request_url = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27278__auto___42409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___42409,out){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___42409,out){
return (function (state_42391){
var state_val_42392 = (state_42391[(1)]);
if((state_val_42392 === (1))){
var inst_42369 = cljs.core.nth.call(null,files,(0),null);
var inst_42370 = cljs.core.nthnext.call(null,files,(1));
var inst_42371 = files;
var state_42391__$1 = (function (){var statearr_42393 = state_42391;
(statearr_42393[(7)] = inst_42371);

(statearr_42393[(8)] = inst_42370);

(statearr_42393[(9)] = inst_42369);

return statearr_42393;
})();
var statearr_42394_42410 = state_42391__$1;
(statearr_42394_42410[(2)] = null);

(statearr_42394_42410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (2))){
var inst_42371 = (state_42391[(7)]);
var inst_42374 = (state_42391[(10)]);
var inst_42374__$1 = cljs.core.nth.call(null,inst_42371,(0),null);
var inst_42375 = cljs.core.nthnext.call(null,inst_42371,(1));
var inst_42376 = (inst_42374__$1 == null);
var inst_42377 = cljs.core.not.call(null,inst_42376);
var state_42391__$1 = (function (){var statearr_42395 = state_42391;
(statearr_42395[(11)] = inst_42375);

(statearr_42395[(10)] = inst_42374__$1);

return statearr_42395;
})();
if(inst_42377){
var statearr_42396_42411 = state_42391__$1;
(statearr_42396_42411[(1)] = (4));

} else {
var statearr_42397_42412 = state_42391__$1;
(statearr_42397_42412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (3))){
var inst_42389 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42391__$1,inst_42389);
} else {
if((state_val_42392 === (4))){
var inst_42374 = (state_42391[(10)]);
var inst_42379 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42374);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42391__$1,(7),inst_42379);
} else {
if((state_val_42392 === (5))){
var inst_42385 = cljs.core.async.close_BANG_.call(null,out);
var state_42391__$1 = state_42391;
var statearr_42398_42413 = state_42391__$1;
(statearr_42398_42413[(2)] = inst_42385);

(statearr_42398_42413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (6))){
var inst_42387 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
var statearr_42399_42414 = state_42391__$1;
(statearr_42399_42414[(2)] = inst_42387);

(statearr_42399_42414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (7))){
var inst_42375 = (state_42391[(11)]);
var inst_42381 = (state_42391[(2)]);
var inst_42382 = cljs.core.async.put_BANG_.call(null,out,inst_42381);
var inst_42371 = inst_42375;
var state_42391__$1 = (function (){var statearr_42400 = state_42391;
(statearr_42400[(7)] = inst_42371);

(statearr_42400[(12)] = inst_42382);

return statearr_42400;
})();
var statearr_42401_42415 = state_42391__$1;
(statearr_42401_42415[(2)] = null);

(statearr_42401_42415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27278__auto___42409,out))
;
return ((function (switch__27213__auto__,c__27278__auto___42409,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____0 = (function (){
var statearr_42405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42405[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__);

(statearr_42405[(1)] = (1));

return statearr_42405;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____1 = (function (state_42391){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_42391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e42406){if((e42406 instanceof Object)){
var ex__27217__auto__ = e42406;
var statearr_42407_42416 = state_42391;
(statearr_42407_42416[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42417 = state_42391;
state_42391 = G__42417;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__ = function(state_42391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____1.call(this,state_42391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___42409,out))
})();
var state__27280__auto__ = (function (){var statearr_42408 = f__27279__auto__.call(null);
(statearr_42408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___42409);

return statearr_42408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___42409,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__42418,p__42419){
var map__42424 = p__42418;
var map__42424__$1 = ((((!((map__42424 == null)))?((((map__42424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42424):map__42424);
var opts = map__42424__$1;
var url_rewriter = cljs.core.get.call(null,map__42424__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__42425 = p__42419;
var map__42425__$1 = ((((!((map__42425 == null)))?((((map__42425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42425):map__42425);
var file_msg = map__42425__$1;
var file = cljs.core.get.call(null,map__42425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42428){
var map__42432 = p__42428;
var map__42432__$1 = ((((!((map__42432 == null)))?((((map__42432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42432):map__42432);
var eval_body__$1 = cljs.core.get.call(null,map__42432__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18872__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18872__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18872__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e42434){var e = e42434;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42439,p__42440){
var map__42667 = p__42439;
var map__42667__$1 = ((((!((map__42667 == null)))?((((map__42667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42667):map__42667);
var opts = map__42667__$1;
var before_jsload = cljs.core.get.call(null,map__42667__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42667__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__42667__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__42668 = p__42440;
var map__42668__$1 = ((((!((map__42668 == null)))?((((map__42668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42668):map__42668);
var msg = map__42668__$1;
var files = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (state_42808){
var state_val_42809 = (state_42808[(1)]);
if((state_val_42809 === (7))){
var inst_42684 = (state_42808[(7)]);
var inst_42681 = (state_42808[(8)]);
var inst_42682 = (state_42808[(9)]);
var inst_42683 = (state_42808[(10)]);
var inst_42689 = cljs.core._nth.call(null,inst_42682,inst_42684);
var inst_42690 = figwheel.client.file_reloading.eval_body.call(null,inst_42689);
var inst_42691 = (inst_42684 + (1));
var tmp42810 = inst_42681;
var tmp42811 = inst_42682;
var tmp42812 = inst_42683;
var inst_42681__$1 = tmp42810;
var inst_42682__$1 = tmp42811;
var inst_42683__$1 = tmp42812;
var inst_42684__$1 = inst_42691;
var state_42808__$1 = (function (){var statearr_42813 = state_42808;
(statearr_42813[(7)] = inst_42684__$1);

(statearr_42813[(8)] = inst_42681__$1);

(statearr_42813[(11)] = inst_42690);

(statearr_42813[(9)] = inst_42682__$1);

(statearr_42813[(10)] = inst_42683__$1);

return statearr_42813;
})();
var statearr_42814_42893 = state_42808__$1;
(statearr_42814_42893[(2)] = null);

(statearr_42814_42893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (20))){
var inst_42730 = (state_42808[(12)]);
var inst_42726 = (state_42808[(13)]);
var inst_42733 = (state_42808[(14)]);
var inst_42731 = (state_42808[(15)]);
var inst_42727 = (state_42808[(16)]);
var inst_42736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42738 = (function (){var all_files = inst_42726;
var files_SINGLEQUOTE_ = inst_42727;
var res_SINGLEQUOTE_ = inst_42730;
var res = inst_42731;
var files_not_loaded = inst_42733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42733,inst_42731,inst_42727,inst_42736,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p__42737){
var map__42815 = p__42737;
var map__42815__$1 = ((((!((map__42815 == null)))?((((map__42815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42815):map__42815);
var namespace = cljs.core.get.call(null,map__42815__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42733,inst_42731,inst_42727,inst_42736,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42739 = cljs.core.map.call(null,inst_42738,inst_42731);
var inst_42740 = cljs.core.pr_str.call(null,inst_42739);
var inst_42741 = figwheel.client.utils.log.call(null,inst_42740);
var inst_42742 = (function (){var all_files = inst_42726;
var files_SINGLEQUOTE_ = inst_42727;
var res_SINGLEQUOTE_ = inst_42730;
var res = inst_42731;
var files_not_loaded = inst_42733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42733,inst_42731,inst_42727,inst_42736,inst_42738,inst_42739,inst_42740,inst_42741,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42733,inst_42731,inst_42727,inst_42736,inst_42738,inst_42739,inst_42740,inst_42741,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42743 = setTimeout(inst_42742,(10));
var state_42808__$1 = (function (){var statearr_42817 = state_42808;
(statearr_42817[(17)] = inst_42736);

(statearr_42817[(18)] = inst_42741);

return statearr_42817;
})();
var statearr_42818_42894 = state_42808__$1;
(statearr_42818_42894[(2)] = inst_42743);

(statearr_42818_42894[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (27))){
var state_42808__$1 = state_42808;
var statearr_42819_42895 = state_42808__$1;
(statearr_42819_42895[(2)] = false);

(statearr_42819_42895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (1))){
var inst_42673 = (state_42808[(19)]);
var inst_42671 = before_jsload.call(null,files);
var inst_42672 = (function (){return ((function (inst_42673,inst_42671,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p1__42435_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42435_SHARP_);
});
;})(inst_42673,inst_42671,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42673__$1 = cljs.core.filter.call(null,inst_42672,files);
var inst_42674 = cljs.core.not_empty.call(null,inst_42673__$1);
var state_42808__$1 = (function (){var statearr_42820 = state_42808;
(statearr_42820[(20)] = inst_42671);

(statearr_42820[(19)] = inst_42673__$1);

return statearr_42820;
})();
if(cljs.core.truth_(inst_42674)){
var statearr_42821_42896 = state_42808__$1;
(statearr_42821_42896[(1)] = (2));

} else {
var statearr_42822_42897 = state_42808__$1;
(statearr_42822_42897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (24))){
var state_42808__$1 = state_42808;
var statearr_42823_42898 = state_42808__$1;
(statearr_42823_42898[(2)] = null);

(statearr_42823_42898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (39))){
var state_42808__$1 = state_42808;
var statearr_42824_42899 = state_42808__$1;
(statearr_42824_42899[(2)] = null);

(statearr_42824_42899[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (4))){
var inst_42718 = (state_42808[(2)]);
var inst_42719 = (function (){return ((function (inst_42718,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p1__42436_SHARP_){
var and__18872__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42436_SHARP_);
if(cljs.core.truth_(and__18872__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42436_SHARP_));
} else {
return and__18872__auto__;
}
});
;})(inst_42718,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42720 = cljs.core.filter.call(null,inst_42719,files);
var state_42808__$1 = (function (){var statearr_42825 = state_42808;
(statearr_42825[(21)] = inst_42720);

(statearr_42825[(22)] = inst_42718);

return statearr_42825;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_42826_42900 = state_42808__$1;
(statearr_42826_42900[(1)] = (16));

} else {
var statearr_42827_42901 = state_42808__$1;
(statearr_42827_42901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (15))){
var inst_42708 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42828_42902 = state_42808__$1;
(statearr_42828_42902[(2)] = inst_42708);

(statearr_42828_42902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (21))){
var state_42808__$1 = state_42808;
var statearr_42829_42903 = state_42808__$1;
(statearr_42829_42903[(2)] = null);

(statearr_42829_42903[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (31))){
var inst_42765 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42830_42904 = state_42808__$1;
(statearr_42830_42904[(2)] = inst_42765);

(statearr_42830_42904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (32))){
var inst_42753 = (state_42808[(23)]);
var inst_42770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42753);
var state_42808__$1 = state_42808;
var statearr_42831_42905 = state_42808__$1;
(statearr_42831_42905[(2)] = inst_42770);

(statearr_42831_42905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (40))){
var inst_42776 = (state_42808[(24)]);
var inst_42794 = (state_42808[(2)]);
var inst_42795 = cljs.core.not_empty.call(null,inst_42776);
var state_42808__$1 = (function (){var statearr_42832 = state_42808;
(statearr_42832[(25)] = inst_42794);

return statearr_42832;
})();
if(cljs.core.truth_(inst_42795)){
var statearr_42833_42906 = state_42808__$1;
(statearr_42833_42906[(1)] = (41));

} else {
var statearr_42834_42907 = state_42808__$1;
(statearr_42834_42907[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (33))){
var inst_42753 = (state_42808[(23)]);
var state_42808__$1 = state_42808;
var statearr_42835_42908 = state_42808__$1;
(statearr_42835_42908[(2)] = inst_42753);

(statearr_42835_42908[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (13))){
var inst_42694 = (state_42808[(26)]);
var inst_42698 = cljs.core.chunk_first.call(null,inst_42694);
var inst_42699 = cljs.core.chunk_rest.call(null,inst_42694);
var inst_42700 = cljs.core.count.call(null,inst_42698);
var inst_42681 = inst_42699;
var inst_42682 = inst_42698;
var inst_42683 = inst_42700;
var inst_42684 = (0);
var state_42808__$1 = (function (){var statearr_42836 = state_42808;
(statearr_42836[(7)] = inst_42684);

(statearr_42836[(8)] = inst_42681);

(statearr_42836[(9)] = inst_42682);

(statearr_42836[(10)] = inst_42683);

return statearr_42836;
})();
var statearr_42837_42909 = state_42808__$1;
(statearr_42837_42909[(2)] = null);

(statearr_42837_42909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (22))){
var inst_42733 = (state_42808[(14)]);
var inst_42746 = (state_42808[(2)]);
var inst_42747 = cljs.core.not_empty.call(null,inst_42733);
var state_42808__$1 = (function (){var statearr_42838 = state_42808;
(statearr_42838[(27)] = inst_42746);

return statearr_42838;
})();
if(cljs.core.truth_(inst_42747)){
var statearr_42839_42910 = state_42808__$1;
(statearr_42839_42910[(1)] = (23));

} else {
var statearr_42840_42911 = state_42808__$1;
(statearr_42840_42911[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (36))){
var state_42808__$1 = state_42808;
var statearr_42841_42912 = state_42808__$1;
(statearr_42841_42912[(2)] = null);

(statearr_42841_42912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (41))){
var inst_42776 = (state_42808[(24)]);
var inst_42797 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42776);
var inst_42798 = cljs.core.pr_str.call(null,inst_42797);
var inst_42799 = [cljs.core.str("not required: "),cljs.core.str(inst_42798)].join('');
var inst_42800 = figwheel.client.utils.log.call(null,inst_42799);
var state_42808__$1 = state_42808;
var statearr_42842_42913 = state_42808__$1;
(statearr_42842_42913[(2)] = inst_42800);

(statearr_42842_42913[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (43))){
var inst_42803 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42843_42914 = state_42808__$1;
(statearr_42843_42914[(2)] = inst_42803);

(statearr_42843_42914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (29))){
var state_42808__$1 = state_42808;
var statearr_42844_42915 = state_42808__$1;
(statearr_42844_42915[(2)] = true);

(statearr_42844_42915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (6))){
var inst_42715 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42845_42916 = state_42808__$1;
(statearr_42845_42916[(2)] = inst_42715);

(statearr_42845_42916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (28))){
var inst_42768 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
if(cljs.core.truth_(inst_42768)){
var statearr_42846_42917 = state_42808__$1;
(statearr_42846_42917[(1)] = (32));

} else {
var statearr_42847_42918 = state_42808__$1;
(statearr_42847_42918[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (25))){
var inst_42806 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42808__$1,inst_42806);
} else {
if((state_val_42809 === (34))){
var inst_42774 = (state_42808[(28)]);
var inst_42773 = (state_42808[(2)]);
var inst_42774__$1 = cljs.core.get.call(null,inst_42773,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42775 = cljs.core.get.call(null,inst_42773,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_42776 = cljs.core.get.call(null,inst_42773,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42777 = cljs.core.not_empty.call(null,inst_42774__$1);
var state_42808__$1 = (function (){var statearr_42848 = state_42808;
(statearr_42848[(24)] = inst_42776);

(statearr_42848[(28)] = inst_42774__$1);

(statearr_42848[(29)] = inst_42775);

return statearr_42848;
})();
if(cljs.core.truth_(inst_42777)){
var statearr_42849_42919 = state_42808__$1;
(statearr_42849_42919[(1)] = (35));

} else {
var statearr_42850_42920 = state_42808__$1;
(statearr_42850_42920[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (17))){
var inst_42720 = (state_42808[(21)]);
var state_42808__$1 = state_42808;
var statearr_42851_42921 = state_42808__$1;
(statearr_42851_42921[(2)] = inst_42720);

(statearr_42851_42921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (3))){
var state_42808__$1 = state_42808;
var statearr_42852_42922 = state_42808__$1;
(statearr_42852_42922[(2)] = null);

(statearr_42852_42922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (12))){
var inst_42711 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42853_42923 = state_42808__$1;
(statearr_42853_42923[(2)] = inst_42711);

(statearr_42853_42923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (2))){
var inst_42673 = (state_42808[(19)]);
var inst_42680 = cljs.core.seq.call(null,inst_42673);
var inst_42681 = inst_42680;
var inst_42682 = null;
var inst_42683 = (0);
var inst_42684 = (0);
var state_42808__$1 = (function (){var statearr_42854 = state_42808;
(statearr_42854[(7)] = inst_42684);

(statearr_42854[(8)] = inst_42681);

(statearr_42854[(9)] = inst_42682);

(statearr_42854[(10)] = inst_42683);

return statearr_42854;
})();
var statearr_42855_42924 = state_42808__$1;
(statearr_42855_42924[(2)] = null);

(statearr_42855_42924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (23))){
var inst_42730 = (state_42808[(12)]);
var inst_42726 = (state_42808[(13)]);
var inst_42753 = (state_42808[(23)]);
var inst_42733 = (state_42808[(14)]);
var inst_42731 = (state_42808[(15)]);
var inst_42727 = (state_42808[(16)]);
var inst_42749 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42752 = (function (){var all_files = inst_42726;
var files_SINGLEQUOTE_ = inst_42727;
var res_SINGLEQUOTE_ = inst_42730;
var res = inst_42731;
var files_not_loaded = inst_42733;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42753,inst_42733,inst_42731,inst_42727,inst_42749,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p__42751){
var map__42856 = p__42751;
var map__42856__$1 = ((((!((map__42856 == null)))?((((map__42856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42856):map__42856);
var meta_data = cljs.core.get.call(null,map__42856__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42730,inst_42726,inst_42753,inst_42733,inst_42731,inst_42727,inst_42749,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42753__$1 = cljs.core.group_by.call(null,inst_42752,inst_42733);
var inst_42755 = (inst_42753__$1 == null);
var inst_42756 = cljs.core.not.call(null,inst_42755);
var state_42808__$1 = (function (){var statearr_42858 = state_42808;
(statearr_42858[(30)] = inst_42749);

(statearr_42858[(23)] = inst_42753__$1);

return statearr_42858;
})();
if(inst_42756){
var statearr_42859_42925 = state_42808__$1;
(statearr_42859_42925[(1)] = (26));

} else {
var statearr_42860_42926 = state_42808__$1;
(statearr_42860_42926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (35))){
var inst_42774 = (state_42808[(28)]);
var inst_42779 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42774);
var inst_42780 = cljs.core.pr_str.call(null,inst_42779);
var inst_42781 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42780)].join('');
var inst_42782 = figwheel.client.utils.log.call(null,inst_42781);
var state_42808__$1 = state_42808;
var statearr_42861_42927 = state_42808__$1;
(statearr_42861_42927[(2)] = inst_42782);

(statearr_42861_42927[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (19))){
var inst_42730 = (state_42808[(12)]);
var inst_42726 = (state_42808[(13)]);
var inst_42731 = (state_42808[(15)]);
var inst_42727 = (state_42808[(16)]);
var inst_42730__$1 = (state_42808[(2)]);
var inst_42731__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42730__$1);
var inst_42732 = (function (){var all_files = inst_42726;
var files_SINGLEQUOTE_ = inst_42727;
var res_SINGLEQUOTE_ = inst_42730__$1;
var res = inst_42731__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_42730,inst_42726,inst_42731,inst_42727,inst_42730__$1,inst_42731__$1,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p1__42438_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42438_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_42730,inst_42726,inst_42731,inst_42727,inst_42730__$1,inst_42731__$1,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42733 = cljs.core.filter.call(null,inst_42732,inst_42730__$1);
var inst_42734 = cljs.core.not_empty.call(null,inst_42731__$1);
var state_42808__$1 = (function (){var statearr_42862 = state_42808;
(statearr_42862[(12)] = inst_42730__$1);

(statearr_42862[(14)] = inst_42733);

(statearr_42862[(15)] = inst_42731__$1);

return statearr_42862;
})();
if(cljs.core.truth_(inst_42734)){
var statearr_42863_42928 = state_42808__$1;
(statearr_42863_42928[(1)] = (20));

} else {
var statearr_42864_42929 = state_42808__$1;
(statearr_42864_42929[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (11))){
var state_42808__$1 = state_42808;
var statearr_42865_42930 = state_42808__$1;
(statearr_42865_42930[(2)] = null);

(statearr_42865_42930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (9))){
var inst_42713 = (state_42808[(2)]);
var state_42808__$1 = state_42808;
var statearr_42866_42931 = state_42808__$1;
(statearr_42866_42931[(2)] = inst_42713);

(statearr_42866_42931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (5))){
var inst_42684 = (state_42808[(7)]);
var inst_42683 = (state_42808[(10)]);
var inst_42686 = (inst_42684 < inst_42683);
var inst_42687 = inst_42686;
var state_42808__$1 = state_42808;
if(cljs.core.truth_(inst_42687)){
var statearr_42867_42932 = state_42808__$1;
(statearr_42867_42932[(1)] = (7));

} else {
var statearr_42868_42933 = state_42808__$1;
(statearr_42868_42933[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (14))){
var inst_42694 = (state_42808[(26)]);
var inst_42703 = cljs.core.first.call(null,inst_42694);
var inst_42704 = figwheel.client.file_reloading.eval_body.call(null,inst_42703);
var inst_42705 = cljs.core.next.call(null,inst_42694);
var inst_42681 = inst_42705;
var inst_42682 = null;
var inst_42683 = (0);
var inst_42684 = (0);
var state_42808__$1 = (function (){var statearr_42869 = state_42808;
(statearr_42869[(31)] = inst_42704);

(statearr_42869[(7)] = inst_42684);

(statearr_42869[(8)] = inst_42681);

(statearr_42869[(9)] = inst_42682);

(statearr_42869[(10)] = inst_42683);

return statearr_42869;
})();
var statearr_42870_42934 = state_42808__$1;
(statearr_42870_42934[(2)] = null);

(statearr_42870_42934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (26))){
var inst_42753 = (state_42808[(23)]);
var inst_42758 = inst_42753.cljs$lang$protocol_mask$partition0$;
var inst_42759 = (inst_42758 & (64));
var inst_42760 = inst_42753.cljs$core$ISeq$;
var inst_42761 = (inst_42759) || (inst_42760);
var state_42808__$1 = state_42808;
if(cljs.core.truth_(inst_42761)){
var statearr_42871_42935 = state_42808__$1;
(statearr_42871_42935[(1)] = (29));

} else {
var statearr_42872_42936 = state_42808__$1;
(statearr_42872_42936[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (16))){
var inst_42720 = (state_42808[(21)]);
var inst_42722 = (function (){var all_files = inst_42720;
return ((function (all_files,inst_42720,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function (p1__42437_SHARP_){
return cljs.core.update_in.call(null,p1__42437_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_42720,state_val_42809,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var inst_42723 = cljs.core.map.call(null,inst_42722,inst_42720);
var state_42808__$1 = state_42808;
var statearr_42873_42937 = state_42808__$1;
(statearr_42873_42937[(2)] = inst_42723);

(statearr_42873_42937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (38))){
var inst_42775 = (state_42808[(29)]);
var inst_42788 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42775);
var inst_42789 = cljs.core.pr_str.call(null,inst_42788);
var inst_42790 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_42789)].join('');
var inst_42791 = figwheel.client.utils.log.call(null,inst_42790);
var state_42808__$1 = state_42808;
var statearr_42874_42938 = state_42808__$1;
(statearr_42874_42938[(2)] = inst_42791);

(statearr_42874_42938[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (30))){
var state_42808__$1 = state_42808;
var statearr_42875_42939 = state_42808__$1;
(statearr_42875_42939[(2)] = false);

(statearr_42875_42939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (10))){
var inst_42694 = (state_42808[(26)]);
var inst_42696 = cljs.core.chunked_seq_QMARK_.call(null,inst_42694);
var state_42808__$1 = state_42808;
if(inst_42696){
var statearr_42876_42940 = state_42808__$1;
(statearr_42876_42940[(1)] = (13));

} else {
var statearr_42877_42941 = state_42808__$1;
(statearr_42877_42941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (18))){
var inst_42726 = (state_42808[(13)]);
var inst_42727 = (state_42808[(16)]);
var inst_42726__$1 = (state_42808[(2)]);
var inst_42727__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_42726__$1);
var inst_42728 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42727__$1);
var state_42808__$1 = (function (){var statearr_42878 = state_42808;
(statearr_42878[(13)] = inst_42726__$1);

(statearr_42878[(16)] = inst_42727__$1);

return statearr_42878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42808__$1,(19),inst_42728);
} else {
if((state_val_42809 === (42))){
var state_42808__$1 = state_42808;
var statearr_42879_42942 = state_42808__$1;
(statearr_42879_42942[(2)] = null);

(statearr_42879_42942[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (37))){
var inst_42775 = (state_42808[(29)]);
var inst_42785 = (state_42808[(2)]);
var inst_42786 = cljs.core.not_empty.call(null,inst_42775);
var state_42808__$1 = (function (){var statearr_42880 = state_42808;
(statearr_42880[(32)] = inst_42785);

return statearr_42880;
})();
if(cljs.core.truth_(inst_42786)){
var statearr_42881_42943 = state_42808__$1;
(statearr_42881_42943[(1)] = (38));

} else {
var statearr_42882_42944 = state_42808__$1;
(statearr_42882_42944[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42809 === (8))){
var inst_42681 = (state_42808[(8)]);
var inst_42694 = (state_42808[(26)]);
var inst_42694__$1 = cljs.core.seq.call(null,inst_42681);
var state_42808__$1 = (function (){var statearr_42883 = state_42808;
(statearr_42883[(26)] = inst_42694__$1);

return statearr_42883;
})();
if(inst_42694__$1){
var statearr_42884_42945 = state_42808__$1;
(statearr_42884_42945[(1)] = (10));

} else {
var statearr_42885_42946 = state_42808__$1;
(statearr_42885_42946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
;
return ((function (switch__27213__auto__,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____0 = (function (){
var statearr_42889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42889[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__);

(statearr_42889[(1)] = (1));

return statearr_42889;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____1 = (function (state_42808){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_42808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e42890){if((e42890 instanceof Object)){
var ex__27217__auto__ = e42890;
var statearr_42891_42947 = state_42808;
(statearr_42891_42947[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42948 = state_42808;
state_42808 = G__42948;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__ = function(state_42808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____1.call(this,state_42808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
})();
var state__27280__auto__ = (function (){var statearr_42892 = f__27279__auto__.call(null);
(statearr_42892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_42892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__,map__42667,map__42667__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42668,map__42668__$1,msg,files))
);

return c__27278__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42951,link){
var map__42954 = p__42951;
var map__42954__$1 = ((((!((map__42954 == null)))?((((map__42954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42954):map__42954);
var file = cljs.core.get.call(null,map__42954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__42954,map__42954__$1,file){
return (function (p1__42949_SHARP_,p2__42950_SHARP_){
if(cljs.core._EQ_.call(null,p1__42949_SHARP_,p2__42950_SHARP_)){
return p1__42949_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__42954,map__42954__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42960){
var map__42961 = p__42960;
var map__42961__$1 = ((((!((map__42961 == null)))?((((map__42961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42961):map__42961);
var match_length = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42961__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42956_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42956_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args42963 = [];
var len__19923__auto___42966 = arguments.length;
var i__19924__auto___42967 = (0);
while(true){
if((i__19924__auto___42967 < len__19923__auto___42966)){
args42963.push((arguments[i__19924__auto___42967]));

var G__42968 = (i__19924__auto___42967 + (1));
i__19924__auto___42967 = G__42968;
continue;
} else {
}
break;
}

var G__42965 = args42963.length;
switch (G__42965) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42963.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42970){
var map__42973 = p__42970;
var map__42973__$1 = ((((!((map__42973 == null)))?((((map__42973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42973):map__42973);
var f_data = map__42973__$1;
var file = cljs.core.get.call(null,map__42973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__42973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18884__auto__ = request_url;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42975,files_msg){
var map__42998 = p__42975;
var map__42998__$1 = ((((!((map__42998 == null)))?((((map__42998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42998):map__42998);
var opts = map__42998__$1;
var on_cssload = cljs.core.get.call(null,map__42998__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43000_43020 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43001_43021 = null;
var count__43002_43022 = (0);
var i__43003_43023 = (0);
while(true){
if((i__43003_43023 < count__43002_43022)){
var f_43024 = cljs.core._nth.call(null,chunk__43001_43021,i__43003_43023);
figwheel.client.file_reloading.reload_css_file.call(null,f_43024);

var G__43025 = seq__43000_43020;
var G__43026 = chunk__43001_43021;
var G__43027 = count__43002_43022;
var G__43028 = (i__43003_43023 + (1));
seq__43000_43020 = G__43025;
chunk__43001_43021 = G__43026;
count__43002_43022 = G__43027;
i__43003_43023 = G__43028;
continue;
} else {
var temp__4425__auto___43029 = cljs.core.seq.call(null,seq__43000_43020);
if(temp__4425__auto___43029){
var seq__43000_43030__$1 = temp__4425__auto___43029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43000_43030__$1)){
var c__19668__auto___43031 = cljs.core.chunk_first.call(null,seq__43000_43030__$1);
var G__43032 = cljs.core.chunk_rest.call(null,seq__43000_43030__$1);
var G__43033 = c__19668__auto___43031;
var G__43034 = cljs.core.count.call(null,c__19668__auto___43031);
var G__43035 = (0);
seq__43000_43020 = G__43032;
chunk__43001_43021 = G__43033;
count__43002_43022 = G__43034;
i__43003_43023 = G__43035;
continue;
} else {
var f_43036 = cljs.core.first.call(null,seq__43000_43030__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43036);

var G__43037 = cljs.core.next.call(null,seq__43000_43030__$1);
var G__43038 = null;
var G__43039 = (0);
var G__43040 = (0);
seq__43000_43020 = G__43037;
chunk__43001_43021 = G__43038;
count__43002_43022 = G__43039;
i__43003_43023 = G__43040;
continue;
}
} else {
}
}
break;
}

var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload){
return (function (state_43010){
var state_val_43011 = (state_43010[(1)]);
if((state_val_43011 === (1))){
var inst_43004 = cljs.core.async.timeout.call(null,(100));
var state_43010__$1 = state_43010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43010__$1,(2),inst_43004);
} else {
if((state_val_43011 === (2))){
var inst_43006 = (state_43010[(2)]);
var inst_43007 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_43008 = on_cssload.call(null,inst_43007);
var state_43010__$1 = (function (){var statearr_43012 = state_43010;
(statearr_43012[(7)] = inst_43006);

return statearr_43012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43010__$1,inst_43008);
} else {
return null;
}
}
});})(c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload))
;
return ((function (switch__27213__auto__,c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____0 = (function (){
var statearr_43016 = [null,null,null,null,null,null,null,null];
(statearr_43016[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__);

(statearr_43016[(1)] = (1));

return statearr_43016;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____1 = (function (state_43010){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_43010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e43017){if((e43017 instanceof Object)){
var ex__27217__auto__ = e43017;
var statearr_43018_43041 = state_43010;
(statearr_43018_43041[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43042 = state_43010;
state_43010 = G__43042;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__ = function(state_43010){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____1.call(this,state_43010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload))
})();
var state__27280__auto__ = (function (){var statearr_43019 = f__27279__auto__.call(null);
(statearr_43019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_43019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__,map__42998,map__42998__$1,opts,on_cssload))
);

return c__27278__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1445816823374