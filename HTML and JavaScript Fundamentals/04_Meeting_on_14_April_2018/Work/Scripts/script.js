
// Функция, която се изпълнява след зареждане/рендериране на прозореца
window.onload = function () {
    // По този начин хващаме елемента с подадено Id
    var roof = document.getElementById("roof1");
    // Ето как въвеждаме ширината на хванатия елемент да е 0
    roof.style.width = "0";
    roof.style["width"] = "0";
    
    // Така хващаме само ПЪРВИЯТ елемент, който носи име на клас "floors"
    var floors = document.getElementsByClassName("floors")[0];

    // Хващаме първото ДЕТЕ на елемента
    var firstFloor = floors.children[0];

    // Хващаме второто ДЕТЕ на елемента
    var secondFloor = floors.children[1];

    

    // TODO: Въведете целия скрипт за да заместите изцяло CSS стила
    // ...
};
