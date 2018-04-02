// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28151){
var map__28152 = p__28151;
var map__28152__$1 = ((((!((map__28152 == null)))?(((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var m = map__28152__$1;
var n = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28154_28176 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28155_28177 = null;
var count__28156_28178 = (0);
var i__28157_28179 = (0);
while(true){
if((i__28157_28179 < count__28156_28178)){
var f_28180 = cljs.core._nth.call(null,chunk__28155_28177,i__28157_28179);
cljs.core.println.call(null,"  ",f_28180);


var G__28181 = seq__28154_28176;
var G__28182 = chunk__28155_28177;
var G__28183 = count__28156_28178;
var G__28184 = (i__28157_28179 + (1));
seq__28154_28176 = G__28181;
chunk__28155_28177 = G__28182;
count__28156_28178 = G__28183;
i__28157_28179 = G__28184;
continue;
} else {
var temp__5457__auto___28185 = cljs.core.seq.call(null,seq__28154_28176);
if(temp__5457__auto___28185){
var seq__28154_28186__$1 = temp__5457__auto___28185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28154_28186__$1)){
var c__4319__auto___28187 = cljs.core.chunk_first.call(null,seq__28154_28186__$1);
var G__28188 = cljs.core.chunk_rest.call(null,seq__28154_28186__$1);
var G__28189 = c__4319__auto___28187;
var G__28190 = cljs.core.count.call(null,c__4319__auto___28187);
var G__28191 = (0);
seq__28154_28176 = G__28188;
chunk__28155_28177 = G__28189;
count__28156_28178 = G__28190;
i__28157_28179 = G__28191;
continue;
} else {
var f_28192 = cljs.core.first.call(null,seq__28154_28186__$1);
cljs.core.println.call(null,"  ",f_28192);


var G__28193 = cljs.core.next.call(null,seq__28154_28186__$1);
var G__28194 = null;
var G__28195 = (0);
var G__28196 = (0);
seq__28154_28176 = G__28193;
chunk__28155_28177 = G__28194;
count__28156_28178 = G__28195;
i__28157_28179 = G__28196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28197);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28197)))?cljs.core.second.call(null,arglists_28197):arglists_28197));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28158_28198 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28159_28199 = null;
var count__28160_28200 = (0);
var i__28161_28201 = (0);
while(true){
if((i__28161_28201 < count__28160_28200)){
var vec__28162_28202 = cljs.core._nth.call(null,chunk__28159_28199,i__28161_28201);
var name_28203 = cljs.core.nth.call(null,vec__28162_28202,(0),null);
var map__28165_28204 = cljs.core.nth.call(null,vec__28162_28202,(1),null);
var map__28165_28205__$1 = ((((!((map__28165_28204 == null)))?(((((map__28165_28204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28165_28204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165_28204):map__28165_28204);
var doc_28206 = cljs.core.get.call(null,map__28165_28205__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28207 = cljs.core.get.call(null,map__28165_28205__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28203);

cljs.core.println.call(null," ",arglists_28207);

if(cljs.core.truth_(doc_28206)){
cljs.core.println.call(null," ",doc_28206);
} else {
}


var G__28208 = seq__28158_28198;
var G__28209 = chunk__28159_28199;
var G__28210 = count__28160_28200;
var G__28211 = (i__28161_28201 + (1));
seq__28158_28198 = G__28208;
chunk__28159_28199 = G__28209;
count__28160_28200 = G__28210;
i__28161_28201 = G__28211;
continue;
} else {
var temp__5457__auto___28212 = cljs.core.seq.call(null,seq__28158_28198);
if(temp__5457__auto___28212){
var seq__28158_28213__$1 = temp__5457__auto___28212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28158_28213__$1)){
var c__4319__auto___28214 = cljs.core.chunk_first.call(null,seq__28158_28213__$1);
var G__28215 = cljs.core.chunk_rest.call(null,seq__28158_28213__$1);
var G__28216 = c__4319__auto___28214;
var G__28217 = cljs.core.count.call(null,c__4319__auto___28214);
var G__28218 = (0);
seq__28158_28198 = G__28215;
chunk__28159_28199 = G__28216;
count__28160_28200 = G__28217;
i__28161_28201 = G__28218;
continue;
} else {
var vec__28167_28219 = cljs.core.first.call(null,seq__28158_28213__$1);
var name_28220 = cljs.core.nth.call(null,vec__28167_28219,(0),null);
var map__28170_28221 = cljs.core.nth.call(null,vec__28167_28219,(1),null);
var map__28170_28222__$1 = ((((!((map__28170_28221 == null)))?(((((map__28170_28221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28170_28221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170_28221):map__28170_28221);
var doc_28223 = cljs.core.get.call(null,map__28170_28222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28224 = cljs.core.get.call(null,map__28170_28222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28220);

cljs.core.println.call(null," ",arglists_28224);

if(cljs.core.truth_(doc_28223)){
cljs.core.println.call(null," ",doc_28223);
} else {
}


var G__28225 = cljs.core.next.call(null,seq__28158_28213__$1);
var G__28226 = null;
var G__28227 = (0);
var G__28228 = (0);
seq__28158_28198 = G__28225;
chunk__28159_28199 = G__28226;
count__28160_28200 = G__28227;
i__28161_28201 = G__28228;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28172 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28173 = null;
var count__28174 = (0);
var i__28175 = (0);
while(true){
if((i__28175 < count__28174)){
var role = cljs.core._nth.call(null,chunk__28173,i__28175);
var temp__5457__auto___28229__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28229__$1)){
var spec_28230 = temp__5457__auto___28229__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28230));
} else {
}


var G__28231 = seq__28172;
var G__28232 = chunk__28173;
var G__28233 = count__28174;
var G__28234 = (i__28175 + (1));
seq__28172 = G__28231;
chunk__28173 = G__28232;
count__28174 = G__28233;
i__28175 = G__28234;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28172);
if(temp__5457__auto____$1){
var seq__28172__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28172__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28172__$1);
var G__28235 = cljs.core.chunk_rest.call(null,seq__28172__$1);
var G__28236 = c__4319__auto__;
var G__28237 = cljs.core.count.call(null,c__4319__auto__);
var G__28238 = (0);
seq__28172 = G__28235;
chunk__28173 = G__28236;
count__28174 = G__28237;
i__28175 = G__28238;
continue;
} else {
var role = cljs.core.first.call(null,seq__28172__$1);
var temp__5457__auto___28239__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28239__$2)){
var spec_28240 = temp__5457__auto___28239__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28240));
} else {
}


var G__28241 = cljs.core.next.call(null,seq__28172__$1);
var G__28242 = null;
var G__28243 = (0);
var G__28244 = (0);
seq__28172 = G__28241;
chunk__28173 = G__28242;
count__28174 = G__28243;
i__28175 = G__28244;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1522701098240
