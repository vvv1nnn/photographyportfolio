import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // eslint-disable-next-line promise/catch-or-return
    emailjs
      .sendForm('service_e7jzgdb', 'template_uxvvozo', form.current, {
        publicKey: 'YxaNokxgGoL7-s2o_',
      })
      .then(
        () => {
          alert('Your email has been sent!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <div className="formcontainer">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Submit</span>
        </button>
      </form>
    </div>
  )
}
