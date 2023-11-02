const dateToStr = (date) => {
    if (date instanceof Date) {
        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        return `${month} / ${day} / ${year}`
    }
    return ''
}

export default dateToStr