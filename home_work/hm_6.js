//1
const orders = []

function addOrder(orderNumber, amount, callback) {
    const exists = orders.some(order => order.orderNumber === orderNumber);
    if (!exists){
        orders.push({orderNumber : orderNumber,amount: amount, completed: false},)
        callback(`Заказ #${orderNumber} добавлен`)
    }else{
        callback(`Заказ #${orderNumber} уже существует и не был добавлен`)
    }
}
//addOrder(1, 10, (message) => console.log(message));
//addOrder(8, 20, (message) => {console.log(message)});
//addOrder(11, 70, (message) => {console.log(message), console.log(orders)});

function completeOrder(orderNum, callback) {
    let found = false;
    orders.forEach((order) => {
        if (orderNum === order.orderNumber) {
            order.completed = true;
            callback(`Статус заказа #${orderNum} изменен на true`);
            found = true;
        }
    });
    if (!found) {
        callback(`Заказа с номером #${orderNum} не существует`);
    }
}
//completeOrder(1,message => console.log(message))
//console.log(orders)

function listOrders(callback) {
    let formatedText =''
    orders.forEach((order)=>{
        let status = order.completed ? 'выполнен': "не выполнен"
        formatedText += `Заказ #${order.orderNumber} - Сумма: ${order.amount}, ${status}\n`
    })
    callback(formatedText)
}
//listOrders(message => console.log(message))
//2

function loadUserData (url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Не получилость данные загрузить`)
                }
                return response.json()
            })
            .then(data => {
               resolve( data)
            })
            .catch(eerror => {
                console.error(`Произошла ошибочка с: ${eerror}`)
                reject(eerror)
            })
    })
}
// loadUserData('https://jsonplaceholder.typicode.com/users')
// .then(data =>{
//     console.log(`Данные о пользователе`)
//     data.forEach(user => {
//         console.log(`Имя: ${user.name}, Email: ${user.email}, Phone ${user.phone}`);
//     });
// })
//     .catch(error => {
//         console.error('Произошла ошибка при загрузке данных:', error);
//     });
//
// loadUserData('https://jsonplaceholder.typicode.com/users')
//     .then(data => {
//         console.log('Структура данных о пользователях:', data);
//     })
//     .catch(error => {
//         console.error('Произошла ошибка при загрузке данных:', error);
//     });
//3

async function loadUserDataAsync (url){
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Произошла ошибка с загрузкой`)
        }
        const data = await response.json()
        data.forEach(user => {
            console.log(`Имя: ${user.name}, Email: ${user.email}`)})
    }catch (error){
        console.error(`Произошла ошибка ${error}`)
        throw error
    }

}
loadUserDataAsync('https://jsonplaceholder.typicode.com/users')

