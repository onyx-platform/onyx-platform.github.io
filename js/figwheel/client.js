// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41290__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41291__i = 0, G__41291__a = new Array(arguments.length -  0);
while (G__41291__i < G__41291__a.length) {G__41291__a[G__41291__i] = arguments[G__41291__i + 0]; ++G__41291__i;}
  args = new cljs.core.IndexedSeq(G__41291__a,0);
} 
return G__41290__delegate.call(this,args);};
G__41290.cljs$lang$maxFixedArity = 0;
G__41290.cljs$lang$applyTo = (function (arglist__41292){
var args = cljs.core.seq(arglist__41292);
return G__41290__delegate(args);
});
G__41290.cljs$core$IFn$_invoke$arity$variadic = G__41290__delegate;
return G__41290;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41293){
var map__41296 = p__41293;
var map__41296__$1 = ((((!((map__41296 == null)))?((((map__41296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41296):map__41296);
var message = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18884__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18872__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18872__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18872__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27278__auto___41426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___41426,ch){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___41426,ch){
return (function (state_41400){
var state_val_41401 = (state_41400[(1)]);
if((state_val_41401 === (7))){
var inst_41396 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41402_41427 = state_41400__$1;
(statearr_41402_41427[(2)] = inst_41396);

(statearr_41402_41427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (1))){
var state_41400__$1 = state_41400;
var statearr_41403_41428 = state_41400__$1;
(statearr_41403_41428[(2)] = null);

(statearr_41403_41428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (4))){
var inst_41364 = (state_41400[(7)]);
var inst_41364__$1 = (state_41400[(2)]);
var state_41400__$1 = (function (){var statearr_41404 = state_41400;
(statearr_41404[(7)] = inst_41364__$1);

return statearr_41404;
})();
if(cljs.core.truth_(inst_41364__$1)){
var statearr_41405_41429 = state_41400__$1;
(statearr_41405_41429[(1)] = (5));

} else {
var statearr_41406_41430 = state_41400__$1;
(statearr_41406_41430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (13))){
var state_41400__$1 = state_41400;
var statearr_41407_41431 = state_41400__$1;
(statearr_41407_41431[(2)] = null);

(statearr_41407_41431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (6))){
var state_41400__$1 = state_41400;
var statearr_41408_41432 = state_41400__$1;
(statearr_41408_41432[(2)] = null);

(statearr_41408_41432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (3))){
var inst_41398 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41400__$1,inst_41398);
} else {
if((state_val_41401 === (12))){
var inst_41371 = (state_41400[(8)]);
var inst_41384 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41371);
var inst_41385 = cljs.core.first.call(null,inst_41384);
var inst_41386 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41385);
var inst_41387 = console.warn("Figwheel: Not loading code with warnings - ",inst_41386);
var state_41400__$1 = state_41400;
var statearr_41409_41433 = state_41400__$1;
(statearr_41409_41433[(2)] = inst_41387);

(statearr_41409_41433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (2))){
var state_41400__$1 = state_41400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41400__$1,(4),ch);
} else {
if((state_val_41401 === (11))){
var inst_41380 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41410_41434 = state_41400__$1;
(statearr_41410_41434[(2)] = inst_41380);

(statearr_41410_41434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (9))){
var inst_41370 = (state_41400[(9)]);
var inst_41382 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41370,opts);
var state_41400__$1 = state_41400;
if(cljs.core.truth_(inst_41382)){
var statearr_41411_41435 = state_41400__$1;
(statearr_41411_41435[(1)] = (12));

} else {
var statearr_41412_41436 = state_41400__$1;
(statearr_41412_41436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (5))){
var inst_41370 = (state_41400[(9)]);
var inst_41364 = (state_41400[(7)]);
var inst_41366 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41367 = (new cljs.core.PersistentArrayMap(null,2,inst_41366,null));
var inst_41368 = (new cljs.core.PersistentHashSet(null,inst_41367,null));
var inst_41369 = figwheel.client.focus_msgs.call(null,inst_41368,inst_41364);
var inst_41370__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41369);
var inst_41371 = cljs.core.first.call(null,inst_41369);
var inst_41372 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41370__$1,opts);
var state_41400__$1 = (function (){var statearr_41413 = state_41400;
(statearr_41413[(8)] = inst_41371);

(statearr_41413[(9)] = inst_41370__$1);

return statearr_41413;
})();
if(cljs.core.truth_(inst_41372)){
var statearr_41414_41437 = state_41400__$1;
(statearr_41414_41437[(1)] = (8));

} else {
var statearr_41415_41438 = state_41400__$1;
(statearr_41415_41438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (14))){
var inst_41390 = (state_41400[(2)]);
var state_41400__$1 = state_41400;
var statearr_41416_41439 = state_41400__$1;
(statearr_41416_41439[(2)] = inst_41390);

(statearr_41416_41439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (10))){
var inst_41392 = (state_41400[(2)]);
var state_41400__$1 = (function (){var statearr_41417 = state_41400;
(statearr_41417[(10)] = inst_41392);

return statearr_41417;
})();
var statearr_41418_41440 = state_41400__$1;
(statearr_41418_41440[(2)] = null);

(statearr_41418_41440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41401 === (8))){
var inst_41371 = (state_41400[(8)]);
var inst_41374 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41375 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41371);
var inst_41376 = cljs.core.async.timeout.call(null,(1000));
var inst_41377 = [inst_41375,inst_41376];
var inst_41378 = (new cljs.core.PersistentVector(null,2,(5),inst_41374,inst_41377,null));
var state_41400__$1 = state_41400;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41400__$1,(11),inst_41378);
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
});})(c__27278__auto___41426,ch))
;
return ((function (switch__27213__auto__,c__27278__auto___41426,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____0 = (function (){
var statearr_41422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41422[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__);

(statearr_41422[(1)] = (1));

return statearr_41422;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____1 = (function (state_41400){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_41400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41423){if((e41423 instanceof Object)){
var ex__27217__auto__ = e41423;
var statearr_41424_41441 = state_41400;
(statearr_41424_41441[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41442 = state_41400;
state_41400 = G__41442;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__ = function(state_41400){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____1.call(this,state_41400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27214__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___41426,ch))
})();
var state__27280__auto__ = (function (){var statearr_41425 = f__27279__auto__.call(null);
(statearr_41425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___41426);

return statearr_41425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___41426,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41443_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41443_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_41452 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__41445_SHARP_,p2__41444_SHARP_){
return [cljs.core.str(p2__41444_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41452){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_41450 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41451 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41450,_STAR_print_newline_STAR_41451,base_path_41452){
return (function() { 
var G__41453__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41454__i = 0, G__41454__a = new Array(arguments.length -  0);
while (G__41454__i < G__41454__a.length) {G__41454__a[G__41454__i] = arguments[G__41454__i + 0]; ++G__41454__i;}
  args = new cljs.core.IndexedSeq(G__41454__a,0);
} 
return G__41453__delegate.call(this,args);};
G__41453.cljs$lang$maxFixedArity = 0;
G__41453.cljs$lang$applyTo = (function (arglist__41455){
var args = cljs.core.seq(arglist__41455);
return G__41453__delegate(args);
});
G__41453.cljs$core$IFn$_invoke$arity$variadic = G__41453__delegate;
return G__41453;
})()
;})(_STAR_print_fn_STAR_41450,_STAR_print_newline_STAR_41451,base_path_41452))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41451;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41450;
}}catch (e41449){if((e41449 instanceof Error)){
var e = e41449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41452], null));
} else {
var e = e41449;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41452))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41456){
var map__41463 = p__41456;
var map__41463__$1 = ((((!((map__41463 == null)))?((((map__41463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41463):map__41463);
var opts = map__41463__$1;
var build_id = cljs.core.get.call(null,map__41463__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41463,map__41463__$1,opts,build_id){
return (function (p__41465){
var vec__41466 = p__41465;
var map__41467 = cljs.core.nth.call(null,vec__41466,(0),null);
var map__41467__$1 = ((((!((map__41467 == null)))?((((map__41467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41467):map__41467);
var msg = map__41467__$1;
var msg_name = cljs.core.get.call(null,map__41467__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41466,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__41466,map__41467,map__41467__$1,msg,msg_name,_,map__41463,map__41463__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41466,map__41467,map__41467__$1,msg,msg_name,_,map__41463,map__41463__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41463,map__41463__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41473){
var vec__41474 = p__41473;
var map__41475 = cljs.core.nth.call(null,vec__41474,(0),null);
var map__41475__$1 = ((((!((map__41475 == null)))?((((map__41475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41475):map__41475);
var msg = map__41475__$1;
var msg_name = cljs.core.get.call(null,map__41475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41474,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41477){
var map__41487 = p__41477;
var map__41487__$1 = ((((!((map__41487 == null)))?((((map__41487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41487):map__41487);
var on_compile_warning = cljs.core.get.call(null,map__41487__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41487__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41487,map__41487__$1,on_compile_warning,on_compile_fail){
return (function (p__41489){
var vec__41490 = p__41489;
var map__41491 = cljs.core.nth.call(null,vec__41490,(0),null);
var map__41491__$1 = ((((!((map__41491 == null)))?((((map__41491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41491):map__41491);
var msg = map__41491__$1;
var msg_name = cljs.core.get.call(null,map__41491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41490,(1));
var pred__41493 = cljs.core._EQ_;
var expr__41494 = msg_name;
if(cljs.core.truth_(pred__41493.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41494))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41493.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41494))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41487,map__41487__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__,msg_hist,msg_names,msg){
return (function (state_41691){
var state_val_41692 = (state_41691[(1)]);
if((state_val_41692 === (7))){
var inst_41627 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41693_41734 = state_41691__$1;
(statearr_41693_41734[(2)] = inst_41627);

(statearr_41693_41734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (20))){
var inst_41653 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41653)){
var statearr_41694_41735 = state_41691__$1;
(statearr_41694_41735[(1)] = (22));

} else {
var statearr_41695_41736 = state_41691__$1;
(statearr_41695_41736[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (27))){
var inst_41665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41666 = figwheel.client.heads_up.display_warning.call(null,inst_41665);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(30),inst_41666);
} else {
if((state_val_41692 === (1))){
var inst_41615 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41615)){
var statearr_41696_41737 = state_41691__$1;
(statearr_41696_41737[(1)] = (2));

} else {
var statearr_41697_41738 = state_41691__$1;
(statearr_41697_41738[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (24))){
var inst_41681 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41698_41739 = state_41691__$1;
(statearr_41698_41739[(2)] = inst_41681);

(statearr_41698_41739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (4))){
var inst_41689 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41691__$1,inst_41689);
} else {
if((state_val_41692 === (15))){
var inst_41642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41643 = figwheel.client.format_messages.call(null,inst_41642);
var inst_41644 = figwheel.client.heads_up.display_error.call(null,inst_41643);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(18),inst_41644);
} else {
if((state_val_41692 === (21))){
var inst_41683 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41699_41740 = state_41691__$1;
(statearr_41699_41740[(2)] = inst_41683);

(statearr_41699_41740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (31))){
var inst_41672 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(34),inst_41672);
} else {
if((state_val_41692 === (32))){
var state_41691__$1 = state_41691;
var statearr_41700_41741 = state_41691__$1;
(statearr_41700_41741[(2)] = null);

(statearr_41700_41741[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (33))){
var inst_41677 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41701_41742 = state_41691__$1;
(statearr_41701_41742[(2)] = inst_41677);

(statearr_41701_41742[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (13))){
var inst_41633 = (state_41691[(2)]);
var inst_41634 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41635 = figwheel.client.format_messages.call(null,inst_41634);
var inst_41636 = figwheel.client.heads_up.display_error.call(null,inst_41635);
var state_41691__$1 = (function (){var statearr_41702 = state_41691;
(statearr_41702[(7)] = inst_41633);

return statearr_41702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(14),inst_41636);
} else {
if((state_val_41692 === (22))){
var inst_41655 = figwheel.client.heads_up.clear.call(null);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(25),inst_41655);
} else {
if((state_val_41692 === (29))){
var inst_41679 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41703_41743 = state_41691__$1;
(statearr_41703_41743[(2)] = inst_41679);

(statearr_41703_41743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (6))){
var inst_41623 = figwheel.client.heads_up.clear.call(null);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(9),inst_41623);
} else {
if((state_val_41692 === (28))){
var inst_41670 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41670)){
var statearr_41704_41744 = state_41691__$1;
(statearr_41704_41744[(1)] = (31));

} else {
var statearr_41705_41745 = state_41691__$1;
(statearr_41705_41745[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (25))){
var inst_41657 = (state_41691[(2)]);
var inst_41658 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41659 = figwheel.client.heads_up.display_warning.call(null,inst_41658);
var state_41691__$1 = (function (){var statearr_41706 = state_41691;
(statearr_41706[(8)] = inst_41657);

return statearr_41706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(26),inst_41659);
} else {
if((state_val_41692 === (34))){
var inst_41674 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41707_41746 = state_41691__$1;
(statearr_41707_41746[(2)] = inst_41674);

(statearr_41707_41746[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (17))){
var inst_41685 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41708_41747 = state_41691__$1;
(statearr_41708_41747[(2)] = inst_41685);

(statearr_41708_41747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (3))){
var inst_41629 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41629)){
var statearr_41709_41748 = state_41691__$1;
(statearr_41709_41748[(1)] = (10));

} else {
var statearr_41710_41749 = state_41691__$1;
(statearr_41710_41749[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (12))){
var inst_41687 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41711_41750 = state_41691__$1;
(statearr_41711_41750[(2)] = inst_41687);

(statearr_41711_41750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (2))){
var inst_41617 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41617)){
var statearr_41712_41751 = state_41691__$1;
(statearr_41712_41751[(1)] = (5));

} else {
var statearr_41713_41752 = state_41691__$1;
(statearr_41713_41752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (23))){
var inst_41663 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41663)){
var statearr_41714_41753 = state_41691__$1;
(statearr_41714_41753[(1)] = (27));

} else {
var statearr_41715_41754 = state_41691__$1;
(statearr_41715_41754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (19))){
var inst_41650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41651 = figwheel.client.heads_up.append_message.call(null,inst_41650);
var state_41691__$1 = state_41691;
var statearr_41716_41755 = state_41691__$1;
(statearr_41716_41755[(2)] = inst_41651);

(statearr_41716_41755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (11))){
var inst_41640 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41640)){
var statearr_41717_41756 = state_41691__$1;
(statearr_41717_41756[(1)] = (15));

} else {
var statearr_41718_41757 = state_41691__$1;
(statearr_41718_41757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (9))){
var inst_41625 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41719_41758 = state_41691__$1;
(statearr_41719_41758[(2)] = inst_41625);

(statearr_41719_41758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (5))){
var inst_41619 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(8),inst_41619);
} else {
if((state_val_41692 === (14))){
var inst_41638 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41720_41759 = state_41691__$1;
(statearr_41720_41759[(2)] = inst_41638);

(statearr_41720_41759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (26))){
var inst_41661 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41721_41760 = state_41691__$1;
(statearr_41721_41760[(2)] = inst_41661);

(statearr_41721_41760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (16))){
var inst_41648 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41691__$1 = state_41691;
if(cljs.core.truth_(inst_41648)){
var statearr_41722_41761 = state_41691__$1;
(statearr_41722_41761[(1)] = (19));

} else {
var statearr_41723_41762 = state_41691__$1;
(statearr_41723_41762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (30))){
var inst_41668 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41724_41763 = state_41691__$1;
(statearr_41724_41763[(2)] = inst_41668);

(statearr_41724_41763[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (10))){
var inst_41631 = figwheel.client.heads_up.clear.call(null);
var state_41691__$1 = state_41691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41691__$1,(13),inst_41631);
} else {
if((state_val_41692 === (18))){
var inst_41646 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41725_41764 = state_41691__$1;
(statearr_41725_41764[(2)] = inst_41646);

(statearr_41725_41764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41692 === (8))){
var inst_41621 = (state_41691[(2)]);
var state_41691__$1 = state_41691;
var statearr_41726_41765 = state_41691__$1;
(statearr_41726_41765[(2)] = inst_41621);

(statearr_41726_41765[(1)] = (7));


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
});})(c__27278__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27213__auto__,c__27278__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____0 = (function (){
var statearr_41730 = [null,null,null,null,null,null,null,null,null];
(statearr_41730[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__);

(statearr_41730[(1)] = (1));

return statearr_41730;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____1 = (function (state_41691){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_41691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41731){if((e41731 instanceof Object)){
var ex__27217__auto__ = e41731;
var statearr_41732_41766 = state_41691;
(statearr_41732_41766[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41767 = state_41691;
state_41691 = G__41767;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__ = function(state_41691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____1.call(this,state_41691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__,msg_hist,msg_names,msg))
})();
var state__27280__auto__ = (function (){var statearr_41733 = f__27279__auto__.call(null);
(statearr_41733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_41733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__,msg_hist,msg_names,msg))
);

return c__27278__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27278__auto___41830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto___41830,ch){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto___41830,ch){
return (function (state_41813){
var state_val_41814 = (state_41813[(1)]);
if((state_val_41814 === (1))){
var state_41813__$1 = state_41813;
var statearr_41815_41831 = state_41813__$1;
(statearr_41815_41831[(2)] = null);

(statearr_41815_41831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (2))){
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41813__$1,(4),ch);
} else {
if((state_val_41814 === (3))){
var inst_41811 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41813__$1,inst_41811);
} else {
if((state_val_41814 === (4))){
var inst_41801 = (state_41813[(7)]);
var inst_41801__$1 = (state_41813[(2)]);
var state_41813__$1 = (function (){var statearr_41816 = state_41813;
(statearr_41816[(7)] = inst_41801__$1);

return statearr_41816;
})();
if(cljs.core.truth_(inst_41801__$1)){
var statearr_41817_41832 = state_41813__$1;
(statearr_41817_41832[(1)] = (5));

} else {
var statearr_41818_41833 = state_41813__$1;
(statearr_41818_41833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (5))){
var inst_41801 = (state_41813[(7)]);
var inst_41803 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41801);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41813__$1,(8),inst_41803);
} else {
if((state_val_41814 === (6))){
var state_41813__$1 = state_41813;
var statearr_41819_41834 = state_41813__$1;
(statearr_41819_41834[(2)] = null);

(statearr_41819_41834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (7))){
var inst_41809 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41820_41835 = state_41813__$1;
(statearr_41820_41835[(2)] = inst_41809);

(statearr_41820_41835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (8))){
var inst_41805 = (state_41813[(2)]);
var state_41813__$1 = (function (){var statearr_41821 = state_41813;
(statearr_41821[(8)] = inst_41805);

return statearr_41821;
})();
var statearr_41822_41836 = state_41813__$1;
(statearr_41822_41836[(2)] = null);

(statearr_41822_41836[(1)] = (2));


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
});})(c__27278__auto___41830,ch))
;
return ((function (switch__27213__auto__,c__27278__auto___41830,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27214__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27214__auto____0 = (function (){
var statearr_41826 = [null,null,null,null,null,null,null,null,null];
(statearr_41826[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27214__auto__);

(statearr_41826[(1)] = (1));

return statearr_41826;
});
var figwheel$client$heads_up_plugin_$_state_machine__27214__auto____1 = (function (state_41813){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_41813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41827){if((e41827 instanceof Object)){
var ex__27217__auto__ = e41827;
var statearr_41828_41837 = state_41813;
(statearr_41828_41837[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41838 = state_41813;
state_41813 = G__41838;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27214__auto__ = function(state_41813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27214__auto____1.call(this,state_41813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27214__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27214__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto___41830,ch))
})();
var state__27280__auto__ = (function (){var statearr_41829 = f__27279__auto__.call(null);
(statearr_41829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto___41830);

return statearr_41829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto___41830,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_41859){
var state_val_41860 = (state_41859[(1)]);
if((state_val_41860 === (1))){
var inst_41854 = cljs.core.async.timeout.call(null,(3000));
var state_41859__$1 = state_41859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41859__$1,(2),inst_41854);
} else {
if((state_val_41860 === (2))){
var inst_41856 = (state_41859[(2)]);
var inst_41857 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41859__$1 = (function (){var statearr_41861 = state_41859;
(statearr_41861[(7)] = inst_41856);

return statearr_41861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41859__$1,inst_41857);
} else {
return null;
}
}
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____0 = (function (){
var statearr_41865 = [null,null,null,null,null,null,null,null];
(statearr_41865[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__);

(statearr_41865[(1)] = (1));

return statearr_41865;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____1 = (function (state_41859){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_41859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e41866){if((e41866 instanceof Object)){
var ex__27217__auto__ = e41866;
var statearr_41867_41869 = state_41859;
(statearr_41867_41869[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41870 = state_41859;
state_41859 = G__41870;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__ = function(state_41859){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____1.call(this,state_41859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27214__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_41868 = f__27279__auto__.call(null);
(statearr_41868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_41868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18872__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18872__auto__)){
return ("CustomEvent" in window);
} else {
return and__18872__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj41874 = {"detail":url};
return obj41874;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41875){
var map__41882 = p__41875;
var map__41882__$1 = ((((!((map__41882 == null)))?((((map__41882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41882):map__41882);
var ed = map__41882__$1;
var formatted_exception = cljs.core.get.call(null,map__41882__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41882__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41884_41888 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41885_41889 = null;
var count__41886_41890 = (0);
var i__41887_41891 = (0);
while(true){
if((i__41887_41891 < count__41886_41890)){
var msg_41892 = cljs.core._nth.call(null,chunk__41885_41889,i__41887_41891);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41892);

var G__41893 = seq__41884_41888;
var G__41894 = chunk__41885_41889;
var G__41895 = count__41886_41890;
var G__41896 = (i__41887_41891 + (1));
seq__41884_41888 = G__41893;
chunk__41885_41889 = G__41894;
count__41886_41890 = G__41895;
i__41887_41891 = G__41896;
continue;
} else {
var temp__4425__auto___41897 = cljs.core.seq.call(null,seq__41884_41888);
if(temp__4425__auto___41897){
var seq__41884_41898__$1 = temp__4425__auto___41897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41884_41898__$1)){
var c__19668__auto___41899 = cljs.core.chunk_first.call(null,seq__41884_41898__$1);
var G__41900 = cljs.core.chunk_rest.call(null,seq__41884_41898__$1);
var G__41901 = c__19668__auto___41899;
var G__41902 = cljs.core.count.call(null,c__19668__auto___41899);
var G__41903 = (0);
seq__41884_41888 = G__41900;
chunk__41885_41889 = G__41901;
count__41886_41890 = G__41902;
i__41887_41891 = G__41903;
continue;
} else {
var msg_41904 = cljs.core.first.call(null,seq__41884_41898__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41904);

var G__41905 = cljs.core.next.call(null,seq__41884_41898__$1);
var G__41906 = null;
var G__41907 = (0);
var G__41908 = (0);
seq__41884_41888 = G__41905;
chunk__41885_41889 = G__41906;
count__41886_41890 = G__41907;
i__41887_41891 = G__41908;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41909){
var map__41912 = p__41909;
var map__41912__$1 = ((((!((map__41912 == null)))?((((map__41912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41912):map__41912);
var w = map__41912__$1;
var message = cljs.core.get.call(null,map__41912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18872__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18872__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18872__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41920 = cljs.core.seq.call(null,plugins);
var chunk__41921 = null;
var count__41922 = (0);
var i__41923 = (0);
while(true){
if((i__41923 < count__41922)){
var vec__41924 = cljs.core._nth.call(null,chunk__41921,i__41923);
var k = cljs.core.nth.call(null,vec__41924,(0),null);
var plugin = cljs.core.nth.call(null,vec__41924,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41926 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41920,chunk__41921,count__41922,i__41923,pl_41926,vec__41924,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41926.call(null,msg_hist);
});})(seq__41920,chunk__41921,count__41922,i__41923,pl_41926,vec__41924,k,plugin))
);
} else {
}

var G__41927 = seq__41920;
var G__41928 = chunk__41921;
var G__41929 = count__41922;
var G__41930 = (i__41923 + (1));
seq__41920 = G__41927;
chunk__41921 = G__41928;
count__41922 = G__41929;
i__41923 = G__41930;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41920);
if(temp__4425__auto__){
var seq__41920__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41920__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__41920__$1);
var G__41931 = cljs.core.chunk_rest.call(null,seq__41920__$1);
var G__41932 = c__19668__auto__;
var G__41933 = cljs.core.count.call(null,c__19668__auto__);
var G__41934 = (0);
seq__41920 = G__41931;
chunk__41921 = G__41932;
count__41922 = G__41933;
i__41923 = G__41934;
continue;
} else {
var vec__41925 = cljs.core.first.call(null,seq__41920__$1);
var k = cljs.core.nth.call(null,vec__41925,(0),null);
var plugin = cljs.core.nth.call(null,vec__41925,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41935 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41920,chunk__41921,count__41922,i__41923,pl_41935,vec__41925,k,plugin,seq__41920__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41935.call(null,msg_hist);
});})(seq__41920,chunk__41921,count__41922,i__41923,pl_41935,vec__41925,k,plugin,seq__41920__$1,temp__4425__auto__))
);
} else {
}

var G__41936 = cljs.core.next.call(null,seq__41920__$1);
var G__41937 = null;
var G__41938 = (0);
var G__41939 = (0);
seq__41920 = G__41936;
chunk__41921 = G__41937;
count__41922 = G__41938;
i__41923 = G__41939;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args41940 = [];
var len__19923__auto___41943 = arguments.length;
var i__19924__auto___41944 = (0);
while(true){
if((i__19924__auto___41944 < len__19923__auto___41943)){
args41940.push((arguments[i__19924__auto___41944]));

var G__41945 = (i__19924__auto___41944 + (1));
i__19924__auto___41944 = G__41945;
continue;
} else {
}
break;
}

var G__41942 = args41940.length;
switch (G__41942) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41940.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__19930__auto__ = [];
var len__19923__auto___41951 = arguments.length;
var i__19924__auto___41952 = (0);
while(true){
if((i__19924__auto___41952 < len__19923__auto___41951)){
args__19930__auto__.push((arguments[i__19924__auto___41952]));

var G__41953 = (i__19924__auto___41952 + (1));
i__19924__auto___41952 = G__41953;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((0) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41948){
var map__41949 = p__41948;
var map__41949__$1 = ((((!((map__41949 == null)))?((((map__41949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41949):map__41949);
var opts = map__41949__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41947){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41947));
});

//# sourceMappingURL=client.js.map?rel=1445816822502