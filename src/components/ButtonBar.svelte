<script lang="ts">
    import {FontAwesomeIcon as Icon} from "@fortawesome/svelte-fontawesome";
    import {running} from "../store"
    import {AppData} from "../composables/logic"; 
    
    const start = () => {
        running.set(true)
    }

    const stop = () => {
        AppData.paused = false
        running.set(false)
    }
</script>

<div class="button-bar flex-flow">
    <button class="start" on:click={start}>
      <Icon icon="fa-solid fa-play" />
      Start
    </button>
    <!-- <button>Pause</button> -->
    <button on:click="{stop}">Stop</button>
</div>


<style lang="scss">

.button-bar {
    gap: var(--p-1);    


    button {
        background: var(--moderateCyan);
        color: var(--white);

        --bg: hsla(var(--blackHsl), 0.05);
        --clr: var(--black);
        --bg-hover: hsla(var(--blackHsl), 0.03);

        background: var(--bg);
        color: var(--clr);


        outline: 0.5px solid hsla(var(--blackHsl), 0.3);
        // outline-offset: ;



        cursor: pointer;
        border: none;
        padding: calc(var(--p-1) * 1.2) var(--p-4);
        border-radius: var(--size-1);
        display: flex;
        align-items: center;
        width: fit-content;
        gap: var(--p-1);
        transition: 100ms ease;


        &:disabled {
            filter: blur(1px);
            pointer-events: none;
        }
        
        
        
        
        svg {
            width: var(--size-2);
        }
        
        &:hover {
            background: var(--bg-hover);
        }
        
        
        
        
        
        &:focus {
            box-shadow: none;
            box-shadow: inset 0 -1px 0px -1px hsla(var(--blackHsl), 0.2);
            outline: 1px solid currentColor;
            outline-offset: -2px;
        }



        &.start {
            --bg: var(--moderateCyan);
            --clr: var(--white);
            --bg-hover: hsla(var(--moderateCyanHsl), 0.7);
        }
    }
} 

</style>