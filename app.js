var images = ["images/slide-1.jpg",
              "images/slide-2.jpg",
              "images/slide-3.jpg",
              "images/slide-4.jpg",
              "images/slide-5.png",
              "images/slide-6.jpg"  ];

var i=0;

function slides() {
document.getElementById("slideimg").src = images[i];
if (i<(images.length-1))
   i++;
   else
   i=0;
}

setInterval(slides, 4000)