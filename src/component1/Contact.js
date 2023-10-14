import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_smilo4w', 'template_jtl93hd', form.current, 'uKBkPTBJxguHTQcDl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
<>
<div className='contact' id="contact">
  <h3>CONTACT</h3>
        <div className="contact__container">
          <form name="contact" ref={form} method="POST" onSubmit={handleSubmit}  className="contact__form">
            <input type="text" name="name" placeholder="Name" className="contact__input" />
            <input type="email" name="mail_id" placeholder="Email" className="contact__input" />
            <textarea
              name="message"
              cols="0"
              rows="10"
              placeholder="Your Details ..."
              className="contact__input"
            ></textarea>
            <button 
              type="submit"
              className="contact__button btn btn-primary"
              >Send
              </button>
          </form>
        </div>
<div className="footer" >
      <p className="footer__title">Yash Parmar</p>
      <p className="footer__copy">&#169; yashpsct010. All rigths reserved</p>
    </div>
</div>
</>
    )
}
