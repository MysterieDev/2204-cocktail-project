export function renderNavbar(){
    const href = window.location.href;
    const currentSite = href.split('/').pop();
    document.querySelector('#navbar')!.innerHTML = `
        <ul>
            <li class="${currentSite === "second.html" ? "active" : ""}">menu</li>
        </ul>
    `
}