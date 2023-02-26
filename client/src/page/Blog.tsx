import React from 'react'
import SliderPrimary from '../component/blog/SliderPrimary'
import Template from '../component/blog/Template'
import { useGlobalContext } from '../context'

const Blog = () => {
  const {trandingPost} = useGlobalContext();
  return (
    <div>
      <SliderPrimary posts={trandingPost} tag="Latest" />
      <Template/>
    </div>
  )
}

export default Blog