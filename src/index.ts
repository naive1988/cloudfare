import { handleRequest } from './handler'
import './schedule'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
