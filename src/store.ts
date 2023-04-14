import { writable } from "svelte/store";

export const timeTotal = writable(0)
export const running  = writable(false)
export const time = writable(20)
export const questions = writable(30)
export const options = writable({
    time: 10,
    questions: 10
})
export const paused = writable(false)
export const pathToSound = writable('/sounds/bell.mp3');
export const showSettings = writable(false)