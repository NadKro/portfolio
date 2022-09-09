import './index.css'

import type { JSX } from 'preact'
import { render } from 'preact'

const MyComponent = (): JSX.Element => <h1 className='text-3xl font-bold underline text-red-600'>Hello World!</h1>

render(<MyComponent />, document.body)
