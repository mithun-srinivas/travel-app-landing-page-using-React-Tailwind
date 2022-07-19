import React from 'react'

export default function BottomCard(props) {
  return (
    <div className='bg-blank w-80 p-5 ml-10 cursor-pointer'>
        <div className='flex'>
            <div className='mr-5'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                <path d="M16 5.97339C14.9926 5.97339 14.0078 6.27211 13.1702 6.83177C12.3327 7.39143 11.6798 8.1869 11.2943 9.11759C10.9088 10.0483 10.808 11.0724 11.0045 12.0604C11.201 13.0484 11.6861 13.9559 12.3984 14.6683C13.1107 15.3806 14.0183 15.8657 15.0063 16.0622C15.9943 16.2587 17.0184 16.1579 17.9491 15.7724C18.8798 15.3868 19.6752 14.734 20.2349 13.8964C20.7946 13.0588 21.0933 12.0741 21.0933 11.0667C21.0933 9.71589 20.5567 8.42038 19.6015 7.46519C18.6463 6.51001 17.3508 5.97339 16 5.97339ZM16 14.3823C15.3442 14.3823 14.7032 14.1878 14.1579 13.8235C13.6127 13.4592 13.1877 12.9414 12.9368 12.3355C12.6858 11.7297 12.6202 11.063 12.7481 10.4199C12.876 9.77674 13.1918 9.18596 13.6555 8.72227C14.1192 8.25858 14.71 7.94281 15.3531 7.81487C15.9963 7.68694 16.6629 7.7526 17.2688 8.00355C17.8746 8.25449 18.3924 8.67946 18.7567 9.2247C19.1211 9.76994 19.3155 10.411 19.3155 11.0667C19.3132 11.9445 18.9628 12.7856 18.3413 13.4054C17.7197 14.0253 16.8778 14.3734 16 14.3734V14.3823Z" fill="white" fill-opacity="0.3"/>
                <path d="M16 1.77783C13.2313 1.78014 10.576 2.878 8.61409 4.83161C6.65216 6.78521 5.54302 9.43582 5.52893 12.2045C5.52893 16.3556 7.85782 19.8312 9.56449 22.3645L9.8756 22.8267C11.5736 25.2877 13.3952 27.6611 15.3334 29.9378L16.0089 30.7289L16.6845 29.9378C18.6224 27.6609 20.444 25.2875 22.1423 22.8267L22.4534 22.3556C24.1511 19.8223 26.48 16.3556 26.48 12.2045C26.4659 9.43428 25.3556 6.78233 23.3917 4.82847C21.4279 2.87461 18.7703 1.7778 16 1.77783ZM20.9689 21.3334L20.6489 21.8045C19.12 24.0978 17.0934 26.6667 16 27.9378C14.9512 26.6667 12.88 24.0978 11.3512 21.8045L11.04 21.3334C9.46671 18.9867 7.30671 15.7778 7.30671 12.1689C7.30671 11.0273 7.53157 9.89687 7.96845 8.84215C8.40533 7.78743 9.04568 6.82908 9.85293 6.02183C10.6602 5.21458 11.6185 4.57423 12.6732 4.13735C13.728 3.70047 14.8584 3.47561 16 3.47561C17.1417 3.47561 18.2721 3.70047 19.3268 4.13735C20.3816 4.57423 21.3399 5.21458 22.1472 6.02183C22.9544 6.82908 23.5948 7.78743 24.0316 8.84215C24.4685 9.89687 24.6934 11.0273 24.6934 12.1689C24.6934 15.8134 22.5423 19.0223 20.9689 21.3334Z" fill="white" fill-opacity="0.3"/>
                </g>
                </svg>
            </div>
            <div className='font-Montserrat ml-5'>
                <h2 className='text-white font-bold tracking-wider'>{props.place}</h2>
                <p className='text-gray-500'>Plan a trip</p>
            </div>
        </div>
    </div>
  )
}
