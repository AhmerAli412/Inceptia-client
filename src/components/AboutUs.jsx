import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div>

 <Navbar/>

<section class="flex items-center py-10 bg-bgg xl:h-screen font-poppins">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="relative">
                        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" alt=""
                            class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"/>
                        <div
                            class="absolute z-10 hidden w-full h-full bg-bgg rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                        </div>
                        <div
                            class="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">
                                </path>
                            </svg> */}
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div class="relative">
                        <h1
                            class="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                            About Us
                        </h1>
                        <h1 class="pl-2 text-3xl font-bold border-l-8 border-green-400 md:text-5xl dark:text-white">
                            Welcome to our site
                        </h1>
                    </div>
                    <p class="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    At Inceptia, we are at the forefront of innovation in the gaming industry, 
                    spearheading a blockchain-powered gaming platform that fuses technology and 
                    entertainment.We are committed to revolutionizing gaming experiences by harnessing
                    the potential of blockchain technology. To empower users with true ownership of in-game assets, 
                    providing a dynamic and rewarding ecosystem where creativity and skill thrive.
                    </p>
                    <a href="/"
                        class="px-4 py-3 text-gray-50 transition-all transform bg-green-600 rounded-[80px] hover:bg-green-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="flex items-center bg-bgg xl:h-screen font-poppins ">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap items-center ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="lg:max-w-md">
                        <span class="text-xl font-semibold text-green-400 uppercase   ">
                            About Us</span>
                        <h2 class="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
                            We are the providing the innovation in gaming industry</h2>
                        <p class="mb-10 text-gray-600 dark:text-gray-400 ">
                        Join us with at Inceptia and be a part of a gaming revolution where your skills and imagination take center stage in an ecosystem designed to reward and empower users.</p>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6   bg-green-600 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                                <path
                                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                <path
                                    d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                What we do?
                            </h2>
                            <p class="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Develop a blockchain-powered gaming platform merging technology and entertainment.
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6   bg-green-600 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                    d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                                Strategy
                            </h2>
                            <p class="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Integrate cutting-edge blockchain technology for authentic ownership and security.
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span
                            class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6   bg-green-600 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                                <path
                                    d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                                </path>
                            </svg>
                        </span>
                        <div>
                            <h2 class="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                               Mission
                            </h2>
                            <p class="text-base leading-loose text-gray-500 dark:text-gray-400">
                            Revolutionize gaming experiences through blockchain, offering true ownership and rewards.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </div>
  )
}

export default AboutUs