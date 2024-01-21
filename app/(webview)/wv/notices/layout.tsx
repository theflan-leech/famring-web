import Head from 'next/head';
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: '공지사항',
    description: '파밍 공지사항',
  }
const Layout = ({
    children
}: { children: React.ReactNode }) => {
    return (<>
        {children}
    </>);
}
export default Layout;