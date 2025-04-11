import Image from "next/image"
import { ShoppingBag, Package, Tag } from "lucide-react"
import { QrCode } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import Todolist from "../(components)/todolist"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-100">
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-teal-500 text-2xl font-bold">//</div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <ul className="hidden sm:flex gap-[50px] text-[#424551]">
            <li className="hover:text-[#FF5A30]">
              <Link href="/">HW1</Link>
            </li>
            <li className="hover:text-[#FF5A30]">
              <Link href="/blog">HW2</Link>
            </li>
            <li className="hover:text-[#FF5A30]">
              <Link href="/about">HW3</Link>
            </li>
            <li className="text-[#FF5A30]">
              <Link href="/contact">HW4</Link>
            </li>
            <li className="hover:text-[#FF5A30]">
              <Link href="#">HW5</Link>
            </li>
          </ul>
        </nav>
        <button className="bg-teal-500 py-[10px] px-[20px] hover:bg-teal-600 text-white rounded-full flex items-center">
          Сделать заказ <ShoppingBag className="ml-2 h-4 w-4" />
        </button>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full">
          <div className="absolute right-0 top-0 w-3/4 h-full">
            <div className="w-full h-full bg-teal-100/30 transform -skew-x-12"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-500 text-sm mb-6">
              <span>Margiela Service</span>
              <div className="w-2 h-2 rounded-full bg-teal-500 ml-2"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Margiela Service - <br />
              правильный выбор!
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              После ухода любимых брендов не можете найти себе обувь? Мы решим вашу проблему с быстрой доставкой в любую
              точку страны по выгодной цене.
            </p>
          </div>

          <div className="md:w-1/2 relative z-10 mt-8 md:mt-0">
            <div className="relative">
              <Image src="/Frame 301.png" alt="Black sneakers" width={700} height={400} className="object-contain" />
              <div className="absolute -top-2 right-0 bg-teal-100 text-teal-600 font-bold px-3 py-1 rounded-full">
                -25%
              </div>
              <div className="absolute bottom-0 left-0 bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm">
                Выгодно!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="/iPhone 15.png"
                alt="Mobile phone with reviews"
                width={700}
                height={300}
                className="object-contain mx-auto"
              />
            </div>
            <div className="bg-teal-400/30 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <ShoppingBag className="text-white h-6 w-6 mr-2" />
                <h3 className="text-white text-xl font-semibold">Акция на первый заказ!</h3>
              </div>
              <p className="text-white/90 mb-4">Бесплатная доставка заказанного товара через СДЭК в любой регион РФ</p>
              <button className="bg-white flex items-center py-[10px] px-[20px] rounded-[7px] text-teal-500 hover:bg-teal-50">
                Сделать заказ <ShoppingBag className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg relative">
              <div className="absolute -top-3 -right-3 bg-teal-100 p-2 rounded-full">
                <Package className="text-teal-500 h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Товары в наличии</h4>
              <p className="text-sm text-gray-600">
                У нас есть огромный ассортимент товаров, которые уже находятся на нашем складе в Москве
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg relative">
              <div className="absolute -top-3 -right-3 bg-teal-100 p-2 rounded-full">
                <Package className="text-teal-500 h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-sm text-gray-600">
                Самая быстрая доставка среди всех конкурентов. Доставка в любую точку РФ за 1-3 дня!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg relative">
              <div className="absolute -top-3 -right-3 bg-teal-100 p-2 rounded-full">
                <Tag className="text-teal-500 h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Ассортимент Poizon</h4>
              <p className="text-sm text-gray-600">
                Мы поможем вам заказать любую интересующую вас вещь напрямую с poizon по доступной цене
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8 text-center">Order Process with POZION</h1>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="flex flex-col items-center">
                <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-medium">01</span>
                </div>
                <div className="text-center">
                  <p className="text-sm">
                    Order processing takes no more than 5 minutes (we help you catalog the item by photo, determine its
                    size)
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-medium">02</span>
                </div>
                <div className="text-center">
                  <p className="text-sm">Product purchase on the day of payment (purchases happen around the clock)</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-medium">03</span>
                </div>
                <div className="text-center">
                  <p className="text-sm">
                    At the customers request, we provide additional photo/video of the interesting pair
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="font-medium">04</span>
                </div>
                <div className="text-center">
                  <p className="text-sm">
                    Each client receives a track number from us, which they can use to track the shipment
                  </p>
                </div>
              </div>

              <div className="hidden md:block absolute top-6 left-0 right-0 h-0 w-full z-0">
                <div className="border-t-2 border-dashed border-sky-200 mx-16"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl relative">
              <h2 className="text-xl font-bold mb-6">Calculate order cost directly on the site</h2>

              <div className="mb-6">
                <input type="text" placeholder="Enter product price" className="mb-4" />

                <div className="flex flex-wrap gap-2 mb-6">
                  <button className="bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-full cursor-pointer">Shoes</button>
                  <button className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer">Clothing</button>
                  <button className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                    Accessories
                  </button>
                </div>

                <div className="mt-8 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total cost:</span>
                    <span className="text-xl font-bold">3500₽</span>
                  </div>
                  <div className="text-sm text-gray-500">Including delivery</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 text-teal-200 opacity-30">
                <span className="text-6xl font-bold">₽</span>
              </div>
            </div>

            <div className="bg-teal-500 text-white p-6 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-2">Like the price?</h2>
                <p className="text-xl font-bold mb-6">- Order now!</p>

                <p className="mb-6 text-teal-50">
                  Choose products from POZION or buy directly from our warehouse in Moscow
                </p>

                <div className="bg-white p-4 inline-block rounded-lg mb-6">
                  <QrCode size={100} className="text-black" />
                </div>

                <div>
                  <button className="bg-teal-800 py-[10px] px-[20px] rounded-[10px] hover:bg-teal-900 text-white">
                    Place Order
                  </button>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 z-0">
                <Image
                  src="/91c36c78f84f2732925a0351b565f12f 1.png"
                  alt="Shoes"
                  width={550}
                  height={200}
                  className="opacity-90"
                />
              </div>

              <div className="absolute top-20 right-20 text-teal-200 opacity-30">
                <div className="w-10 h-10 rounded-full bg-white/20"></div>
              </div>
              <div className="absolute top-40 right-40 text-teal-200 opacity-30">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Todolist />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">What is our company?</h3>
              <p className="text-gray-600">
                Our company is a marketplace with a huge assortment of branded shoes and clothing, including limited
                edition releases and collaborations. 95% of products are impossible to find in regular stores. Besides
                the huge assortment, we offer prices for original products 2-3 times lower than in retail stores, which
                is why we're so interesting to customers. The key issue is that we only operate in certain territories,
                so we handle delivery as intermediaries for a small commission.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                How long does delivery take from our warehouse?
              </h3>
              <p className="text-gray-600">
                All items are stored in our warehouse in the city and delivery usually takes 1-5 days. We ship orders
                via courier services to make it as convenient as possible for each customer to receive their order.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">
                Can I order an item that's not in your inventory?
              </h3>
              <p className="text-gray-600">
                Yes, of course. If you don t find the item you need in our inventory, we can offer to place an order
                from our warehouse overseas. Delivery from overseas to our local warehouse takes 5 to 15 days. After
                that, considering the time for pickup and delivery to your city, customers usually receive their items
                within 2 weeks.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">Do you provide original products?</h3>
              <p className="text-gray-600">
                With us, you ll find only original products. Our strong connections with suppliers from Europe and Asia
                have been verified by time and thousands of deliveries.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm p-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900">What guarantees do you offer?</h3>
              <p className="text-gray-600">
                After 2 years of operation on our telegram channel, we have over 10,000 subscribers and thousands of
                satisfied customers. We have a dedicated channel for customer reviews and completed orders. We work
                honestly and transparently, not hiding our data and orders. All packages are insured, and in case of
                loss, we will help you receive your item.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Как правильно подобрать размер обуви?</h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="overflow-hidden border-[#4DD0E1] border-2">
            <Table>
              <TableHeader className="bg-[#4DD0E1]">
                <TableRow>
                  <TableHead className="text-center text-white font-medium">Размер EU</TableHead>
                  <TableHead className="text-center text-white font-medium">Размер стопы</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">36</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">22.5 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">37</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">23 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">38</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">24 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">39</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">24.5 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">40</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">25 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">41</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">26 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">42</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">26.5 см</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">43</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">27.5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">44</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">45</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">29</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">46</TableCell>
                  <TableCell className="text-center text-[#4DD0E1]">30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <div className="flex mb-12 relative">
                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#4DD0E1] font-medium">
                      01
                    </div>
                  </div>
                  <div className="ml-4 mt-2">
                    <p className="text-sm">Поставь ногу на лист бумаги так, чтоб пятка касалась стены</p>
                  </div>
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-[#E0F7FA]"></div>
                </div>

                <div className="flex mb-12 relative">
                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#4DD0E1] font-medium">
                      02
                    </div>
                  </div>
                  <div className="ml-4 mt-2">
                    <p className="text-sm">Обведи ногу карандашом, не отрывая стопу от бумаги</p>
                  </div>
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-[#E0F7FA]"></div>
                </div>

                <div className="flex mb-12 relative">
                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#4DD0E1] font-medium">
                      03
                    </div>
                  </div>
                  <div className="ml-4 mt-2">
                    <p className="text-sm">Измерь расстояние от кончика большого пальца до конца пятки</p>
                  </div>
                  <div className="absolute left-6 top-12 w-0.5 h-12 bg-[#E0F7FA]"></div>
                </div>

                <div className="flex mb-12 relative">
                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#4DD0E1] font-medium">
                      04
                    </div>
                  </div>
                  <div className="ml-4 mt-2">
                    <p className="text-sm">Повтори эти же действия со второй стопой</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Узнав большую размер своей стопы в СМ, сверься с нашей таблицей и найди свой размер.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/air-max-plus-older-shoes-TM2lTJ (1) 1.png"
                  alt="Shoe measurement example"
                  width={400}
                  height={300}
                  className="object-contain"
                />
                <div className="absolute bottom-0 right-0 w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#4DD0E1] opacity-50">
                    <path
                      d="M10,50 Q30,10 50,50 T90,50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <circle cx="90" cy="50" r="5" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6L7 10M7 6L3 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 6L15 10M15 6L11 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="uppercase font-bold text-sm">
                <div>Margiela</div>
                <div>Service</div>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0 text-sm">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Главная
              </Link>
              <Link href="/акция" className="hover:text-gray-300 transition-colors">
                Акция
              </Link>
              <Link href="/оформление-заказа" className="hover:text-gray-300 transition-colors">
                Оформление заказа
              </Link>
              <Link href="/калькулятор-стоимости" className="hover:text-gray-300 transition-colors">
                Калькулятор стоимости
              </Link>
              <Link href="/товары-в-москве" className="hover:text-gray-300 transition-colors">
                Товары в Москве
              </Link>
              <Link href="/faq" className="hover:text-gray-300 transition-colors">
                FAQ
              </Link>
              <Link href="/таблица-размеров" className="hover:text-gray-300 transition-colors">
                Таблица размеров
              </Link>
            </nav>

            <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center">
              Сделать заказ
              <svg
                className="ml-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L15 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="border-t border-gray-800 my-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div>Designed with love by MRN design agency</div>
            <div>Все права защищены ©2023</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
