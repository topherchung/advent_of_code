import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

export const importFile = (directory, filename) =>
    readFileSync(`./${directory}/${filename}`, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            console.error(`Error file parsing file`, err)
        } else {
            return data
        }
    })


export const getDay = (url) => {
    const __filename = fileURLToPath(url);
    return dirname(__filename).replace(/(.*)([0-9]{2})$/, '$2')
}

