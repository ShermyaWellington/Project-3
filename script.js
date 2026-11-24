window.addEventListener("load", function() {
    const questionsButton = document.getElementById("questions");

    if (questionsButton) {
        questionsButton.addEventListener("click", function() {
            alert("If you have questions, contact me at:\nShermyaWellington@hawk.illinoistech.edu");
        });
    }
});