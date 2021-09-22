import { writable } from 'svelte/store'

import { browser } from '$app/env'
const defaultData = [
  {
    title: 'Todo',
  },
  {
    title: 'In Progress',
  },
  {
    title: 'Complete',
  },
]

//export const store = persistStore('data', defaultData)

    export const store = writable(browser && localStorage.getItem('data') || 'defaultData');
    store.subscribe((val) => browser && localStorage.setItem('data', val));