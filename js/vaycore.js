const VAY = {

    version: "2.0",
    zIndex: 10,

    init() {
        console.log("VAY Core Engine Loaded");
        this.initTheme();
    },

    /* ---------- THEME ---------- */
    setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("vay_theme", theme);
    },

    initTheme() {
        const saved = localStorage.getItem("vay_theme");
        if(saved) document.body.className = saved;
    },

    /* ---------- WINDOW SYSTEM ---------- */
    openWindow(title, content="VAY Module") {

        const win = document.createElement("div");
        win.className = "window glass";
        win.style.top = "120px";
        win.style.left = "150px";
        win.style.position = "absolute";
        win.style.width = "400px";
        win.style.height = "300px";
        win.style.padding = "20px";
        win.style.zIndex = this.zIndex++;

        win.innerHTML = `
            <div class="titlebar" style="display:flex;justify-content:space-between;cursor:move;">
                <div>
                    <span class="close" style="background:#ff5f57;width:14px;height:14px;border-radius:50%;display:inline-block;cursor:pointer;"></span>
                </div>
                <div>${title}</div>
            </div>
            <div style="margin-top:15px;">
                ${content}
            </div>
        `;

        document.body.appendChild(win);
        this.makeDraggable(win);

        win.querySelector(".close").onclick = () => {
            win.style.opacity = "0";
            setTimeout(()=>win.remove(),300);
        };

        win.onclick = () => win.style.zIndex = this.zIndex++;
    },

    makeDraggable(el) {
        let pos1=0,pos2=0,pos3=0,pos4=0;

        el.onmousedown = (e)=>{
            pos3=e.clientX;
            pos4=e.clientY;
            document.onmouseup = ()=> document.onmousemove=null;
            document.onmousemove = (e)=>{
                pos1=pos3-e.clientX;
                pos2=pos4-e.clientY;
                pos3=e.clientX;
                pos4=e.clientY;
                el.style.top=(el.offsetTop-pos2)+"px";
                el.style.left=(el.offsetLeft-pos1)+"px";
            };
        };
    },

    /* ---------- AUTH (LOCAL MOCK) ---------- */
    login(user,pass){
        if(user==="ADMIN" && pass==="123zxc567vbn"){
            localStorage.setItem("vay_admin","true");
            return true;
        }
        return false;
    },

    isAdmin(){
        return localStorage.getItem("vay_admin")==="true";
    }

};

window.onload = ()=> VAY.init();
