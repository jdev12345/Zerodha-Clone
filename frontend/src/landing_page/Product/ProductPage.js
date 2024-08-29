import React from 'react'
import HeroSection from './HeroSection'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Universe from './Universe'

function ProductPage() {
  return (
    <div>
      <HeroSection/>
      <LeftImage
        ImgUrl="media/images/kite.png" 
        prdName="Kite" 
        prdDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <RightImage
         ImgUrl="media/images/console.png" 
         prdName="Console" 
         prdDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
         learnMore="https://zerodha.com/products/console"
      />
      <LeftImage
        ImgUrl="media/images/coin.png" 
        prdName="Coin" 
        prdDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <RightImage
        ImgUrl="media/images/kiteconnect.png" 
        prdName="Kite Connect API" 
        prdDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
        learnMore="https://kite.trade/"
      />
      <LeftImage
        ImgUrl="media/images/varsity.png" 
        prdName="Varsity" 
        prdDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <Universe/>
    </div>
  )
}

export default ProductPage