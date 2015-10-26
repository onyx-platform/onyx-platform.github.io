// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.grid');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('schema.core');
om_bootstrap.grid.Grid = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"fluid?","fluid?",-742121890)),schema.core.Bool], true, false));
om_bootstrap.grid.col_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"md-pull","md-pull",979081250),null,new cljs.core.Keyword(null,"lg","lg",-80787836),null,new cljs.core.Keyword(null,"lg-push","lg-push",606284103),null,new cljs.core.Keyword(null,"sm","sm",-1402575065),null,new cljs.core.Keyword(null,"lg-pull","lg-pull",70082794),null,new cljs.core.Keyword(null,"xs-push","xs-push",-1878478835),null,new cljs.core.Keyword(null,"xs","xs",649443341),null,new cljs.core.Keyword(null,"sm-offset","sm-offset",229619439),null,new cljs.core.Keyword(null,"sm-pull","sm-pull",-368259600),null,new cljs.core.Keyword(null,"lg-offset","lg-offset",-429200045),null,new cljs.core.Keyword(null,"md-push","md-push",288470810),null,new cljs.core.Keyword(null,"sm-push","sm-push",1835708573),null,new cljs.core.Keyword(null,"md-offset","md-offset",1274386877),null,new cljs.core.Keyword(null,"xs-pull","xs-pull",-132686786),null,new cljs.core.Keyword(null,"md","md",707286655),null,new cljs.core.Keyword(null,"xs-offset","xs-offset",-1940326689),null], null), null);
om_bootstrap.grid.Col = om_bootstrap.types.bootstrap.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,schema.core.optional_key,om_bootstrap.grid.col_keys),cljs.core.repeat.call(null,schema.core.Int)));
var ufv___38015 = schema.utils.use_fn_validation;
var output_schema38006_38016 = om_bootstrap.types.Component;
var input_schema38007_38017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.Any], null);
var input_checker38008_38018 = schema.core.checker.call(null,input_schema38007_38017);
var output_checker38009_38019 = schema.core.checker.call(null,output_schema38006_38016);
/**
 * Inputs: [opts :- Grid & children]
 * Returns: t/Component
 * 
 * Generates a wrapper for a bootstrap grid.
 */
