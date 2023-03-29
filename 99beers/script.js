

function beerSong(){

    var beer
    var newBeer
    var songLine

    for (beer=99; beer>=0; beer--){

        if(beer>=2){

            
            newBeer = beer -1;
           
            songLine = beer+ " bottles of beer on the wall, " +beer+ " bottles of beer Take one down and pass it around," + newBeer +" bottles of beer on the wall"
            document.getElementById("newText").innerHTML += "<br/>" +songLine ;
            }

        else if(beer==1){
    
            songLine = beer+  " bottle of beer on the wall, " +beer+ " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall"
            document.getElementById("newText").innerHTML += "<br/>" +songLine;
            }

        else{
            
            songLine = "No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall "
            document.getElementById("newText").innerHTML += "<br/>" +songLine;
            }

    }
}