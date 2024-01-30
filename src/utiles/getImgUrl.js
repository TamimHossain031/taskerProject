
function Url(name){
    return new URL(`../assets/${name}`,import.meta.url).href
}

export {Url}