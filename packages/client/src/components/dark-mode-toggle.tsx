import type { FunctionalComponent } from 'preact'

export const DarkModeToggleComponent: FunctionalComponent = () => {
  const toggleDarkMode = (): void => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return <div className='display-block flex justify-center'>
    <ul
      className='inline-block rounded-full drop-shadow-sm ring-1 ring-slate-100 dark:ring-zinc-700 dark:bg-zinc-800/50'
    >
      <li className='text-slate-900 hover:text-cyan-900 hover:dark:text-amber-300 dark:text-white'>
        <div className='block px-3 py-3 cursor-pointer' onClick={(): void => toggleDarkMode()} aria-hidden='true'>
          <svg xmlns='http://www.w3.org/2000/svg' width='14px' height='14px' viewBox='0 0 24 24' fill='none'
            stroke='currentColor'
            stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='feather feather-moon'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
}
