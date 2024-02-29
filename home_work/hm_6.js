//1
const orders = []

function addOrder(orderNumber, amount, callback) {
    const exists = orders.some(order => order.orderNumber === orderNumber);
    if (!exists) {
        orders.push({orderNumber: orderNumber, amount: amount, completed: false},)
        callback(`Заказ #${orderNumber} добавлен`)
    } else {
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
    let formatedText = ''
    orders.forEach((order) => {
        let status = order.completed ? 'выполнен' : "не выполнен"
        formatedText += `Заказ #${order.orderNumber} - Сумма: ${order.amount}, ${status}\n`
    })
    callback(formatedText)
}

//listOrders(message => console.log(message))
//2

function loadUserData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Не получилость данные загрузить`)
                }
                return response.json()
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                console.error(`Произошла ошибочка с: ${error}`)
                reject(error)
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
//
//3

async function loadUserDataAsync(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Произошла ошибка с загрузкой`)
        }
        const data = await response.json()
        data.forEach(user => {
            console.log(`Имя: ${user.name}, Email: ${user.email}`)
        })
    } catch (error) {
        console.error(`Произошла ошибка ${error}`)
        throw error
    }

}

//loadUserDataAsync('https://jsonplaceholder.typicode.com/users')
//4
const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

async function loadUserData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Errror load file`)
        }
        const data = await response.json()
        console.log('chicago1')
        return data
    } catch (e) {
        console.error(`Error ${e}`)
    }
}

async function loadPhotoData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Errror load file photo`)
        }
        const data = await response.json()
        console.log('chicago')
        return data
    } catch (e) {
        console.error(`Error photo ${e}`)
    }
}

//Promise.all([loadUserData(usersDataURL),loadPhotoData(postsDataURL)]).then(res => res.forEach(r => console.log(r)))
//Promise.race([loadPhotoData(postsDataURL),loadUserData(usersDataURL)]).then(res => res.forEach(r => console.log(r)))

//5
async function startDdosServer() {
    const endPoint = ['/users', '/posts']
    const randomEndPoint = Math.floor(Math.random() * endPoint.length)
    const response = await fetch(`https://jsonplaceholder.typicode.com${endPoint[randomEndPoint]}`)
    console.log(response)
}

//setInterval(startDdosServer, 500)
//6
//6
/*
console.log('1');  1 Этот лог сработает самым первым, так как в нем нету асинхронных операций

setTimeout(() => { 5 Следующее микрозадание, которое доступно после выполнения синхронного кода это задержка setTimeout с 0 миллисекунд.
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3'); 6 этот веведеться шестым
  Promise.resolve().then(() => console.log('4')); 7 этот выведеться седьмым потому что сначала сработает таймаут а потом промис
}, 0);

Promise.resolve().then(() => {
  console.log('5'); 3 этот лог выведеться третим после обработки предыдущего микрозадачи в очереди микрозадач
  setTimeout(() => console.log('6'), 0); 8 сработает этот, потому что это последний таймаут
});

Promise.resolve().then(() => { 4 этот будет четвертым, то же самое что и третий
  console.log('7');
});

console.log('8'); 2 этот лог будет вторым, потому что в нем нет асинхронных моментов

Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ
*/

