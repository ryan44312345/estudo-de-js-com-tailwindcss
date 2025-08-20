import { createDraggable } from 'animejs';

anime({
        targets: '#modal',
        translateY: 10,
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    })

createDraggable