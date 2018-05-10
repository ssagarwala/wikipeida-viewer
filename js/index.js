  function getInput() {
    var input = $("#inputField").val();
    $('#results').html("");

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Main+Page&generator=search&exsentences=4&exlimit=8&exintro=1&",
      jsonp: "callback",
      // Tell jQuery we're expecting JSONP
      dataType: "jsonp",
      // Tell YQL what we want and that we want JSON
      data: {
        gsrsearch: input
      },
      success: function(response) {
        var pagez = response.query.pages;
        for (var x in pagez) {
          var title = pagez[x].title;
          var extract = pagez[x].extract;
          var pageId = pagez[x].pageid;

          var urlPID = "https://en.wikipedia.org/?curid=" + pageId;
          $("#results").append("<div class='resLi'><a href=" + urlPID + "class='testClick'>" + title + extract + "</a></div>")
        }

      }
    });

  }


 $('.testClick').click(function () {
          var value = $(this).attr("href");
          console.log(value);
      });