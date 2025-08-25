function downloadFile (filePath, fileName){
    const link = document.createElement("a");
    link.href = URL.createObjectURL(filePath);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadResume(){
    this.downloadFile('files/Resume_Hyunsoo_Park.pdf', 'Resume_Hyunsoo_Park.pdf')
}

document.querySelectorAll('.mainMenu-item').forEach (item =>{
    item.addEventListener('click', function(){
        const text = this.getAttribute('data-text');
        if (text != 'RESUME') {
            console.log(`Navigating to ${text}`);
        }
    })
})
// downloadportfolio if nessersary.