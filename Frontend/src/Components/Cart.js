// import { useContext } from "react";
// import { badgeContext } from "../Context/BadgeState";
// import { contentContext } from "./Content";
// function Cart() {
//     const {cards} = useContext(useContext);
//     const {badgeCount,setBadgeCount} = useContext(badgeContext);

//     return (
        
//         <div>
//              {cards.map((card) => (
//             <div key={card.id} className={`card${card.id}`} style={{ marginTop: "10px", height: "400px", width: "23%", backgroundColor: "white" }}>
//               <div className='card-content' style={{ padding: "20px 0px 15px", marginLeft: "1rem", marginRight: "1rem" }}>
//                 <h2>{card.title}</h2>
//                 <div className={`card${card.id}-image`}>
//                   <img src={card.image} alt={card.title} style={{ height: "250px", width: "100%", objectFit: "cover" }} />
//                 </div>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <p style={{ marginTop:"30px" }}>Price: {card.price}</p>
//         </div>
//               </div>
//             </div>
//           ))}
//         </div>

//     );
// }

// export default Cart;
