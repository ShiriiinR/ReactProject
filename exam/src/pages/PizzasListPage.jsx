import { useState } from "react";
import { useGetPizzasQuery } from "../slice/pizzaList";

export default function PizzaListPage() {
    const { data: pizzas, error, isLoading } = useGetPizzasQuery();
    const [sortedProducts, setSortedProducts] = useState(null);

    const sortProductsByPrice = () => {
        if (!sortedProducts) {
            const sorted = [...pizzas].sort((a, b) => a.price - b.price);
            setSortedProducts(sorted);
        } else {
            const sorted = [...sortedProducts].reverse();
            setSortedProducts(sorted);
        }
    };

    const addToBasket = (id) => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            alert('Необходимо сначала авторизоваться.');
            return;
        }

        const addPizza = pizzas.find(pizza => pizza.id === id);
        if (addPizza) {
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.amount += 1;
            } else {
                const newItem = { ...addPizza, amount: 1 };
                cartItems.push(newItem);
            }
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    };

    return (
        <main className="flex p-14 justify-center flex-col">
            <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl text-orange-100 font-bold mb-4">Приготовление пиццы</h2>
                <p className="text-lg mb-4">
                    В нашем ресторане мы придерживаемся уникального подхода к приготовлению пиццы, основанного на тщательном выборе ингредиентов и нестандартных кулинарных решениях. Каждый компонент нашей пиццы - это результат глубоких исследований и творческого экспериментирования наших шеф-поваров.
                </p>
                <p className="text-lg mb-4">
                    Мы гордимся своим уникальным секретным рецептом теста, который придает нашей пицце неповторимый вкус и аромат. Наши кулинары тщательно подбирают самые свежие и качественные ингредиенты, чтобы каждая пицца стала настоящим кулинарным шедевром.
                </p>
                <p className="text-lg mb-4">
                    Мы постоянно ищем новые варианты комбинирования ингредиентов и творчески подходим к созданию новых рецептов, чтобы удивить вас новыми вкусовыми сочетаниями. Каждая наша пицца - это произведение искусства, в котором слились воедино традиции и современные тенденции в мировой кулинарии.
                </p>
                <p className="text-lg mb-4">
                    Приглашаем вас окунуться в мир настоящего итальянского вкуса и насладиться атмосферой вкуса и качества нашей пиццы.
                </p>
            </div>
            <div className="flex gap-10 justify-center mt-8">
                <h2 className="text-3xl text-orange-100">Пиццы</h2>
                <button
                    type="button"
                    onClick={sortProductsByPrice}
                    className="mr-3 inline-block max-w-60 rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/95 hover:shadow-primary-2 focus:bg-orange-100/95 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/75 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                    Отсортировать по цене
                </button>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Something went wrong</p>
            ) : (
                <ul className="grid grid-cols-3 gap-5 p-14 justify-center">
                    {(sortedProducts || pizzas).map((pizza) => (
                        <li key={pizza.id} className="max-w-md max-h-380px">
                            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                                <img
                                    className="rounded-t-lg max-w-60 max-h-40 object-cover"
                                    src={pizza.image}
                                    alt="imagePizza"
                                />
                                <div className="p-6 text-surface dark:text-white ">
                                    <h5 className="mb-2 text-2xl font-medium leading-tight">{pizza.name}</h5>
                                    <p className="mb-4 text-base">{pizza.description}</p>
                                    <p className="mb-4 text-base font-bold">{pizza.price}$</p>
                                    <button
                                        type="button"
                                        onClick={() => addToBasket(pizza.id)}
                                        className="inline-block rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/65 hover:shadow-primary-2 focus:bg-orange-100/85 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/50 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
