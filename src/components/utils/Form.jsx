import React from 'react'

export default function Form() {
  return (
   <><section className="p-6 dark:text-gray-100">
   <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-white/5">
       <h2 className="w-full text-3xl font-bold leadi">Contact us</h2>
       <div>
           {/* <label for="name" className="block ">Name</label> */}
           <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
       </div>

       <div>
           {/* <label for="name" className="block ">Name</label> */}
           <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
       </div>
       <div>
           {/* <label for="email" className="block">Email</label> */}
           <input id="email" type="number" placeholder="Your Phone Number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
       </div>
       <div>
           {/* <label for="message" className="block mb-1 ml-1">Message</label> */}
           <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
       </div>
       <div>
           <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900">Send</button>
       </div>
   </form>
</section>
</>
  )
}
