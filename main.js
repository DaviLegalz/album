//prof por favor me informe o erro do codigo
var images = ["pixil-frame-0 (32).png","pixil-frame-0 (33).png","pixil-frame-0 (34).png","pixil-frame-0 (35).png","pixel-frame-0 (36).png"];
var names = ["Zé","Ednaldo","Pereira","Jorgin","Paulinho"];
var i = 0;

function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName
}
