

function beerSong(){

    for (int beer=99;beer>=0;beer--){
        if(beer>=2){
            System.out.println(beer+ " bottles of beer on the wall, " +beer+ " bottles of beer Take one down and pass it around,");
            int newBeer = beer -1;
            System.out.println(newBeer +" bottles of beer on the wall");
            }
        else if(beer==1){
            System.out.println(beer+  " bottle of beer on the wall, " +beer+ " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall");
            }
        else{
            System.out.println("No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall ");
            }

    }
}