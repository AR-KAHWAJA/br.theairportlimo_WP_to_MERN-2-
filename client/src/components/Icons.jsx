const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.2.4 2.5.6 3.8.6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.7 21.2 2.8 13.3 2.8 4.2 2.8 3.5 3.3 3 4 3h3.3c.7 0 1.2.5 1.2 1.2 0 1.3.2 2.6.6 3.8.1.4 0 .9-.3 1.2z" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function IconCalendar(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

export function IconCancel(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="10" width="18" height="4" rx="1.5" />
    </svg>
  )
}

export function IconNoFee(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.2c0-1 .9-1.7 2.2-1.7s2.2.6 2.2 1.5c0 2-4.4 1.3-4.4 3.5 0 .9.9 1.5 2.2 1.5s2.2-.6 2.2-1.6" />
      <path d="M12 6.5v11" />
      <path d="M5.5 5.5l13 13" />
    </svg>
  )
}

export function IconEye(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconPeople(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="18" cy="9" r="2.3" />
      <path d="M16 20c.2-2.6 1.6-4.4 3.5-5" />
    </svg>
  )
}

export function IconChart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20v-3" />
    </svg>
  )
}

export function IconKey(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="15" r="4.5" />
      <path d="M11.2 11.8L20 3M16.5 6.5l3 3M13.5 9.5l2.3 2.3" />
    </svg>
  )
}

export function IconGem(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8l4-5h10l4 5-9 13z" />
      <path d="M3 8h18M9.5 3l-2 5 4.5 13 4.5-13-2-5" />
    </svg>
  )
}

export function IconVan(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V8a1 1 0 0 1 1-1h9l5 4v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <circle cx="7.5" cy="17.5" r="1.7" />
      <circle cx="16.5" cy="17.5" r="1.7" />
      <path d="M13 7v4h5" />
    </svg>
  )
}
