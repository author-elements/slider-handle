class AuthorSliderHandleElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    this.UTIL.defineProperties({
      position: {
        private: true,
        default: {
          x: 0,
          y: 0
        }
      },

      axis: {
        private: true,
        default: 'x'
      }
    })

    this.UTIL.definePrivateMethods({
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
}

customElements.define('author-slider-handle', AuthorSliderHandleElement)

export default AuthorSliderHandleElement
