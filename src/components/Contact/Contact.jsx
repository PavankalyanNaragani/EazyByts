import './Contact.css';

const Contact = () => {
  return (
     <div id="contact">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to contact me</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your name' />
            <input type='email' className='email' placeholder='Your Email' />
            <textarea className='msg' name='message' placeholder='Your Message' rows='5' />
            <button type='submit' className="submitBtn">Submit</button>
        </form>

     </div>
  )
}

export default Contact