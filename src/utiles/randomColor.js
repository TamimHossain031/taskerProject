export default function randomColor(){
    let ran1 =Math.floor(Math.random()*255)
    let ran2 =Math.floor(Math.random()*255)
    let ran3 =Math.floor(Math.random()*255)
    return `rgba(${ran1},${ran2},${ran3})`
}