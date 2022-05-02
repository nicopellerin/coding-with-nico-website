import dynamic from 'next/dynamic'
import { ChasingDots } from 'better-react-spinkit'
// @ts-ignore
const MDX = dynamic(() => import('@mdx-js/runtime'), {
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ChasingDots color="white" size={48} />
    </div>
  ),
})

const Content = ({ post }) => {
  return <MDX>{post.content}</MDX>
}

export default Content
