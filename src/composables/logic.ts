import { get, type Writable } from "svelte/store"
import { running, options, timeTotal, pathToSound } from "../store"
interface AppWritables {
    timeTotal: Writable<number>,
    running: Writable<boolean>,
    options: Writable<{
        time: number;
        questions: number;
    }>
}


export async function loadAudioData(url: string) {
        const res = await fetch(url)
        const arrayBuffer = await res.arrayBuffer()
        return arrayBuffer   
    
}


export async function sleep(ms: number) {
    return new Promise((res, rej) => {
        
    })


}




class TimerLogic {
    private writables: AppWritables
    public paused = false
    private intervalId = 0 




    constructor(writables: AppWritables) {
        this.writables = writables
    }


    startClock() {
        this.writables.running.set(true)
    }



    runClock() {
        let time: number
        const options = get(this.writables.options)

        if (!this.paused) {
            time = options.questions * options.time
            this.writables.timeTotal.set(time)
        }



        this.runClock_()
    }



    runClock_(){
        this.intervalId = setInterval(() => {
            this.writables.timeTotal.update(data => (data - 1))
        }, 1000)
    }



    stopClock(onPause = false) {
        clearInterval(this.intervalId);
        if (!onPause) {
            return this.writables.timeTotal.set(0)
        }
    }




    // Here run all the subscribers
    listen() {
        this.writables.running.subscribe(data => {
            if (data) {
                this.runClock()
            } else {
                this.stopClock()
            }
        })




        // Whenever time reaches 0, stop the clock
        this.writables.timeTotal.subscribe(data => {
            if (!data) this.writables.running.set(false)
        })
    }
}




export const AppData = new TimerLogic({
    running: running,
    options: options,
    timeTotal: timeTotal
})

AppData.listen()