class AuthorSliderHandleElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.definePrivateMethods({
      connected: () => {
        this.UTIL.insertStyleRules({
          positionRule: ':host {}'
        })
      },

      pointermoveHandler: evt => {
        console.log(evt)
      },

      pointerupHandler: evt => {
        this.removeEventListener('pointermove', this.PRIVATE.pointermoveHandler)
        this.removeEventListener('pointerup', this.PRIVATE.pointerupHandler)
      }
    })

    this.UTIL.registerListeners(this, {
      pointerdown: evt => {
        this.addEventListener('pointermove', this.PRIVATE.pointermoveHandler)
        this.addEventListener('pointerup', this.PRIVATE.pointerupHandler)
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
