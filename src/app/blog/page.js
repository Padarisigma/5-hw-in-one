"use client"

import Link from "next/link"
export default function Service() {
  return (
    <div className="w-[100%] m-auto">
      <header className="muhammad">
      <nav className="w-[80%] sm:w-[75%] py-[15px] m-auto flex justify-between items-center">
          <div className="flex items-center gap-[30px]">
            <div className='bg-gray-300 w-[200px] h-[50px]'></div>
            <ul className="hidden sm:flex gap-[50px] text-[#424551]">
              <li className="hover:text-[#FF5A30]">
                <Link href="/">HW1</Link>
              </li>
              <li className="text-[#FF5A30]">HW2</li>
              <li className="hover:text-[#FF5A30]">
                <Link href="/about">HW3</Link>
              </li>
              <li className="hover:text-[#FF5A30]">
                <Link href="/contact">HW4</Link>
              </li>
              <li className="hover:text-[#FF5A30]">
                <Link href="#">HW5</Link>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex gap-[30px]">
            <div className="flex items-center gap-[10px]">
            <div className='bg-gray-300 w-[20px] h-[20px]'></div>
              <div>
                <p className="text-[#424551] text-[14px]">Call us</p>
                <p className="text-[#1E212C] text-[18px]">(405) 555-0128</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-[10px]">
            <div className='bg-gray-300 w-[20px] h-[20px]'></div>
              <div>
                <p className="text-[#424551] text-[14px]">Talk to us</p>
                <p className="text-[#1E212C] text-[18px]">hello@createx.com</p>
              </div>
            </div>
          </div>
        </nav>

        <div className="px-[40px] sm:px-[180px] bg-gray-300 py-[60px]">
          <div className="flex gap-3 ">
            <p>Homepage</p> <span className="text-gray-400">/</span>
            <p className="text-gray-400">Services</p>
          </div>
          <div>
            <p className="text-5xl font-bold mt-10">SERVICES</p>
            <p className="text-gray-500 mt-10">
              If you are looking for a full-service construction company, look <br />
              to Createx Construction Bureau. We are doing our best <br />
              to be a partner for all of your construction needs.
            </p>
          </div>
        </div>
      </header>

      <div className="flex sm:px-[0px] px-[30px] flex-col sm:flex-row items-center justify-center gap-20 mt-20">
        <div className='bg-gray-300 w-[400px] sm:w-[600px] h-[400px]'>
          
        </div>
        <div>
          <p className="text-3xl font-bold">Construction</p>
          <p className="text-gray-500 mt-10">
            Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur <br />
            vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut <br />
            augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget <br />
            aliquam dignissim ut vestibulum.
          </p>
          <Link
            href={`/blog/${1}`}
            className="text-[#FF5A30] border-[#FF5A30] border-2 py-[5px] px-[25px] rounded-md mt-10 inline-block hover:text-[#FF5A30]"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="flex sm:px-[0px] px-[30px] flex-col sm:flex-row items-center justify-center gap-32 mt-20">
        <div>
          <p className="text-3xl font-bold">Project Development</p>
          <p className="text-gray-500 mt-10">
            Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est <br />
            nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum <br />
            blandit massa vitae amet felis eget.
          </p>
          <Link
            href={`/blog/${2}`}
            className="text-[#FF5A30] border-[#FF5A30] border-2 py-[5px] px-[25px] rounded-md mt-10 inline-block hover:text-[#FF5A30]"
          >
            Learn more
          </Link>
        </div>
        <div className='bg-gray-300  w-[400px] sm:w-[600px] h-[400px]'>
          
        </div>
      </div>

      <div className="flex flex-col sm:px-[0px] px-[30px] sm:flex-row items-center justify-center gap-28 mt-20">
      <div className='bg-gray-300  w-[400px] sm:w-[600px] h-[400px]'>
          
          </div>
        <div>
          <p className="text-3xl font-bold">Interior Design</p>
          <p className="text-gray-500 mt-10">
            Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis <br />
            accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. <br />
            Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet <br />
            donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus <br />
            faucibus eget elementum pretium.
          </p>
          <Link
            href={`/blog/${3}`}
            className="text-[#FF5A30] border-[#FF5A30] border-2 py-[5px] px-[25px] rounded-md mt-10 inline-block hover:text-[#FF5A30]"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="flex sm:px-[0px] px-[30px] flex-col pb-[60px] sm:flex-row items-center justify-center gap-32 mt-20">
        <div>
          <p className="text-3xl font-bold">Repairs</p>
          <p className="text-gray-500 mt-10">
            Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor <br />
            gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec <br />
            urna ultrices urna.
          </p>
          <Link
            href={`/blog/${4}`}
            className="text-[#FF5A30] border-[#FF5A30] border-2 py-[5px] px-[25px] rounded-md mt-10 inline-block hover:text-[#FF5A30]"
          >
            Learn more
          </Link>
        </div>
        <div className='bg-gray-300  w-[400px] sm:w-[600px] h-[400px]'>
          
        </div>
      </div>

      <footer className="bg-[#1E212C]">
        <section className="bg-gray-300 py-[60px]">
          <aside className="w-[95%] sm:w-[75%] justify-end flex m-auto">
            <div className="bg-white sm:w-[40%] py-[40px] px-[30px] flex flex-col gap-[20px]">
              <p className="text-[#1E212C] text-[28px]">A quick way to discuss details</p>
              <div>
                <label htmlFor="name">Name*</label> <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="py-[10px] px-[20px] bg-[#F4F5F6] w-[100%] rounded-[5px]"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone*</label> <br />
                <input
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                  className="py-[10px] px-[20px] bg-[#F4F5F6] w-[100%] rounded-[5px]"
                />
              </div>
              <div>
                <label htmlFor="email">Email*</label> <br />
                <input
                  type="text"
                  id="email"
                  placeholder="Your working email"
                  className="py-[10px] px-[20px] bg-[#F4F5F6] w-[100%] rounded-[5px]"
                />
              </div>
              <div>
                <label htmlFor="message">Message*</label> <br />
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="py-[10px] w-[100%] px-[20px] bg-[#F4F5F6] rounded-[5px]"
                ></textarea>
              </div>
              <div>
                <input type="checkbox" className="bg-[#FF5A30]" />
                <span className="text-[#424551] text-[14px]">
                  I agree to receive communications from Createx <br />
                  Construction Bureau.
                </span>
              </div>
              <div className="flex justify-center">
                <button className="w-[200px] py-[10px] text-white bg-[#FF5A30] rounded-[10px]">Send message</button>
              </div>
            </div>
          </aside>
        </section>

        <section className="text-white w-[75%] py-[70px] m-auto">
          <aside className="flex flex-col sm:flex-row gap-[50px] sm:gap-[0px] justify-between">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col sm:flex-row items-start gap-[40px] sm:gap-[0px] justify-between">
              <div className='bg-gray-300 w-[150px] h-[50px]'></div>
              <div className='bg-gray-300 w-[150px] h-[50px]'></div>
              </div>
              <p className="text-[14px]">
                Createx Construction Bureau has been successfully operating in the USA <br />
                construction market since 2000. We are proud to offer you quality <br />
                construction and exemplary service. Our mission is to set the highest <br />
                standards for construction sphere.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[24px] font-semibold">Let&apos;s stay in touch</p>
              <div className="bg-[#393C46] flex flex-col sm:flex-row justify-between rounded-[10px]">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="bg-[#393C46] w-[300px] rounded-[10px] outline-none px-[20px]"
                />
                <button className="uppercase bg-[#FF5A30] text-white py-[10px] px-[30px] rounded-[10px]">
                  subscribe
                </button>
              </div>
              <p className="text-[12px]">
                *Subscribe to our newsletter to receive communications and early updates from Createx <br />
                Construction Bureau.
              </p>
            </div>
          </aside>
        </section>

        <section className="text-white w-[55%] pb-[40px] ml-[12%] flex flex-col sm:flex-row gap-[40px] sm:gap-[0px] justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">HEAD OFFICE</p>
            <p>
              {" "}
              Address: <span>8502 Preston Rd. Inglewood, New York</span>{" "}
            </p>
            <p>
              {" "}
              Call: <span>(405) 555-0128</span>{" "}
            </p>
            <p>
              {" "}
              Email: <span>hello@createx.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">WHO WE ARE</p>
            <p>About Us</p>
            <p>Available Positions</p>
            <p>Contacts</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[16px] uppercase tracking-[1px]">OUR EXPERIENCE</p>
            <p>Services</p>
            <p>Work</p>
            <p>News</p>
          </div>
        </section>

        <section className="w-[75%] py-[40px] text-white m-auto flex flex-col gap-[40px] sm:gap-[0px] sm:flex-row justify-between sm:items-center">
          <p>© All rights reserved. Made with love by Createx Studio </p>
          <div className="flex items-end gap-[10px]">
            <p>GO TO TOP</p>
            <div className='bg-gray-300 w-[150px] h-[30px]'></div>
          </div>
        </section>
      </footer>

    </div>
  )
}
