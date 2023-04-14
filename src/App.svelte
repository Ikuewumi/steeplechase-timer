<script lang="ts">
  import Progress from "./components/Progress.svelte";
  import ButtonBar from "./components/ButtonBar.svelte";
  import {FontAwesomeIcon as Icon} from "@fortawesome/svelte-fontawesome";
  import {options, running, timeTotal} from "./store"


  $: questions = () => {
    if (!$running) {return $options.questions}
    return Math.ceil($timeTotal / $options.time)
  }
</script>

<main class="sg">
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



  a#code {
    position: absolute;
    inset: 0 0 auto auto;
    padding: calc(var(--p-2) * 1.5) var(--p-2);
    padding-block-start: var(--p-2);
    padding-inline-start: var(--p-3);
    border-end-start-radius: 100vmax;
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
}
</style>