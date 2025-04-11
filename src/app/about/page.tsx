import Image from "next/image"
import Link from 'next/link'

export default function FoodDelivery() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="w-full border-b-2 border-solid border-gray-300">
          <nav className="w-[90%] m-auto flex items-center justify-between py-[20px]">
            <Image src="/Logo.png" width={120} height={40} alt="Logo" />
            <ul className="hidden sm:flex gap-[50px] text-[#424551]">
                          <li className="hover:text-[#FF5A30]">
                            <Link href="/">HW1</Link>
                          </li>
                          <li className="hover:text-[#FF5A30]"><Link href="/blog">HW2</Link></li>
                          <li className="text-[#FF5A30]">
                            <Link href="/about">HW3</Link>
                          </li>
                          <li className="hover:text-[#FF5A30]">
                            <Link href="/contact">HW4</Link>
                          </li>
                          <li className="hover:text-[#FF5A30]">
                            <Link href="#">HW5</Link>
                          </li>
                        </ul>
            <div className="flex gap-[50px]">
              <div className="hidden sm:flex items-center gap-[8px]">
                <Image src="/person.png" width={24} height={24} alt="Person icon" />
                <span className="text-[#9093A6]">Log in</span>
              </div>
              <div className="hidden sm:flex gap-[8px] items-center">
                <Image src="/Vector.png" width={24} height={24} alt="Cart icon" />
                <span className="text-[#9093A6]">0</span>
              </div>
              <div className="bg-white p-[10px] rounded-full">
                <Image src="/ic-menu-navigation.png" width={24} height={24} alt="Menu icon" />
              </div>
            </div>
          </nav>
        </div>

        <section className="flex flex-col justify-between sm:flex-row w-[90%] m-auto">
          <aside className="sm:w-[50%] flex flex-col gap-[50px]">
            <p className="sm:text-7xl text-[40px] text-center sm:text-left w-[360px] sm:w-[550px] mt-[110px]">
              Your Food court at home
            </p>
            <div className="flex justify-evenly sm:justify-between sm:w-[300px] w-[100%] text-center">
              <div className="border-solid border-2 border-[#FFE145] px-[25px] py-[10px]">
                <p className="text-[20px]">Delivery</p>
                <p>Order in</p>
              </div>
              <div className="border-solid border-2 border-[#FFE145] px-[25px] py-[10px]">
                <p className="text-[20px]">Takeout</p>
                <p>Grab and go</p>
              </div>
            </div>
          </aside>
          <aside className="flex justify-center items-center mt-[40px] sm:mt-[0px]">
            <Image src="/Photo-plate.png" width={800} height={800} alt="Food plate" />
          </aside>
        </section>

        <section className="w-[100%] mb-[40px] mt-[20px] sm:mt-[0px]">
          <div className="flex flex-col gap-[30px] sm:gap-[0px] pl-[40px] sm:flex-row bg-white py-[20px] sm:w-[60%] sm:pl-[60px] sm:pr-[20px] justify-between shadow-lg shadow-gray-400">
            <div className="flex items-center gap-[20px]">
              <Image src="/time-eat.png" width={40} height={40} alt="Time icon" />
              <p className="w-[200px]">delivery in all paris in less than 30 minutes</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <Image src="/delivery.png" width={40} height={40} alt="Delivery icon" />
              <p className="w-[100px]">Free delivery from 29 euros</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <Image src="/paris.png" width={40} height={40} alt="Paris icon" />
              <p>
                Only fresh <br />
                and French products
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="flex-grow">
        <section className="w-[90%] m-auto">
          <div className="flex justify-between items-center mb-[30px]">
            <p className="text-[40px] tracking-[2px]">Restaraunts</p>
            <button className="bg-[#F2F4FA] text-[#9093A6] py-[10px] px-[15px]">show all</button>
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] pb-[30px]">
            <aside className="flex flex-col items-center shadow-lg shadow-gray-300">
              <Image
                src="/first.jpeg"
                width={320}
                height={230}
                alt="Restaurant 1"
                className="w-[320px] h-[230px]"
              />
              <Image
                src="/Group 29.png"
                width={120}
                height={40}
                alt="Restaurant 1 logo"
                className="mt-[20px] mb-[20px]"
              />
            </aside>
            <aside className="flex flex-col items-center shadow-lg shadow-gray-300">
              <Image
                src="/second.jpeg"
                width={320}
                height={230}
                alt="Restaurant 2"
                className="w-[320px] h-[230px]"
              />
              <Image
                src="/un.png"
                width={120}
                height={40}
                alt="Restaurant 2 logo"
                className="mt-[30px] mb-[20px]"
              />
            </aside>
            <aside className="flex flex-col items-center shadow-lg shadow-gray-300">
              <Image
                src="/third.jpeg"
                width={320}
                height={230}
                alt="Restaurant 3"
                className="w-[320px] h-[230px]"
              />
              <Image
                src="/Union.png"
                width={120}
                height={40}
                alt="Restaurant 3 logo"
                className="mt-[20px] mb-[20px]"
              />
            </aside>
            <aside className="flex flex-col items-center shadow-lg shadow-gray-300">
              <Image
                src="/forth.jpeg"
                width={320}
                height={230}
                alt="Restaurant 4"
                className="w-[320px] h-[230px]"
              />
              <Image
                src="/uni.png"
                width={120}
                height={40}
                alt="Restaurant 4 logo"
                className="mt-[20px] mb-[20px]"
              />
            </aside>
          </div>
        </section>

        <section className="w-[100%] bg-[#F2F4FA] sm:h-[350px] mt-[40px]">
          <div className="w-[85%] m-auto flex flex-col sm:flex-row justify-between h-[100%]">
            <aside className="flex flex-col gap-[30px] justify-center">
              <p className="text-[50px] tracking-[2px]">Your nearest restaurants</p>
              <p className="text-[20px] w-[350px] sm:w-[550px]">
                Each kitchen works with its own delivery area to deliver food to you as soon as possible
              </p>
            </aside>
            <aside className="flex flex-col gap-[30px] justify-center mb-[50px] sm:mb-[0px] mt-[30px] sm:mt-[0px]">
              <div className="flex bg-white items-center gap-[10px] pl-[10px]">
                <Image src="/loc.png" width={24} height={24} alt="Location icon" />
                <input type="text" placeholder="Enter delivery adress" className="outline-none w-[400px]" />
                <button className="bg-[#FFE145] p-[25px] text-gray-400">send</button>
              </div>
            </aside>
          </div>
        </section>

        <section className="w-[90%] m-auto mt-[40px] mb-[40px]">
          <div className="flex justify-between items-center mb-[30px]">
            <p className="text-[40px] tracking-[2px]">Specialities</p>
            <button className="bg-[#F2F4FA] text-[#9093A6] py-[10px] px-[15px]">show all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-8 gap-[30px]">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-[10px] py-[20px] shadow-md shadow-gray-300 w-[150px] justify-center items-center"
              >
                <Image src="/bagel.png" width={60} height={60} alt="Bagel" />
                <p>Bagel</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-[100%]  flex flex-col px-[20px] gap-[50px] sm:flex-row sm:px-[300px] py-[60px] justify-between mt-[70px] mb-[60px]" id='bgImg'>
          <Image key={0} src="/Component 9.png" width={160} height={80} alt="Partner logo 1" />
          <Image key={1} src="/Component 7.png" width={160} height={80} alt="Partner logo 2" />
          <Image key={2} src="/Component 8.png" width={160} height={80} alt="Partner logo 3" />
          <Image key={3} src="/Component 10.png" width={160} height={80} alt="Partner logo 4" />
        </section>

		  <section id='izzy2'></section>

        <section className="w-[90%] m-auto mb-[50px]">
          <p className="sm:text-[45px] text-[30px] tracking-[3px] mb-[30px]">#YellowKitchens in instagram</p>
          <div className="grid sm:grid-cols-4 gap-[40px]">
            {[...Array(4)].map((_, index) => (
              <div key={index} id='img'></div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-[100%] bg-[#3F4255] text-white">
        <div className="w-[90%] m-auto flex justify-between gap-[50px] sm:gap-[0px] flex-col sm:flex-row py-[30px]">
          <div className="sm:w-[30%] mt-[30px] flex flex-col items-start gap-[60px]">
            <Image src="/yellowkitchen.png" width={180} height={40} alt="Yellow Kitchen logo" />
            <hr className="w-[100%] h-[5px]" />
            <Image src="/Group 32.png" width={180} height={40} alt="Social media icons" />
          </div>
          <div>
            <p className="text-[30px]">About us</p>
            <p>Concept</p>
            <p>Business</p>
            <p>Restaraunt signup</p>
            <p>For Investors</p>
            <p>Framchise</p>
          </div>
          <div>
            <p className="text-[30px]">Get Help</p>
            <p>Read FAQS</p>
            <p>Restaraunts</p>
            <p>Specialities</p>
            <p>Sign up</p>
            <p>English</p>
          </div>
          <div>
            <p className="text-[30px]">Contact us</p>
            <p>Yellow kitchen Paris 11</p>
            <p className="w-[200px] leading-[30px]">69 avenue de la Republique 75011 Paris</p>
            <p>0800 111 126</p>
            <p>contact@yellowkitchens.com</p>
          </div>
        </div>

        <section className="w-[90%] m-auto gap-[30px] sm:gap-[0px] flex flex-col sm:flex-row items-start sm:justify-between py-[30px]">
          <Image src="/Group 19.png" width={120} height={40} alt="Payment methods" />
          <div className="flex gap-[20px] sm:gap-[40px] flex-col sm:flex-row text-white">
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>© 2020 Yellow kitchen</p>
          </div>
        </section>
      </footer>
    </div>
  )
}
