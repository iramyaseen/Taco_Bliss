// // components/ContactForm.tsx

// import { useState } from "react";

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Message sent successfully");
//         setLoading(false);
//         // Reset the form
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         console.log("Error sending message");
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="w-full flex flex-col my-4">
//         <label className="font-bold text-black" htmlFor="name">
//           Name
//         </label>
//         <input
//           type="text"
//           minLength={3}
//           maxLength={150}
//           required
//           className="p-4 bg-gray-50 border border-gray-100"
//           autoComplete="off"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="w-full flex flex-col my-4">
//         <label className="font-bold text-black" htmlFor="email">
//           Email
//         </label>
//         <input
//           type="email"
//           minLength={5}
//           maxLength={150}
//           required
//           className="p-4 bg-gray-50 border border-gray-100"
//           autoComplete="off"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label className="font-bold text-black" htmlFor="message">
//           Message
//         </label>
//         <textarea
//           rows={4}
//           required
//           minLength={10}
//           maxLength={500}
//           name="message"
//           className="w-full p-4 bg-gray-50 border border-gray-100"
//           value={formData.message}
//           onChange={handleChange}
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-black font-medium mt-4"
//       >
//         {loading ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   );
// }
