document.addEventListener("DOMContentLoaded", () => {
    async function fetchDiscounts(url, containerId) {
        try {
            const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const html = response.data.contents;
            const $ = cheerio.load(html);
            const discounts = [];
            // Пример парсинга данных, измените в зависимости от структуры сайта
            $('.product').each((index, element) => {
                const title = $(element).find('.product-title').text();
                const description = $(element).find('.product-description').text();
                discounts.push({ title, description });
            });
            displayDiscounts(discounts, containerId);
        } catch (error) {
            console.error(`Ошибка при получении данных с ${url}:`, error);
            document.getElementById(containerId).innerHTML = '<p>Не удалось загрузить данные. Пожалуйста, попробуйте позже.</p>';
        }
    }

    function displayDiscounts(discounts, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        if (discounts.length === 0) {
            container.innerHTML = '<p>Скидок нет</p>';
            return;
        }
        discounts.forEach(discount => {
            const discountElement = document.createElement('div');
            discountElement.className = 'discount';
            discountElement.innerHTML = `<h3>${discount.title}</h3><p>${discount.description}</p>`;
            container.appendChild(discountElement);
        });
    }

    fetchDiscounts('https://kaufland.md/specials', 'kaufland-discounts');
    fetchDiscounts('https://nr1.md/specials', 'nr1-discounts');
    fetchDiscounts('https://metro.md/specials', 'metro-discounts');
    fetchDiscounts('https://linella.md/specials', 'linella-discounts');
});
