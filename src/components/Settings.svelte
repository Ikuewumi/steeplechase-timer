<script lang="ts">
import {options, showSettings} from "../store"


const closeSettings = () => {
    $showSettings = false
}
</script>



<!-- svelte-ignore a11y-click-events-have-key-events -->
<section class="grid-flow {$showSettings ? 'active' : ''}" id="settings" on:click|self={closeSettings}>

<form class="container grid-flow" on:submit|preventDefault>
    <div class="field grid-flow">
        <label for="settings-time">Time</label>
        <input id="settings-time" type="text" inputmode="numeric" bind:value={$options.time}>
    </div>


    <div class="field grid-flow">
        <label for="settings-questions">Number of Questions</label>
        <input id="settings-questions" type="text" bind:value={$options.questions}>
    </div>


    <button on:click="{closeSettings}">Close</button>

    <small>Only numbers are valid. You can also  click outside the form to go back</small>
</form>

</section>



<style lang="scss">
#settings {
    z-index: 10;
    position: fixed;
    inset: 0;
    background: hsla(var(--blackHsl), 0.2);
    place-content: center;
    place-items: center;

    transition: 400ms ease;
    
    // transform: scaleX(0);
    // transform: scaleX(1);
    transform: rotateY(180deg);
    transform-origin: left;


    &.active {
        transform: rotateY(0deg);
    }
    

}


form.grid-flow {
    gap: var(--size-1);
    width: min(400px, 80vw);
    background: var(--moderateCyan);
    color: var(--white);
    border-radius: var(--size-1);





    padding-block: var(--p-4);
    grid-template-columns: var(--p-2) 1fr var(--p-2);


    & > * {
        grid-column: 2 / -2;
    }



}


.field {
    gap: calc(var(--size-1) * 0.5);
}


input {
    background: var(--moderateCyan);
        color: var(--white);

        --bg:var(--white);
        --clr: var(--darkGray);
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
        // width: fit-content;
        gap: var(--p-1);
        transition: 100ms ease;


        &:disabled {
            filter: blur(1px);
            pointer-events: none;
        }
        
        
        
        
        svg {
            width: var(--size-2);
        }
        

        
        
        
        
        
        &:focus {
            box-shadow: none;
            box-shadow: inset 0 -1px 0px -1px hsla(var(--blackHsl), 0.2);
            outline: 1px solid currentColor;
            outline-offset: -2px;
        }

}

button {
    margin-block-start: var(--size-1);
    text-align: center;
    text-transform: uppercase;

        background: var(--moderateCyan);
        color: var(--white);

        --bg: hsla(var(--whiteHsl), 0.05);
        --clr: var(--white);
        --bg-hover: hsla(var(--blackHsl), 0.03);

        background: var(--bg);
        color: var(--clr);


        outline: 0.5px solid hsla(var(--blackHsl), 0.3);
        // outline-offset: ;



        cursor: pointer;
        border: none;
        padding: calc(var(--p-1) * 1.2) var(--p-4);
        border-radius: var(--size-1);

        // width: fit-content;
        gap: var(--p-1);
        transition: 100ms ease;


        &:disabled {
            filter: blur(1px);
            pointer-events: none;
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
        
    
}


small {
    font-size: calc(var(--size-1) * 0.8);
    line-height: 1.4;
    text-align: center;
}
</style>