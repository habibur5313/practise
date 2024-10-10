// const one = () => {
//             fetch ('https://forbes400.onrender.com/api/forbes400?limit=10')
//             .then(res => res.json())
//             .then(data => displayONe(data)) 
            
//             .catch(err => console.log(err))
// }

// const displayONe = (items) => {
//                    items.forEach(item => {
//                     console.log(item);
                    
//                     const oneDiv = document.getElementById('onediv')
//                     const div= document.createElement('div')
//                     div.innerHTML = `
//                               <div class="flex  justify-between items-center">
//                               <p>${item.naturalId}</P>
//                               <p>${item.person.name}</P>
//                               <p>${item.year}</P>
//                               <p>${item.rank}</P>
//                               </div>
//                     `
//                     oneDiv.appendChild(div)
//                    });
                    
// }
// one()
// const two = () => {
//                     fetch ('https://forbes400.onrender.com/api/forbes400/')
//                     .then(res => res.json())
//                     .then(data => console.log(data)) 
                    
//                     .catch(err => console.log(err))
// }
// const three = () => {
//                     fetch ('https://forbes400.onrender.com/api/forbes400/youngest')
//                     .then(res => res.json())
//                     .then(data => console.log(data)) 
                    
//                     .catch(err => console.log(err))
// }
// const four = () => {
//                     fetch ('https://forbes400.onrender.com/api/forbes400/states/Texas')
//                     .then(res => res.json())
//                     .then(data => console.log(data)) 
                    
//                     .catch(err => console.log(err))
// }
// const five = () => {
//                     fetch ('https://forbes400.onrender.com/api/forbes400/industries/technology')
//                     .then(res => res.json())
//                     .then(data => console.log(data)) 
                    
//                     .catch(err => console.log(err))
// }
// const six = () => {
//                     fetch ('https://forbes400.onrender.com/api/forbes400/getAllBillionaires')
//                     .then(res => res.json())
//                     .then(data => console.log(data)) 
                    
//                     .catch(err => console.log(err))
// }