import React from 'react'
export const Contact = () => {
  return (
<>
<div className='contact' id="contact">
  <h3>CONTACT</h3>
        <div className="contact__container">
          <form name="contact" action="POST" netlify className="contact__form">
            <input type="text" name="name" placeholder="Name" className="contact__input" />
            <input type="email" name="email" placeholder="Email" className="contact__input" />
            <textarea
              name="msg"
              cols="0"
              rows="10"
              placeholder="Contact Details ..."
              className="contact__input"
            ></textarea>
            <input
              type="submit"
              value="send"
              className="contact__button btn btn-primary"
            />
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
