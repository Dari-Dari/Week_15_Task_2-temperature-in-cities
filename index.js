const cities = ['Санкт-Петербург', 'Мосвка', 'Выборг', 'Краснодар', 'Анапа', 'Сочи'];
let temperatures = [];
const degreesCelsius = '°C';

//Получаем температуру для каждого города
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру в городе ${cities[i]}`);
    temperatures.push(Number(temperature));
}

// Создаём элементы списка
const container = document.querySelector('.temperature');
const temperatureList = document.createElement('ul');

container.appendChild(temperatureList);

// Создаём список с информацией о каждом городе и его температуре
for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = cities[i] + ': ' + temperatures[i] + degreesCelsius;
    temperatureList.appendChild(listItem);
}
// Находим максимальную и минимальную температуру
let maxTemperature = -Infinity;
let minTemperature = Infinity;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i];
    }

    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i];
    }
}

// Выводим информацию о макс/мин температуре
const maxTemperatureInfo = document.createElement('p');
maxTemperatureInfo.textContent = 'Максимальная температура: ' + maxTemperature + degreesCelsius;
container.appendChild(maxTemperatureInfo)

const minTemperatureInfo = document.createElement('p');
minTemperatureInfo.textContent = 'Минимальная температура: ' + minTemperature + degreesCelsius;
container.appendChild(minTemperatureInfo)


