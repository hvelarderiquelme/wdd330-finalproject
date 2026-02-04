//modal appears when hovering on the logo

export function initTeamModal(){
    const modal = document.getElementById("team-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");

    if(!modal || !modalTitle){
        console.error("Modal elements have not been found");
        return;
    }

    const logos = document.querySelectorAll(".team-logo");

    if(logos.length === 0){
        console.error("No team logos have been found");
        return;
    }

    logos.forEach(img => {
        //Open modal
        img.addEventListener("click", () => {
                   
        modalTitle.textContent = img.dataset.name;

        //positione once
        
        modal.classList.remove("hidden");
        });
    });

   
}

// modal.js
// export function initTeamModal() {
//   const modal = document.getElementById("team-modal");
//   const modalTitle = document.getElementById("modal-title");
//   const modalInfo = document.getElementById("modal-info");

//   if (!modal || !modalTitle) {
//     console.error("Modal elements have not been found");
//     return;
//   }

//   let hideTimeout;
//   const logos = document.querySelectorAll(".team-logo");

//   if (logos.length === 0) {
//     console.error("No team logos have been found");
//     return;
//   }

//   logos.forEach(img => {
//     // 🔹 OPEN MODAL
//     img.addEventListener("mouseenter", e => {
//       clearTimeout(hideTimeout);

//       modalTitle.textContent = img.dataset.name || "Unknown team";

//       // position ONCE (do NOT follow cursor)
//       modal.style.top = `${e.pageY + 12}px`;
//       modal.style.left = `${e.pageX + 12}px`;

//       modal.classList.remove("hidden");
//     });

//     // 🔹 DELAYED CLOSE
//     img.addEventListener("mouseleave", () => {
//       hideTimeout = setTimeout(() => {
//         modal.classList.add("hidden");
//       }, 150);
//     });
//   });

//   // 🔹 KEEP OPEN WHILE HOVERING MODAL
//   modal.addEventListener("mouseenter", () => {
//     clearTimeout(hideTimeout);
//   });

//   modal.addEventListener("mouseleave", () => {
//     hideTimeout = setTimeout(() => {
//       modal.classList.add("hidden");
//     }, 150);
//   });
// }
