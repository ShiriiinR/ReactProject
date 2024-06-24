export default function PizzasSearchResultPage({ value }) {
    const { data: pizzas, error, isLoading } = useGetPizzasQuery();

    const findPizzaByName = (pizzaName) => {
        return pizzas.find(pizza => pizza.name === pizzaName)
    }
    const foundPizza = findPizzaByName(value)


    return (
        <main className="flex p-14 justify-center flex-col">
            <div className="flex gap-10 justify-center">
                <h2 className="text-3xl text-orange-100">Результат поиска:</h2>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Somthing went wrong</p>
            ) : (
                <ul className="grid grid-cols-3 gap-5 p-14">
                    
                        <li key={foundPizza.id} className="max-w-md max-h-380px">
                            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                                <img
                                    className="rounded-t-lg max-w-60 max-h-40 object-cover"
                                    src={foundPizza.image}
                                    alt="imagePizza" />
                                <div className="p-6 text-surface dark:text-white ">
                                    <h5 className="mb-2 text-2xl font-medium leading-tight">{foundPizza.name}</h5>
                                    <p className="mb-4 text-base">
                                        {foundPizza.description}
                                    </p>
                                    <p className="mb-4 text-base font-bold">
                                        {foundPizza.price}$
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-orange-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-orange-100/65 hover:shadow-primary-2 focus:bg-orange-100/85 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-orange-100/50 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                        data-twe-ripple-init
                                        data-twe-ripple-color="light">
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </li>
                    
                </ul>
            )}

        </main>
    )
}