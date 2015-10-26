// Compiled by ClojureScript 1.7.48 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___33149 = schema.utils.use_fn_validation;
var output_schema33143_33150 = schema.core.Any;
var input_schema33144_33151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker33145_33152 = schema.core.checker.call(null,input_schema33144_33151);
var output_checker33146_33153 = schema.core.checker.call(null,output_schema33143_33150);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___33149,output_schema33143_33150,input_schema33144_33151,input_checker33145_33152,output_checker33146_33153){
return (function om_bootstrap$button$render_anchor(G__33147,G__33148){
var validate__20206__auto__ = ufv___33149.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33147,G__33148], null);
var temp__4425__auto___33155 = input_checker33145_33152.call(null,args__20207__auto___33154);
if(cljs.core.truth_(temp__4425__auto___33155)){
var error__20208__auto___33156 = temp__4425__auto___33155;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33156)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33144_33151,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33154,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33156], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33147;
var children = G__33148;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33157 = output_checker33146_33153.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33157)){
var error__20208__auto___33158 = temp__4425__auto___33157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33143_33150,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33158], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33149,output_schema33143_33150,input_schema33144_33151,input_checker33145_33152,output_checker33146_33153))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema33143_33150,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33144_33151], null)));
var ufv___33168 = schema.utils.use_fn_validation;
var output_schema33159_33169 = om_bootstrap.types.Component;
var input_schema33160_33170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker33161_33171 = schema.core.checker.call(null,input_schema33160_33170);
var output_checker33162_33172 = schema.core.checker.call(null,output_schema33159_33169);
/**
 * Inputs: [props :- Button & children]
 * Returns: t/Component
 * 
 * Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172){
return (function om_bootstrap$button$button(){
var args__19930__auto__ = [];
var len__19923__auto___33173 = arguments.length;
var i__19924__auto___33174 = (0);
while(true){
if((i__19924__auto___33174 < len__19923__auto___33173)){
args__19930__auto__.push((arguments[i__19924__auto___33174]));

var G__33175 = (i__19924__auto___33174 + (1));
i__19924__auto___33174 = G__33175;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172){
return (function (G__33163,rest33164){
var validate__20206__auto__ = ufv___33168.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33176 = cljs.core.list_STAR_.call(null,G__33163,rest33164);
var temp__4425__auto___33177 = input_checker33161_33171.call(null,args__20207__auto___33176);
if(cljs.core.truth_(temp__4425__auto___33177)){
var error__20208__auto___33178 = temp__4425__auto___33177;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__20208__auto___33178)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33160_33170,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33176,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33178], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var props = G__33163;
var children = rest33164;
while(true){
var vec__33167 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__33167,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__33167,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__18884__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33179 = output_checker33162_33172.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33179)){
var error__20208__auto___33180 = temp__4425__auto___33179;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__20208__auto___33180)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33159_33169,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33180], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172){
return (function (seq33165){
var G__33166 = cljs.core.first.call(null,seq33165);
var seq33165__$1 = cljs.core.next.call(null,seq33165);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__33166,seq33165__$1);
});})(ufv___33168,output_schema33159_33169,input_schema33160_33170,input_checker33161_33171,output_checker33162_33172))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema33159_33169,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33160_33170], null)));
var ufv___33190 = schema.utils.use_fn_validation;
var output_schema33181_33191 = om_bootstrap.types.Component;
var input_schema33182_33192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker33183_33193 = schema.core.checker.call(null,input_schema33182_33192);
var output_checker33184_33194 = schema.core.checker.call(null,output_schema33181_33191);
/**
 * Inputs: [opts & children]
 * Returns: t/Component
 * 
 * Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194){
return (function om_bootstrap$button$toolbar(){
var args__19930__auto__ = [];
var len__19923__auto___33195 = arguments.length;
var i__19924__auto___33196 = (0);
while(true){
if((i__19924__auto___33196 < len__19923__auto___33195)){
args__19930__auto__.push((arguments[i__19924__auto___33196]));

var G__33197 = (i__19924__auto___33196 + (1));
i__19924__auto___33196 = G__33197;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194){
return (function (G__33185,rest33186){
var validate__20206__auto__ = ufv___33190.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33198 = cljs.core.list_STAR_.call(null,G__33185,rest33186);
var temp__4425__auto___33199 = input_checker33183_33193.call(null,args__20207__auto___33198);
if(cljs.core.truth_(temp__4425__auto___33199)){
var error__20208__auto___33200 = temp__4425__auto___33199;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__20208__auto___33200)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33182_33192,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33198,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33200], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33185;
var children = rest33186;
while(true){
var vec__33189 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__33189,(0),null);
var props = cljs.core.nth.call(null,vec__33189,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33201 = output_checker33184_33194.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33201)){
var error__20208__auto___33202 = temp__4425__auto___33201;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__20208__auto___33202)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33181_33191,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33202], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194){
return (function (seq33187){
var G__33188 = cljs.core.first.call(null,seq33187);
var seq33187__$1 = cljs.core.next.call(null,seq33187);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__33188,seq33187__$1);
});})(ufv___33190,output_schema33181_33191,input_schema33182_33192,input_checker33183_33193,output_checker33184_33194))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema33181_33191,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33182_33192], null)));
var ufv___33212 = schema.utils.use_fn_validation;
var output_schema33203_33213 = om_bootstrap.types.Component;
var input_schema33204_33214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker33205_33215 = schema.core.checker.call(null,input_schema33204_33214);
var output_checker33206_33216 = schema.core.checker.call(null,output_schema33203_33213);
/**
 * Inputs: [opts :- ButtonGroup & children]
 * Returns: t/Component
 * 
 * Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216){
return (function om_bootstrap$button$button_group(){
var args__19930__auto__ = [];
var len__19923__auto___33217 = arguments.length;
var i__19924__auto___33218 = (0);
while(true){
if((i__19924__auto___33218 < len__19923__auto___33217)){
args__19930__auto__.push((arguments[i__19924__auto___33218]));

var G__33219 = (i__19924__auto___33218 + (1));
i__19924__auto___33218 = G__33219;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216){
return (function (G__33207,rest33208){
var validate__20206__auto__ = ufv___33212.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33220 = cljs.core.list_STAR_.call(null,G__33207,rest33208);
var temp__4425__auto___33221 = input_checker33205_33215.call(null,args__20207__auto___33220);
if(cljs.core.truth_(temp__4425__auto___33221)){
var error__20208__auto___33222 = temp__4425__auto___33221;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__20208__auto___33222)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33204_33214,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33220,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33222], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33207;
var children = rest33208;
while(true){
var vec__33211 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__33211,(0),null);
var props = cljs.core.nth.call(null,vec__33211,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33223 = output_checker33206_33216.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33223)){
var error__20208__auto___33224 = temp__4425__auto___33223;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__20208__auto___33224)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33203_33213,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33224], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216){
return (function (seq33209){
var G__33210 = cljs.core.first.call(null,seq33209);
var seq33209__$1 = cljs.core.next.call(null,seq33209);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__33210,seq33209__$1);
});})(ufv___33212,output_schema33203_33213,input_schema33204_33214,input_checker33205_33215,output_checker33206_33216))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema33203_33213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33204_33214], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__29701__auto___33254 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33229 = schema.core.Any;
var input_schema33230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33228","map33228",423746970,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33231 = schema.core.checker.call(null,input_schema33230);
var output_checker33232 = schema.core.checker.call(null,output_schema33229);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function om_bootstrap$button$constructor33226(G__33233){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33233], null);
var temp__4425__auto___33256 = input_checker33231.call(null,args__20207__auto___33255);
if(cljs.core.truth_(temp__4425__auto___33256)){
var error__20208__auto___33257 = temp__4425__auto___33256;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33226","constructor33226",-1624562625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33257)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33230,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33255,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33257], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map33228 = G__33233;
while(true){
if(cljs.core.map_QMARK_.call(null,map33228)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33228)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33228,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t33240 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t33240 = (function (owner,output_checker33232,output_schema33229,validate__20206__auto__,G__33233,map33228,ufv__,input_checker33231,constructor33226,input_schema33230,meta33241){
this.owner = owner;
this.output_checker33232 = output_checker33232;
this.output_schema33229 = output_schema33229;
this.validate__20206__auto__ = validate__20206__auto__;
this.G__33233 = G__33233;
this.map33228 = map33228;
this.ufv__ = ufv__;
this.input_checker33231 = input_checker33231;
this.constructor33226 = constructor33226;
this.input_schema33230 = input_schema33230;
this.meta33241 = meta33241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t33240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (_33242,meta33241__$1){
var self__ = this;
var _33242__$1 = this;
return (new om_bootstrap.button.t33240(self__.owner,self__.output_checker33232,self__.output_schema33229,self__.validate__20206__auto__,self__.G__33233,self__.map33228,self__.ufv__,self__.input_checker33231,self__.constructor33226,self__.input_schema33230,meta33241__$1));
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.t33240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (_33242){
var self__ = this;
var _33242__$1 = this;
return self__.meta33241;
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.t33240.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t33240.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.t33240.prototype.om$core$IRender$ = true;

om_bootstrap.button.t33240.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__33243 = om.core.get_props.call(null,self__.owner);
var map__33243__$1 = ((((!((map__33243 == null)))?((((map__33243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33243):map__33243);
var opts = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33244 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__33244,(0),null);
var props = cljs.core.nth.call(null,vec__33244,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__33243,map__33243__$1,opts,children,vec__33244,bs,props,classes,___$1,owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (e){
var temp__4425__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var on_select = temp__4425__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__33243,map__33243__$1,opts,children,vec__33244,bs,props,classes,___$1,owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.t33240.getBasis = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker33232","output-checker33232",1966750958,null),new cljs.core.Symbol(null,"output-schema33229","output-schema33229",1110277168,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33233","G__33233",1890882005,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map33228","map33228",423746970,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-checker33231","input-checker33231",1296757597,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33226","constructor33226",-1624562625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema33230","input-schema33230",1852471839,null),new cljs.core.Symbol(null,"meta33241","meta33241",-1465349928,null)], null);
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.t33240.cljs$lang$type = true;

om_bootstrap.button.t33240.cljs$lang$ctorStr = "om-bootstrap.button/t33240";

om_bootstrap.button.t33240.cljs$lang$ctorPrWriter = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.button/t33240");
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

om_bootstrap.button.__GT_t33240 = ((function (owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232){
return (function om_bootstrap$button$constructor33226_$___GT_t33240(owner__$1,output_checker33232__$1,output_schema33229__$1,validate__20206__auto____$1,G__33233__$1,map33228__$1,ufv____$1,input_checker33231__$1,constructor33226__$1,input_schema33230__$1,meta33241){
return (new om_bootstrap.button.t33240(owner__$1,output_checker33232__$1,output_schema33229__$1,validate__20206__auto____$1,G__33233__$1,map33228__$1,ufv____$1,input_checker33231__$1,constructor33226__$1,input_schema33230__$1,meta33241));
});})(owner,validate__20206__auto__,ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
;

}

return (new om_bootstrap.button.t33240(owner,output_checker33232,output_schema33229,validate__20206__auto__,G__33233,map33228,ufv__,input_checker33231,om_bootstrap$button$constructor33226,input_schema33230,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33258 = output_checker33232.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33258)){
var error__20208__auto___33259 = temp__4425__auto___33258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33226","constructor33226",-1624562625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33229,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33259], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema33229,input_schema33230,input_checker33231,output_checker33232))
,schema.core.make_fn_schema.call(null,output_schema33229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33230], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 * wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__29701__auto___33254){
return (function om_bootstrap$button$menu_item_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___33260 = arguments.length;
var i__19924__auto___33261 = (0);
while(true){
if((i__19924__auto___33261 < len__19923__auto___33260)){
args__19930__auto__.push((arguments[i__19924__auto___33261]));

var G__33262 = (i__19924__auto___33261 + (1));
i__19924__auto___33261 = G__33262;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___33254))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___33254){
return (function (data__29702__auto__,owner33225,p__33249){
var vec__33250 = p__33249;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__33250,(0),null);
return component_fnk__29701__auto___33254.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33225,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___33254))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___33254){
return (function (seq33246){
var G__33247 = cljs.core.first.call(null,seq33246);
var seq33246__$1 = cljs.core.next.call(null,seq33246);
var G__33248 = cljs.core.first.call(null,seq33246__$1);
var seq33246__$2 = cljs.core.next.call(null,seq33246__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33247,G__33248,seq33246__$2);
});})(component_fnk__29701__auto___33254))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(){
var args33251 = [];
var len__19923__auto___33263 = arguments.length;
var i__19924__auto___33264 = (0);
while(true){
if((i__19924__auto___33264 < len__19923__auto___33263)){
args33251.push((arguments[i__19924__auto___33264]));

var G__33265 = (i__19924__auto___33264 + (1));
i__19924__auto___33264 = G__33265;
continue;
} else {
}
break;
}

var G__33253 = args33251.length;
switch (G__33253) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33251.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__29670__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m33227){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__29670__auto__,m33227);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33275 = schema.utils.use_fn_validation;
var output_schema33267_33276 = om_bootstrap.types.Component;
var input_schema33268_33277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker33269_33278 = schema.core.checker.call(null,input_schema33268_33277);
var output_checker33270_33279 = schema.core.checker.call(null,output_schema33267_33276);
/**
 * Inputs: [opts :- MenuItem & children]
 * Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279){
return (function om_bootstrap$button$menu_item(){
var args__19930__auto__ = [];
var len__19923__auto___33280 = arguments.length;
var i__19924__auto___33281 = (0);
while(true){
if((i__19924__auto___33281 < len__19923__auto___33280)){
args__19930__auto__.push((arguments[i__19924__auto___33281]));

var G__33282 = (i__19924__auto___33281 + (1));
i__19924__auto___33281 = G__33282;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279){
return (function (G__33271,rest33272){
var validate__20206__auto__ = ufv___33275.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33283 = cljs.core.list_STAR_.call(null,G__33271,rest33272);
var temp__4425__auto___33284 = input_checker33269_33278.call(null,args__20207__auto___33283);
if(cljs.core.truth_(temp__4425__auto___33284)){
var error__20208__auto___33285 = temp__4425__auto___33284;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33268_33277,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33283,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33285], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33271;
var children = rest33272;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33286 = output_checker33270_33279.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33286)){
var error__20208__auto___33287 = temp__4425__auto___33286;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33267_33276,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33287], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279){
return (function (seq33273){
var G__33274 = cljs.core.first.call(null,seq33273);
var seq33273__$1 = cljs.core.next.call(null,seq33273);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__33274,seq33273__$1);
});})(ufv___33275,output_schema33267_33276,input_schema33268_33277,input_checker33269_33278,output_checker33270_33279))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema33267_33276,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33268_33277], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___33298 = schema.utils.use_fn_validation;
var output_schema33289_33299 = om_bootstrap.types.Component;
var input_schema33290_33300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker33291_33301 = schema.core.checker.call(null,input_schema33290_33300);
var output_checker33292_33302 = schema.core.checker.call(null,output_schema33289_33299);
/**
 * Inputs: [opts :- DropdownMenu & children]
 * Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302){
return (function om_bootstrap$button$dropdown_menu(){
var args__19930__auto__ = [];
var len__19923__auto___33303 = arguments.length;
var i__19924__auto___33304 = (0);
while(true){
if((i__19924__auto___33304 < len__19923__auto___33303)){
args__19930__auto__.push((arguments[i__19924__auto___33304]));

var G__33305 = (i__19924__auto___33304 + (1));
i__19924__auto___33304 = G__33305;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302){
return (function (G__33293,rest33294){
var validate__20206__auto__ = ufv___33298.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33306 = cljs.core.list_STAR_.call(null,G__33293,rest33294);
var temp__4425__auto___33307 = input_checker33291_33301.call(null,args__20207__auto___33306);
if(cljs.core.truth_(temp__4425__auto___33307)){
var error__20208__auto___33308 = temp__4425__auto___33307;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33308)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33290_33300,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33306,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33308], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33293;
var children = rest33294;
while(true){
var vec__33297 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__33297,(0),null);
var props = cljs.core.nth.call(null,vec__33297,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var on_select = temp__4423__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4423__auto__,vec__33297,bs,props,classes,ul_attrs,validate__20206__auto__,ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302){
return (function (p1__33288_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__33288_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4423__auto__,vec__33297,bs,props,classes,ul_attrs,validate__20206__auto__,ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33309 = output_checker33292_33302.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33309)){
var error__20208__auto___33310 = temp__4425__auto___33309;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33310)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33289_33299,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33310], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302){
return (function (seq33295){
var G__33296 = cljs.core.first.call(null,seq33295);
var seq33295__$1 = cljs.core.next.call(null,seq33295);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__33296,seq33295__$1);
});})(ufv___33298,output_schema33289_33299,input_schema33290_33300,input_checker33291_33301,output_checker33292_33302))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema33289_33299,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33290_33300], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__29672__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__29672__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__29672__auto__;
})();

var component_fnk__29701__auto___33341 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33316 = schema.core.Any;
var input_schema33317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33315","map33315",-1953304390,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33318 = schema.core.checker.call(null,input_schema33317);
var output_checker33319 = schema.core.checker.call(null,output_schema33316);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function om_bootstrap$button$constructor33313(G__33320){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33320], null);
var temp__4425__auto___33343 = input_checker33318.call(null,args__20207__auto___33342);
if(cljs.core.truth_(temp__4425__auto___33343)){
var error__20208__auto___33344 = temp__4425__auto___33343;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33313","constructor33313",108689972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33344)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33317,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33342,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33344], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map33315 = G__33320;
while(true){
if(cljs.core.map_QMARK_.call(null,map33315)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33315)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33315,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map33315,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t33327 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t33327 = (function (G__33320,owner,output_checker33319,output_schema33316,validate__20206__auto__,constructor33313,state,input_schema33317,map33315,input_checker33318,ufv__,meta33328){
this.G__33320 = G__33320;
this.owner = owner;
this.output_checker33319 = output_checker33319;
this.output_schema33316 = output_schema33316;
this.validate__20206__auto__ = validate__20206__auto__;
this.constructor33313 = constructor33313;
this.state = state;
this.input_schema33317 = input_schema33317;
this.map33315 = map33315;
this.input_checker33318 = input_checker33318;
this.ufv__ = ufv__;
this.meta33328 = meta33328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t33327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (_33329,meta33328__$1){
var self__ = this;
var _33329__$1 = this;
return (new om_bootstrap.button.t33327(self__.G__33320,self__.owner,self__.output_checker33319,self__.output_schema33316,self__.validate__20206__auto__,self__.constructor33313,self__.state,self__.input_schema33317,self__.map33315,self__.input_checker33318,self__.ufv__,meta33328__$1));
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.t33327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (_33329){
var self__ = this;
var _33329__$1 = this;
return self__.meta33328;
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.t33327.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t33327.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.t33327.prototype.om$core$IRender$ = true;

om_bootstrap.button.t33327.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__33330 = om.core.get_props.call(null,self__.owner);
var map__33330__$1 = ((((!((map__33330 == null)))?((((map__33330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33330):map__33330);
var opts = cljs.core.get.call(null,map__33330__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33331 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__33331,(0),null);
var props = cljs.core.nth.call(null,vec__33331,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
], null);
var update_child_props = ((function (open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__18884__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (key){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (p1__33311_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__33311_SHARP_,update_child_props);
});})(open_QMARK_,map__33330,map__33330__$1,opts,children,vec__33331,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
,children))], null));
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.t33327.getBasis = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__33320","G__33320",-1321656316,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker33319","output-checker33319",-1763218714,null),new cljs.core.Symbol(null,"output-schema33316","output-schema33316",96165040,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33313","constructor33313",108689972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema33317","input-schema33317",-1996243848,null),new cljs.core.Symbol(null,"map33315","map33315",-1953304390,null),new cljs.core.Symbol(null,"input-checker33318","input-checker33318",873515485,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta33328","meta33328",-1827373950,null)], null);
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.t33327.cljs$lang$type = true;

om_bootstrap.button.t33327.cljs$lang$ctorStr = "om-bootstrap.button/t33327";

om_bootstrap.button.t33327.cljs$lang$ctorPrWriter = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.button/t33327");
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

om_bootstrap.button.__GT_t33327 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319){
return (function om_bootstrap$button$constructor33313_$___GT_t33327(G__33320__$1,owner__$1,output_checker33319__$1,output_schema33316__$1,validate__20206__auto____$1,constructor33313__$1,state__$1,input_schema33317__$1,map33315__$1,input_checker33318__$1,ufv____$1,meta33328){
return (new om_bootstrap.button.t33327(G__33320__$1,owner__$1,output_checker33319__$1,output_schema33316__$1,validate__20206__auto____$1,constructor33313__$1,state__$1,input_schema33317__$1,map33315__$1,input_checker33318__$1,ufv____$1,meta33328));
});})(state,owner,validate__20206__auto__,ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
;

}

return (new om_bootstrap.button.t33327(G__33320,owner,output_checker33319,output_schema33316,validate__20206__auto__,om_bootstrap$button$constructor33313,state,input_schema33317,map33315,input_checker33318,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33345 = output_checker33319.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33345)){
var error__20208__auto___33346 = temp__4425__auto___33345;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33313","constructor33313",108689972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33316,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33346], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema33316,input_schema33317,input_checker33318,output_checker33319))
,schema.core.make_fn_schema.call(null,output_schema33316,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33317], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__29701__auto___33341){
return (function om_bootstrap$button$dropdown_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___33347 = arguments.length;
var i__19924__auto___33348 = (0);
while(true){
if((i__19924__auto___33348 < len__19923__auto___33347)){
args__19930__auto__.push((arguments[i__19924__auto___33348]));

var G__33349 = (i__19924__auto___33348 + (1));
i__19924__auto___33348 = G__33349;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___33341))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___33341){
return (function (data__29702__auto__,owner33312,p__33336){
var vec__33337 = p__33336;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__33337,(0),null);
return component_fnk__29701__auto___33341.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33312),new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33312,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___33341))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___33341){
return (function (seq33333){
var G__33334 = cljs.core.first.call(null,seq33333);
var seq33333__$1 = cljs.core.next.call(null,seq33333);
var G__33335 = cljs.core.first.call(null,seq33333__$1);
var seq33333__$2 = cljs.core.next.call(null,seq33333__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33334,G__33335,seq33333__$2);
});})(component_fnk__29701__auto___33341))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(){
var args33338 = [];
var len__19923__auto___33350 = arguments.length;
var i__19924__auto___33351 = (0);
while(true){
if((i__19924__auto___33351 < len__19923__auto___33350)){
args33338.push((arguments[i__19924__auto___33351]));

var G__33352 = (i__19924__auto___33351 + (1));
i__19924__auto___33351 = G__33352;
continue;
} else {
}
break;
}

var G__33340 = args33338.length;
switch (G__33340) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33338.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__29670__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m33314){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__29670__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m33314));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33362 = schema.utils.use_fn_validation;
var output_schema33354_33363 = om_bootstrap.types.Component;
var input_schema33355_33364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker33356_33365 = schema.core.checker.call(null,input_schema33355_33364);
var output_checker33357_33366 = schema.core.checker.call(null,output_schema33354_33363);
/**
 * Inputs: [opts :- DropdownButton & children]
 * Returns: t/Component
 * 
 * Returns a dropdown button component. The component manages its own
 * dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366){
return (function om_bootstrap$button$dropdown(){
var args__19930__auto__ = [];
var len__19923__auto___33367 = arguments.length;
var i__19924__auto___33368 = (0);
while(true){
if((i__19924__auto___33368 < len__19923__auto___33367)){
args__19930__auto__.push((arguments[i__19924__auto___33368]));

var G__33369 = (i__19924__auto___33368 + (1));
i__19924__auto___33368 = G__33369;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366){
return (function (G__33358,rest33359){
var validate__20206__auto__ = ufv___33362.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33370 = cljs.core.list_STAR_.call(null,G__33358,rest33359);
var temp__4425__auto___33371 = input_checker33356_33365.call(null,args__20207__auto___33370);
if(cljs.core.truth_(temp__4425__auto___33371)){
var error__20208__auto___33372 = temp__4425__auto___33371;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__20208__auto___33372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33355_33364,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33370,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33372], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33358;
var children = rest33359;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33373 = output_checker33357_33366.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33373)){
var error__20208__auto___33374 = temp__4425__auto___33373;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__20208__auto___33374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33354_33363,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33374], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366){
return (function (seq33360){
var G__33361 = cljs.core.first.call(null,seq33360);
var seq33360__$1 = cljs.core.next.call(null,seq33360);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__33361,seq33360__$1);
});})(ufv___33362,output_schema33354_33363,input_schema33355_33364,input_checker33356_33365,output_checker33357_33366))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema33354_33363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33355_33364], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__29672__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__29672__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__29672__auto__;
})();

var component_fnk__29701__auto___33404 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema33379 = schema.core.Any;
var input_schema33380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map33378","map33378",-1994396868,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker33381 = schema.core.checker.call(null,input_schema33380);
var output_checker33382 = schema.core.checker.call(null,output_schema33379);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function om_bootstrap$button$constructor33376(G__33383){
var validate__20206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33383], null);
var temp__4425__auto___33406 = input_checker33381.call(null,args__20207__auto___33405);
if(cljs.core.truth_(temp__4425__auto___33406)){
var error__20208__auto___33407 = temp__4425__auto___33406;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33376","constructor33376",-1570460405,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33407)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33380,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33405,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33407], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var map33378 = G__33383;
while(true){
if(cljs.core.map_QMARK_.call(null,map33378)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map33378)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map33378,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map33378,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t33390 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t33390 = (function (input_checker33381,output_checker33382,owner,constructor33376,output_schema33379,validate__20206__auto__,state,G__33383,map33378,ufv__,input_schema33380,meta33391){
this.input_checker33381 = input_checker33381;
this.output_checker33382 = output_checker33382;
this.owner = owner;
this.constructor33376 = constructor33376;
this.output_schema33379 = output_schema33379;
this.validate__20206__auto__ = validate__20206__auto__;
this.state = state;
this.G__33383 = G__33383;
this.map33378 = map33378;
this.ufv__ = ufv__;
this.input_schema33380 = input_schema33380;
this.meta33391 = meta33391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t33390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (_33392,meta33391__$1){
var self__ = this;
var _33392__$1 = this;
return (new om_bootstrap.button.t33390(self__.input_checker33381,self__.output_checker33382,self__.owner,self__.constructor33376,self__.output_schema33379,self__.validate__20206__auto__,self__.state,self__.G__33383,self__.map33378,self__.ufv__,self__.input_schema33380,meta33391__$1));
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.t33390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (_33392){
var self__ = this;
var _33392__$1 = this;
return self__.meta33391;
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.t33390.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t33390.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.t33390.prototype.om$core$IRender$ = true;

om_bootstrap.button.t33390.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__33393 = om.core.get_props.call(null,self__.owner);
var map__33393__$1 = ((((!((map__33393 == null)))?((((map__33393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33393):map__33393);
var opts = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__33393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__33394 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__33394,(0),null);
var props = cljs.core.nth.call(null,vec__33394,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (k){
var temp__4425__auto___33408 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4425__auto___33408)){
var f_33409 = temp__4425__auto___33408;
f_33409.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__33393,map__33393__$1,opts,children,vec__33394,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.t33390.getBasis = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker33381","input-checker33381",185649377,null),new cljs.core.Symbol(null,"output-checker33382","output-checker33382",1695172194,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33376","constructor33376",-1570460405,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema33379","output-schema33379",-704459378,null),new cljs.core.Symbol(null,"validate__20206__auto__","validate__20206__auto__",-582038064,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__33383","G__33383",-278447083,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"map33378","map33378",-1994396868,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema33380","input-schema33380",1643757277,null),new cljs.core.Symbol(null,"meta33391","meta33391",-1005958867,null)], null);
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.t33390.cljs$lang$type = true;

om_bootstrap.button.t33390.cljs$lang$ctorStr = "om-bootstrap.button/t33390";

om_bootstrap.button.t33390.cljs$lang$ctorPrWriter = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om-bootstrap.button/t33390");
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

om_bootstrap.button.__GT_t33390 = ((function (state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382){
return (function om_bootstrap$button$constructor33376_$___GT_t33390(input_checker33381__$1,output_checker33382__$1,owner__$1,constructor33376__$1,output_schema33379__$1,validate__20206__auto____$1,state__$1,G__33383__$1,map33378__$1,ufv____$1,input_schema33380__$1,meta33391){
return (new om_bootstrap.button.t33390(input_checker33381__$1,output_checker33382__$1,owner__$1,constructor33376__$1,output_schema33379__$1,validate__20206__auto____$1,state__$1,G__33383__$1,map33378__$1,ufv____$1,input_schema33380__$1,meta33391));
});})(state,owner,validate__20206__auto__,ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
;

}

return (new om_bootstrap.button.t33390(input_checker33381,output_checker33382,owner,om_bootstrap$button$constructor33376,output_schema33379,validate__20206__auto__,state,G__33383,map33378,ufv__,input_schema33380,null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33410 = output_checker33382.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33410)){
var error__20208__auto___33411 = temp__4425__auto___33410;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor33376","constructor33376",-1570460405,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33411)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33379,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33411], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv__,output_schema33379,input_schema33380,input_checker33381,output_checker33382))
,schema.core.make_fn_schema.call(null,output_schema33379,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33380], null)));
})();
/**
 * Generates a split button component responsible for its own
 * toggled state. The open? toggling is handled through a dropdown
 * mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__29701__auto___33404){
return (function om_bootstrap$button$split_STAR_(){
var args__19930__auto__ = [];
var len__19923__auto___33412 = arguments.length;
var i__19924__auto___33413 = (0);
while(true){
if((i__19924__auto___33413 < len__19923__auto___33412)){
args__19930__auto__.push((arguments[i__19924__auto___33413]));

var G__33414 = (i__19924__auto___33413 + (1));
i__19924__auto___33413 = G__33414;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((2) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((2)),(0))):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19931__auto__);
});})(component_fnk__29701__auto___33404))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__29701__auto___33404){
return (function (data__29702__auto__,owner33375,p__33399){
var vec__33400 = p__33399;
var opts__29703__auto__ = cljs.core.nth.call(null,vec__33400,(0),null);
return component_fnk__29701__auto___33404.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner33375),new cljs.core.Keyword(null,"opts","opts",155075701),opts__29703__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner33375,new cljs.core.Keyword(null,"data","data",-232669377),data__29702__auto__], null));
});})(component_fnk__29701__auto___33404))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__29701__auto___33404){
return (function (seq33396){
var G__33397 = cljs.core.first.call(null,seq33396);
var seq33396__$1 = cljs.core.next.call(null,seq33396);
var G__33398 = cljs.core.first.call(null,seq33396__$1);
var seq33396__$2 = cljs.core.next.call(null,seq33396__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33397,G__33398,seq33396__$2);
});})(component_fnk__29701__auto___33404))
;

om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(){
var args33401 = [];
var len__19923__auto___33415 = arguments.length;
var i__19924__auto___33416 = (0);
while(true){
if((i__19924__auto___33416 < len__19923__auto___33415)){
args33401.push((arguments[i__19924__auto___33416]));

var G__33417 = (i__19924__auto___33416 + (1));
i__19924__auto___33416 = G__33417;
continue;
} else {
}
break;
}

var G__33403 = args33401.length;
switch (G__33403) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33401.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__29670__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__29670__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__29670__auto__,m33377){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__29670__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m33377));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;
var ufv___33427 = schema.utils.use_fn_validation;
var output_schema33419_33428 = schema.core.Any;
var input_schema33420_33429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker33421_33430 = schema.core.checker.call(null,input_schema33420_33429);
var output_checker33422_33431 = schema.core.checker.call(null,output_schema33419_33428);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431){
return (function om_bootstrap$button$split(){
var args__19930__auto__ = [];
var len__19923__auto___33432 = arguments.length;
var i__19924__auto___33433 = (0);
while(true){
if((i__19924__auto___33433 < len__19923__auto___33432)){
args__19930__auto__.push((arguments[i__19924__auto___33433]));

var G__33434 = (i__19924__auto___33433 + (1));
i__19924__auto___33433 = G__33434;
continue;
} else {
}
break;
}

var argseq__19931__auto__ = ((((1) < args__19930__auto__.length))?(new cljs.core.IndexedSeq(args__19930__auto__.slice((1)),(0))):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19931__auto__);
});})(ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431){
return (function (G__33423,rest33424){
var validate__20206__auto__ = ufv___33427.get_cell();
if(cljs.core.truth_(validate__20206__auto__)){
var args__20207__auto___33435 = cljs.core.list_STAR_.call(null,G__33423,rest33424);
var temp__4425__auto___33436 = input_checker33421_33430.call(null,args__20207__auto___33435);
if(cljs.core.truth_(temp__4425__auto___33436)){
var error__20208__auto___33437 = temp__4425__auto___33436;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33420_33429,new cljs.core.Keyword(null,"value","value",305978217),args__20207__auto___33435,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33437], null));
} else {
}
} else {
}

var o__20209__auto__ = (function (){var opts = G__33423;
var children = rest33424;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__20206__auto__)){
var temp__4425__auto___33438 = output_checker33422_33431.call(null,o__20209__auto__);
if(cljs.core.truth_(temp__4425__auto___33438)){
var error__20208__auto___33439 = temp__4425__auto___33438;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__20208__auto___33439)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33419_33428,new cljs.core.Keyword(null,"value","value",305978217),o__20209__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__20208__auto___33439], null));
} else {
}
} else {
}

return o__20209__auto__;
});})(ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431){
return (function (seq33425){
var G__33426 = cljs.core.first.call(null,seq33425);
var seq33425__$1 = cljs.core.next.call(null,seq33425);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__33426,seq33425__$1);
});})(ufv___33427,output_schema33419_33428,input_schema33420_33429,input_checker33421_33430,output_checker33422_33431))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema33419_33428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33420_33429], null)));

//# sourceMappingURL=button.js.map?rel=1445816810192