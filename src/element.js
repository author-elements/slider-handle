class AuthorSliderHandleElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.registerListeners(this, {
      connected: () => {
        this.UTIL.insertStyleRules({
          positionRule: ':host {}'
        })
      }
    })
  }

  set position ({ x, y }) {
    if (!this.PRIVATE.styleRules.hasOwnProperty('positionRule')) {
      return
    }

    this.UTIL.setStyleProperty('positionRule', 'left', `${x.pct * 100}%`)
    this.UTIL.setStyleProperty('positionRule', 'top', `${y.pct * 100}%`)
  }
}

customElements.define('author-slider-handle', AuthorSliderHandleElement)

export default AuthorSliderHandleElement
