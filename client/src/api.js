async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }

  return data
}

export function submitBooking(payload) {
  return request('/bookings', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function submitContact(payload) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}
