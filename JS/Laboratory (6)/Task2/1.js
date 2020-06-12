let vacation = {
    turkey: {
        price: 2800,
        img: "Images/turkey.jpg",
        description: "Турция – государство на юго-востоке Европы и юго-западе Азии, культура которого сочетает древнегреческие, персидские, римские, византийские и османские традиции."
    },
    egypt: {
        price: 2000,
        img: "Images/egipet.jpg",
        description: "Египет – страна в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории, насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил, среди которых пирамиды Гизы, Большой сфинкс, а также Карнакский храм"
    },
    spain: {
        price: 4500,
        img: "Images/spain.jpg",
        description: "Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся произведения европейских мастеров."
    },
    france: {
        price: 3500,
        img: "Images/france.jpg",
        description: "Франция – это страна в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря."
    },
}

document.write("<div class='container'>");
for (key in vacation) {
    document.write("<div class='card' style='width: 18rem;'><img src='" + vacation[key].img + "' class='card-img-top' alt='...'><div class='card-body'> <p class='card-text'>Цена тура " + vacation[key].price + " грн. за день </p> <p> " + vacation[key].description + "</p></div></div>");
}

vacation.calc = function() {
    country = document.getElementById('country').value;
    people = parseInt(document.getElementById('people').value);
    days = parseInt(document.getElementById('days').value);
    var result = "<p>Стоимось тура составит: " + people * days * vacation[country].price;
    document.getElementById('out').innerHTML = result;
};
