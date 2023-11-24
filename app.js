const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghitjklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "!@#$%^&*()_+/"

const getRandomDate = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]

}
