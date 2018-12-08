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
    btn.addEventListener('click', ()=>{
        getResults(runMachine);
        // runMachine();
    });
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
                //ms.credits += 10;
                console.log(creditsElm);
                //creditsElm.innerHTML = ms.credits;
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