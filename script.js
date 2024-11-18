const elsoszam = document.getElementById("elsoszam")
const masodikszam = document.getElementById("masodikszam")
const harmadikszam = document.getElementById("harmadikszam")
const egy = document.getElementById("egy")
const ketto = document.getElementById("ketto")
const harom = document.getElementById("harom")
const kepernyo = document.getElementById("kepernyo")

egy.addEventListener("input",function(){
    elsoszam.textContent = egy.value
    szinezdatt()
})
ketto.addEventListener("input",function(){
    masodikszam.textContent = ketto.value
    szinezdatt()
})

harom.addEventListener("input",function(){
    harmadikszam.textContent = harom.value
    szinezdatt()
})



function szinezdatt(){
    const r = egy.value
    const g = ketto.value
    const b = harom.value
    kepernyo.style.backgroundColor=`rgb(${r},${g},${b})`
}
