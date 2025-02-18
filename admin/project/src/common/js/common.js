document.addEventListener("DOMContentLoaded", function () {
    const uploadFiles = document.querySelectorAll(".file .fileIpt");
    if(uploadFiles){
        uploadFiles.forEach(function(uploadFile,idx){
            uploadFile.addEventListener("change",function(event){
                const fileArea = this.parentElement.parentElement;
                let fileName;
                if(window.FileReader){
                    fileName = this.files[0].name;
                } else {
                    console.log("noFileReader");
                }
                fileArea.querySelector(".fileNm").innerText = fileName;
                fileArea.classList.add("on");
            });
        });
    }
    
    const delFiles = document.querySelectorAll(".file .delBtn");
    if(delFiles) {
        delFiles.forEach(function(delFile,idx){
            delFile.addEventListener("click",function(event){
                const fileArea = this.parentElement.parentElement;
                fileArea.querySelector(".fileIpt").value = "";
                fileArea.querySelector(".fileNm").innerText = "";
                fileArea.classList.remove("on");
            });
        });
    }
});