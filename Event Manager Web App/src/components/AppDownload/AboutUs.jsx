import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
    return (
       <div id='about-us'>
       <h2 className='h2-about'>About Us</h2>
          <p className='text-about'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus tortor, semper nec placerat nec, iaculis et mi.
            Maecenas velit sem, tincidunt id nulla ac, tristique interdum dolor. Donec ut volutpat diam. Sed vel dolor faucibus, blandit risus a, efficitur lorem. Praesent pharetra eleifend ornare. Nunc euismod sapien quis ultricies gravida. Maecenas id sodales quam. Quisque sed euismod purus.

            Sed nec ornare sapien. Fusce diam dolor, ornare at malesuada nec, hendrerit quis enim.
            Vivamus luctus risus eu metus luctus finibus. Donec blandit mattis turpis, eu ornare massa elementum sed.
            Mauris sit amet mattis magna. Mauris consectetur quam at interdum vehicula. Nulla in maximus arcu. Integer scelerisque eros imperdiet lectus sodales, eget rutrum ligula ullamcorper.
            Duis viverra, lectus sed placerat tristique, sapien nisi sodales diam, et congue nulla lacus a diam. Aenean consectetur eros augue, sed dictum ex vehicula sed. Aenean tincidunt, tortor a pharetra congue, ligula leo feugiat tellus, id vehicula velit neque sit amet felis.
            Nunc suscipit diam vitae nibh sagittis, eget malesuada enim mattis. Curabitur tincidunt est ut arcu suscipit volutpat nec a urna. Sed finibus ligula dui, in dapibus metus aliquam at. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
       </div>
    )
}

export default AboutUs
{/* <div className='app-download' id='app-download'>
<p>For Better Experience Download <br />Eventify Mobile App</p>
<div className="app-download-platforms">
    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
      <img src={assets.play_store} alt="Play Store" />
    </a>
    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
      <img src={assets.app_store} alt="App Store" />
    </a>
</div>
</div> */}