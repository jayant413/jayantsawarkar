import { Fragment } from 'react'

const phrases = ['FULL-STACK ENGINEER', 'MICROSERVICES', 'SCALABLE SYSTEMS', 'PRODUCT ENGINEERING', 'PRODUCTION-READY', 'RELIABLE SYSTEMS']
const loop = [...phrases, ...phrases]

export function Marquee() {
  return (
    <section className="marquee" aria-label="Highlights"><div>{loop.map((phrase, i) => <Fragment key={i}>{phrase} <span>✦</span> </Fragment>)}</div></section>
  )
}
