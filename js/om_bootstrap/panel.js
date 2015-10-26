// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
var ufv___37849 = schema.utils.use_fn_validation;
var output_schema37828_37850 = om_bootstrap.types.Component;
var input_schema37829_37851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null)], null))),schema.core.Any], null);
var input_checker37830_37852 = schema.core.checker.call(null,input_schema37829_37851);
var output_checker37831_37853 = schema.core.checker.call(null,output_schema37828_37850);
/**
 * Inputs: [opts :- Panel & children]
 * Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853){
return (function om_bootstrap$panel$panel(){
var args__19930__auto__ = [];
var len__19923__auto___37855 = arguments.length;
var i__19924__auto___37856 = (0);
while(true){
if((i__19924__auto___37856 < len__19923__auto___37855)){
args__19930__auto__.push((arguments[i__19924__auto___37856]));

var G__37857 = (i__19924__auto___37856 + (1));
i__19924__auto___37856 = G__37857;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853){
return (function (G__37832,rest37833){
var validate__20206__auto__ = ufv___37849.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37858 = cljs.core.list_STAR_.call(null,G__37832,rest37833);
var temp__4425__auto___37859 = input_checker37830_37852.call(null,args__20207__auto___37858);
if(cljs.core.truth_(temp__4425__auto___37859)){
var error__20208__auto___37860 = temp__4425__auto___37859;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37860)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37829_37851,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37858,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37860], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__37832;
var children = rest37833;
while(true){
var vec__37836 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__37836,(0),null);
var props = cljs.core.nth.call(null,vec__37836,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var header = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join('')), "ref": "body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var list_group = temp__4425__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var footer = temp__4425__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37870 = output_checker37831_37853.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37870)){
var error__20208__auto___37871 = temp__4425__auto___37870;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37828_37850,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37871], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853){
return (function (seq37834){
var G__37835 = cljs.core.first.call(null,seq37834);
var seq37834__$1 = cljs.core.next.call(null,seq37834);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__37835,seq37834__$1);
});})(ufv___37849,output_schema37828_37850,input_schema37829_37851,input_checker37830_37852,output_checker37831_37853))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema37828_37850,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37829_37851], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__29672__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__29672__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__29672__auto__;
})();

var component_fnk__29701__auto___37917 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema37880 = schema.core.Any;
var input_schema37881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map37879","map37879",-1856939776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker37882 = schema.core.checker.call(null,input_schema37881);
var output_checker37883 = schema.core.checker.call(null,output_schema37880);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function om_bootstrap$panel$constructor37876(G__37884){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___37924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37884], null);
var temp__4425__auto___37926 = input_checker37882.call(null,args__20207__auto___37924);
if(cljs.core.truth_(temp__4425__auto___37926)){
var error__20208__auto___37928 = temp__4425__auto___37926;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37876","constructor37876",-915646932,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema37881,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___37924,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37928], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map37879 = G__37884;
while(true){
if(cljs.core.map_QMARK_.call(null,map37879)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map37879)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map37879,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map37879,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t37895 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.panel.t37895 = (function (map37879,owner,constructor37876,output_schema37880,input_schema37881,validate__20206__auto__,G__37884,state,input_checker37882,output_checker37883,ufv__,meta37896){
this.map37879 = map37879;
this.owner = owner;
this.constructor37876 = constructor37876;
this.output_schema37880 = output_schema37880;
this.input_schema37881 = input_schema37881;
this.validate__20206__auto__ = validate__20206__auto__;
this.G__37884 = G__37884;
this.state = state;
this.input_checker37882 = input_checker37882;
this.output_checker37883 = output_checker37883;
this.ufv__ = ufv__;
this.meta37896 = meta37896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t37895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (_37897,meta37896__$1){
var self__ = this;
var _37897__$1 = this;
return (new om_bootstrap.panel.t37895(self__.map37879,self__.owner,self__.constructor37876,self__.output_schema37880,self__.input_schema37881,self__.validate__20206__auto__,self__.G__37884,self__.state,self__.input_checker37882,self__.output_checker37883,self__.ufv__,meta37896__$1));
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.t37895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (_37897){
var self__ = this;
var _37897__$1 = this;
return self__.meta37896;
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.t37895.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t37895.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.t37895.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t37895.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__37901 = om.core.get_props.call(null,self__.owner);
var map__37901__$1 = ((((!((map__37901 == null)))?((((map__37901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37901):map__37901);
var opts = cljs.core.get.call(null,map__37901__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__37901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__37901,map__37901__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__37901,map__37901__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.t37895.getBasis = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map37879","map37879",-1856939776,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37876","constructor37876",-915646932,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema37880","output-schema37880",842261645,null),new cljs.core.Symbol(null,"input-schema37881","input-schema37881",812028686,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__37884","G__37884",1167400276,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker37882","input-checker37882",2146507801,null),new cljs.core.Symbol(null,"output-checker37883","output-checker37883",1348851034,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta37896","meta37896",274901356,null)], null);
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.t37895.cljs$lang$type = true;

om_bootstrap.panel.t37895.cljs$lang$ctorStr = "om-bootstrap.panel/t37895";

om_bootstrap.panel.t37895.cljs$lang$ctorPrWriter = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.panel/t37895");
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

om_bootstrap.panel.__GT_t37895 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883){
return (function om_bootstrap$panel$constructor37876_$___GT_t37895(map37879__$1,owner__$1,constructor37876__$1,output_schema37880__$1,input_schema37881__$1,validate__20206__auto____$1,G__37884__$1,state__$1,input_checker37882__$1,output_checker37883__$1,ufv____$1,meta37896){
return (new om_bootstrap.panel.t37895(map37879__$1,owner__$1,constructor37876__$1,output_schema37880__$1,input_schema37881__$1,validate__20206__auto____$1,G__37884__$1,state__$1,input_checker37882__$1,output_checker37883__$1,ufv____$1,meta37896));
});})(state,owner,validate__20206__auto__,ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
;

}

return (new om_bootstrap.panel.t37895(map37879,owner,om_bootstrap$panel$constructor37876,output_schema37880,input_schema37881,validate__20206__auto__,G__37884,state,input_checker37882,output_checker37883,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___37957 = output_checker37883.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___37957)){
var error__20208__auto___37959 = temp__4425__auto___37957;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor37876","constructor37876",-915646932,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___37959)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema37880,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___37959], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema37880,input_schema37881,input_checker37882,output_checker37883))
,schema.core.make_fn_schema.call(null,output_schema37880,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37881], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__29701__auto___37917){
return (function om_bootstrap$panel$collapsible_panel_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___37962 = arguments.length;
var i__19924__auto___37963 = (0);
while(true){
if((i__19924__auto___37963 < len__19923__auto___37962)){
args__19930__auto__.push((arguments[i__19924__auto___37963]));

var G__37965 = (i__19924__auto___37963 + (1));
i__19924__auto___37963 = G__37965;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___37917))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___37917){
return (function (data__29702__auto__,owner37875,p__37909){
var vec__37910 = p__37909;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__37910,(0),null);
return component_fnk__29701__auto___37917.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner37875),new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner37875,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___37917))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___37917){
return (function (seq37904){
var G__37905 = cljs.core.first.call(null,seq37904);
var seq37904__$1 = cljs.core.next.call(null,seq37904);
var G__37906 = cljs.core.first.call(null,seq37904__$1);
var seq37904__$2 = cljs.core.next.call(null,seq37904__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__37905,G__37906,seq37904__$2);
});})(component_fnk__29701__auto___37917))
;

om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(){
var args37911 = [];
var len__19923__auto___37982 = arguments.length;
var i__19924__auto___37983 = (0);
while(true){
if((i__19924__auto___37983 < len__19923__auto___37982)){
args37911.push((arguments[i__19924__auto___37983]));

var G__37986 = (i__19924__auto___37983 + (1));
i__19924__auto___37983 = G__37986;
continue;
} else {
}
break;
}

var G__37915 = args37911.length;
switch (G__37915) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37911.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__29670__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m37877){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__29670__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m37877));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=panel.js.map?rel=1445816818861