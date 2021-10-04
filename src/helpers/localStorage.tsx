
const get = (key: string): any => {
    const itemFound = localStorage.getItem(key)
    console.log('Item found: ', itemFound)
    return itemFound ? JSON.parse(itemFound) : null
}

const set = (key: string, value: any) => {
    if(key && value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

const remove = (key: string): boolean => {
    if (ls.get(key)) {
        localStorage.removeItem(key)
        return true
    }
    return false
}

const ls = {
    get,
    set,
    remove
}

export default ls