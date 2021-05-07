var dragging, draggedOver;
var counter = 0;
var lastValue = "";
var DISCstyle = "";
var pageCount = 1;

//#region Drag And Drop
function Compare()
{
    var actualResultList = document.getElementById(document.getElementById(draggedOver.id).parentElement.id);
    var actualList = document.getElementById(document.getElementById(dragging.id).parentElement.id);

    var actualBlock = document.getElementById(document.getElementById(document.getElementById(actualList.id).parentElement.id).parentElement.id) ==
                    document.getElementById(document.getElementById(document.getElementById(actualResultList.id).parentElement.id).parentElement.id);
    
    if (dragging.innerText != "" && dragging.tabIndex != draggedOver.tabIndex && actualBlock)
    {
        var temp = draggedOver.innerText;

        if (dragging.tabIndex >= 4 && draggedOver.innerText != "")
        {

        }
        else if(draggedOver.tabIndex < 4)
        {
            actualResultList.children[draggedOver.tabIndex].innerText = dragging.innerText;

            if (dragging.tabIndex < 4)
            {
                actualResultList.children[dragging.tabIndex].innerText = temp;
            }
            else
            {              
                actualList.removeChild(actualList.childNodes[dragging.tabIndex-4]);
                for (let z = 0; z < actualList.childElementCount; z++)
                {
                    actualList.children[z].tabIndex = z+4;
                }
            }
        }
    }
}

function SetDraggedOver(e){
    e.preventDefault();
    draggedOver = e.target;
  }
  
  function SetDragging(e){
      dragging = e.target;
  }
//#endregion

