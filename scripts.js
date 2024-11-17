function copyLinktreeUrl() {
    const url = "https://linktr.ee/yourusername";  
    const icon = document.querySelector('.circle-icon');


    icon.style.backgroundColor = '#3e1a75';  

   
    navigator.clipboard.writeText(url)
        .then(() => {

            setTimeout(() => {
                icon.style.backgroundColor = '#000000';  
                alert("Link copied to clipboard!");
            }, 1000);  
        })
        .catch((err) => {
            
            console.error("Failed to copy: ", err);
            icon.style.backgroundColor = '#dc3545';  
            setTimeout(() => {
                icon.style.backgroundColor = '#000000';  
            }, 1000);
        });
}

