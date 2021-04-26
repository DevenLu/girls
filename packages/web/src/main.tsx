import { render } from 'solid-js/web'
import App from './App'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@app/styles/reset.css'

render(() => <App />, document.getElementById('root'))
