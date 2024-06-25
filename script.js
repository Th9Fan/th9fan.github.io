var header = document.getElementById("header");
var one = document.getElementById("one");
var two = document.getElementById("two");
var dolers = document.getElementById("dolers");
var footer = document.getElementById("footer");
var three = document.getElementById("three");
var fore = document.getElementById("for");
var five = document.getElementById("five");
var six = document.getElementById("six");
var q = document.getElementById("1");
var w = document.getElementById("2");
var e = document.getElementById("3");
var r = document.getElementById("4");
var t = document.getElementById("5");
var y = document.getElementById("6");
var u = document.getElementById("7");
var i = document.getElementById("8");
var o = document.getElementById("9");
var p = document.getElementById("10");
var a = document.getElementById("11");
var s = document.getElementById("12");
var d = document.getElementById("13");
var f = document.getElementById("14");
var g = document.getElementById("15");
var h = document.getElementById("16");
var j = document.getElementById("17");
var k = document.getElementById("18");
var l = document.getElementById("19");
var z = document.getElementById("20");
var x = document.getElementById("21");
var c = document.getElementById("22");
var v = document.getElementById("23");
var b = document.getElementById("24");
var mt = document.getElementById("times");
var mu = document.getElementById("mult");
var ml = 1
var mc = 100
var numd = 0
var numpersek = 0
var buypresec = document.getElementById("presrc2");
var buyprese = document.getElementById("presrc");
var bc = 100
var munpersec = 0
var lessec = document.getElementById("lesssec");
var lessecc = document.getElementById("lesssecc");
var lesswhait = 1
var dc = 100


function randombgtextcolor(objekt)
{
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    var O = Math.random();
    var Rr = 255-Math.floor(Math.random() * 256);
    var Gr = 255-Math.floor(Math.random() * 256);
    var Br = 255-Math.floor(Math.random() * 256);
    objekt.style["background-color"] = "rgba("+R+", "+G+", "+B+", "+O+")";
    objekt.style.color = "rgb("+Rr+", "+Gr+", "+Br+")";
    numd += Math.floor(1)
    numd = (numd*ml)
    dolers.innerHTML = numd.toFixed(2)+"$";
}
function changebgcolorclock(objekt){
    objekt.onclick = function() {
        randombgtextcolor(objekt);
        
    }
}
function addmultiplier(objekt){
    
    objekt.onclick = function() {
        if(numd-mc >= 0){
            numd = numd-mc
            ml+=0.01
            mc = mc+10
            mu.innerHTML = "buy multiplier times "+(ml+0.01).toFixed(2)+" for "+mc+"$" 
        }
        
    }
}
function addmorethroutime(){
    pause = setInterval(function(){
        numd += munpersec
        dolers.innerHTML = numd.toFixed(2)+"$";
    },(lesswhait*1000)) 
    // if(numd == Infinity){
    //     dolers.innerHTML = "You Win!";
    // }
    // 
}
function munypersecond(objekt){
    
    objekt.onclick = function() {
        if(numd-bc >= 0){
            numd = numd-bc
            munpersec += 0.1
            bc = bc +10
            buyprese.innerHTML = "buy "+(munpersec+0.1).toFixed(2)+"$ per "+(lesswhait).toFixed(2)+" second for "+bc+"$" 
        }
        
    }
}
function lesswhaitformuny(objekt){

    
    objekt.onclick = function() {
        if(lesswhait >= 0.02){
            if(numd-dc >= 0){
                numd = numd-dc
                lesswhait -= 0.01
                dc = dc +10
                lessecc.innerHTML = "buy less whait time "+(lesswhait-0.01).toFixed(2)+" seconds for "+dc+"$" 
                buyprese.innerHTML = "buy "+(munpersec+0.1).toFixed(2)+"$ per "+(lesswhait).toFixed(2)+" second for "+bc+"$" 
                addmorethroutime()
            }
        }
        else{
            lessecc.innerHTML="MAX!"
            
        }
    }
}
lesswhaitformuny(lessec)
munypersecond(buypresec)
addmorethroutime()
addmultiplier(mt)
changebgcolorclock(footer)
changebgcolorclock(header)
changebgcolorclock(one)
changebgcolorclock(two)
changebgcolorclock(three)
changebgcolorclock(fore)
changebgcolorclock(five)
changebgcolorclock(six)
changebgcolorclock(q)
changebgcolorclock(w)
changebgcolorclock(e)
changebgcolorclock(r)
changebgcolorclock(t)
changebgcolorclock(y)
changebgcolorclock(u)
changebgcolorclock(i)
changebgcolorclock(o)
changebgcolorclock(p)
changebgcolorclock(a)
changebgcolorclock(s)
changebgcolorclock(d)
changebgcolorclock(f)
changebgcolorclock(g)
changebgcolorclock(h)
changebgcolorclock(j)
changebgcolorclock(k)
changebgcolorclock(l)
changebgcolorclock(z)
changebgcolorclock(x)
changebgcolorclock(c)
changebgcolorclock(v)
changebgcolorclock(b)