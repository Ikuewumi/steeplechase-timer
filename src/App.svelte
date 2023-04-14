<script lang="ts">
  import Progress from "./components/Progress.svelte";
  import ButtonBar from "./components/ButtonBar.svelte";
  import Settings from "./components/Settings.svelte";
  import {FontAwesomeIcon as Icon} from "@fortawesome/svelte-fontawesome";
  import {options, running, timeTotal, showSettings} from "./store"


  $: questions = () => {
    if (!$running) {return $options.questions}
    return Math.ceil($timeTotal / $options.time)
  }

  const openSettings = () => { $showSettings = true }
</script>

<main class="sg">
  <section class="none">
    <h1>SteepleChase Timer</h1>
    <p>Use this to help you automate your steeplechases</p>
  </section>
  <Progress />
  <ButtonBar />
  <section class="change-button-bar grid-flow">
    <span class="change-time flex-flow">
      <Icon title="clock" icon="fa-solid fa-clock"/>
      {$options.time} seconds
    </span>

    <span class="change-time flex-flow">
      <Icon title="number of questions" icon="fa-solid fa-0"/>
      {questions()} questions
    </span>

  </section>





  <button title="Toggle Settings" id="show-settings" on:click="{openSettings}">
    <Icon icon="fa-solid fa-cogs" />
  </button>

  <Settings />



  <a id="code" title="Go To Code" href="https://github.com/Ikuewumi/steeplechase-timer">
    <Icon icon="fa-solid fa-code" />
  </a>
</main>

<style lang="scss">
main.sg {

  gap: var(--p-5);
  place-items: center;
  place-content: center;



  .change-time {
    color: hsla(var(--blackHsl), 0.3);
    border: none;
    background: transparent;
    gap: calc(var(--p-2) * 0.5);
  }


  a#code , button#show-settings {
    position: absolute;
    padding: calc(var(--p-2) * 1.5) var(--p-2);
    border: none;
    outline: 1px solid currentColor;
    background: var(--moderateCyan);
    color: var(--white);


    &:focus {
      outline-offset: -3px;
    }

    
    &:hover {
      background-color: hsla(var(--moderateCyanHsl), 0.7);
      
    }
  }


  a#code {
    inset: 0 0 auto auto;
    padding-block-start: var(--p-2);
    padding-inline-start: var(--p-3);
    border-end-start-radius: 100vmax;
  }


  button#show-settings {
    inset: 0 auto auto 0;
    padding-block-start: var(--p-2);
    padding-inline-end: var(--p-3);
    border-end-end-radius: 100vmax;

    z-index: 5;
  }
}
</style>