om_bootstrap.grid.grid = ((function (ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019){
return (function om_bootstrap$grid$grid(){
var args__19930__auto__ = [];
var len__19923__auto___38021 = arguments.length;
var i__19924__auto___38022 = (0);
while(true){
if((i__19924__auto___38022 < len__19923__auto___38021)){
args__19930__auto__.push((arguments[i__19924__auto___38022]));

var G__38023 = (i__19924__auto___38022 + (1));
i__19924__auto___38022 = G__38023;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019))
;

om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019){
return (function (G__38010,rest38011){
var validate__20206__auto__ = ufv___38015.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___38024 = cljs.core.list_STAR_.call(null,G__38010,rest38011);
var temp__4425__auto___38025 = input_checker38008_38018.call(null,args__20207__auto___38024);
if(cljs.core.truth_(temp__4425__auto___38025)){
var error__20208__auto___38026 = temp__4425__auto___38025;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__20208__auto___38026)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38007_38017,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___38024,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38026], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__38010;
var children = rest38011;
while(true){
var vec__38014 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Grid,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__38014,(0),null);
var props = cljs.core.nth.call(null,vec__38014,(1),null);
var class$ = (cljs.core.truth_(new cljs.core.Keyword(null,"fluid?","fluid?",-742121890).cljs$core$IFn$_invoke$arity$1(bs))?"container-fluid":"container");
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___38027 = output_checker38009_38019.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___38027)){
var error__20208__auto___38028 = temp__4425__auto___38027;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a wrapper for a bootstrap grid."], null)),cljs.core.pr_str.call(null,error__20208__auto___38028)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38006_38016,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38028], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019))
;

om_bootstrap.grid.grid.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.grid.cljs$lang$applyTo = ((function (ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019){
return (function (seq38012){
var G__38013 = cljs.core.first.call(null,seq38012);
var seq38012__$1 = cljs.core.next.call(null,seq38012);
return om_bootstrap.grid.grid.cljs$core$IFn$_invoke$arity$variadic(G__38013,seq38012__$1);
});})(ufv___38015,output_schema38006_38016,input_schema38007_38017,input_checker38008_38018,output_checker38009_38019))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.grid),schema.core.make_fn_schema.call(null,output_schema38006_38016,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38007_38017], null)));
var ufv___38037 = schema.utils.use_fn_validation;
var output_schema38029_38038 = om_bootstrap.types.Component;
var input_schema38030_38039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker38031_38040 = schema.core.checker.call(null,input_schema38030_38039);
var output_checker38032_38041 = schema.core.checker.call(null,output_schema38029_38038);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap row element.
 */
om_bootstrap.grid.row = ((function (ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041){
return (function om_bootstrap$grid$row(){
var args__19930__auto__ = [];
var len__19923__auto___38043 = arguments.length;
var i__19924__auto___38044 = (0);
while(true){
if((i__19924__auto___38044 < len__19923__auto___38043)){
args__19930__auto__.push((arguments[i__19924__auto___38044]));

var G__38045 = (i__19924__auto___38044 + (1));
i__19924__auto___38044 = G__38045;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041))
;

om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041){
return (function (G__38033,rest38034){
var validate__20206__auto__ = ufv___38037.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___38046 = cljs.core.list_STAR_.call(null,G__38033,rest38034);
var temp__4425__auto___38047 = input_checker38031_38040.call(null,args__20207__auto___38046);
if(cljs.core.truth_(temp__4425__auto___38047)){
var error__20208__auto___38048 = temp__4425__auto___38047;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__20208__auto___38048)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38030_38039,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___38046,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38048], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__38033;
var children = rest38034;
while(true){
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___38049 = output_checker38032_38041.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___38049)){
var error__20208__auto___38050 = temp__4425__auto___38049;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap row element."], null)),cljs.core.pr_str.call(null,error__20208__auto___38050)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38029_38038,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38050], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041))
;

om_bootstrap.grid.row.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.row.cljs$lang$applyTo = ((function (ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041){
return (function (seq38035){
var G__38036 = cljs.core.first.call(null,seq38035);
var seq38035__$1 = cljs.core.next.call(null,seq38035);
return om_bootstrap.grid.row.cljs$core$IFn$_invoke$arity$variadic(G__38036,seq38035__$1);
});})(ufv___38037,output_schema38029_38038,input_schema38030_38039,input_checker38031_38040,output_checker38032_38041))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.row),schema.core.make_fn_schema.call(null,output_schema38029_38038,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38030_38039], null)));
var ufv___38066 = schema.utils.use_fn_validation;
var output_schema38053_38067 = om_bootstrap.types.Component;
var input_schema38054_38068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.grid.Col,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Col","Col",1039814105,null)], null))),schema.core.Any], null);
var input_checker38055_38069 = schema.core.checker.call(null,input_schema38054_38068);
var output_checker38056_38070 = schema.core.checker.call(null,output_schema38053_38067);
/**
 * Inputs: [opts :- Col & children]
 * Returns: t/Component
 * 
 * Generates a Bootstrap column element.
 */
om_bootstrap.grid.col = ((function (ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070){
return (function om_bootstrap$grid$col(){
var args__19930__auto__ = [];
var len__19923__auto___38071 = arguments.length;
var i__19924__auto___38072 = (0);
while(true){
if((i__19924__auto___38072 < len__19923__auto___38071)){
args__19930__auto__.push((arguments[i__19924__auto___38072]));

var G__38073 = (i__19924__auto___38072 + (1));
i__19924__auto___38072 = G__38073;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070))
;

om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070){
return (function (G__38057,rest38058){
var validate__20206__auto__ = ufv___38066.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___38074 = cljs.core.list_STAR_.call(null,G__38057,rest38058);
var temp__4425__auto___38075 = input_checker38055_38069.call(null,args__20207__auto___38074);
if(cljs.core.truth_(temp__4425__auto___38075)){
var error__20208__auto___38076 = temp__4425__auto___38075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__20208__auto___38076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema38054_38068,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___38074,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38076], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__38057;
var children = rest38058;
while(true){
var vec__38062 = om_bootstrap.types.separate.call(null,om_bootstrap.grid.Col,opts,cljs.core.PersistentArrayMap.EMPTY);
var bs = cljs.core.nth.call(null,vec__38062,(0),null);
var props = cljs.core.nth.call(null,vec__38062,(1),null);
var class$ = om_tools.dom.class_set.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (vec__38062,bs,props,validate__20206__auto__,ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070){
return (function (p__38063){
var vec__38064 = p__38063;
var k = cljs.core.nth.call(null,vec__38064,(0),null);
var v = cljs.core.nth.call(null,vec__38064,(1),null);
return [cljs.core.str("col-"),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-"),cljs.core.str(v)].join('');
});})(vec__38062,bs,props,validate__20206__auto__,ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070))
,cljs.core.select_keys.call(null,bs,om_bootstrap.grid.col_keys)),cljs.core.repeat.call(null,true)));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___38084 = output_checker38056_38070.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___38084)){
var error__20208__auto___38085 = temp__4425__auto___38084;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a Bootstrap column element."], null)),cljs.core.pr_str.call(null,error__20208__auto___38085)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema38053_38067,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___38085], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070))
;

om_bootstrap.grid.col.cljs$lang$maxFixedArity = (1);

om_bootstrap.grid.col.cljs$lang$applyTo = ((function (ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070){
return (function (seq38060){
var G__38061 = cljs.core.first.call(null,seq38060);
var seq38060__$1 = cljs.core.next.call(null,seq38060);
return om_bootstrap.grid.col.cljs$core$IFn$_invoke$arity$variadic(G__38061,seq38060__$1);
});})(ufv___38066,output_schema38053_38067,input_schema38054_38068,input_checker38055_38069,output_checker38056_38070))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.grid.col),schema.core.make_fn_schema.call(null,output_schema38053_38067,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema38054_38068], null)));

//# sourceMappingURL=grid.js.map?rel=1445816818977