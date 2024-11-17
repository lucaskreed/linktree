function copyLinktreeUrl() {
    const url = "https://lucasreed1.github.io/linktree/";  
    const icon = document.querySelector('.circle-icon');

    // Change the icon color to indicate action
    icon.style.backgroundColor = '#3e1a75';  

    navigator.clipboard.writeText(url)
        .then(() => {
            // Successfully copied: revert back and give feedback
            setTimeout(() => {
                icon.style.backgroundColor = '#000000';  
                alert("Link copied to clipboard!");
            }, 1000);  
        })
        .catch((err) => {
            // In case of failure, change to red and reset the color
            console.error("Failed to copy: ", err);
            icon.style.backgroundColor = '#dc3545';  // Red color for error
            setTimeout(() => {
                icon.style.backgroundColor = '#000000';  // Reset to black after 1 second
            }, 1000);
        });
}
