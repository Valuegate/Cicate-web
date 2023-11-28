import React from 'react'
import Navbar from '../../components/containers/navbar/navbar'
import './style.css'
import tick from '../../assets/tick.svg'
import Footer from '../../components/containers/footer/footer'
const Faq = () => {
  return (
    <div>
      <Navbar/>
      <div className='faq_up'>
        <div className='faq'>FAQ</div>
      </div>
      <div className='display_faq'>
        <p className='questions_opac'>Questions that might have an answer for you!</p>
      </div>
    <div className='flexx_box'>
      <div className='grid_box'>
        <div className='first_box'>
          <div className='faq_flex'>
            <div className='general_faq'>General Faq</div>
          </div>

          <div className='ci_flex'>
            <div className='ci_header'></div>
          </div>
        </div>



        <div className='second_box'>
          <div className='faq_flex'>
            <div className='general_faq'>P.O.C.A.S- Professional <br /> Assessment & <br /> Selection Suite FAQs</div>
          </div>
        </div>
      </div>

      <div className='grid_box'>
        <div className='third_box'>
          <div className='faq_flex'>
            <div className='general_faq'>
            G.A.T.E. - Global <br /> Assessment Test for <br /> Education FAQs
            </div>
          </div>
        </div>
        <div className='fourth_box'>
          <div className='faq_flex'>
            <div className='general_faq'>General FAQ</div>
          </div>
        </div>
      </div>



    </div>
    </div>
  )
}

export default Faq
