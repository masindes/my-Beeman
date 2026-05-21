import { useState } from 'react'
import { SHEETS_URL } from '../config'

export function useContactForm() {
  const [status, setStatus] = useState('idle')

  const submit = async (data) => {
    setStatus('loading')
    try {
      if (!SHEETS_URL) {
        // No endpoint configured — simulate success in dev
        await new Promise((r) => setTimeout(r, 800))
        setStatus('success')
        return
      }
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, timestamp: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')
  return { status, submit, reset }
}
