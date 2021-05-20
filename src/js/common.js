/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

    var elem = ".dropdown-menu";
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
            $( elem ).slideUp(".dropdown-menu");

        }
    });

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);

var $affectedElements = $("div, p, h1, h2, h3, h4, h5, h6");

function changeFontSize(size){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+size);
    });
}

document.getElementById("font-increase-button").addEventListener("click", function() {
  changeFontSize(1);
});

document.getElementById("font-increase-button-1").addEventListener("click", function() {
  changeFontSize(1);
});

document.getElementById("font-decrease-button").addEventListener("click", function() {
  changeFontSize(-1);
});

document.getElementById("font-decrease-button-1").addEventListener("click", function() {
  changeFontSize(-1);
});

document
    .querySelectorAll('.dropdown > a') // Select the menu element
    .forEach(element => {
        element.addEventListener('click', function(event) { // Add event listener
            if (!element.parentNode.querySelector('.dropdown-menu').classList.contains("show")) {
            // Open the menu if it is closed
                //this.parentNode.style.display = 'block';
                FalseAriaExpanded();
                let navElement = element.parentNode.querySelector('a');
                //alert("open");
                navElement.setAttribute('aria-expanded', "true");
            } else {
            // Close the menu it if is open
                //this.parentNode.style.display = 'closed';
                let navElement = element.parentNode.querySelector('a');
                //alert("close");
                navElement.setAttribute('aria-expanded', 'false');
            }
            //event.preventDefault(); // Prevent default event handling
        }, false)
    });

document
    .querySelectorAll('.dropdown > a') // Select the menu element
    .forEach(element => {
        element.addEventListener('keydown', function(event) { // Add event listener
            if (event.keyCode === 27 ) { // ESC
                if (element.parentNode.querySelector('.dropdown-menu').classList.contains("show")) {
                    // Open the menu if it is closed
                    //this.parentNode.style.display = 'block';
                    let navElement = element.parentNode.querySelector('a');

                    //alert("open");
                    navElement.setAttribute('aria-expanded', "false");
                    element.parentNode.querySelector('.dropdown-menu').classList.remove("show");
                } 
                event.preventDefault();
            }
            if (event.keyCode === 32 ) { // SPACE
                
                if (!element.parentNode.querySelector('.dropdown-menu').classList.contains("show")) {
                // Open the menu if it is closed
                    //this.parentNode.style.display = 'block';
                    let navElement = element.parentNode.querySelector('a');
                    //alert("open");
                    navElement.setAttribute('aria-expanded', "true");
                    element.parentNode.querySelector('.dropdown-menu').classList.add("show");
                }
                event.preventDefault();
            }

            
            //event.preventDefault(); // Prevent default event handling
        }, false)
});

document
    .querySelectorAll('.dropdown > a') // Select the menu element
    .forEach(element => {
        element.addEventListener('focusin', function(event) { // Add event listener
            CollapseDropdownMenu();
        }, false)
});

document
    .querySelectorAll('.dropdown ul a') // Select the menu element
    .forEach(element => {
        element.addEventListener('keydown', function(event) { // Add event listener
            if (event.keyCode === 27 ) { // ESC
                if (element.parentNode.parentNode.classList.contains("dropdown-menu")) {
                    if (element.parentNode.parentNode.classList.contains("show")) {
                        let navElement = element.parentNode.parentNode.parentNode.querySelector('a');

                        //alert("open");
                        navElement.setAttribute('aria-expanded', "false");
                        element.parentNode.parentNode.classList.remove("show");
                        navElement.focus();
                    }
                } 
                event.preventDefault();
            }
            if (event.keyCode === 32 ) { //SPACE
                event.preventDefault();
            }

            //event.preventDefault(); // Prevent default event handling
        }, false)
    });

window.onclick = function(event) {
    if (!event.target.matches('.nav')) {
        
        var dropdowns = 
        document.getElementsByClassName("dropdown-menu");
            
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentNode.querySelector("a").setAttribute('aria-expanded', "false");
            }
        }
    }
}

function CollapseDropdownMenu(){
    var dropdowns = 
        document.getElementsByClassName("dropdown-menu");
            
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                openDropdown.parentNode.querySelector("a").setAttribute('aria-expanded', "false");
            }
        }
}

function FalseAriaExpanded(){
    var dropdowns = document.querySelectorAll('[aria-expanded="true"]');
        
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.setAttribute('aria-expanded', "false");
    }
}