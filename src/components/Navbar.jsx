import React, { useState } from "react";
import { Link } from "react-router-dom";
import ballimg from './../assets/ball.svg';
import { useDispatch } from "react-redux";
import { showTournament, updateData } from './../redux/actions';

const Navbar = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        // Dispatch the action to update the data in the Redux store
        dispatch(showTournament(true));
    };

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <nav className="bg-[--layout-header-background]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow">
                <Link to="/" className="flex items-center gap-2">
                    <img src={ballimg} className="h-8" alt="Logo" />
                    <p className="text-2xl font-bold text-white pb-1">Live Score</p>
                </Link>
                <div onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3394 5.6593C19.0094 6.1783 19.4204 6.9493 19.4904 7.7883L19.5004 7.9893V16.0983C19.5004 18.1883 17.8494 19.8883 15.7804 19.9983H13.7904C12.8394 19.9793 12.0704 19.2393 12.0004 18.3093L11.9904 18.1683V15.3093C11.9904 14.9983 11.7594 14.7393 11.4504 14.6883L11.3604 14.6783H8.68943C8.37043 14.6883 8.11043 14.9183 8.07043 15.2183L8.06043 15.3093V18.1593C8.06043 18.2183 8.04943 18.2883 8.04043 18.3383L8.03043 18.3593L8.01943 18.4283C7.90043 19.2793 7.20043 19.9283 6.33043 19.9893L6.20043 19.9983H4.41043C2.32043 19.9983 0.610427 18.3593 0.500427 16.2983V7.9893C0.509427 7.1383 0.880427 6.3483 1.50043 5.7983L7.73043 0.788301C9.00043 -0.220699 10.7804 -0.260699 12.0894 0.668301L12.2504 0.788301L18.3394 5.6593ZM18.0994 16.2583L18.1104 16.0983V7.9983C18.0994 7.5693 17.9204 7.1683 17.6104 6.8693L17.4804 6.7583L11.3804 1.8783C10.6204 1.2683 9.54043 1.2393 8.74043 1.7683L8.58943 1.8783L2.50943 6.7793C2.16043 7.0383 1.95043 7.4283 1.90043 7.8383L1.88943 7.9983V16.0983C1.88943 17.4283 2.92943 18.5183 4.25043 18.5983H6.20043C6.42043 18.5983 6.61043 18.4493 6.63943 18.2393L6.66043 18.0593L6.67043 18.0083V15.3093C6.67043 14.2393 7.49043 13.3693 8.54043 13.2883H11.3604C12.4294 13.2883 13.2994 14.1093 13.3804 15.1593V18.1683C13.3804 18.3783 13.5304 18.5593 13.7304 18.5983H15.5894C16.9294 18.5983 18.0194 17.5693 18.0994 16.2583Z" fill="#FFF" />
                    </svg>
                </div>
                {/* <button onClick={toggleNav} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:none focus:outline-none focus:none focus:none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3394 5.6593C19.0094 6.1783 19.4204 6.9493 19.4904 7.7883L19.5004 7.9893V16.0983C19.5004 18.1883 17.8494 19.8883 15.7804 19.9983H13.7904C12.8394 19.9793 12.0704 19.2393 12.0004 18.3093L11.9904 18.1683V15.3093C11.9904 14.9983 11.7594 14.7393 11.4504 14.6883L11.3604 14.6783H8.68943C8.37043 14.6883 8.11043 14.9183 8.07043 15.2183L8.06043 15.3093V18.1593C8.06043 18.2183 8.04943 18.2883 8.04043 18.3383L8.03043 18.3593L8.01943 18.4283C7.90043 19.2793 7.20043 19.9283 6.33043 19.9893L6.20043 19.9983H4.41043C2.32043 19.9983 0.610427 18.3593 0.500427 16.2983V7.9893C0.509427 7.1383 0.880427 6.3483 1.50043 5.7983L7.73043 0.788301C9.00043 -0.220699 10.7804 -0.260699 12.0894 0.668301L12.2504 0.788301L18.3394 5.6593ZM18.0994 16.2583L18.1104 16.0983V7.9983C18.0994 7.5693 17.9204 7.1683 17.6104 6.8693L17.4804 6.7583L11.3804 1.8783C10.6204 1.2683 9.54043 1.2393 8.74043 1.7683L8.58943 1.8783L2.50943 6.7793C2.16043 7.0383 1.95043 7.4283 1.90043 7.8383L1.88943 7.9983V16.0983C1.88943 17.4283 2.92943 18.5183 4.25043 18.5983H6.20043C6.42043 18.5983 6.61043 18.4493 6.63943 18.2393L6.66043 18.0593L6.67043 18.0083V15.3093C6.67043 14.2393 7.49043 13.3693 8.54043 13.2883H11.3604C12.4294 13.2883 13.2994 14.1093 13.3804 15.1593V18.1683C13.3804 18.3783 13.5304 18.5593 13.7304 18.5983H15.5894C16.9294 18.5983 18.0194 17.5693 18.0994 16.2583Z" fill="#FFF" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div> */}

                {/* {isNavOpen &&
                    <div className="relative block w-full md:hidden md:w-auto" id="navbar-default">
                        <ul className="absolute z-10 top-1 left-0 right-0 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>} */}
            </div>
        </nav>
    );
};

export default Navbar;
