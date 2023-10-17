import React from 'react'
import { PageIndicatorType } from '../react_definitions'

export default function PageIndicators() {
  return (
    <section className="indicators--container">
      <div className="indicators--row">
        <a href="#">
          { PageIndicatorType.HOME_ACTIVE }
        </a>
        <a href="https://github.com/adsuth/lemmiblock" target="_blank">
          { PageIndicatorType.GITHUB }
        </a>
      </div>
    </section>
  )
}
