/* linkek
localhost: io/

E:\konyvesblog\kb_v12\www

E:\Program Files\EasyPHP-DevServer-14.1VC9\data\localweb

E:\Program Files\EasyPHP-DevServer-14.1VC9\data\localweb\projects\konyvesblog\www

OneDrive:
Bendeguz
https://onedrive.live.com/?cid=1d4d4dba2f6e2625
mzperx349@gmail.com
alexandros7






*/
/* dev workflow
Ionic menet
$ npm cache clear
npm install -g ionic
ionic start myproject /létrehozza a könyvtárat
cd könyvtár 
ionic platform add android
ionic prepare android
ionic build android

ripple emulate android
vagy
be kell dugni atelefont kulonben emulatorozni akar, ami tenyleg nagyon lassu
ionic run android

ionic serve android  a bongeszoben futtat)

launch easyphp


android list target
cordova platforms ls
*/
/* localhost állítás
1) windows localhost file:
E:\Windows\System32\drivers\etc
localhost

2) EasyPHP Configuration Apache
*/
/* obj def -- "class" (=prototype)
var Dictionary = function() {};

// **** osztályhoz:
Dictionary.prototype.sTitle = "Stitle";
Dictionary.prototype.hello = function() {
	return "Hola";
};
Dictionary.prototype.world = function() {
	return " Mundo!";
};

//***** példányhoz:
var dic=new Dictionary();
dic.title="Title";
 
var msg=dic.title+" " + dic.hello() + dic.world() + dic.sTitle;
document.getElementById("wall").innerHTML =msg;


*/
/* obj def -- egy példány
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function(c) {
       return this.firstName + " " + this.lastName;
    }
};

*/
/*  arrrays
Arrays are a special type of objects. 
But, JavaScript arrays are best described as arrays.
Arrays use numbers to access its "elements". 
Objects use names to access its "members".

array:
var cars = ["Saab", "Volvo", "BMW"];

object:
var person = {firstName:"John", lastName:"Doe", age:46};


If you use a named index, when accessing an array, JavaScript will redefined the array 
to a standard object, and all array methods and properties will produce undefined or 
incorrect results:
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("demo").innerHTML =
person[0] + " " + person.length;
-------------- >   output= undefined 0 !!!!!!!!!!!!!!!!!!!!!!!!

The Difference Between Arrays and Objects?
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
Note	Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays? When to use Objects?
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.


Avoid new Array()
There is no need to use the JavaScript's built-in array constructor new Array().
Use [] instead.
*/
/* home: lead
author: ".konyvesblog."
date: "2014-12-12"
id: "46829"
lead: "Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan o"title: "5 regény, amiből jobban megérthetjük Oroszországot"

*/
/* detail: Entry
"title": "5 regény, amiből jobban megérthetjük Oroszországot", 
"id": "46829", 
"url": "http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot", 
"author": ".konyvesblog.",
"Entry" :  '<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'   

*/
/* icon font size
icons, use font sizes 16px, 32px, 48px, 64px, etc.).
*/
/* kacat
console.log("Hello Kitty1");
alert("Hello Kitty1");

</div>
<div></div>
<div id=''></div>
<div id=''></div> ng-controller=''></div>

<script></script>

<br>

*/
/* tx.replace(key,rplc)
hello.controller('helloCtrl', function($scope,tx,key) {
   var rplc="<h1>+key+</h1>";
   $scope.text = tx.replace(key,rplc); 
});
*/
/* Entry
[
{
"title": "5 regény, amiből jobban megérthetjük Oroszországot", 
"id": "46829", 
"url": "http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot", 
"author": ".konyvesblog.",
"Entry" :  "
<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p>
<p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p>
<p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p>
<p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p>
<p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p>
<p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p>
<p><a id="more7089193" name="more7089193"></a></p>
<p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p>
<p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p>
<p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p>
<p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p>
<p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p>
<p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p>
<p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p>
<p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p>
<p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p>
<p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p>
<p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p>
<p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p>
<!--
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF>
-->
<div class="clear"></div>

"            
}
]


*/
/* Entry 1 sor
[
{
"title": "5 regény, amiből jobban megérthetjük Oroszországot", 
"id": "46829", 
"url": "http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot", 
"author": ".konyvesblog.",
"Entry" :  "
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

"            
}
]
*/
/* "Entry" : 

"Entry" :  '<p dir="ltr"><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span><span>A h&#xE1;rom test&#x151;r</span><span>t, de &#xE1;ll&#xED;t&#xF3;lag egyszer, m&#xE9;g 2006-ban l&#xE1;tt&#xE1;k a fiatal &#xED;r&#xF3;, Zahar Prilepin egyik thriller&#xE9;t, a </span><span>Szankj&#xE1;</span><span>t is a kez&#xE9;ben. A hozz&#xE1; k&#xF6;zel &#xE1;ll&#xF3;k szerint viszont az eln&#xF6;k nem kifejezetten a bet&#x171;k szerelmese.</span></p> <p dir="ltr"><span>&#xC9;rdekes egy&#xE9;bk&#xE9;nt, hogy Putyin &#xED;zl&#xE9;se valamelyest lek&#xE9;pezi az orosz t&#xE1;rsadalom irodalmi &#xE9;rdekl&#x151;d&#xE9;s&#xE9;t is &#x2013; l&#xE9;tezik m&#xE1;r egy sz&#xE1;zas lista, amire b&#xE1;rki szavazhat a <a href="http://www.100bestbooks.ru/" target="_blank">100bestbooks.ru</a> oldalon, jelenleg a lista els&#x151; hely&#xE9;n Bulgakov &#xE1;ll &#xE9;s </span><span>A Mester &#xE9;s Margarita</span><span>, a top 10-ben Tolsztoj k&#xE9;tszer, Dosztojevszkij h&#xE1;romszor szerepel, Dumas Putyin &#xE1;ltal is kedvelt m&#x171;ve viszont kicsit lecs&#xFA;szott, az 55. helyen fesz&#xED;t jelenleg. </span></p> <p dir="ltr"><span>Mutatunk &#xF6;t k&#xF6;nyvet, ami val&#xF3;sz&#xED;n&#x171;leg soha nem ker&#xFC;l fel a&#xA0;<span>f&#xE9;nyes homlok&#xFA;&#xA0;</span><span>KGB</span><span>-tiszt kedvenceinek list&#xE1;j&#xE1;ra, de kicsit jobban meg&#xE9;rthet&#x151; bel&#x151;l&#xFC;k, hogy milyen is keleti bar&#xE1;taink &#xE9;lete.&#xA0;</span></span></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_39849_masolata.jpg" alt="covers_39849_masolata.jpg" class="imgleft" width="251" height="391">Vlagyimir Szorokin: Az opricsnyik egy napja</strong></p> <p dir="ltr"><span>2028-ban Oroszorsz&#xE1;gban gy&#x151;z&#xF6;tt a nemzeti eszme, &#xE9;s visszat&#xE9;r Rettegett Iv&#xE1;n modellje. A Nyugati Fal m&#xF6;g&#xF6;tt ism&#xE9;t a c&#xE1;r atyuska az &#xFA;r, minden nyugati szabads&#xE1;gjogot elt&#xF6;r&#xF6;ltek, &#xE9;s m&#x171;k&#xF6;dik az opricsnyina, a mag&#xE1;nhadsereg, amelynek legf&#x151;bb feladata a k&#xF6;ny&#xF6;rtelen b&#xFC;ntet&#xE9;s. A reg&#xE9;ny egy Komjaga nev&#x171; opricsnyik egy napj&#xE1;t mes&#xE9;li el, aki lecsillap&#xED;tva k&#xED;nz&#xF3; m&#xE1;snaposs&#xE1;g&#xE1;t elindul a szok&#xE1;sos napi feny&#xED;t&#x151; k&#xF6;r&#xFA;tj&#xE1;ra. Szorokin sz&#xFC;rre&#xE1;lis, kegyetlen reg&#xE9;nye egy&#xE9;bk&#xE9;nt Szolzsenyicin h&#xED;res l&#xE1;gerreg&#xE9;ny&#xE9;nek, az Ivan Gyenyiszovics egy napj&#xE1;nak a parodisztikus parafr&#xE1;zisa. B&#xE1;r a szerz&#x151; tagadta, hogy Putyin rendszer&#xE9;r&#x151;l &#xED;rta volna m&#x171;v&#xE9;t, az orosz viszonyokat ismerve lehetetlen nem gondolni arra, hogy val&#xF3;j&#xE1;ban a jelenkori Oroszorsz&#xE1;g szat&#xED;r&#xE1;ja ez a reg&#xE9;ny.</span></p> <p dir="ltr"><a href="http://Dmitry%20Glukhovsky A posztapokaliptikus irodalom mindent elt&#xF6;r&#xF6;l" target="_blank"><span>Interj&#xFA;nk Vlagyimir Szorokinnal&gt;&gt;</span></a></p> <p><a id="more7089193" name="more7089193"></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2015/01/12/szorokin_az_orosz_lelek_tomjen_ho_es_ver" target="_blank"><span><br class="kix-line-break"></span></a><strong>Dmitrij Bikov: ZSD &#x2013; avagy ki&#xE9; Oroszorsz&#xE1;g</strong></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/covers_90505_masolata.jpg" alt="covers_90505_masolata.jpg" class="imgright" width="251" height="371"></strong><span>A monument&#xE1;lis, csaknem egykil&#xF3;s, 745 oldalas reg&#xE9;ny szint&#xE9;n a j&#xF6;v&#x151;ben j&#xE1;tsz&#xF3;dik. M&#xE9;ghozz&#xE1; egy olyan vil&#xE1;gban, ahol az orsz&#xE1;g bels&#x151; etnikai fesz&#xFC;lts&#xE9;gei felsz&#xED;nre t&#xF6;rnek, &#xE9;s v&#xE9;res h&#xE1;bor&#xFA; robban ki a var&#xE9;gok &#xE9;s a kaz&#xE1;rok k&#xF6;z&#xF6;tt. A harc m&#xE1;r az elej&#xE9;t&#x151;l fogva &#xE9;rtelmetlen, de t&#xF6;rt&#xE9;nelmi m&#xED;toszok &#xE9;s babon&#xE1;k m&#xE1;r teljesen rabul ejtett&#xE9;k az egym&#xE1;s kiirt&#xE1;s&#xE1;n f&#xE1;radoz&#xF3; feleket, mik&#xF6;zben a t&#xF6;rzs&#xF6;k&#xF6;s lakoss&#xE1;g v&#xE1;rja, hogy a szemben &#xE1;ll&#xF3; &#x151;sellens&#xE9;gek v&#xE9;gre d&#xF6;nt&#xE9;sre vigy&#xE9;k a h&#xE1;bor&#xFA;t. Bikov nem hi&#xE1;ba dolgozott egy &#xE9;vtizeden &#xE1;t a reg&#xE9;nyen, hiszen a ZSD val&#xF3;s&#xE1;gos kultk&#xF6;nyv lett, &#xE9;s minden bizonnyal az egyik legk&#xFC;l&#xF6;nlegesebb &#xE9;s leghumorosabb ut&#xF3;pia az ut&#xF3;bbi &#xE9;vekben, amely minden t&#xFA;lz&#xE1;sa ellen&#xE9;re m&#xE9;gis r&#xE1;mutat arra a t&#xE9;nyre, hogy a jelenkor Oroszorsz&#xE1;g&#xE1;ban milyen puszt&#xED;t&#xF3; erej&#x171; etnikai ellent&#xE9;tek fesz&#xFC;lnek.</span><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/viktor-pelevin-p51.jpg" alt="viktor-pelevin-p51.jpg" class="imgleft open-in-modal" width="251" height="410">Viktor Pelevin: P5 -&#xA0;Pindoszt&#xE1;n politikai pigmeusai</strong></p> <p dir="ltr"><span>Az orosz szt&#xE1;rszerz&#x151; &#xF6;t elbesz&#xE9;l&#xE9;s&#xE9;t egybegy&#x171;jt&#x151; k&#xF6;tet bor&#xED;t&#xF3;j&#xE1;n nem v&#xE9;letlen&#xFC;l &#xE9;keskedik az </span><span>Igaz t&#xF6;rt&#xE9;net alapj&#xE1;n</span><span> felirat. Az elk&#xE9;peszt&#x151; fant&#xE1;zi&#xE1;j&#xFA; Pelevin a </span><span>Pindoszt&#xE1;n politikai pigmeusai &#x2013; P&#xE1;, pederaszt&#xE1;k</span><span> alc&#xED;m&#x171; k&#xF6;nyv&#xE9;ben minden benne van, ami&#xE9;rt az &#xED;r&#xF3;t im&#xE1;dni vagy &#xE9;ppen ut&#xE1;lni lehet: a csavaros, groteszk t&#xF6;rt&#xE9;netek sz&#xED;nhelye minden v&#xE1;ratlan &#xE9;s hihetetlen fordulat ellen&#xE9;re a jelenkori Oroszorsz&#xE1;g. Az oligarch&#xE1;k uralta vil&#xE1;gban nemcsak a hatalom, de a bulv&#xE1;rm&#xE9;dia &#xE9;s annak kritika n&#xE9;lk&#xFC;li fogyaszt&#xF3;i is pelleng&#xE9;re &#xE1;ll&#xED;ttatnak. Mindehhez persze n&#xE9;lk&#xFC;l&#xF6;zhetetlen a Pelevinre mindig is jellemz&#x151; cybervil&#xE1;g, no &#xE9;s n&#xE9;mi keleti filoz&#xF3;fia.</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2010/09/07/pelevin_p5" target="_blank"><span><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></span></a></p> <p dir="ltr"><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/859607_5_masolata.jpg" alt="859607_5_masolata.jpg" class="imgright" width="250" height="370">Dmitry Glukhovsky: Orosz n&#xE9;pellenes mes&#xE9;k</strong><span><br class="kix-line-break"></span><span><br class="kix-line-break"></span><span>Miut&#xE1;n az orosz fantasztikus irodalom egyik legn&#xE9;pszer&#x171;bb szerz&#x151;je diszkr&#xE9;ten visszautas&#xED;totta a felk&#xE9;r&#xE9;st, hogy vegye &#xE1;t Nyikita Mihalkov hely&#xE9;t Putyin tan&#xE1;csad&#xF3; bizotts&#xE1;g&#xE1;ban, gyorsan tett r&#xF3;la, hogy a hatalomnak m&#xE9;g egyszer esz&#xE9;be se jusson a neve, ha loj&#xE1;lis &#xE9;rtelmis&#xE9;git keresnek. Ezzel a k&#xF6;tettel Glukhovsky sikeresen bizony&#xED;tja, hogy nemcsak a sci-fi m&#x171;faj&#xE1;ban k&#xE9;pes nagyot alkotni. A n&#xE9;pellenes mes&#xE9;kben pontosan mutatja be a korrupci&#xF3;val &#xE1;tsz&#x151;tt orosz mindennapokat. Az &#xE1;llami szint&#x171; n&#xE9;pbut&#xED;t&#xE1;st, a tekint&#xE9;lyelv&#x171;s&#xE9;g elfogad&#xE1;s&#xE1;t le&#xED;r&#xF3; t&#xF6;rt&#xE9;netekb&#x151;l term&#xE9;szetesen nem hi&#xE1;nyozhatnak az&#xE9;rt a szerz&#x151;re jellemz&#x151; fantasztikus elemek sem, de mindezek t&#xF6;k&#xE9;letesen illeszkednek a nagyon is hihet&#x151; elbesz&#xE9;l&#xE9;sek cselekm&#xE9;ny&#xE9;be.&#xA0;</span></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_nepellenes_mesek" target="_blank"><span>Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</span></a></p> <p dir="ltr"><a href="http://konyves.blog.hu/2013/11/14/orosz_647" target="_blank"><span>Interj&#xFA;nk&#xA0;Dmitry Glukhovskyval&gt;&gt;</span></a></p> <p><strong><img src="http://m.cdn.blog.hu/ko/konyves/image/735666f_masolata.gif" alt="735666f_masolata.gif" class="imgleft" width="249" height="351">Anna Arutunyan: A Putyin-var&#xE1;zs</strong></p> <p>Az orosz-amerikai &#xFA;js&#xE1;g&#xED;r&#xF3; hossz&#xFA; ideje igyekszik meg&#xE9;rteni a jelenlegi orosz rendszer &#xE9;s az eln&#xF6;k titk&#xE1;t. Nem egyszer&#x171;en egy politikus &#xE9;letrajz&#xE1;t &#xED;rja meg ebben a k&#xF6;nyv&#xE9;ben, hanem t&#xF6;rt&#xE9;nelmi tapasztalatokb&#xF3;l pr&#xF3;b&#xE1;lja felfejteni a l&#xE1;tszatdemokr&#xE1;cia m&#x171;k&#xF6;d&#xE9;s&#xE9;nek logik&#xE1;j&#xE1;t, bemutatni a mindent &#xE1;tsz&#xF6;v&#x151; korrupci&#xF3;t, az elhatalmasod&#xF3; b&#xFC;rokr&#xE1;ci&#xE1;t. Feszegeti azt a k&#xE9;rd&#xE9;st is, hogy vajon a maffiaszer&#x171;en m&#x171;k&#xF6;d&#x151; oligarch&#xE1;k ir&#xE1;ny&#xED;tj&#xE1;k-e t&#xE9;nylegesen Oroszorsz&#xE1;got, illetve azt, hogy mi a c&#xE1;r atyuska szerep&#xE9;t bet&#xF6;lt&#x151; Putyin var&#xE1;zs&#xE1;nak titka.</p> <p><a href="http://konyves.blog.hu/2014/09/08/mindenki_benne_van_anna_arutunyan_putyin-varazs" target="_blank">Kritik&#xE1;nk a k&#xF6;nyvr&#x151;l&gt;&gt;</a></p> <p style="text-align: right;"><strong>Szerz&#x151;:&#xA0;Di&#xF3;szegi-Horv&#xE1;th N&#xF3;ra</strong></p> <p style="text-align: right;">&#xA0;<em><span id="docs-internal-guid-e3e8a6be-02f5-97d0-7f87-82ef17091dcb">A cikk eredetileg a K&#xF6;nyvesMagazin t&#xE9;li sz&#xE1;m&#xE1;ban jelent meg.</span></em></p> <!-- <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:trackback="http://madskills.com/public/xml/rss/module/trackback/"><rdf:Description rdf:about="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:identifier="http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot" dc:title="5 reg&eacute;ny, amib&#337;l jobban meg&eacute;rthetj&uuml;k Oroszorsz&aacute;got" dc:subject="Trackback" dc:description="Vlagyimir Putyin meglehet&#337;sen sz&#369;kszav&uacute;, ha irodalomr&oacute;l van sz&oacute;, annyit viszont tudni lehet, hogy a t&ouml;rt&eacute;nelem &eacute;s a filoz&oacute;fia kiemelten &eacute;rdekli, f&#337;k&eacute;nt ha olyan orosz kiv&aacute;l&oacute;s&aacute;gok &eacute;letrajz&aacute;r&oacute;l van sz.." dc:creator=".konyvesblog." dc:date="Tue, 20 Jan 2015 09:11:00 +0100" trackback:ping=""></rdf:Description></rdf:RDF> --> <div class="clear"></div>'   


*/
/* kBlog item
[
{
"title": "5 regény, amiből jobban megérthetjük Oroszországot", 
"id": "46829", 
"url": "http://konyves.blog.hu/2015/01/20/5_regeny_amibol_jobban_megerthetjuk_oroszorszagot", 
"author": ".konyvesblog.",
"Entry" :  "<p dir='ltr'><span>Vlagyimir Putyin meglehet&#x151;sen sz&#x171;kszav&#xFA;, ha irodalomr&#xF3;l van sz&#xF3;, annyit viszont tudni lehet, hogy a t&#xF6;rt&#xE9;nelem &#xE9;s a filoz&#xF3;fia kiemelten &#xE9;rdekli, f&#x151;k&#xE9;nt ha olyan orosz kiv&#xE1;l&#xF3;s&#xE1;gok &#xE9;letrajz&#xE1;r&#xF3;l van sz&#xF3;, mint Rettegett Iv&#xE1;n vagy &#xE9;ppen I. P&#xE9;ter c&#xE1;r. Ha k&#xE9;rdezik, megeml&#xED;ti, hogy a XI. sz&#xE1;zadi perzsa k&#xF6;lt&#x151;, Omar Khajj&#xE1;m l&#xED;r&#xE1;ja k&#xF6;zel &#xE1;ll a sz&#xED;v&#xE9;hez (kedves k&#xF6;tet&#xE9;t egy&#xE9;bk&#xE9;nt volt feles&#xE9;g&#xE9;t&#x151;l kapta), emellett list&#xE1;j&#xE1;n Ernest Hemingway, Jack London &#xE9;s Jules Verne is megfordult m&#xE1;r, hazafias &#xE9;rzelmeit pedig Tolsztoj &#xE9;s Dosztojevszkij sorol&#xE1;s&#xE1;val szokta letudni. Saj&#xE1;t bevall&#xE1;sa szerint kifejezetten &#xE9;lvezte Alexandre Dumas m&#x171;v&#xE9;t, </span>"
}
]
*/
/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/

/*


*/

/* 

*/


