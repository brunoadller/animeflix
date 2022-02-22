import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {RiTwitterLine} from 'react-icons/ri'
import { BiCopyright} from 'react-icons/bi'

export default function Footer(props) {

    function footerDefinition() {
    
        if(!props.res){
          return(
            <footer className='footer' style={{position: 'absolute'}}>
              <span className='go'>Contate-nos:</span>
              <div className='contacts'>
                  <FiFacebook  className='fa'/>
                  <RiTwitterLine className='tw' />
                  <FiInstagram className='in'/>
              </div>
              <span>
                <BiCopyright />AnimeFlix 2022 
              </span>
          </footer>
          )
        } else if(props.res){
          
          return(
            <footer className='footer' style={{position: 'relative'}}>
              <span className='go'>Contate-nos:</span>
              <div className='contacts'>
                  <FiFacebook  className='fa'/>
                  <RiTwitterLine className='tw' />
                  <FiInstagram className='in'/>
              </div>
              <span>
                <BiCopyright />AnimeFlix 2022 
              </span>
          </footer>
          )
        }
      }
    return(
        <div>
            {footerDefinition()}
        </div>
    )
}