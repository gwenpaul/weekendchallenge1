$(document).ready(function() {
var i = 0;//global variable counter

$('form').on('submit', function(event) {

  data = $(this).serializeArray();
  event.preventDefault();
  console.log(data);

var $container = $('<span>');


for (var i = 0; i < data.length; i++){//iterate through data

      var elem = data[i];
      var $p =$('<p>');
      var $btn = $('<button>Delete Employee</button>');


//display elements
   switch (elem.name) {
        case "firstname":
          elem.name = "First Name";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "lastname":
          elem.name = "Last Name";
          $p.text(elem.name + ": " +  elem.value);
          $($container).append($p);
          break;
        case "employeenumber":
          elem.name = "Employee Number";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "jobtitle":
          elem.name = "Job Title";
          $p.text(elem.name + ": " + elem.value);
          $($container).append($p);
          break;
        case "lastreviewscore":
          elem.name = "Last Review Score";
          if (elem.value === "5"){
            $p.text(elem.name + ": " +  elem.value).css('color', 'red');
            $($container).append($p);
          } else if (elem.value === "4"){
            $p.text(elem.name + ": " +  elem.value).css('color', 'orange');
           $($container).append($p);
          } else if (elem.value === "3"){
            $p.text(elem.name + ": " +  elem.value).css('color', 'yellow');
            $($container).append($p);
          } else if (elem.value === "2"){
            $p.text(elem.name + ": " +  elem.value).css('color', 'blue');
            $($container).append($p);
          } else {
            $p.text(elem.name + ": " +  elem.value).css('color', 'purple');
            $($container).append($p);
            }
          break;
        case "salary":
          elem.name = "Salary";
          $p.text(elem.name + ": " +  "$" + elem.value);
          $($container).append($p);
          $($container).append($btn);
          break;


      }

    }

 $('form')[0].reset();


$($btn).on("click", function() {
  $(this).parent().remove();
});

$container.appendTo('#employeeinv');
$container.attr("id", 'elem' + i );
i++;


})



})
