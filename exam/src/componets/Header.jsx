import { useState } from 'react';
import BasketModal from './BasketModal';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';


export default function Header() {
    const [isBasketModalOpen, setIsBasketModalOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(!!localStorage.getItem('loggedInUser'));
    const [login, setLogin] = useState(localStorage.getItem('loggedInUser'));



    const basketOpenModal = () => {
        setIsBasketModalOpen(true);
    };

    const basketCloseModal = () => {
        setIsBasketModalOpen(false);
    };
    const loginOpenModal = () => {
        setIsLoginModalOpen(true);
    };

    const loginCloseModal = () => {
        setIsLoginModalOpen(false);
    };
    const handleLogout = () => {

        localStorage.removeItem('loggedInUser');

        localStorage.removeItem('cart');

        setLoggedInUser(false);
    };

    



    return (
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
            data-twe-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ms-2 md:me-2">
                    <Link to={"/"} className="text-xl text-black dark:text-white">
                        <img src="/Logo.svg" alt="logo" />
                    </Link>
                </div>
                {/* <!-- Hamburger button for mobile view --> */}
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent14"
                    aria-controls="navbarSupportedContent14"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* <!-- Hamburger icon --> */}
                    <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </button>

                {/* <!-- Collapsible navbar container --> */}
                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent14"
                    data-twe-collapse-item>
                    {/* <!-- Left links --> */}
                    <ul
                        className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                        data-twe-navbar-nav-ref>
                        {/* <!-- Home link --> */}
                        <li
                            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                            data-twe-nav-item-ref>
                            <Link to={"/"}
                                className="text-orange-100 dark:text-white lg:px-2 focus:text-orange-100/20 active:text-orange-100/20"
                                aria-current="page"
                                href="#"
                                data-twe-nav-link-ref
                            >Главная</Link>
                        </li>
                        {/* <!-- Link --> */}
                        <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <Link to={"/about"}
                                className="p-0 text-orange-100 transition duration-200 hover:text-orange-100/80 hover:ease-in-out focus:text-orange-100/20 active:text-orange-100/20 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >О нас</Link>
                        </li>

                    </ul>
                    {loggedInUser ? (
                        <div className='flex gap-4 items-center'>
                            <p className='text-xl text-orange-100 font-bold'>{login}</p>
                            <button
                                onClick={handleLogout}
                                className="inline-block mr-4 rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/40 hover:shadow-primary-2 focus:bg-orange-100 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/75 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            >
                                Выйти
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button
                                onClick={loginOpenModal}
                                className="inline-block mr-4 rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/40 hover:shadow-primary-2 focus:bg-orange-100 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/75 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            >
                                Войти
                            </button>
                        </div>
                    )}
                    <LoginModal isOpen={isLoginModalOpen} onClose={loginCloseModal} />

                    <button
                        type="button"
                        onClick={basketOpenModal}
                        className="inline-block mr-4 rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/40 hover:shadow-primary-2 focus:bg-orange-100 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/75 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-toggle="modal"
                        data-twe-target="#exampleModal"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        Корзина
                    </button>
                    <BasketModal isOpen={isBasketModalOpen} onClose={basketCloseModal} />
                    <form  className="w-[300px] lg:pe-2">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                
                                className="relative m-0 -me-0.5 block w-[1px] min-w-0 flex-auto rounded-s border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-orange-100 focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                                placeholder="Поиск..."
                                aria-label="Search"
                                aria-describedby="button-addon3" />

                            {/* <!--Search button--> */}
                            <button
                                className="relative z-[2] rounded-e border-2 border-orange-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-orange-100/45 transition duration-150 ease-in-out hover:border-orange-100/65 hover:bg-primary-50/50 hover:text-orange-100/65 focus:border-orange-100 focus:bg-primary-50/50 focus:text-orange-100/85 focus:outline-none focus:ring-0 active:border-orange-100/50 active:text-orange-100/65 motion-reduce:transition-none dark:text-orange-100/85 dark:hover:bg-orange-100/25 dark:focus:bg-orange-100/65"
                                type="submit"
                                id="button-addon3"
                                data-twe-ripple-init>
                                Поиск
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </nav>
    );
}