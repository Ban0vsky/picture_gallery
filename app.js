
class Interface {
    constructor() {

        this.state = {
            section: 0,
            viewMode: false
        }

        this.$containers = document.querySelectorAll('.category')
        this.$containers = [...this.$containers]

        this.$help = document.querySelector('.view-mode')

        this.$arrowDown = document.querySelector('.arrow-down')
        this.$arrowUp = document.querySelector('.arrow-up')
        this.windowHeight = window.innerHeight

        window.addEventListener('resize', () => {
            this.windowHeight = window.innerHeight
        })

        this.$arrowUp.addEventListener('click', (e) => {
            this.state.section < 0 ? this.state.section = 0 : this.state.section -= 1
            window.scrollBy({ 
                top: -this.windowHeight,
                left: 0, 
                behavior: 'smooth'
              })

              this.displayTopArrow()
              this.displayBottomArrow()
        })

        this.$arrowDown.addEventListener('click', (e) => {
            this.state.section > 4 ? this.state.section = 4 : this.state.section += 1
            window.scrollBy({ 
                top: this.windowHeight,
                left: 0, 
                behavior: 'smooth'
              })

              this.displayTopArrow()
              this.displayBottomArrow()
        })

        this.$containers.forEach(($container) => {
            $container.addEventListener('click', () => {
                // if (!this.state.viewMode) {
                //     this.$arrowUp.style.display = 'none'
                //     this.$arrowDown.style.display = 'none'
                //     this.$help.style.display = 'block'

                //     this.state.viewMode = true
                // } else {
                //     this.$arrowUp.style.display = 'block'
                //     this.$arrowDown.style.display = 'block'
                //     this.$help.style.display = 'none'

                //     this.state.viewMode = false
                // }
            })
        });
    }

    displayTopArrow() {
        if (this.state.section > 0) {
            this.$arrowUp.style.display = 'block'
            return
        }

        this.$arrowUp.style.display = 'none'
    }

    displayBottomArrow() {
        if (this.state.section < 4) {
            this.$arrowDown.style.display = 'block'
            return
        }

        this.$arrowDown.style.display = 'none'
    }
}

class ImgBehavior {
    constructor() {
        this.state = {
            viewMode: false
        }

        this.$containers = document.querySelectorAll('.category')
        this.$images = document.querySelectorAll('img')

        this.$containers = [...this.$containers]
        this.$images = [...this.$images]

        for(const $container of this.$containers) {

            $container.addEventListener('mouseover', (e) => {
                for (let i = 0; i < $container.children.length; i++) {
                    $container.children[i].style.width = '25vw'
                }

                e.target.style.width = '50vw'
                e.currentTarget.style.width = '100%'
            })

            $container.addEventListener('click', (e) => {

                if (!this.state.viewMode) {
                    for (let i = 0; i < $container.children.length; i++) {
                        $container.children[i].style.width = '0vw'
                    }
    
                    e.target.style.width = '100vw'
                    e.currentTarget.style.width = '100%'     
                    
                    this.state.viewMode = true
                } else {
                    for (let i = 0; i < $container.children.length; i++) {
                        $container.children[i].style.width = 'calc(100vw/3)'
                    }
        
                    $container.style.width = '100%'

                    this.state.viewMode = false
                }
            })

            $container.addEventListener('mouseleave', (e) => {
                for (let i = 0; i < $container.children.length; i++) {
                    $container.children[i].style.width = 'calc(100vw/3)'
                }

                $container.style.width = '100%'
            })
        }
    }
}

const imgBehavior = new ImgBehavior()
const interfaceElements = new Interface()

console.log('All fine!!')