import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})