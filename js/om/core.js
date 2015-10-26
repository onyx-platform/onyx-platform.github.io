// Compiled by ClojureScript 1.7.48 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = {};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.display_name[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.display_name["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


om.core.IInitState = {};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.init_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.init_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


om.core.IShouldUpdate = {};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.should_update[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,next_props,next_state);
} else {
var m__19521__auto____$1 = (om.core.should_update["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


om.core.IWillMount = {};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.will_mount[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.will_mount["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


om.core.IDidMount = {};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.did_mount[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.did_mount["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


om.core.IWillUnmount = {};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.will_unmount[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


om.core.IWillUpdate = {};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.will_update[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,next_props,next_state);
} else {
var m__19521__auto____$1 = (om.core.will_update["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


om.core.IDidUpdate = {};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.did_update[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__19521__auto____$1 = (om.core.did_update["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


om.core.IWillReceiveProps = {};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.will_receive_props[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,next_props);
} else {
var m__19521__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


om.core.IRender = {};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.render[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core.render["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


om.core.IRenderProps = {};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.render_props[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,props,state);
} else {
var m__19521__auto____$1 = (om.core.render_props["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


om.core.IRenderState = {};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core.render_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,state);
} else {
var m__19521__auto____$1 = (om.core.render_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


om.core.ICheckState = {};


om.core.IOmSwap = {};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__19521__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


om.core.IGetState = {};

om.core._get_state = (function om$core$_get_state(){
var args36325 = [];
var len__19923__auto___36328 = arguments.length;
var i__19924__auto___36329 = (0);
while(true){
if((i__19924__auto___36329 < len__19923__auto___36328)){
args36325.push((arguments[i__19924__auto___36329]));

var G__36330 = (i__19924__auto___36329 + (1));
i__19924__auto___36329 = G__36330;
continue;
} else {
}
break;
}

var G__36327 = args36325.length;
switch (G__36327) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36325.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._get_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,ks);
} else {
var m__19521__auto____$1 = (om.core._get_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


om.core.IGetRenderState = {};

om.core._get_render_state = (function om$core$_get_render_state(){
var args36334 = [];
var len__19923__auto___36337 = arguments.length;
var i__19924__auto___36338 = (0);
while(true){
if((i__19924__auto___36338 < len__19923__auto___36337)){
args36334.push((arguments[i__19924__auto___36338]));

var G__36339 = (i__19924__auto___36338 + (1));
i__19924__auto___36338 = G__36339;
continue;
} else {
}
break;
}

var G__36336 = args36334.length;
switch (G__36336) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36334.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_render_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_render_state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,ks);
} else {
var m__19521__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


om.core.ISetState = {};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(){
var args36343 = [];
var len__19923__auto___36346 = arguments.length;
var i__19924__auto___36347 = (0);
while(true){
if((i__19924__auto___36347 < len__19923__auto___36346)){
args36343.push((arguments[i__19924__auto___36347]));

var G__36348 = (i__19924__auto___36347 + (1));
i__19924__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var G__36345 = args36343.length;
switch (G__36345) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36343.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,val,render);
} else {
var m__19521__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,ks,val,render);
} else {
var m__19521__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


om.core.IRenderQueue = {};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_queue[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._get_queue["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,c);
} else {
var m__19521__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


om.core.IValue = {};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__19520__auto__ = (((x == null))?null:x);
var m__19521__auto__ = (om.core._value[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,x);
} else {
var m__19521__auto____$1 = (om.core._value["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = {};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__19520__auto__ = (((cursor == null))?null:cursor);
var m__19521__auto__ = (om.core._path[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,cursor);
} else {
var m__19521__auto____$1 = (om.core._path["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__19520__auto__ = (((cursor == null))?null:cursor);
var m__19521__auto__ = (om.core._state[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,cursor);
} else {
var m__19521__auto____$1 = (om.core._state["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


om.core.IToCursor = {};

om.core._to_cursor = (function om$core$_to_cursor(){
var args36358 = [];
var len__19923__auto___36361 = arguments.length;
var i__19924__auto___36362 = (0);
while(true){
if((i__19924__auto___36362 < len__19923__auto___36361)){
args36358.push((arguments[i__19924__auto___36362]));

var G__36363 = (i__19924__auto___36362 + (1));
i__19924__auto___36362 = G__36363;
continue;
} else {
}
break;
}

var G__36360 = args36358.length;
switch (G__36360) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36358.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__19520__auto__ = (((value == null))?null:value);
var m__19521__auto__ = (om.core._to_cursor[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,value,state);
} else {
var m__19521__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__19520__auto__ = (((value == null))?null:value);
var m__19521__auto__ = (om.core._to_cursor[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,value,state,path);
} else {
var m__19521__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


om.core.ICursorDerive = {};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__19520__auto__ = (((cursor == null))?null:cursor);
var m__19521__auto__ = (om.core._derive[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,cursor,derived,state,path);
} else {
var m__19521__auto____$1 = (om.core._derive["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = {};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__19520__auto__ = (((cursor == null))?null:cursor);
var m__19521__auto__ = (om.core._transact_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,cursor,korks,f,tag);
} else {
var m__19521__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


om.core.INotify = {};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__19520__auto__ = (((x == null))?null:x);
var m__19521__auto__ = (om.core._listen_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,x,key,tx_listen);
} else {
var m__19521__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__19520__auto__ = (((x == null))?null:x);
var m__19521__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,x,key);
} else {
var m__19521__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__19520__auto__ = (((x == null))?null:x);
var m__19521__auto__ = (om.core._notify_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__19521__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


om.core.IRootProperties = {};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,id,p,val);
} else {
var m__19521__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,id,p);
} else {
var m__19521__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,id);
} else {
var m__19521__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_property[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,id,p);
} else {
var m__19521__auto____$1 = (om.core._get_property["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


om.core.IRootKey = {};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__19520__auto__ = (((cursor == null))?null:cursor);
var m__19521__auto__ = (om.core._root_key[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,cursor);
} else {
var m__19521__auto____$1 = (om.core._root_key["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


om.core.IAdapt = {};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._adapt[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,other);
} else {
var m__19521__auto____$1 = (om.core._adapt["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = {};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,c);
} else {
var m__19521__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$,c);
} else {
var m__19521__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__19520__auto__ = (((this$ == null))?null:this$);
var m__19521__auto__ = (om.core._get_deps[goog.typeOf(x__19520__auto__)]);
if(!((m__19521__auto__ == null))){
return m__19521__auto__.call(null,this$);
} else {
var m__19521__auto____$1 = (om.core._get_deps["_"]);
if(!((m__19521__auto____$1 == null))){
return m__19521__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(){
var args36383 = [];
var len__19923__auto___36387 = arguments.length;
var i__19924__auto___36388 = (0);
while(true){
if((i__19924__auto___36388 < len__19923__auto___36387)){
args36383.push((arguments[i__19924__auto___36388]));

var G__36389 = (i__19924__auto___36388 + (1));
i__19924__auto___36388 = G__36389;
continue;
} else {
}
break;
}

var G__36385 = args36383.length;
switch (G__36385) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36383.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__36386 = (x.props["__om_cursor"]);
var G__36386__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__36386,korks__$1):G__36386);
return G__36386__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(){
var args36391 = [];
var len__19923__auto___36394 = arguments.length;
var i__19924__auto___36395 = (0);
while(true){
if((i__19924__auto___36395 < len__19923__auto___36394)){
args36391.push((arguments[i__19924__auto___36395]));

var G__36396 = (i__19924__auto___36395 + (1));
i__19924__auto___36395 = G__36396;
continue;
} else {
}
break;
}

var G__36393 = args36391.length;
switch (G__36393) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36391.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(){
var args36398 = [];
var len__19923__auto___36401 = arguments.length;
var i__19924__auto___36402 = (0);
while(true){
if((i__19924__auto___36402 < len__19923__auto___36401)){
args36398.push((arguments[i__19924__auto___36402]));

var G__36403 = (i__19924__auto___36402 + (1));
i__19924__auto___36402 = G__36403;
continue;
} else {
}
break;
}

var G__36400 = args36398.length;
switch (G__36400) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36398.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__36406 = state;
(G__36406["__om_prev_state"] = (state["__om_state"]));

(G__36406["__om_state"] = pending_state);

(G__36406["__om_pending_state"] = null);

return G__36406;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(){
var args36407 = [];
var len__19923__auto___36410 = arguments.length;
var i__19924__auto___36411 = (0);
while(true){
if((i__19924__auto___36411 < len__19923__auto___36410)){
args36407.push((arguments[i__19924__auto___36411]));

var G__36412 = (i__19924__auto___36411 + (1));
i__19924__auto___36411 = G__36412;
continue;
} else {
}
break;
}

var G__36409 = args36407.length;
switch (G__36409) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36407.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__18884__auto__ = props;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__18884__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_36436 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__18884__auto__ = (state_36436["__om_prev_state"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return (state_36436["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__36417 = cljs.core.seq.call(null,refs);
var chunk__36418 = null;
var count__36419 = (0);
var i__36420 = (0);
while(true){
if((i__36420 < count__36419)){
var ref = cljs.core._nth.call(null,chunk__36418,i__36420);
om.core.unobserve.call(null,this$,ref);

var G__36437 = seq__36417;
var G__36438 = chunk__36418;
var G__36439 = count__36419;
var G__36440 = (i__36420 + (1));
seq__36417 = G__36437;
chunk__36418 = G__36438;
count__36419 = G__36439;
i__36420 = G__36440;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__36417);
if(temp__4425__auto____$1){
var seq__36417__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36417__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__36417__$1);
var G__36441 = cljs.core.chunk_rest.call(null,seq__36417__$1);
var G__36442 = c__19668__auto__;
var G__36443 = cljs.core.count.call(null,c__19668__auto__);
var G__36444 = (0);
seq__36417 = G__36441;
chunk__36418 = G__36442;
count__36419 = G__36443;
i__36420 = G__36444;
continue;
} else {
var ref = cljs.core.first.call(null,seq__36417__$1);
om.core.unobserve.call(null,this$,ref);

var G__36445 = cljs.core.next.call(null,seq__36417__$1);
var G__36446 = null;
var G__36447 = (0);
var G__36448 = (0);
seq__36417 = G__36445;
chunk__36418 = G__36446;
count__36419 = G__36447;
i__36420 = G__36448;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18872__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__18872__auto__)){
var and__18872__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__18872__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__18872__auto____$1;
}
} else {
return and__18872__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__18872__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__18872__auto__){
return cljs.core.some.call(null,((function (and__18872__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__36414_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__36414_SHARP_);
});})(and__18872__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__18872__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_36423 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_36424 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_36425 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_36426 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_36427 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_36427;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_36426;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36425;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36424;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_36423;
}}),(function (next_props,next_state){
var this$ = this;
var c_36449 = om.core.children.call(null,this$);
if(((!((c_36449 == null)))?(((false) || (c_36449.om$core$IWillUpdate$))?true:(((!c_36449.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36449):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36449))){
var state_36450 = this$.state;
om.core.will_update.call(null,c_36449,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18884__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__18884__auto__ = id;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_36451 = om.core.children.call(null,this$);
if(((!((c_36451 == null)))?(((false) || (c_36451.om$core$IWillMount$))?true:(((!c_36451.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36451):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36451))){
om.core.will_mount.call(null,c_36451);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x36453 = obj;
x36453.om$core$ISetState$ = true;

x36453.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x36453){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__18872__auto__ = !((app_state == null));
if(and__18872__auto__){
return render;
} else {
return and__18872__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x36453))
;

x36453.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x36453){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__18872__auto__ = !((app_state == null));
if(and__18872__auto__){
return render;
} else {
return and__18872__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x36453))
;

x36453.om$core$IGetRenderState$ = true;

x36453.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x36453){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x36453))
;

x36453.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x36453){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x36453))
;

x36453.om$core$IGetState$ = true;

x36453.om$core$IGetState$_get_state$arity$1 = ((function (x36453){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__18884__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return (state["__om_state"]);
}
});})(x36453))
;

x36453.om$core$IGetState$_get_state$arity$2 = ((function (x36453){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x36453))
;

return x36453;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__18884__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__18884__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_36464 = om.core.children.call(null,this$);
if(((!((c_36464 == null)))?(((false) || (c_36464.om$core$IWillMount$))?true:(((!c_36464.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36464):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_36464))){
om.core.will_mount.call(null,c_36464);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__36458 = cljs.core.seq.call(null,refs);
var chunk__36459 = null;
var count__36460 = (0);
var i__36461 = (0);
while(true){
if((i__36461 < count__36460)){
var ref = cljs.core._nth.call(null,chunk__36459,i__36461);
om.core.unobserve.call(null,this$,ref);

var G__36465 = seq__36458;
var G__36466 = chunk__36459;
var G__36467 = count__36460;
var G__36468 = (i__36461 + (1));
seq__36458 = G__36465;
chunk__36459 = G__36466;
count__36460 = G__36467;
i__36461 = G__36468;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__36458);
if(temp__4425__auto____$1){
var seq__36458__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36458__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__36458__$1);
var G__36469 = cljs.core.chunk_rest.call(null,seq__36458__$1);
var G__36470 = c__19668__auto__;
var G__36471 = cljs.core.count.call(null,c__19668__auto__);
var G__36472 = (0);
seq__36458 = G__36469;
chunk__36459 = G__36470;
count__36460 = G__36471;
i__36461 = G__36472;
continue;
} else {
var ref = cljs.core.first.call(null,seq__36458__$1);
om.core.unobserve.call(null,this$,ref);

var G__36473 = cljs.core.next.call(null,seq__36458__$1);
var G__36474 = null;
var G__36475 = (0);
var G__36476 = (0);
seq__36458 = G__36473;
chunk__36459 = G__36474;
count__36460 = G__36475;
i__36461 = G__36476;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_36477 = this$.props;
var c_36478 = om.core.children.call(null,this$);
if(((!((c_36478 == null)))?(((false) || (c_36478.om$core$IWillUpdate$))?true:(((!c_36478.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36478):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_36478))){
var state_36479 = this$.state;
om.core.will_update.call(null,c_36478,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_36480 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__18884__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x36482 = cljs.core.clj__GT_js.call(null,methods$);
x36482.om$core$ISetState$ = true;

x36482.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x36482){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__18872__auto__ = !((gstate == null));
if(and__18872__auto__){
return render;
} else {
return and__18872__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x36482))
;

x36482.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x36482){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x36482))
;

x36482.om$core$IGetRenderState$ = true;

x36482.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x36482){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x36482))
;

x36482.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x36482){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x36482))
;

x36482.om$core$IGetState$ = true;

x36482.om$core$IGetState$_get_state$arity$1 = ((function (x36482){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__18884__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x36482))
;

x36482.om$core$IGetState$_get_state$arity$2 = ((function (x36482){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x36482))
;

return x36482;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__36486){
var vec__36487 = p__36486;
var k = cljs.core.nth.call(null,vec__36487,(0),null);
var v = cljs.core.nth.call(null,vec__36487,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__36488 = null;
var G__36488__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36488__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36488 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36488__2.call(this,self__,k);
case 3:
return G__36488__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36488.cljs$core$IFn$_invoke$arity$2 = G__36488__2;
G__36488.cljs$core$IFn$_invoke$arity$3 = G__36488__3;
return G__36488;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args36485){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36485)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__36490 = null;
var G__36490__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36490__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36490 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36490__2.call(this,self__,k);
case 3:
return G__36490__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36490.cljs$core$IFn$_invoke$arity$2 = G__36490__2;
G__36490.cljs$core$IFn$_invoke$arity$3 = G__36490__3;
return G__36490;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args36489){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36489)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x36492 = cljs.core.clone.call(null,val);
x36492.cljs$core$IDeref$ = true;

x36492.cljs$core$IDeref$_deref$arity$1 = ((function (x36492){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x36492))
;

x36492.om$core$ICursor$ = true;

x36492.om$core$ICursor$_path$arity$1 = ((function (x36492){
return (function (_){
var ___$1 = this;
return path;
});})(x36492))
;

x36492.om$core$ICursor$_state$arity$1 = ((function (x36492){
return (function (_){
var ___$1 = this;
return state;
});})(x36492))
;

x36492.om$core$ITransact$ = true;

x36492.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36492){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x36492))
;

x36492.cljs$core$IEquiv$ = true;

x36492.cljs$core$IEquiv$_equiv$arity$2 = ((function (x36492){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x36492))
;

return x36492;
});
om.core.to_cursor = (function om$core$to_cursor(){
var args36493 = [];
var len__19923__auto___36498 = arguments.length;
var i__19924__auto___36499 = (0);
while(true){
if((i__19924__auto___36499 < len__19923__auto___36498)){
args36493.push((arguments[i__19924__auto___36499]));

var G__36500 = (i__19924__auto___36499 + (1));
i__19924__auto___36499 = G__36500;
continue;
} else {
}
break;
}

var G__36495 = args36493.length;
switch (G__36495) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36493.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x36505 = cljs.core.clone.call(null,x);
x36505.cljs$core$ICloneable$ = true;

x36505.cljs$core$ICloneable$_clone$arity$1 = ((function (x36505){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x36505))
;

x36505.om$core$IAdapt$ = true;

x36505.om$core$IAdapt$_adapt$arity$2 = ((function (x36505){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x36505))
;

x36505.om$core$ICursorDerive$ = true;

x36505.om$core$ICursorDerive$_derive$arity$4 = ((function (x36505){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x36505))
;

x36505.om$core$ITransact$ = true;

x36505.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36505){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x36505))
;

return x36505;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x36513 = cljs.core.clone.call(null,cursor);
x36513.om$core$ICursorDerive$ = true;

x36513.om$core$ICursorDerive$_derive$arity$4 = ((function (x36513,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x36513,path,storage))
;

x36513.om$core$IOmRef$ = true;

x36513.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x36513,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x36513,path,storage))
;

x36513.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x36513,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x36513,path,storage))
;

x36513.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x36513,path,storage){
return (function (_){
var ___$1 = this;
var seq__36514 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__36515 = null;
var count__36516 = (0);
var i__36517 = (0);
while(true){
if((i__36517 < count__36516)){
var c = cljs.core._nth.call(null,chunk__36515,i__36517);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__36518 = seq__36514;
var G__36519 = chunk__36515;
var G__36520 = count__36516;
var G__36521 = (i__36517 + (1));
seq__36514 = G__36518;
chunk__36515 = G__36519;
count__36516 = G__36520;
i__36517 = G__36521;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36514);
if(temp__4425__auto__){
var seq__36514__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36514__$1)){
var c__19668__auto__ = cljs.core.chunk_first.call(null,seq__36514__$1);
var G__36522 = cljs.core.chunk_rest.call(null,seq__36514__$1);
var G__36523 = c__19668__auto__;
var G__36524 = cljs.core.count.call(null,c__19668__auto__);
var G__36525 = (0);
seq__36514 = G__36522;
chunk__36515 = G__36523;
count__36516 = G__36524;
i__36517 = G__36525;
continue;
} else {
var c = cljs.core.first.call(null,seq__36514__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__36526 = cljs.core.next.call(null,seq__36514__$1);
var G__36527 = null;
var G__36528 = (0);
var G__36529 = (0);
seq__36514 = G__36526;
chunk__36515 = G__36527;
count__36516 = G__36528;
i__36517 = G__36529;
continue;
}
} else {
return null;
}
}
break;
}
});})(x36513,path,storage))
;

x36513.om$core$IOmRef$_get_deps$arity$1 = ((function (x36513,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x36513,path,storage))
;

x36513.om$core$ITransact$ = true;

x36513.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36513,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x36513,path,storage))
;

return x36513;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__18884__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__18884__auto__ = state.om$render$T;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function om$core$render_all(){
var args36530 = [];
var len__19923__auto___36537 = arguments.length;
var i__19924__auto___36538 = (0);
while(true){
if((i__19924__auto___36538 < len__19923__auto___36537)){
args36530.push((arguments[i__19924__auto___36538]));

var G__36539 = (i__19924__auto___36538 + (1));
i__19924__auto___36538 = G__36539;
continue;
} else {
}
break;
}

var G__36532 = args36530.length;
switch (G__36532) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36530.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__36533_36541 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__36534_36542 = null;
var count__36535_36543 = (0);
var i__36536_36544 = (0);
while(true){
if((i__36536_36544 < count__36535_36543)){
var f_36545 = cljs.core._nth.call(null,chunk__36534_36542,i__36536_36544);
f_36545.call(null);

var G__36546 = seq__36533_36541;
var G__36547 = chunk__36534_36542;
var G__36548 = count__36535_36543;
var G__36549 = (i__36536_36544 + (1));
seq__36533_36541 = G__36546;
chunk__36534_36542 = G__36547;
count__36535_36543 = G__36548;
i__36536_36544 = G__36549;
continue;
} else {
var temp__4425__auto___36550 = cljs.core.seq.call(null,seq__36533_36541);
if(temp__4425__auto___36550){
var seq__36533_36551__$1 = temp__4425__auto___36550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36533_36551__$1)){
var c__19668__auto___36552 = cljs.core.chunk_first.call(null,seq__36533_36551__$1);
var G__36553 = cljs.core.chunk_rest.call(null,seq__36533_36551__$1);
var G__36554 = c__19668__auto___36552;
var G__36555 = cljs.core.count.call(null,c__19668__auto___36552);
var G__36556 = (0);
seq__36533_36541 = G__36553;
chunk__36534_36542 = G__36554;
count__36535_36543 = G__36555;
i__36536_36544 = G__36556;
continue;
} else {
var f_36557 = cljs.core.first.call(null,seq__36533_36551__$1);
f_36557.call(null);

var G__36558 = cljs.core.next.call(null,seq__36533_36551__$1);
var G__36559 = null;
var G__36560 = (0);
var G__36561 = (0);
seq__36533_36541 = G__36558;
chunk__36534_36542 = G__36559;
count__36535_36543 = G__36560;
i__36536_36544 = G__36561;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__18884__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__18884__auto__){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__18884__auto____$1){
return or__18884__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(){
var args36572 = [];
var len__19923__auto___36575 = arguments.length;
var i__19924__auto___36576 = (0);
while(true){
if((i__19924__auto___36576 < len__19923__auto___36575)){
args36572.push((arguments[i__19924__auto___36576]));

var G__36577 = (i__19924__auto___36576 + (1));
i__19924__auto___36576 = G__36577;
continue;
} else {
}
break;
}

var G__36574 = args36572.length;
switch (G__36574) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36572.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_36579 = (function (){var or__18884__auto__ = descriptor;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
var or__18884__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__18884__auto____$1)){
return or__18884__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_36579 === goog.object.get(f,"om$tag"))))){
var factory_36580 = React.createFactory(React.createClass(rdesc_36579));
goog.object.set(f,"om$descriptor",factory_36580);

goog.object.set(f,"om$tag",rdesc_36579);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(){
var args36581 = [];
var len__19923__auto___36584 = arguments.length;
var i__19924__auto___36585 = (0);
while(true){
if((i__19924__auto___36585 < len__19923__auto___36584)){
args36581.push((arguments[i__19924__auto___36585]));

var G__36586 = (i__19924__auto___36585 + (1));
i__19924__auto___36585 = G__36586;
continue;
} else {
}
break;
}

var G__36583 = args36581.length;
switch (G__36583) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36581.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(){
var args36588 = [];
var len__19923__auto___36593 = arguments.length;
var i__19924__auto___36594 = (0);
while(true){
if((i__19924__auto___36594 < len__19923__auto___36593)){
args36588.push((arguments[i__19924__auto___36594]));

var G__36595 = (i__19924__auto___36594 + (1));
i__19924__auto___36594 = G__36595;
continue;
} else {
}
break;
}

var G__36590 = args36588.length;
switch (G__36590) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36588.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__36591 = m;
var map__36591__$1 = ((((!((map__36591 == null)))?((((map__36591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591):map__36591);
var key = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__36591__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__18884__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__36591,map__36591__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__36591,map__36591__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__36591,map__36591__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__36591,map__36591__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__18884__auto__ = rkey;
if(cljs.core.truth_(or__18884__auto__)){
return or__18884__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function om$core$build(){
var args36619 = [];
var len__19923__auto___36628 = arguments.length;
var i__19924__auto___36629 = (0);
while(true){
if((i__19924__auto___36629 < len__19923__auto___36628)){
args36619.push((arguments[i__19924__auto___36629]));

var G__36630 = (i__19924__auto___36629 + (1));
i__19924__auto___36629 = G__36630;
continue;
} else {
}
break;
}

var G__36621 = args36619.length;
switch (G__36621) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36619.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(){
var args36633 = [];
var len__19923__auto___36636 = arguments.length;
var i__19924__auto___36637 = (0);
while(true){
if((i__19924__auto___36637 < len__19923__auto___36636)){
args36633.push((arguments[i__19924__auto___36637]));

var G__36638 = (i__19924__auto___36637 + (1));
i__19924__auto___36637 = G__36638;
continue;
} else {
}
break;
}

var G__36635 = args36633.length;
switch (G__36635) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36633.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_36656 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_36657 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_36658 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x36649_36659 = state;
x36649_36659.om$core$IRootProperties$ = true;

x36649_36659.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36656,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36656,cljs.core.dissoc,id,k);
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36656,cljs.core.dissoc,id);
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRootProperties$_get_property$arity$3 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_36656),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$INotify$ = true;

x36649_36659.om$core$INotify$_listen_BANG_$arity$3 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_36657,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_36657,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$INotify$_notify_BANG_$arity$3 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__36650_36664 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_36657));
var chunk__36651_36665 = null;
var count__36652_36666 = (0);
var i__36653_36667 = (0);
while(true){
if((i__36653_36667 < count__36652_36666)){
var vec__36654_36670 = cljs.core._nth.call(null,chunk__36651_36665,i__36653_36667);
var __36671 = cljs.core.nth.call(null,vec__36654_36670,(0),null);
var f_36672 = cljs.core.nth.call(null,vec__36654_36670,(1),null);
f_36672.call(null,tx_data,root_cursor);

var G__36673 = seq__36650_36664;
var G__36674 = chunk__36651_36665;
var G__36675 = count__36652_36666;
var G__36676 = (i__36653_36667 + (1));
seq__36650_36664 = G__36673;
chunk__36651_36665 = G__36674;
count__36652_36666 = G__36675;
i__36653_36667 = G__36676;
continue;
} else {
var temp__4425__auto___36679 = cljs.core.seq.call(null,seq__36650_36664);
if(temp__4425__auto___36679){
var seq__36650_36680__$1 = temp__4425__auto___36679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36650_36680__$1)){
var c__19668__auto___36681 = cljs.core.chunk_first.call(null,seq__36650_36680__$1);
var G__36682 = cljs.core.chunk_rest.call(null,seq__36650_36680__$1);
var G__36683 = c__19668__auto___36681;
var G__36684 = cljs.core.count.call(null,c__19668__auto___36681);
var G__36685 = (0);
seq__36650_36664 = G__36682;
chunk__36651_36665 = G__36683;
count__36652_36666 = G__36684;
i__36653_36667 = G__36685;
continue;
} else {
var vec__36655_36690 = cljs.core.first.call(null,seq__36650_36680__$1);
var __36691 = cljs.core.nth.call(null,vec__36655_36690,(0),null);
var f_36692 = cljs.core.nth.call(null,vec__36655_36690,(1),null);
f_36692.call(null,tx_data,root_cursor);

var G__36694 = cljs.core.next.call(null,seq__36650_36680__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36650_36664 = G__36694;
chunk__36651_36665 = G__36695;
count__36652_36666 = G__36696;
i__36653_36667 = G__36697;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRenderQueue$ = true;

x36649_36659.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_36658);
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_36658),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_36658,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

x36649_36659.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x36649_36659,properties_36656,listeners_36657,render_queue_36658){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_36658,cljs.core.empty);
});})(x36649_36659,properties_36656,listeners_36657,render_queue_36658))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x36709 = cljs.core.clone.call(null,cursor);
x36709.cljs$core$ICloneable$ = true;

x36709.cljs$core$ICloneable$_clone$arity$1 = ((function (x36709){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x36709))
;

x36709.om$core$IAdapt$ = true;

x36709.om$core$IAdapt$_adapt$arity$2 = ((function (x36709){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x36709))
;

x36709.om$core$IRootKey$ = true;

x36709.om$core$IRootKey$_root_key$arity$1 = ((function (x36709){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x36709))
;

return x36709;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__36717){
var map__36800 = p__36717;
var map__36800__$1 = ((((!((map__36800 == null)))?((((map__36800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36800):map__36800);
var options = map__36800__$1;
var target = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__36800__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__36889 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__36889,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__36889,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__18884__auto__ = adapt;
if(or__18884__auto__){
return or__18884__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_36894 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_36849 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_36850 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_36851 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_36852 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_36852;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36851;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36850;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_36849;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_36894);
} else {
}
}

var queue_36899 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_36899)){
} else {
var seq__36855_36902 = cljs.core.seq.call(null,queue_36899);
var chunk__36856_36903 = null;
var count__36857_36904 = (0);
var i__36858_36905 = (0);
while(true){
if((i__36858_36905 < count__36857_36904)){
var c_36906 = cljs.core._nth.call(null,chunk__36856_36903,i__36858_36905);
if(c_36906.isMounted()){
var temp__4425__auto___36907 = (c_36906.state["__om_next_cursor"]);
if(temp__4425__auto___36907){
var next_props_36908 = temp__4425__auto___36907;
(c_36906.props["__om_cursor"] = next_props_36908);

(c_36906.state["__om_next_cursor"] = null);
} else {
}

if((function (){var or__18884__auto__ = !((function (){var G__36860 = om.core.children.call(null,c_36906);
if(!((G__36860 == null))){
if((false) || (G__36860.om$core$ICheckState$)){
return true;
} else {
if((!G__36860.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36860);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36860);
}
})());
if(or__18884__auto__){
return or__18884__auto__;
} else {
return c_36906.shouldComponentUpdate(c_36906.props,c_36906.state);
}
})()){
c_36906.forceUpdate();
} else {
}
} else {
}

var G__36909 = seq__36855_36902;
var G__36910 = chunk__36856_36903;
var G__36911 = count__36857_36904;
var G__36912 = (i__36858_36905 + (1));
seq__36855_36902 = G__36909;
chunk__36856_36903 = G__36910;
count__36857_36904 = G__36911;
i__36858_36905 = G__36912;
continue;
} else {
var temp__4425__auto___36913 = cljs.core.seq.call(null,seq__36855_36902);
if(temp__4425__auto___36913){
var seq__36855_36914__$1 = temp__4425__auto___36913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36855_36914__$1)){
var c__19668__auto___36915 = cljs.core.chunk_first.call(null,seq__36855_36914__$1);
var G__36918 = cljs.core.chunk_rest.call(null,seq__36855_36914__$1);
var G__36919 = c__19668__auto___36915;
var G__36920 = cljs.core.count.call(null,c__19668__auto___36915);
var G__36921 = (0);
seq__36855_36902 = G__36918;
chunk__36856_36903 = G__36919;
count__36857_36904 = G__36920;
i__36858_36905 = G__36921;
continue;
} else {
var c_36922 = cljs.core.first.call(null,seq__36855_36914__$1);
if(c_36922.isMounted()){
var temp__4425__auto___36923__$1 = (c_36922.state["__om_next_cursor"]);
if(temp__4425__auto___36923__$1){
var next_props_36926 = temp__4425__auto___36923__$1;
(c_36922.props["__om_cursor"] = next_props_36926);

(c_36922.state["__om_next_cursor"] = null);
} else {
}

if((function (){var or__18884__auto__ = !((function (){var G__36862 = om.core.children.call(null,c_36922);
if(!((G__36862 == null))){
if((false) || (G__36862.om$core$ICheckState$)){
return true;
} else {
if((!G__36862.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36862);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36862);
}
})());
if(or__18884__auto__){
return or__18884__auto__;
} else {
return c_36922.shouldComponentUpdate(c_36922.props,c_36922.state);
}
})()){
c_36922.forceUpdate();
} else {
}
} else {
}

var G__36929 = cljs.core.next.call(null,seq__36855_36914__$1);
var G__36930 = null;
var G__36931 = (0);
var G__36932 = (0);
seq__36855_36902 = G__36929;
chunk__36856_36903 = G__36930;
count__36857_36904 = G__36931;
i__36858_36905 = G__36932;
continue;
}
} else {
}
}
break;
}
}

var _refs_36935 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_36935)){
} else {
var seq__36863_36936 = cljs.core.seq.call(null,_refs_36935);
var chunk__36864_36937 = null;
var count__36865_36938 = (0);
var i__36866_36939 = (0);
while(true){
if((i__36866_36939 < count__36865_36938)){
var vec__36867_36940 = cljs.core._nth.call(null,chunk__36864_36937,i__36866_36939);
var path_36941__$1 = cljs.core.nth.call(null,vec__36867_36940,(0),null);
var cs_36942 = cljs.core.nth.call(null,vec__36867_36940,(1),null);
var cs_36943__$1 = cljs.core.deref.call(null,cs_36942);
var seq__36868_36944 = cljs.core.seq.call(null,cs_36943__$1);
var chunk__36869_36945 = null;
var count__36870_36946 = (0);
var i__36871_36947 = (0);
while(true){
if((i__36871_36947 < count__36870_36946)){
var vec__36872_36950 = cljs.core._nth.call(null,chunk__36869_36945,i__36871_36947);
var id_36951 = cljs.core.nth.call(null,vec__36872_36950,(0),null);
var c_36952 = cljs.core.nth.call(null,vec__36872_36950,(1),null);
if(c_36952.shouldComponentUpdate(c_36952.props,c_36952.state)){
c_36952.forceUpdate();
} else {
}

var G__36953 = seq__36868_36944;
var G__36954 = chunk__36869_36945;
var G__36955 = count__36870_36946;
var G__36956 = (i__36871_36947 + (1));
seq__36868_36944 = G__36953;
chunk__36869_36945 = G__36954;
count__36870_36946 = G__36955;
i__36871_36947 = G__36956;
continue;
} else {
var temp__4425__auto___36959 = cljs.core.seq.call(null,seq__36868_36944);
if(temp__4425__auto___36959){
var seq__36868_36960__$1 = temp__4425__auto___36959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36868_36960__$1)){
var c__19668__auto___36961 = cljs.core.chunk_first.call(null,seq__36868_36960__$1);
var G__36962 = cljs.core.chunk_rest.call(null,seq__36868_36960__$1);
var G__36963 = c__19668__auto___36961;
var G__36964 = cljs.core.count.call(null,c__19668__auto___36961);
var G__36965 = (0);
seq__36868_36944 = G__36962;
chunk__36869_36945 = G__36963;
count__36870_36946 = G__36964;
i__36871_36947 = G__36965;
continue;
} else {
var vec__36873_36966 = cljs.core.first.call(null,seq__36868_36960__$1);
var id_36967 = cljs.core.nth.call(null,vec__36873_36966,(0),null);
var c_36968 = cljs.core.nth.call(null,vec__36873_36966,(1),null);
if(c_36968.shouldComponentUpdate(c_36968.props,c_36968.state)){
c_36968.forceUpdate();
} else {
}

var G__36973 = cljs.core.next.call(null,seq__36868_36960__$1);
var G__36974 = null;
var G__36975 = (0);
var G__36976 = (0);
seq__36868_36944 = G__36973;
chunk__36869_36945 = G__36974;
count__36870_36946 = G__36975;
i__36871_36947 = G__36976;
continue;
}
} else {
}
}
break;
}

var G__36977 = seq__36863_36936;
var G__36978 = chunk__36864_36937;
var G__36979 = count__36865_36938;
var G__36980 = (i__36866_36939 + (1));
seq__36863_36936 = G__36977;
chunk__36864_36937 = G__36978;
count__36865_36938 = G__36979;
i__36866_36939 = G__36980;
continue;
} else {
var temp__4425__auto___36984 = cljs.core.seq.call(null,seq__36863_36936);
if(temp__4425__auto___36984){
var seq__36863_36986__$1 = temp__4425__auto___36984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36863_36986__$1)){
var c__19668__auto___36987 = cljs.core.chunk_first.call(null,seq__36863_36986__$1);
var G__36988 = cljs.core.chunk_rest.call(null,seq__36863_36986__$1);
var G__36989 = c__19668__auto___36987;
var G__36990 = cljs.core.count.call(null,c__19668__auto___36987);
var G__36991 = (0);
seq__36863_36936 = G__36988;
chunk__36864_36937 = G__36989;
count__36865_36938 = G__36990;
i__36866_36939 = G__36991;
continue;
} else {
var vec__36874_36993 = cljs.core.first.call(null,seq__36863_36986__$1);
var path_36994__$1 = cljs.core.nth.call(null,vec__36874_36993,(0),null);
var cs_36995 = cljs.core.nth.call(null,vec__36874_36993,(1),null);
var cs_36996__$1 = cljs.core.deref.call(null,cs_36995);
var seq__36875_36997 = cljs.core.seq.call(null,cs_36996__$1);
var chunk__36876_36998 = null;
var count__36877_36999 = (0);
var i__36878_37000 = (0);
while(true){
if((i__36878_37000 < count__36877_36999)){
var vec__36879_37001 = cljs.core._nth.call(null,chunk__36876_36998,i__36878_37000);
var id_37002 = cljs.core.nth.call(null,vec__36879_37001,(0),null);
var c_37003 = cljs.core.nth.call(null,vec__36879_37001,(1),null);
if(c_37003.shouldComponentUpdate(c_37003.props,c_37003.state)){
c_37003.forceUpdate();
} else {
}

var G__37004 = seq__36875_36997;
var G__37005 = chunk__36876_36998;
var G__37006 = count__36877_36999;
var G__37007 = (i__36878_37000 + (1));
seq__36875_36997 = G__37004;
chunk__36876_36998 = G__37005;
count__36877_36999 = G__37006;
i__36878_37000 = G__37007;
continue;
} else {
var temp__4425__auto___37010__$1 = cljs.core.seq.call(null,seq__36875_36997);
if(temp__4425__auto___37010__$1){
var seq__36875_37011__$1 = temp__4425__auto___37010__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36875_37011__$1)){
var c__19668__auto___37012 = cljs.core.chunk_first.call(null,seq__36875_37011__$1);
var G__37013 = cljs.core.chunk_rest.call(null,seq__36875_37011__$1);
var G__37014 = c__19668__auto___37012;
var G__37015 = cljs.core.count.call(null,c__19668__auto___37012);
var G__37016 = (0);
seq__36875_36997 = G__37013;
chunk__36876_36998 = G__37014;
count__36877_36999 = G__37015;
i__36878_37000 = G__37016;
continue;
} else {
var vec__36880_37019 = cljs.core.first.call(null,seq__36875_37011__$1);
var id_37020 = cljs.core.nth.call(null,vec__36880_37019,(0),null);
var c_37021 = cljs.core.nth.call(null,vec__36880_37019,(1),null);
if(c_37021.shouldComponentUpdate(c_37021.props,c_37021.state)){
c_37021.forceUpdate();
} else {
}

var G__37022 = cljs.core.next.call(null,seq__36875_37011__$1);
var G__37023 = null;
var G__37024 = (0);
var G__37025 = (0);
seq__36875_36997 = G__37022;
chunk__36876_36998 = G__37023;
count__36877_36999 = G__37024;
i__36878_37000 = G__37025;
continue;
}
} else {
}
}
break;
}

var G__37026 = cljs.core.next.call(null,seq__36863_36986__$1);
var G__37027 = null;
var G__37028 = (0);
var G__37029 = (0);
seq__36863_36936 = G__37026;
chunk__36864_36937 = G__37027;
count__36865_36938 = G__37028;
i__36866_36939 = G__37029;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(om.core.refresh_queued){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36800,map__36800__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(){
var args37040 = [];
var len__19923__auto___37043 = arguments.length;
var i__19924__auto___37044 = (0);
while(true){
if((i__19924__auto___37044 < len__19923__auto___37043)){
args37040.push((arguments[i__19924__auto___37044]));

var G__37046 = (i__19924__auto___37044 + (1));
i__19924__auto___37044 = G__37046;
continue;
} else {
}
break;
}

var G__37042 = args37040.length;
switch (G__37042) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37040.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(){
var args37051 = [];
var len__19923__auto___37055 = arguments.length;
var i__19924__auto___37056 = (0);
while(true){
if((i__19924__auto___37056 < len__19923__auto___37055)){
args37051.push((arguments[i__19924__auto___37056]));

var G__37057 = (i__19924__auto___37056 + (1));
i__19924__auto___37056 = G__37057;
continue;
} else {
}
break;
}

var G__37053 = args37051.length;
switch (G__37053) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37051.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 * extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(){
var args37071 = [];
var len__19923__auto___37082 = arguments.length;
var i__19924__auto___37083 = (0);
while(true){
if((i__19924__auto___37083 < len__19923__auto___37082)){
args37071.push((arguments[i__19924__auto___37083]));

var G__37085 = (i__19924__auto___37083 + (1));
i__19924__auto___37083 = G__37085;
continue;
} else {
}
break;
}

var G__37075 = args37071.length;
switch (G__37075) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37071.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__37077 = owner.refs;
var G__37077__$1 = (((G__37077 == null))?null:(G__37077[name]));
var G__37077__$2 = (((G__37077__$1 == null))?null:G__37077__$1.getDOMNode());
return G__37077__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 * the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__37088 = owner.refs;
var G__37088__$1 = (((G__37088 == null))?null:goog.object.get(G__37088,name));
return G__37088__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(){
var args37089 = [];
var len__19923__auto___37092 = arguments.length;
var i__19924__auto___37093 = (0);
while(true){
if((i__19924__auto___37093 < len__19923__auto___37092)){
args37089.push((arguments[i__19924__auto___37093]));

var G__37094 = (i__19924__auto___37093 + (1));
i__19924__auto___37093 = G__37094;
continue;
} else {
}
break;
}

var G__37091 = args37089.length;
switch (G__37091) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37089.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(){
var args37099 = [];
var len__19923__auto___37105 = arguments.length;
var i__19924__auto___37106 = (0);
while(true){
if((i__19924__auto___37106 < len__19923__auto___37105)){
args37099.push((arguments[i__19924__auto___37106]));

var G__37107 = (i__19924__auto___37106 + (1));
i__19924__auto___37106 = G__37107;
continue;
} else {
}
break;
}

var G__37103 = args37099.length;
switch (G__37103) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37099.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(){
var args37113 = [];
var len__19923__auto___37116 = arguments.length;
var i__19924__auto___37117 = (0);
while(true){
if((i__19924__auto___37117 < len__19923__auto___37116)){
args37113.push((arguments[i__19924__auto___37117]));

var G__37118 = (i__19924__auto___37117 + (1));
i__19924__auto___37117 = G__37118;
continue;
} else {
}
break;
}

var G__37115 = args37113.length;
switch (G__37115) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37113.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(){
var args37126 = [];
var len__19923__auto___37129 = arguments.length;
var i__19924__auto___37130 = (0);
while(true){
if((i__19924__auto___37130 < len__19923__auto___37129)){
args37126.push((arguments[i__19924__auto___37130]));

var G__37131 = (i__19924__auto___37130 + (1));
i__19924__auto___37130 = G__37131;
continue;
} else {
}
break;
}

var G__37128 = args37126.length;
switch (G__37128) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37126.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(){
var args37141 = [];
var len__19923__auto___37149 = arguments.length;
var i__19924__auto___37150 = (0);
while(true){
if((i__19924__auto___37150 < len__19923__auto___37149)){
args37141.push((arguments[i__19924__auto___37150]));

var G__37151 = (i__19924__auto___37150 + (1));
i__19924__auto___37150 = G__37151;
continue;
} else {
}
break;
}

var G__37145 = args37141.length;
switch (G__37145) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37141.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map?rel=1445816818081