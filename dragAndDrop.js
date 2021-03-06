var dragging, draggedOver;
var counter = 0;
var lastValue = "";
var DISCstyle = "";
var actualValues = "";
var nodeCount = 8;
var sideNodeCount = 4;
var actualPageCount = 0;
var actualQuestionCount = 1;
var firstSite = true;
var firstGenerate = true;
var MoreQuestions = true;

const PageLimiter = 8;
const BlockCountPerPage = 7;
const BlockMax = 57;
const MaxQuestionCOunt = 49;

//#region Drag And Drop
function Compare()
{
    var actualResultList = document.getElementById(document.getElementById(draggedOver.id).parentElement.id);
    var actualList = document.getElementById(document.getElementById(dragging.id).parentElement.id);

    var actualBlock = document.getElementById(document.getElementById(document.getElementById(actualList.id).parentElement.id).parentElement.id) ==
                    document.getElementById(document.getElementById(document.getElementById(actualResultList.id).parentElement.id).parentElement.id);
    
    if (dragging.innerText != "" && dragging.tabIndex != draggedOver.tabIndex && actualBlock)
    {
        var tempText = draggedOver.innerText;
        var tempId = draggedOver.id;

        if (dragging.tabIndex >= sideNodeCount && draggedOver.innerText != "")
        {

        }
        else if(draggedOver.tabIndex < sideNodeCount)
        {
            actualResultList.children[draggedOver.tabIndex].innerText = dragging.innerText;
            actualResultList.children[draggedOver.tabIndex].id = dragging.id;

            if (dragging.tabIndex < sideNodeCount)
            {
                actualResultList.children[dragging.tabIndex].innerText = tempText;
                actualResultList.children[dragging.tabIndex].id = tempId;
            }
            else
            {              
                actualList.removeChild(actualList.childNodes[dragging.tabIndex-sideNodeCount]);
                for (let z = 0; z < actualList.childElementCount; z++)
                {
                    actualList.children[z].tabIndex = z+sideNodeCount;
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
var words = [{"wordID":"1","value":"REG","style":"D","text":"V??grehajt??","description":"NoDY","nodeId":"","positinon":""},//NodeId is QuestionId
{"wordID":"2","value":"REG","style":"D","text":"B??ntet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"3","value":"REG","style":"D","text":"Fegyelmez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"4","value":"REG","style":"D","text":"Rendfenntart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"5","value":"REG","style":"D","text":"Regul??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"6","value":"REG","style":"D","text":"El????r??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"7","value":"REG","style":"D","text":"Szab??lyoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"8","value":"REG","style":"I","text":"T??r??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"9","value":"REG","style":"I","text":"Toborz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"10","value":"REG","style":"I","text":"Cerem??ni??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"11","value":"REG","style":"I","text":"Meggy??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"12","value":"REG","style":"I","text":"Sz??nokl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"13","value":"REG","style":"I","text":"??nnepl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"14","value":"REG","style":"I","text":"Verbuv??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"15","value":"REG","style":"S","text":"H??v??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"16","value":"REG","style":"S","text":"B??lv??nyoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"17","value":"REG","style":"S","text":"Szolg??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"18","value":"REG","style":"S","text":"Hagyom??nytisztel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"19","value":"REG","style":"S","text":"Igazod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"20","value":"REG","style":"S","text":"Illemtud??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"21","value":"REG","style":"S","text":"Elfogad??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"22","value":"REG","style":"C","text":"Iktat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"23","value":"REG","style":"C","text":"Rendszerez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"24","value":"REG","style":"C","text":"Rendszeret??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"25","value":"REG","style":"C","text":"K??teless??gtud??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"26","value":"REG","style":"C","text":"Rakod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"27","value":"REG","style":"C","text":"Takar??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"28","value":"REG","style":"C","text":"Ragaszkod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"29","value":"THE","style":"D","text":"Bizony??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"30","value":"THE","style":"D","text":"Egyszer??s??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"31","value":"THE","style":"D","text":"Faggat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"32","value":"THE","style":"D","text":"Igazs??goszt??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"33","value":"THE","style":"D","text":"Probl??mamegold??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"34","value":"THE","style":"D","text":"Improviz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"35","value":"THE","style":"D","text":"K??s??rletez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"36","value":"THE","style":"I","text":"Tan??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"37","value":"THE","style":"I","text":"Szeml??ltet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"38","value":"THE","style":"I","text":"Publik??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"39","value":"THE","style":"I","text":"Igazmond??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"40","value":"THE","style":"I","text":"Ismertet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"41","value":"THE","style":"I","text":"K??pz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"42","value":"THE","style":"I","text":"Kifejt??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"43","value":"THE","style":"S","text":"Kutat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"44","value":"THE","style":"S","text":"Tanul??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"45","value":"THE","style":"S","text":"??rdekl??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"46","value":"THE","style":"S","text":"Nyomoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"47","value":"THE","style":"S","text":"Szavatart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"48","value":"THE","style":"S","text":"Megb??zhat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"49","value":"THE","style":"S","text":"B??ng??sz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"50","value":"THE","style":"C","text":"Analiz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"51","value":"THE","style":"C","text":"Elemz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"52","value":"THE","style":"C","text":"M??r??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"53","value":"THE","style":"C","text":"Sz??mol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"54","value":"THE","style":"C","text":"K??telked??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"55","value":"THE","style":"C","text":"K??r??ltekint??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"56","value":"THE","style":"C","text":"El??rel??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"57","value":"AES","style":"D","text":"B??k??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"58","value":"AES","style":"D","text":"Formatervez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"59","value":"AES","style":"D","text":"K??zl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"60","value":"AES","style":"D","text":"V??zol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"61","value":"AES","style":"D","text":"B??kefenntart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"62","value":"AES","style":"D","text":"K??rvonalaz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"63","value":"AES","style":"D","text":"K??rnyezetv??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"64","value":"AES","style":"I","text":"El??ad??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"65","value":"AES","style":"I","text":"Sz??nj??tsz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"66","value":"AES","style":"I","text":"Mes??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"67","value":"AES","style":"I","text":"Szaval??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"68","value":"AES","style":"I","text":"Udvarl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"69","value":"AES","style":"I","text":"Sz??rakoztat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"70","value":"AES","style":"I","text":"Kifejez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"71","value":"AES","style":"S","text":"Alkot??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"72","value":"AES","style":"S","text":"??p??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"73","value":"AES","style":"S","text":"Feldolgoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"74","value":"AES","style":"S","text":"Kivitelez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"75","value":"AES","style":"S","text":"??lmodoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"76","value":"AES","style":"S","text":"Egy??tt??rz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"77","value":"AES","style":"S","text":"Relax??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"78","value":"AES","style":"C","text":"Alapoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"79","value":"AES","style":"C","text":"Rendez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"80","value":"AES","style":"C","text":"Napl??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"81","value":"AES","style":"C","text":"Lektor??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"82","value":"AES","style":"C","text":"Ellen??rz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"83","value":"AES","style":"C","text":"Kritiz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"84","value":"AES","style":"C","text":"Szerkeszt??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"85","value":"IND","style":"D","text":"H??sk??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"86","value":"IND","style":"D","text":"??j??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"87","value":"IND","style":"D","text":"Provok??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"88","value":"IND","style":"D","text":"??nc??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"89","value":"IND","style":"D","text":"Verseng??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"90","value":"IND","style":"D","text":"Felfedez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"91","value":"IND","style":"D","text":"??nir??ny??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"92","value":"IND","style":"I","text":"Magamutogat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"93","value":"IND","style":"I","text":"Fecseg??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"94","value":"IND","style":"I","text":"J??tsz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"95","value":"IND","style":"I","text":"??nim??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"96","value":"IND","style":"I","text":"Impon??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"97","value":"IND","style":"I","text":"Lehengerl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"98","value":"IND","style":"I","text":"Kalandoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"99","value":"IND","style":"S","text":"Megv??lt??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"100","value":"IND","style":"S","text":"Teherb??r??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"101","value":"IND","style":"S","text":"Ellen??ll??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"102","value":"IND","style":"S","text":"M??rt??r","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"103","value":"IND","style":"S","text":"Rejt??zk??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"104","value":"IND","style":"S","text":"??nfel??ldoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"105","value":"IND","style":"S","text":"Kitart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"106","value":"IND","style":"C","text":"M??rt??ktart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"107","value":"IND","style":"C","text":"??nszab??lyoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"108","value":"IND","style":"C","text":"Befel?? Fordul??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"109","value":"IND","style":"C","text":"??nt??rv??ny??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"110","value":"IND","style":"C","text":"Egyed??l??ll??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"111","value":"IND","style":"C","text":"K??tked??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"112","value":"IND","style":"C","text":"Tart??zkod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"113","value":"ECO","style":"D","text":"Befektet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"114","value":"ECO","style":"D","text":"Szervez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"115","value":"ECO","style":"D","text":"Gyarap??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"116","value":"ECO","style":"D","text":"Jutalmaz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"117","value":"ECO","style":"D","text":"??zletk??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"118","value":"ECO","style":"D","text":"C??lszer??s??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"119","value":"ECO","style":"D","text":"T??rgyal??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"120","value":"ECO","style":"I","text":"Promot??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"121","value":"ECO","style":"I","text":"Hirdet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"122","value":"ECO","style":"I","text":"Rekl??moz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"123","value":"ECO","style":"I","text":"Megnyer??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"124","value":"ECO","style":"I","text":"Forgalmaz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"125","value":"ECO","style":"I","text":"??rt??kes??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"126","value":"ECO","style":"I","text":"Elad??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"127","value":"ECO","style":"S","text":"Megtakar??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"128","value":"ECO","style":"S","text":"Gy??jt??get??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"129","value":"ECO","style":"S","text":"Halmoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"130","value":"ECO","style":"S","text":"??rt??kmeg??rz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"131","value":"ECO","style":"S","text":"Sp??rol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"132","value":"ECO","style":"S","text":"T??rsul??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"133","value":"ECO","style":"S","text":"Termel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"134","value":"ECO","style":"C","text":"Optimaliz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"135","value":"ECO","style":"C","text":"P??ly??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"136","value":"ECO","style":"C","text":"V??logat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"137","value":"ECO","style":"C","text":"Beszerz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"138","value":"ECO","style":"C","text":"K??lts??gvet??s K??sz??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"139","value":"ECO","style":"C","text":"Biztos??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"140","value":"ECO","style":"C","text":"Eloszt??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"141","value":"ALT","style":"D","text":"Fedez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"142","value":"ALT","style":"D","text":"T??mogat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"143","value":"ALT","style":"D","text":"V??delmez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"144","value":"ALT","style":"D","text":"Kezesked??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"145","value":"ALT","style":"D","text":"Kezel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"146","value":"ALT","style":"D","text":"Nevel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"147","value":"ALT","style":"D","text":"Oltalmaz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"148","value":"ALT","style":"I","text":"??tbaigaz??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"149","value":"ALT","style":"I","text":"Lelkes??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"150","value":"ALT","style":"I","text":"K??zvet??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"151","value":"ALT","style":"I","text":"Inspir??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"152","value":"ALT","style":"I","text":"K??pvisel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"153","value":"ALT","style":"I","text":"B??ztat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"154","value":"ALT","style":"I","text":"Motiv??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"155","value":"ALT","style":"S","text":"Gondoz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"156","value":"ALT","style":"S","text":"Orvosl??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"157","value":"ALT","style":"S","text":"Seg??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"158","value":"ALT","style":"S","text":"Vigasztal??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"159","value":"ALT","style":"S","text":"Meghallgat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"160","value":"ALT","style":"S","text":"??pol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"161","value":"ALT","style":"S","text":"Nyugtat??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"162","value":"ALT","style":"C","text":"El??k??sz??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"163","value":"ALT","style":"C","text":"Helyre??ll??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"164","value":"ALT","style":"C","text":"Szerel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"165","value":"ALT","style":"C","text":"Jav??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"166","value":"ALT","style":"C","text":"Figyelmeztet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"167","value":"ALT","style":"C","text":"Felk??sz??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"168","value":"ALT","style":"C","text":"Karbantart??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"169","value":"POL","style":"D","text":"Meghat??roz??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"170","value":"POL","style":"D","text":"Eltervez??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"171","value":"POL","style":"D","text":"Utas??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"172","value":"POL","style":"D","text":"Parancsol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"173","value":"POL","style":"D","text":"Deleg??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"174","value":"POL","style":"D","text":"Uralkod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"175","value":"POL","style":"D","text":"Ir??ny??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"176","value":"POL","style":"I","text":"Idealiz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"177","value":"POL","style":"I","text":"Terel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"178","value":"POL","style":"I","text":"??m??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"179","value":"POL","style":"I","text":"Manipul??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"180","value":"POL","style":"I","text":"Cs??b??t??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"181","value":"POL","style":"I","text":"H??resztel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"182","value":"POL","style":"I","text":"H??zelg??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"183","value":"POL","style":"S","text":"H??dol??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"184","value":"POL","style":"S","text":"Idomul??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"185","value":"POL","style":"S","text":"K??vet??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"186","value":"POL","style":"S","text":"Magasztal??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"187","value":"POL","style":"S","text":"Rajong??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"188","value":"POL","style":"S","text":"Alkalmazkod??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"189","value":"POL","style":"S","text":"Visszavonul??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"190","value":"POL","style":"C","text":"Megfelel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"191","value":"POL","style":"C","text":"Diplomatiz??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"192","value":"POL","style":"C","text":"Spekul??l??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"193","value":"POL","style":"C","text":"Taktik??z??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"194","value":"POL","style":"C","text":"Tisztvisel??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"195","value":"POL","style":"C","text":"Egy??ttm??k??d??","description":"NoDY","nodeId":"","positinon":""},
{"wordID":"196","value":"POL","style":"C","text":"Hierarchia Tisztel??","description":"NoDY","nodeId":"","positinon":""}];

var sevenWords = [];
//#endregion

//#region RandomGenerator
function rand(min, max)
{
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

function RandomWord()//nodeId)
{
    var wordIsOk = false;
    var wordIsDrawable = false;
    var result = "";

    while(!wordIsOk)
    {
        var randomWord;
        var actualWord;
        
        if(sideNodeCount < 7)
        {
            randomWord = rand(0,words.length-1);
            actualWord = words.find(z=>z.wordID === (randomWord+1).toString());
        }
        else
        {
            randomWord = rand(0,sevenWords.length-1);
            actualWord = sevenWords[randomWord];
        }

        wordIsDrawable = actualWord.nodeId === "";

        if(wordIsDrawable)
        {
            if(counter === 0)
            {
                //Ugyan az a 3!
                lastValue = actualWord.value;
                DISCstyle += actualWord.style;
                actualValues += actualWord.value;
                result = actualPageCount + " " + actualWord.text + " " + actualWord.value +  " " + actualWord.style;
                wordIsOk = true;
                counter++;              
            }
            else if(counter < sideNodeCount && lastValue === actualWord.value && !DISCstyle.includes(actualWord.style) && actualPageCount < 8)
            {
                DISCstyle += actualWord.style;
                result = actualPageCount + " " + actualWord.text + " " + actualWord.value + " " + actualWord.style;
                wordIsOk = true;
                counter++;
            }
            else if(counter < sideNodeCount && !actualValues.includes(actualWord.value) && actualPageCount == 8)
            {
                DISCstyle += actualWord.style;
                actualValues += actualWord.value;
                result = actualPageCount + " " + actualWord.text + " " + actualWord.value + " " + actualWord.style;
                wordIsOk = true;
                counter++;
            }
        }

        if(counter == sideNodeCount)
        {
            counter = 0;
            DISCstyle = "";
            lastValue = "";
            actualValues = "";
        }
    }
    return [result, randomWord];
}
//#endregion

//#region Html manipulation
function ClearQuestions()
{
    document.getElementById('questions1').innerHTML = '';
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
    for(let i = 0; i < nodeCount; i++)
    {
        var node = document.createElement("li");
        node.draggable = true;
        node.style.backgroundColor = '#999999';
        node.addEventListener('drag', SetDragging);
        node.addEventListener('dragover', SetDraggedOver);
        node.addEventListener('drop', Compare);
        node.tabIndex = i;

        if (i < sideNodeCount)
        {
            node.id = newResultListId+i;
            node.innerText = "";
            document.getElementById(newResultListId).appendChild(node);       
        }
        else
        {
            var resultAndID = RandomWord();
            node.id = newListId.substring(4)
            if(actualPageCount < 8)
            {
                node.id += "_" + words[resultAndID[1]].wordID;
            }
            else
            {
                node.id += "_" + sevenWords[resultAndID[1]].wordID;  
            }
            words[resultAndID[1]].nodeId = node.id;
            node.innerText = resultAndID[0];
            document.getElementById(newListId).appendChild(node);
        }
    }
}

function StartAndFinish(pageCount)
{
    ClearQuestions();
    var textContainerDiv = document.createElement('div');
    textContainerDiv.className = 'tContainer';
    textContainerDiv.id = 'textContainer'

    var h3ForTextContainer = document.createElement('h3');
    h3ForTextContainer.className = 'h3';
    h3ForTextContainer.id = 'h3MainText';
    
    h3ForTextContainer.innerHTML = pageCount === 0 ? "Kezd?? Oldal" : "Z??r?? Oldal";

    var pForStart1 = document.createElement('p');
    pForStart1.className = '';
    pForStart1.id = '';
    pForStart1.innerText = pageCount === 0 ? "Minden k??rd??st alaposan fontolj meg. Minden oldalon h??t k??rd??st tal??lsz, ha ??j oldalra navig??lt??l, vissza m??r nem tudsz lapozni." :
                                                "Sikeresen kit??lt??tted a tesztet, hamarosan megkapod az eredm??nyt.";

    document.getElementById('questions1').appendChild(textContainerDiv);
    document.getElementById(textContainerDiv.id).appendChild(h3ForTextContainer);
    document.getElementById(textContainerDiv.id).appendChild(pForStart1);

    if(pageCount === 9)
    {
        var buttonContainer = document.getElementById('buttonContainer')
        document.getElementById('home').removeChild(buttonContainer);
    }
}
//#endregion

//#region Control
function QuestionsAreAnswered()
{
    for(let i = 0; i < BlockCountPerPage; i++)
    {
        var actualUL = document.getElementById(`list${(actualQuestionCount+i)-BlockCountPerPage}`)
        if(actualUL.childNodes.length > 0)
        {
            window.alert("M??g nem h??zott ??t minden elemet!");
            return false;
        }
    }
    return true;
}

function SavePageData()
{
    for(let i = 0;i < BlockCountPerPage; i++)
    {
        var actualResultUL = document.getElementById(`resultList${(actualQuestionCount+i)-BlockCountPerPage}`)
        for(let z = 0;z < actualResultUL.childElementCount; z++)
        {
            var aWord = actualResultUL.children[z].id.split('_');
            var saveWord;
            if(actualPageCount < 8)
            {
                saveWord = words.find(z=>z.wordID === (aWord[1]));
            }
            else
            {
                saveWord = sevenWords.find(z=>z.wordID === (aWord[1]));
            }
            saveWord.nodeId = aWord[0];
            saveWord.positinon = actualResultUL.children[z].tabIndex+1;
        }
    }
    actualPageCount++;
    if(actualPageCount === 8)
    {
        nodeCount = 14;
        sideNodeCount = 7;
    }
}

function Test()
{
    var positinon = 1;
    var questionNumber = 1;
    for(let i = 0;i < words.length; i++ )
    {
        if(positinon === 5)
        {
            positinon = 1;
            questionNumber++;
        }
        words[i].nodeId = questionNumber;
        words[i].positinon = positinon;
        positinon++;
    }
    actualPageCount = 8;
    actualQuestionCount = 50;
}

function NewQuestionPage()
{
    if(actualPageCount < 8)
    {
        ClearQuestions();
        var actualMaxQuestionCount = actualQuestionCount + BlockCountPerPage;

        for(actualQuestionCount; actualQuestionCount < actualMaxQuestionCount; actualQuestionCount++)
        {
           BlockGenerator(actualQuestionCount);
        }    
    }
    if(actualPageCount === 8)
    {
        for(let i = 0; i < words.length; i++)
        {
            if(words[i].positinon === 1)
            {
                sevenWords.push({"wordID":`${words[i].wordID}`,"value":`${words[i].value}`,"style":`${words[i].style}`,"text":`${words[i].text}`,
                                "description":`${words[i].description}`,"nodeId":"","positinon":`${words[i].positinon}`});
            }
        }

        counter = 0;
        ClearQuestions();

        for(actualQuestionCount; actualQuestionCount < 57; actualQuestionCount++)
        {
            BlockGenerator(actualQuestionCount);
        }
        document.getElementById('nextPage').innerText = 'Teszt lez??r??sa';
    }
    return actualPageCount === 8 ? false : true;
}

function CheckAndGenerate()
{
    if(actualPageCount === 0)
    {
        StartAndFinish(actualPageCount);
    }
    if(actualPageCount > 0 && actualPageCount < 9)
    {
        if(!firstGenerate)
        {
            if(QuestionsAreAnswered())
            {
                SavePageData();

                if(MoreQuestions)
                {
                    MoreQuestions = NewQuestionPage();
                }
            }
        }
        else
        {
            NewQuestionPage();
            firstGenerate = false;
        }
    }
    if(actualPageCount === 9)
    {
        StartAndFinish(actualPageCount);
    }

    if(firstGenerate)
    {
        actualPageCount++;
    }
}
//#endregion

CheckAndGenerate()

document.getElementById('nextPage').onclick = CheckAndGenerate;