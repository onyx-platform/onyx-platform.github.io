// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__19930__auto__ = [];
var len__19923__auto___41976 = arguments.length;
var i__19924__auto___41977 = (0);
while(true){
if((i__19924__auto___41977 < len__19923__auto___41976)){
args__19930__auto__.push((arguments[i__19924__auto___41977]));

var G__41978 = (i__19924__auto___41977 + (1));
i__19924__auto___41977 = G__41978;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41968_41979 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41969_41980 = null;
var count__41970_41981 = (0);
var i__41971_41982 = (0);
while(true){
if((i__41971_41982 < count__41970_41981)){
var k_41983 = cljs.core._nth.call(null,chunk__41969_41980,i__41971_41982);
e.setAttribute(cljs.core.name.call(null,k_41983),cljs.core.get.call(null,attrs,k_41983));

var G__41984 = seq__41968_41979;
var G__41985 = chunk__41969_41980;
var G__41986 = count__41970_41981;
var G__41987 = (i__41971_41982 + (1));
seq__41968_41979 = G__41984;
chunk__41969_41980 = G__41985;
count__41970_41981 = G__41986;
i__41971_41982 = G__41987;
continue;
} else {
var temp__4425__auto___41988 = cljs.core.seq.call(null,seq__41968_41979);
if(temp__4425__auto___41988){
var seq__41968_41989__$1 = temp__4425__auto___41988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41968_41989__$1)){
var c__19668__auto___41990 = cljs.core.chunk_first.call(null,seq__41968_41989__$1);
var G__41991 = cljs.core.chunk_rest.call(null,seq__41968_41989__$1);
var G__41992 = c__19668__auto___41990;
var G__41993 = cljs.core.count.call(null,c__19668__auto___41990);
var G__41994 = (0);
seq__41968_41979 = G__41991;
chunk__41969_41980 = G__41992;
count__41970_41981 = G__41993;
i__41971_41982 = G__41994;
continue;
} else {
var k_41995 = cljs.core.first.call(null,seq__41968_41989__$1);
e.setAttribute(cljs.core.name.call(null,k_41995),cljs.core.get.call(null,attrs,k_41995));

var G__41996 = cljs.core.next.call(null,seq__41968_41989__$1);
var G__41997 = null;
var G__41998 = (0);
var G__41999 = (0);
seq__41968_41979 = G__41996;
chunk__41969_41980 = G__41997;
count__41970_41981 = G__41998;
i__41971_41982 = G__41999;
continue;
}
} else {
}
}
break;
}

