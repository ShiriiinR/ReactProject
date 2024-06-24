

export default function AboutUsPage() {
    const pizzaImage1 = 'https://images.unsplash.com/photo-1550389636-ad25afa7ab44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const pizzaImage2 = 'https://plus.unsplash.com/premium_photo-1677574026020-8d76374e70f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const pizzaImage3 = 'https://plus.unsplash.com/premium_photo-1663089333333-e2b684c76056?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const pizzaImage4 = 'https://images.unsplash.com/photo-1671612043251-428f4ba745f7?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const pizzaImage5 = 'https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl text-orange-100 font-bold mb-8">О нас</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <img src={pizzaImage1} alt="Pizza 1" className="rounded-lg mb-4" />
                    <p className="text-lg">
                        Наш ресторан - это место, где готовят самую вкусную пиццу в городе.
                        Мы используем только лучшие ингредиенты и соблюдаем старинные итальянские рецепты.
                    </p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <img src={pizzaImage2} alt="Pizza 2" className="rounded-lg mb-4" />
                    <p className="text-lg">
                        Наша команда профессиональных поваров работает в течение многих лет,
                        чтобы каждая пицца была идеальной - сочной, ароматной и неповторимой.
                    </p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <img src={pizzaImage3} alt="Pizza 3" className="rounded-lg mb-4" />
                    <p className="text-lg">
                        Мы уделяем особое внимание качеству обслуживания и стараемся сделать
                        ваше посещение нашего ресторана приятным и запоминающимся.
                    </p>
                </div>
            </div>
            <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-orange-100 font-bold mb-4">Наша история</h2>
                <img src={pizzaImage4} alt="Pizza 4" className="rounded-lg mb-4" />
                <p className="text-lg">
                    Наш ресторан открылся в 2005 году двумя братьями-пиццемейкерами,
                    которые вдохновлялись итальянской кулинарией и решили создать место,
                    где каждый сможет насладиться аутентичной и вкусной пиццей.
                    С тех пор мы постоянно развиваемся и радуем наших посетителей
                    новыми блюдами и превосходным сервисом.
                </p>
            </div>
            <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-orange-100 font-bold mb-4">Франшиза</h2>
                <img src={pizzaImage5} alt="Pizza 5" className="rounded-lg mb-4" />
                <p className="text-lg">
                    Наша франшиза успешно развивается во многих странах мира.
                    Мы предоставляем возможность открыть собственный ресторан
                    и стать частью нашей семьи. С каждым годом наша сеть
                    расширяется, и мы рады видеть наших партнеров успешными
                    в бизнесе с нами.
                </p>
                <p className="text-lg mt-4">
                    Наша франшиза предлагает не только возможность открытия
                    собственного ресторана, но и полную поддержку и обучение
                    в области менеджмента, маркетинга и кулинарии. Мы гордимся
                    тем, что наши партнеры становятся успешными предпринимателями
                    вместе с нами.
                </p>
                <p className="text-lg mt-4">
                    Если вы заинтересованы в открытии франшизы в вашей стране,
                    свяжитесь с нами для получения дополнительной информации.
                </p>
            </div>
        </div>
    );
}


