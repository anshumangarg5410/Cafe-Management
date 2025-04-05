const fullcup = document.querySelector(".full-cup");
const halfcup = document.querySelector(".half-cup");
const empcup = document.querySelector(".empty-cup");

halfcup.addEventListener("click", () => {
    halfcup.classList.add("empty");
    fullcup.classList.remove("empty");
    console.log("working");
});

empcup.addEventListener("click", () => {
    empcup.classList.add("empty");
    halfcup.classList.remove("empty");
    console.log("empty");
});
fullcup.addEventListener("click", () => {
    fullcup.classList.add("empty");
    empcup.classList.remove("empty");
    console.log("empty");
});

//JAVA in 1.html
//<div style="text-align: center; margin-top: 20px;">
//        <button onclick="changeBackgroundColor()">Change Background Color</button> 
//         <!-- Changes background color > -->
//        <p id="toggleTextElement" onclick="toggleText()" style="cursor: pointer;">Click to see our offers!</p> <!-- Toggles text -->
//        <button onclick="incrementCounter()">Click Me to Redeem Points</button> <!-- Increments the counter -->
//        <p id="counterDisplay">Count: 0</p> Displays the counter value
//</div>

//java in 1.html
{/* <script>
        // 1. Alert on page load
        window.onload = function() {
            alert("Welcome to Brew Heaven Cafe!");  // This will show an alert when the page loads
        }

        // 2. Change background color on button click
        function changeBackgroundColor() {
            document.body.style.backgroundColor = "lightyellow"; // Changes background to light yellow
        }

        // 3. Toggle text content using a button
        function toggleText() {
            var text = document.getElementById("toggleTextElement");
            if (text.innerHTML === "Click to see our offers!") {
                text.innerHTML = "Enjoy amazing offers!";
            } else {
                text.innerHTML = "Click to see our offers!";
            }
        }

        // 4. Basic counter functionality
        let counter = 0;
        function incrementCounter() {
            counter++;
            document.getElementById("counterDisplay").innerHTML = "Count: " + counter;
        }
        //5. Cup Java
        const fullcup = document.querySelector(".full-cup");
        const halfcup = document.querySelector(".half-cup");
        const empcup = document.querySelector(".empty-cup");

        halfcup.addEventListener("click", () => {
            halfcup.classList.add("empty");
            fullcup.classList.remove("empty");
            console.log("working");
        });

        empcup.addEventListener("click", () => {
            empcup.classList.add("empty");
            halfcup.classList.remove("empty");
            console.log("empty");
        });
        fullcup.addEventListener("click", () => {
            fullcup.classList.add("empty");
            empcup.classList.remove("empty");
            console.log("empty");
        });
    </script> */}

    // <script>
    //     // 1. Alert on page load
    //     window.onload = function() {
    //         alert("Welcome to Brew Heaven Cafe!");  // This will show an alert when the page loads
    //     }

    //     // 2. Change background color on button click
    //     function changeBackgroundColor() {
    //         document.body.style.backgroundColor = "lightyellow"; // Changes background to light yellow
    //     }

    //     // 3. Toggle text content using a button
    //     function toggleText() {
    //         var text = document.getElementById("toggleTextElement");
    //         if (text.innerHTML === "Click to see our offers!") {
    //             text.innerHTML = "Enjoy amazing offers!";
    //         } else {
    //             text.innerHTML = "Click to see our offers!";
    //         }
    //     }

    //     // 4. Basic counter functionality
    //     let counter = 0;
    //     function incrementCounter() {
    //         counter++;
    //         document.getElementById("counterDisplay").innerHTML = "Count: " + counter;
    //     }
    //     //5. Cup Java
    //     const fullcup = document.querySelector(".full-cup");
    //     const halfcup = document.querySelector(".half-cup");
    //     const empcup = document.querySelector(".empty-cup");

    //     halfcup.addEventListener("click", () => {
    //         halfcup.classList.add("empty");
    //         fullcup.classList.remove("empty");
    //         console.log("empty");
    //     });

    //     empcup.addEventListener("click", () => {
    //         empcup.classList.add("empty");
    //         halfcup.classList.remove("empty");
    //         console.log("empty");
    //     });
    //     fullcup.addEventListener("click", () => {
    //         fullcup.classList.add("empty");
    //         empcup.classList.remove("empty");
    //         console.log("empty");
    //     });
    // </script>

// const fullcup = document.querySelector(".full-cup");
// const halfcup = document.querySelector(".half-cup");
// const empcup = document.querySelector(".empty-cup");

// halfcup.addEventListener("click", () => {
//     halfcup.classList.add("empty");
//     fullcup.classList.remove("empty");
//     console.log("working");
// });

// empcup.addEventListener("click", () => {
//     empcup.classList.add("empty");
//     halfcup.classList.remove("empty");
//     console.log("empty");
// });
// fullcup.addEventListener("click", () => {
//     fullcup.classList.add("empty");
//     empcup.classList.remove("empty");
//     console.log("empty");
// });