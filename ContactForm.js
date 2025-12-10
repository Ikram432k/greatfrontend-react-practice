// Contact Form
//https://www.greatfrontend.com/questions/user-interface/contact-form?format=user-interface

import submitForm from './submitForm';

export default function App() {

  return (
    <form 
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
            action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="post"
      >
  <input id="name" name="name" type="text" placeholder="Name" required />
  
  <input id="email" name="email" type="email" placeholder="Email" required />
  
  <textarea id="message" name="message" placeholder="Message" required></textarea>
  
  <button type="submit">Send</button>
 </form>
  );
}
