<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import {timeTotal, options, running} from "../store"
    let audioEl: HTMLAudioElement
    let svgEl: SVGElement


    let playAudio = () => {}


    
    $: time = () => {
        const modulus = $timeTotal % $options.time
        if ($timeTotal === 0 && $options.questions === 0) {
            playAudio()
        }

        if (!$timeTotal){
            return 0
        }
        else if (modulus === 0) {
            playAudio()
            return $options.time
        }
        return modulus
    }

    $: reactive = (100 * time()) / $options.time
    


    onMount(() => {
        playAudio = () => audioEl.play()
        

    })






    onDestroy(() => {
        playAudio = () => {}
    })






</script>


<figure class="grid-flow">
    <svg role="progressbar" bind:this="{svgEl}" style="--percent: {reactive}">
        <circle class="track" />
        <circle class="progress" />
    </svg>

    <strong>
        {time()}
    </strong>


    <audio class="none" src="/sounds/bell.mp3" aria-hidden="true" bind:this="{audioEl}"></audio>
</figure>


<style lang="scss">
    audio {
        display: none;
    }
    figure {
        margin: auto;
        height: fit-content;
        grid: 1fr / 1fr;



        & > * {

            grid-column: 1 / -1;
            grid-row: 1 / -1;

        }
    }

    svg {

        --_dimension: var(--dimension, 200px);
        --_stroke-width: var(--stroke-width, 10px);
        --_stroke-clr: var(--stroke-clr, hsla(var(--blackHsl), 0.05));
        --_fill: var(--fill, transparent);
        --offset: 0;
        --percent: 0;


        width: var(--_dimension);
        height: var(--_dimension);


        circle.progress {
            --_stroke-width: 14px;
            --_stroke-clr: var(--moderateCyan);

            // Just the length of the circumference
            --dashArray: calc(2 * 22 / 7 * var(--r));
            
            stroke-dasharray: var(--dashArray);
            stroke-dashoffset: calc(var(--dashArray) * ((100 - var(--percent)) / 100));
            transform: rotate(-90deg);
            transform-origin: center center;
            transition: stroke-dashoffset 300ms ease-out;
        }




        circle {
            --r: calc((var(--_dimension) - var(--_stroke-width)) / 2);


            cx: calc(var(--_dimension) / 2);
            cy: calc(var(--_dimension) / 2);
            r: var(--r);
            stroke-width: var(--_stroke-width);
            stroke-linecap: round;



            stroke: var(--_stroke-clr);
            fill: var(--_fill);
        }
    
    }

    strong {
        // margin: auto;
        place-self: center;
        font-size: var(--size-3);
    }

</style>