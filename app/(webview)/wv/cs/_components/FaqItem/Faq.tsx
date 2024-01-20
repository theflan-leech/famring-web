import { useEffect, useState } from 'react'
import './Faq.scss'
import { FAQ, FaqCateogory } from '@/app/_types/post';
import { useQuery } from '@tanstack/react-query';
import { loadFAQ } from '@/app/_services/post';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { HiChevronDown } from 'react-icons/hi';
export default function FAQItem({ faq }: { faq: FAQ }) {
    return (
        <AccordionItem header={
            <div className='faq-title-container-wrapper'>
                <p className='faq-title-category'>{faq.faqCategory.name}</p>
                <div className='faq-title-container'>
                    <p className='faq-title'>{faq.title}</p>
                    <div style={{width:"24px"}}>
                    <HiChevronDown className='chevron-down' size={24} />
                    </div>
                </div>
            </div>
        } key={faq.id}>
            {faq.content}
        </AccordionItem>)
}