//1 and 2
import {json} from "stream/consumers";

const nodefetch = require('node-fetch')

interface intIp {
    ip: string
}
async function getIp(link: string, callback: (ip: string) => void): Promise<intIp> {
    const request: Response = await nodefetch(link)
    const response: intIp = await request.json()
    callback(returnIp(response))
    return response
}

function returnIp(data: intIp) {
    return data.ip
}

getIp('https://api.ipify.org/?format=json', (ip => {
    console.log(`Result: ${ip}`)
}))

//3

interface interfaceForRandName {
    id: number
    female_first_name: string
    first_name: string
    four_word_name: string
    initials: string
    last_name: string
    male_first_name: string
    middle_name: string
    name: string
    name_with_initials: string
    name_with_middle: string
    prefix: string
    two_word_name: string
    uid: string
}

async function getRandNameAsyncAwait(link: string): Promise<interfaceForRandName> {
    const request: Response = await nodefetch(link)
    const response: interfaceForRandName = await request.json()
    return response
}

let arrOfUsers: any[] = []

arrOfUsers[0] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name')
arrOfUsers[1] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name')
arrOfUsers[2] = getRandNameAsyncAwait('https://random-data-api.com/api/name/random_name')

//Async await and Promise.all
Promise.all(arrOfUsers).then(res => {
    res.forEach(item => {
        console.log(`With Promise.all and AsyncAwait - ${item.name}`)
    })
})

//Async await without Promise.all
async function displayNames() {
    for (let i = 0; i < arrOfUsers.length; i++) {
        let user: interfaceForRandName = await arrOfUsers[i]
        console.log(`Without Promise.all but with AsyncAwait - ${user.name}`)
    }
}
displayNames()


//Only promises
for(let i = 0; i < arrOfUsers.length; i++) {
    arrOfUsers[i].then((res: interfaceForRandName) => {
        console.log(`Only promises - ${res.name}`)
    })
}

//4

interface genderInterface {
    first_name: string,
    last_name: string,
    gender: string
}

function genderChecker(human: genderInterface): boolean {
    return human.gender == 'Female'
}

function getGenderOnlyPromise(url: string) {
    nodefetch(url).then((request: Response) => request.json()).then((response: genderInterface) => {
        let temp = genderChecker(response)
        if(temp) {
            console.log('======OnlyPromise======')
            console.log(`First Name: ${response.first_name}\nLast name: ${response.last_name}\nGender: ${response.gender}`)
        }else{
            console.log('Fail')
            getGenderOnlyPromise(url)
        }
    })
}

async function getGenderAsyncAwait(url: string) {
    const request: Response = await nodefetch(url)
    const response: genderInterface = await request.json()

    let temp = genderChecker(response)

    if(temp) {
        console.log('======AsyncAwait======')
        console.log(`First Name: ${response.first_name}\nLast name: ${response.last_name}\nGender: ${response.gender}`)
    }else{
        console.log('Fail')
        getGenderAsyncAwait(url)
    }
}

getGenderOnlyPromise('https://random-data-api.com/api/users/random_user')
getGenderAsyncAwait('https://random-data-api.com/api/users/random_user')

//5

function callback1(ip: string, callback: (ip: string) => void) {
    callback(`Task 5: ${ip}`)
}

async function getIpTask5(link: string) {
    const request: Response = await nodefetch(link)
    const response: intIp = await request.json()
    callback1(response.ip, (ip) => {console.log(ip)})
}

getIpTask5('https://api.ipify.org/?format=json')

//6

async function returnip(ip: string): Promise<string> {
    return ip
}

async function doSth(callback: (link: string) => Promise<string>) {
    const request: Response = await nodefetch('https://api.ipify.org/?format=json')
    const response: intIp = await request.json()
    console.log(`Task 6: ${response.ip}`)
    await callback(response.ip)
}

doSth((ip): Promise<string> => {
    return returnip(ip)
})