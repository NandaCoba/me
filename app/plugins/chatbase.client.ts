type ChatbaseQueue = {
  (...args: unknown[]): unknown
  q?: unknown[][]
}

declare global {
  interface Window {
    chatbase?: ChatbaseQueue
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const agentId = config.public.chatbaseAgentId

  if (!agentId) {
    console.warn('[Chatbase] AGENT_ID is not configured.')
    return
  }

  const existingChatbase = window.chatbase

  if (existingChatbase?.('getState') === 'initialized') {
    return
  }

  if (!existingChatbase) {
    const queue: ChatbaseQueue = (...args: unknown[]) => {
      queue.q ||= []
      queue.q.push(args)
    }

    window.chatbase = new Proxy(queue, {
      get(target, property) {
        if (property === 'q') {
          return target.q
        }

        return (...args: unknown[]) => target(property, ...args)
      },
    })
  }

  const loadWidget = () => {
    if (document.getElementById(agentId)) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = agentId
    // Chatbase reads this as a property on the script element.
    ;(script as HTMLScriptElement & { domain?: string }).domain = 'www.chatbase.co'
    document.body.appendChild(script)
  }

  if (document.readyState === 'complete') {
    loadWidget()
  } else {
    window.addEventListener('load', loadWidget, { once: true })
  }
})
