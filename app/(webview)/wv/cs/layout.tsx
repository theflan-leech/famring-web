import Head from 'next/head';
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: '고객센터',
    description: '파밍 고객센터',
  }
const Layout = ({
    children
}: { children: React.ReactNode }) => {
    return (<>
        {children}
    </>);
}
export default Layout;