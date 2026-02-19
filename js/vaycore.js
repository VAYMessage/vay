const VAY = {

    init(){
        console.log("VAY Ecosystem Ready");
        this.checkAdmin();
    },

    go(page){
        window.location.href = page;
    },

    login(user,pass){
        if(user==="ADMIN" && pass==="123zxc567vbn"){
            localStorage.setItem("vay_admin","true");
            return true;
        }
        return false;
    },

    checkAdmin(){
        if(document.body.dataset.admin==="true"){
            if(localStorage.getItem("vay_admin")!=="true"){
                window.location.href="admin.html";
            }
        }
    }

};

window.onload=()=>VAY.init();