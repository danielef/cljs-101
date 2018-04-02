// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e28439){if((e28439 instanceof Error)){
var e = e28439;
return "Error: Unable to stringify";
} else {
throw e28439;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28442 = arguments.length;
switch (G__28442) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28440_SHARP_){
if(typeof p1__28440_SHARP_ === 'string'){
return p1__28440_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28440_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28445 = arguments.length;
var i__4500__auto___28446 = (0);
while(true){
if((i__4500__auto___28446 < len__4499__auto___28445)){
args__4502__auto__.push((arguments[i__4500__auto___28446]));

var G__28447 = (i__4500__auto___28446 + (1));
i__4500__auto___28446 = G__28447;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28444){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28444));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28449 = arguments.length;
var i__4500__auto___28450 = (0);
while(true){
if((i__4500__auto___28450 < len__4499__auto___28449)){
args__4502__auto__.push((arguments[i__4500__auto___28450]));

var G__28451 = (i__4500__auto___28450 + (1));
i__4500__auto___28450 = G__28451;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28448){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28448));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28452){
var map__28453 = p__28452;
var map__28453__$1 = ((((!((map__28453 == null)))?(((((map__28453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28453):map__28453);
var message = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__23411__auto___28532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___28532,ch){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___28532,ch){
return (function (state_28504){
var state_val_28505 = (state_28504[(1)]);
if((state_val_28505 === (7))){
var inst_28500 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
var statearr_28506_28533 = state_28504__$1;
(statearr_28506_28533[(2)] = inst_28500);

(statearr_28506_28533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (1))){
var state_28504__$1 = state_28504;
var statearr_28507_28534 = state_28504__$1;
(statearr_28507_28534[(2)] = null);

(statearr_28507_28534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (4))){
var inst_28457 = (state_28504[(7)]);
var inst_28457__$1 = (state_28504[(2)]);
var state_28504__$1 = (function (){var statearr_28508 = state_28504;
(statearr_28508[(7)] = inst_28457__$1);

return statearr_28508;
})();
if(cljs.core.truth_(inst_28457__$1)){
var statearr_28509_28535 = state_28504__$1;
(statearr_28509_28535[(1)] = (5));

} else {
var statearr_28510_28536 = state_28504__$1;
(statearr_28510_28536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (15))){
var inst_28464 = (state_28504[(8)]);
var inst_28479 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28464);
var inst_28480 = cljs.core.first.call(null,inst_28479);
var inst_28481 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28480);
var inst_28482 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28481)].join('');
var inst_28483 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28482);
var state_28504__$1 = state_28504;
var statearr_28511_28537 = state_28504__$1;
(statearr_28511_28537[(2)] = inst_28483);

(statearr_28511_28537[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (13))){
var inst_28488 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
var statearr_28512_28538 = state_28504__$1;
(statearr_28512_28538[(2)] = inst_28488);

(statearr_28512_28538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (6))){
var state_28504__$1 = state_28504;
var statearr_28513_28539 = state_28504__$1;
(statearr_28513_28539[(2)] = null);

(statearr_28513_28539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (17))){
var inst_28486 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
var statearr_28514_28540 = state_28504__$1;
(statearr_28514_28540[(2)] = inst_28486);

(statearr_28514_28540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (3))){
var inst_28502 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28504__$1,inst_28502);
} else {
if((state_val_28505 === (12))){
var inst_28463 = (state_28504[(9)]);
var inst_28477 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28463,opts);
var state_28504__$1 = state_28504;
if(cljs.core.truth_(inst_28477)){
var statearr_28515_28541 = state_28504__$1;
(statearr_28515_28541[(1)] = (15));

} else {
var statearr_28516_28542 = state_28504__$1;
(statearr_28516_28542[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (2))){
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28504__$1,(4),ch);
} else {
if((state_val_28505 === (11))){
var inst_28464 = (state_28504[(8)]);
var inst_28469 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28470 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28464);
var inst_28471 = cljs.core.async.timeout.call(null,(1000));
var inst_28472 = [inst_28470,inst_28471];
var inst_28473 = (new cljs.core.PersistentVector(null,2,(5),inst_28469,inst_28472,null));
var state_28504__$1 = state_28504;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28504__$1,(14),inst_28473);
} else {
if((state_val_28505 === (9))){
var inst_28464 = (state_28504[(8)]);
var inst_28490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28491 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28464);
var inst_28492 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28491);
var inst_28493 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28492)].join('');
var inst_28494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28493);
var state_28504__$1 = (function (){var statearr_28517 = state_28504;
(statearr_28517[(10)] = inst_28490);

return statearr_28517;
})();
var statearr_28518_28543 = state_28504__$1;
(statearr_28518_28543[(2)] = inst_28494);

(statearr_28518_28543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (5))){
var inst_28457 = (state_28504[(7)]);
var inst_28459 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28460 = (new cljs.core.PersistentArrayMap(null,2,inst_28459,null));
var inst_28461 = (new cljs.core.PersistentHashSet(null,inst_28460,null));
var inst_28462 = figwheel.client.focus_msgs.call(null,inst_28461,inst_28457);
var inst_28463 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28462);
var inst_28464 = cljs.core.first.call(null,inst_28462);
var inst_28465 = figwheel.client.autoload_QMARK_.call(null);
var state_28504__$1 = (function (){var statearr_28519 = state_28504;
(statearr_28519[(9)] = inst_28463);

(statearr_28519[(8)] = inst_28464);

return statearr_28519;
})();
if(cljs.core.truth_(inst_28465)){
var statearr_28520_28544 = state_28504__$1;
(statearr_28520_28544[(1)] = (8));

} else {
var statearr_28521_28545 = state_28504__$1;
(statearr_28521_28545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (14))){
var inst_28475 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
var statearr_28522_28546 = state_28504__$1;
(statearr_28522_28546[(2)] = inst_28475);

(statearr_28522_28546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (16))){
var state_28504__$1 = state_28504;
var statearr_28523_28547 = state_28504__$1;
(statearr_28523_28547[(2)] = null);

(statearr_28523_28547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (10))){
var inst_28496 = (state_28504[(2)]);
var state_28504__$1 = (function (){var statearr_28524 = state_28504;
(statearr_28524[(11)] = inst_28496);

return statearr_28524;
})();
var statearr_28525_28548 = state_28504__$1;
(statearr_28525_28548[(2)] = null);

(statearr_28525_28548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (8))){
var inst_28463 = (state_28504[(9)]);
var inst_28467 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28463,opts);
var state_28504__$1 = state_28504;
if(cljs.core.truth_(inst_28467)){
var statearr_28526_28549 = state_28504__$1;
(statearr_28526_28549[(1)] = (11));

} else {
var statearr_28527_28550 = state_28504__$1;
(statearr_28527_28550[(1)] = (12));

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
});})(c__23411__auto___28532,ch))
;
return ((function (switch__22892__auto__,c__23411__auto___28532,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____0 = (function (){
var statearr_28528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28528[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__);

(statearr_28528[(1)] = (1));

return statearr_28528;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____1 = (function (state_28504){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_28504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e28529){if((e28529 instanceof Object)){
var ex__22896__auto__ = e28529;
var statearr_28530_28551 = state_28504;
(statearr_28530_28551[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28552 = state_28504;
state_28504 = G__28552;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__ = function(state_28504){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____1.call(this,state_28504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22893__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___28532,ch))
})();
var state__23413__auto__ = (function (){var statearr_28531 = f__23412__auto__.call(null);
(statearr_28531[(6)] = c__23411__auto___28532);

return statearr_28531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___28532,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28553_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28553_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28557 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28557){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28556 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28555,_STAR_print_fn_STAR_28556,sb,base_path_28557){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_28555,_STAR_print_fn_STAR_28556,sb,base_path_28557))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28556;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28555;
}}catch (e28554){if((e28554 instanceof Error)){
var e = e28554;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28557], null));
} else {
var e = e28554;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28557))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28558){
var map__28559 = p__28558;
var map__28559__$1 = ((((!((map__28559 == null)))?(((((map__28559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28559):map__28559);
var opts = map__28559__$1;
var build_id = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28559,map__28559__$1,opts,build_id){
return (function (p__28561){
var vec__28562 = p__28561;
var seq__28563 = cljs.core.seq.call(null,vec__28562);
var first__28564 = cljs.core.first.call(null,seq__28563);
var seq__28563__$1 = cljs.core.next.call(null,seq__28563);
var map__28565 = first__28564;
var map__28565__$1 = ((((!((map__28565 == null)))?(((((map__28565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28565):map__28565);
var msg = map__28565__$1;
var msg_name = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28563__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28562,seq__28563,first__28564,seq__28563__$1,map__28565,map__28565__$1,msg,msg_name,_,map__28559,map__28559__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28562,seq__28563,first__28564,seq__28563__$1,map__28565,map__28565__$1,msg,msg_name,_,map__28559,map__28559__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28559,map__28559__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28567){
var vec__28568 = p__28567;
var seq__28569 = cljs.core.seq.call(null,vec__28568);
var first__28570 = cljs.core.first.call(null,seq__28569);
var seq__28569__$1 = cljs.core.next.call(null,seq__28569);
var map__28571 = first__28570;
var map__28571__$1 = ((((!((map__28571 == null)))?(((((map__28571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28571):map__28571);
var msg = map__28571__$1;
var msg_name = cljs.core.get.call(null,map__28571__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28569__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28573){
var map__28574 = p__28573;
var map__28574__$1 = ((((!((map__28574 == null)))?(((((map__28574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28574):map__28574);
var on_compile_warning = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28574__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28574,map__28574__$1,on_compile_warning,on_compile_fail){
return (function (p__28576){
var vec__28577 = p__28576;
var seq__28578 = cljs.core.seq.call(null,vec__28577);
var first__28579 = cljs.core.first.call(null,seq__28578);
var seq__28578__$1 = cljs.core.next.call(null,seq__28578);
var map__28580 = first__28579;
var map__28580__$1 = ((((!((map__28580 == null)))?(((((map__28580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28580):map__28580);
var msg = map__28580__$1;
var msg_name = cljs.core.get.call(null,map__28580__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28578__$1;
var pred__28582 = cljs.core._EQ_;
var expr__28583 = msg_name;
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28583))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28582.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28583))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28574,map__28574__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__,msg_hist,msg_names,msg){
return (function (state_28672){
var state_val_28673 = (state_28672[(1)]);
if((state_val_28673 === (7))){
var inst_28592 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28592)){
var statearr_28674_28721 = state_28672__$1;
(statearr_28674_28721[(1)] = (8));

} else {
var statearr_28675_28722 = state_28672__$1;
(statearr_28675_28722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (20))){
var inst_28666 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28676_28723 = state_28672__$1;
(statearr_28676_28723[(2)] = inst_28666);

(statearr_28676_28723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (27))){
var inst_28662 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28677_28724 = state_28672__$1;
(statearr_28677_28724[(2)] = inst_28662);

(statearr_28677_28724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (1))){
var inst_28585 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28585)){
var statearr_28678_28725 = state_28672__$1;
(statearr_28678_28725[(1)] = (2));

} else {
var statearr_28679_28726 = state_28672__$1;
(statearr_28679_28726[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (24))){
var inst_28664 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28680_28727 = state_28672__$1;
(statearr_28680_28727[(2)] = inst_28664);

(statearr_28680_28727[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (4))){
var inst_28670 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28672__$1,inst_28670);
} else {
if((state_val_28673 === (15))){
var inst_28668 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28681_28728 = state_28672__$1;
(statearr_28681_28728[(2)] = inst_28668);

(statearr_28681_28728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (21))){
var inst_28621 = (state_28672[(2)]);
var inst_28622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28623 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28622);
var state_28672__$1 = (function (){var statearr_28682 = state_28672;
(statearr_28682[(7)] = inst_28621);

return statearr_28682;
})();
var statearr_28683_28729 = state_28672__$1;
(statearr_28683_28729[(2)] = inst_28623);

(statearr_28683_28729[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (31))){
var inst_28651 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28651)){
var statearr_28684_28730 = state_28672__$1;
(statearr_28684_28730[(1)] = (34));

} else {
var statearr_28685_28731 = state_28672__$1;
(statearr_28685_28731[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (32))){
var inst_28660 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28686_28732 = state_28672__$1;
(statearr_28686_28732[(2)] = inst_28660);

(statearr_28686_28732[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (33))){
var inst_28647 = (state_28672[(2)]);
var inst_28648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28649 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28648);
var state_28672__$1 = (function (){var statearr_28687 = state_28672;
(statearr_28687[(8)] = inst_28647);

return statearr_28687;
})();
var statearr_28688_28733 = state_28672__$1;
(statearr_28688_28733[(2)] = inst_28649);

(statearr_28688_28733[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (13))){
var inst_28606 = figwheel.client.heads_up.clear.call(null);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(16),inst_28606);
} else {
if((state_val_28673 === (22))){
var inst_28627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28628 = figwheel.client.heads_up.append_warning_message.call(null,inst_28627);
var state_28672__$1 = state_28672;
var statearr_28689_28734 = state_28672__$1;
(statearr_28689_28734[(2)] = inst_28628);

(statearr_28689_28734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (36))){
var inst_28658 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28690_28735 = state_28672__$1;
(statearr_28690_28735[(2)] = inst_28658);

(statearr_28690_28735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (29))){
var inst_28638 = (state_28672[(2)]);
var inst_28639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28640 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28639);
var state_28672__$1 = (function (){var statearr_28691 = state_28672;
(statearr_28691[(9)] = inst_28638);

return statearr_28691;
})();
var statearr_28692_28736 = state_28672__$1;
(statearr_28692_28736[(2)] = inst_28640);

(statearr_28692_28736[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (6))){
var inst_28587 = (state_28672[(10)]);
var state_28672__$1 = state_28672;
var statearr_28693_28737 = state_28672__$1;
(statearr_28693_28737[(2)] = inst_28587);

(statearr_28693_28737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (28))){
var inst_28634 = (state_28672[(2)]);
var inst_28635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28636 = figwheel.client.heads_up.display_warning.call(null,inst_28635);
var state_28672__$1 = (function (){var statearr_28694 = state_28672;
(statearr_28694[(11)] = inst_28634);

return statearr_28694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(29),inst_28636);
} else {
if((state_val_28673 === (25))){
var inst_28632 = figwheel.client.heads_up.clear.call(null);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(28),inst_28632);
} else {
if((state_val_28673 === (34))){
var inst_28653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(37),inst_28653);
} else {
if((state_val_28673 === (17))){
var inst_28612 = (state_28672[(2)]);
var inst_28613 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28614 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28613);
var state_28672__$1 = (function (){var statearr_28695 = state_28672;
(statearr_28695[(12)] = inst_28612);

return statearr_28695;
})();
var statearr_28696_28738 = state_28672__$1;
(statearr_28696_28738[(2)] = inst_28614);

(statearr_28696_28738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (3))){
var inst_28604 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28604)){
var statearr_28697_28739 = state_28672__$1;
(statearr_28697_28739[(1)] = (13));

} else {
var statearr_28698_28740 = state_28672__$1;
(statearr_28698_28740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (12))){
var inst_28600 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28699_28741 = state_28672__$1;
(statearr_28699_28741[(2)] = inst_28600);

(statearr_28699_28741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (2))){
var inst_28587 = (state_28672[(10)]);
var inst_28587__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28672__$1 = (function (){var statearr_28700 = state_28672;
(statearr_28700[(10)] = inst_28587__$1);

return statearr_28700;
})();
if(cljs.core.truth_(inst_28587__$1)){
var statearr_28701_28742 = state_28672__$1;
(statearr_28701_28742[(1)] = (5));

} else {
var statearr_28702_28743 = state_28672__$1;
(statearr_28702_28743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (23))){
var inst_28630 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28630)){
var statearr_28703_28744 = state_28672__$1;
(statearr_28703_28744[(1)] = (25));

} else {
var statearr_28704_28745 = state_28672__$1;
(statearr_28704_28745[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (35))){
var state_28672__$1 = state_28672;
var statearr_28705_28746 = state_28672__$1;
(statearr_28705_28746[(2)] = null);

(statearr_28705_28746[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (19))){
var inst_28625 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28625)){
var statearr_28706_28747 = state_28672__$1;
(statearr_28706_28747[(1)] = (22));

} else {
var statearr_28707_28748 = state_28672__$1;
(statearr_28707_28748[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (11))){
var inst_28596 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28708_28749 = state_28672__$1;
(statearr_28708_28749[(2)] = inst_28596);

(statearr_28708_28749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (9))){
var inst_28598 = figwheel.client.heads_up.clear.call(null);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(12),inst_28598);
} else {
if((state_val_28673 === (5))){
var inst_28589 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28672__$1 = state_28672;
var statearr_28709_28750 = state_28672__$1;
(statearr_28709_28750[(2)] = inst_28589);

(statearr_28709_28750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (14))){
var inst_28616 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28616)){
var statearr_28710_28751 = state_28672__$1;
(statearr_28710_28751[(1)] = (18));

} else {
var statearr_28711_28752 = state_28672__$1;
(statearr_28711_28752[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (26))){
var inst_28642 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28672__$1 = state_28672;
if(cljs.core.truth_(inst_28642)){
var statearr_28712_28753 = state_28672__$1;
(statearr_28712_28753[(1)] = (30));

} else {
var statearr_28713_28754 = state_28672__$1;
(statearr_28713_28754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (16))){
var inst_28608 = (state_28672[(2)]);
var inst_28609 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28610 = figwheel.client.heads_up.display_exception.call(null,inst_28609);
var state_28672__$1 = (function (){var statearr_28714 = state_28672;
(statearr_28714[(13)] = inst_28608);

return statearr_28714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(17),inst_28610);
} else {
if((state_val_28673 === (30))){
var inst_28644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28645 = figwheel.client.heads_up.display_warning.call(null,inst_28644);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(33),inst_28645);
} else {
if((state_val_28673 === (10))){
var inst_28602 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28715_28755 = state_28672__$1;
(statearr_28715_28755[(2)] = inst_28602);

(statearr_28715_28755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (18))){
var inst_28618 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28619 = figwheel.client.heads_up.display_exception.call(null,inst_28618);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(21),inst_28619);
} else {
if((state_val_28673 === (37))){
var inst_28655 = (state_28672[(2)]);
var state_28672__$1 = state_28672;
var statearr_28716_28756 = state_28672__$1;
(statearr_28716_28756[(2)] = inst_28655);

(statearr_28716_28756[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28673 === (8))){
var inst_28594 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28672__$1 = state_28672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(11),inst_28594);
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
});})(c__23411__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22892__auto__,c__23411__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____0 = (function (){
var statearr_28717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28717[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__);

(statearr_28717[(1)] = (1));

return statearr_28717;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____1 = (function (state_28672){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_28672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e28718){if((e28718 instanceof Object)){
var ex__22896__auto__ = e28718;
var statearr_28719_28757 = state_28672;
(statearr_28719_28757[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28758 = state_28672;
state_28672 = G__28758;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__ = function(state_28672){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____1.call(this,state_28672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__,msg_hist,msg_names,msg))
})();
var state__23413__auto__ = (function (){var statearr_28720 = f__23412__auto__.call(null);
(statearr_28720[(6)] = c__23411__auto__);

return statearr_28720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__,msg_hist,msg_names,msg))
);

return c__23411__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23411__auto___28787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto___28787,ch){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto___28787,ch){
return (function (state_28773){
var state_val_28774 = (state_28773[(1)]);
if((state_val_28774 === (1))){
var state_28773__$1 = state_28773;
var statearr_28775_28788 = state_28773__$1;
(statearr_28775_28788[(2)] = null);

(statearr_28775_28788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (2))){
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28773__$1,(4),ch);
} else {
if((state_val_28774 === (3))){
var inst_28771 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28773__$1,inst_28771);
} else {
if((state_val_28774 === (4))){
var inst_28761 = (state_28773[(7)]);
var inst_28761__$1 = (state_28773[(2)]);
var state_28773__$1 = (function (){var statearr_28776 = state_28773;
(statearr_28776[(7)] = inst_28761__$1);

return statearr_28776;
})();
if(cljs.core.truth_(inst_28761__$1)){
var statearr_28777_28789 = state_28773__$1;
(statearr_28777_28789[(1)] = (5));

} else {
var statearr_28778_28790 = state_28773__$1;
(statearr_28778_28790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (5))){
var inst_28761 = (state_28773[(7)]);
var inst_28763 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28761);
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28773__$1,(8),inst_28763);
} else {
if((state_val_28774 === (6))){
var state_28773__$1 = state_28773;
var statearr_28779_28791 = state_28773__$1;
(statearr_28779_28791[(2)] = null);

(statearr_28779_28791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (7))){
var inst_28769 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
var statearr_28780_28792 = state_28773__$1;
(statearr_28780_28792[(2)] = inst_28769);

(statearr_28780_28792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (8))){
var inst_28765 = (state_28773[(2)]);
var state_28773__$1 = (function (){var statearr_28781 = state_28773;
(statearr_28781[(8)] = inst_28765);

return statearr_28781;
})();
var statearr_28782_28793 = state_28773__$1;
(statearr_28782_28793[(2)] = null);

(statearr_28782_28793[(1)] = (2));


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
});})(c__23411__auto___28787,ch))
;
return ((function (switch__22892__auto__,c__23411__auto___28787,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22893__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22893__auto____0 = (function (){
var statearr_28783 = [null,null,null,null,null,null,null,null,null];
(statearr_28783[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22893__auto__);

(statearr_28783[(1)] = (1));

return statearr_28783;
});
var figwheel$client$heads_up_plugin_$_state_machine__22893__auto____1 = (function (state_28773){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_28773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e28784){if((e28784 instanceof Object)){
var ex__22896__auto__ = e28784;
var statearr_28785_28794 = state_28773;
(statearr_28785_28794[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28773;
state_28773 = G__28795;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22893__auto__ = function(state_28773){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22893__auto____1.call(this,state_28773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22893__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22893__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto___28787,ch))
})();
var state__23413__auto__ = (function (){var statearr_28786 = f__23412__auto__.call(null);
(statearr_28786[(6)] = c__23411__auto___28787);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto___28787,ch))
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
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__){
return (function (state_28801){
var state_val_28802 = (state_28801[(1)]);
if((state_val_28802 === (1))){
var inst_28796 = cljs.core.async.timeout.call(null,(3000));
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28801__$1,(2),inst_28796);
} else {
if((state_val_28802 === (2))){
var inst_28798 = (state_28801[(2)]);
var inst_28799 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28801__$1 = (function (){var statearr_28803 = state_28801;
(statearr_28803[(7)] = inst_28798);

return statearr_28803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28801__$1,inst_28799);
} else {
return null;
}
}
});})(c__23411__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____0 = (function (){
var statearr_28804 = [null,null,null,null,null,null,null,null];
(statearr_28804[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__);

(statearr_28804[(1)] = (1));

return statearr_28804;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____1 = (function (state_28801){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_28801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e28805){if((e28805 instanceof Object)){
var ex__22896__auto__ = e28805;
var statearr_28806_28808 = state_28801;
(statearr_28806_28808[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28809 = state_28801;
state_28801 = G__28809;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__ = function(state_28801){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____1.call(this,state_28801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22893__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__))
})();
var state__23413__auto__ = (function (){var statearr_28807 = f__23412__auto__.call(null);
(statearr_28807[(6)] = c__23411__auto__);

return statearr_28807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__))
);

return c__23411__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23411__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23412__auto__ = (function (){var switch__22892__auto__ = ((function (c__23411__auto__,figwheel_version,temp__5457__auto__){
return (function (state_28816){
var state_val_28817 = (state_28816[(1)]);
if((state_val_28817 === (1))){
var inst_28810 = cljs.core.async.timeout.call(null,(2000));
var state_28816__$1 = state_28816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28816__$1,(2),inst_28810);
} else {
if((state_val_28817 === (2))){
var inst_28812 = (state_28816[(2)]);
var inst_28813 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28814 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28813);
var state_28816__$1 = (function (){var statearr_28818 = state_28816;
(statearr_28818[(7)] = inst_28812);

return statearr_28818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28816__$1,inst_28814);
} else {
return null;
}
}
});})(c__23411__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__22892__auto__,c__23411__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____0 = (function (){
var statearr_28819 = [null,null,null,null,null,null,null,null];
(statearr_28819[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__);

(statearr_28819[(1)] = (1));

return statearr_28819;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____1 = (function (state_28816){
while(true){
var ret_value__22894__auto__ = (function (){try{while(true){
var result__22895__auto__ = switch__22892__auto__.call(null,state_28816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22895__auto__;
}
break;
}
}catch (e28820){if((e28820 instanceof Object)){
var ex__22896__auto__ = e28820;
var statearr_28821_28823 = state_28816;
(statearr_28821_28823[(5)] = ex__22896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28824 = state_28816;
state_28816 = G__28824;
continue;
} else {
return ret_value__22894__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__ = function(state_28816){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____1.call(this,state_28816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22893__auto__;
})()
;})(switch__22892__auto__,c__23411__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23413__auto__ = (function (){var statearr_28822 = f__23412__auto__.call(null);
(statearr_28822[(6)] = c__23411__auto__);

return statearr_28822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23413__auto__);
});})(c__23411__auto__,figwheel_version,temp__5457__auto__))
);

return c__23411__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28825){
var map__28826 = p__28825;
var map__28826__$1 = ((((!((map__28826 == null)))?(((((map__28826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28826):map__28826);
var file = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28828 = "";
var G__28828__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28828),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28828);
var G__28828__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28828__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28828__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28828__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28828__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28829){
var map__28830 = p__28829;
var map__28830__$1 = ((((!((map__28830 == null)))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var ed = map__28830__$1;
var formatted_exception = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28832_28836 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28833_28837 = null;
var count__28834_28838 = (0);
var i__28835_28839 = (0);
while(true){
if((i__28835_28839 < count__28834_28838)){
var msg_28840 = cljs.core._nth.call(null,chunk__28833_28837,i__28835_28839);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28840);


var G__28841 = seq__28832_28836;
var G__28842 = chunk__28833_28837;
var G__28843 = count__28834_28838;
var G__28844 = (i__28835_28839 + (1));
seq__28832_28836 = G__28841;
chunk__28833_28837 = G__28842;
count__28834_28838 = G__28843;
i__28835_28839 = G__28844;
continue;
} else {
var temp__5457__auto___28845 = cljs.core.seq.call(null,seq__28832_28836);
if(temp__5457__auto___28845){
var seq__28832_28846__$1 = temp__5457__auto___28845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28832_28846__$1)){
var c__4319__auto___28847 = cljs.core.chunk_first.call(null,seq__28832_28846__$1);
var G__28848 = cljs.core.chunk_rest.call(null,seq__28832_28846__$1);
var G__28849 = c__4319__auto___28847;
var G__28850 = cljs.core.count.call(null,c__4319__auto___28847);
var G__28851 = (0);
seq__28832_28836 = G__28848;
chunk__28833_28837 = G__28849;
count__28834_28838 = G__28850;
i__28835_28839 = G__28851;
continue;
} else {
var msg_28852 = cljs.core.first.call(null,seq__28832_28846__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28852);


var G__28853 = cljs.core.next.call(null,seq__28832_28846__$1);
var G__28854 = null;
var G__28855 = (0);
var G__28856 = (0);
seq__28832_28836 = G__28853;
chunk__28833_28837 = G__28854;
count__28834_28838 = G__28855;
i__28835_28839 = G__28856;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28857){
var map__28858 = p__28857;
var map__28858__$1 = ((((!((map__28858 == null)))?(((((map__28858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var w = map__28858__$1;
var message = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28860 = cljs.core.seq.call(null,plugins);
var chunk__28861 = null;
var count__28862 = (0);
var i__28863 = (0);
while(true){
if((i__28863 < count__28862)){
var vec__28864 = cljs.core._nth.call(null,chunk__28861,i__28863);
var k = cljs.core.nth.call(null,vec__28864,(0),null);
var plugin = cljs.core.nth.call(null,vec__28864,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28870 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28860,chunk__28861,count__28862,i__28863,pl_28870,vec__28864,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28870.call(null,msg_hist);
});})(seq__28860,chunk__28861,count__28862,i__28863,pl_28870,vec__28864,k,plugin))
);
} else {
}


var G__28871 = seq__28860;
var G__28872 = chunk__28861;
var G__28873 = count__28862;
var G__28874 = (i__28863 + (1));
seq__28860 = G__28871;
chunk__28861 = G__28872;
count__28862 = G__28873;
i__28863 = G__28874;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28860);
if(temp__5457__auto__){
var seq__28860__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28860__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28860__$1);
var G__28875 = cljs.core.chunk_rest.call(null,seq__28860__$1);
var G__28876 = c__4319__auto__;
var G__28877 = cljs.core.count.call(null,c__4319__auto__);
var G__28878 = (0);
seq__28860 = G__28875;
chunk__28861 = G__28876;
count__28862 = G__28877;
i__28863 = G__28878;
continue;
} else {
var vec__28867 = cljs.core.first.call(null,seq__28860__$1);
var k = cljs.core.nth.call(null,vec__28867,(0),null);
var plugin = cljs.core.nth.call(null,vec__28867,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28879 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28860,chunk__28861,count__28862,i__28863,pl_28879,vec__28867,k,plugin,seq__28860__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28879.call(null,msg_hist);
});})(seq__28860,chunk__28861,count__28862,i__28863,pl_28879,vec__28867,k,plugin,seq__28860__$1,temp__5457__auto__))
);
} else {
}


var G__28880 = cljs.core.next.call(null,seq__28860__$1);
var G__28881 = null;
var G__28882 = (0);
var G__28883 = (0);
seq__28860 = G__28880;
chunk__28861 = G__28881;
count__28862 = G__28882;
i__28863 = G__28883;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28885 = arguments.length;
switch (G__28885) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28886_28891 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28887_28892 = null;
var count__28888_28893 = (0);
var i__28889_28894 = (0);
while(true){
if((i__28889_28894 < count__28888_28893)){
var msg_28895 = cljs.core._nth.call(null,chunk__28887_28892,i__28889_28894);
figwheel.client.socket.handle_incoming_message.call(null,msg_28895);


var G__28896 = seq__28886_28891;
var G__28897 = chunk__28887_28892;
var G__28898 = count__28888_28893;
var G__28899 = (i__28889_28894 + (1));
seq__28886_28891 = G__28896;
chunk__28887_28892 = G__28897;
count__28888_28893 = G__28898;
i__28889_28894 = G__28899;
continue;
} else {
var temp__5457__auto___28900 = cljs.core.seq.call(null,seq__28886_28891);
if(temp__5457__auto___28900){
var seq__28886_28901__$1 = temp__5457__auto___28900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28886_28901__$1)){
var c__4319__auto___28902 = cljs.core.chunk_first.call(null,seq__28886_28901__$1);
var G__28903 = cljs.core.chunk_rest.call(null,seq__28886_28901__$1);
var G__28904 = c__4319__auto___28902;
var G__28905 = cljs.core.count.call(null,c__4319__auto___28902);
var G__28906 = (0);
seq__28886_28891 = G__28903;
chunk__28887_28892 = G__28904;
count__28888_28893 = G__28905;
i__28889_28894 = G__28906;
continue;
} else {
var msg_28907 = cljs.core.first.call(null,seq__28886_28901__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28907);


var G__28908 = cljs.core.next.call(null,seq__28886_28901__$1);
var G__28909 = null;
var G__28910 = (0);
var G__28911 = (0);
seq__28886_28891 = G__28908;
chunk__28887_28892 = G__28909;
count__28888_28893 = G__28910;
i__28889_28894 = G__28911;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28916 = arguments.length;
var i__4500__auto___28917 = (0);
while(true){
if((i__4500__auto___28917 < len__4499__auto___28916)){
args__4502__auto__.push((arguments[i__4500__auto___28917]));

var G__28918 = (i__4500__auto___28917 + (1));
i__4500__auto___28917 = G__28918;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28913){
var map__28914 = p__28913;
var map__28914__$1 = ((((!((map__28914 == null)))?(((((map__28914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);
var opts = map__28914__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28912){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28912));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28919){if((e28919 instanceof Error)){
var e = e28919;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28919;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28920){
var map__28921 = p__28920;
var map__28921__$1 = ((((!((map__28921 == null)))?(((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var msg_name = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1522701099699
