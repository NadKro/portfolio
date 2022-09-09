import type { JSX } from 'preact'
import { render } from 'preact'

const MyComponent = (): JSX.Element => <h1>Hello World!</h1>

render(<MyComponent />, document.body)
