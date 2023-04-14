import './scss/app.scss'
import App from './App.svelte'
import { library } from "@fortawesome/fontawesome-svg-core"
import {faPlay, faPause, faStop, faClock, fa0, faCode, faCogs} from "@fortawesome/free-solid-svg-icons"


library.add(faPlay, faPause, faStop, faClock, fa0, faCode, faCogs);

const app = new App({
  target: document.getElementById('app'),
})

export default app
