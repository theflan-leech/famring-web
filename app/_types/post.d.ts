export type Notice = {
    id: number,
    title: string,
    createdDate: string;
    content?: string
}
export type FaqCateogory={
    id: number,
    name: string
}

export type FAQ={

    id: number,
    title: string,
    content:string,
    faqCategory : FaqCateogory
}