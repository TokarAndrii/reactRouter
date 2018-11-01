import list from './mock-data'


export const fetchAllMaps = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve([...list])
        }, 200)
    })

export const fetchByIdMap = (id) =>
    new Promise(resolve => {
        setTimeout(() => {
            const map = list.find(curr=> curr.id===id)
            resolve(map)
        }, 200)
    })

export const fetchByNameMap = (name) =>
    new Promise(resolve => {
        setTimeout(() => {
            const map = list.filter(curr=> curr.name===name)
            resolve(map)
        }, 200)
    })