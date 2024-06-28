document.addEventListener("DOMContentLoaded", () => {
    async function fetchProductData(url, containerId) {
        try {
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);

            const products = [];

            // Парсинг данных для Metro
            if (url.includes('metro.md')) {
                $('.product-item').each((index, element) => {
                    const title = $(element).find('.product-name').text().trim();
                    const price = $(element).find('.product-price').text().trim();
                    const imageUrl = $(element).find('.product-image img').attr('src');

                    products.push({ title, price, imageUrl });
                });
            }

            // Парсинг данных для Kaufland
            else if (url.includes('kaufland.md')) {
                $('.product-box').each((index, element) => {
                    const title = $(element).find('.product-title').text().trim();
                    const price = $(element).find('.product-price').text().trim();
                    const imageUrl = $(element).find('.product-image img').attr('src');

                    products.push({ title, price, imageUrl });
                });
            }

            // Добавьте аналогичные блоки для Nr.1 и Linella

            displayProducts(products, containerId);
        } catch (error) {
            console.error(`Ошибка при получении данных с ${url}:`, error);
            document.getElementById(containerId).innerHTML = '<p>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>';
        }
    }

    function displayProducts(products, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        if (products.length === 0) {
            container.innerHTML = '<p>Продуктов нет</p>';
            return;
        }
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'discount';
            productElement.innerHTML = `
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <img src="${product.imageUrl}" alt="${product.title}">
            `;
            container.appendChild(productElement);
        });
    }

    // Замените ссылки на реальные URL-адреса магазинов и идентификаторы контейнеров
    fetchProductData('https://www.metro.md/catalogele-metro', 'metro-discounts');
    fetchProductData('https://www.kaufland.md/ru/predlozheniya/predlozheniya-nedeli/na-etoy-nedele.category=01a_Legume__fructe__flori.html', 'kaufland-discounts');
    fetchProductData('https://nr1.md/ro/booklets/', 'nr1-discounts');
    fetchProductData('https://linella.md/ro/promotii/mega_oferta', 'linella-discounts');
});