//#region SQLData
//API is not functioning yet.
var words = [{"wordID":"1","value":"REG","style":"D","text":"Végrehajtó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"2","value":"REG","style":"D","text":"Büntető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"3","value":"REG","style":"D","text":"Fegyelmező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"4","value":"REG","style":"D","text":"Rendfenntartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"5","value":"REG","style":"D","text":"Regulázó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"6","value":"REG","style":"D","text":"Előíró","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"7","value":"REG","style":"D","text":"Szabályozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"8","value":"REG","style":"I","text":"Térítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"9","value":"REG","style":"I","text":"Toborzó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"10","value":"REG","style":"I","text":"Ceremóniázó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"11","value":"REG","style":"I","text":"Meggyőző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"12","value":"REG","style":"I","text":"Szónokló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"13","value":"REG","style":"I","text":"Ünneplő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"14","value":"REG","style":"I","text":"Verbuváló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"15","value":"REG","style":"S","text":"Hívő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"16","value":"REG","style":"S","text":"Bálványozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"17","value":"REG","style":"S","text":"Szolgáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"18","value":"REG","style":"S","text":"Hagyománytisztelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"19","value":"REG","style":"S","text":"Igazodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"20","value":"REG","style":"S","text":"Illemtudó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"21","value":"REG","style":"S","text":"Elfogadó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"22","value":"REG","style":"C","text":"Iktató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"23","value":"REG","style":"C","text":"Rendszerező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"24","value":"REG","style":"C","text":"Rendszerető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"25","value":"REG","style":"C","text":"Kötelességtudó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"26","value":"REG","style":"C","text":"Rakodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"27","value":"REG","style":"C","text":"Takarító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"28","value":"REG","style":"C","text":"Ragaszkodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"29","value":"THE","style":"D","text":"Bizonyító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"30","value":"THE","style":"D","text":"Egyszerűsítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"31","value":"THE","style":"D","text":"Faggató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"32","value":"THE","style":"D","text":"Igazságosztó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"33","value":"THE","style":"D","text":"Problémamegoldó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"34","value":"THE","style":"D","text":"Improvizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"35","value":"THE","style":"D","text":"Kísérletező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"36","value":"THE","style":"I","text":"Tanító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"37","value":"THE","style":"I","text":"Szemléltető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"38","value":"THE","style":"I","text":"Publikáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"39","value":"THE","style":"I","text":"Igazmondó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"40","value":"THE","style":"I","text":"Ismertető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"41","value":"THE","style":"I","text":"Képző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"42","value":"THE","style":"I","text":"Kifejtő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"43","value":"THE","style":"S","text":"Kutató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"44","value":"THE","style":"S","text":"Tanuló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"45","value":"THE","style":"S","text":"Érdeklődő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"46","value":"THE","style":"S","text":"Nyomozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"47","value":"THE","style":"S","text":"Szavatartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"48","value":"THE","style":"S","text":"Megbízható","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"49","value":"THE","style":"S","text":"Böngésző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"50","value":"THE","style":"C","text":"Analizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"51","value":"THE","style":"C","text":"Elemző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"52","value":"THE","style":"C","text":"Mérő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"53","value":"THE","style":"C","text":"Számoló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"54","value":"THE","style":"C","text":"Kételkedő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"55","value":"THE","style":"C","text":"Körültekintő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"56","value":"THE","style":"C","text":"Előrelátó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"57","value":"AES","style":"D","text":"Békítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"58","value":"AES","style":"D","text":"Formatervező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"59","value":"AES","style":"D","text":"Közlő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"60","value":"AES","style":"D","text":"Vázoló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"61","value":"AES","style":"D","text":"Békefenntartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"62","value":"AES","style":"D","text":"Körvonalazó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"63","value":"AES","style":"D","text":"Környezetvédő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"64","value":"AES","style":"I","text":"Előadó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"65","value":"AES","style":"I","text":"Színjátszó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"66","value":"AES","style":"I","text":"Mesélő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"67","value":"AES","style":"I","text":"Szavaló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"68","value":"AES","style":"I","text":"Udvarló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"69","value":"AES","style":"I","text":"Szórakoztató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"70","value":"AES","style":"I","text":"Kifejező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"71","value":"AES","style":"S","text":"Alkotó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"72","value":"AES","style":"S","text":"Építő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"73","value":"AES","style":"S","text":"Feldolgozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"74","value":"AES","style":"S","text":"Kivitelező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"75","value":"AES","style":"S","text":"Álmodozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"76","value":"AES","style":"S","text":"Együttérző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"77","value":"AES","style":"S","text":"Relaxáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"78","value":"AES","style":"C","text":"Alapozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"79","value":"AES","style":"C","text":"Rendező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"80","value":"AES","style":"C","text":"Naplózó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"81","value":"AES","style":"C","text":"Lektoráló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"82","value":"AES","style":"C","text":"Ellenőrző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"83","value":"AES","style":"C","text":"Kritizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"84","value":"AES","style":"C","text":"Szerkesztő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"85","value":"IND","style":"D","text":"Hősködő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"86","value":"IND","style":"D","text":"Újító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"87","value":"IND","style":"D","text":"Provokáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"88","value":"IND","style":"D","text":"Öncélú","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"89","value":"IND","style":"D","text":"Versengő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"90","value":"IND","style":"D","text":"Felfedező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"91","value":"IND","style":"D","text":"Önirányító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"92","value":"IND","style":"I","text":"Magamutogató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"93","value":"IND","style":"I","text":"Fecsegő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"94","value":"IND","style":"I","text":"Játszó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"95","value":"IND","style":"I","text":"Önimádó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"96","value":"IND","style":"I","text":"Imponáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"97","value":"IND","style":"I","text":"Lehengerlő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"98","value":"IND","style":"I","text":"Kalandozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"99","value":"IND","style":"S","text":"Megváltó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"100","value":"IND","style":"S","text":"Teherbíró","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"101","value":"IND","style":"S","text":"Ellenálló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"102","value":"IND","style":"S","text":"Mártír","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"103","value":"IND","style":"S","text":"Rejtőzködő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"104","value":"IND","style":"S","text":"Önfeláldozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"105","value":"IND","style":"S","text":"Kitartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"106","value":"IND","style":"C","text":"Mértéktartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"107","value":"IND","style":"C","text":"Önszabályozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"108","value":"IND","style":"C","text":"Befelé Forduló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"109","value":"IND","style":"C","text":"Öntörvényű","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"110","value":"IND","style":"C","text":"Egyedülálló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"111","value":"IND","style":"C","text":"Kétkedő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"112","value":"IND","style":"C","text":"Tartózkodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"113","value":"ECO","style":"D","text":"Befektető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"114","value":"ECO","style":"D","text":"Szervező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"115","value":"ECO","style":"D","text":"Gyarapító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"116","value":"ECO","style":"D","text":"Jutalmazó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"117","value":"ECO","style":"D","text":"Üzletkötő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"118","value":"ECO","style":"D","text":"Célszerűsítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"119","value":"ECO","style":"D","text":"Tárgyaló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"120","value":"ECO","style":"I","text":"Promotáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"121","value":"ECO","style":"I","text":"Hirdető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"122","value":"ECO","style":"I","text":"Reklámozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"123","value":"ECO","style":"I","text":"Megnyerő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"124","value":"ECO","style":"I","text":"Forgalmazó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"125","value":"ECO","style":"I","text":"Értékesítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"126","value":"ECO","style":"I","text":"Eladó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"127","value":"ECO","style":"S","text":"Megtakarító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"128","value":"ECO","style":"S","text":"Gyűjtögető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"129","value":"ECO","style":"S","text":"Halmozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"130","value":"ECO","style":"S","text":"Értékmegőrző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"131","value":"ECO","style":"S","text":"Spóroló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"132","value":"ECO","style":"S","text":"Társuló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"133","value":"ECO","style":"S","text":"Termelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"134","value":"ECO","style":"C","text":"Optimalizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"135","value":"ECO","style":"C","text":"Pályázó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"136","value":"ECO","style":"C","text":"Válogató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"137","value":"ECO","style":"C","text":"Beszerző","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"138","value":"ECO","style":"C","text":"Költségvetés Készítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"139","value":"ECO","style":"C","text":"Biztosító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"140","value":"ECO","style":"C","text":"Elosztó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"141","value":"ALT","style":"D","text":"Fedező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"142","value":"ALT","style":"D","text":"Támogató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"143","value":"ALT","style":"D","text":"Védelmező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"144","value":"ALT","style":"D","text":"Kezeskedő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"145","value":"ALT","style":"D","text":"Kezelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"146","value":"ALT","style":"D","text":"Nevelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"147","value":"ALT","style":"D","text":"Oltalmazó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"148","value":"ALT","style":"I","text":"Útbaigazító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"149","value":"ALT","style":"I","text":"Lelkesítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"150","value":"ALT","style":"I","text":"Közvetítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"151","value":"ALT","style":"I","text":"Inspiráló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"152","value":"ALT","style":"I","text":"Képviselő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"153","value":"ALT","style":"I","text":"Bíztató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"154","value":"ALT","style":"I","text":"Motiváló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"155","value":"ALT","style":"S","text":"Gondozó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"156","value":"ALT","style":"S","text":"Orvosló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"157","value":"ALT","style":"S","text":"Segítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"158","value":"ALT","style":"S","text":"Vigasztaló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"159","value":"ALT","style":"S","text":"Meghallgató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"160","value":"ALT","style":"S","text":"Ápoló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"161","value":"ALT","style":"S","text":"Nyugtató","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"162","value":"ALT","style":"C","text":"Előkészítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"163","value":"ALT","style":"C","text":"Helyreállító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"164","value":"ALT","style":"C","text":"Szerelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"165","value":"ALT","style":"C","text":"Javító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"166","value":"ALT","style":"C","text":"Figyelmeztető","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"167","value":"ALT","style":"C","text":"Felkészítő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"168","value":"ALT","style":"C","text":"Karbantartó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"169","value":"POL","style":"D","text":"Meghatározó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"170","value":"POL","style":"D","text":"Eltervező","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"171","value":"POL","style":"D","text":"Utasító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"172","value":"POL","style":"D","text":"Parancsoló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"173","value":"POL","style":"D","text":"Delegáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"174","value":"POL","style":"D","text":"Uralkodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"175","value":"POL","style":"D","text":"Irányító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"176","value":"POL","style":"I","text":"Idealizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"177","value":"POL","style":"I","text":"Terelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"178","value":"POL","style":"I","text":"Ámító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"179","value":"POL","style":"I","text":"Manipuláló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"180","value":"POL","style":"I","text":"Csábító","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"181","value":"POL","style":"I","text":"Híresztelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"182","value":"POL","style":"I","text":"Hízelgő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"183","value":"POL","style":"S","text":"Hódoló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"184","value":"POL","style":"S","text":"Idomuló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"185","value":"POL","style":"S","text":"Követő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"186","value":"POL","style":"S","text":"Magasztaló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"187","value":"POL","style":"S","text":"Rajongó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"188","value":"POL","style":"S","text":"Alkalmazkodó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"189","value":"POL","style":"S","text":"Visszavonuló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"190","value":"POL","style":"C","text":"Megfelelő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"191","value":"POL","style":"C","text":"Diplomatizáló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"192","value":"POL","style":"C","text":"Spekuláló","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"193","value":"POL","style":"C","text":"Taktikázó","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"194","value":"POL","style":"C","text":"Tisztviselő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"195","value":"POL","style":"C","text":"Együttműködő","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"196","value":"POL","style":"C","text":"Hierarchia Tisztelő","description":"NoDY","nodeId":"","positinon":""}];
//#endregion

//#region RandomGenerator
function rand(min, max)
{
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

function RandomWord(nodeId)
{
    var wordIsOk = false;
    var wordIsDrawable = false;
    var result = "";

    while(!wordIsOk)
    {
        var randomWord = rand(0,195);
        var actualWord = words.find(z=>z.wordID === (randomWord+1).toString());
        wordIsDrawable = actualWord.nodeId === "";

        if(wordIsDrawable)
        {
            if(counter === 0)
            {
                lastValue = words[randomWord].value;
                DISCstyle += words[randomWord].style;
                words[randomWord].nodeId = nodeId;
                result = words[randomWord].text+ " " + words[randomWord].value + " " + words[randomWord].style;;
                wordIsOk = true;
                counter++;              
            }
            else if(counter < 4 && lastValue === words[randomWord].value && !DISCstyle.includes(words[randomWord].style))
            {
                DISCstyle += words[randomWord].style;
                words[randomWord].nodeId = nodeId;
                result = words[randomWord].text + " " + words[randomWord].value + " " + words[randomWord].style;
                wordIsOk = true;
                counter++;
            }
        }

        if(counter == 4)
        {
            counter = 0;
            DISCstyle = "";
            lastValue = "";
        }
    }
    return result;
}
//#endregion

//#region Html manipulation
function ClearQuestions()
{
    var questionDiv = document.getElementById('questions1');
    questionDiv.innerHTML = '';
}

function BlockGenerator(questionNumber)
{    
    let newBlock = document.createElement('div');
    newBlock.id = `block${questionNumber}`;
    newBlock.className = "block";

    document.getElementById("questions1").appendChild(newBlock);

    let newResultContainer = document.createElement('div');
    newResultContainer.id = `resultContainer${questionNumber}`;
    newResultContainer.className = 'resultContainer';

    let newContainer = document.createElement('div');
    newContainer.id = `container${questionNumber}`;
    newContainer.className = 'container';

    document.getElementById(newBlock.id).appendChild(newResultContainer);
    document.getElementById(newBlock.id).appendChild(newContainer);

    let newResultList = document.createElement('ul');
    newResultList.id = `resultList${questionNumber}`;
    newResultList.className = 'pointless';

    let newList = document.createElement('ul');
    newList.id = `list${questionNumber}`;
    newList.className = 'pointless';

    document.getElementById(newResultContainer.id).appendChild(newResultList);
    document.getElementById(newContainer.id).appendChild(newList);

    RenderNods(newResultList.id,newList.id);
}

function RenderNods(newResultListId,newListId)
{
    for(let i = 0; i < 8; i++)
    {
        var node = document.createElement("li");
        node.draggable = true;
        node.style.backgroundColor = '#999999';
        node.addEventListener('drag', SetDragging);
        node.addEventListener('dragover', SetDraggedOver);
        node.addEventListener('drop', Compare);
        node.tabIndex = i;

        if (i < 4)
        {
            node.id = newResultListId+i;
            node.innerText = "";
            document.getElementById(newResultListId).appendChild(node);       
        }
        else
        {
            node.id = newListId+i;
            node.innerText = RandomWord(node.id);
            document.getElementById(newListId).appendChild(node);
        }
    }
}
//#endregion

function NewPage()
{
    if(pageCount < 7)
    {
        ClearQuestions();

        for(let i = 0; i < 7; i++)
        {
            BlockGenerator(i+1);
        }    
        pageCount++;
    }
}

NewPage();

document.getElementById('nextPage').onclick = NewPage;


