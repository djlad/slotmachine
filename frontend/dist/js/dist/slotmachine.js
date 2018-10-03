(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function(){
    const results = {
    machine1: document.querySelector('#machine1Result'),
    machine2: document.querySelector('#machine2Result'),
    machine3: document.querySelector('#machine3Result')
    };
    const el1 = document.querySelector('#machine1');
    const el2 = document.querySelector('#machine2');
    const el3 = document.querySelector('#machine3');
    m1 = new SlotMachine(el1, { active: 0 });
    m2 = new SlotMachine(el2, { active: 1 });
    m3 = new SlotMachine(el3, { active: 2 });
    let machines = [m1, m2, m3];


    let creditsElm = document.querySelector('#credits');
    
    ms = new MachineSlots(machines, creditsElm);

    runMachine = genRunMachine(ms );

    const btn = document.querySelector('#randomizeButton');
    btn.addEventListener('click', ()=>{runMachine()});
};

function MachineSlots(machines, creditsElm){
    this._credits = 5;
    this.machines = machines;
    this.start = function(){
        for(let machine in machines){
            machines[machine].shuffle(9000);
        }
    }
    this.stop = function(stopRows){
        for(let machineNum in machines){
            let machine = machines[machineNum]
            machine.randomize = ()=>{
                return stopRows[machineNum];
            };
            machine.stop();
        }
    }

    Object.defineProperty(this, 'credits', {
        get:()=>{
            return this._credits;
        },
        set:(newVal)=>{
            this._credits = newVal;
            creditsElm.innerHTML = this.credits;
        }
    });
    creditsElm.innerHTML = this.credits;
}

function genRunMachine(machineSlots, creditsElm){
    let ms = machineSlots;
    let m0 = ms.machines[0];
    function runMachine(stopRows){
        if (stopRows == null){
            stopRows = [m0.random, m0.random, m0.random];
        }
        console.log(stopRows)
        stopRow = stopRows.map((row)=>{return row%7});
        ms.start();
        setTimeout(function(){
            ms.stop(stopRows);
            let rollScore = evaluateRoll(stopRows);
            if(rollScore > .4){
                ms.credits += 10;
                creditsElm.innerHTML = ms.credits;
            }
        }, 1000);
    }
    return runMachine;
}

function evaluateRoll(roll){
    let freqs = frequencyCount(roll);
    let max = -1;
    for (let freqNum in freqs){
        let freq = freqs[freqNum];
        if (freq > max){
            max = freq;
        }
    }
    return max/3;
}

function frequencyCount(arr) {
    let frequencies = {};
    for (i in arr){
        let elm = arr[i];
        if (frequencies[elm] == null){
            frequencies[elm] = 0;
        }
        frequencies[elm]++;
    }
    return frequencies;
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maXJlZmx5L2dpdC9zbG90bWFjaGluZS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2ZpcmVmbHkvZ2l0L3Nsb3RtYWNoaW5lL2Zyb250ZW5kL2Zha2VfYmU3NTVkZGYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCByZXN1bHRzID0ge1xuICAgIG1hY2hpbmUxOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFjaGluZTFSZXN1bHQnKSxcbiAgICBtYWNoaW5lMjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hY2hpbmUyUmVzdWx0JyksXG4gICAgbWFjaGluZTM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWNoaW5lM1Jlc3VsdCcpXG4gICAgfTtcbiAgICBjb25zdCBlbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFjaGluZTEnKTtcbiAgICBjb25zdCBlbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFjaGluZTInKTtcbiAgICBjb25zdCBlbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFjaGluZTMnKTtcbiAgICBtMSA9IG5ldyBTbG90TWFjaGluZShlbDEsIHsgYWN0aXZlOiAwIH0pO1xuICAgIG0yID0gbmV3IFNsb3RNYWNoaW5lKGVsMiwgeyBhY3RpdmU6IDEgfSk7XG4gICAgbTMgPSBuZXcgU2xvdE1hY2hpbmUoZWwzLCB7IGFjdGl2ZTogMiB9KTtcbiAgICBsZXQgbWFjaGluZXMgPSBbbTEsIG0yLCBtM107XG5cblxuICAgIGxldCBjcmVkaXRzRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWRpdHMnKTtcbiAgICBcbiAgICBtcyA9IG5ldyBNYWNoaW5lU2xvdHMobWFjaGluZXMsIGNyZWRpdHNFbG0pO1xuXG4gICAgcnVuTWFjaGluZSA9IGdlblJ1bk1hY2hpbmUobXMgKTtcblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21pemVCdXR0b24nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e3J1bk1hY2hpbmUoKX0pO1xufTtcblxuZnVuY3Rpb24gTWFjaGluZVNsb3RzKG1hY2hpbmVzLCBjcmVkaXRzRWxtKXtcbiAgICB0aGlzLl9jcmVkaXRzID0gNTtcbiAgICB0aGlzLm1hY2hpbmVzID0gbWFjaGluZXM7XG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGZvcihsZXQgbWFjaGluZSBpbiBtYWNoaW5lcyl7XG4gICAgICAgICAgICBtYWNoaW5lc1ttYWNoaW5lXS5zaHVmZmxlKDkwMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKHN0b3BSb3dzKXtcbiAgICAgICAgZm9yKGxldCBtYWNoaW5lTnVtIGluIG1hY2hpbmVzKXtcbiAgICAgICAgICAgIGxldCBtYWNoaW5lID0gbWFjaGluZXNbbWFjaGluZU51bV1cbiAgICAgICAgICAgIG1hY2hpbmUucmFuZG9taXplID0gKCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcFJvd3NbbWFjaGluZU51bV07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWFjaGluZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NyZWRpdHMnLCB7XG4gICAgICAgIGdldDooKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWRpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDoobmV3VmFsKT0+e1xuICAgICAgICAgICAgdGhpcy5fY3JlZGl0cyA9IG5ld1ZhbDtcbiAgICAgICAgICAgIGNyZWRpdHNFbG0uaW5uZXJIVE1MID0gdGhpcy5jcmVkaXRzO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY3JlZGl0c0VsbS5pbm5lckhUTUwgPSB0aGlzLmNyZWRpdHM7XG59XG5cbmZ1bmN0aW9uIGdlblJ1bk1hY2hpbmUobWFjaGluZVNsb3RzLCBjcmVkaXRzRWxtKXtcbiAgICBsZXQgbXMgPSBtYWNoaW5lU2xvdHM7XG4gICAgbGV0IG0wID0gbXMubWFjaGluZXNbMF07XG4gICAgZnVuY3Rpb24gcnVuTWFjaGluZShzdG9wUm93cyl7XG4gICAgICAgIGlmIChzdG9wUm93cyA9PSBudWxsKXtcbiAgICAgICAgICAgIHN0b3BSb3dzID0gW20wLnJhbmRvbSwgbTAucmFuZG9tLCBtMC5yYW5kb21dO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3BSb3dzKVxuICAgICAgICBzdG9wUm93ID0gc3RvcFJvd3MubWFwKChyb3cpPT57cmV0dXJuIHJvdyU3fSk7XG4gICAgICAgIG1zLnN0YXJ0KCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG1zLnN0b3Aoc3RvcFJvd3MpO1xuICAgICAgICAgICAgbGV0IHJvbGxTY29yZSA9IGV2YWx1YXRlUm9sbChzdG9wUm93cyk7XG4gICAgICAgICAgICBpZihyb2xsU2NvcmUgPiAuNCl7XG4gICAgICAgICAgICAgICAgbXMuY3JlZGl0cyArPSAxMDtcbiAgICAgICAgICAgICAgICBjcmVkaXRzRWxtLmlubmVySFRNTCA9IG1zLmNyZWRpdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICByZXR1cm4gcnVuTWFjaGluZTtcbn1cblxuZnVuY3Rpb24gZXZhbHVhdGVSb2xsKHJvbGwpe1xuICAgIGxldCBmcmVxcyA9IGZyZXF1ZW5jeUNvdW50KHJvbGwpO1xuICAgIGxldCBtYXggPSAtMTtcbiAgICBmb3IgKGxldCBmcmVxTnVtIGluIGZyZXFzKXtcbiAgICAgICAgbGV0IGZyZXEgPSBmcmVxc1tmcmVxTnVtXTtcbiAgICAgICAgaWYgKGZyZXEgPiBtYXgpe1xuICAgICAgICAgICAgbWF4ID0gZnJlcTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4LzM7XG59XG5cbmZ1bmN0aW9uIGZyZXF1ZW5jeUNvdW50KGFycikge1xuICAgIGxldCBmcmVxdWVuY2llcyA9IHt9O1xuICAgIGZvciAoaSBpbiBhcnIpe1xuICAgICAgICBsZXQgZWxtID0gYXJyW2ldO1xuICAgICAgICBpZiAoZnJlcXVlbmNpZXNbZWxtXSA9PSBudWxsKXtcbiAgICAgICAgICAgIGZyZXF1ZW5jaWVzW2VsbV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZyZXF1ZW5jaWVzW2VsbV0rKztcbiAgICB9XG4gICAgcmV0dXJuIGZyZXF1ZW5jaWVzO1xufSJdfQ==
