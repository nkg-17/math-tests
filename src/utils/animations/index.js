
const AnimVariants = {
    // Opacity
    hidden: { opacity: 0 },
    visible: { opacity: 1 },

    // Scale
    smaller: { scale: 0.95 },
    normalSize: { scale: 1 },
    bigger: { scale: 1.05 },

    //Position
    higher: { y: -5 },
    normalY: { y: 0 },
    lower: { y: 5 },
    left: { x: -5 },
    normalX: { x: 0 },
    right: { x: 5 },

    // Duration
    quicker: { duration: 0.05 },
    normalTime: { duration: 0.1 },
    longer: { duration: 0.3 },

    // Delay
    waitABit: { delay: 0.03 },
    waitNormal: { delay: 0.1 },
    waitLonger: { delay: 0.3 },
}

export { AnimVariants }