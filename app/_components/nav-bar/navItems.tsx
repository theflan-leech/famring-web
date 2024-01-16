import { Navigation } from '@/app/_types/navigation'
export const navItems: Navigation[] = [
    {
        title: '파밍',
        url: "/",
        subNav: []
    }, {
        title: '중고거래',
        url: "/products",
        subNav: []
    }, {
        title: '문의하기',
        url: "",
        subNav: [
            {
                title: "사용문의",
                url: ""
            },
            {
                title: "제휴문의",
                url: ""
            }
        ]
    }
]