var seq__41972_42000 = cljs.core.seq.call(null,children);
var chunk__41973_42001 = null;
var count__41974_42002 = (0);
var i__41975_42003 = (0);
while(true){
if((i__41975_42003 < count__41974_42002)){
var ch_42004 = cljs.core._nth.call(null,chunk__41973_42001,i__41975_42003);
e.appendChild(ch_42004);

var G__42005 = seq__41972_42000;
var G__42006 = chunk__41973_42001;
var G__42007 = count__41974_42002;
var G__42008 = (i__41975_42003 + (1));
seq__41972_42000 = G__42005;
chunk__41973_42001 = G__42006;
count__41974_42002 = G__42007;
i__41975_42003 = G__42008;
continue;
} else {
var temp__4425__auto___42009 = cljs.core.seq.call(null,seq__41972_42000);
if(temp__4425__auto___42009){
var seq__41972_42010__$1 = temp__4425__auto___42009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41972_42010__$1)){
var c__19668__auto___42011 = cljs.core.chunk_first.call(null,seq__41972_42010__$1);
var G__42012 = cljs.core.chunk_rest.call(null,seq__41972_42010__$1);
var G__42013 = c__19668__auto___42011;
var G__42014 = cljs.core.count.call(null,c__19668__auto___42011);
var G__42015 = (0);
seq__41972_42000 = G__42012;
chunk__41973_42001 = G__42013;
count__41974_42002 = G__42014;
i__41975_42003 = G__42015;
continue;
} else {
var ch_42016 = cljs.core.first.call(null,seq__41972_42010__$1);
e.appendChild(ch_42016);

var G__42017 = cljs.core.next.call(null,seq__41972_42010__$1);
var G__42018 = null;
var G__42019 = (0);
var G__42020 = (0);
seq__41972_42000 = G__42017;
chunk__41973_42001 = G__42018;
count__41974_42002 = G__42019;
i__41975_42003 = G__42020;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41965){
var G__41966 = cljs.core.first.call(null,seq41965);
var seq41965__$1 = cljs.core.next.call(null,seq41965);
var G__41967 = cljs.core.first.call(null,seq41965__$1);
var seq41965__$2 = cljs.core.next.call(null,seq41965__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41966,G__41967,seq41965__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19778__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19779__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19782__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19778__auto__,prefer_table__19779__auto__,method_cache__19780__auto__,cached_hierarchy__19781__auto__,hierarchy__19782__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19778__auto__,prefer_table__19779__auto__,method_cache__19780__auto__,cached_hierarchy__19781__auto__,hierarchy__19782__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19782__auto__,method_table__19778__auto__,prefer_table__19779__auto__,method_cache__19780__auto__,cached_hierarchy__19781__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_42021 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_42021.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_42021.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_42021.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_42021);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__42022,st_map){
var map__42027 = p__42022;
var map__42027__$1 = ((((!((map__42027 == null)))?((((map__42027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42027):map__42027);
var container_el = cljs.core.get.call(null,map__42027__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__42027,map__42027__$1,container_el){
return (function (p__42029){
var vec__42030 = p__42029;
var k = cljs.core.nth.call(null,vec__42030,(0),null);
var v = cljs.core.nth.call(null,vec__42030,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__42027,map__42027__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__42031,dom_str){
var map__42034 = p__42031;
var map__42034__$1 = ((((!((map__42034 == null)))?((((map__42034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42034):map__42034);
var c = map__42034__$1;
var content_area_el = cljs.core.get.call(null,map__42034__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__42036){
var map__42039 = p__42036;
var map__42039__$1 = ((((!((map__42039 == null)))?((((map__42039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42039):map__42039);
var content_area_el = cljs.core.get.call(null,map__42039__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_42082){
var state_val_42083 = (state_42082[(1)]);
if((state_val_42083 === (1))){
var inst_42067 = (state_42082[(7)]);
var inst_42067__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42068 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42069 = ["10px","10px","100%","68px","1.0"];
var inst_42070 = cljs.core.PersistentHashMap.fromArrays(inst_42068,inst_42069);
var inst_42071 = cljs.core.merge.call(null,inst_42070,style);
var inst_42072 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42067__$1,inst_42071);
var inst_42073 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42067__$1,msg);
var inst_42074 = cljs.core.async.timeout.call(null,(300));
var state_42082__$1 = (function (){var statearr_42084 = state_42082;
(statearr_42084[(8)] = inst_42072);

(statearr_42084[(9)] = inst_42073);

(statearr_42084[(7)] = inst_42067__$1);

return statearr_42084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42082__$1,(2),inst_42074);
} else {
if((state_val_42083 === (2))){
var inst_42067 = (state_42082[(7)]);
var inst_42076 = (state_42082[(2)]);
var inst_42077 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_42078 = ["auto"];
var inst_42079 = cljs.core.PersistentHashMap.fromArrays(inst_42077,inst_42078);
var inst_42080 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42067,inst_42079);
var state_42082__$1 = (function (){var statearr_42085 = state_42082;
(statearr_42085[(10)] = inst_42076);

return statearr_42085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42082__$1,inst_42080);
} else {
return null;
}
}
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____0 = (function (){
var statearr_42089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42089[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__);

(statearr_42089[(1)] = (1));

return statearr_42089;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____1 = (function (state_42082){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_42082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e42090){if((e42090 instanceof Object)){
var ex__27217__auto__ = e42090;
var statearr_42091_42093 = state_42082;
(statearr_42091_42093[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42094 = state_42082;
state_42082 = G__42094;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__ = function(state_42082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____1.call(this,state_42082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_42092 = f__27279__auto__.call(null);
(statearr_42092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_42092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__42096 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__42096,(0),null);
var ln = cljs.core.nth.call(null,vec__42096,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__42099 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__42099,(0),null);
var file_line = cljs.core.nth.call(null,vec__42099,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__42099,file_name,file_line){
return (function (p1__42097_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__42097_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__42099,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__42102 = figwheel.client.heads_up.ensure_container.call(null);
var map__42102__$1 = ((((!((map__42102 == null)))?((((map__42102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42102):map__42102);
var content_area_el = cljs.core.get.call(null,map__42102__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_42150){
var state_val_42151 = (state_42150[(1)]);
if((state_val_42151 === (1))){
var inst_42133 = (state_42150[(7)]);
var inst_42133__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42134 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42135 = ["0.0"];
var inst_42136 = cljs.core.PersistentHashMap.fromArrays(inst_42134,inst_42135);
var inst_42137 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42133__$1,inst_42136);
var inst_42138 = cljs.core.async.timeout.call(null,(300));
var state_42150__$1 = (function (){var statearr_42152 = state_42150;
(statearr_42152[(8)] = inst_42137);

(statearr_42152[(7)] = inst_42133__$1);

return statearr_42152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42150__$1,(2),inst_42138);
} else {
if((state_val_42151 === (2))){
var inst_42133 = (state_42150[(7)]);
var inst_42140 = (state_42150[(2)]);
var inst_42141 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_42142 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42143 = cljs.core.PersistentHashMap.fromArrays(inst_42141,inst_42142);
var inst_42144 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42133,inst_42143);
var inst_42145 = cljs.core.async.timeout.call(null,(200));
var state_42150__$1 = (function (){var statearr_42153 = state_42150;
(statearr_42153[(9)] = inst_42140);

(statearr_42153[(10)] = inst_42144);

return statearr_42153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42150__$1,(3),inst_42145);
} else {
if((state_val_42151 === (3))){
var inst_42133 = (state_42150[(7)]);
var inst_42147 = (state_42150[(2)]);
var inst_42148 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42133,"");
var state_42150__$1 = (function (){var statearr_42154 = state_42150;
(statearr_42154[(11)] = inst_42147);

return statearr_42154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42150__$1,inst_42148);
} else {
return null;
}
}
}
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__27214__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__27214__auto____0 = (function (){
var statearr_42158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42158[(0)] = figwheel$client$heads_up$clear_$_state_machine__27214__auto__);

(statearr_42158[(1)] = (1));

return statearr_42158;
});
var figwheel$client$heads_up$clear_$_state_machine__27214__auto____1 = (function (state_42150){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_42150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e42159){if((e42159 instanceof Object)){
var ex__27217__auto__ = e42159;
var statearr_42160_42162 = state_42150;
(statearr_42160_42162[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42163 = state_42150;
state_42150 = G__42163;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__27214__auto__ = function(state_42150){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__27214__auto____1.call(this,state_42150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__27214__auto____0;
figwheel$client$heads_up$clear_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__27214__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_42161 = f__27279__auto__.call(null);
(statearr_42161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_42161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__27278__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27278__auto__){
return (function (){
var f__27279__auto__ = (function (){var switch__27213__auto__ = ((function (c__27278__auto__){
return (function (state_42195){
var state_val_42196 = (state_42195[(1)]);
if((state_val_42196 === (1))){
var inst_42185 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42195__$1 = state_42195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42195__$1,(2),inst_42185);
} else {
if((state_val_42196 === (2))){
var inst_42187 = (state_42195[(2)]);
var inst_42188 = cljs.core.async.timeout.call(null,(400));
var state_42195__$1 = (function (){var statearr_42197 = state_42195;
(statearr_42197[(7)] = inst_42187);

return statearr_42197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42195__$1,(3),inst_42188);
} else {
if((state_val_42196 === (3))){
var inst_42190 = (state_42195[(2)]);
var inst_42191 = figwheel.client.heads_up.clear.call(null);
var state_42195__$1 = (function (){var statearr_42198 = state_42195;
(statearr_42198[(8)] = inst_42190);

return statearr_42198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42195__$1,(4),inst_42191);
} else {
if((state_val_42196 === (4))){
var inst_42193 = (state_42195[(2)]);
var state_42195__$1 = state_42195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42195__$1,inst_42193);
} else {
return null;
}
}
}
}
});})(c__27278__auto__))
;
return ((function (switch__27213__auto__,c__27278__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____0 = (function (){
var statearr_42202 = [null,null,null,null,null,null,null,null,null];
(statearr_42202[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__);

(statearr_42202[(1)] = (1));

return statearr_42202;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____1 = (function (state_42195){
while(true){
var ret_value__27215__auto__ = (function (){try{while(true){
var result__27216__auto__ = switch__27213__auto__.call(null,state_42195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27216__auto__;
}
break;
}
}catch (e42203){if((e42203 instanceof Object)){
var ex__27217__auto__ = e42203;
var statearr_42204_42206 = state_42195;
(statearr_42204_42206[(5)] = ex__27217__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42207 = state_42195;
state_42195 = G__42207;
continue;
} else {
return ret_value__27215__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__ = function(state_42195){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____1.call(this,state_42195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__27214__auto__;
})()
;})(switch__27213__auto__,c__27278__auto__))
})();
var state__27280__auto__ = (function (){var statearr_42205 = f__27279__auto__.call(null);
(statearr_42205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27278__auto__);

return statearr_42205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27280__auto__);
});})(c__27278__auto__))
);

return c__27278__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1445816822773