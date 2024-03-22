
class num {
    constructor(startnum) {
        this.next = startnum;
        this.cur = 0;
        this.n = 1;
        this.printinter ;
    }
    fib() {
        let p = this.cur + this.n;
        this.cur = this.n;
        this.n = p;
        // let x = 0;
        // let y = 1;
        // for (let i = 0; i <=this.next; i++) {
        //     let g=document.getElementById("content");
        //     let div=document.createElement("h1");
        //     div.innerHTML=y;
        //     g.appendChild(div)  
        //     p = x + y;
        //     x = y;
        //     y = p;
        // }
        return p;
    }
    startprint() {
        // let g=this.fib(); 
        this.printinter = setInterval(() => {
        
            let g = this.fib();
            let gh = document.getElementById("content");
            let div = document.createElement("h1");
            div.innerHTML = g;
            gh.appendChild(div)
       
        }, 2000)
        //   for(let i=0;i<this.next;i++){
        //     let g=this.fib();
        //     let gh=document.getElementById("content");
        //         let div=document.createElement("h1");
        //         div.innerHTML=g;
        //         gh.appendChild(div)  
        // }
    }
    stopint() {
        clearInterval(this.printinter)
    }

};
let num1 = new num();
function start() {
    let inn = document.getElementById("inn1");
    console.log(inn.value)
    num1.startprint(inn.value);

}
function stop() {
    console.log("hi")
    num1.stopint();
}

