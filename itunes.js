/*paulblackburn@my.smccd.edu
CIS 114 OL
itunes.html
itunes.css
itunes.js
12/11/2018
iTunes Search
Final*/

$(document).ready(function(){
    
    $('#search').click(function(event){
            event.preventDefault();
            var artist = document.getElementById("artist").value; // Get value from form input
            artist = encodeURIComponent(artist.trim()); // Remove spaces from String
        
            var url ="http://itunes.apple.com/search?term=" + artist + "&country=US&media=music&entity=musicTrack&limit=20&callback=?"; // API URL
           
    $.getJSON(url, function(data){
        
        var html = ""; // Variable for JSON string
                
            $.each(data.results, function(i, item){
                    
                // HTML elements
                  html+="<div class=\"box\"><div class=\"fields\"><ul><li>Track:</li><li>Track Price:</li><li>Artist:</li><li>Collection:</li><li>Collection Price:</li><li>Primary Genre:</li></ul></div><div class=\"info\"><ul><li>" + item.trackCensoredName + " <a href=" + item.previewUrl + ">Preview</a> <a href=" + item.trackViewUrl + ">Full Song</a></li><li>" + item.trackPrice + "</li><li><a href=" + item.artistViewUrl + ">" + item.artistName + "</a></li><li><a href=" + item.collectionViewUrl + ">" + item.collectionCensoredName + "</a></li><li>" + item.collectionPrice + "</li><li>" + item.primaryGenreName + "</li></ul></div><div class=\"poster\"><img src=" + item.artworkUrl100 + "></div></div>";
    
            });
        
        
        $("#ituneslist").html(html); // Add HTML elements to movies.html
    });
   
   
});
});

    

    
	
		