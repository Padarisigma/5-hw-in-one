"use client"
import img2 from '../app/assets/images-1.jpg'
import Image from 'next/image'
import image2 from '../app/assets/img-5.png'
import image3 from '../app/assets/img-6.png'
import image4 from '../app/assets/IMAGE (8).png'
import image5 from '../app/assets/IMAGE (9).png'
import image6 from '../app/assets/IMAGE (10).png'
import image7 from '../app/assets/image.png'
import image8 from '../app/assets/IMAGE (13).png'
import image9 from '../app/assets/IMAGE (14).png'
import frame from '../app/assets/Frame (3).png'
import Link from 'next/link'

import '../app/globals.css'

// import required modules
const page = () => {
	return (
		<div>
			<header id='backgroundImage' className='w-full pt-[50px]  h-[600px]'>
				<nav className=''>
					<ul className='hidden w-[80%] m-auto sm:flex uppercase gap-[100px] cursor-pointer items-center justify-center text-[20px] text-[white]'>
						<li className='text-[orange]'>hw1</li>
						<li><Link href={'/blog'} className='hover:underline'>Hw2</Link></li>
						<li><Link href={'/about'} className='hover:underline'>Hw3</Link></li>
						<li><Link href={'/contact'} className='hover:underline'>Hw4</Link></li>
						<li>hw5</li>
					</ul>
				</nav>
				<section className='flex flex-col sm:flex-row  sm:gap-[50px] items-center w-[45%] m-auto mt-[100px]'>
					<p className='text-[68px] font-bold text-[#fff]'>Lasting</p>
					<p className='text-[68px] font-bold text-[#fff]'>memories</p>
				</section>
			</header>

			
			<main>
				<section className='flex flex-col sm:flex-row  select-none gap-[40px] sm:gap-[185px] items-center w-[90%] py-[20px] m-auto'>
					<aside className=''>
						<h1 className='text-[68px] text-[black]'>Making</h1>
						<h1 className='text-[68px] text-[black]'>tables</h1>
						<h1 className='text-[68px] text-[black]'>heroes</h1>
						<p className='text-[19px] text-[black] sm:w-[500px]'>
							Chairs, cabinets, but especially tables by Joli are durable
							products, designed to last and to be used intensively.
						</p>
						<div className='flex gap-[10px] items-center py-[20px]'>
							<button className='text-[19px] text-[#20201F] border-[2px] px-[30px] py-[10px] bordfer-[#20201F] rounded-3xl cursor-pointer'>
								About us
							</button>
							<p className='text-[19px] text-[#20201F]'>About us</p>
						</div>
					</aside>
					<img src={img2.src} className='w-[650px] select-none' alt='image' />
				</section>
				<section className='bg-[#E5E2DE] py-[100px]'>
					<aside className='flex gap-[20px] items-center w-[90%] m-auto'>
						<aside className=''>
							<p className='text-[68px] text-[#20201F]'>Our</p>
							<p className='text-[68px] text-[#20201F]'>collections</p>
							<div className='flex gap-[10px] items-center flex-wrap w-[90%]'>
								<p className='text-[#20201F] text-[19px]'>Central</p>
								<p className='text-[#20201F] text-[19px]'>Olivo</p>
								<p className='text-[#20201F] text-[19px]'>Morisot</p>
								<p className='text-[#20201F] text-[19px]'>Curve</p>
								<p className='text-[#20201F] text-[19px]'>Wire</p>
								<p className='text-[#20201F] text-[19px]'>Marguerite</p>
								<p className='text-[#20201F] text-[19px]'>Fizz</p>
								<p className='text-[#20201F] text-[19px]'>Rafael</p>
								<p className='text-[#20201F] text-[19px]'>Chagall</p>
							</div>
							<div className='py-[50px]'>
								<Image src={image3} alt='image3' width={600} height={300} />
								<span className='text-[#20201F] pr-[200px] text-[16px]'>
									ready to become the centerpiece of your home
								</span>
								<span className='text-[#20201F] text-[30px] font-bold'>→</span>
							</div>
						</aside>
						<aside className='hidden sm:block'>
							<Image
								src={image2}
								className='ml-[118px]'
								alt='image2'
								width={600}
								height={300}
							/>
							<span className='text-[#20201F] ml-[118px] text-[16px] font-bold'>
								Believe us, this will be a real eye-catcher
							</span>
						</aside>
					</aside>
				</section>
				<section className='flex px-[40px] sm:px-[0px] gap-[20px] justify-between items-center w-[100%] m-auto'>
					<aside className='w-[420px] sm:ml-[200px]'>
						<h2 className='text-[68px] text-[#20201F]'>
							Find a <br /> dealer
						</h2>
						<p className='text-[#20201F] text-[19px]'>
							We work together with dealers in 19 countries, all over the world.
							Find out which one is closest to you.
						</p>
						<input
							type='text'
							className='border-[#8B8B8B] border-[2px] rounded-lg text-[#8B8B8B] px-[20px] py-[10px]'
							placeholder='Your location'
						/>
						<br />
						<button className='text-[#20201F] border-[#20201F] border-[2px] rounded-3xl my-[20px] px-[30px] py-[10px]'>
							Search
						</button>
					</aside>
					<Image src={image4} className='hidden sm:block' alt='image4' />
				</section>
				<section className='hidden sm:block min-h-screen bg-[#20201F] text-white'>
					<div className='container mx-auto px-4 py-12'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
							<div className='hidden sm:block  relative h-[500px] md:h-[600px] overflow-hidden rounded-md'>
								<Image
									src={image5}
									alt='Indoor meeting space with oval table'
									fill
									className='object-cover hidden sm:block'
								/>
							</div>

							<div className='flex flex-col absolute z-10 sm:left-90 items-center justify-center space-y-8 text-center'>
								<h1 className='text-6xl md:text-7xl font-light tracking-wide'>
									terrace
								</h1>
								<h2 className='text-[68px] '>ceremonies & meetings</h2>
								<Link
									href='#inspire'
									className='mt-16 border border-white rounded-full px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300'
								>
									inspire me
								</Link>
							</div>

							<div className='hidden sm:flex flex-col relative left-100 space-y-8'>
								<div className='relative left-10 h-[250px] md:h-[300px] overflow-hidden rounded-md'>
									<Image
										src={image6}
										alt='Outdoor terrace with lights'
										fill
										className='object-cover hidden sm:block'
									/>
								</div>
								<div className='relative top-26 h-[150px] md:h-[150px] overflow-hidden rounded-md'>
									<Image
										src={image7}
										alt='Indoor meeting space with windows'
										fill
										className='object-cover hidden sm:block'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='w-[370px] py-[50px] text-center m-auto'>
					<p className='text-[49px] text-[#20201F]'>
						Joli manages to offer designs that are both timelessly modern and
						trendy
					</p>
					<Link
						href='#inspire'
						className='mt-16 border border-black text-[black] my-[20px]  rounded-full px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors duration-300'
					>
						About us
					</Link>
				</section>
				<section className='flex flex-col sm:flex-row  gap-[20px] justify-between items-center  sm:w-[100%] m-auto'>
					<Image src={image8} alt='image4' />
					<aside className='sm:w-[420px] sm:px-0  px-[20px] sm:mr-[200px]'>
						<h2 className='text-[68px] text-[#20201F]'>
							Become a <br /> dealer
						</h2>
						<p className='text-[#20201F] text-[19px]'>
							Do you want to become a Joli retailer? Please submit the following
							form and we will contact you!
						</p>
						<br />
						<button className='text-[#20201F] border-[#20201F] border-[2px] rounded-3xl my-[20px] px-[30px] py-[10px]'>
							Learn more
						</button>
					</aside>
				</section>
				<section className='flex gap-[20px] justify-between items-center w-[100%] m-auto'>
					<Image src={image9} alt='image8' />
					<div className=''></div>
				</section>
				<section className='bg-[#E5E2DE] py-[100px]'>
					<aside className='flex flex-col sm:flex-row  gap-[10px] w-[90%] m-auto justify-between'>
						<aside className=''>
							<p className='text-[30px] text-[#20201F]'>Request our</p>
							<p className='text-[30px] text-[#20201F]'>2022 catalogue.</p>
						</aside>
						<aside className=''>
							<p className='text-[19px] text-[#20201F]'>Email address *</p>
							<input
								type='text'
								className='border-[2px] border-[#000000] rounded-lg py-[10px] px-[20px] my-[20px]'
							/>
							<div className='text-[19px] pl-[30px] px-[10px] rounded-lg py-[10px] text-[#20201f] border-[#20201f] border'>
								<p className=''>
									I agree with the Privacy & Cookie Policy of Joli
								</p>
							</div>
						</aside>
						<aside className=''>
							<button className='text-[#20201F] border-[#20201F] border-[2px] rounded-3xl my-[20px] px-[30px] py-[10px]'>
								send
							</button>
						</aside>
					</aside>
				</section>
			</main>
			<footer className='bg-[#1a1a1a] text-white py-12 px-6'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						
						<div className='flex items-start'>
							<Link href='/' className='text-2xl font-light'>
								<Image src={frame} alt='logo' />
							</Link>
						</div>

						
						<div className='space-y-4'>
							<h3 className='text-sm font-normal mb-4'>collections</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/collections/wire'
										className='text-sm hover:underline'
									>
										Wire
									</Link>
								</li>
								<li>
									<Link
										href='/collections/curve'
										className='text-sm hover:underline'
									>
										Curve
									</Link>
								</li>
								<li>
									<Link
										href='/collections/fizz'
										className='text-sm hover:underline'
									>
										Fizz
									</Link>
								</li>
								<li>
									<Link
										href='/collections/marguerite'
										className='text-sm hover:underline'
									>
										Marguerite
									</Link>
								</li>
							</ul>
						</div>

						
						<div className='space-y-4'>
							<h3 className='text-sm font-normal mb-4'>products</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/products/tables'
										className='text-sm hover:underline'
									>
										Tables
									</Link>
								</li>
								<li>
									<Link
										href='/products/chairs'
										className='text-sm hover:underline'
									>
										Chairs
									</Link>
								</li>
								<li>
									<Link
										href='/products/cabinets'
										className='text-sm hover:underline'
									>
										Cabinets
									</Link>
								</li>
								<li>
									<Link
										href='/products/accessories'
										className='text-sm hover:underline'
									>
										Accessories
									</Link>
								</li>
							</ul>
						</div>

						
						<div className='space-y-4'>
							<h3 className='text-sm font-normal mb-4'>inspiration</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/inspiration/joli-days'
										className='text-sm hover:underline'
									>
										Joli Days 2022
									</Link>
								</li>
								<li>
									<Link
										href='/inspiration/terrace'
										className='text-sm hover:underline'
									>
										Terrace
									</Link>
								</li>
								<li>
									<Link
										href='/inspiration/ceremonies'
										className='text-sm hover:underline'
									>
										Ceremonies
									</Link>
								</li>
								<li>
									<Link
										href='/inspiration/meetings'
										className='text-sm hover:underline'
									>
										& Meetings
									</Link>
								</li>
							</ul>
						</div>

						
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div className='space-y-4'>
								<h3 className='text-sm font-normal mb-4'>about us</h3>
								<ul className='space-y-2'>
									<li>
										<Link
											href='/about/materials'
											className='text-sm hover:underline'
										>
											Materials
										</Link>
									</li>
									<li>
										<Link
											href='/about/find-dealer'
											className='text-sm hover:underline'
										>
											Find a dealer
										</Link>
									</li>
									<li>
										<Link
											href='/about/professionals'
											className='text-sm hover:underline'
										>
											Professionals
										</Link>
									</li>
									<li>
										<Link
											href='/about/news'
											className='text-sm hover:underline'
										>
											News
										</Link>
									</li>
								</ul>
							</div>

							<div className='space-y-4'>
								<h3 className='text-sm font-normal mb-4'>contact</h3>
								<ul className='space-y-2'>
									<li className='text-sm'>Industrielaan 5</li>
									<li className='text-sm'>8520 Kortrijk</li>
									<li>
										<Link
											href='mailto:info@joli.be'
											className='text-sm hover:underline'
										>
											info@joli.be
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					
					<div className='mt-12 flex flex-col md:flex-row justify-between items-center'>
						<div className='flex space-x-8 mb-4 md:mb-0'>
							<Link href='/privacy' className='text-xs hover:underline'>
								Privacy & Cookie Policy
							</Link>
							<Link href='/disclaimer' className='text-xs hover:underline'>
								Disclaimer
							</Link>
						</div>

						<div className='text-xs'>made by skinn</div>

						<div className='flex space-x-4 mt-4 md:mt-0'>
							<Link
								href='https://facebook.com'
								aria-label='Facebook'
								className='hover:text-gray-300'
							>
							</Link>
							<Link
								href='https://instagram.com'
								aria-label='Instagram'
								className='hover:text-gray-300'
							>
							</Link>
							<Link
								href='https://pinterest.com'
								aria-label='Pinterest'
								className='hover:text-gray-300'
							>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default page