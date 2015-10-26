// Compiled by ClojureScript 1.7.48 {}
goog.provide('onyx_cheat_sheet.core');
goog.require('cljs.core');
goog.require('om_bootstrap.panel');
goog.require('om.dom');
goog.require('om_bootstrap.grid');
goog.require('om_bootstrap.random');
goog.require('om_bootstrap.nav');
goog.require('fipp.edn');
goog.require('om.core');
goog.require('om_bootstrap.button');
cljs.core.enable_console_print_BANG_.call(null);
onyx_cheat_sheet.core.model = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("onyx","group-by-key","onyx/group-by-key",1014495201),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("onyx","plugin","onyx/plugin",-1694913021),new cljs.core.Keyword("onyx","uniqueness-key","onyx/uniqueness-key",480579909),new cljs.core.Keyword("onyx","medium","onyx/medium",-1885528026),new cljs.core.Keyword("onyx","batch-timeout","onyx/batch-timeout",422744106),new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("onyx","input-retry-timeout","onyx/input-retry-timeout",-1814857877),new cljs.core.Keyword("onyx","restart-pred-fn","onyx/restart-pred-fn",1562954860),new cljs.core.Keyword("onyx","bulk?","onyx/bulk?",516979180),new cljs.core.Keyword("onyx","max-pending","onyx/max-pending",2089404204),new cljs.core.Keyword("onyx","max-peers","onyx/max-peers",-1096140691),new cljs.core.Keyword("onyx","n-peers","onyx/n-peers",1624351917),new cljs.core.Keyword("onyx","min-peers","onyx/min-peers",1070508110),new cljs.core.Keyword("onyx","group-by-fn","onyx/group-by-fn",-260492431),new cljs.core.Keyword("onyx","language","onyx/language",-1594523950),new cljs.core.Keyword("onyx","flux-policy","onyx/flux-policy",-796588140),new cljs.core.Keyword("onyx","doc","onyx/doc",2050978421),new cljs.core.Keyword("onyx","pending-timeout","onyx/pending-timeout",646141687),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The key, or vector of keys, to group incoming segments by. Keys that hash to the same value will always be sent to the same virtual peer.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:function`"], null),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot be defined when `:onyx/group-by-fn` is defined."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully qualified, namespaced keyword that points to a function on the classpath. This function takes at least one argument - an incoming segment, and returns either a segment or a vector of segments. This function may not return `nil`. This function can be parameterized further through a variety of techniques.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:function`"], null),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","`:onyx/type` is set to `:output`"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"When `:onyx/language` is set to `:clojure`, this is a fully qualified, namespaced keyword pointing to a function that takes the Event map and returns a Record implementing the Plugin interfaces. When `:onyx/language` is set to `:java`, this is a keyword pointing to a Java class that is constructed with the Event map. This class must implement the interoperability interfaces.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","`:onyx/type` is set to `:output`"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The key of incoming segments that indicates global uniqueness. This is used by the Windowing feature to detect duplicated processing of segments. An example of this would be an `:id` key for segments representing users, assuming `:id` is globally unique in your system. An example of a bad uniqueness-key would be `:first-name` as two or more users may have their first names in common.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A Window is defined on this task."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Denotes the kind of input or output communication or storage that is being read from or written to (e.g. `:kafka` or `:web-socket`). This is currently does not affect any functionality, and is reserved for the future.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","`:onyx/type` is set to `:output`"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The number of milliseconds a peer will wait to read more segments before processing them all in a batch for this task. Segments will be processe when either `:onyx/batch-timeout` milliseconds passed, or `:onyx/batch-size` segments have been read - whichever comes first. This is a knob that is used to tune throughput and latency, and it goes hand-in-hand with `:onyx/batch-size`.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value must be greater than 0."], null),new cljs.core.Keyword(null,"default","default",-1987822328),(1000),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The role that this task performs. `:input` reads data. `:function` applies a transformation. `:output` writes data.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"output","output",-1105869043)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The name of the task that represents this catalog entry. Must correspond to a keyword in the workflow associated with this catalog.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must be unique across all catalog entries.","Value cannot be `:none`.","Value cannot be `:all`."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The duration of time, in milliseconds, that the input task goes dormant between checking which segments should expire from its internal pending pool. When segments expire, they are automatically retried.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(1000),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","Value must be greater than 0."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully-qualified namespaced keyword pointing to function which takes an exception as a parameter, returning a boolean indicating whether the peer that threw this exception should restart its task.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must resolve to a function on the classpath at runtime."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Boolean value indicating whether the function in this catalog entry denoted by `:onyx/fn` should take a single segment, or the entire batch of segments that were read as a parameter. When set to `true`, this function's return value is ignored. The segments are identically propogated to the downstream tasks.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:function`"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The maximum number of segments that a peer executing an input task will allow in its internal pending message pool. If this pool is filled to capacity, it will not accept new segments - exhibiting backpressure to upstream message produces.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(10000),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"segments","segments",1937535949),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","Value must be greater than 0."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The maximum number of peers that will ever be assigned to this task concurrently.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value must be greater than 0."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A convenience parameter which expands to `:onyx/min-peers` and `:onyx/max-peers` set to the same value. This is useful if you want to specify exactly how many peers should concurrently execute this task - no more, and no less.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value must be greater than 0.","`:onyx/min-peers` cannot also be defined for this catalog entry.","`:onyx/max-peers` cannot also be defined for this catalog entry.","`:onyx/flux-policy` must also be defined in this catalog entry."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The minimum number of peers that will be concurrently assigned to execute this task before it begins. If the number of peers working on this task falls below its initial count due to failure or planned departure, the choice of `:onyx/flux-policy` defines the strategy for what to do.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value must be greater than 0.","`:onyx/flux-policy` must also be defined in this catalog entry."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully qualified, namespaced keyword that points to a function on the classpath. This function takes a single argument, a segment, as a parameter. The value that the function returns will be hashed. Values that hash to the same value will always be sent to the same virtual peer.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:function`"], null),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot be defined when `:onyx/group-by-key` is defined."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Designates the language that the function denoted by `:onyx/fn` is implemented in.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojure","clojure",438975815),new cljs.core.Keyword(null,"java","java",1958249105)], null),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"clojure","clojure",438975815),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The policy that should be used when a task with grouping enabled loses a peer. Losing a peer means that the consistent hashing used to pin the same hashed values to the same peers will be altered. Using the `:kill` flux policy will kill the job. This is useful for jobs that cannot tolerate an altered hashing strategy. Using `:continue` will allow the job to continue running. With `:kill` and `:continue`, new peers will never be added to this job. The final policy is `:recover`, which is like `:continue`, but will allow peers to be added back to this job to meet the `:onyx/min-peers` number of peers working on this task concurrently.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"continue","continue",-207346553),new cljs.core.Keyword(null,"recover","recover",849894427)], null),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:function`","`:onyx/group-by-key` or `:onyx/group-by-fn` is set."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A docstring for this catalog entry.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The duration of time, in milliseconds, that a segment that enters an input task has to be fully acknowledged and processed. That is, this segment, and any subsequent segments that it creates in downstream tasks, must be fully processed before this timeout occurs. If the segment is not fully processed, it will automatically be retried.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(60000),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/type` is set to `:input`","Value must be greater than 0."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The number of segments a peer will wait to read before processing them all in a batch for this task. Segments will be processed when either `:onyx/batch-size` segments have been received at this peer, or `:onyx/batch-timeout` milliseconds have passed - whichever comes first. This is a knob that is used to tune throughput and latency, and it goes hand-in-hand with `:onyx/batch-timeout`.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value must be greater than 0."], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null)]),new cljs.core.Keyword(null,"flow-conditions-entry","flow-conditions-entry",-211720219),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The source task from which segments are being sent.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must name a task in the workflow."], null)], null),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The destination task where segments will arrive. If set to `:all`, all downstream tasks will receive this segment. If set to `:none`, no downstream tasks will receive this segment. Otherwise it must name a vector of keywords indicating downstream tasks. The order of keywords is irrelevant.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["When the value is a vector of keyword, every keyword must name a task in the workflow."], null)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"When denoted as a keyword, this must be a fully qualified, namespaced keyword pointing to a function on the classpath at runtime. This function takes at least 4 arguments - the Event map, the old segment before `:onyx/fn` was applied, the new segment after `:onyx/fn` was applied, and the sequence of new segments generated by the old semgent. If the old segment generated exactly one segment, and not a sequence of segments, the value of the last parameter will be a collection with only the new segment in it.\n\nWhen denoted as a vector of keywords, the first value in the vector  may either be the keyword `:and`, `:or`, or `:not`, or be a keyword as described above. In the latter case, any subsequent values must be keywords that resolve to keys in the flow condition entries map. The values of these keys are resolved and passed as additional parameters to the function. In the former case, the result of the function (which may again be wrapped with a vector to nest logical operators or parameters), is applied with the designated logical operator. This yields predicate composition.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.Keyword("flow","exclude-keys","flow/exclude-keys",-1649393939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"If any of the keys are present in the segment, they will be `dissoc`ed from the segment before it is sent downstream. This is useful when values in the segment are present purely for the purpose of making a decision about which downstream tasks it should be sent to.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.Keyword("flow","short-circuit?","flow/short-circuit?",1461327862),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"When multiple flow condition entry predicates evaluated to true, the tasks in `:flow/to` are set unioned. If this behavior is undesirable, and you want exactly the tasks in this flow condition's `:flow/to` key to be used, plus any previously matched flow conditions `:flow/to` values. Setting `:flow/short-circuit?` to `true` will force the matcher to stop executing and immediately return with the values that it matched.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any entry that has :flow/short-circuit? set to true must come before any entries for an task that have it set to false or nil."], null)], null),new cljs.core.Keyword("flow","thrown-exception?","flow/thrown-exception?",-552689668),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"If an exception is thrown from an Onyx transformation function, you can capture it from within your flow conditions by setting this value to `true`. If an exception is thrown, only flow conditions with `:flow/thrown-exception?` set to `true` will be evaluated. The value that is normally the segment which is sent to the predicate will be the exception object that was thrown. Note that exceptions don't serialize. This feature is meant to be used in conjunction with Post-transformations and Actions for sending exception values to downstream tasks.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception flow conditions must have `:flow/short-circuit?` set to `true`"], null)], null),new cljs.core.Keyword("flow","post-transform","flow/post-transform",38759804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully qualified, namespaced keyword that points to a function on the classpath at runtime. This function is invoked when an exception is thrown processing a segment in `:onyx/fn` and this flow condition's predicate evaluates to `true`. The function takes 3 parameters - the Event map, the segment that causes the exception to be thrown, and the exception object. The return value of this function is sent to the downstream tasks instead of trying to serialize the exception. The return value must be a segment or sequence of segments, and must serialize.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:flow/thrown-exception?` must be set to `true`."], null)], null),new cljs.core.Keyword("flow","action?","flow/action?",693692613),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Names a side effect to perform in response to processing this segment. If set to `:retry`, this segment will be immediately, forcibly retried from the root input task from which it eminated. This segment will not be sent to any downstream tasks.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"retry","retry",-614012896)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any flow condition clauses with `:flow/action` set to `:retry` must also have `:flow/short-circuit?` set to `true`, and `:flow/to` set to `:none`."], null)], null)], null),new cljs.core.Keyword(null,"window-entry","window-entry",-1287033319),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("window","min-key","window/min-key",2111444129),new cljs.core.Keyword("window","window-key","window/window-key",-436709213),new cljs.core.Keyword("window","slide","window/slide",929701092),new cljs.core.Keyword("window","id","window/id",-62222780),new cljs.core.Keyword("window","aggregation","window/aggregation",842492712),new cljs.core.Keyword("window","doc","window/doc",-1961448405),new cljs.core.Keyword("window","timeout-gap","window/timeout-gap",1031887595),new cljs.core.Keyword("window","range","window/range",818435118),new cljs.core.Keyword("window","init","window/init",-987606858),new cljs.core.Keyword("window","task","window/task",-720839305),new cljs.core.Keyword("window","type","window/type",-1895193220)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A globally minimum value that values of `:window/window-key` will never be less than. This is used for calculating materialized aggregates for windows in a space efficient manner.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The key of the incoming segments to window over. This key can represent any totally ordered domain, for example `:event-time`.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"To offset of time, or other totally ordered domain, to wait before starting a new window after the previous window.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175)], null),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The `:window/type` is `:sliding`."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A unique identifier for this window.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must be unique across all Window entries."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"If this value is a keyword, it is a fully qualified, namespaced keyword pointing to a symbol on the classpath at runtime. This symbol must be a map with keys as further specified by the information model. Onyx comes with a handful of aggregations built in, such as `:onyx.windowing.aggregation/min`. See the User Guide for the full list. Users can also implement their own aggregations.\n\nIf this value is a vector, it contain two values: a keyword as described above, and another keyword which represents the key to aggregate over.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A docstring for this window.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The duration of dormant activity that constitutes a session window being closed.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The `window/type` is `:session`."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The span of time, or other totally ordered domain, that this window will capture data within.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The `:window/type` is `:fixed` or `:sliding`."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The initial value to be used for the aggregate, if required. Some aggregates require this, such as the Minimum aggregate. Others, such as the Conj aggregate, do not, as empty vector makes a suitable initial value.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["The `:window/aggregation` has no predefined initial value."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The task that this window will be applied to.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must name a task in the workflow."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The type of Window to use. See the User Guide for what each type means.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"sliding","sliding",1380642697),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"session","session",1008279103)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null)]),new cljs.core.Keyword(null,"trigger-entry","trigger-entry",-1417013388),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The name of a `:window/id` window to fire the trigger against.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must name a `:window/id` in the window entries."], null)], null),new cljs.core.Keyword("trigger","refinement","trigger/refinement",-1212299589),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The refinement mode to use when firing the trigger against a window. When set to `:accumulating`, the window contents remain. When set to `:discarding`, the window contents are destroyed, resetting the window to the initial aggregation value. The initial value is set lazily so expired windows do not unnecessarily consume memory.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accumulating","accumulating",988482775),new cljs.core.Keyword(null,"discarding","discarding",902687213)], null),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.Keyword("trigger","on","trigger/on",-836079968),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The event to trigger in reaction to, such as a segment with a special feature, or on a timer. See the User Guide for the full list of prepackaged Triggers.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.Keyword("trigger","sync","trigger/sync",500894838),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully qualified, namespaced keyword pointing to a function on the classpath at runtime. This function takes the window contents as its argument. Its return value is ignored. This function is invoked when the trigger fires, and is used to do any arbitrary action with the window contents, such as sync them to a database.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.Keyword("trigger","fire-all-extents?","trigger/fire-all-extents?",-371445799),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to `true`, if any particular extent fires in reaction to this trigger, all extents also fire.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),false], null),new cljs.core.Keyword("trigger","doc","trigger/doc",-1159844365),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A docstring for this trigger.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null)], null),new cljs.core.Keyword(null,"lifecycle-entry","lifecycle-entry",932450398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lifecycle","name","lifecycle/name",2012133287),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A unique name identifying this lifecycle.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Must be unique across all lifecycle entries."], null)], null),new cljs.core.Keyword("lifecycle","calls","lifecycle/calls",-199124898),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A fully qualified, namespaced keyword pointing to a symbol on the classpath at runtime. This symbol must be a map with keys further specified by the information model. The keys in this map denote the concrete functions to invoke at execution time.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"optional?","optional?",1184638129),false], null),new cljs.core.Keyword("lifecycle","doc","lifecycle/doc",1610973345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A docstring for this lifecycle.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null)], null),new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("onyx.messaging","peer-port-range","onyx.messaging/peer-port-range",-153643744),new cljs.core.Keyword("onyx.peer","retry-start-interval","onyx.peer/retry-start-interval",-1235138208),new cljs.core.Keyword("onyx.messaging","retry-ch-buffer-size","onyx.messaging/retry-ch-buffer-size",535064192),new cljs.core.Keyword("onyx.peer","inbox-capacity","onyx.peer/inbox-capacity",1031762338),new cljs.core.Keyword("onyx.messaging","ack-daemon-timeout","onyx.messaging/ack-daemon-timeout",-783866941),new cljs.core.Keyword("onyx.messaging","allow-short-circuit?","onyx.messaging/allow-short-circuit?",-1704052220),new cljs.core.Keyword("onyx.peer","join-failure-back-off","onyx.peer/join-failure-back-off",-1619886811),new cljs.core.Keyword("onyx.messaging.aeron","offer-idle-strategy","onyx.messaging.aeron/offer-idle-strategy",738857254),new cljs.core.Keyword("onyx.peer","backpressure-low-water-pct","onyx.peer/backpressure-low-water-pct",1505344198),new cljs.core.Keyword("onyx.peer","job-not-ready-back-off","onyx.peer/job-not-ready-back-off",348914406),new cljs.core.Keyword("onyx.messaging","compress-fn","onyx.messaging/compress-fn",-751146010),new cljs.core.Keyword("onyx.peer","drained-back-off","onyx.peer/drained-back-off",498278632),new cljs.core.Keyword("onyx.messaging","peer-link-idle-timeout","onyx.messaging/peer-link-idle-timeout",-792110744),new cljs.core.Keyword("onyx.zookeeper","backoff-max-retries","onyx.zookeeper/backoff-max-retries",1231536936),new cljs.core.Keyword("onyx.messaging","peer-ports","onyx.messaging/peer-ports",1125185771),new cljs.core.Keyword("onyx.messaging","release-ch-buffer-size","onyx.messaging/release-ch-buffer-size",-1717594836),new cljs.core.Keyword("onyx.messaging.aeron","subscriber-count","onyx.messaging.aeron/subscriber-count",-1978303730),new cljs.core.Keyword("onyx.messaging","peer-link-gc-interval","onyx.messaging/peer-link-gc-interval",98178224),new cljs.core.Keyword("onyx.messaging","impl","onyx.messaging/impl",419530192),new cljs.core.Keyword("onyx.messaging","ack-daemon-clear-interval","onyx.messaging/ack-daemon-clear-interval",1485398129),new cljs.core.Keyword("onyx.peer","fn-params","onyx.peer/fn-params",-1543429359),new cljs.core.Keyword("onyx.zookeeper","backoff-max-sleep-time-ms","onyx.zookeeper/backoff-max-sleep-time-ms",131276947),new cljs.core.Keyword("onyx.messaging","completion-buffer-size","onyx.messaging/completion-buffer-size",-885087949),new cljs.core.Keyword("onyx.zookeeper","backoff-base-sleep-time-ms","onyx.zookeeper/backoff-base-sleep-time-ms",1258198647),new cljs.core.Keyword("onyx.messaging","decompress-fn","onyx.messaging/decompress-fn",-1849717833),new cljs.core.Keyword("onyx.messaging.aeron","poll-idle-strategy","onyx.messaging.aeron/poll-idle-strategy",1139046072),new cljs.core.Keyword("onyx.messaging.aeron","embedded-driver?","onyx.messaging.aeron/embedded-driver?",446016537),new cljs.core.Keyword("onyx.peer","backpressure-check-interval","onyx.peer/backpressure-check-interval",1375254681),new cljs.core.Keyword("onyx.peer","outbox-capacity","onyx.peer/outbox-capacity",632105721),new cljs.core.Keyword("onyx.peer","backpressure-high-water-pct","onyx.peer/backpressure-high-water-pct",609149594),new cljs.core.Keyword("onyx.messaging","inbound-buffer-size","onyx.messaging/inbound-buffer-size",1889067836),new cljs.core.Keyword("onyx.messaging","bind-addr","onyx.messaging/bind-addr",2090466014),new cljs.core.Keyword("onyx.messaging.aeron","write-buffer-size","onyx.messaging.aeron/write-buffer-size",359494462),new cljs.core.Keyword("onyx.peer","peer-not-ready-back-off","onyx.peer/peer-not-ready-back-off",-35609505)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A vector of two integers that denotes the low and high values, inclusive, of ports that peers should use to communicate. Ports are allocated predictably in-order.",new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx.messaging/peer-ports` is not defined."], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms to wait before trying to reboot a virtual peer after failure.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"default","default",-1987822328),(2000),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of messages to buffer in the core.async channel for retrying timed-out messages.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(10000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Maximum number of messages to try to prefetch and store in the inbox, since reading from the log happens asynchronously.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"default","default",-1987822328),(1000),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of milliseconds that an ack value can go without being updates on a daemon before it is eligible to time out.",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(60000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A boolean denoting whether to allow virtual peers to short circuit networked messaging when colocated with the other virtual peer. Short circuiting allows for direct transfer of messages to a virtual peer's internal buffers, which improves performance where possible. This configuration option is primarily for use in perfomance testing, as peers will not generally be able to short circuit messaging after scaling to many nodes.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms to wait before trying to rejoin the cluster after a previous join attempt has aborted.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Aeron idle strategy to use between when offering messages to another peer. Currently, two choices `:high-restart-latency` and `:low-restart-latency` can be chosen. low-restart-latency may result in lower latency message, at the cost of higher CPU usage or potentially reduced throughput.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"high-restart-latency","high-restart-latency",824291080),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-restart-latency","high-restart-latency",824291080),new cljs.core.Keyword(null,"low-restart-latency","low-restart-latency",585970780)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Percentage of messaging inbound-buffer-size that constitutes a low water mark for backpressure purposes.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),(30)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms to back off and wait before trying to discover configuration needed to start the subscription after discovery failure.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),(500)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Clojure function to use for messaging compression. Receives one argument - a sequence of segments. Must return a byte array representing the segment seq.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Symbol("onyx.compression.nippy","compress","onyx.compression.nippy/compress",-587503273,null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms to wait before trying to complete the job if all input tasks have been exhausted.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"default","default",-1987822328),(400),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The maximum amount of time that a peer link can be idle (not looked up in the state atom for usage) before it is eligible to be closed. The connection will be reopened from scratch the next time it is needed.",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(60000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Maximum number of times to retry connecting to ZooKeeper",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(5)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A vector of integers denoting ports that may be used for peer communication. This differences from `peer-port-range` in that this names specific ports, not a sequence of ports. Ports are allocated predictably in-order. ",new cljs.core.Keyword(null,"required-when","required-when",-247893371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx.messaging/peer-port-range` is not defined."], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of messages to buffer in the core.async channel for released completed messages.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(10000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The number of Aeron subscriber threads that receive messages for the peer-group.  As peer-groups are generally configured per-node (machine), this setting can bottleneck receive performance if many virtual peers are used per-node, or are receiving and/or de-serializing large volumes of data. A good guidline is is `num cores = num virtual peers + num subscribers`, assuming virtual peers are generally being fully utilised.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(2)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The interval in milliseconds to wait between closing idle peer links.",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(90000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The messaging protocol to use for peer-to-peer communication.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aeron","aeron",-1186183155)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of milliseconds to wait for process to periodically clear out ack-vals that have timed out in the daemon.",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(15000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A map of keywords to vectors. Keywords represent task names, vectors represent the first parameters to apply to the function represented by the task. For example, `{:add [42]}` for task `:add` will call the function underlying `:add` with `(f 42 <segment>)` This will apply to any job with this task name.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Maximum amount of time in ms to sleep on each retry",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(30000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of messages to buffer in the core.async channel for completing messages on an input task.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(1000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Initial amount of time to wait between ZooKeeper connection retries",new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(1000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Clojure function to use for messaging decompression. Receives one argument - a byte array. Must return the decompressed value of the byte array.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Symbol("onyx.compression.nippy","decompress","onyx.compression.nippy/decompress",-2045421911,null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The Aeron idle strategy to use between when polling for new messages. Currently, two choices `:high-restart-latency` and `:low-restart-latency` can be chosen. low-restart-latency may result in lower latency message, at the cost of higher CPU usage or potentially reduced throughput.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"high-restart-latency","high-restart-latency",824291080),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-restart-latency","high-restart-latency",824291080),new cljs.core.Keyword(null,"low-restart-latency","low-restart-latency",585970780)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A boolean denoting whether an Aeron media driver should be started up with the environment. See [Aeron Media Driver](../../src/onyx/messaging/aeron_media_driver.clj) for an example for how to start the media driver externally.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"default","default",-1987822328),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms between checking whether the virtual peer should notify the cluster of backpressure-on/backpressure-off.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),(10)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Maximum number of messages to buffer in the outbox for writing, since writing to the log happens asynchronously.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"default","default",-1987822328),(1000),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Percentage of messaging inbound-buffer-size that constitutes a high water mark for backpressure purposes.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"default","default",-1987822328),(60)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of messages to buffer in the core.async channel for received segments.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(20000)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"An IP address to bind the peer to for messaging. Defaults to `nil`. When `nil`, Onyx binds to it's external IP to the result of calling `http://checkip.amazonaws.com`.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),false,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Size of the write queue for the Aeron publication. Writes to this queue will currently block once full.",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"default","default",-1987822328),(1000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Number of ms to back off and wait before retrying the call to `start-task?` lifecycle hook if it returns false.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),new cljs.core.Keyword(null,"default","default",-1987822328),(2000),new cljs.core.Keyword(null,"optional?","optional?",1184638129),true], null)])], null);
onyx_cheat_sheet.core.examples = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"core-async-input","core-async-input",-1928121421),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A catalog entry to read input from a core.async channel.",new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword(null,"my-input-task-name","my-input-task-name",892121735),new cljs.core.Keyword("onyx","plugin","onyx/plugin",-1694913021),new cljs.core.Keyword("onyx.plugin.core-async","input","onyx.plugin.core-async/input",-1349951628),new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","medium","onyx/medium",-1885528026),new cljs.core.Keyword(null,"core.async","core.async",-505018286),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),(20),new cljs.core.Keyword("onyx","max-peers","onyx/max-peers",-1096140691),(1),new cljs.core.Keyword("onyx","doc","onyx/doc",2050978421),"Reads segments from a core.async channel"], null),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/max-peers` must be set to `1`. Multiple peers trying to read from the same channel would yield incorrect behavior.","The core.async input plugin is not fault tolerant. Only use it for development."], null)], null),new cljs.core.Keyword(null,"core-async-output","core-async-output",-1216218507),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"A catalog entry to write output to a core.async channel.",new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword(null,"my-output-task-name","my-output-task-name",768803345),new cljs.core.Keyword("onyx","plugin","onyx/plugin",-1694913021),new cljs.core.Keyword("onyx.plugin.core-async","output","onyx.plugin.core-async/output",728662854),new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","medium","onyx/medium",-1885528026),new cljs.core.Keyword(null,"core.async","core.async",-505018286),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),(20),new cljs.core.Keyword("onyx","max-peers","onyx/max-peers",-1096140691),(1),new cljs.core.Keyword("onyx","doc","onyx/doc",2050978421),"Writes segments to a core.async channel"], null),new cljs.core.Keyword(null,"restrictions","restrictions",1874752994),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`:onyx/max-peers` must be set to `1`. Multiple peers trying to write to the same channel would yield incorrect behavior.","You'll probably want to use a channel with a sliding or dropping buffer. If a channel put operation blocks, a virtual peer threads will also block, and progress cannot be made until the channel unblocks."], null)], null)], null)], null);
if(typeof onyx_cheat_sheet.core.app_state !== 'undefined'){
} else {
onyx_cheat_sheet.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
onyx_cheat_sheet.core.codify = (function onyx_cheat_sheet$core$codify(text){
var text__$1 = clojure.string.split.call(null,text,/\s/);
return cljs.core.clj__GT_js.call(null,cljs.core.interpose.call(null," ",cljs.core.map.call(null,((function (text__$1){
return (function (x){
if(cljs.core._EQ_.call(null,"`",cljs.core.first.call(null,x))){
return React.DOM.code(cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,((function (text__$1){
return (function (letter){
return cljs.core._EQ_.call(null,letter,"`");
});})(text__$1))
,x)));
} else {
return x;
}
});})(text__$1))
,text__$1)));
});
onyx_cheat_sheet.core.allowed_types = (function onyx_cheat_sheet$core$allowed_types(section,k){
var types = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"type","type",1174270348)], null));
var types__$1 = ((!(cljs.core.coll_QMARK_.call(null,types)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [types], null):types);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.strong({"className": "inline-header"},"allowed types"),(function (){var iter__19637__auto__ = ((function (types,types__$1){
return (function onyx_cheat_sheet$core$allowed_types_$_iter__45273(s__45274){
return (new cljs.core.LazySeq(null,((function (types,types__$1){
return (function (){
var s__45274__$1 = s__45274;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45274__$1);
if(temp__4425__auto__){
var s__45274__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45274__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45274__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45276 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45275 = (0);
while(true){
if((i__45275 < size__19636__auto__)){
var t = cljs.core._nth.call(null,c__19635__auto__,i__45275);
cljs.core.chunk_append.call(null,b__45276,om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,t)));

var G__45277 = (i__45275 + (1));
i__45275 = G__45277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45276),onyx_cheat_sheet$core$allowed_types_$_iter__45273.call(null,cljs.core.chunk_rest.call(null,s__45274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45276),null);
}
} else {
var t = cljs.core.first.call(null,s__45274__$2);
return cljs.core.cons.call(null,om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,t)),onyx_cheat_sheet$core$allowed_types_$_iter__45273.call(null,cljs.core.rest.call(null,s__45274__$2)));
}
} else {
return null;
}
break;
}
});})(types,types__$1))
,null,null));
});})(types,types__$1))
;
return iter__19637__auto__.call(null,types__$1);
})()], null);
});
onyx_cheat_sheet.core.restrictions = (function onyx_cheat_sheet$core$restrictions(usage,section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,usage,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"restrictions","restrictions",1874752994)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var restrictions__$1 = temp__4425__auto__;
return om_bootstrap.random.alert.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"warning"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h5(cljs.core.PersistentArrayMap.EMPTY,"Restrictions"),(function (){var iter__19637__auto__ = ((function (restrictions__$1,temp__4425__auto__){
return (function onyx_cheat_sheet$core$restrictions_$_iter__45282(s__45283){
return (new cljs.core.LazySeq(null,((function (restrictions__$1,temp__4425__auto__){
return (function (){
var s__45283__$1 = s__45283;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45283__$1);
if(temp__4425__auto____$1){
var s__45283__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45283__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45283__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45285 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45284 = (0);
while(true){
if((i__45284 < size__19636__auto__)){
var restriction = cljs.core._nth.call(null,c__19635__auto__,i__45284);
cljs.core.chunk_append.call(null,b__45285,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,restriction)));

var G__45286 = (i__45284 + (1));
i__45284 = G__45286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45285),onyx_cheat_sheet$core$restrictions_$_iter__45282.call(null,cljs.core.chunk_rest.call(null,s__45283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45285),null);
}
} else {
var restriction = cljs.core.first.call(null,s__45283__$2);
return cljs.core.cons.call(null,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,restriction)),onyx_cheat_sheet$core$restrictions_$_iter__45282.call(null,cljs.core.rest.call(null,s__45283__$2)));
}
} else {
return null;
}
break;
}
});})(restrictions__$1,temp__4425__auto__))
,null,null));
});})(restrictions__$1,temp__4425__auto__))
;
return iter__19637__auto__.call(null,restrictions__$1);
})()], null));
} else {
return null;
}
});
onyx_cheat_sheet.core.choices = (function onyx_cheat_sheet$core$choices(section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"choices","choices",1385611597)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var choices__$1 = temp__4425__auto__;
var choices__$2 = ((!(cljs.core.coll_QMARK_.call(null,choices__$1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [choices__$1], null):choices__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.strong({"className": "inline-header"},"choices"),(function (){var iter__19637__auto__ = ((function (choices__$2,choices__$1,temp__4425__auto__){
return (function onyx_cheat_sheet$core$choices_$_iter__45291(s__45292){
return (new cljs.core.LazySeq(null,((function (choices__$2,choices__$1,temp__4425__auto__){
return (function (){
var s__45292__$1 = s__45292;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45292__$1);
if(temp__4425__auto____$1){
var s__45292__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45292__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45292__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45294 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45293 = (0);
while(true){
if((i__45293 < size__19636__auto__)){
var c = cljs.core._nth.call(null,c__19635__auto__,i__45293);
cljs.core.chunk_append.call(null,b__45294,om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,c)));

var G__45295 = (i__45293 + (1));
i__45293 = G__45295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45294),onyx_cheat_sheet$core$choices_$_iter__45291.call(null,cljs.core.chunk_rest.call(null,s__45292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45294),null);
}
} else {
var c = cljs.core.first.call(null,s__45292__$2);
return cljs.core.cons.call(null,om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,c)),onyx_cheat_sheet$core$choices_$_iter__45291.call(null,cljs.core.rest.call(null,s__45292__$2)));
}
} else {
return null;
}
break;
}
});})(choices__$2,choices__$1,temp__4425__auto__))
,null,null));
});})(choices__$2,choices__$1,temp__4425__auto__))
;
return iter__19637__auto__.call(null,choices__$2);
})()], null);
} else {
return null;
}
});
onyx_cheat_sheet.core.unit = (function onyx_cheat_sheet$core$unit(section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"unit","unit",375175175)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var unit__$1 = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.strong({"className": "inline-header"},"unit"),om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,unit__$1))], null);
} else {
return null;
}
});
onyx_cheat_sheet.core.default_value = (function onyx_cheat_sheet$core$default_value(section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.strong({"className": "inline-header"},"default"),om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"onyx-badge"], null),cljs.core.pr_str.call(null,v))], null);
} else {
return null;
}
});
onyx_cheat_sheet.core.requirements = (function onyx_cheat_sheet$core$requirements(section,k){
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"optional?","optional?",1184638129)], null)),false)){
return om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"required-badge onyx-badge"], null),"required");
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"required-when","required-when",-247893371)], null)))){
return om_bootstrap.random.badge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"required-badge onyx-badge"], null),"required sometimes");
} else {
return null;
}
}
});
onyx_cheat_sheet.core.required_when = (function onyx_cheat_sheet$core$required_when(section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"required-when","required-when",-247893371)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var conditions = temp__4425__auto__;
return om_bootstrap.random.alert.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"warning"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h5(cljs.core.PersistentArrayMap.EMPTY,"Required when"),(function (){var iter__19637__auto__ = ((function (conditions,temp__4425__auto__){
return (function onyx_cheat_sheet$core$required_when_$_iter__45300(s__45301){
return (new cljs.core.LazySeq(null,((function (conditions,temp__4425__auto__){
return (function (){
var s__45301__$1 = s__45301;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45301__$1);
if(temp__4425__auto____$1){
var s__45301__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45301__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45301__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45303 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45302 = (0);
while(true){
if((i__45302 < size__19636__auto__)){
var c = cljs.core._nth.call(null,c__19635__auto__,i__45302);
cljs.core.chunk_append.call(null,b__45303,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,c)));

var G__45304 = (i__45302 + (1));
i__45302 = G__45304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45303),onyx_cheat_sheet$core$required_when_$_iter__45300.call(null,cljs.core.chunk_rest.call(null,s__45301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45303),null);
}
} else {
var c = cljs.core.first.call(null,s__45301__$2);
return cljs.core.cons.call(null,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,c)),onyx_cheat_sheet$core$required_when_$_iter__45300.call(null,cljs.core.rest.call(null,s__45301__$2)));
}
} else {
return null;
}
break;
}
});})(conditions,temp__4425__auto__))
,null,null));
});})(conditions,temp__4425__auto__))
;
return iter__19637__auto__.call(null,conditions);
})()], null));
} else {
return null;
}
});
onyx_cheat_sheet.core.optionally_allowed_when = (function onyx_cheat_sheet$core$optionally_allowed_when(section,k){
var temp__4425__auto__ = cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"optionally-allowed-when","optionally-allowed-when",-1263777452)], null));
if(cljs.core.truth_(temp__4425__auto__)){
var conditions = temp__4425__auto__;
return om_bootstrap.random.alert.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"success"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h5(cljs.core.PersistentArrayMap.EMPTY,"Optionally allowed when"),(function (){var iter__19637__auto__ = ((function (conditions,temp__4425__auto__){
return (function onyx_cheat_sheet$core$optionally_allowed_when_$_iter__45309(s__45310){
return (new cljs.core.LazySeq(null,((function (conditions,temp__4425__auto__){
return (function (){
var s__45310__$1 = s__45310;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45310__$1);
if(temp__4425__auto____$1){
var s__45310__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45310__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45310__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45312 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45311 = (0);
while(true){
if((i__45311 < size__19636__auto__)){
var c = cljs.core._nth.call(null,c__19635__auto__,i__45311);
cljs.core.chunk_append.call(null,b__45312,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,c)));

var G__45313 = (i__45311 + (1));
i__45311 = G__45313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45312),onyx_cheat_sheet$core$optionally_allowed_when_$_iter__45309.call(null,cljs.core.chunk_rest.call(null,s__45310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45312),null);
}
} else {
var c = cljs.core.first.call(null,s__45310__$2);
return cljs.core.cons.call(null,React.DOM.li(cljs.core.PersistentArrayMap.EMPTY,onyx_cheat_sheet.core.codify.call(null,c)),onyx_cheat_sheet$core$optionally_allowed_when_$_iter__45309.call(null,cljs.core.rest.call(null,s__45310__$2)));
}
} else {
return null;
}
break;
}
});})(conditions,temp__4425__auto__))
,null,null));
});})(conditions,temp__4425__auto__))
;
return iter__19637__auto__.call(null,conditions);
})()], null));
} else {
return null;
}
});
onyx_cheat_sheet.core.feature_view = (function onyx_cheat_sheet$core$feature_view(section){
var iter__19637__auto__ = (function onyx_cheat_sheet$core$feature_view_$_iter__45318(s__45319){
return (new cljs.core.LazySeq(null,(function (){
var s__45319__$1 = s__45319;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45319__$1);
if(temp__4425__auto__){
var s__45319__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45319__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45319__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45321 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45320 = (0);
while(true){
if((i__45320 < size__19636__auto__)){
var k = cljs.core._nth.call(null,c__19635__auto__,i__45320);
cljs.core.chunk_append.call(null,b__45321,om_bootstrap.panel.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(k)].join('')], null),React.DOM.pre(cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(k)].join(''),onyx_cheat_sheet.core.requirements.call(null,section,k)),onyx_cheat_sheet.core.allowed_types.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.unit.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.default_value.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.choices.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),om_bootstrap.random.well.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-doc"], null),onyx_cheat_sheet.core.codify.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"doc","doc",1913296891)], null)))),onyx_cheat_sheet.core.restrictions.call(null,onyx_cheat_sheet.core.model,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.required_when.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.optionally_allowed_when.call(null,section,k)));

var G__45322 = (i__45320 + (1));
i__45320 = G__45322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45321),onyx_cheat_sheet$core$feature_view_$_iter__45318.call(null,cljs.core.chunk_rest.call(null,s__45319__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45321),null);
}
} else {
var k = cljs.core.first.call(null,s__45319__$2);
return cljs.core.cons.call(null,om_bootstrap.panel.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(k)].join('')], null),React.DOM.pre(cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(k)].join(''),onyx_cheat_sheet.core.requirements.call(null,section,k)),onyx_cheat_sheet.core.allowed_types.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.unit.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.default_value.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.choices.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),om_bootstrap.random.well.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-doc"], null),onyx_cheat_sheet.core.codify.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,k,new cljs.core.Keyword(null,"doc","doc",1913296891)], null)))),onyx_cheat_sheet.core.restrictions.call(null,onyx_cheat_sheet.core.model,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.required_when.call(null,section,k),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.optionally_allowed_when.call(null,section,k)),onyx_cheat_sheet$core$feature_view_$_iter__45318.call(null,cljs.core.rest.call(null,s__45319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19637__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,onyx_cheat_sheet.core.model,section))));
});
onyx_cheat_sheet.core.feature_options = (function onyx_cheat_sheet$core$feature_options(usage,section){
return om_bootstrap.random.well.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19637__auto__ = (function onyx_cheat_sheet$core$feature_options_$_iter__45327(s__45328){
return (new cljs.core.LazySeq(null,(function (){
var s__45328__$1 = s__45328;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45328__$1);
if(temp__4425__auto__){
var s__45328__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45328__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45328__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45330 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45329 = (0);
while(true){
if((i__45329 < size__19636__auto__)){
var k = cljs.core._nth.call(null,c__19635__auto__,i__45329);
cljs.core.chunk_append.call(null,b__45330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.code({"className": "code-example"},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(k)].join('')},[cljs.core.str(k)].join(''))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY)], null));

var G__45331 = (i__45329 + (1));
i__45329 = G__45331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45330),onyx_cheat_sheet$core$feature_options_$_iter__45327.call(null,cljs.core.chunk_rest.call(null,s__45328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45330),null);
}
} else {
var k = cljs.core.first.call(null,s__45328__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.code({"className": "code-example"},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(k)].join('')},[cljs.core.str(k)].join(''))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY)], null),onyx_cheat_sheet$core$feature_options_$_iter__45327.call(null,cljs.core.rest.call(null,s__45328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19637__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,usage,section))));
})());
});
onyx_cheat_sheet.core.catalog_entry_view = (function onyx_cheat_sheet$core$catalog_entry_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367));
});
onyx_cheat_sheet.core.catalog_entry_options = (function onyx_cheat_sheet$core$catalog_entry_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367));
});
onyx_cheat_sheet.core.flow_conditions_entry_view = (function onyx_cheat_sheet$core$flow_conditions_entry_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"flow-conditions-entry","flow-conditions-entry",-211720219));
});
onyx_cheat_sheet.core.flow_condition_entry_options = (function onyx_cheat_sheet$core$flow_condition_entry_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"flow-conditions-entry","flow-conditions-entry",-211720219));
});
onyx_cheat_sheet.core.lifecycle_entry_view = (function onyx_cheat_sheet$core$lifecycle_entry_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"lifecycle-entry","lifecycle-entry",932450398));
});
onyx_cheat_sheet.core.lifecycle_entry_options = (function onyx_cheat_sheet$core$lifecycle_entry_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"lifecycle-entry","lifecycle-entry",932450398));
});
onyx_cheat_sheet.core.window_entry_view = (function onyx_cheat_sheet$core$window_entry_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"window-entry","window-entry",-1287033319));
});
onyx_cheat_sheet.core.window_entry_options = (function onyx_cheat_sheet$core$window_entry_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"window-entry","window-entry",-1287033319));
});
onyx_cheat_sheet.core.trigger_entry_view = (function onyx_cheat_sheet$core$trigger_entry_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"trigger-entry","trigger-entry",-1417013388));
});
onyx_cheat_sheet.core.trigger_entry_options = (function onyx_cheat_sheet$core$trigger_entry_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"trigger-entry","trigger-entry",-1417013388));
});
onyx_cheat_sheet.core.peer_config_view = (function onyx_cheat_sheet$core$peer_config_view(){
return onyx_cheat_sheet.core.feature_view.call(null,new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561));
});
onyx_cheat_sheet.core.peer_config_options = (function onyx_cheat_sheet$core$peer_config_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.model,new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561));
});
onyx_cheat_sheet.core.pretty_edn = (function onyx_cheat_sheet$core$pretty_edn(input){
return clojure.string.replace.call(null,(function (){var sb__19839__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45334_45336 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45335_45337 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45334_45336,_STAR_print_fn_STAR_45335_45337,sb__19839__auto__){
return (function (x__19840__auto__){
return sb__19839__auto__.append(x__19840__auto__);
});})(_STAR_print_newline_STAR_45334_45336,_STAR_print_fn_STAR_45335_45337,sb__19839__auto__))
;

try{fipp.edn.pprint.call(null,input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(10)], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45335_45337;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45334_45336;
}
return [cljs.core.str(sb__19839__auto__)].join('');
})(),/\}\n\s\{/,"}\n\n {");
});
onyx_cheat_sheet.core.catalog_examples_view = (function onyx_cheat_sheet$core$catalog_examples_view(){
var iter__19637__auto__ = (function onyx_cheat_sheet$core$catalog_examples_view_$_iter__45342(s__45343){
return (new cljs.core.LazySeq(null,(function (){
var s__45343__$1 = s__45343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45343__$1);
if(temp__4425__auto__){
var s__45343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45343__$2)){
var c__19635__auto__ = cljs.core.chunk_first.call(null,s__45343__$2);
var size__19636__auto__ = cljs.core.count.call(null,c__19635__auto__);
var b__45345 = cljs.core.chunk_buffer.call(null,size__19636__auto__);
if((function (){var i__45344 = (0);
while(true){
if((i__45344 < size__19636__auto__)){
var k = cljs.core._nth.call(null,c__19635__auto__,i__45344);
cljs.core.chunk_append.call(null,b__45345,om_bootstrap.panel.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(k)].join('')], null),React.DOM.pre(cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(k)].join('')),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),om_bootstrap.random.well.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-doc"], null),onyx_cheat_sheet.core.codify.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.examples,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k,new cljs.core.Keyword(null,"doc","doc",1913296891)], null)))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),React.DOM.code({"className": "code-example"},onyx_cheat_sheet.core.pretty_edn.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.examples,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k,new cljs.core.Keyword(null,"code","code",1586293142)], null)))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.restrictions.call(null,onyx_cheat_sheet.core.examples,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k)));

var G__45346 = (i__45344 + (1));
i__45344 = G__45346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45345),onyx_cheat_sheet$core$catalog_examples_view_$_iter__45342.call(null,cljs.core.chunk_rest.call(null,s__45343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45345),null);
}
} else {
var k = cljs.core.first.call(null,s__45343__$2);
return cljs.core.cons.call(null,om_bootstrap.panel.panel.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(k)].join('')], null),React.DOM.pre(cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(k)].join('')),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),om_bootstrap.random.well.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"entry-doc"], null),onyx_cheat_sheet.core.codify.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.examples,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k,new cljs.core.Keyword(null,"doc","doc",1913296891)], null)))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),React.DOM.code({"className": "code-example"},onyx_cheat_sheet.core.pretty_edn.call(null,cljs.core.get_in.call(null,onyx_cheat_sheet.core.examples,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k,new cljs.core.Keyword(null,"code","code",1586293142)], null)))),React.DOM.p(cljs.core.PersistentArrayMap.EMPTY),onyx_cheat_sheet.core.restrictions.call(null,onyx_cheat_sheet.core.examples,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367),k)),onyx_cheat_sheet$core$catalog_examples_view_$_iter__45342.call(null,cljs.core.rest.call(null,s__45343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19637__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,onyx_cheat_sheet.core.examples,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367)))));
});
onyx_cheat_sheet.core.catalog_entry_examples_options = (function onyx_cheat_sheet$core$catalog_entry_examples_options(){
return onyx_cheat_sheet.core.feature_options.call(null,onyx_cheat_sheet.core.examples,new cljs.core.Keyword(null,"catalog-entry","catalog-entry",925067367));
});
onyx_cheat_sheet.core.main = (function onyx_cheat_sheet$core$main(){
return om.core.root.call(null,(function (app,owner){
if(typeof onyx_cheat_sheet.core.t45350 !== 'undefined'){
} else {

/**
* @constructor
*/
onyx_cheat_sheet.core.t45350 = (function (main,app,owner,meta45351){
this.main = main;
this.app = app;
this.owner = owner;
this.meta45351 = meta45351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
onyx_cheat_sheet.core.t45350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45352,meta45351__$1){
var self__ = this;
var _45352__$1 = this;
return (new onyx_cheat_sheet.core.t45350(self__.main,self__.app,self__.owner,meta45351__$1));
});

onyx_cheat_sheet.core.t45350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45352){
var self__ = this;
var _45352__$1 = this;
return self__.meta45351;
});

onyx_cheat_sheet.core.t45350.prototype.om$core$IRender$ = true;

onyx_cheat_sheet.core.t45350.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,onyx_cheat_sheet.core.app_state));
return om_bootstrap.grid.grid.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.row.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cheat-sheet-header"], null),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(18),new cljs.core.Keyword(null,"md","md",707286655),(12)], null),React.DOM.h2(null,"Onyx Cheat Sheet"))),om_bootstrap.grid.row.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(18),new cljs.core.Keyword(null,"md","md",707286655),(3)], null),om_bootstrap.random.well.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.nav.nav.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779),true,new cljs.core.Keyword(null,"stacked?","stacked?",784188446),true,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"pills"], null),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"catalog","catalog",-439057154));
});})(view,___$1))
], null),"Catalogs"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495));
});})(view,___$1))
], null),"Flow Conditions"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"lifecycles","lifecycles",-839774043));
});})(view,___$1))
], null),"Lifecycles"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(4),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"windows","windows",2068861701));
});})(view,___$1))
], null),"Windows"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(5),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"triggers","triggers",-1443678770));
});})(view,___$1))
], null),"Triggers"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(6),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561));
});})(view,___$1))
], null),"Peer Configuration"),om_bootstrap.nav.nav_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(7),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (view,___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,onyx_cheat_sheet.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"catalog-examples","catalog-examples",1694565000));
});})(view,___$1))
], null),"Catalog Examples")))),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(18),new cljs.core.Keyword(null,"md","md",707286655),(6)], null),((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"catalog","catalog",-439057154)))?onyx_cheat_sheet.core.catalog_entry_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495)))?onyx_cheat_sheet.core.flow_conditions_entry_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"lifecycles","lifecycles",-839774043)))?onyx_cheat_sheet.core.lifecycle_entry_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"windows","windows",2068861701)))?onyx_cheat_sheet.core.window_entry_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"triggers","triggers",-1443678770)))?onyx_cheat_sheet.core.trigger_entry_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561)))?onyx_cheat_sheet.core.peer_config_view.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"catalog-examples","catalog-examples",1694565000)))?onyx_cheat_sheet.core.catalog_examples_view.call(null):React.DOM.div({"id": "logo-container"},React.DOM.img({"src": "https://raw.githubusercontent.com/onyx-platform/onyx/3bf02e6fafe41315e0302f0f525992eb76eca04e/resources/logo/high-res.png", "className": "full-logo"}))
)))))))),om_bootstrap.grid.col.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),(18),new cljs.core.Keyword(null,"md","md",707286655),(3)], null),((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"catalog","catalog",-439057154)))?onyx_cheat_sheet.core.catalog_entry_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495)))?onyx_cheat_sheet.core.flow_condition_entry_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"lifecycles","lifecycles",-839774043)))?onyx_cheat_sheet.core.lifecycle_entry_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"windows","windows",2068861701)))?onyx_cheat_sheet.core.window_entry_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"triggers","triggers",-1443678770)))?onyx_cheat_sheet.core.trigger_entry_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"peer-config","peer-config",-1170330561)))?onyx_cheat_sheet.core.peer_config_options.call(null):((cljs.core._EQ_.call(null,view,new cljs.core.Keyword(null,"catalog-examples","catalog-examples",1694565000)))?onyx_cheat_sheet.core.catalog_entry_examples_options.call(null):null))))))))));
});

onyx_cheat_sheet.core.t45350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta45351","meta45351",601488052,null)], null);
});

onyx_cheat_sheet.core.t45350.cljs$lang$type = true;

onyx_cheat_sheet.core.t45350.cljs$lang$ctorStr = "onyx-cheat-sheet.core/t45350";

onyx_cheat_sheet.core.t45350.cljs$lang$ctorPrWriter = (function (this__19463__auto__,writer__19464__auto__,opt__19465__auto__){
return cljs.core._write.call(null,writer__19464__auto__,"onyx-cheat-sheet.core/t45350");
});

onyx_cheat_sheet.core.__GT_t45350 = (function onyx_cheat_sheet$core$main_$___GT_t45350(main__$1,app__$1,owner__$1,meta45351){
return (new onyx_cheat_sheet.core.t45350(main__$1,app__$1,owner__$1,meta45351));
});

}

return (new onyx_cheat_sheet.core.t45350(onyx_cheat_sheet$core$main,app,owner,cljs.core.PersistentArrayMap.EMPTY));
}),onyx_cheat_sheet.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map?rel=1445817916827